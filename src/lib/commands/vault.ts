import { open, deposit, close } from "src/.gen/account-actions/vault/functions";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/// Opens a Vault managed by the Account
export function openVault(
    tx: Transaction,
    configType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    name: string,
) {
    open(
        tx,
        configType,
        { auth, account, name },
    );
}

/// Deposits an object into the Vault from the caller wallet
export function depositFromWallet(
    tx: Transaction,
    configType: string,
    coinType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    name: string,
    coin: TransactionObjectInput,
) {
    deposit(
        tx,
        [configType, coinType],
        { auth, account, name, coin },
    );
}

/// Closes the Vault if empty
export function closeVault(
    tx: Transaction,
    configType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    name: string,
) {
    close(
        tx,
        configType,
        { auth, account, name },
    );
}