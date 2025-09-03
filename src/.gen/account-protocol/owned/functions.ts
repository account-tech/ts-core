import {PUBLISHED_AT} from "..";
import {Coin} from "../../_dependencies/source/0x2/coin/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {Receiving} from "../../_dependencies/source/0x2/transfer/structs";
import {GenericArg, generic, obj, pure, vector} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewWithdrawArgs { intent: TransactionObjectInput; account: TransactionObjectInput; objectId: string | TransactionArgument; intentWitness: GenericArg }

export function newWithdraw( tx: Transaction, typeArgs: [string, string, string], args: NewWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::owned::new_withdraw`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), obj(tx, args.account), pure(tx, args.objectId, `${ID.$typeName}`), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export interface DoWithdrawArgs { executable: TransactionObjectInput; account: TransactionObjectInput; receiving: TransactionObjectInput; intentWitness: GenericArg }

export function doWithdraw( tx: Transaction, typeArgs: [string, string, string, string], args: DoWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::owned::do_withdraw`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.receiving), generic(tx, `${typeArgs[3]}`, args.intentWitness) ], }) }

export interface DeleteWithdrawArgs { expired: TransactionObjectInput; account: TransactionObjectInput }

export function deleteWithdraw( tx: Transaction, typeArg: string, args: DeleteWithdrawArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::owned::delete_withdraw`, typeArguments: [typeArg], arguments: [ obj(tx, args.expired), obj(tx, args.account) ], }) }

export interface MergeAndSplitArgs { auth: TransactionObjectInput; account: TransactionObjectInput; toMerge: Array<TransactionObjectInput> | TransactionArgument; toSplit: Array<bigint | TransactionArgument> | TransactionArgument }

export function mergeAndSplit( tx: Transaction, typeArgs: [string, string], args: MergeAndSplitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::owned::merge_and_split`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), vector(tx, `${Receiving.$typeName}<${Coin.$typeName}<${typeArgs[1]}>>`, args.toMerge), pure(tx, args.toSplit, `vector<u64>`) ], }) }

export interface MergeArgs { account: TransactionObjectInput; coins: Array<TransactionObjectInput> | TransactionArgument }

export function merge( tx: Transaction, typeArgs: [string, string], args: MergeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::owned::merge`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), vector(tx, `${Coin.$typeName}<${typeArgs[1]}>`, args.coins) ], }) }

export interface SplitArgs { account: TransactionObjectInput; coin: TransactionObjectInput; amounts: Array<bigint | TransactionArgument> | TransactionArgument }

export function split( tx: Transaction, typeArgs: [string, string], args: SplitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::owned::split`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), obj(tx, args.coin), pure(tx, args.amounts, `vector<u64>`) ], }) }
