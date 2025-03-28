import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../.gen/account-protocol/account/functions";
import * as intents from "../../../.gen/account-protocol/intents/functions";
import * as vault from "../../../.gen/account-actions/vault/functions";
import * as vaultIntents from "../../../.gen/account-actions/vault-intents/functions";
import * as transfer from "../../../.gen/account-actions/transfer/functions";
import * as vesting from "../../../.gen/account-actions/vesting/functions";
import { SpendAction } from "../../../.gen/account-actions/vault/structs";
import { TransferAction } from "../../../.gen/account-actions/transfer/structs";
import { VestAction } from "../../../.gen/account-actions/vesting/structs";

import { ActionsIntentTypes, SpendAndTransferArgs, SpendAndVestArgs } from "../types";
import { Intent } from "../intent";
import { CLOCK } from "../../../types";

export class SpendAndTransferIntent extends Intent {
    static type = ActionsIntentTypes.SpendAndTransfer;  
    declare args: SpendAndTransferArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            treasuryName: SpendAction.fromFieldsWithTypes(coinType, actions[0]).name,
            transfers: Array.from({ length: actions.length / 2 }, (_, i) => ({
                amount: SpendAction.fromFieldsWithTypes(coinType, actions[i * 2]).amount,
                recipient: TransferAction.fromFieldsWithTypes(actions[i * 2 + 1]).recipient,
            })),
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: SpendAndTransferArgs,
    ): TransactionResult {
        return vaultIntents.requestSpendAndTransfer(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
                auth,
                account,
                params,
                outcome,
                vaultName: actionArgs.treasuryName,
                amounts: actionArgs.transfers.map(transfer => BigInt(transfer.amount)),
                recipients: actionArgs.transfers.map(transfer => transfer.recipient),
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ): TransactionResult {
        let result;
        for (let i = 0; i < this.args!.transfers.length; i++) {
            result = vaultIntents.executeSpendAndTransfer(
                tx,
                [...accountGenerics, this.args!.coinType],
                {
                    executable,
                    account: this.account!,
                }
            );
        }
        return result!;
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        account: TransactionObjectInput,
        key: string,
    ): TransactionResult {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account,
                key,
            }
        );
        for (let i = 0; i < this.args!.transfers.length; i++) {
            vault.deleteSpend(
                tx,
                this.args!.coinType,
                expired
            );
            transfer.deleteTransfer(
                tx,
                expired
            );
        }
        return intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        account: TransactionObjectInput,
        key: string,
    ): TransactionResult {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account,
                key,
                clock: CLOCK,
            }
        );
        for (let i = 0; i < this.args!.transfers.length; i++) {
            vault.deleteSpend(
                tx,
                this.args!.coinType,
                expired
            );
            transfer.deleteTransfer(
                tx,
                expired
            );
        }
        return intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}

export class SpendAndVestIntent extends Intent {
    static type = ActionsIntentTypes.SpendAndVest;
    declare args: SpendAndVestArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        const spendAction = SpendAction.fromFieldsWithTypes(coinType, actions[0]);
        const vestAction = VestAction.fromFieldsWithTypes(actions[1]);

        this.args = {
            treasuryName: spendAction.name,
            coinType,
            amount: spendAction.amount,
            start: vestAction.startTimestamp,
            end: vestAction.endTimestamp,
            recipient: vestAction.recipient,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: SpendAndVestArgs,
    ): TransactionResult {
        return vaultIntents.requestSpendAndVest(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
                auth,
                account,
                params,
                outcome,
                vaultName: actionArgs.treasuryName,
                coinAmount: BigInt(actionArgs.amount),
                startTimestamp: BigInt(actionArgs.start),
                endTimestamp: BigInt(actionArgs.end),
                recipient: actionArgs.recipient,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ): TransactionResult {
        return vaultIntents.executeSpendAndVest(
            tx,
            [...accountGenerics, this.args!.coinType],
            {
                executable,
                account: this.account!,
            }
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        account: TransactionObjectInput,
        key: string,
    ): TransactionResult {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account,
                key,
            }
        );
        vault.deleteSpend(
            tx,
            this.args!.coinType,
            expired
        );
        transfer.deleteTransfer(
            tx,
            expired
        );
        return intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        account: TransactionObjectInput,
        key: string,
    ): TransactionResult {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account,
                key,
                clock: CLOCK,
            }
        );
        vault.deleteSpend(
            tx,
            this.args!.coinType,
            expired
        );
        vesting.deleteVest(
            tx,
            expired
        );
        return intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}