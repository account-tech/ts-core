/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Dependencies are the packages that an Account object can call. They are stored
 * in a vector and can be modified through an intent. AccountProtocol is the only
 * mandatory dependency, found at index 0.
 * 
 * For improved security, we provide a whitelist of allowed packages in Extensions.
 * If unverified_allowed is false, then only these packages can be added.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/protocol::deps';
export const Dep = new MoveStruct({ name: `${$moduleName}::Dep`, fields: {
        name: bcs.string(),
        addr: bcs.Address,
        version: bcs.u64()
    } });
export const Deps = new MoveStruct({ name: `${$moduleName}::Deps`, fields: {
        inner: bcs.vector(Dep),
        unverified_allowed: bcs.bool()
    } });
export interface NewArguments {
    extensions: RawTransactionArgument<string>;
    unverifiedAllowed: RawTransactionArgument<boolean>;
    names: RawTransactionArgument<string[]>;
    addresses: RawTransactionArgument<string[]>;
    versions: RawTransactionArgument<number | bigint[]>;
}
export interface NewOptions {
    package?: string;
    arguments: NewArguments | [
        extensions: RawTransactionArgument<string>,
        unverifiedAllowed: RawTransactionArgument<boolean>,
        names: RawTransactionArgument<string[]>,
        addresses: RawTransactionArgument<string[]>,
        versions: RawTransactionArgument<number | bigint[]>
    ];
}
/** Creates a new Deps struct, AccountProtocol must be the first dependency. */
export function _new(options: NewOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        '0x1ac1e0ddfc88c189c78a6001a77c80f36a820335448bc110f2885f809e91cb62::extensions::Extensions',
        'bool',
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        'vector<address>',
        'vector<u64>'
    ] satisfies string[];
    const parameterNames = ["extensions", "unverifiedAllowed", "names", "addresses", "versions"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'new',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewLatestExtensionsArguments {
    extensions: RawTransactionArgument<string>;
    names: RawTransactionArgument<string[]>;
}
export interface NewLatestExtensionsOptions {
    package?: string;
    arguments: NewLatestExtensionsArguments | [
        extensions: RawTransactionArgument<string>,
        names: RawTransactionArgument<string[]>
    ];
}
/**
 * Creates a new Deps struct from latest packages for names. Unverified packages
 * are not allowed after this operation.
 */
export function newLatestExtensions(options: NewLatestExtensionsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        '0x1ac1e0ddfc88c189c78a6001a77c80f36a820335448bc110f2885f809e91cb62::extensions::Extensions',
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>'
    ] satisfies string[];
    const parameterNames = ["extensions", "names"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'new_latest_extensions',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewInnerArguments {
    extensions: RawTransactionArgument<string>;
    deps: RawTransactionArgument<string>;
    names: RawTransactionArgument<string[]>;
    addresses: RawTransactionArgument<string[]>;
    versions: RawTransactionArgument<number | bigint[]>;
}
export interface NewInnerOptions {
    package?: string;
    arguments: NewInnerArguments | [
        extensions: RawTransactionArgument<string>,
        deps: RawTransactionArgument<string>,
        names: RawTransactionArgument<string[]>,
        addresses: RawTransactionArgument<string[]>,
        versions: RawTransactionArgument<number | bigint[]>
    ];
}
export function newInner(options: NewInnerOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        '0x1ac1e0ddfc88c189c78a6001a77c80f36a820335448bc110f2885f809e91cb62::extensions::Extensions',
        `${packageAddress}::deps::Deps`,
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        'vector<address>',
        'vector<u64>'
    ] satisfies string[];
    const parameterNames = ["extensions", "deps", "names", "addresses", "versions"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'new_inner',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface InnerMutArguments {
    deps: RawTransactionArgument<string>;
}
export interface InnerMutOptions {
    package?: string;
    arguments: InnerMutArguments | [
        deps: RawTransactionArgument<string>
    ];
}
/** Safe because deps_mut is only accessible in this package. */
export function innerMut(options: InnerMutOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`
    ] satisfies string[];
    const parameterNames = ["deps"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'inner_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface CheckArguments {
    deps: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
}
export interface CheckOptions {
    package?: string;
    arguments: CheckArguments | [
        deps: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>
    ];
}
/** Checks if a package is a dependency. */
export function check(options: CheckOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["deps", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'check',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface UnverifiedAllowedArguments {
    deps: RawTransactionArgument<string>;
}
export interface UnverifiedAllowedOptions {
    package?: string;
    arguments: UnverifiedAllowedArguments | [
        deps: RawTransactionArgument<string>
    ];
}
/** Returns true if unverified packages are allowed. */
export function unverifiedAllowed(options: UnverifiedAllowedOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`
    ] satisfies string[];
    const parameterNames = ["deps"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'unverified_allowed',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface GetByIdxArguments {
    deps: RawTransactionArgument<string>;
    idx: RawTransactionArgument<number | bigint>;
}
export interface GetByIdxOptions {
    package?: string;
    arguments: GetByIdxArguments | [
        deps: RawTransactionArgument<string>,
        idx: RawTransactionArgument<number | bigint>
    ];
}
/** Returns a dependency by index. */
export function getByIdx(options: GetByIdxOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`,
        'u64'
    ] satisfies string[];
    const parameterNames = ["deps", "idx"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'get_by_idx',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface GetByNameArguments {
    deps: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface GetByNameOptions {
    package?: string;
    arguments: GetByNameArguments | [
        deps: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
}
/** Returns a dependency by name. */
export function getByName(options: GetByNameOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["deps", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'get_by_name',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface GetByAddrArguments {
    deps: RawTransactionArgument<string>;
    addr: RawTransactionArgument<string>;
}
export interface GetByAddrOptions {
    package?: string;
    arguments: GetByAddrArguments | [
        deps: RawTransactionArgument<string>,
        addr: RawTransactionArgument<string>
    ];
}
/** Returns a dependency by address. */
export function getByAddr(options: GetByAddrOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`,
        'address'
    ] satisfies string[];
    const parameterNames = ["deps", "addr"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'get_by_addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface LengthArguments {
    deps: RawTransactionArgument<string>;
}
export interface LengthOptions {
    package?: string;
    arguments: LengthArguments | [
        deps: RawTransactionArgument<string>
    ];
}
/** Returns the number of dependencies. */
export function length(options: LengthOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`
    ] satisfies string[];
    const parameterNames = ["deps"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'length',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NameArguments {
    dep: RawTransactionArgument<string>;
}
export interface NameOptions {
    package?: string;
    arguments: NameArguments | [
        dep: RawTransactionArgument<string>
    ];
}
/** Returns the name of a dependency. */
export function name(options: NameOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Dep`
    ] satisfies string[];
    const parameterNames = ["dep"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'name',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface AddrArguments {
    dep: RawTransactionArgument<string>;
}
export interface AddrOptions {
    package?: string;
    arguments: AddrArguments | [
        dep: RawTransactionArgument<string>
    ];
}
/** Returns the address of a dependency. */
export function addr(options: AddrOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Dep`
    ] satisfies string[];
    const parameterNames = ["dep"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface VersionArguments {
    dep: RawTransactionArgument<string>;
}
export interface VersionOptions {
    package?: string;
    arguments: VersionArguments | [
        dep: RawTransactionArgument<string>
    ];
}
/** Returns the version of a dependency. */
export function version(options: VersionOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Dep`
    ] satisfies string[];
    const parameterNames = ["dep"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'version',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ContainsNameArguments {
    deps: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface ContainsNameOptions {
    package?: string;
    arguments: ContainsNameArguments | [
        deps: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
}
/** Returns true if a dependency exists by name. */
export function containsName(options: ContainsNameOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["deps", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'contains_name',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ContainsAddrArguments {
    deps: RawTransactionArgument<string>;
    addr: RawTransactionArgument<string>;
}
export interface ContainsAddrOptions {
    package?: string;
    arguments: ContainsAddrArguments | [
        deps: RawTransactionArgument<string>,
        addr: RawTransactionArgument<string>
    ];
}
/** Returns true if a dependency exists by address. */
export function containsAddr(options: ContainsAddrOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::deps::Deps`,
        'address'
    ] satisfies string[];
    const parameterNames = ["deps", "addr"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'deps',
        function: 'contains_addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}