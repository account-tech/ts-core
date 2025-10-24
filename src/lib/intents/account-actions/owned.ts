import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
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
import { findCoinsToMerge, findCoinsToMergeBatch, findObjectTypes } from "../../commands/owned";

export class WithdrawAndTransferToVaultIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransferToVault;
    declare args: WithdrawAndTransferToVaultArgs;

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
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawAndTransferToVaultArgs,
    ) {
        tx.add(
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
            })
        );
    }

    async execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        const coins = await findCoinsToMerge(
            this.client, this.account, this.args!.coinType, this.args!.coinAmount,
        );

        tx.add(
            ownedIntents.executeWithdrawAndTransferToVault({
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
            vault.deleteDeposit({
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
            vault.deleteDeposit({
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

export class WithdrawObjectsAndTransferIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransfer;
    declare args: WithdrawObjectsAndTransferArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        this.args = {
            transfers: Array.from({ length: actions.length / 2 }, (_, i) => ({
                objectId: WithdrawObjectAction.fromBase64(actions[i * 2]).object_id,
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
        actionArgs: WithdrawObjectsAndTransferArgs,
    ) {
        tx.add(
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
            })
        );
    }

    async execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        const objectTypes = await findObjectTypes(
            this.client, this.args!.transfers.map(transfer => transfer.objectId as string),
        );

        for (let i = 0; i < this.args!.transfers.length; i++) {
            tx.add(
                ownedIntents.executeWithdrawObjectAndTransfer({
                    typeArguments: [...accountGenerics, objectTypes[i]],
                    arguments: {
                        executable,
                        account: this.account,
                        receiving: this.args!.transfers[i].objectId as string,
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
        for (let i = 0; i < this.args!.transfers.length; i++) {
            tx.add(
                owned.deleteWithdrawObject({
                    typeArguments: [accountGenerics[0]],
                    arguments: {
                        expired,
                        account: this.account,
                    }
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
                owned.deleteWithdrawObject({
                    typeArguments: [accountGenerics[0]],
                    arguments: {
                        expired,
                        account: this.account,
                    }
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

export class WithdrawCoinAndTransferIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndTransfer;
    declare args: WithdrawCoinAndTransferArgs;

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
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawCoinAndTransferArgs,
    ) {
        tx.add(
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
            })
        );
    }

    async execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        const amounts = this.args!.transfers.map(transfer => transfer.amount);
        const coinBatches = await findCoinsToMergeBatch(
            this.client, this.account, this.args!.coinType, amounts,
        );
        coinBatches.forEach(coins => {
            tx.add(
                ownedIntents.executeWithdrawCoinAndTransfer({
                typeArguments: [...accountGenerics, this.args!.coinType],
                arguments: {
                    executable,
                    account: this.account,
                    coins,
                }
            })
        );
        });
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
                owned.deleteWithdrawCoin({
                    typeArguments: [accountGenerics[0], this.args!.coinType],
                    arguments: {
                        expired,
                        account: this.account,
                    }
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
                owned.deleteWithdrawCoin({
                    typeArguments: [accountGenerics[0], this.args!.coinType],
                    arguments: {
                        expired,
                        account: this.account,
                    }
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

export class WithdrawAndVestIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndVest;
    declare args: WithdrawAndVestArgs;

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
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: WithdrawAndVestArgs,
    ) {
        tx.add(
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
            })
        );
    }

    async execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        const coins = await findCoinsToMerge(
            this.client, this.account, this.args!.coinType, this.args!.coinAmount,
        );

        tx.add(
            ownedIntents.executeWithdrawAndVest({
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
            owned.deleteWithdrawCoin({
                typeArguments: [accountGenerics[0], this.args!.coinType],
                arguments: {
                    expired,
                    account: this.account,
                }
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