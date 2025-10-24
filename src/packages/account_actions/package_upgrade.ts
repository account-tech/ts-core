/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Package managers can lock UpgradeCaps in the account. Caps can't be unlocked,
 * this is to enforce the policies. Any rule can be defined for the upgrade lock.
 * The module provide a timelock rule by default, based on execution time. Upon
 * locking, the user can define an optional timelock corresponding to the minimum
 * delay between an upgrade proposal and its execution. The account can decide to
 * make the policy more restrictive or destroy the Cap, to make the package
 * immutable.
 */

import { MoveTuple, MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as vec_map from './deps/sui/vec_map.js';
const $moduleName = '@account/actions::package_upgrade';
export const UpgradeCapKey = new MoveTuple({ name: `${$moduleName}::UpgradeCapKey`, fields: [bcs.string()] });
export const UpgradeRulesKey = new MoveTuple({ name: `${$moduleName}::UpgradeRulesKey`, fields: [bcs.string()] });
export const UpgradeIndexKey = new MoveTuple({ name: `${$moduleName}::UpgradeIndexKey`, fields: [bcs.bool()] });
export const UpgradeRules = new MoveStruct({ name: `${$moduleName}::UpgradeRules`, fields: {
        delay_ms: bcs.u64()
    } });
export const UpgradeIndex = new MoveStruct({ name: `${$moduleName}::UpgradeIndex`, fields: {
        packages_info: vec_map.VecMap(bcs.string(), bcs.Address)
    } });
export const UpgradeAction = new MoveStruct({ name: `${$moduleName}::UpgradeAction`, fields: {
        name: bcs.string(),
        digest: bcs.vector(bcs.u8())
    } });
export const CommitAction = new MoveStruct({ name: `${$moduleName}::CommitAction`, fields: {
        name: bcs.string()
    } });
export const RestrictAction = new MoveStruct({ name: `${$moduleName}::RestrictAction`, fields: {
        name: bcs.string(),
        policy: bcs.u8()
    } });
export interface LockCapArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    cap: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    delayMs: RawTransactionArgument<number | bigint>;
}
export interface LockCapOptions {
    package?: string;
    arguments: LockCapArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        cap: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        delayMs: RawTransactionArgument<number | bigint>
    ];
    typeArguments: [
        string
    ];
}
/** Attaches the UpgradeCap as a Dynamic Object Field to the account. */
export function lockCap(options: LockCapOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::package::UpgradeCap',
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'u64'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "cap", "name", "delayMs"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'lock_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface HasCapArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface HasCapOptions {
    package?: string;
    arguments: HasCapArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the account has an UpgradeCap for a given package name. */
export function hasCap(options: HasCapOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'has_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetCapPackageArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface GetCapPackageOptions {
    package?: string;
    arguments: GetCapPackageArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the address of the package for a given package name. */
export function getCapPackage(options: GetCapPackageOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'get_cap_package',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetCapVersionArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface GetCapVersionOptions {
    package?: string;
    arguments: GetCapVersionArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the version of the UpgradeCap for a given package name. */
export function getCapVersion(options: GetCapVersionOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'get_cap_version',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetCapPolicyArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface GetCapPolicyOptions {
    package?: string;
    arguments: GetCapPolicyArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the policy of the UpgradeCap for a given package name. */
export function getCapPolicy(options: GetCapPolicyOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'get_cap_policy',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetTimeDelayArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface GetTimeDelayOptions {
    package?: string;
    arguments: GetTimeDelayArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the timelock of the UpgradeRules for a given package name. */
export function getTimeDelay(options: GetTimeDelayOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'get_time_delay',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetPackagesInfoArguments {
    account: RawTransactionArgument<string>;
}
export interface GetPackagesInfoOptions {
    package?: string;
    arguments: GetPackagesInfoArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the map of package names to package addresses. */
export function getPackagesInfo(options: GetPackagesInfoOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'get_packages_info',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface IsPackageManagedArguments {
    account: RawTransactionArgument<string>;
    packageAddr: RawTransactionArgument<string>;
}
export interface IsPackageManagedOptions {
    package?: string;
    arguments: IsPackageManagedArguments | [
        account: RawTransactionArgument<string>,
        packageAddr: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the package is managed by the account. */
export function isPackageManaged(options: IsPackageManagedOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        'address'
    ] satisfies string[];
    const parameterNames = ["account", "packageAddr"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'is_package_managed',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetPackageAddrArguments {
    account: RawTransactionArgument<string>;
    packageName: RawTransactionArgument<string>;
}
export interface GetPackageAddrOptions {
    package?: string;
    arguments: GetPackageAddrArguments | [
        account: RawTransactionArgument<string>,
        packageName: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the address of the package for a given package name. */
export function getPackageAddr(options: GetPackageAddrOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "packageName"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'get_package_addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetPackageNameArguments {
    account: RawTransactionArgument<string>;
    packageAddr: RawTransactionArgument<string>;
}
export interface GetPackageNameOptions {
    package?: string;
    arguments: GetPackageNameArguments | [
        account: RawTransactionArgument<string>,
        packageAddr: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the package name for a given package address. */
export function getPackageName(options: GetPackageNameOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        'address'
    ] satisfies string[];
    const parameterNames = ["account", "packageAddr"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'get_package_name',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewUpgradeArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    digest: RawTransactionArgument<number[]>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewUpgradeOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewUpgradeArguments<IW> | [
        intent: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        digest: RawTransactionArgument<number[]>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a new UpgradeAction and adds it to an intent. */
export function newUpgrade<IW extends BcsType<any>>(options: NewUpgradeOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'vector<u8>',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "name", "digest", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'new_upgrade',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoUpgradeArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoUpgradeOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoUpgradeArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Processes an UpgradeAction and returns a UpgradeTicket. */
export function doUpgrade<IW extends BcsType<any>>(options: DoUpgradeOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::clock::Clock',
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::version_witness::VersionWitness',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'do_upgrade',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteUpgradeArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteUpgradeOptions {
    package?: string;
    arguments: DeleteUpgradeArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes an UpgradeAction from an expired intent. */
export function deleteUpgrade(options: DeleteUpgradeOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'delete_upgrade',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewCommitArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewCommitOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewCommitArguments<IW> | [
        intent: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a new CommitAction and adds it to an intent. */
export function newCommit<IW extends BcsType<any>>(options: NewCommitOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "name", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'new_commit',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoCommitArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    receipt: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoCommitOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoCommitArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        receipt: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Commits an upgrade and updates the index with the new package address. */
export function doCommit<IW extends BcsType<any>>(options: DoCommitOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::package::UpgradeReceipt',
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::version_witness::VersionWitness',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "receipt", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'do_commit',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteCommitArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteCommitOptions {
    package?: string;
    arguments: DeleteCommitArguments | [
        expired: RawTransactionArgument<string>
    ];
}
export function deleteCommit(options: DeleteCommitOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'delete_commit',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewRestrictArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    policy: RawTransactionArgument<number>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewRestrictOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewRestrictArguments<IW> | [
        intent: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        policy: RawTransactionArgument<number>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a new RestrictAction and adds it to an intent. */
export function newRestrict<IW extends BcsType<any>>(options: NewRestrictOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'u8',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "name", "policy", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'new_restrict',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoRestrictArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoRestrictOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoRestrictArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Processes a RestrictAction and updates the UpgradeCap policy. */
export function doRestrict<IW extends BcsType<any>>(options: DoRestrictOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::version_witness::VersionWitness',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'do_restrict',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteRestrictArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteRestrictOptions {
    package?: string;
    arguments: DeleteRestrictArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes a RestrictAction from an expired intent. */
export function deleteRestrict(options: DeleteRestrictOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade',
        function: 'delete_restrict',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}