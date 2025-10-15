/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This is the core module managing the account Account<Config>. It provides the
 * apis to create, approve and execute intents with actions.
 * 
 * The flow is as follows:
 * 
 * 1.  An intent is created by stacking actions into it. Actions are pushed from
 *     first to last, they must be executed then destroyed in the same order.
 * 2.  When the intent is resolved (threshold reached, quorum reached, etc), it can
 *     be executed. This returns an Executable hot potato constructed from certain
 *     fields of the validated Intent. It is directly passed into action functions
 *     to enforce account approval for an action to be executed.
 * 3.  The module that created the intent must destroy all of the actions and the
 *     Executable after execution by passing the same witness that was used for
 *     instantiation. This prevents the actions or the intent to be stored instead
 *     of executed.
 * 
 * Dependencies can create and manage dynamic fields for an account. They should
 * use custom types as keys to enable access only via the accessors defined.
 * 
 * Functions related to authentication, intent resolution, state of intents and
 * config for an account type must be called from the module that defines the
 * config of the account. They necessitate a config_witness to ensure the caller is
 * a dependency of the account.
 * 
 * The rest of the functions manipulating the common state of accounts are only
 * called within this package.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as object from './deps/sui/object.js';
import * as metadata_1 from './metadata.js';
import * as deps_1 from './deps.js';
import * as intents_1 from './intents.js';
const $moduleName = '@account/protocol::account';
export const ACCOUNT = new MoveStruct({ name: `${$moduleName}::ACCOUNT`, fields: {
        dummy_field: bcs.bool()
    } });
/** Shared multisig Account object. */
export function Account<Config extends BcsType<any>>(...typeParameters: [
    Config
]) {
    return new MoveStruct({ name: `${$moduleName}::Account<${typeParameters[0].name as Config['name']}>`, fields: {
            id: object.UID,
            metadata: metadata_1.Metadata,
            deps: deps_1.Deps,
            intents: intents_1.Intents,
            config: typeParameters[0]
        } });
}
export const Auth = new MoveStruct({ name: `${$moduleName}::Auth`, fields: {
        account_addr: bcs.Address
    } });
