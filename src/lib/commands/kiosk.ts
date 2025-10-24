import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { open, place, delist, withdrawProfits, close } from "../../packages/account_actions/kiosk";
import { RawTransactionArgument } from "../../packages/utils";

/// Opens a Kiosk managed by the Account
export function openKiosk(
    tx: Transaction,
    configType: string,
    auth: TransactionArgument,
    account: RawTransactionArgument<string>,
    name: string,
) {
    tx.add(
        open({
            typeArguments: [configType],
            arguments: { auth, account, name },
        })
    );
}

/// Places an object in the Kiosk, the object must come from another Kiosk
export function placeInKiosk(
    tx: Transaction,
    configType: string,
    nftType: string,
    auth: TransactionArgument,
    account: RawTransactionArgument<string>,
    accountKiosk: RawTransactionArgument<string>,
    senderKiosk: RawTransactionArgument<string>,
    senderCap: RawTransactionArgument<string>,
    transferPolicy: RawTransactionArgument<string>,
    kioskName: string,
    nftId: string,
) {
    tx.add(
        place({
            typeArguments: [configType, nftType],
            arguments: { auth, account, accountKiosk, senderKiosk, senderCap, policy: transferPolicy, name: kioskName, nftId },
        })
    );
}

/// Delists an object from the Kiosk
export function delistFromKiosk(
    tx: Transaction,
    configType: string,
    nftType: string,
    auth: TransactionArgument,
    account: RawTransactionArgument<string>,
    kiosk: RawTransactionArgument<string>,
    name: string,
    nftId: string,
) {
    tx.add(
        delist({
            typeArguments: [configType, nftType],
            arguments: { auth, account, kiosk, name, nftId },
        })
    );
}

/// Withdraws the profits from the Kiosk to the Account
export function withdrawProfitsFromKiosk(
    tx: Transaction,
    configType: string,
    auth: TransactionArgument,
    account: RawTransactionArgument<string>,
    kiosk: RawTransactionArgument<string>,
    name: string,
) {
    tx.add(
        withdrawProfits({
            typeArguments: [configType],
            arguments: { auth, account, kiosk, name },
        })
    );
}

/// Closes an empty Kiosk managed by the Account
export function closeKiosk(
    tx: Transaction,
    configType: string,
    auth: TransactionArgument,
    account: RawTransactionArgument<string>,
    kiosk: RawTransactionArgument<string>,
    name: string,
) {
    tx.add(
        close({
            typeArguments: [configType],
            arguments: { auth, account, kiosk, name },
        })
    );
}