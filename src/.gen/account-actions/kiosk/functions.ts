import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {ID} from "../../_dependencies/source/0x2/object/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface OpenArgs { auth: TransactionObjectInput; account: TransactionObjectInput; name: string | TransactionArgument }

export function open( tx: Transaction, typeArg: string, args: OpenArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::open`, typeArguments: [typeArg], arguments: [ obj(tx, args.auth), obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface HasLockArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function hasLock( tx: Transaction, typeArg: string, args: HasLockArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::has_lock`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface PlaceArgs { auth: TransactionObjectInput; account: TransactionObjectInput; accountKiosk: TransactionObjectInput; senderKiosk: TransactionObjectInput; senderCap: TransactionObjectInput; policy: TransactionObjectInput; name: string | TransactionArgument; nftId: string | TransactionArgument }

export function place( tx: Transaction, typeArgs: [string, string], args: PlaceArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::place`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.accountKiosk), obj(tx, args.senderKiosk), obj(tx, args.senderCap), obj(tx, args.policy), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.nftId, `${ID.$typeName}`) ], }) }

export interface DelistArgs { auth: TransactionObjectInput; account: TransactionObjectInput; kiosk: TransactionObjectInput; name: string | TransactionArgument; nftId: string | TransactionArgument }

export function delist( tx: Transaction, typeArgs: [string, string], args: DelistArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::delist`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.kiosk), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.nftId, `${ID.$typeName}`) ], }) }

export interface WithdrawProfitsArgs { auth: TransactionObjectInput; account: TransactionObjectInput; kiosk: TransactionObjectInput; name: string | TransactionArgument }

export function withdrawProfits( tx: Transaction, typeArg: string, args: WithdrawProfitsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::withdraw_profits`, typeArguments: [typeArg], arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.kiosk), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface CloseArgs { auth: TransactionObjectInput; account: TransactionObjectInput; name: string | TransactionArgument; kiosk: TransactionObjectInput }

export function close( tx: Transaction, typeArg: string, args: CloseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::close`, typeArguments: [typeArg], arguments: [ obj(tx, args.auth), obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`), obj(tx, args.kiosk) ], }) }

export interface NewTakeArgs { intent: TransactionObjectInput; name: string | TransactionArgument; nftId: string | TransactionArgument; recipient: string | TransactionArgument; intentWitness: GenericArg }

export function newTake( tx: Transaction, typeArgs: [string, string], args: NewTakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::new_take`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.nftId, `${ID.$typeName}`), pure(tx, args.recipient, `address`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface DoTakeArgs { executable: TransactionObjectInput; account: TransactionObjectInput; accountKiosk: TransactionObjectInput; recipientKiosk: TransactionObjectInput; recipientCap: TransactionObjectInput; policy: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function doTake( tx: Transaction, typeArgs: [string, string, string, string], args: DoTakeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::do_take`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.accountKiosk), obj(tx, args.recipientKiosk), obj(tx, args.recipientCap), obj(tx, args.policy), obj(tx, args.versionWitness), generic(tx, `${typeArgs[3]}`, args.intentWitness) ], }) }

export function deleteTake( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::delete_take`, arguments: [ obj(tx, expired) ], }) }

export interface NewListArgs { intent: TransactionObjectInput; name: string | TransactionArgument; nftId: string | TransactionArgument; price: bigint | TransactionArgument; intentWitness: GenericArg }

export function newList( tx: Transaction, typeArgs: [string, string], args: NewListArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::new_list`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.nftId, `${ID.$typeName}`), pure(tx, args.price, `u64`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface DoListArgs { executable: TransactionObjectInput; account: TransactionObjectInput; kiosk: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function doList( tx: Transaction, typeArgs: [string, string, string, string], args: DoListArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::do_list`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.kiosk), obj(tx, args.versionWitness), generic(tx, `${typeArgs[3]}`, args.intentWitness) ], }) }

export function deleteList( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::kiosk::delete_list`, arguments: [ obj(tx, expired) ], }) }
