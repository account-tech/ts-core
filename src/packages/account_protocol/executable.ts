/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * The Executable struct is hot potato constructed from an Intent that has been
 * resolved. It ensures that the actions are executed as intended as it can't be
 * stored. Action index is tracked to ensure each action is executed exactly once.
 */

import { type BcsType, bcs } from '@mysten/sui/bcs';
import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { type Transaction } from '@mysten/sui/transactions';
import * as intents from './intents.js';
const $moduleName = '@account/protocol::executable';
/** Hot potato ensuring the actions in the intent are executed as intended. */
export function Executable<Outcome extends BcsType<any>>(...typeParameters: [
    Outcome
]) {
    return new MoveStruct({ name: `${$moduleName}::Executable<${typeParameters[0].name as Outcome['name']}>`, fields: {
            intent: intents.Intent(typeParameters[0]),
            action_idx: bcs.u64()
        } });
}
export interface IntentArguments {
    executable: RawTransactionArgument<string>;
}
export interface IntentOptions {
    package?: string;
    arguments: IntentArguments | [
        executable: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the issuer of the corresponding intent */
export function intent(options: IntentOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'executable',
        function: 'intent',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ActionIdxArguments {
    executable: RawTransactionArgument<string>;
}
export interface ActionIdxOptions {
    package?: string;
    arguments: ActionIdxArguments | [
        executable: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the current action index */
export function actionIdx(options: ActionIdxOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'executable',
        function: 'action_idx',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ContainsActionArguments {
    executable: RawTransactionArgument<string>;
}
export interface ContainsActionOptions {
    package?: string;
    arguments: ContainsActionArguments | [
        executable: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
export function containsAction(options: ContainsActionOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'executable',
        function: 'contains_action',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NextActionArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NextActionOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NextActionArguments<IW> | [
        executable: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
export function nextAction<IW extends BcsType<any>>(options: NextActionOptions<IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::executable::Executable<${options.typeArguments[0]}>`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["executable", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'executable',
        function: 'next_action',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}