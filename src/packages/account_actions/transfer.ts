/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This module defines apis to transfer assets owned or managed by the account. The
 * intents can implement transfers for any action type (e.g. see owned or vault).
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::transfer';
export const TransferAction = new MoveStruct({ name: `${$moduleName}::TransferAction`, fields: {
        recipient: bcs.Address
    } });
export interface NewTransferArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    recipient: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewTransferOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewTransferArguments<IW> | [
        intent: RawTransactionArgument<string>,
        recipient: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a TransferAction and adds it to an intent. */
export function newTransfer<IW extends BcsType<any>>(options: NewTransferOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        'address',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "recipient", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'transfer',
        function: 'new_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoTransferArguments<T extends BcsType<any>, IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    object: RawTransactionArgument<T>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoTransferOptions<T extends BcsType<any>, IW extends BcsType<any>> {
    package?: string;
    arguments: DoTransferArguments<T, IW> | [
        executable: RawTransactionArgument<string>,
        object: RawTransactionArgument<T>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Processes a TransferAction and transfers an object to a recipient. */
export function doTransfer<T extends BcsType<any>, IW extends BcsType<any>>(options: DoTransferOptions<T, IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["executable", "object", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'transfer',
        function: 'do_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteTransferArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteTransferOptions {
    package?: string;
    arguments: DeleteTransferArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes a TransferAction from an expired intent. */
export function deleteTransfer(options: DeleteTransferOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'transfer',
        function: 'delete_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}