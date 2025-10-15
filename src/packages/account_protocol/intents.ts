/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This is the core module managing Intents. It provides the interface to create
 * and execute intents which is used in the `account` module. The `locked` field
 * tracks the owned objects used in an intent, to prevent state changes. e.g.
 * withdraw coinA (value=10sui), coinA must not be split before intent is executed.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { type BcsType, bcs } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as bag from './deps/sui/bag.js';
import * as type_name from './deps/std/type_name.js';
import * as object from './deps/sui/object.js';
const $moduleName = '@account/protocol::intents';
export const Intents = new MoveStruct({ name: `${$moduleName}::Intents`, fields: {
        inner: bag.Bag
    } });
/**
 * Child struct, intent owning a sequence of actions requested to be executed
 * Outcome is a custom struct depending on the config
 */
export function Intent<Outcome extends BcsType<any>>(...typeParameters: [
    Outcome
]) {
    return new MoveStruct({ name: `${$moduleName}::Intent<${typeParameters[0].name as Outcome['name']}>`, fields: {
            type_: type_name.TypeName,
            key: bcs.string(),
            description: bcs.string(),
            account: bcs.Address,
            creator: bcs.Address,
            creation_time: bcs.u64(),
            execution_times: bcs.vector(bcs.u64()),
            expiration_time: bcs.u64(),
            role: bcs.string(),
            actions: bag.Bag,
            outcome: typeParameters[0]
        } });
}
export const Expired = new MoveStruct({ name: `${$moduleName}::Expired`, fields: {
        account: bcs.Address,
        start_index: bcs.u64(),
        actions: bag.Bag
    } });
export const Params = new MoveStruct({ name: `${$moduleName}::Params`, fields: {
        id: object.UID
    } });
export const ParamsFieldsV1 = new MoveStruct({ name: `${$moduleName}::ParamsFieldsV1`, fields: {
        key: bcs.string(),
        description: bcs.string(),
        creation_time: bcs.u64(),
        execution_times: bcs.vector(bcs.u64()),
        expiration_time: bcs.u64()
    } });
