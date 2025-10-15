import { TransactionArgument } from "@mysten/sui/transactions";
import { mergeAndSplit } from "../../packages/account_protocol/owned";

/// Deposits and locks a Cap object in the Account
export function mergeAndSplitCoins(
    configType: string,
    coinType: string,
    auth: TransactionArgument,
    account: string,
    toMerge: string[],
    toSplit: bigint[],
) {
    return mergeAndSplit({
        typeArguments: [configType, coinType],
        arguments: { auth, account, toMerge, toSplit },
    });
}