/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Members can create multiple vaults with different balances and managers (using
 * roles). This allows for a more flexible and granular way to manage funds.
 */

import { MoveTuple, MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as bag from './deps/sui/bag.js';
const $moduleName = '@account/actions::vault';
export const VaultKey = new MoveTuple({ name: `${$moduleName}::VaultKey`, fields: [bcs.string()] });
export const Vault = new MoveStruct({ name: `${$moduleName}::Vault`, fields: {
        bag: bag.Bag
    } });
export const DepositAction = new MoveStruct({ name: `${$moduleName}::DepositAction`, fields: {
        name: bcs.string(),
        amount: bcs.u64()
    } });
export const SpendAction = new MoveStruct({ name: `${$moduleName}::SpendAction`, fields: {
        name: bcs.string(),
        amount: bcs.u64()
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
/** Authorized address can open a vault. */
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
        module: 'vault',
        function: 'open',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DepositArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    coin: RawTransactionArgument<string>;
}
export interface DepositOptions {
    package?: string;
    arguments: DepositArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        coin: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Deposits coins owned by a an authorized address into a vault. */
export function deposit(options: DepositOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[1]}>`
    ] satisfies string[];
    const parameterNames = ["auth", "account", "name", "coin"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'deposit',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CloseArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface CloseOptions {
    package?: string;
    arguments: CloseArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Closes the vault if empty. */
export function close(options: CloseOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'close',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface HasVaultArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface HasVaultOptions {
    package?: string;
    arguments: HasVaultArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the vault exists. */
export function hasVault(options: HasVaultOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'has_vault',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface BorrowVaultArguments {
    account: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
}
export interface BorrowVaultOptions {
    package?: string;
    arguments: BorrowVaultArguments | [
        account: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns a reference to the vault. */
export function borrowVault(options: BorrowVaultOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "name"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'borrow_vault',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface SizeArguments {
    vault: RawTransactionArgument<string>;
}
export interface SizeOptions {
    package?: string;
    arguments: SizeArguments | [
        vault: RawTransactionArgument<string>
    ];
}
/** Returns the number of coin types in the vault. */
export function size(options: SizeOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vault::Vault`
    ] satisfies string[];
    const parameterNames = ["vault"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'size',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface CoinTypeExistsArguments {
    vault: RawTransactionArgument<string>;
}
export interface CoinTypeExistsOptions {
    package?: string;
    arguments: CoinTypeExistsArguments | [
        vault: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the coin type exists in the vault. */
export function coinTypeExists(options: CoinTypeExistsOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vault::Vault`
    ] satisfies string[];
    const parameterNames = ["vault"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'coin_type_exists',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CoinTypeValueArguments {
    vault: RawTransactionArgument<string>;
}
export interface CoinTypeValueOptions {
    package?: string;
    arguments: CoinTypeValueArguments | [
        vault: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the value of the coin type in the vault. */
export function coinTypeValue(options: CoinTypeValueOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vault::Vault`
    ] satisfies string[];
    const parameterNames = ["vault"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'coin_type_value',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewDepositArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    amount: RawTransactionArgument<number | bigint>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewDepositOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewDepositArguments<IW> | [
        intent: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        amount: RawTransactionArgument<number | bigint>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a DepositAction and adds it to an intent. */
export function newDeposit<IW extends BcsType<any>>(options: NewDepositOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'u64',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "name", "amount", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'new_deposit',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoDepositArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    coin: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoDepositOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoDepositArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        coin: RawTransactionArgument<string>,
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
/** Processes a DepositAction and deposits a coin to the vault. */
export function doDeposit<IW extends BcsType<any>>(options: DoDepositOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[2]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "coin", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'do_deposit',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteDepositArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteDepositOptions {
    package?: string;
    arguments: DeleteDepositArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a DepositAction from an expired intent. */
export function deleteDeposit(options: DeleteDepositOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'delete_deposit',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewSpendArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    name: RawTransactionArgument<string>;
    amount: RawTransactionArgument<number | bigint>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewSpendOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewSpendArguments<IW> | [
        intent: RawTransactionArgument<string>,
        name: RawTransactionArgument<string>,
        amount: RawTransactionArgument<number | bigint>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a SpendAction and adds it to an intent. */
export function newSpend<IW extends BcsType<any>>(options: NewSpendOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'u64',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "name", "amount", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'new_spend',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoSpendArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoSpendOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoSpendArguments<IW> | [
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
/** Processes a SpendAction and takes a coin from the vault. */
export function doSpend<IW extends BcsType<any>>(options: DoSpendOptions<IW>) {
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
        module: 'vault',
        function: 'do_spend',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteSpendArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteSpendOptions {
    package?: string;
    arguments: DeleteSpendArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a SpendAction from an expired intent. */
export function deleteSpend(options: DeleteSpendOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault',
        function: 'delete_spend',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}