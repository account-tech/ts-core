import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { lockCap } from "../../packages/account_actions/package_upgrade";

/// Deposits and locks an UpgradeCap in the Account
export function depositUpgradeCap(
    tx: Transaction,
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    upgradeCap: TransactionArgument,
    packageName: string, // can be anything
    delayMs: bigint,
) {
    tx.add(
        lockCap({
            typeArguments: [configType],
            arguments: { auth, account, cap: upgradeCap, name: packageName, delayMs },
        })
    );
}