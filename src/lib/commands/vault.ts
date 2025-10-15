import { TransactionArgument } from "@mysten/sui/transactions";
import { open, deposit, close } from "../../packages/account_actions/vault";

/// Opens a Vault managed by the Account
export function openVault(
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    name: string,
) {
    open({
        typeArguments: [configType],
        arguments: { auth, account, name },
    });
}

/// Deposits an object into the Vault from the caller wallet
export function depositFromWallet(
    configType: string,
    coinType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    name: string,
    coin: TransactionArgument,
) {
    deposit({
        typeArguments: [configType, coinType],
        arguments: { auth, account, name, coin },
    });
}

/// Closes the Vault if empty
export function closeVault(
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    name: string,
) {
    close(
        {
            typeArguments: [configType],
            arguments: { auth, account, name },
        });
}