export interface NewParamsArguments {
    key: RawTransactionArgument<string>;
    description: RawTransactionArgument<string>;
    executionTimes: RawTransactionArgument<number | bigint[]>;
    expirationTime: RawTransactionArgument<number | bigint>;
}
export interface NewParamsOptions {
    package?: string;
    arguments: NewParamsArguments | [
        key: RawTransactionArgument<string>,
        description: RawTransactionArgument<string>,
        executionTimes: RawTransactionArgument<number | bigint[]>,
        expirationTime: RawTransactionArgument<number | bigint>
    ];
}
export function newParams(options: NewParamsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'vector<u64>',
        'u64',
        '0x0000000000000000000000000000000000000000000000000000000000000002::clock::Clock'
    ] satisfies string[];
    const parameterNames = ["key", "description", "executionTimes", "expirationTime"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'new_params',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewParamsWithRandKeyArguments {
    description: RawTransactionArgument<string>;
    executionTimes: RawTransactionArgument<number | bigint[]>;
    expirationTime: RawTransactionArgument<number | bigint>;
}
export interface NewParamsWithRandKeyOptions {
    package?: string;
    arguments: NewParamsWithRandKeyArguments | [
        description: RawTransactionArgument<string>,
        executionTimes: RawTransactionArgument<number | bigint[]>,
        expirationTime: RawTransactionArgument<number | bigint>
    ];
}
export function newParamsWithRandKey(options: NewParamsWithRandKeyOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'vector<u64>',
        'u64',
        '0x0000000000000000000000000000000000000000000000000000000000000002::clock::Clock'
    ] satisfies string[];
    const parameterNames = ["description", "executionTimes", "expirationTime"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'new_params_with_rand_key',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface AddActionArguments<Action extends BcsType<any>, IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    action: RawTransactionArgument<Action>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface AddActionOptions<Action extends BcsType<any>, IW extends BcsType<any>> {
    package?: string;
    arguments: AddActionArguments<Action, IW> | [
        intent: RawTransactionArgument<string>,
        action: RawTransactionArgument<Action>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
export function addAction<Action extends BcsType<any>, IW extends BcsType<any>>(options: AddActionOptions<Action, IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "action", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'add_action',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RemoveActionArguments {
    expired: RawTransactionArgument<string>;
}
export interface RemoveActionOptions {
    package?: string;
    arguments: RemoveActionArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function removeAction(options: RemoveActionOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'remove_action',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DestroyEmptyExpiredArguments {
    expired: RawTransactionArgument<string>;
}
export interface DestroyEmptyExpiredOptions {
    package?: string;
    arguments: DestroyEmptyExpiredArguments | [
        expired: RawTransactionArgument<string>
    ];
}
export function destroyEmptyExpired(options: DestroyEmptyExpiredOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'destroy_empty_expired',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ParamsKeyArguments {
    params: RawTransactionArgument<string>;
}
export interface ParamsKeyOptions {
    package?: string;
    arguments: ParamsKeyArguments | [
        params: RawTransactionArgument<string>
    ];
}
export function paramsKey(options: ParamsKeyOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Params`
    ] satisfies string[];
    const parameterNames = ["params"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'params_key',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ParamsDescriptionArguments {
    params: RawTransactionArgument<string>;
}
export interface ParamsDescriptionOptions {
    package?: string;
    arguments: ParamsDescriptionArguments | [
        params: RawTransactionArgument<string>
    ];
}
export function paramsDescription(options: ParamsDescriptionOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Params`
    ] satisfies string[];
    const parameterNames = ["params"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'params_description',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ParamsCreationTimeArguments {
    params: RawTransactionArgument<string>;
}
export interface ParamsCreationTimeOptions {
    package?: string;
    arguments: ParamsCreationTimeArguments | [
        params: RawTransactionArgument<string>
    ];
}
export function paramsCreationTime(options: ParamsCreationTimeOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Params`
    ] satisfies string[];
    const parameterNames = ["params"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'params_creation_time',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ParamsExecutionTimesArguments {
    params: RawTransactionArgument<string>;
}
export interface ParamsExecutionTimesOptions {
    package?: string;
    arguments: ParamsExecutionTimesArguments | [
        params: RawTransactionArgument<string>
    ];
}
export function paramsExecutionTimes(options: ParamsExecutionTimesOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Params`
    ] satisfies string[];
    const parameterNames = ["params"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'params_execution_times',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ParamsExpirationTimeArguments {
    params: RawTransactionArgument<string>;
}
export interface ParamsExpirationTimeOptions {
    package?: string;
    arguments: ParamsExpirationTimeArguments | [
        params: RawTransactionArgument<string>
    ];
}
export function paramsExpirationTime(options: ParamsExpirationTimeOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Params`
    ] satisfies string[];
    const parameterNames = ["params"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'params_expiration_time',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface LengthArguments {
    intents: RawTransactionArgument<string>;
}
export interface LengthOptions {
    package?: string;
    arguments: LengthArguments | [
        intents: RawTransactionArgument<string>
    ];
}
export function length(options: LengthOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intents`
    ] satisfies string[];
    const parameterNames = ["intents"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'length',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ContainsArguments {
    intents: RawTransactionArgument<string>;
    key: RawTransactionArgument<string>;
}
export interface ContainsOptions {
    package?: string;
    arguments: ContainsArguments | [
        intents: RawTransactionArgument<string>,
        key: RawTransactionArgument<string>
    ];
}
export function contains(options: ContainsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intents`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["intents", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'contains',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface GetArguments {
    intents: RawTransactionArgument<string>;
    key: RawTransactionArgument<string>;
}
export interface GetOptions {
    package?: string;
    arguments: GetArguments | [
        intents: RawTransactionArgument<string>,
        key: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function get(options: GetOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intents`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["intents", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'get',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface GetMutArguments {
    intents: RawTransactionArgument<string>;
    key: RawTransactionArgument<string>;
}
export interface GetMutOptions {
    package?: string;
    arguments: GetMutArguments | [
        intents: RawTransactionArgument<string>,
        key: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function getMut(options: GetMutOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intents`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["intents", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'get_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface Type_Arguments {
    intent: RawTransactionArgument<string>;
}
export interface Type_Options {
    package?: string;
    arguments: Type_Arguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function type_(options: Type_Options) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'type_',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface KeyArguments {
    intent: RawTransactionArgument<string>;
}
export interface KeyOptions {
    package?: string;
    arguments: KeyArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function key(options: KeyOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'key',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DescriptionArguments {
    intent: RawTransactionArgument<string>;
}
export interface DescriptionOptions {
    package?: string;
    arguments: DescriptionArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function description(options: DescriptionOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'description',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AccountArguments {
    intent: RawTransactionArgument<string>;
}
export interface AccountOptions {
    package?: string;
    arguments: AccountArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function account(options: AccountOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'account',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CreatorArguments {
    intent: RawTransactionArgument<string>;
}
export interface CreatorOptions {
    package?: string;
    arguments: CreatorArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function creator(options: CreatorOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'creator',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CreationTimeArguments {
    intent: RawTransactionArgument<string>;
}
export interface CreationTimeOptions {
    package?: string;
    arguments: CreationTimeArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function creationTime(options: CreationTimeOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'creation_time',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecutionTimesArguments {
    intent: RawTransactionArgument<string>;
}
export interface ExecutionTimesOptions {
    package?: string;
    arguments: ExecutionTimesArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function executionTimes(options: ExecutionTimesOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'execution_times',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExpirationTimeArguments {
    intent: RawTransactionArgument<string>;
}
export interface ExpirationTimeOptions {
    package?: string;
    arguments: ExpirationTimeArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function expirationTime(options: ExpirationTimeOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'expiration_time',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RoleArguments {
    intent: RawTransactionArgument<string>;
}
export interface RoleOptions {
    package?: string;
    arguments: RoleArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function role(options: RoleOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'role',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ActionsArguments {
    intent: RawTransactionArgument<string>;
}
export interface ActionsOptions {
    package?: string;
    arguments: ActionsArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function actions(options: ActionsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'actions',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ActionsMutArguments {
    intent: RawTransactionArgument<string>;
}
export interface ActionsMutOptions {
    package?: string;
    arguments: ActionsMutArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function actionsMut(options: ActionsMutOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'actions_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface OutcomeArguments {
    intent: RawTransactionArgument<string>;
}
export interface OutcomeOptions {
    package?: string;
    arguments: OutcomeArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function outcome(options: OutcomeOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'outcome',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface OutcomeMutArguments {
    intent: RawTransactionArgument<string>;
}
export interface OutcomeMutOptions {
    package?: string;
    arguments: OutcomeMutArguments | [
        intent: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function outcomeMut(options: OutcomeMutOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["intent"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'outcome_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExpiredAccountArguments {
    expired: RawTransactionArgument<string>;
}
export interface ExpiredAccountOptions {
    package?: string;
    arguments: ExpiredAccountArguments | [
        expired: RawTransactionArgument<string>
    ];
}
export function expiredAccount(options: ExpiredAccountOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'expired_account',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ExpiredStartIndexArguments {
    expired: RawTransactionArgument<string>;
}
export interface ExpiredStartIndexOptions {
    package?: string;
    arguments: ExpiredStartIndexArguments | [
        expired: RawTransactionArgument<string>
    ];
}
export function expiredStartIndex(options: ExpiredStartIndexOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'expired_start_index',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ExpiredActionsArguments {
    expired: RawTransactionArgument<string>;
}
export interface ExpiredActionsOptions {
    package?: string;
    arguments: ExpiredActionsArguments | [
        expired: RawTransactionArgument<string>
    ];
}
export function expiredActions(options: ExpiredActionsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'expired_actions',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface AssertIsAccountArguments {
    intent: RawTransactionArgument<string>;
    accountAddr: RawTransactionArgument<string>;
}
export interface AssertIsAccountOptions {
    package?: string;
    arguments: AssertIsAccountArguments | [
        intent: RawTransactionArgument<string>,
        accountAddr: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function assertIsAccount(options: AssertIsAccountOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`,
        'address'
    ] satisfies string[];
    const parameterNames = ["intent", "accountAddr"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'assert_is_account',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AssertIsWitnessArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    _: RawTransactionArgument<IW>;
}
export interface AssertIsWitnessOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: AssertIsWitnessArguments<IW> | [
        intent: RawTransactionArgument<string>,
        _: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
export function assertIsWitness<IW extends BcsType<any>>(options: AssertIsWitnessOptions<IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Intent<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "_"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'assert_is_witness',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AssertExpiredIsAccountArguments {
    expired: RawTransactionArgument<string>;
    accountAddr: RawTransactionArgument<string>;
}
export interface AssertExpiredIsAccountOptions {
    package?: string;
    arguments: AssertExpiredIsAccountArguments | [
        expired: RawTransactionArgument<string>,
        accountAddr: RawTransactionArgument<string>
    ];
}
export function assertExpiredIsAccount(options: AssertExpiredIsAccountOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Expired`,
        'address'
    ] satisfies string[];
    const parameterNames = ["expired", "accountAddr"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'assert_expired_is_account',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface AssertSingleExecutionArguments {
    params: RawTransactionArgument<string>;
}
export interface AssertSingleExecutionOptions {
    package?: string;
    arguments: AssertSingleExecutionArguments | [
        params: RawTransactionArgument<string>
    ];
}
export function assertSingleExecution(options: AssertSingleExecutionOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::intents::Params`
    ] satisfies string[];
    const parameterNames = ["params"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'intents',
        function: 'assert_single_execution',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}