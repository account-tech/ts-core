/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Developers can restrict access to functions in their own package with a Cap that
 * can be locked into an Account. The Cap can be borrowed upon approval and used in
 * other move calls within the same ptb before being returned.
 * 
 * The Cap pattern uses the object type as a proof of access, the object ID is
 * never checked. Therefore, only one Cap of a given type can be locked into the
 * Smart Account. And any Cap of that type can be returned to the Smart Account
 * after being borrowed.
 * 
 * A good practice to follow is to use a different Cap type for each function that
 * needs to be restricted. This way, the Cap borrowed can't be misused in another
 * function, by the person executing the intent.
 * 
 * e.g.
 * 
 * public struct AdminCap has key, store {}
 * 
 * public fun foo(\_: &AdminCap) { ... }
 */

import { MoveTuple, MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::access_control';
export const CapKey = new MoveTuple({ name: `${$moduleName}::CapKey`, fields: [bcs.bool()] });
export const BorrowAction = new MoveStruct({ name: `${$moduleName}::BorrowAction`, fields: {
        dummy_field: bcs.bool()
    } });
export const ReturnAction = new MoveStruct({ name: `${$moduleName}::ReturnAction`, fields: {
        dummy_field: bcs.bool()
    } });
export interface LockCapArguments<Cap extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    cap: RawTransactionArgument<Cap>;
}
export interface LockCapOptions<Cap extends BcsType<any>> {
    package?: string;
    arguments: LockCapArguments<Cap> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        cap: RawTransactionArgument<Cap>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Authenticated user can lock a Cap, the Cap must have at least store ability. */
export function lockCap<Cap extends BcsType<any>>(options: LockCapOptions<Cap>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["auth", "account", "cap"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'lock_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface HasLockArguments {
    account: RawTransactionArgument<string>;
}
export interface HasLockOptions {
    package?: string;
    arguments: HasLockArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Checks if there is a Cap locked for a given type. */
export function hasLock(options: HasLockOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'has_lock',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewBorrowArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewBorrowOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewBorrowArguments<IW> | [
        intent: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates and returns a BorrowAction. */
export function newBorrow<IW extends BcsType<any>>(options: NewBorrowOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'new_borrow',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoBorrowArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoBorrowOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoBorrowArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
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
/** Processes a BorrowAction and returns a Borrowed hot potato and the Cap. */
export function doBorrow<IW extends BcsType<any>>(options: DoBorrowOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'do_borrow',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteBorrowArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteBorrowOptions {
    package?: string;
    arguments: DeleteBorrowArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a BorrowAction from an expired intent. */
export function deleteBorrow(options: DeleteBorrowOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'delete_borrow',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewReturnArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewReturnOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewReturnArguments<IW> | [
        intent: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates and returns a ReturnAction. */
export function newReturn<IW extends BcsType<any>>(options: NewReturnOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'new_return',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoReturnArguments<Cap extends BcsType<any>, IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    cap: RawTransactionArgument<Cap>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoReturnOptions<Cap extends BcsType<any>, IW extends BcsType<any>> {
    package?: string;
    arguments: DoReturnArguments<Cap, IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        cap: RawTransactionArgument<Cap>,
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
/** Returns a Cap to the Account and validates the ReturnAction. */
export function doReturn<Cap extends BcsType<any>, IW extends BcsType<any>>(options: DoReturnOptions<Cap, IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[2]}`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "cap", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'do_return',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteReturnArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteReturnOptions {
    package?: string;
    arguments: DeleteReturnArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a ReturnAction from an expired intent. */
export function deleteReturn(options: DeleteReturnOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control',
        function: 'delete_return',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}