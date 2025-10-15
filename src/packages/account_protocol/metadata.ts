/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This module manages the metadata field of Account. It provides the interface to
 * create and get the fields of a Metadata struct.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as vec_map from './deps/sui/vec_map.js';
const $moduleName = '@account/protocol::metadata';
export const Metadata = new MoveStruct({ name: `${$moduleName}::Metadata`, fields: {
        inner: vec_map.VecMap(bcs.string(), bcs.string())
    } });
export interface EmptyOptions {
    package?: string;
    arguments?: [
    ];
}
/** Creates an empty Metadata struct */
export function empty(options: EmptyOptions = {}) {
    const packageAddress = options.package ?? '@account/protocol';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'metadata',
        function: 'empty',
    });
}
export interface FromKeysValuesArguments {
    keys: RawTransactionArgument<string[]>;
    values: RawTransactionArgument<string[]>;
}
export interface FromKeysValuesOptions {
    package?: string;
    arguments: FromKeysValuesArguments | [
        keys: RawTransactionArgument<string[]>,
        values: RawTransactionArgument<string[]>
    ];
}
/** Creates a new Metadata struct from keys and values. */
export function fromKeysValues(options: FromKeysValuesOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        'vector<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>'
    ] satisfies string[];
    const parameterNames = ["keys", "values"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'metadata',
        function: 'from_keys_values',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface GetArguments {
    metadata: RawTransactionArgument<string>;
    key: RawTransactionArgument<string>;
}
export interface GetOptions {
    package?: string;
    arguments: GetArguments | [
        metadata: RawTransactionArgument<string>,
        key: RawTransactionArgument<string>
    ];
}
/** Gets the value for the key. */
export function get(options: GetOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::metadata::Metadata`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["metadata", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'metadata',
        function: 'get',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface GetEntryByIdxArguments {
    metadata: RawTransactionArgument<string>;
    idx: RawTransactionArgument<number | bigint>;
}
export interface GetEntryByIdxOptions {
    package?: string;
    arguments: GetEntryByIdxArguments | [
        metadata: RawTransactionArgument<string>,
        idx: RawTransactionArgument<number | bigint>
    ];
}
/** Gets the entry at the index. */
export function getEntryByIdx(options: GetEntryByIdxOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::metadata::Metadata`,
        'u64'
    ] satisfies string[];
    const parameterNames = ["metadata", "idx"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'metadata',
        function: 'get_entry_by_idx',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface LengthArguments {
    metadata: RawTransactionArgument<string>;
}
export interface LengthOptions {
    package?: string;
    arguments: LengthArguments | [
        metadata: RawTransactionArgument<string>
    ];
}
/** Returns the number of entries. */
export function length(options: LengthOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::metadata::Metadata`
    ] satisfies string[];
    const parameterNames = ["metadata"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'metadata',
        function: 'length',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}