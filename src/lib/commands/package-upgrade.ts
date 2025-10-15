import { TransactionArgument } from "@mysten/sui/transactions";
import { lockCap } from "../../packages/account_actions/package_upgrade";

/// Deposits and locks an UpgradeCap in the Account
export function depositUpgradeCap(
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    upgradeCap: TransactionArgument,
    packageName: string, // can be anything
    delayMs: bigint,
) {
    lockCap({
        typeArguments: [configType],
        arguments: { auth, account, cap: upgradeCap, name: packageName, delayMs },
    });
}