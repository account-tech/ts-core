/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Authenticated users can place nfts from their kiosk into the account's without
 * passing through the intent process. Nfts can be transferred into any other
 * Kiosk. Upon resolution, the recipient must execute the transfer. The functions
 * take the caller's kiosk and the account's kiosk to execute. Nfts can be listed
 * for sale in the kiosk, and then purchased by anyone. Authorized addresses can
 * withdraw the profits from the kiosk to the Account.
 */

import { MoveTuple, MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::kiosk';
export const KioskOwnerKey = new MoveTuple({ name: `${$moduleName}::KioskOwnerKey`, fields: [bcs.string()] });
export const TakeAction = new MoveStruct({ name: `${$moduleName}::TakeAction`, fields: {
        name: bcs.string(),
        nft_id: bcs.Address,
        recipient: bcs.Address
    } });
export const ListAction = new MoveStruct({ name: `${$moduleName}::ListAction`, fields: {
        name: bcs.string(),
        nft_id: bcs.Address,
        price: bcs.u64()
    } });
export interface OpenArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface OpenOptions {
    package?: string;
    arguments: OpenArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Creates a new Kiosk and locks the KioskOwnerCap in the Account */
export function open(options: OpenOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'open',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface HasLockArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface HasLockOptions {
    package?: string;
    arguments: HasLockArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Checks if a Kiosk exists for a given name. */
export function hasLock(options: HasLockOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'has_lock',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface PlaceArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    accountKiosk: RawTransactionArgument<string>;
    senderKiosk: RawTransactionArgument<string>;
    senderCap: RawTransactionArgument<string>;
    policy: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    nftId: RawTransactionArgument<string>;
}
export interface PlaceOptions {
    package?: string;
    arguments: PlaceArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        accountKiosk: RawTransactionArgument<string>,
        senderKiosk: RawTransactionArgument<string>,
        senderCap: RawTransactionArgument<string>,
        policy: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        nftId: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * Deposits from another Kiosk, no need for intent. Optional royalty, lock and
 * personal kiosk rules are automatically resolved for the type. Additional rules
 * may be confirmed after in the PTB.
 */
export function place(options: PlaceOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::KioskOwnerCap',
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer_policy::TransferPolicy<${options.typeArguments[1]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000002::object::ID'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "accountKiosk", "senderKiosk", "senderCap", "policy", "name", "nftId"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'place',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DelistArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    kiosk: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    nftId: RawTransactionArgument<string>;
}
export interface DelistOptions {
    package?: string;
    arguments: DelistArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        kiosk: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        nftId: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Authenticated users can delist nfts */
export function delist(options: DelistOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000002::object::ID'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "kiosk", "name", "nftId"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'delist',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface WithdrawProfitsArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    kiosk: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface WithdrawProfitsOptions {
    package?: string;
    arguments: WithdrawProfitsArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        kiosk: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Authenticated users can withdraw the profits to the account */
export function withdrawProfits(options: WithdrawProfitsOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "kiosk", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'withdraw_profits',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CloseArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    kiosk: RawTransactionArgument<string>;
}
export interface CloseOptions {
    package?: string;
    arguments: CloseArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        kiosk: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Closes the kiosk if empty */
export function close(options: CloseOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "name", "kiosk"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'close',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewTakeArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    nftId: RawTransactionArgument<string>;
    recipient: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewTakeOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewTakeArguments<IW> | [
        intent: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        nftId: RawTransactionArgument<string>,
        recipient: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a new TakeAction and adds it to an intent. */
export function newTake<IW extends BcsType<any>>(options: NewTakeOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000002::object::ID',
        'address',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "name", "nftId", "recipient", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'new_take',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoTakeArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    accountKiosk: RawTransactionArgument<string>;
    recipientKiosk: RawTransactionArgument<string>;
    recipientCap: RawTransactionArgument<string>;
    policy: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoTakeOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoTakeArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        accountKiosk: RawTransactionArgument<string>,
        recipientKiosk: RawTransactionArgument<string>,
        recipientCap: RawTransactionArgument<string>,
        policy: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/**
 * Processes a TakeAction, resolves the rules and places the nft into the
 * recipient's kiosk.
 */
export function doTake<IW extends BcsType<any>>(options: DoTakeOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::KioskOwnerCap',
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer_policy::TransferPolicy<${options.typeArguments[2]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "accountKiosk", "recipientKiosk", "recipientCap", "policy", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'do_take',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteTakeArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteTakeOptions {
    package?: string;
    arguments: DeleteTakeArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes a TakeAction from an expired intent. */
export function deleteTake(options: DeleteTakeOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'delete_take',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewListArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    nftId: RawTransactionArgument<string>;
    price: RawTransactionArgument<number | bigint>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewListOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewListArguments<IW> | [
        intent: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        nftId: RawTransactionArgument<string>,
        price: RawTransactionArgument<number | bigint>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a new ListAction and adds it to an intent. */
export function newList<IW extends BcsType<any>>(options: NewListOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000002::object::ID',
        'u64',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "name", "nftId", "price", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'new_list',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoListArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    kiosk: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoListOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoListArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        kiosk: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Processes a ListAction and lists the nft for purchase. */
export function doList<IW extends BcsType<any>>(options: DoListOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "kiosk", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'do_list',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteListArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteListOptions {
    package?: string;
    arguments: DeleteListArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes a ListAction from an expired intent. */
export function deleteList(options: DeleteListOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk',
        function: 'delete_list',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}