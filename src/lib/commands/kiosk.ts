import { TransactionArgument } from "@mysten/sui/transactions";
import { open, place, delist, withdrawProfits, close } from "../../packages/account_actions/kiosk";

/// Opens a Kiosk managed by the Account
export function openKiosk(
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

/// Places an object in the Kiosk, the object must come from another Kiosk
export function placeInKiosk(
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
    place({
        typeArguments: [configType, nftType],
        arguments: { auth, account, accountKiosk, senderKiosk, senderCap, policy: transferPolicy, name: kioskName, nftId },
    });
}

/// Delists an object from the Kiosk
export function delistFromKiosk(
    configType: string,
    nftType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    kiosk: TransactionArgument,
    name: string,
    nftId: TransactionArgument,
) {
    delist({
        typeArguments: [configType, nftType],
        arguments: { auth, account, kiosk, name, nftId },
    });
}

/// Withdraws the profits from the Kiosk to the Account
export function withdrawProfitsFromKiosk(
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    kiosk: TransactionArgument,
    name: string,
) {
    withdrawProfits({
        typeArguments: [configType],
        arguments: { auth, account, kiosk, name },
    });
}

/// Closes an empty Kiosk managed by the Account
export function closeKiosk(
    configType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    kiosk: TransactionArgument,
    name: string,
) {
    close({
        typeArguments: [configType],
        arguments: { auth, account, kiosk, name },
    });
}