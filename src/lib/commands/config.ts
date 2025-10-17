import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { editMetadata, updateExtensionsToLatest } from "../../packages/account_protocol/config";
import { EXTENSIONS } from "../../types/constants";

/// Replaces the metadata of an account, first element must be "name"
export function replaceMetadata(
    tx: Transaction,
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    keys: string[],
    values: string[],
) {
    if (keys[0] !== "name") throw new Error("'name' must be the first key in metadata");

    tx.add(
        editMetadata({
            typeArguments: [configType],
            arguments: { auth, account, keys, values },
        })
    );
}

/// Updates the verified dependencies (deps allowed in Extensions) to the latest version
export function updateVerifiedDepsToLatest(
    tx: Transaction,
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
) {
    tx.add(
        updateExtensionsToLatest({
            typeArguments: [configType],
            arguments: { auth, account, extensions: EXTENSIONS },
        })
    );
}