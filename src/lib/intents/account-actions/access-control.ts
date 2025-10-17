import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import * as accessControlIntent from "../../../packages/account_actions/access_control_intents";
import * as accessControl from "../../../packages/account_actions/access_control";

import { BorrowCapArgs, ActionsIntentTypes } from "../types";
import { Intent } from "../intent";

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
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: BorrowCapArgs,
    ) {
        tx.add(
            accessControlIntent.requestBorrowCap({
                typeArguments: [...accountGenerics, actionArgs.capType],
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
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
            accessControlIntent.executeBorrowCap({
                typeArguments: [...accountGenerics, this.args!.capType],
                arguments: {
                    executable,
                    account: this.account,
                }
            })
        );
    }

    return(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
        cap: TransactionArgument,
    ) {
        tx.add(
            accessControlIntent.executeReturnCap({
                typeArguments: [...accountGenerics, this.args!.capType],
                arguments: {
                    account: this.account,
                    executable,
                    cap,
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
            accessControl.deleteBorrow({
                typeArguments: [this.args!.capType],
                arguments: { expired }
            })
        );
        tx.add(
            accessControl.deleteReturn({
                typeArguments: [this.args!.capType],
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
            accessControl.deleteBorrow({
                typeArguments: [this.args!.capType],
                arguments: { expired }
            })
        );
        tx.add(
            accessControl.deleteReturn({
                typeArguments: [this.args!.capType],
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