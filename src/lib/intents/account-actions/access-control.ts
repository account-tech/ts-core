import { TransactionArgument } from "@mysten/sui/transactions";
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
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: BorrowCapArgs,
    ) {
        accessControlIntent.requestBorrowCap({
            typeArguments: [...accountGenerics, actionArgs.capType],
            arguments: {
                auth,
                account,
                params,
                outcome,
            }
        });
    }

    execute(
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        accessControlIntent.executeBorrowCap({
            typeArguments: [...accountGenerics, this.args!.capType],
            arguments: {
                executable,
                account: this.account,
            }
        });
    }

    return(
        accountGenerics: [string, string],
        executable: TransactionArgument,
        cap: TransactionArgument,
    ) {
        accessControlIntent.executeReturnCap({
            typeArguments: [...accountGenerics, this.args!.capType],
            arguments: {
                account: this.account,
                executable,
                cap,
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
        accessControl.deleteBorrow({
            typeArguments: [this.args!.capType],
            arguments: { expired }
        });
        accessControl.deleteReturn({
            typeArguments: [this.args!.capType],
            arguments: { expired }
        });
        accessControl.deleteReturn({
            typeArguments: [this.args!.capType],
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
        accessControl.deleteBorrow({
            typeArguments: [this.args!.capType],
            arguments: { expired }
        });
        accessControl.deleteReturn({
            typeArguments: [this.args!.capType],
            arguments: { expired }
        });
        accessControl.deleteReturn({
            typeArguments: [this.args!.capType],
            arguments: { expired }
        });
        intents.destroyEmptyExpired(expired);
    }
}