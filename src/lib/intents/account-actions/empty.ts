import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import * as emptyIntent from "../../../packages/account_actions/empty_intents";

import { ActionsIntentTypes } from "../types";
import { Intent } from "../intent";

export class EmptyIntent extends Intent {
    static type = ActionsIntentTypes.Empty;

    async init() { }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
    ) {
        tx.add(
            emptyIntent.requestEmpty({
                typeArguments: [...accountGenerics],
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
            emptyIntent.executeEmpty({
                typeArguments: [...accountGenerics],
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
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}