import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { open, place, delist, withdrawProfits, close } from "../../packages/account_actions/kiosk";

/// Opens a Kiosk managed by the Account
export function openKiosk(
    tx: Transaction,
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
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
    account: TransactionArgument,
    accountKiosk: TransactionArgument,
    senderKiosk: TransactionArgument,
    senderCap: TransactionArgument,
    transferPolicy: TransactionArgument,
    kioskName: string,
    nftId: TransactionArgument,
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
    account: TransactionArgument,
    kiosk: TransactionArgument,
    name: string,
    nftId: TransactionArgument,
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
    account: TransactionArgument,
    kiosk: TransactionArgument,
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
    account: TransactionArgument,
    kiosk: TransactionArgument,
    name: string,
) {
    tx.add(
        close({
            typeArguments: [configType],
            arguments: { auth, account, kiosk, name },
        })
    );
}