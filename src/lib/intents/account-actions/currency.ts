import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { CoinMetadata } from "@mysten/sui/client";
import { getCoinMeta } from "@polymedia/coinmeta";
import * as currency from "../../../packages/account_actions/currency";
import * as currencyIntent from "../../../packages/account_actions/currency_intents";
import * as owned from "../../../packages/account_protocol/owned";
import * as transfer from "../../../packages/account_actions/transfer";
import * as vesting from "../../../packages/account_actions/vesting";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";

import { UpdateMetadataArgs, WithdrawAndBurnArgs, DisableRulesArgs, MintAndTransferArgs, MintAndVestArgs, ActionsIntentTypes } from "../types";
import { Intent } from "../intent";
import { findCoinsToMerge } from "src/lib/commands/owned";

export class DisableRulesIntent extends Intent {
    static type = ActionsIntentTypes.DisableRules;
    declare args: DisableRulesArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            mint: actions[0].fields.mint,
            burn: actions[0].fields.burn,
            updateSymbol: actions[0].fields.update_symbol,
            updateName: actions[0].fields.update_name,
            updateDescription: actions[0].fields.update_description,
            updateIcon: actions[0].fields.update_icon,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: DisableRulesArgs,
    ) {
        tx.add(
            currencyIntent.requestDisableRules({
                typeArguments: [...accountGenerics, actionArgs.coinType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    mint: actionArgs.mint,
                    burn: actionArgs.burn,
                    updateSymbol: actionArgs.updateSymbol,
                    updateName: actionArgs.updateName,
                    updateDescription: actionArgs.updateDescription,
                    updateIcon: actionArgs.updateIcon,
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        tx.add(
            currencyIntent.executeDisableRules({
                typeArguments: [...accountGenerics, this.args!.coinType],
                arguments: {
                    executable,
                    account: this.account,
                }
            })
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.destroyEmptyIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            currency.deleteDisable({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.deleteExpiredIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            currency.deleteDisable({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}

export class UpdateMetadataIntent extends Intent {
    static type = ActionsIntentTypes.UpdateMetadata;
    declare args: UpdateMetadataArgs;
    metadata?: CoinMetadata;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            newName: actions[0].fields.name,
            newSymbol: actions[0].fields.symbol,
            newDescription: actions[0].fields.description,
            newIconUrl: actions[0].fields.icon_url,
        };

        const metadata = await getCoinMeta(this.client, this.args.coinType);
        if (!metadata) {
            throw new Error(`Metadata not found for coin type: ${this.args.coinType}`);
        }
        this.metadata = metadata;
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: UpdateMetadataArgs,
    ) {
        tx.add(
            currencyIntent.requestUpdateMetadata({
                typeArguments: [...accountGenerics, actionArgs.coinType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    mdName: actionArgs.newName,
                    mdSymbol: actionArgs.newSymbol,
                    mdDescription: actionArgs.newDescription,
                    mdIconUrl: actionArgs.newIconUrl,
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        if (!this.metadata?.id) {
            throw new Error('Metadata not found for the Update intent');
        }

        tx.add(
            currencyIntent.executeUpdateMetadata({
                typeArguments: [...accountGenerics, this.args!.coinType],
                arguments: {
                    executable,
                    account: this.account,
                    metadata: this.metadata?.id!,
                }
            })
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.destroyEmptyIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            currency.deleteUpdate({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.deleteExpiredIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            currency.deleteUpdate({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}

export class MintAndTransferIntent extends Intent {
    static type = ActionsIntentTypes.MintAndTransfer;
    declare args: MintAndTransferArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            transfers: Array.from({ length: actions.length / 2 }, (_, i) => ({
                amount: BigInt(actions[i * 2].fields.amount),
                recipient: actions[i * 2 + 1].fields.recipient,
            })),
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: MintAndTransferArgs,
    ) {
        tx.add(
            currencyIntent.requestMintAndTransfer({
                typeArguments: [...accountGenerics, actionArgs.coinType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    amounts: actionArgs.transfers.map(transfer => BigInt(transfer.amount)),
                    recipients: actionArgs.transfers.map(transfer => transfer.recipient),
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        for (let i = 0; i < this.args!.transfers.length; i++) {
            tx.add(
                currencyIntent.executeMintAndTransfer({
                    typeArguments: [...accountGenerics, this.args!.coinType],
                    arguments: {
                        executable,
                        account: this.account,
                    }
                })
            );
        }
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.destroyEmptyIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        this.args.transfers.forEach(_ => {
            tx.add(
                currency.deleteMint({
                    typeArguments: [this.args!.coinType],
                    arguments: { expired }
                })
            );
            tx.add(
                transfer.deleteTransfer({
                    arguments: { expired }
                })
            );
        });
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.deleteExpiredIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        this.args.transfers.forEach(_ => {
            tx.add(
                currency.deleteMint({
                    typeArguments: [this.args!.coinType],
                    arguments: { expired }
                })
            );
            tx.add(
                transfer.deleteTransfer({
                    arguments: { expired }
                })
            );
        });
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}

export class MintAndVestIntent extends Intent {
    static type = ActionsIntentTypes.MintAndVest;
    declare args: MintAndVestArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            amount: BigInt(actions[0].fields.amount),
            recipient: actions[1].fields.recipient,
            start: BigInt(actions[1].fields.start_timestamp),
            end: BigInt(actions[1].fields.end_timestamp),
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: MintAndVestArgs,
    ) {
        tx.add(
            currencyIntent.requestMintAndVest({
                typeArguments: [...accountGenerics, actionArgs.coinType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    totalAmount: actionArgs.amount,
                    recipient: actionArgs.recipient,
                    startTimestamp: actionArgs.start,
                    endTimestamp: actionArgs.end,
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        tx.add(
            currencyIntent.executeMintAndVest({
                typeArguments: [...accountGenerics, this.args!.coinType],
                arguments: {
                    executable,
                    account: this.account,
                }
            })
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.destroyEmptyIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            currency.deleteMint({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            vesting.deleteVest({
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.deleteExpiredIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            currency.deleteMint({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            vesting.deleteVest({
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}

export class WithdrawAndBurnIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndBurn;
    declare args: WithdrawAndBurnArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[1].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            amount: BigInt(actions[1].fields.amount),
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawAndBurnArgs,
    ) {
        tx.add(
            currencyIntent.requestWithdrawAndBurn({
                typeArguments: [...accountGenerics, actionArgs.coinType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    amount: actionArgs.amount,
                }
            })
        );
    }

    async execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        const coins = await findCoinsToMerge(
            this.client, this.account, this.args!.coinType, this.args!.amount,
        );

        tx.add(
            currencyIntent.executeWithdrawAndBurn({
                typeArguments: [...accountGenerics, this.args!.coinType],
                arguments: {
                    executable,
                    account: this.account,
                    coins,
                }
            })
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.destroyEmptyIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            owned.deleteWithdrawCoin({
                typeArguments: [accountGenerics[0], this.args!.coinType],
                arguments: {
                    expired,
                    account: this.account,
                }
            })
        );
        tx.add(
            currency.deleteBurn({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.deleteExpiredIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            owned.deleteWithdrawCoin({
                typeArguments: [accountGenerics[0], this.args!.coinType],
                arguments: {
                    expired,
                    account: this.account,
                }
            })
        );
        tx.add(
            currency.deleteBurn({
                typeArguments: [this.args!.coinType],
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}