/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/
import { MoveTuple, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::currency_intents';
export const DisableRulesIntent = new MoveTuple({ name: `${$moduleName}::DisableRulesIntent`, fields: [bcs.bool()] });
export const UpdateMetadataIntent = new MoveTuple({ name: `${$moduleName}::UpdateMetadataIntent`, fields: [bcs.bool()] });
export const MintAndTransferIntent = new MoveTuple({ name: `${$moduleName}::MintAndTransferIntent`, fields: [bcs.bool()] });
export const MintAndVestIntent = new MoveTuple({ name: `${$moduleName}::MintAndVestIntent`, fields: [bcs.bool()] });
export const WithdrawAndBurnIntent = new MoveTuple({ name: `${$moduleName}::WithdrawAndBurnIntent`, fields: [bcs.bool()] });
export interface RequestDisableRulesArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    mint: RawTransactionArgument<boolean>;
    burn: RawTransactionArgument<boolean>;
    updateSymbol: RawTransactionArgument<boolean>;
    updateName: RawTransactionArgument<boolean>;
    updateDescription: RawTransactionArgument<boolean>;
    updateIcon: RawTransactionArgument<boolean>;
}
export interface RequestDisableRulesOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestDisableRulesArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        mint: RawTransactionArgument<boolean>,
        burn: RawTransactionArgument<boolean>,
        updateSymbol: RawTransactionArgument<boolean>,
        updateName: RawTransactionArgument<boolean>,
        updateDescription: RawTransactionArgument<boolean>,
        updateIcon: RawTransactionArgument<boolean>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a DisableRulesIntent and adds it to an Account. */
export function requestDisableRules<Outcome extends BcsType<any>>(options: RequestDisableRulesOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Params',
        `${options.typeArguments[1]}`,
        'bool',
        'bool',
        'bool',
        'bool',
        'bool',
        'bool'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "mint", "burn", "updateSymbol", "updateName", "updateDescription", "updateIcon"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'request_disable_rules',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteDisableRulesArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteDisableRulesOptions {
    package?: string;
    arguments: ExecuteDisableRulesArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes a DisableRulesIntent, disables rules for the coin forever. */
export function executeDisableRules(options: ExecuteDisableRulesOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'execute_disable_rules',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestUpdateMetadataArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    mdSymbol: RawTransactionArgument<string | null>;
    mdName: RawTransactionArgument<string | null>;
    mdDescription: RawTransactionArgument<string | null>;
    mdIconUrl: RawTransactionArgument<string | null>;
}
export interface RequestUpdateMetadataOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestUpdateMetadataArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        mdSymbol: RawTransactionArgument<string | null>,
        mdName: RawTransactionArgument<string | null>,
        mdDescription: RawTransactionArgument<string | null>,
        mdIconUrl: RawTransactionArgument<string | null>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates an UpdateMetadataIntent and adds it to an Account. */
export function requestUpdateMetadata<Outcome extends BcsType<any>>(options: RequestUpdateMetadataOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Params',
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::ascii::String>',
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::ascii::String>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "mdSymbol", "mdName", "mdDescription", "mdIconUrl"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'request_update_metadata',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteUpdateMetadataArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    metadata: RawTransactionArgument<string>;
}
export interface ExecuteUpdateMetadataOptions {
    package?: string;
    arguments: ExecuteUpdateMetadataArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        metadata: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes an UpdateMetadataIntent, updates the CoinMetadata. */
export function executeUpdateMetadata(options: ExecuteUpdateMetadataOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::CoinMetadata<${options.typeArguments[2]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "metadata"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'execute_update_metadata',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestMintAndTransferArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    amounts: RawTransactionArgument<number | bigint[]>;
    recipients: RawTransactionArgument<string[]>;
}
export interface RequestMintAndTransferOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestMintAndTransferArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        amounts: RawTransactionArgument<number | bigint[]>,
        recipients: RawTransactionArgument<string[]>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a MintAndTransferIntent and adds it to an Account. */
export function requestMintAndTransfer<Outcome extends BcsType<any>>(options: RequestMintAndTransferOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Params',
        `${options.typeArguments[1]}`,
        'vector<u64>',
        'vector<address>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "amounts", "recipients"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'request_mint_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteMintAndTransferArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteMintAndTransferOptions {
    package?: string;
    arguments: ExecuteMintAndTransferArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes a MintAndTransferIntent, sends managed coins. Can be looped over. */
export function executeMintAndTransfer(options: ExecuteMintAndTransferOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'execute_mint_and_transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestMintAndVestArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    totalAmount: RawTransactionArgument<number | bigint>;
    startTimestamp: RawTransactionArgument<number | bigint>;
    endTimestamp: RawTransactionArgument<number | bigint>;
    recipient: RawTransactionArgument<string>;
}
export interface RequestMintAndVestOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestMintAndVestArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        totalAmount: RawTransactionArgument<number | bigint>,
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
/** Creates a MintAndVestIntent and adds it to an Account. */
export function requestMintAndVest<Outcome extends BcsType<any>>(options: RequestMintAndVestOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Params',
        `${options.typeArguments[1]}`,
        'u64',
        'u64',
        'u64',
        'address'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "totalAmount", "startTimestamp", "endTimestamp", "recipient"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'request_mint_and_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteMintAndVestArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
}
export interface ExecuteMintAndVestOptions {
    package?: string;
    arguments: ExecuteMintAndVestArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes a MintAndVestIntent, sends managed coins and creates a vesting. */
export function executeMintAndVest(options: ExecuteMintAndVestOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["executable", "account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'execute_mint_and_vest',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RequestWithdrawAndBurnArguments<Outcome extends BcsType<any>> {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    amount: RawTransactionArgument<number | bigint>;
}
export interface RequestWithdrawAndBurnOptions<Outcome extends BcsType<any>> {
    package?: string;
    arguments: RequestWithdrawAndBurnArguments<Outcome> | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        amount: RawTransactionArgument<number | bigint>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a WithdrawAndBurnIntent and adds it to an Account. */
export function requestWithdrawAndBurn<Outcome extends BcsType<any>>(options: RequestWithdrawAndBurnOptions<Outcome>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Auth',
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        '0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::intents::Params',
        `${options.typeArguments[1]}`,
        'u64'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "params", "outcome", "amount"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'request_withdraw_and_burn',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ExecuteWithdrawAndBurnArguments {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    coins: RawTransactionArgument<string[]>;
}
export interface ExecuteWithdrawAndBurnOptions {
    package?: string;
    arguments: ExecuteWithdrawAndBurnArguments | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        coins: RawTransactionArgument<string[]>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Executes a WithdrawAndBurnIntent, burns a coin owned by the account. */
export function executeWithdrawAndBurn(options: ExecuteWithdrawAndBurnOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::executable::Executable<${options.typeArguments[1]}>`,
        `0xb4cb9bfc37d340519e834165d6fc791ec279f756c2d3a3e2086ec22e09c04d3b::account::Account<${options.typeArguments[0]}>`,
        `vector<0x0000000000000000000000000000000000000000000000000000000000000002::transfer::Receiving<0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[2]}>>>`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "coins"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency_intents',
        function: 'execute_withdraw_and_burn',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}