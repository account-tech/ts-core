import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function size( tx: Transaction, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::size`, arguments: [ obj(tx, vault) ], }) }

export interface CloseArgs { auth: TransactionObjectInput; account: TransactionObjectInput; name: string | TransactionArgument }

export function close( tx: Transaction, typeArgs: [string, string], args: CloseArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::close`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface OpenArgs { auth: TransactionObjectInput; account: TransactionObjectInput; name: string | TransactionArgument }

export function open( tx: Transaction, typeArgs: [string, string], args: OpenArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::open`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface BorrowVaultArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function borrowVault( tx: Transaction, typeArgs: [string, string], args: BorrowVaultArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::borrow_vault`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export function coinTypeExists( tx: Transaction, typeArg: string, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::coin_type_exists`, typeArguments: [typeArg], arguments: [ obj(tx, vault) ], }) }

export function coinTypeValue( tx: Transaction, typeArg: string, vault: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::coin_type_value`, typeArguments: [typeArg], arguments: [ obj(tx, vault) ], }) }

export function deleteDeposit( tx: Transaction, typeArg: string, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::delete_deposit`, typeArguments: [typeArg], arguments: [ obj(tx, expired) ], }) }

export function deleteSpend( tx: Transaction, typeArg: string, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::delete_spend`, typeArguments: [typeArg], arguments: [ obj(tx, expired) ], }) }

export interface DepositArgs { auth: TransactionObjectInput; account: TransactionObjectInput; name: string | TransactionArgument; coin: TransactionObjectInput }

export function deposit( tx: Transaction, typeArgs: [string, string, string], args: DepositArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::deposit`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`), obj(tx, args.coin) ], }) }

export interface DoDepositArgs { executable: TransactionObjectInput; account: TransactionObjectInput; coin: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function doDeposit( tx: Transaction, typeArgs: [string, string, string, string], args: DoDepositArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::do_deposit`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.coin), obj(tx, args.versionWitness), generic(tx, `${typeArgs[3]}`, args.intentWitness) ], }) }

export interface DoSpendArgs { executable: TransactionObjectInput; account: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function doSpend( tx: Transaction, typeArgs: [string, string, string, string], args: DoSpendArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::do_spend`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.versionWitness), generic(tx, `${typeArgs[3]}`, args.intentWitness) ], }) }

export interface HasVaultArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function hasVault( tx: Transaction, typeArgs: [string, string], args: HasVaultArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::has_vault`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface NewDepositArgs { intent: TransactionObjectInput; account: TransactionObjectInput; name: string | TransactionArgument; amount: bigint | TransactionArgument; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function newDeposit( tx: Transaction, typeArgs: [string, string, string, string], args: NewDepositArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::new_deposit`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.amount, `u64`), obj(tx, args.versionWitness), generic(tx, `${typeArgs[3]}`, args.intentWitness) ], }) }

export interface NewSpendArgs { intent: TransactionObjectInput; account: TransactionObjectInput; name: string | TransactionArgument; amount: bigint | TransactionArgument; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function newSpend( tx: Transaction, typeArgs: [string, string, string, string], args: NewSpendArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault::new_spend`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.amount, `u64`), obj(tx, args.versionWitness), generic(tx, `${typeArgs[3]}`, args.intentWitness) ], }) }
