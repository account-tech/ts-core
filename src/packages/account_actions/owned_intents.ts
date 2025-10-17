/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { MoveTuple, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::owned_intents';
export const WithdrawAndTransferToVaultIntent = new MoveTuple({ name: `${$moduleName}::WithdrawAndTransferToVaultIntent`, fields: [bcs.bool()] });
export const WithdrawObjectsAndTransferIntent = new MoveTuple({ name: `${$moduleName}::WithdrawObjectsAndTransferIntent`, fields: [bcs.bool()] });
export const WithdrawCoinsAndTransferIntent = new MoveTuple({ name: `${$moduleName}::WithdrawCoinsAndTransferIntent`, fields: [bcs.bool()] });
export const WithdrawAndVestIntent = new MoveTuple({ name: `${$moduleName}::WithdrawAndVestIntent`, fields: [bcs.bool()] });
export interface RequestWithdrawAndTransferToVaultArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    coinAmount: RawTransactionArgument<number | bigint>;
    vaultName: RawTransactionArgument<string>;
}
export interface RequestWithdrawAndTransferToVaultOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestWithdrawAndTransferToVaultArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        coinAmount: RawTransactionArgument<number | bigint>,
        vaultName: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a WithdrawAndTransferToVaultIntent and adds it to an Account. */
export function requestWithdrawAndTransferToVault<Outcome extends BcsType<any>>(options: RequestWithdrawAndTransferToVaultOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Auth',
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::intents::Params',
        `${options.typeArguments[1]}`,
        'u64',
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "coinAmount", "vaultName"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'request_withdraw_and_transfer_to_vault',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteWithdrawAndTransferToVaultArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    receiving: RawTransactionArgument<string>;
}
export interface ExecuteWithdrawAndTransferToVaultOptions {
    package?: string;
    arguments: ExecuteWithdrawAndTransferToVaultArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        receiving: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Executes a WithdrawAndTransferToVaultIntent, deposits a coin owned by the
 * account into a vault.
 */
export function executeWithdrawAndTransferToVault(options: ExecuteWithdrawAndTransferToVaultOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::executable::Executable<${options.typeArguments[1]}>`,
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer::Receiving<0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[2]}>>`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "receiving"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'execute_withdraw_and_transfer_to_vault',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestWithdrawObjectsAndTransferArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    objectIds: RawTransactionArgument<string[]>;
    recipients: RawTransactionArgument<string[]>;
}
export interface RequestWithdrawObjectsAndTransferOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestWithdrawObjectsAndTransferArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        objectIds: RawTransactionArgument<string[]>,
        recipients: RawTransactionArgument<string[]>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a WithdrawObjectsAndTransferIntent and adds it to an Account. */
export function requestWithdrawObjectsAndTransfer<Outcome extends BcsType<any>>(options: RequestWithdrawObjectsAndTransferOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Auth',
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::intents::Params',
        `${options.typeArguments[1]}`,
        'vector<0x0000000000000000000000000000000000000000000000000000000000000002::object::ID>',
        'vector<address>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "objectIds", "recipients"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'request_withdraw_objects_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteWithdrawObjectAndTransferArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    receiving: RawTransactionArgument<string>;
}
export interface ExecuteWithdrawObjectAndTransferOptions {
    package?: string;
    arguments: ExecuteWithdrawObjectAndTransferArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        receiving: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Executes a WithdrawObjectsAndTransferIntent, transfers an object owned by the
 * account. Can be looped over.
 */
export function executeWithdrawObjectAndTransfer(options: ExecuteWithdrawObjectAndTransferOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::executable::Executable<${options.typeArguments[1]}>`,
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer::Receiving<${options.typeArguments[2]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "receiving"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'execute_withdraw_object_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestWithdrawCoinAndTransferArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    coinAmounts: RawTransactionArgument<number | bigint[]>;
    recipients: RawTransactionArgument<string[]>;
}
export interface RequestWithdrawCoinAndTransferOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestWithdrawCoinAndTransferArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        coinAmounts: RawTransactionArgument<number | bigint[]>,
        recipients: RawTransactionArgument<string[]>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a WithdrawCoinsAndTransferIntent and adds it to an Account. */
export function requestWithdrawCoinAndTransfer<Outcome extends BcsType<any>>(options: RequestWithdrawCoinAndTransferOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Auth',
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::intents::Params',
        `${options.typeArguments[1]}`,
        'vector<u64>',
        'vector<address>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "coinAmounts", "recipients"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'request_withdraw_coin_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteWithdrawCoinAndTransferArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    receiving: RawTransactionArgument<string>;
}
export interface ExecuteWithdrawCoinAndTransferOptions {
    package?: string;
    arguments: ExecuteWithdrawCoinAndTransferArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        receiving: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Executes a WithdrawCoinsAndTransferIntent, transfers a coin owned by the
 * account. Can be looped over.
 */
export function executeWithdrawCoinAndTransfer(options: ExecuteWithdrawCoinAndTransferOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::executable::Executable<${options.typeArguments[1]}>`,
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer::Receiving<0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[2]}>>`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "receiving"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'execute_withdraw_coin_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestWithdrawAndVestArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    coinAmount: RawTransactionArgument<number | bigint>;
    startTimestamp: RawTransactionArgument<number | bigint>;
    endTimestamp: RawTransactionArgument<number | bigint>;
    recipient: RawTransactionArgument<string>;
}
export interface RequestWithdrawAndVestOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestWithdrawAndVestArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        coinAmount: RawTransactionArgument<number | bigint>,
        startTimestamp: RawTransactionArgument<number | bigint>,
        endTimestamp: RawTransactionArgument<number | bigint>,
        recipient: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a WithdrawAndVestIntent and adds it to an Account. */
export function requestWithdrawAndVest<Outcome extends BcsType<any>>(options: RequestWithdrawAndVestOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Auth',
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::intents::Params',
        `${options.typeArguments[1]}`,
        'u64',
        'u64',
        'u64',
        'address'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "coinAmount", "startTimestamp", "endTimestamp", "recipient"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'request_withdraw_and_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteWithdrawAndVestArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    receiving: RawTransactionArgument<string>;
}
export interface ExecuteWithdrawAndVestOptions {
    package?: string;
    arguments: ExecuteWithdrawAndVestArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        receiving: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes a WithdrawAndVestIntent, withdraws a coin and creates a vesting. */
export function executeWithdrawAndVest(options: ExecuteWithdrawAndVestOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::executable::Executable<${options.typeArguments[1]}>`,
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer::Receiving<0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[2]}>>`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "receiving"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned_intents',
        function: 'execute_withdraw_and_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}