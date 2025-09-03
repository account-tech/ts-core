import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";
import { CoinMetadata } from "@mysten/sui/client";
import { getCoinMeta } from "@polymedia/coinmeta";
import * as currency from "../../../.gen/account-actions/currency/functions";
import * as currencyIntent from "../../../.gen/account-actions/currency-intents/functions";
import * as owned from "../../../.gen/account-protocol/owned/functions";
import * as transfer from "../../../.gen/account-actions/transfer/functions";
import * as vesting from "../../../.gen/account-actions/vesting/functions";
import * as accountProtocol from "../../../.gen/account-protocol/account/functions";
import * as intents from "../../../.gen/account-protocol/intents/functions";
import { MintAction, BurnAction, UpdateAction, DisableAction } from "../../../.gen/account-actions/currency/structs";
import { WithdrawAction } from "../../../.gen/account-protocol/owned/structs";
import { TransferAction } from "../../../.gen/account-actions/transfer/structs";
import { VestAction } from "../../../.gen/account-actions/vesting/structs";

import { UpdateMetadataArgs, WithdrawAndBurnArgs, DisableRulesArgs, MintAndTransferArgs, MintAndVestArgs, ActionsIntentTypes } from "../types";
import { Intent } from "../intent";
import { CLOCK } from "../../../types";
import { phantom } from "src/.gen/_framework/reified";

export class DisableRulesIntent extends Intent {
    static type = ActionsIntentTypes.DisableRules;
    declare args: DisableRulesArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        const coinType = actions[0].type.match(/<([^>]*)>/)[1];
        const disableAction = DisableAction.fromFieldsWithTypes(phantom(coinType), actions[0]); // CoinType, DisableAction

        this.args = {
            coinType,
            mint: disableAction.mint,
            burn: disableAction.burn,
            updateSymbol: disableAction.updateSymbol,
            updateName: disableAction.updateName,
            updateDescription: disableAction.updateDescription,
            updateIcon: disableAction.updateIcon,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: DisableRulesArgs,
    ) {
        currencyIntent.requestDisableRules(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
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
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ) {
        currencyIntent.executeDisableRules(
            tx,
            [...accountGenerics, this.args!.coinType],
            {
                executable,
                account: this.account,
            }
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
            }
        );
        currency.deleteDisable(
            tx,
            this.args!.coinType,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
                clock: CLOCK,
            }
        );
        currency.deleteDisable(
            tx,
            this.args!.coinType,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
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
        const updateAction = UpdateAction.fromFieldsWithTypes(phantom(coinType), actions[0]); // CoinType, UpdateAction

        this.args = {
            coinType,
            newName: updateAction.name,
            newSymbol: updateAction.symbol,
            newDescription: updateAction.description,
            newIconUrl: updateAction.iconUrl,
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
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: UpdateMetadataArgs,
    ) {
        currencyIntent.requestUpdateMetadata(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
                auth,
                account,
                params,
                outcome,
                mdName: actionArgs.newName,
                mdSymbol: actionArgs.newSymbol,
                mdDescription: actionArgs.newDescription,
                mdIconUrl: actionArgs.newIconUrl,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ) {
        if (!this.metadata?.id) {
            throw new Error('Metadata not found for the Update intent');
        }

        currencyIntent.executeUpdateMetadata(
            tx,
            [...accountGenerics, this.args!.coinType],
            {
                executable,
                account: this.account,
                metadata: this.metadata?.id!,
            }
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
            }
        );
        currency.deleteUpdate(
            tx,
            this.args!.coinType,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
                clock: CLOCK,
            }
        );
        currency.deleteUpdate(
            tx,
            this.args!.coinType,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
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
                amount: MintAction.fromFieldsWithTypes(phantom(coinType), actions[i * 2]).amount,
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
        actionArgs: MintAndTransferArgs,
    ) {
        currencyIntent.requestMintAndTransfer(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
                auth,
                account,
                params,
                outcome,
                amounts: actionArgs.transfers.map(transfer => BigInt(transfer.amount)),
                recipients: actionArgs.transfers.map(transfer => transfer.recipient),
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ) {
        let result;
        for (let i = 0; i < this.args!.transfers.length; i++) {
            result = currencyIntent.executeMintAndTransfer(
                tx,
                [...accountGenerics, this.args!.coinType],
                {
                    executable,
                    account: this.account,
                }
            );
        }
        result!;
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
            }
        );
        this.args.transfers.forEach(_ => {
            currency.deleteMint(
                tx,
                this.args!.coinType,
                expired
            );
            transfer.deleteTransfer(
                tx,
                expired
            );
        });
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
                clock: CLOCK,
            }
        );
        this.args.transfers.forEach(_ => {
            currency.deleteMint(
                tx,
                this.args!.coinType,
                expired
            );
            transfer.deleteTransfer(
                tx,
                expired
            );
        });
        intents.destroyEmptyExpired(
            tx,
            expired,
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
            amount: MintAction.fromFieldsWithTypes(phantom(coinType), actions[0]).amount,
            recipient: VestAction.fromFieldsWithTypes(actions[1]).recipient,
            start: VestAction.fromFieldsWithTypes(actions[1]).startTimestamp,
            end: VestAction.fromFieldsWithTypes(actions[1]).endTimestamp,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: MintAndVestArgs,
    ) {
        currencyIntent.requestMintAndVest(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
                auth,
                account,
                params,
                outcome,
                totalAmount: actionArgs.amount,
                recipient: actionArgs.recipient,
                startTimestamp: actionArgs.start,
                endTimestamp: actionArgs.end,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ) {
        currencyIntent.executeMintAndVest(
            tx,
            [...accountGenerics, this.args!.coinType],
            {
                executable,
                account: this.account,
            }
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
            }
        );
        currency.deleteMint(
            tx,
            this.args!.coinType,
            expired
        );
        vesting.deleteVest(
            tx,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
                clock: CLOCK,
            }
        );
        currency.deleteMint(
            tx,
            this.args!.coinType,
            expired
        );
        vesting.deleteVest(
            tx,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}

export class WithdrawAndBurnIntent extends Intent {
    static type = ActionsIntentTypes.WithdrawAndBurn;
    declare args: WithdrawAndBurnArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        const withdrawAction = WithdrawAction.fromFieldsWithTypes(actions[0]); // CoinType, WithdrawAction
        const coinType = actions[1].type.match(/<([^>]*)>/)[1];
        const burnAction = BurnAction.fromFieldsWithTypes(phantom(coinType), actions[1]); // CoinType, BurnAction

        this.args = {
            coinType,
            coinId: withdrawAction.objectId,
            amount: burnAction.amount,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: WithdrawAndBurnArgs,
    ) {
        currencyIntent.requestWithdrawAndBurn(
            tx,
            [...accountGenerics, actionArgs.coinType],
            {
                auth,
                account,
                params,
                outcome,
                coinId: actionArgs.coinId,
                amount: actionArgs.amount,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ) {
        currencyIntent.executeWithdrawAndBurn(
            tx,
            [...accountGenerics, this.args!.coinType],
            {
                executable,
                account: this.account,
                receiving: this.args!.coinId as string,
            }
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
            }
        );
        owned.deleteWithdraw(
            tx,
            accountGenerics[0],
            {
                expired,
                account: this.account,
            }
        );
        currency.deleteBurn(
            tx,
            this.args!.coinType,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
                clock: CLOCK,
            }
        );
        owned.deleteWithdraw(
            tx,
            accountGenerics[0],
            {
                expired,
                account: this.account,
            }
        );
        currency.deleteBurn(
            tx,
            this.args!.coinType,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}