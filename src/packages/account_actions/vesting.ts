/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This module provides the apis to create a vesting. A vesting has an amount to be
 * paid at each interval, until the balance is empty. It can be cancelled at any
 * time by the account members.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as object from './deps/sui/object.js';
import * as balance from './deps/sui/balance.js';
const $moduleName = '@account/actions::vesting';
export const Vesting = new MoveStruct({ name: `${$moduleName}::Vesting`, fields: {
        id: object.UID,
        balance: balance.Balance,
        last_claimed: bcs.u64(),
        start_timestamp: bcs.u64(),
        end_timestamp: bcs.u64(),
        recipient: bcs.Address
    } });
export const ClaimCap = new MoveStruct({ name: `${$moduleName}::ClaimCap`, fields: {
        id: object.UID,
        vesting_id: bcs.Address
    } });
export const VestAction = new MoveStruct({ name: `${$moduleName}::VestAction`, fields: {
        start_timestamp: bcs.u64(),
        end_timestamp: bcs.u64(),
        recipient: bcs.Address
    } });
export interface ClaimArguments {
    vesting: RawTransactionArgument<string>;
    cap: RawTransactionArgument<string>;
}
export interface ClaimOptions {
    package?: string;
    arguments: ClaimArguments | [
        vesting: RawTransactionArgument<string>,
        cap: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function claim(options: ClaimOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::Vesting<${options.typeArguments[0]}>`,
        `${packageAddress}::vesting::ClaimCap`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::clock::Clock'
    ] satisfies string[];
    const parameterNames = ["vesting", "cap"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'claim',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CancelPaymentArguments {
    auth: RawTransactionArgument<string>;
    vesting: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface CancelPaymentOptions {
    package?: string;
    arguments: CancelPaymentArguments | [
        auth: RawTransactionArgument<string>,
        vesting: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
export function cancelPayment(options: CancelPaymentOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `${packageAddress}::vesting::Vesting<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["auth", "vesting", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'cancel_payment',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DestroyEmptyArguments {
    vesting: RawTransactionArgument<string>;
}
export interface DestroyEmptyOptions {
    package?: string;
    arguments: DestroyEmptyArguments | [
        vesting: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function destroyEmpty(options: DestroyEmptyOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::Vesting<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["vesting"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'destroy_empty',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DestroyCapArguments {
    cap: RawTransactionArgument<string>;
}
export interface DestroyCapOptions {
    package?: string;
    arguments: DestroyCapArguments | [
        cap: RawTransactionArgument<string>
    ];
}
export function destroyCap(options: DestroyCapOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::ClaimCap`
    ] satisfies string[];
    const parameterNames = ["cap"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'destroy_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface NewVestArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    startTimestamp: RawTransactionArgument<number | bigint>;
    endTimestamp: RawTransactionArgument<number | bigint>;
    recipient: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewVestOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewVestArguments<IW> | [
        intent: RawTransactionArgument<string>,
        startTimestamp: RawTransactionArgument<number | bigint>,
        endTimestamp: RawTransactionArgument<number | bigint>,
        recipient: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a VestAction and adds it to an intent. */
export function newVest<IW extends BcsType<any>>(options: NewVestOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        'u64',
        'u64',
        'address',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["intent", "startTimestamp", "endTimestamp", "recipient", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'new_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoVestArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    coin: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoVestOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoVestArguments<IW> | [
        executable: RawTransactionArgument<string>,
        coin: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Processes a VestAction and creates a vesting. */
export function doVest<IW extends BcsType<any>>(options: DoVestOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[1]}>`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["executable", "coin", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'do_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteVestArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteVestOptions {
    package?: string;
    arguments: DeleteVestArguments | [
        expired: RawTransactionArgument<string>
    ];
}
/** Deletes a VestAction from an expired intent. */
export function deleteVest(options: DeleteVestOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'delete_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface BalanceValueArguments {
    self: RawTransactionArgument<string>;
}
export interface BalanceValueOptions {
    package?: string;
    arguments: BalanceValueArguments | [
        self: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the balance value of a vesting. */
export function balanceValue(options: BalanceValueOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::Vesting<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["self"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'balance_value',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface LastClaimedArguments {
    self: RawTransactionArgument<string>;
}
export interface LastClaimedOptions {
    package?: string;
    arguments: LastClaimedArguments | [
        self: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the last claimed timestamp of a vesting. */
export function lastClaimed(options: LastClaimedOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::Vesting<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["self"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'last_claimed',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface StartTimestampArguments {
    self: RawTransactionArgument<string>;
}
export interface StartTimestampOptions {
    package?: string;
    arguments: StartTimestampArguments | [
        self: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the start timestamp of a vesting. */
export function startTimestamp(options: StartTimestampOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::Vesting<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["self"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'start_timestamp',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface EndTimestampArguments {
    self: RawTransactionArgument<string>;
}
export interface EndTimestampOptions {
    package?: string;
    arguments: EndTimestampArguments | [
        self: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the end timestamp of a vesting. */
export function endTimestamp(options: EndTimestampOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::Vesting<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["self"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'end_timestamp',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RecipientArguments {
    self: RawTransactionArgument<string>;
}
export interface RecipientOptions {
    package?: string;
    arguments: RecipientArguments | [
        self: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the recipient of a vesting. */
export function recipient(options: RecipientOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::vesting::Vesting<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["self"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vesting',
        function: 'recipient',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}