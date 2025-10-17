import { TransactionArgument } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import * as owned from "../../../packages/account_protocol/owned";
import * as ownedIntents from "../../../packages/account_actions/owned_intents";
import * as transfer from "../../../packages/account_actions/transfer";
import * as vesting from "../../../packages/account_actions/vesting";
import * as vault from "../../../packages/account_actions/vault";
import { WithdrawObjectAction, WithdrawCoinAction } from "../../../packages/account_protocol/owned";
import { TransferAction } from "../../../packages/account_actions/transfer";
import { VestAction } from "../../../packages/account_actions/vesting";
import { DepositAction } from "../../../packages/account_actions/vault";

import { ActionsIntentTypes, WithdrawObjectsAndTransferArgs, WithdrawCoinAndTransferArgs, WithdrawAndTransferToVaultArgs, WithdrawAndVestArgs } from "../types";
import { Intent } from "../intent";
import { Owned } from "../../objects/owned";

export class WithdrawAndTransferToVaultIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransferToVault;
    declare args: WithdrawAndTransferToVaultArgs;
    coinId?: string;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[1].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            coinAmount: BigInt(DepositAction.fromBase64(actions[1]).amount),
            vaultName: DepositAction.fromBase64(actions[1]).name,
        };
    }

    request(
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawAndTransferToVaultArgs,
    ) {
        ownedIntents.requestWithdrawAndTransferToVault({
            typeArguments: [...accountGenerics, actionArgs.coinType],
            arguments: {
                auth,
                account,
                params,
                outcome,
                coinAmount: actionArgs.coinAmount,
                vaultName: actionArgs.vaultName,
            }
        });
    }

    setCoinId(coinId: string) {
        this.coinId = coinId;
    }

    execute(
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        if (!this.coinId) {
            throw new Error("Coin ID not initialized");
        }
        ownedIntents.executeWithdrawAndTransferToVault({
            typeArguments: [...accountGenerics, this.args!.coinType],
            arguments: {
                executable,
                account: this.account,
                receiving: this.coinId as string,
            }
        });
    }

    clearEmpty(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        owned.deleteWithdrawCoin({
            typeArguments: [accountGenerics[0], this.args!.coinType],
            arguments: {
                expired,
                account: this.account,
            }
        });
        vault.deleteDeposit({
            typeArguments: [this.args!.coinType],
            arguments: { expired }
        });
        intents.destroyEmptyExpired(expired);
    }

    deleteExpired(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        owned.deleteWithdrawCoin({
            typeArguments: [accountGenerics[0], this.args!.coinType],
            arguments: {
                expired,
                account: this.account,
            }
        });
        vault.deleteDeposit({
            typeArguments: [this.args!.coinType],
            arguments: { expired }
        });
        intents.destroyEmptyExpired(expired);
    }
}

export class WithdrawAndTransferObjectIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransfer;
    declare args: WithdrawObjectsAndTransferArgs;
    typeById: Map<string, string> = new Map();

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        this.args = {
            transfers: Array.from({ length: actions.length / 2 }, (_, i) => ({
                objectId: WithdrawObjectAction.fromBase64(actions[i * 2]).object_id,
                recipient: TransferAction.fromBase64(actions[i * 2 + 1]).recipient,
            })),
        };
    }

    initTypeById(owned: Owned) {
        this.args.transfers.forEach(transfer => {
            this.typeById.set(transfer.objectId as string, owned.getTypeById(transfer.objectId as string)!);
        });
    }

    request(
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawObjectsAndTransferArgs,
    ) {
        ownedIntents.requestWithdrawObjectsAndTransfer({
            typeArguments: accountGenerics,
            arguments: {
                auth,
                account,
                params,
                outcome,
                objectIds: actionArgs.transfers.map(transfer => transfer.objectId),
                recipients: actionArgs.transfers.map(transfer => transfer.recipient),
            }
        });
    }

    execute(
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        if (this.typeById.size === 0) {
            throw new Error("Type by ID not initialized");
        }

        for (let i = 0; i < this.args!.transfers.length; i++) {
            const objectType = this.typeById.get(this.args!.transfers[i].objectId as string);
            if (!objectType) {
                throw new Error("Object type not found");
            }
            ownedIntents.executeWithdrawObjectAndTransfer({
                typeArguments: [...accountGenerics, objectType],
                arguments: {
                    executable,
                    account: this.account,
                    receiving: this.args!.transfers[i].objectId as string,
                }
            });
        }
    }

    clearEmpty(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        for (let i = 0; i < this.args!.transfers.length; i++) {
            owned.deleteWithdrawObject({
                typeArguments: [accountGenerics[0]],
                arguments: {
                    expired,
                    account: this.account,
                }
            });
            transfer.deleteTransfer(expired);
        }
        intents.destroyEmptyExpired(expired);
    }

    deleteExpired(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        this.args.transfers.forEach(_ => {
            owned.deleteWithdrawObject({
                typeArguments: [accountGenerics[0]],
                arguments: {
                    expired,
                    account: this.account,
                }
            });
            transfer.deleteTransfer(expired);
        });
        intents.destroyEmptyExpired(expired);
    }
}

export class WithdrawAndTransferCoinIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransfer;
    declare args: WithdrawCoinAndTransferArgs;
    coinIds?: string[];

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            transfers: Array.from({ length: actions.length / 2 }, (_, i) => ({
                amount: BigInt(WithdrawCoinAction.fromBase64(actions[i * 2]).coin_amount),
                recipient: TransferAction.fromBase64(actions[i * 2 + 1]).recipient,
            })),
        };
    }

    request(
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawCoinAndTransferArgs,
    ) {
        ownedIntents.requestWithdrawCoinAndTransfer({
            typeArguments: [...accountGenerics, actionArgs.coinType],
            arguments: {
                auth,
                account,
                params,
                outcome,
                coinAmounts: actionArgs.transfers.map(transfer => transfer.amount),
                recipients: actionArgs.transfers.map(transfer => transfer.recipient),
            }
        });
    }

    setCoinIds(coinIds: string[]) {
        this.coinIds = coinIds;
    }

    execute(
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        if (!this.coinIds) {
            throw new Error("Coin IDs not initialized");
        }
        for (let i = 0; i < this.args!.transfers.length; i++) {
            ownedIntents.executeWithdrawCoinAndTransfer({
                typeArguments: [...accountGenerics, this.args!.coinType],
                arguments: {
                    executable,
                    account: this.account,
                    receiving: this.coinIds![i],
                }
            });
        }
    }

    clearEmpty(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        for (let i = 0; i < this.args!.transfers.length; i++) {
            owned.deleteWithdrawCoin({
                typeArguments: [accountGenerics[0], this.args!.coinType],
                arguments: {
                    expired,
                    account: this.account,
                }
            });
            transfer.deleteTransfer(expired);
        }
        intents.destroyEmptyExpired(expired);
    }

    deleteExpired(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        this.args.transfers.forEach(_ => {
            owned.deleteWithdrawCoin({
                typeArguments: [accountGenerics[0], this.args!.coinType],
                arguments: {
                    expired,
                    account: this.account,
                }
            });
            transfer.deleteTransfer(expired);
        });
        intents.destroyEmptyExpired(expired);
    }
}

export class WithdrawAndVestIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndVest;
    declare args: WithdrawAndVestArgs;
    coinId?: string;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const coinType = actions[0].type.match(/<([^>]*)>/)[1];

        this.args = {
            coinType,
            coinAmount: BigInt(WithdrawCoinAction.fromBase64(actions[0]).coin_amount),
            start: BigInt(VestAction.fromBase64(actions[1]).start_timestamp),
            end: BigInt(VestAction.fromBase64(actions[1]).end_timestamp),
            recipient: VestAction.fromBase64(actions[1]).recipient,
        };
    }

    request(
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawAndVestArgs,
    ) {
        ownedIntents.requestWithdrawAndVest({
            typeArguments: [...accountGenerics, actionArgs.coinType],
            arguments: {
                auth,
                account,
                params,
                outcome,
                coinAmount: actionArgs.coinAmount,
                startTimestamp: actionArgs.start,
                endTimestamp: actionArgs.end,
                recipient: actionArgs.recipient,
            }
        });
    }

    execute(
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        if (!this.coinId) {
            throw new Error("Coin ID not initialized");
        }

        ownedIntents.executeWithdrawAndVest({
            typeArguments: [...accountGenerics, this.args!.coinType],
            arguments: {
                executable,
                account: this.account,
                receiving: this.coinId as string,
            }
        });
    }

    clearEmpty(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        owned.deleteWithdrawCoin({
            typeArguments: [accountGenerics[0], this.args!.coinType],
            arguments: {
                expired,
                account: this.account,
            }
        });
        vesting.deleteVest(expired);
        intents.destroyEmptyExpired(expired);
    }

    deleteExpired(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        owned.deleteWithdrawCoin({
            typeArguments: [accountGenerics[0], this.args!.coinType],
            arguments: {
                expired,
                account: this.account,
            }
        });
        vesting.deleteVest(expired);
        intents.destroyEmptyExpired(expired);
    }
}