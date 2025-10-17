import { TransactionArgument } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import * as emptyIntent from "../../../packages/account_actions/empty_intents";

import { ActionsIntentTypes } from "../types";
import { Intent } from "../intent";

export class EmptyIntent extends Intent {
    static type = ActionsIntentTypes.Empty;

    async init() { }

    request(
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
    ) {
        emptyIntent.requestEmpty({
            typeArguments: [...accountGenerics],
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
        emptyIntent.executeEmpty({
            typeArguments: [...accountGenerics],
            arguments: {
                executable,
                account: this.account,
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
        intents.destroyEmptyExpired(expired);
    }
}