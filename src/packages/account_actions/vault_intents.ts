/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { MoveTuple, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::vault_intents';
export const SpendAndTransferIntent = new MoveTuple({ name: `${$moduleName}::SpendAndTransferIntent`, fields: [bcs.bool()] });
export const SpendAndVestIntent = new MoveTuple({ name: `${$moduleName}::SpendAndVestIntent`, fields: [bcs.bool()] });
export interface RequestSpendAndTransferArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    vaultName: RawTransactionArgument<string>;
    amounts: RawTransactionArgument<number | bigint[]>;
    recipients: RawTransactionArgument<string[]>;
}
export interface RequestSpendAndTransferOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestSpendAndTransferArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        vaultName: RawTransactionArgument<string>,
        amounts: RawTransactionArgument<number | bigint[]>,
        recipients: RawTransactionArgument<string[]>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a SpendAndTransferIntent and adds it to an Account. */
export function requestSpendAndTransfer<Outcome extends BcsType<any>>(options: RequestSpendAndTransferOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Params',
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'vector<u64>',
        'vector<address>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "vaultName", "amounts", "recipients"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault_intents',
        function: 'request_spend_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteSpendAndTransferArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteSpendAndTransferOptions {
    package?: string;
    arguments: ExecuteSpendAndTransferArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Executes a SpendAndTransferIntent, transfers coins from the vault to the
 * recipients. Can be looped over.
 */
export function executeSpendAndTransfer(options: ExecuteSpendAndTransferOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault_intents',
        function: 'execute_spend_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestSpendAndVestArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    vaultName: RawTransactionArgument<string>;
    coinAmount: RawTransactionArgument<number | bigint>;
    startTimestamp: RawTransactionArgument<number | bigint>;
    endTimestamp: RawTransactionArgument<number | bigint>;
    recipient: RawTransactionArgument<string>;
}
export interface RequestSpendAndVestOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestSpendAndVestArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        vaultName: RawTransactionArgument<string>,
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
/** Creates a SpendAndVestIntent and adds it to an Account. */
export function requestSpendAndVest<Outcome extends BcsType<any>>(options: RequestSpendAndVestOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Params',
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'u64',
        'u64',
        'u64',
        'address'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "vaultName", "coinAmount", "startTimestamp", "endTimestamp", "recipient"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault_intents',
        function: 'request_spend_and_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteSpendAndVestArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteSpendAndVestOptions {
    package?: string;
    arguments: ExecuteSpendAndVestArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes a SpendAndVestIntent, create a vesting from a coin in the vault. */
export function executeSpendAndVest(options: ExecuteSpendAndVestOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'vault_intents',
        function: 'execute_spend_and_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}