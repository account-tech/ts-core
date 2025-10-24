/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This module allows objects owned by the account to be accessed through intents
 * in a secure way. The objects can be taken only via an Action which uses Transfer
 * to Object (TTO). This action can't be proposed directly since it wouldn't make
 * sense to withdraw an object without using it.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/protocol::owned';
export const WithdrawObjectAction = new MoveStruct({ name: `${$moduleName}::WithdrawObjectAction`, fields: {
        object_id: bcs.Address
    } });
export const WithdrawCoinAction = new MoveStruct({ name: `${$moduleName}::WithdrawCoinAction`, fields: {
        coin_amount: bcs.u64()
    } });
export interface NewWithdrawObjectArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    objectId: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewWithdrawObjectOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewWithdrawObjectArguments<IW> | [
        intent: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        objectId: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a new WithdrawObjectAction and add it to an intent */
export function newWithdrawObject<IW extends BcsType<any>>(options: NewWithdrawObjectOptions<IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[1]}>`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::object::ID',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "account", "objectId", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned',
        function: 'new_withdraw_object',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoWithdrawObjectArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    receiving: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoWithdrawObjectOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoWithdrawObjectArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        receiving: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Executes a WithdrawObjectAction and returns the object */
export function doWithdrawObject<IW extends BcsType<any>>(options: DoWithdrawObjectOptions<IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[1]}>`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer::Receiving<${options.typeArguments[2]}>`,
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "receiving", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned',
        function: 'do_withdraw_object',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteWithdrawObjectArguments {
    expired: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface DeleteWithdrawObjectOptions {
    package?: string;
    arguments: DeleteWithdrawObjectArguments | [
        expired: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a WithdrawObjectAction from an expired intent */
export function deleteWithdrawObject(options: DeleteWithdrawObjectOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["expired", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned',
        function: 'delete_withdraw_object',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewWithdrawCoinArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    coinAmount: RawTransactionArgument<number | bigint>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewWithdrawCoinOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewWithdrawCoinArguments<IW> | [
        intent: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        coinAmount: RawTransactionArgument<number | bigint>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Creates a new WithdrawObjectAction and add it to an intent */
export function newWithdrawCoin<IW extends BcsType<any>>(options: NewWithdrawCoinOptions<IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[1]}>`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        'u64',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["intent", "account", "coinAmount", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned',
        function: 'new_withdraw_coin',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoWithdrawCoinArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    coins: RawTransactionArgument<string[]>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoWithdrawCoinOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoWithdrawCoinArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        coins: RawTransactionArgument<string[]>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Executes a WithdrawObjectAction and returns the object */
export function doWithdrawCoin<IW extends BcsType<any>>(options: DoWithdrawCoinOptions<IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[1]}>`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `vector<0x0000000000000000000000000000000000000000000000000000000000000002::transfer::Receiving<0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[2]}>>>`,
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "coins", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned',
        function: 'do_withdraw_coin',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteWithdrawCoinArguments {
    expired: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface DeleteWithdrawCoinOptions {
    package?: string;
    arguments: DeleteWithdrawCoinArguments | [
        expired: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Deletes a WithdrawObjectAction from an expired intent */
export function deleteWithdrawCoin(options: DeleteWithdrawCoinOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["expired", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'owned',
        function: 'delete_withdraw_coin',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}