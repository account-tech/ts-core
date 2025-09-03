import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewParamsArgs { key: string | TransactionArgument; description: string | TransactionArgument; executionTimes: Array<bigint | TransactionArgument> | TransactionArgument; expirationTime: bigint | TransactionArgument; clock: TransactionObjectInput }

export function newParams( tx: Transaction, args: NewParamsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::new_params`, arguments: [ pure(tx, args.key, `${String.$typeName}`), pure(tx, args.description, `${String.$typeName}`), pure(tx, args.executionTimes, `vector<u64>`), pure(tx, args.expirationTime, `u64`), obj(tx, args.clock) ], }) }

export interface NewParamsWithRandKeyArgs { description: string | TransactionArgument; executionTimes: Array<bigint | TransactionArgument> | TransactionArgument; expirationTime: bigint | TransactionArgument; clock: TransactionObjectInput }

export function newParamsWithRandKey( tx: Transaction, args: NewParamsWithRandKeyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::new_params_with_rand_key`, arguments: [ pure(tx, args.description, `${String.$typeName}`), pure(tx, args.executionTimes, `vector<u64>`), pure(tx, args.expirationTime, `u64`), obj(tx, args.clock) ], }) }

export interface AddActionArgs { intent: TransactionObjectInput; action: GenericArg; intentWitness: GenericArg }

export function addAction( tx: Transaction, typeArgs: [string, string, string], args: AddActionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::add_action`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), generic(tx, `${typeArgs[1]}`, args.action), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export function removeAction( tx: Transaction, typeArg: string, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::remove_action`, typeArguments: [typeArg], arguments: [ obj(tx, expired) ], }) }

export function destroyEmptyExpired( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::destroy_empty_expired`, arguments: [ obj(tx, expired) ], }) }

export function paramsKey( tx: Transaction, params: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::params_key`, arguments: [ obj(tx, params) ], }) }

export function paramsDescription( tx: Transaction, params: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::params_description`, arguments: [ obj(tx, params) ], }) }

export function paramsCreationTime( tx: Transaction, params: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::params_creation_time`, arguments: [ obj(tx, params) ], }) }

export function paramsExecutionTimes( tx: Transaction, params: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::params_execution_times`, arguments: [ obj(tx, params) ], }) }

export function paramsExpirationTime( tx: Transaction, params: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::params_expiration_time`, arguments: [ obj(tx, params) ], }) }

export function length( tx: Transaction, intents: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::length`, arguments: [ obj(tx, intents) ], }) }

export function locked( tx: Transaction, intents: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::locked`, arguments: [ obj(tx, intents) ], }) }

export interface ContainsArgs { intents: TransactionObjectInput; key: string | TransactionArgument }

export function contains( tx: Transaction, args: ContainsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::contains`, arguments: [ obj(tx, args.intents), pure(tx, args.key, `${String.$typeName}`) ], }) }

export interface GetArgs { intents: TransactionObjectInput; key: string | TransactionArgument }

export function get( tx: Transaction, typeArg: string, args: GetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::get`, typeArguments: [typeArg], arguments: [ obj(tx, args.intents), pure(tx, args.key, `${String.$typeName}`) ], }) }

export interface GetMutArgs { intents: TransactionObjectInput; key: string | TransactionArgument }

export function getMut( tx: Transaction, typeArg: string, args: GetMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::get_mut`, typeArguments: [typeArg], arguments: [ obj(tx, args.intents), pure(tx, args.key, `${String.$typeName}`) ], }) }

export function type_( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::type_`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function key( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::key`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function description( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::description`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function account( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::account`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function creator( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::creator`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function creationTime( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::creation_time`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function executionTimes( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::execution_times`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function expirationTime( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::expiration_time`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function role( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::role`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function actions( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::actions`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function actionsMut( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::actions_mut`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function outcome( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::outcome`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function outcomeMut( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::outcome_mut`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function expiredAccount( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::expired_account`, arguments: [ obj(tx, expired) ], }) }

export function expiredStartIndex( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::expired_start_index`, arguments: [ obj(tx, expired) ], }) }

export function expiredActions( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::expired_actions`, arguments: [ obj(tx, expired) ], }) }

export interface AssertIsAccountArgs { intent: TransactionObjectInput; accountAddr: string | TransactionArgument }

export function assertIsAccount( tx: Transaction, typeArg: string, args: AssertIsAccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::assert_is_account`, typeArguments: [typeArg], arguments: [ obj(tx, args.intent), pure(tx, args.accountAddr, `address`) ], }) }

export interface AssertIsWitnessArgs { intent: TransactionObjectInput; iw: GenericArg }

export function assertIsWitness( tx: Transaction, typeArgs: [string, string], args: AssertIsWitnessArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::assert_is_witness`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), generic(tx, `${typeArgs[1]}`, args.iw) ], }) }

export interface AssertExpiredIsAccountArgs { expired: TransactionObjectInput; accountAddr: string | TransactionArgument }

export function assertExpiredIsAccount( tx: Transaction, args: AssertExpiredIsAccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::assert_expired_is_account`, arguments: [ obj(tx, args.expired), pure(tx, args.accountAddr, `address`) ], }) }

export function assertSingleExecution( tx: Transaction, params: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::assert_single_execution`, arguments: [ obj(tx, params) ], }) }

export function empty( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::empty`, arguments: [ ], }) }

export interface NewIntentArgs { params: TransactionObjectInput; outcome: GenericArg; managedName: string | TransactionArgument; accountAddr: string | TransactionArgument; intentWitness: GenericArg }

export function newIntent( tx: Transaction, typeArgs: [string, string], args: NewIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::new_intent`, typeArguments: typeArgs, arguments: [ obj(tx, args.params), generic(tx, `${typeArgs[0]}`, args.outcome), pure(tx, args.managedName, `${String.$typeName}`), pure(tx, args.accountAddr, `address`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface AddIntentArgs { intents: TransactionObjectInput; intent: TransactionObjectInput }

export function addIntent( tx: Transaction, typeArg: string, args: AddIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::add_intent`, typeArguments: [typeArg], arguments: [ obj(tx, args.intents), obj(tx, args.intent) ], }) }

export interface RemoveIntentArgs { intents: TransactionObjectInput; key: string | TransactionArgument }

export function removeIntent( tx: Transaction, typeArg: string, args: RemoveIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::remove_intent`, typeArguments: [typeArg], arguments: [ obj(tx, args.intents), pure(tx, args.key, `${String.$typeName}`) ], }) }

export function popFrontExecutionTime( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::pop_front_execution_time`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export interface LockArgs { intents: TransactionObjectInput; id: string | TransactionArgument }

export function lock( tx: Transaction, args: LockArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::lock`, arguments: [ obj(tx, args.intents), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface UnlockArgs { intents: TransactionObjectInput; id: string | TransactionArgument }

export function unlock( tx: Transaction, args: UnlockArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::unlock`, arguments: [ obj(tx, args.intents), pure(tx, args.id, `${ID.$typeName}`) ], }) }

export interface DestroyIntentArgs { intents: TransactionObjectInput; key: string | TransactionArgument }

export function destroyIntent( tx: Transaction, typeArg: string, args: DestroyIntentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::destroy_intent`, typeArguments: [typeArg], arguments: [ obj(tx, args.intents), pure(tx, args.key, `${String.$typeName}`) ], }) }

export function newRole( tx: Transaction, typeArg: string, managedName: string | TransactionArgument ) { return tx.moveCall({ target: `${PUBLISHED_AT}::intents::new_role`, typeArguments: [typeArg], arguments: [ pure(tx, managedName, `${String.$typeName}`) ], }) }
