/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * The Extensions shared object tracks a list of verified and whitelisted packages.
 * These are the only packages that can be added as dependencies to an account if
 * it disallows unverified packages.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as object from './deps/sui/object.js';
import * as table from './deps/sui/table.js';
const $moduleName = '@account/extensions::extensions';
export const Extensions = new MoveStruct({ name: `${$moduleName}::Extensions`, fields: {
        id: object.UID,
        by_name: table.Table,
        by_addr: table.Table
    } });
export const PackageVersion = new MoveStruct({ name: `${$moduleName}::PackageVersion`, fields: {
        addr: bcs.Address,
        version: bcs.u64()
    } });
export const AdminCap = new MoveStruct({ name: `${$moduleName}::AdminCap`, fields: {
        id: object.UID
    } });
export interface LengthArguments {
    extensions: RawTransactionArgument<string>;
}
export interface LengthOptions {
    package?: string;
    arguments: LengthArguments | [
        extensions: RawTransactionArgument<string>
    ];
}
/** Returns the number of extensions in the list */
export function length(options: LengthOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`
    ] satisfies string[];
    const parameterNames = ["extensions"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'length',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ByNameArguments {
    extensions: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface ByNameOptions {
    package?: string;
    arguments: ByNameArguments | [
        extensions: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
}
/** Returns the package versions for a given name */
export function byName(options: ByNameOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["extensions", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'by_name',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ByAddrArguments {
    extensions: RawTransactionArgument<string>;
    addr: RawTransactionArgument<string>;
}
export interface ByAddrOptions {
    package?: string;
    arguments: ByAddrArguments | [
        extensions: RawTransactionArgument<string>,
        addr: RawTransactionArgument<string>
    ];
}
/** Returns the name of the extension */
export function byAddr(options: ByAddrOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        'address'
    ] satisfies string[];
    const parameterNames = ["extensions", "addr"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'by_addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface AddrArguments {
    packageVersion: RawTransactionArgument<string>;
}
export interface AddrOptions {
    package?: string;
    arguments: AddrArguments | [
        packageVersion: RawTransactionArgument<string>
    ];
}
/** Returns the address of the PackageVersion */
export function addr(options: AddrOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::PackageVersion`
    ] satisfies string[];
    const parameterNames = ["packageVersion"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface VersionArguments {
    packageVersion: RawTransactionArgument<string>;
}
export interface VersionOptions {
    package?: string;
    arguments: VersionArguments | [
        packageVersion: RawTransactionArgument<string>
    ];
}
/** Returns the version of the PackageVersion */
export function version(options: VersionOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::PackageVersion`
    ] satisfies string[];
    const parameterNames = ["packageVersion"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'version',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface GetLatestForNameArguments {
    extensions: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface GetLatestForNameOptions {
    package?: string;
    arguments: GetLatestForNameArguments | [
        extensions: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
}
/** Returns the latest address and version for a given name */
export function getLatestForName(options: GetLatestForNameOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["extensions", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'get_latest_for_name',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface IsExtensionArguments {
    extensions: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    addr: RawTransactionArgument<string>;
    version: RawTransactionArgument<number | bigint>;
}
export interface IsExtensionOptions {
    package?: string;
    arguments: IsExtensionArguments | [
        extensions: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        addr: RawTransactionArgument<string>,
        version: RawTransactionArgument<number | bigint>
    ];
}
/** Returns true if the package (name, addr, version) is in the list */
export function isExtension(options: IsExtensionOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'address',
        'u64'
    ] satisfies string[];
    const parameterNames = ["extensions", "name", "addr", "version"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'is_extension',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface AddArguments {
    extensions: RawTransactionArgument<string>;
    _: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    addr: RawTransactionArgument<string>;
    version: RawTransactionArgument<number | bigint>;
}
export interface AddOptions {
    package?: string;
    arguments: AddArguments | [
        extensions: RawTransactionArgument<string>,
        _: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        addr: RawTransactionArgument<string>,
        version: RawTransactionArgument<number | bigint>
    ];
}
/** Adds a new extension to the list */
export function add(options: AddOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        `${packageAddress}::extensions::AdminCap`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'address',
        'u64'
    ] satisfies string[];
    const parameterNames = ["extensions", "_", "name", "addr", "version"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'add',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface RemoveArguments {
    extensions: RawTransactionArgument<string>;
    _: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface RemoveOptions {
    package?: string;
    arguments: RemoveArguments | [
        extensions: RawTransactionArgument<string>,
        _: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
}
/** Removes a package from the list */
export function remove(options: RemoveOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        `${packageAddress}::extensions::AdminCap`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["extensions", "_", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'remove',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface RemoveVersionArguments {
    extensions: RawTransactionArgument<string>;
    _: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    addr: RawTransactionArgument<string>;
    version: RawTransactionArgument<number | bigint>;
}
export interface RemoveVersionOptions {
    package?: string;
    arguments: RemoveVersionArguments | [
        extensions: RawTransactionArgument<string>,
        _: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        addr: RawTransactionArgument<string>,
        version: RawTransactionArgument<number | bigint>
    ];
}
/** Removes the version from the history of a package */
export function removeVersion(options: RemoveVersionOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        `${packageAddress}::extensions::AdminCap`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'address',
        'u64'
    ] satisfies string[];
    const parameterNames = ["extensions", "_", "name", "addr", "version"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'remove_version',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface UpdateArguments {
    extensions: RawTransactionArgument<string>;
    _: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    addr: RawTransactionArgument<string>;
    version: RawTransactionArgument<number | bigint>;
}
export interface UpdateOptions {
    package?: string;
    arguments: UpdateArguments | [
        extensions: RawTransactionArgument<string>,
        _: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        addr: RawTransactionArgument<string>,
        version: RawTransactionArgument<number | bigint>
    ];
}
/** Adds a new version to the history of a package */
export function update(options: UpdateOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::Extensions`,
        `${packageAddress}::extensions::AdminCap`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'address',
        'u64'
    ] satisfies string[];
    const parameterNames = ["extensions", "_", "name", "addr", "version"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'update',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewAdminArguments {
    _: RawTransactionArgument<string>;
    recipient: RawTransactionArgument<string>;
}
export interface NewAdminOptions {
    package?: string;
    arguments: NewAdminArguments | [
        _: RawTransactionArgument<string>,
        recipient: RawTransactionArgument<string>
    ];
}
export function newAdmin(options: NewAdminOptions) {
    const packageAddress = options.package ?? '@account/extensions';
    const argumentsTypes = [
        `${packageAddress}::extensions::AdminCap`,
        'address'
    ] satisfies string[];
    const parameterNames = ["_", "recipient"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'extensions',
        function: 'new_admin',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}