/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { MoveTuple, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::package_upgrade_intents';
export const UpgradePackageIntent = new MoveTuple({ name: `${$moduleName}::UpgradePackageIntent`, fields: [bcs.bool()] });
export const RestrictPolicyIntent = new MoveTuple({ name: `${$moduleName}::RestrictPolicyIntent`, fields: [bcs.bool()] });
export interface RequestUpgradePackageArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    packageName: RawTransactionArgument<string>;
    digest: RawTransactionArgument<number[]>;
}
export interface RequestUpgradePackageOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestUpgradePackageArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        packageName: RawTransactionArgument<string>,
        digest: RawTransactionArgument<number[]>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates an UpgradePackageIntent and adds it to an Account. */
export function requestUpgradePackage<Outcome extends BcsType<any>>(options: RequestUpgradePackageOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Params',
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'vector<u8>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "packageName", "digest"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade_intents',
        function: 'request_upgrade_package',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteUpgradePackageArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteUpgradePackageOptions {
    package?: string;
    arguments: ExecuteUpgradePackageArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Executes an UpgradePackageIntent, returns the UpgradeTicket for upgrading. */
export function executeUpgradePackage(options: ExecuteUpgradePackageOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::clock::Clock'
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade_intents',
        function: 'execute_upgrade_package',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteCommitUpgradeArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    receipt: RawTransactionArgument<string>;
}
export interface ExecuteCommitUpgradeOptions {
    package?: string;
    arguments: ExecuteCommitUpgradeArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        receipt: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Need to consume the ticket to upgrade the package before completing the intent. */
export function executeCommitUpgrade(options: ExecuteCommitUpgradeOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::package::UpgradeReceipt'
    ] satisfies string[];
    const parameterNames = ["executable", "account", "receipt"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade_intents',
        function: 'execute_commit_upgrade',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestRestrictPolicyArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    packageName: RawTransactionArgument<string>;
    policy: RawTransactionArgument<number>;
}
export interface RequestRestrictPolicyOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestRestrictPolicyArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        packageName: RawTransactionArgument<string>,
        policy: RawTransactionArgument<number>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a RestrictPolicyIntent and adds it to an Account. */
export function requestRestrictPolicy<Outcome extends BcsType<any>>(options: RequestRestrictPolicyOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Params',
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'u8'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "packageName", "policy"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade_intents',
        function: 'request_restrict_policy',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteRestrictPolicyArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteRestrictPolicyOptions {
    package?: string;
    arguments: ExecuteRestrictPolicyArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Restricts the upgrade policy. */
export function executeRestrictPolicy(options: ExecuteRestrictPolicyOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'package_upgrade_intents',
        function: 'execute_restrict_policy',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}