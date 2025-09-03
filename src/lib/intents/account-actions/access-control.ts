import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../.gen/account-protocol/account/functions";
import * as intents from "../../../.gen/account-protocol/intents/functions";
import * as accessControlIntent from "../../../.gen/account-actions/access-control-intents/functions";
import * as accessControl from "../../../.gen/account-actions/access-control/functions";

import { BorrowCapArgs, ActionsIntentTypes } from "../types";
import { Intent } from "../intent";
import { CLOCK } from "../../../types";

export class BorrowCapIntent extends Intent {
    static type = ActionsIntentTypes.BorrowCap;
    declare args: BorrowCapArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const capType = actions[0].type.match(/<(.+)>/)![1];

        this.args = {
            capType,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: BorrowCapArgs,
    ) {
        accessControlIntent.requestBorrowCap(
            tx,
            [...accountGenerics, actionArgs.capType],
            {
                auth,
                account,
                params,
                outcome,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ): TransactionResult { // Cap
        return accessControlIntent.executeBorrowCap(
            tx,
            [...accountGenerics, this.args!.capType],
            {
                executable,
                account: this.account,
            }
        );
    }

    return(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
        cap: TransactionObjectInput,
    ) {
        accessControlIntent.executeReturnCap(
            tx,
            [...accountGenerics, this.args!.capType],
            {
                account: this.account,
                executable,
                cap,
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
        accessControl.deleteBorrow(
            tx,
            this.args!.capType,
            expired,
        );
        accessControl.deleteReturn(
            tx,
            this.args!.capType,
            expired,
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
        accessControl.deleteBorrow(
            tx,
            this.args!.capType,
            expired,
        );
        accessControl.deleteReturn(
            tx,
            this.args!.capType,
            expired,
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}