import { TransactionArgument } from "@mysten/sui/transactions";
import { editMetadata, updateExtensionsToLatest } from "../../packages/account_protocol/config";
import { EXTENSIONS } from "../../types/constants";

/// Replaces the metadata of an account, first element must be "name"
export function replaceMetadata(
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    keys: string[],
    values: string[],
) {
    if (keys[0] !== "name") throw new Error("'name' must be the first key in metadata");

    editMetadata({
        typeArguments: [configType],
        arguments: { auth, account, keys, values },
    });
}

/// Updates the verified dependencies (deps allowed in Extensions) to the latest version
export function updateVerifiedDepsToLatest(
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
) {
    updateExtensionsToLatest({
        typeArguments: [configType],
        arguments: { auth, account, extensions: EXTENSIONS },
    });
}