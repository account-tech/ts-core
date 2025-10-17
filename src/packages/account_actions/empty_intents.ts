/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { MoveTuple, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::empty_intents';
export const EmptyIntent = new MoveTuple({ name: `${$moduleName}::EmptyIntent`, fields: [bcs.bool()] });
export interface RequestEmptyArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
}
export interface RequestEmptyOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestEmptyArguments<Outcome> | [
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
/** Creates an EmptyIntent and adds it to an Account. */
export function requestEmpty<Outcome extends BcsType<any>>(options: RequestEmptyOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Auth',
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`,
        '0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::intents::Params',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'empty_intents',
        function: 'request_empty',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteEmptyArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteEmptyOptions {
    package?: string;
    arguments: ExecuteEmptyArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Executes an EmptyIntent (to be able to delete it) */
export function executeEmpty(options: ExecuteEmptyOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::executable::Executable<${options.typeArguments[1]}>`,
        `0xc967e077f5b0f892658d854d5a454f8ed84027d9afd3cab26a5e6d6004637145::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'empty_intents',
        function: 'execute_empty',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}