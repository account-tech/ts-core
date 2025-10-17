import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { lockCap } from "../../packages/account_actions/access_control";

/// Deposits and locks a Cap object in the Account
export function depositCap(
    tx: Transaction,
    configType: string,
    capType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    capObject: TransactionArgument,
) {
    tx.add(
        lockCap({
            typeArguments: [configType, capType],
            arguments: { auth, account, cap: capObject },
        })
    );
}