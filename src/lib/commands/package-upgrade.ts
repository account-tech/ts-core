import { lockCap } from "src/.gen/account-actions/package-upgrade/functions";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/// Deposits and locks an UpgradeCap in the Account
export function depositUpgradeCap(
    tx: Transaction,
    configType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    upgradeCap: TransactionObjectInput,
    packageName: string, // can be anything
    delayMs: bigint,
) {
    lockCap(
        tx,
        configType,
        { auth, account, cap: upgradeCap, name: packageName, delayMs },
    );
}