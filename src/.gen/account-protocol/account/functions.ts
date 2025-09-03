import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, otw: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::init`, arguments: [ obj(tx, otw) ], }) }

export interface ConfirmExecutionArgs { account: TransactionObjectInput; executable: TransactionObjectInput }

export function confirmExecution( tx: Transaction, typeArgs: [string, string], args: ConfirmExecutionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::confirm_execution`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.executable) ], }) }

export interface DestroyEmptyIntentArgs { account: TransactionObjectInput; key: string | TransactionArgument }

export function destroyEmptyIntent( tx: Transaction, typeArgs: [string, string], args: DestroyEmptyIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::destroy_empty_intent`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), pure(tx, args.key, `${String.$typeName}`) ], }) }

export interface DeleteExpiredIntentArgs { account: TransactionObjectInput; key: string | TransactionArgument; clock: TransactionObjectInput }

export function deleteExpiredIntent( tx: Transaction, typeArgs: [string, string], args: DeleteExpiredIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::delete_expired_intent`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), pure(tx, args.key, `${String.$typeName}`), obj(tx, args.clock) ], }) }

export interface KeepArgs { account: TransactionObjectInput; obj: GenericArg }

export function keep( tx: Transaction, typeArgs: [string, string], args: KeepArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::keep`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.obj) ], }) }

export interface VerifyArgs { account: TransactionObjectInput; auth: TransactionObjectInput }

export function verify( tx: Transaction, typeArg: string, args: VerifyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::verify`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), obj(tx, args.auth) ], }) }

export interface CreateIntentArgs { account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; managedName: string | TransactionArgument; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function createIntent( tx: Transaction, typeArgs: [string, string, string], args: CreateIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::create_intent`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.managedName, `${String.$typeName}`), obj(tx, args.versionWitness), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export interface InsertIntentArgs { account: TransactionObjectInput; intent: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function insertIntent( tx: Transaction, typeArgs: [string, string, string], args: InsertIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::insert_intent`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.intent), obj(tx, args.versionWitness), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export interface AddManagedDataArgs { account: TransactionObjectInput; key: GenericArg; data: GenericArg; versionWitness: TransactionObjectInput }

export function addManagedData( tx: Transaction, typeArgs: [string, string, string], args: AddManagedDataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_managed_data`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), generic(tx, `${typeArgs[2]}`, args.data), obj(tx, args.versionWitness) ], }) }

export interface HasManagedDataArgs { account: TransactionObjectInput; key: GenericArg }

export function hasManagedData( tx: Transaction, typeArgs: [string, string], args: HasManagedDataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::has_managed_data`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key) ], }) }

export interface BorrowManagedDataArgs { account: TransactionObjectInput; key: GenericArg; versionWitness: TransactionObjectInput }

export function borrowManagedData( tx: Transaction, typeArgs: [string, string, string], args: BorrowManagedDataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::borrow_managed_data`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), obj(tx, args.versionWitness) ], }) }

export interface BorrowManagedDataMutArgs { account: TransactionObjectInput; key: GenericArg; versionWitness: TransactionObjectInput }

export function borrowManagedDataMut( tx: Transaction, typeArgs: [string, string, string], args: BorrowManagedDataMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::borrow_managed_data_mut`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), obj(tx, args.versionWitness) ], }) }

export interface RemoveManagedDataArgs { account: TransactionObjectInput; key: GenericArg; versionWitness: TransactionObjectInput }

export function removeManagedData( tx: Transaction, typeArgs: [string, string, string], args: RemoveManagedDataArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::remove_managed_data`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), obj(tx, args.versionWitness) ], }) }

export interface AddManagedAssetArgs { account: TransactionObjectInput; key: GenericArg; asset: GenericArg; versionWitness: TransactionObjectInput }

export function addManagedAsset( tx: Transaction, typeArgs: [string, string, string], args: AddManagedAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::add_managed_asset`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), generic(tx, `${typeArgs[2]}`, args.asset), obj(tx, args.versionWitness) ], }) }

export interface HasManagedAssetArgs { account: TransactionObjectInput; key: GenericArg }

export function hasManagedAsset( tx: Transaction, typeArgs: [string, string], args: HasManagedAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::has_managed_asset`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key) ], }) }

export interface BorrowManagedAssetArgs { account: TransactionObjectInput; key: GenericArg; versionWitness: TransactionObjectInput }

export function borrowManagedAsset( tx: Transaction, typeArgs: [string, string, string], args: BorrowManagedAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::borrow_managed_asset`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), obj(tx, args.versionWitness) ], }) }

