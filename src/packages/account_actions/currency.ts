/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Authenticated users can lock a TreasuryCap in the Account to restrict minting
 * and burning operations, as well as modifying the CoinMetadata.
 */

import { MoveTuple, MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/actions::currency';
export const TreasuryCapKey = new MoveTuple({ name: `${$moduleName}::TreasuryCapKey`, fields: [bcs.bool()] });
export const CurrencyRulesKey = new MoveTuple({ name: `${$moduleName}::CurrencyRulesKey`, fields: [bcs.bool()] });
export const CurrencyRules = new MoveStruct({ name: `${$moduleName}::CurrencyRules`, fields: {
        max_supply: bcs.option(bcs.u64()),
        total_minted: bcs.u64(),
        total_burned: bcs.u64(),
        can_mint: bcs.bool(),
        can_burn: bcs.bool(),
        can_update_symbol: bcs.bool(),
        can_update_name: bcs.bool(),
        can_update_description: bcs.bool(),
        can_update_icon: bcs.bool()
    } });
export const DisableAction = new MoveStruct({ name: `${$moduleName}::DisableAction`, fields: {
        mint: bcs.bool(),
        burn: bcs.bool(),
        update_symbol: bcs.bool(),
        update_name: bcs.bool(),
        update_description: bcs.bool(),
        update_icon: bcs.bool()
    } });
export const MintAction = new MoveStruct({ name: `${$moduleName}::MintAction`, fields: {
        amount: bcs.u64()
    } });
export const BurnAction = new MoveStruct({ name: `${$moduleName}::BurnAction`, fields: {
        amount: bcs.u64()
    } });
export const UpdateAction = new MoveStruct({ name: `${$moduleName}::UpdateAction`, fields: {
        symbol: bcs.option(bcs.string()),
        name: bcs.option(bcs.string()),
        description: bcs.option(bcs.string()),
        icon_url: bcs.option(bcs.string())
    } });
export interface LockCapArguments {
    auth: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    treasuryCap: RawTransactionArgument<string>;
    maxSupply: RawTransactionArgument<number | bigint | null>;
}
export interface LockCapOptions {
    package?: string;
    arguments: LockCapArguments | [
        auth: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        treasuryCap: RawTransactionArgument<string>,
        maxSupply: RawTransactionArgument<number | bigint | null>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Authenticated users can lock a TreasuryCap. */
export function lockCap(options: LockCapOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Auth',
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::TreasuryCap<${options.typeArguments[1]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<u64>'
    ] satisfies string[];
    const parameterNames = ["auth", "account", "treasuryCap", "maxSupply"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'lock_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface HasCapArguments {
    account: RawTransactionArgument<string>;
}
export interface HasCapOptions {
    package?: string;
    arguments: HasCapArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Checks if a TreasuryCap exists for a given coin type. */
export function hasCap(options: HasCapOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'has_cap',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface BorrowRulesArguments {
    account: RawTransactionArgument<string>;
}
export interface BorrowRulesOptions {
    package?: string;
    arguments: BorrowRulesArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Borrows the CurrencyRules for a given coin type. */
export function borrowRules(options: BorrowRulesOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'borrow_rules',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CoinTypeSupplyArguments {
    account: RawTransactionArgument<string>;
}
export interface CoinTypeSupplyOptions {
    package?: string;
    arguments: CoinTypeSupplyArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Returns the total supply of a given coin type. */
export function coinTypeSupply(options: CoinTypeSupplyOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'coin_type_supply',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface MaxSupplyArguments {
    lock: RawTransactionArgument<string>;
}
export interface MaxSupplyOptions {
    package?: string;
    arguments: MaxSupplyArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the maximum supply of a given coin type. */
export function maxSupply(options: MaxSupplyOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'max_supply',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface TotalMintedArguments {
    lock: RawTransactionArgument<string>;
}
export interface TotalMintedOptions {
    package?: string;
    arguments: TotalMintedArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the total amount minted of a given coin type. */
export function totalMinted(options: TotalMintedOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'total_minted',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface TotalBurnedArguments {
    lock: RawTransactionArgument<string>;
}
export interface TotalBurnedOptions {
    package?: string;
    arguments: TotalBurnedArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the total amount burned of a given coin type. */
export function totalBurned(options: TotalBurnedOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'total_burned',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CanMintArguments {
    lock: RawTransactionArgument<string>;
}
export interface CanMintOptions {
    package?: string;
    arguments: CanMintArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the coin type can mint. */
export function canMint(options: CanMintOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'can_mint',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CanBurnArguments {
    lock: RawTransactionArgument<string>;
}
export interface CanBurnOptions {
    package?: string;
    arguments: CanBurnArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the coin type can burn. */
export function canBurn(options: CanBurnOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'can_burn',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CanUpdateSymbolArguments {
    lock: RawTransactionArgument<string>;
}
export interface CanUpdateSymbolOptions {
    package?: string;
    arguments: CanUpdateSymbolArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the coin type can update the symbol. */
export function canUpdateSymbol(options: CanUpdateSymbolOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'can_update_symbol',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CanUpdateNameArguments {
    lock: RawTransactionArgument<string>;
}
export interface CanUpdateNameOptions {
    package?: string;
    arguments: CanUpdateNameArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the coin type can update the name. */
export function canUpdateName(options: CanUpdateNameOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'can_update_name',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CanUpdateDescriptionArguments {
    lock: RawTransactionArgument<string>;
}
export interface CanUpdateDescriptionOptions {
    package?: string;
    arguments: CanUpdateDescriptionArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the coin type can update the description. */
export function canUpdateDescription(options: CanUpdateDescriptionOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'can_update_description',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CanUpdateIconArguments {
    lock: RawTransactionArgument<string>;
}
export interface CanUpdateIconOptions {
    package?: string;
    arguments: CanUpdateIconArguments | [
        lock: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns true if the coin type can update the icon. */
export function canUpdateIcon(options: CanUpdateIconOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `${packageAddress}::currency::CurrencyRules<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["lock"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'can_update_icon',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface PublicBurnArguments {
    account: RawTransactionArgument<string>;
    coin: RawTransactionArgument<string>;
}
export interface PublicBurnOptions {
    package?: string;
    arguments: PublicBurnArguments | [
        account: RawTransactionArgument<string>,
        coin: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Anyone can burn coins they own if enabled. */
export function publicBurn(options: PublicBurnOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[1]}>`
    ] satisfies string[];
    const parameterNames = ["account", "coin"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'public_burn',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewDisableArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    mint: RawTransactionArgument<boolean>;
    burn: RawTransactionArgument<boolean>;
    updateSymbol: RawTransactionArgument<boolean>;
    updateName: RawTransactionArgument<boolean>;
    updateDescription: RawTransactionArgument<boolean>;
    updateIcon: RawTransactionArgument<boolean>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewDisableOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewDisableArguments<IW> | [
        intent: RawTransactionArgument<string>,
        mint: RawTransactionArgument<boolean>,
        burn: RawTransactionArgument<boolean>,
        updateSymbol: RawTransactionArgument<boolean>,
        updateName: RawTransactionArgument<boolean>,
        updateDescription: RawTransactionArgument<boolean>,
        updateIcon: RawTransactionArgument<boolean>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a DisableAction and adds it to an intent. */
export function newDisable<IW extends BcsType<any>>(options: NewDisableOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        'bool',
        'bool',
        'bool',
        'bool',
        'bool',
        'bool',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "mint", "burn", "updateSymbol", "updateName", "updateDescription", "updateIcon", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'new_disable',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoDisableArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoDisableOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoDisableArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Processes a DisableAction and disables the permissions marked as true. */
export function doDisable<IW extends BcsType<any>>(options: DoDisableOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'do_disable',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteDisableArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteDisableOptions {
    package?: string;
    arguments: DeleteDisableArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a DisableAction from an expired intent. */
export function deleteDisable(options: DeleteDisableOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'delete_disable',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewUpdateArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    symbol: RawTransactionArgument<string | null>;
    name: RawTransactionArgument<string | null>;
    description: RawTransactionArgument<string | null>;
    iconUrl: RawTransactionArgument<string | null>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewUpdateOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewUpdateArguments<IW> | [
        intent: RawTransactionArgument<string>,
        symbol: RawTransactionArgument<string | null>,
        name: RawTransactionArgument<string | null>,
        description: RawTransactionArgument<string | null>,
        iconUrl: RawTransactionArgument<string | null>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates an UpdateAction and adds it to an intent. */
export function newUpdate<IW extends BcsType<any>>(options: NewUpdateOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::ascii::String>',
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::string::String>',
        '0x0000000000000000000000000000000000000000000000000000000000000001::option::Option<0x0000000000000000000000000000000000000000000000000000000000000001::ascii::String>',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "symbol", "name", "description", "iconUrl", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'new_update',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoUpdateArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    metadata: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoUpdateOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoUpdateArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        metadata: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Processes an UpdateAction, updates the CoinMetadata. */
export function doUpdate<IW extends BcsType<any>>(options: DoUpdateOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::CoinMetadata<${options.typeArguments[2]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "metadata", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'do_update',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteUpdateArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteUpdateOptions {
    package?: string;
    arguments: DeleteUpdateArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes an UpdateAction from an expired intent. */
export function deleteUpdate(options: DeleteUpdateOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'delete_update',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewMintArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    amount: RawTransactionArgument<number | bigint>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewMintOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewMintArguments<IW> | [
        intent: RawTransactionArgument<string>,
        amount: RawTransactionArgument<number | bigint>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a MintAction and adds it to an intent. */
export function newMint<IW extends BcsType<any>>(options: NewMintOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        'u64',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "amount", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'new_mint',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoMintArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoMintOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoMintArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Processes a MintAction, mints and returns new coins. */
export function doMint<IW extends BcsType<any>>(options: DoMintOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'do_mint',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteMintArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteMintOptions {
    package?: string;
    arguments: DeleteMintArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a MintAction from an expired intent. */
export function deleteMint(options: DeleteMintOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'delete_mint',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewBurnArguments<IW extends BcsType<any>> {
    intent: RawTransactionArgument<string>;
    amount: RawTransactionArgument<number | bigint>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface NewBurnOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: NewBurnArguments<IW> | [
        intent: RawTransactionArgument<string>,
        amount: RawTransactionArgument<number | bigint>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Creates a BurnAction and adds it to an intent. */
export function newBurn<IW extends BcsType<any>>(options: NewBurnOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Intent<${options.typeArguments[0]}>`,
        'u64',
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["intent", "amount", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'new_burn',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DoBurnArguments<IW extends BcsType<any>> {
    executable: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    coin: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface DoBurnOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: DoBurnArguments<IW> | [
        executable: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        coin: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string,
        string
    ];
}
/** Processes a BurnAction, burns coins and returns the amount burned. */
export function doBurn<IW extends BcsType<any>>(options: DoBurnOptions<IW>) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::executable::Executable<${options.typeArguments[1]}>`,
        `0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::account::Account<${options.typeArguments[0]}>`,
        `0x0000000000000000000000000000000000000000000000000000000000000002::coin::Coin<${options.typeArguments[2]}>`,
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::version_witness::VersionWitness',
        `${options.typeArguments[3]}`
    ] satisfies string[];
    const parameterNames = ["executable", "account", "coin", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'do_burn',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteBurnArguments {
    expired: RawTransactionArgument<string>;
}
export interface DeleteBurnOptions {
    package?: string;
    arguments: DeleteBurnArguments | [
        expired: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Deletes a BurnAction from an expired intent. */
export function deleteBurn(options: DeleteBurnOptions) {
    const packageAddress = options.package ?? '@account/actions';
    const argumentsTypes = [
        '0xdbf6eb7acfe83ce0f26fd884ea77b1358395e85dac4c47effd4c50be4d810afc::intents::Expired'
    ] satisfies string[];
    const parameterNames = ["expired"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'currency',
        function: 'delete_burn',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}