/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { MoveTuple, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::kiosk_intents';
export const TakeNftsIntent = new MoveTuple({ name: `${$moduleName}::TakeNftsIntent`, fields: [bcs.bool()] });
export const ListNftsIntent = new MoveTuple({ name: `${$moduleName}::ListNftsIntent`, fields: [bcs.bool()] });
export interface RequestTakeNftsArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    kioskName: RawTransactionArgument<string>;
    nftIds: RawTransactionArgument<string[]>;
    recipient: RawTransactionArgument<string>;
}
export interface RequestTakeNftsOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestTakeNftsArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        kioskName: RawTransactionArgument<string>,
        nftIds: RawTransactionArgument<string[]>,
        recipient: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a TakeNftsIntent and adds it to an Account. */
export function requestTakeNfts<Outcome extends BcsType<any>>(options: RequestTakeNftsOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Params',
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'vector<0x0000000000000000000000000000000000000000000000000000000000000002::object::ID>',
        'address'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "kioskName", "nftIds", "recipient"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk_intents',
        function: 'request_take_nfts',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteTakeNftsArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    accountKiosk: RawTransactionArgument<string>;
    recipientKiosk: RawTransactionArgument<string>;
    recipientCap: RawTransactionArgument<string>;
    policy: RawTransactionArgument<string>;
}
export interface ExecuteTakeNftsOptions {
    package?: string;
    arguments: ExecuteTakeNftsArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        accountKiosk: RawTransactionArgument<string>,
        recipientKiosk: RawTransactionArgument<string>,
        recipientCap: RawTransactionArgument<string>,
        policy: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Executes a TakeNftsIntent, takes nfts from a kiosk managed by a account to
 * another kiosk. Can be looped over.
 */
export function executeTakeNfts(options: ExecuteTakeNftsOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk',
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::KioskOwnerCap',
        `0x0000000000000000000000000000000000000000000000000000000000000002::transfer_policy::TransferPolicy<${options.typeArguments[2]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "accountKiosk", "recipientKiosk", "recipientCap", "policy"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk_intents',
        function: 'execute_take_nfts',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestListNftsArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    kioskName: RawTransactionArgument<string>;
    nftIds: RawTransactionArgument<string[]>;
    prices: RawTransactionArgument<number | bigint[]>;
}
export interface RequestListNftsOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestListNftsArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        kioskName: RawTransactionArgument<string>,
        nftIds: RawTransactionArgument<string[]>,
        prices: RawTransactionArgument<number | bigint[]>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Creates a ListNftsIntent and adds it to an Account. */
export function requestListNfts<Outcome extends BcsType<any>>(options: RequestListNftsOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Params',
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        'vector<0x0000000000000000000000000000000000000000000000000000000000000002::object::ID>',
        'vector<u64>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "kioskName", "nftIds", "prices"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk_intents',
        function: 'request_list_nfts',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteListNftsArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    kiosk: RawTransactionArgument<string>;
}
export interface ExecuteListNftsOptions {
    package?: string;
    arguments: ExecuteListNftsArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        kiosk: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Executes a ListNftsIntent, lists nfts in a kiosk managed by a account. Can be
 * looped over.
 */
export function executeListNfts(options: ExecuteListNftsOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000002::kiosk::Kiosk'
    ] satisfies string[];
    const parameterNames = ["executable", "account", "kiosk"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'kiosk_intents',
        function: 'execute_list_nfts',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}