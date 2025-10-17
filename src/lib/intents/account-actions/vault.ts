import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import * as vault from "../../../packages/account_actions/vault";
import * as vaultIntents from "../../../packages/account_actions/vault_intents";
import * as transfer from "../../../packages/account_actions/transfer";
import * as vesting from "../../../packages/account_actions/vesting";
import { SpendAction } from "../../../packages/account_actions/vault";
import { TransferAction } from "../../../packages/account_actions/transfer";
import { VestAction } from "../../../packages/account_actions/vesting";

import { ActionsIntentTypes, SpendAndTransferArgs, SpendAndVestArgs } from "../types";
import { Intent } from "../intent";

export class SpendAndTransferIntent extends Intent {
    static type = ActionsIntentTypes.SpendAndTransfer;
    declare args: SpendAndTransferArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            vaultName: SpendAction.fromBase64(actions[0]).name,
            transfers: Array.from({ length: actions.length / 2 }, (_, i) => ({
                amount: BigInt(SpendAction.fromBase64(actions[i * 2]).amount),
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
        actionArgs: SpendAndTransferArgs,
    ) {
        tx.add(
            vaultIntents.requestSpendAndTransfer({
                typeArguments: [...accountGenerics, actionArgs.coinType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    vaultName: actionArgs.vaultName,
                    amounts: actionArgs.transfers.map(transfer => transfer.amount),
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
                vaultIntents.executeSpendAndTransfer({
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
        for (let i = 0; i < this.args!.transfers.length; i++) {
            tx.add(
                vault.deleteSpend({
                    typeArguments: [this.args!.coinType],
                    arguments: { expired }
                })
            );
            tx.add(
                transfer.deleteTransfer({
                    arguments: { expired }
                })
            );
        }
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
                vault.deleteSpend({
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

export class SpendAndVestIntent extends Intent {
    static type = ActionsIntentTypes.SpendAndVest;
    declare args: SpendAndVestArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        const spendAction = SpendAction.fromBase64(actions[0]);
        const vestAction = VestAction.fromBase64(actions[1]);

        this.args = {
            vaultName: spendAction.name,
            coinType,
            amount: BigInt(spendAction.amount),
            start: BigInt(vestAction.start_timestamp),
            end: BigInt(vestAction.end_timestamp),
            recipient: vestAction.recipient,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: SpendAndVestArgs,
    ) {
        tx.add(
            vaultIntents.requestSpendAndVest({
                typeArguments: [...accountGenerics, actionArgs.coinType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    vaultName: actionArgs.vaultName,
                    coinAmount: actionArgs.amount,
                    startTimestamp: actionArgs.start,
                    endTimestamp: actionArgs.end,
                    recipient: actionArgs.recipient,
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
            vaultIntents.executeSpendAndVest({
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
            vault.deleteSpend({
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
            vault.deleteSpend({
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