/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This module allows to manage Account settings. The actions are related to the
 * modifications of all the fields of the Account (except Intents and Config). All
 * these fields are encapsulated in the `Account` struct and each managed in their
 * own module. They are only accessible mutably via package functions defined in
 * account.move which are used here only.
 * 
 * Dependencies are all the packages and their versions that the account can call
 * (including this one). The allowed dependencies are defined in the `Extensions`
 * struct and are maintained by account.tech team. Optionally, any package can be
 * added to the account if unverified_allowed is true.
 * 
 * Accounts can choose to use any version of any package and must explicitly
 * migrate to the new version. This is closer to a trustless model preventing
 * anyone with the UpgradeCap from updating the dependencies maliciously.
 */

import { MoveTuple, MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as deps from './deps.js';
const $moduleName = '@account/protocol::config';
export const ConfigDepsIntent = new MoveTuple({ name: `${$moduleName}::ConfigDepsIntent`, fields: [bcs.bool()] });
export const ToggleUnverifiedAllowedIntent = new MoveTuple({ name: `${$moduleName}::ToggleUnverifiedAllowedIntent`, fields: [bcs.bool()] });
export const ConfigDepsAction = new MoveStruct({ name: `${$moduleName}::ConfigDepsAction`, fields: {
        deps: bcs.vector(deps.Dep)
    } });
export const ToggleUnverifiedAllowedAction = new MoveStruct({ name: `${$moduleName}::ToggleUnverifiedAllowedAction`, fields: {
        dummy_field: bcs.bool()
    } });
export interface EditMetadataArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    keys: RawTransactionArgument<string[]>;
    values: RawTransactionArgument<string[]>;
}
export interface EditMetadataOptions {
    package?: string;
    arguments: EditMetadataArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        keys: RawTransactionArgument<string[]>,
        values: RawTransactionArgument<string[]>
    ];
    typeArguments: [
        string
    ];
}
/** Authorized addresses can edit the metadata of the account */
export function editMetadata(options: EditMetadataOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Auth`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "keys", "values"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'edit_metadata',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface UpdateExtensionsToLatestArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    extensions: RawTransactionArgument<string>;
}
export interface UpdateExtensionsToLatestOptions {
    package?: string;
    arguments: UpdateExtensionsToLatestArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        extensions: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/**
 * Authorized addresses can update the existing dependencies of the account to the
 * latest versions
 */
export function updateExtensionsToLatest(options: UpdateExtensionsToLatestOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Auth`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        '0x1ac1e0ddfc88c189c78a6001a77c80f36a820335448bc110f2885f809e91cb62::extensions::Extensions'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "extensions"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'update_extensions_to_latest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestConfigDepsArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    extensions: RawTransactionArgument<string>;
    names: RawTransactionArgument<string[]>;
    addresses: RawTransactionArgument<string[]>;
    versions: RawTransactionArgument<number | bigint[]>;
}
export interface RequestConfigDepsOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestConfigDepsArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        extensions: RawTransactionArgument<string>,
        names: RawTransactionArgument<string[]>,
        addresses: RawTransactionArgument<string[]>,
        versions: RawTransactionArgument<number | bigint[]>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates an intent to update the dependencies of the account */
export function requestConfigDeps<Outcome extends BcsType<any>>(options: RequestConfigDepsOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Auth`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::intents::Params`,
        `${options.typeArguments[1]}`,
        '0x1ac1e0ddfc88c189c78a6001a77c80f36a820335448bc110f2885f809e91cb62::extensions::Extensions',
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        'vector<address>',
        'vector<u64>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "extensions", "names", "addresses", "versions"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'request_config_deps',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteConfigDepsArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteConfigDepsOptions {
    package?: string;
    arguments: ExecuteConfigDepsArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Executes an intent updating the dependencies of the account */
export function executeConfigDeps(options: ExecuteConfigDepsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[1]}>`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'execute_config_deps',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteConfigDepsArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteConfigDepsOptions {
    package?: string;
    arguments: DeleteConfigDepsArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes the ConfigDepsAction from an expired intent */
export function deleteConfigDeps(options: DeleteConfigDepsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'delete_config_deps',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface RequestToggleUnverifiedAllowedArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
}
export interface RequestToggleUnverifiedAllowedOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestToggleUnverifiedAllowedArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates an intent to toggle the unverified_allowed flag of the account */
export function requestToggleUnverifiedAllowed<Outcome extends BcsType<any>>(options: RequestToggleUnverifiedAllowedOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Auth`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::intents::Params`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'request_toggle_unverified_allowed',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteToggleUnverifiedAllowedArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteToggleUnverifiedAllowedOptions {
    package?: string;
    arguments: ExecuteToggleUnverifiedAllowedArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Executes an intent toggling the unverified_allowed flag of the account */
export function executeToggleUnverifiedAllowed(options: ExecuteToggleUnverifiedAllowedOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[1]}>`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'execute_toggle_unverified_allowed',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteToggleUnverifiedAllowedArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteToggleUnverifiedAllowedOptions {
    package?: string;
    arguments: DeleteToggleUnverifiedAllowedArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes the ToggleUnverifiedAllowedAction from an expired intent */
export function deleteToggleUnverifiedAllowed(options: DeleteToggleUnverifiedAllowedOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'config',
        function: 'delete_toggle_unverified_allowed',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}