export interface ConfirmExecutionArguments {
    account: RawTransactionArgument<string>;
    executable: RawTransactionArgument<string>;
}
export interface ConfirmExecutionOptions {
    package?: string;
    arguments: ConfirmExecutionArguments | [
        account: RawTransactionArgument<string>,
        executable: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * Verifies all actions have been processed and destroys the executable. Called to
 * complete the intent execution.
 */
export function confirmExecution(options: ConfirmExecutionOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::executable::Executable<${options.typeArguments[1]}>`
    ] satisfies string[];
    const parameterNames = ["account", "executable"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'confirm_execution',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DestroyEmptyIntentArguments {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<string>;
}
export interface DestroyEmptyIntentOptions {
    package?: string;
    arguments: DestroyEmptyIntentArguments | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * Destroys an intent if it has no remaining execution. Expired needs to be emptied
 * by deleting each action in the bag within their own module.
 */
export function destroyEmptyIntent(options: DestroyEmptyIntentOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String'
    ] satisfies string[];
    const parameterNames = ["account", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'destroy_empty_intent',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DeleteExpiredIntentArguments {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<string>;
}
export interface DeleteExpiredIntentOptions {
    package?: string;
    arguments: DeleteExpiredIntentArguments | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * Destroys an intent if it has expired. Expired needs to be emptied by deleting
 * each action in the bag within their own module.
 */
export function deleteExpiredIntent(options: DeleteExpiredIntentOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000002::clock::Clock'
    ] satisfies string[];
    const parameterNames = ["account", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'delete_expired_intent',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface KeepArguments<T extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    obj: RawTransactionArgument<T>;
}
export interface KeepOptions<T extends BcsType<any>> {
    package?: string;
    arguments: KeepArguments<T> | [
        account: RawTransactionArgument<string>,
        obj: RawTransactionArgument<T>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Helper function to transfer an object to the account. */
export function keep<T extends BcsType<any>>(options: KeepOptions<T>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["account", "obj"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'keep',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface VerifyArguments {
    account: RawTransactionArgument<string>;
    auth: RawTransactionArgument<string>;
}
export interface VerifyOptions {
    package?: string;
    arguments: VerifyArguments | [
        account: RawTransactionArgument<string>,
        auth: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Unpacks and verifies the Auth matches the account. */
export function verify(options: VerifyOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::account::Auth`
    ] satisfies string[];
    const parameterNames = ["account", "auth"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'verify',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CreateIntentArguments<Outcome extends BcsType<any>, IW extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    params: RawTransactionArgument<string>;
    outcome: RawTransactionArgument<Outcome>;
    managedName: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface CreateIntentOptions<Outcome extends BcsType<any>, IW extends BcsType<any>> {
    package?: string;
    arguments: CreateIntentArguments<Outcome, IW> | [
        account: RawTransactionArgument<string>,
        params: RawTransactionArgument<string>,
        outcome: RawTransactionArgument<Outcome>,
        managedName: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * The following functions are used to compose intents in external modules and
 * packages.
 *
 * The proper instantiation and execution of an intent is ensured by an intent
 * witness. This is a drop only type defined in the intent module preventing other
 * modules to misuse the intent.
 *
 * Additionally, these functions require a version witness which is a protected
 * type for the protocol. It is checked against the dependencies of the account to
 * ensure the package being called is authorized. VersionWitness is a wrapper
 * around a type defined in the version of the package being called. It behaves
 * like a witness but it is usable in the entire package instead of in a single
 * module. Creates a new intent. Can only be called from a dependency of the
 * account.
 */
export function createIntent<Outcome extends BcsType<any>, IW extends BcsType<any>>(options: CreateIntentOptions<Outcome, IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::intents::Params`,
        `${options.typeArguments[1]}`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        `${packageAddress}::version_witness::VersionWitness`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["account", "params", "outcome", "managedName", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'create_intent',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface InsertIntentArguments<IW extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    intent: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    intentWitness: RawTransactionArgument<IW>;
}
export interface InsertIntentOptions<IW extends BcsType<any>> {
    package?: string;
    arguments: InsertIntentArguments<IW> | [
        account: RawTransactionArgument<string>,
        intent: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        intentWitness: RawTransactionArgument<IW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Adds an intent to the account. Can only be called from a dependency of the
 * account.
 */
export function insertIntent<IW extends BcsType<any>>(options: InsertIntentOptions<IW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::intents::Intent<${options.typeArguments[1]}>`,
        `${packageAddress}::version_witness::VersionWitness`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["account", "intent", "versionWitness", "intentWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'insert_intent',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AddManagedDataArguments<Key extends BcsType<any>, Data extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    data: RawTransactionArgument<Data>;
    versionWitness: RawTransactionArgument<string>;
}
export interface AddManagedDataOptions<Key extends BcsType<any>, Data extends BcsType<any>> {
    package?: string;
    arguments: AddManagedDataArguments<Key, Data> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        data: RawTransactionArgument<Data>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Managed data and assets: Data structs and Assets objects attached as dynamic
 * fields to the account object. They are separated to improve objects
 * discoverability on frontends and indexers. Keys must be custom types defined in
 * the same module where the function is implemented. Adds a managed data struct to
 * the account.
 */
export function addManagedData<Key extends BcsType<any>, Data extends BcsType<any>>(options: AddManagedDataOptions<Key, Data>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${options.typeArguments[2]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "data", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'add_managed_data',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface HasManagedDataArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
}
export interface HasManagedDataOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: HasManagedDataArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Checks if a managed data struct exists in the account. */
export function hasManagedData<Key extends BcsType<any>>(options: HasManagedDataOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["account", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'has_managed_data',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface BorrowManagedDataArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    versionWitness: RawTransactionArgument<string>;
}
export interface BorrowManagedDataOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: BorrowManagedDataArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Borrows a managed data struct from the account. */
export function borrowManagedData<Key extends BcsType<any>>(options: BorrowManagedDataOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'borrow_managed_data',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface BorrowManagedDataMutArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    versionWitness: RawTransactionArgument<string>;
}
export interface BorrowManagedDataMutOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: BorrowManagedDataMutArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Borrows a managed data struct mutably from the account. */
export function borrowManagedDataMut<Key extends BcsType<any>>(options: BorrowManagedDataMutOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'borrow_managed_data_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RemoveManagedDataArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    versionWitness: RawTransactionArgument<string>;
}
export interface RemoveManagedDataOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: RemoveManagedDataArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Removes a managed data struct from the account. */
export function removeManagedData<Key extends BcsType<any>>(options: RemoveManagedDataOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'remove_managed_data',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AddManagedAssetArguments<Key extends BcsType<any>, Asset extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    asset: RawTransactionArgument<Asset>;
    versionWitness: RawTransactionArgument<string>;
}
export interface AddManagedAssetOptions<Key extends BcsType<any>, Asset extends BcsType<any>> {
    package?: string;
    arguments: AddManagedAssetArguments<Key, Asset> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        asset: RawTransactionArgument<Asset>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Adds a managed object to the account. */
export function addManagedAsset<Key extends BcsType<any>, Asset extends BcsType<any>>(options: AddManagedAssetOptions<Key, Asset>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${options.typeArguments[2]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "asset", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'add_managed_asset',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface HasManagedAssetArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
}
export interface HasManagedAssetOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: HasManagedAssetArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Checks if a managed object exists in the account. */
export function hasManagedAsset<Key extends BcsType<any>>(options: HasManagedAssetOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["account", "key"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'has_managed_asset',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface BorrowManagedAssetArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    versionWitness: RawTransactionArgument<string>;
}
export interface BorrowManagedAssetOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: BorrowManagedAssetArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Borrows a managed object from the account. */
export function borrowManagedAsset<Key extends BcsType<any>>(options: BorrowManagedAssetOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'borrow_managed_asset',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface BorrowManagedAssetMutArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    versionWitness: RawTransactionArgument<string>;
}
export interface BorrowManagedAssetMutOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: BorrowManagedAssetMutArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Borrows a managed object mutably from the account. */
export function borrowManagedAssetMut<Key extends BcsType<any>>(options: BorrowManagedAssetMutOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'borrow_managed_asset_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RemoveManagedAssetArguments<Key extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<Key>;
    versionWitness: RawTransactionArgument<string>;
}
export interface RemoveManagedAssetOptions<Key extends BcsType<any>> {
    package?: string;
    arguments: RemoveManagedAssetArguments<Key> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<Key>,
        versionWitness: RawTransactionArgument<string>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/** Removes a managed object from the account. */
export function removeManagedAsset<Key extends BcsType<any>>(options: RemoveManagedAssetOptions<Key>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`,
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["account", "key", "versionWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'remove_managed_asset',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewArguments<Config extends BcsType<any>, CW extends BcsType<any>> {
    config: RawTransactionArgument<Config>;
    deps: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface NewOptions<Config extends BcsType<any>, CW extends BcsType<any>> {
    package?: string;
    arguments: NewArguments<Config, CW> | [
        config: RawTransactionArgument<Config>,
        deps: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * The following functions are used to define account and intent behavior for a
 * specific account type/config.
 *
 * They must be implemented in the module that defines the config of the account,
 * which must be a dependency of the account. We provide higher level macros to
 * facilitate the implementation of these functions. Creates a new account with
 * default dependencies. Can only be called from the config module.
 */
export function _new<Config extends BcsType<any>, CW extends BcsType<any>>(options: NewOptions<Config, CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${options.typeArguments[0]}`,
        `${packageAddress}::deps::Deps`,
        `${packageAddress}::version_witness::VersionWitness`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["config", "deps", "versionWitness", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'new',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface NewAuthArguments<CW extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface NewAuthOptions<CW extends BcsType<any>> {
    package?: string;
    arguments: NewAuthArguments<CW> | [
        account: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * Returns an Auth object that can be used to call gated functions. Can only be
 * called from the config module.
 */
export function newAuth<CW extends BcsType<any>>(options: NewAuthOptions<CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::version_witness::VersionWitness`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["account", "versionWitness", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'new_auth',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface CreateExecutableArguments<CW extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    key: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface CreateExecutableOptions<CW extends BcsType<any>> {
    package?: string;
    arguments: CreateExecutableArguments<CW> | [
        account: RawTransactionArgument<string>,
        key: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string,
        string
    ];
}
/**
 * Returns a tuple of the outcome that must be validated and the executable. Can
 * only be called from the config module.
 */
export function createExecutable<CW extends BcsType<any>>(options: CreateExecutableOptions<CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        '0x0000000000000000000000000000000000000000000000000000000000000001::string::String',
        '0x0000000000000000000000000000000000000000000000000000000000000002::clock::Clock',
        `${packageAddress}::version_witness::VersionWitness`,
        `${options.typeArguments[2]}`
    ] satisfies string[];
    const parameterNames = ["account", "key", "versionWitness", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'create_executable',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface IntentsMutArguments<CW extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface IntentsMutOptions<CW extends BcsType<any>> {
    package?: string;
    arguments: IntentsMutArguments<CW> | [
        account: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * Returns a mutable reference to the intents of the account. Can only be called
 * from the config module.
 */
export function intentsMut<CW extends BcsType<any>>(options: IntentsMutOptions<CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::version_witness::VersionWitness`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["account", "versionWitness", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'intents_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ConfigMutArguments<CW extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    versionWitness: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface ConfigMutOptions<CW extends BcsType<any>> {
    package?: string;
    arguments: ConfigMutArguments<CW> | [
        account: RawTransactionArgument<string>,
        versionWitness: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/**
 * Returns a mutable reference to the config of the account. Can only be called
 * from the config module.
 */
export function configMut<CW extends BcsType<any>>(options: ConfigMutOptions<CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${packageAddress}::version_witness::VersionWitness`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["account", "versionWitness", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'config_mut',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AddrArguments {
    account: RawTransactionArgument<string>;
}
export interface AddrOptions {
    package?: string;
    arguments: AddrArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the address of the account. */
export function addr(options: AddrOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface MetadataArguments {
    account: RawTransactionArgument<string>;
}
export interface MetadataOptions {
    package?: string;
    arguments: MetadataArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the metadata of the account. */
export function metadata(options: MetadataOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'metadata',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface DepsArguments {
    account: RawTransactionArgument<string>;
}
export interface DepsOptions {
    package?: string;
    arguments: DepsArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the dependencies of the account. */
export function deps(options: DepsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'deps',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface IntentsArguments {
    account: RawTransactionArgument<string>;
}
export interface IntentsOptions {
    package?: string;
    arguments: IntentsArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the intents of the account. */
export function intents(options: IntentsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'intents',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface ConfigArguments {
    account: RawTransactionArgument<string>;
}
export interface ConfigOptions {
    package?: string;
    arguments: ConfigArguments | [
        account: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
/** Returns the config of the account. */
export function config(options: ConfigOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`
    ] satisfies string[];
    const parameterNames = ["account"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'account',
        function: 'config',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}