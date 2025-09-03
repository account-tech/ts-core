import { open, place, delist, withdrawProfits, close } from "src/.gen/account-actions/kiosk/functions";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";
import { TransactionPureInput } from "src/types/helpers";
import { SUI_FRAMEWORK } from "src/types";

/// Opens a Kiosk managed by the Account
export function openKiosk(
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

/// Places an object in the Kiosk, the object must come from another Kiosk
export function placeInKiosk(
    tx: Transaction,
    configType: string,
    nftType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    accountKiosk: TransactionObjectInput,
    senderKiosk: TransactionObjectInput,
    senderCap: TransactionObjectInput,
    transferPolicy: TransactionObjectInput,
    kioskName: string,
    nftId: TransactionPureInput,
) {
    const request = place(
        tx,
        [configType, nftType],
        { auth, account, accountKiosk, senderKiosk, senderCap, policy: transferPolicy, name: kioskName, nftId },
    );
    tx.moveCall({
        target: `${SUI_FRAMEWORK}::transfer_policy::confirm_request`,
        typeArguments: [nftType],
        arguments: [tx.object(transferPolicy), request]
    });
}

/// Delists an object from the Kiosk
export function delistFromKiosk(
    tx: Transaction,
    configType: string,
    nftType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    kiosk: TransactionObjectInput,
    name: string,
    nftId: TransactionPureInput,
) {
    delist(
        tx,
        [configType, nftType],
        { auth, account, kiosk, name, nftId },
    );
}

/// Withdraws the profits from the Kiosk to the Account
export function withdrawProfitsFromKiosk(
    tx: Transaction,
    configType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    kiosk: TransactionObjectInput,
    name: string,
) {
    withdrawProfits(
        tx,
        configType,
        { auth, account, kiosk, name },
    );
}

/// Closes an empty Kiosk managed by the Account
export function closeKiosk(
    tx: Transaction,
    configType: string,
    auth: TransactionObjectInput,
    account: TransactionObjectInput,
    kiosk: TransactionObjectInput,
    name: string,
) {
    close(
        tx,
        configType,
        { auth, account, kiosk, name },
    );
}