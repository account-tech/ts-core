import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../.gen/account-protocol/account/functions";
import * as intents from "../../../.gen/account-protocol/intents/functions";
import * as owned from "../../../.gen/account-protocol/owned/functions";
import * as ownedIntents from "../../../.gen/account-actions/owned-intents/functions";
import * as transfer from "../../../.gen/account-actions/transfer/functions";
import * as vesting from "../../../.gen/account-actions/vesting/functions";
import * as vault from "../../../.gen/account-actions/vault/functions";
import { WithdrawAction } from "../../../.gen/account-protocol/owned/structs";
import { TransferAction } from "../../../.gen/account-actions/transfer/structs";
import { VestAction } from "../../../.gen/account-actions/vesting/structs";
import { DepositAction } from "../../../.gen/account-actions/vault/structs";
import { phantom } from "../../../.gen/_framework/reified";

import { ActionsIntentTypes, WithdrawAndTransferArgs, WithdrawAndTransferToVaultArgs, WithdrawAndVestArgs } from "../types";
import { Intent } from "../intent";
import { CLOCK } from "../../../types";
export class WithdrawAndTransferToVaultIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransferToVault;
    declare args: WithdrawAndTransferToVaultArgs;
    // TODO: get object info from ./objects/owned.ts

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[1].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            coinId: WithdrawAction.fromFieldsWithTypes(actions[0]).objectId,
            coinAmount: DepositAction.fromFieldsWithTypes(phantom(coinType), actions[1]).amount,
            vaultName: DepositAction.fromFieldsWithTypes(phantom(coinType), actions[1]).name,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: WithdrawAndTransferToVaultArgs,
    ): TransactionResult {
        return ownedIntents.requestWithdrawAndTransferToVault(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
                auth,
                account,
                params,
                outcome,
                coinId: actionArgs.coinId,
                coinAmount: actionArgs.coinAmount,
                vaultName: actionArgs.vaultName,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ): TransactionResult {
        return ownedIntents.executeWithdrawAndTransferToVault(
            tx,
            [...accountGenerics, this.args!.coinType],
            {
                executable,
                account: this.account!,
                receiving: this.args!.coinId,
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
        owned.deleteWithdraw(
            tx,
            accountGenerics[0],
            {
                expired,
                account
            }
        );
        vault.deleteDeposit(
            tx,
            this.args!.coinType,
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
        owned.deleteWithdraw(
            tx,
            accountGenerics[0],
            {
                expired,
                account
            }
        );
        vault.deleteDeposit(
            tx,
            this.args!.coinType,
            expired
        );
        return intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}

export class WithdrawAndTransferIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransfer;
    declare args: WithdrawAndTransferArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        this.args = {
            transfers: Array.from({ length: actions.length / 2 }, (_, i) => ({
                objectId: WithdrawAction.fromFieldsWithTypes(actions[i * 2]).objectId,
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
        actionArgs: WithdrawAndTransferArgs,
    ): TransactionResult {
        return ownedIntents.requestWithdrawAndTransfer(
            tx,
            accountGenerics,
            {
                auth,
                account,
                params,
                outcome,
                objectIds: actionArgs.transfers.map(transfer => transfer.objectId),
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
            result = ownedIntents.executeWithdrawAndTransfer(
                tx,
                [...accountGenerics, ""], // TODO: get object type
                {
                    executable,
                    account: this.account!,
                    receiving: this.args!.transfers[i].objectId,
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
            owned.deleteWithdraw(
                tx,
                accountGenerics[0],
                {
                    expired,
                    account
                }
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
        this.args.transfers.forEach(_ => {
            owned.deleteWithdraw(
                tx,
                accountGenerics[0],
                {
                    expired,
                    account
                }
            );
            transfer.deleteTransfer(
                tx,
                expired
            );
        });
        return intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}

export class WithdrawAndVestIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndVest;
    declare args: WithdrawAndVestArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        this.args = {
            coinId: WithdrawAction.fromFieldsWithTypes(actions[0]).objectId,
            start: VestAction.fromFieldsWithTypes(actions[1]).startTimestamp,
            end: VestAction.fromFieldsWithTypes(actions[1]).endTimestamp,
            recipient: VestAction.fromFieldsWithTypes(actions[1]).recipient,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: WithdrawAndVestArgs,
    ): TransactionResult {
        return ownedIntents.requestWithdrawAndVest(
            tx,
            accountGenerics,
            {
                auth,
                account,
                params,
                outcome,
                coinId: actionArgs.coinId,
                startTimestamp: actionArgs.start,
                endTimestamp: actionArgs.end,
                recipient: actionArgs.recipient,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ): TransactionResult {
        return ownedIntents.executeWithdrawAndVest(
            tx,
            [...accountGenerics, ""], // TODO: get CoinType
            {
                executable,
                account: this.account!,
                receiving: this.args!.coinId,
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
        owned.deleteWithdraw(
            tx,
            accountGenerics[0],
            {
                expired,
                account
            }
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
        owned.deleteWithdraw(
            tx,
            accountGenerics[0],
            {
                expired,
                account
            }
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