export interface BorrowManagedAssetMutArgs { account: TransactionObjectInput; key: GenericArg; versionWitness: TransactionObjectInput }

export function borrowManagedAssetMut( tx: Transaction, typeArgs: [string, string, string], args: BorrowManagedAssetMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::borrow_managed_asset_mut`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), obj(tx, args.versionWitness) ], }) }

export interface RemoveManagedAssetArgs { account: TransactionObjectInput; key: GenericArg; versionWitness: TransactionObjectInput }

export function removeManagedAsset( tx: Transaction, typeArgs: [string, string, string], args: RemoveManagedAssetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::remove_managed_asset`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.key), obj(tx, args.versionWitness) ], }) }

export interface NewArgs { config: GenericArg; deps: TransactionObjectInput; versionWitness: TransactionObjectInput; configWitness: GenericArg }

export function new_( tx: Transaction, typeArgs: [string, string], args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::new`, typeArguments: typeArgs, arguments: [ generic(tx, `${typeArgs[0]}`, args.config), obj(tx, args.deps), obj(tx, args.versionWitness), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }

export interface NewAuthArgs { account: TransactionObjectInput; versionWitness: TransactionObjectInput; configWitness: GenericArg }

export function newAuth( tx: Transaction, typeArgs: [string, string], args: NewAuthArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::new_auth`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.versionWitness), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }

export interface CreateExecutableArgs { account: TransactionObjectInput; key: string | TransactionArgument; clock: TransactionObjectInput; versionWitness: TransactionObjectInput; configWitness: GenericArg }

export function createExecutable( tx: Transaction, typeArgs: [string, string, string], args: CreateExecutableArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::create_executable`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), pure(tx, args.key, `${String.$typeName}`), obj(tx, args.clock), obj(tx, args.versionWitness), generic(tx, `${typeArgs[2]}`, args.configWitness) ], }) }

export interface IntentsMutArgs { account: TransactionObjectInput; versionWitness: TransactionObjectInput; configWitness: GenericArg }

export function intentsMut( tx: Transaction, typeArgs: [string, string], args: IntentsMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::intents_mut`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.versionWitness), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }

export interface ConfigMutArgs { account: TransactionObjectInput; versionWitness: TransactionObjectInput; configWitness: GenericArg }

export function configMut( tx: Transaction, typeArgs: [string, string], args: ConfigMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::config_mut`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.versionWitness), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }

export function addr( tx: Transaction, typeArg: string, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::addr`, typeArguments: [typeArg], arguments: [ obj(tx, account) ], }) }

export function metadata( tx: Transaction, typeArg: string, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::metadata`, typeArguments: [typeArg], arguments: [ obj(tx, account) ], }) }

export function deps( tx: Transaction, typeArg: string, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::deps`, typeArguments: [typeArg], arguments: [ obj(tx, account) ], }) }

export function intents( tx: Transaction, typeArg: string, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::intents`, typeArguments: [typeArg], arguments: [ obj(tx, account) ], }) }

export function config( tx: Transaction, typeArg: string, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::config`, typeArguments: [typeArg], arguments: [ obj(tx, account) ], }) }

export interface MetadataMutArgs { account: TransactionObjectInput; versionWitness: TransactionObjectInput }

export function metadataMut( tx: Transaction, typeArg: string, args: MetadataMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::metadata_mut`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), obj(tx, args.versionWitness) ], }) }

export interface DepsMutArgs { account: TransactionObjectInput; versionWitness: TransactionObjectInput }

export function depsMut( tx: Transaction, typeArg: string, args: DepsMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::deps_mut`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), obj(tx, args.versionWitness) ], }) }

export interface ReceiveArgs { account: TransactionObjectInput; receiving: TransactionObjectInput }

export function receive( tx: Transaction, typeArgs: [string, string], args: ReceiveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::receive`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.receiving) ], }) }

export interface LockObjectArgs { account: TransactionObjectInput; id: string | TransactionArgument }

export function lockObject( tx: Transaction, typeArg: string, args: LockObjectArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::lock_object`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface UnlockObjectArgs { account: TransactionObjectInput; id: string | TransactionArgument }

export function unlockObject( tx: Transaction, typeArg: string, args: UnlockObjectArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::unlock_object`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface AssertIsConfigModuleArgs { account: TransactionObjectInput; configWitness: GenericArg }

export function assertIsConfigModule( tx: Transaction, typeArgs: [string, string], args: AssertIsConfigModuleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::account::assert_is_config_module`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }
