import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";
import { CoinMetadata } from "@mysten/sui/client";
import { getCoinMeta } from "@polymedia/coinmeta";
import * as currency from "../../../packages/account_actions/currency";
import * as currencyIntent from "../../../packages/account_actions/currency_intents";
import * as owned from "../../../packages/account_protocol/owned";
import * as transfer from "../../../packages/account_actions/transfer";
import * as vesting from "../../../packages/account_actions/vesting";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import { MintAction, BurnAction, UpdateAction, DisableAction } from "../../../packages/account_actions/currency";
import { TransferAction } from "../../../packages/account_actions/transfer";
import { VestAction } from "../../../packages/account_actions/vesting";

import { UpdateMetadataArgs, WithdrawAndBurnArgs, DisableRulesArgs, MintAndTransferArgs, MintAndVestArgs, ActionsIntentTypes } from "../types";
import { Intent } from "../intent";

export class DisableRulesIntent extends Intent {
    static type = ActionsIntentTypes.DisableRules;
    declare args: DisableRulesArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        const coinType = actions[0].type.match(/<([^>]*)>/)[1];
        const disableAction = DisableAction.fromBase64(actions[0]);

        this.args = {
            coinType,
            mint: disableAction.mint,
            burn: disableAction.burn,
            updateSymbol: disableAction.update_symbol,
            updateName: disableAction.update_name,
            updateDescription: disableAction.update_description,
            updateIcon: disableAction.update_icon,
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
    ): TransactionResult {
        return tx.add(
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
        const updateAction = UpdateAction.fromBase64(actions[0]); // CoinType, UpdateAction

        this.args = {
            coinType,
            newName: updateAction.name,
            newSymbol: updateAction.symbol,
            newDescription: updateAction.description,
            newIconUrl: updateAction.icon_url,
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
    ): TransactionResult {
        if (!this.metadata?.id) {
            throw new Error('Metadata not found for the Update intent');
        }

        return tx.add(
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
                amount: BigInt(MintAction.fromBase64(actions[i * 2]).amount),
                recipient: TransferAction.fromBase64(actions[i * 2 + 1]).recipient,
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
    ): TransactionResult {
        let result;
        for (let i = 0; i < this.args!.transfers.length; i++) {
            result = tx.add(
                currencyIntent.executeMintAndTransfer({
                    typeArguments: [...accountGenerics, this.args!.coinType],
                    arguments: {
                        executable,
                        account: this.account,
                    }
                })
            );
        }
        return result!;
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
            amount: BigInt(MintAction.fromBase64(actions[0]).amount),
            recipient: VestAction.fromBase64(actions[1]).recipient,
            start: BigInt(VestAction.fromBase64(actions[1]).start_timestamp),
            end: BigInt(VestAction.fromBase64(actions[1]).end_timestamp),
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
    ): TransactionResult {
        return tx.add(
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
    coinId?: string;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        // const withdrawAction = WithdrawCoinAction.fromBase64(actions[0]);
        const coinType = actions[1].type.match(/<([^>]*)>/)[1];
        const burnAction = BurnAction.fromBase64(actions[1]);

        this.args = {
            coinType,
            amount: BigInt(burnAction.amount),
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

    setCoinId(coinId: string) {
        this.coinId = coinId;
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ): TransactionResult {
        if (!this.coinId) {
            throw new Error('Split and set the coin with the right amount first');
        }

        return tx.add(
            currencyIntent.executeWithdrawAndBurn({
                typeArguments: [...accountGenerics, this.args!.coinType],
                arguments: {
                    executable,
                    account: this.account,
                    receiving: this.coinId,
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