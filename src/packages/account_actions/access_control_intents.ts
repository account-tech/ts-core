/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { MoveTuple, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::access_control_intents';
export const BorrowCapIntent = new MoveTuple({ name: `${$moduleName}::BorrowCapIntent`, fields: [bcs.bool()] });
export interface RequestBorrowCapArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
}
export interface RequestBorrowCapOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestBorrowCapArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a BorrowCapIntent and adds it to an Account. */
export function requestBorrowCap<Outcome extends BcsType<any>>(options: RequestBorrowCapOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Params',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control_intents',
        function: 'request_borrow_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteBorrowCapArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteBorrowCapOptions {
    package?: string;
    arguments: ExecuteBorrowCapArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes a BorrowCapIntent, returns a cap and a hot potato. */
export function executeBorrowCap(options: ExecuteBorrowCapOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control_intents',
        function: 'execute_borrow_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteReturnCapArguments<Cap extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    cap: RawTransactionArgument<Cap>;
}
export interface ExecuteReturnCapOptions<Cap extends BcsType<any>> {
    package?: string;
    arguments: ExecuteReturnCapArguments<Cap> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        cap: RawTransactionArgument<Cap>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Completes a BorrowCapIntent, destroys the executable and returns the cap to the
 * account if the matching hot potato is returned.
 */
export function executeReturnCap<Cap extends BcsType<any>>(options: ExecuteReturnCapOptions<Cap>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "cap"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'access_control_intents',
        function: 'execute_return_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}