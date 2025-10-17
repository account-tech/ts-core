import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { lockCap, publicBurn } from "../../packages/account_actions/currency";

/// Deposits and locks a TreasuryCap in the Account
export function depositTreasuryCap(
    tx: Transaction,
    configType: string,
    coinType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    treasuryCap: TransactionArgument,
    maxSupply?: number,
) {
    tx.add(
        lockCap({
            typeArguments: [configType, coinType],
            arguments: { auth, account, treasuryCap, maxSupply: maxSupply ? BigInt(maxSupply) : null },
        })
    );
}

/// Public function to allow anyone to burn coins using a TreasuryCap attached to the Account (if can_burn enabled)
export function burnCoins(
    tx: Transaction,
    configType: string,
    coinType: string,
    account: TransactionArgument,
    coin: TransactionArgument,
) {
    // caller should check if TreasuryCap exist and can_burn is enabled
    tx.add(
        publicBurn({
            typeArguments: [configType, coinType],
            arguments: { account, coin },
        })
    );
}