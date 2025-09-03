import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewArgs { extensions: TransactionObjectInput; unverifiedAllowed: boolean | TransactionArgument; names: Array<string | TransactionArgument> | TransactionArgument; addresses: Array<string | TransactionArgument> | TransactionArgument; versions: Array<bigint | TransactionArgument> | TransactionArgument }

export function new_( tx: Transaction, args: NewArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::new`, arguments: [ obj(tx, args.extensions), pure(tx, args.unverifiedAllowed, `bool`), pure(tx, args.names, `vector<${String.$typeName}>`), pure(tx, args.addresses, `vector<address>`), pure(tx, args.versions, `vector<u64>`) ], }) }

export interface NewLatestExtensionsArgs { extensions: TransactionObjectInput; names: Array<string | TransactionArgument> | TransactionArgument }

export function newLatestExtensions( tx: Transaction, args: NewLatestExtensionsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::new_latest_extensions`, arguments: [ obj(tx, args.extensions), pure(tx, args.names, `vector<${String.$typeName}>`) ], }) }

export interface NewInnerArgs { extensions: TransactionObjectInput; deps: TransactionObjectInput; names: Array<string | TransactionArgument> | TransactionArgument; addresses: Array<string | TransactionArgument> | TransactionArgument; versions: Array<bigint | TransactionArgument> | TransactionArgument }

export function newInner( tx: Transaction, args: NewInnerArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::new_inner`, arguments: [ obj(tx, args.extensions), obj(tx, args.deps), pure(tx, args.names, `vector<${String.$typeName}>`), pure(tx, args.addresses, `vector<address>`), pure(tx, args.versions, `vector<u64>`) ], }) }

export function innerMut( tx: Transaction, deps: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::inner_mut`, arguments: [ obj(tx, deps) ], }) }

export interface CheckArgs { deps: TransactionObjectInput; versionWitness: TransactionObjectInput }

export function check( tx: Transaction, args: CheckArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::check`, arguments: [ obj(tx, args.deps), obj(tx, args.versionWitness) ], }) }

export function unverifiedAllowed( tx: Transaction, deps: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::unverified_allowed`, arguments: [ obj(tx, deps) ], }) }

export interface GetByIdxArgs { deps: TransactionObjectInput; idx: bigint | TransactionArgument }

export function getByIdx( tx: Transaction, args: GetByIdxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::get_by_idx`, arguments: [ obj(tx, args.deps), pure(tx, args.idx, `u64`) ], }) }

export interface GetByNameArgs { deps: TransactionObjectInput; name: string | TransactionArgument }

export function getByName( tx: Transaction, args: GetByNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::get_by_name`, arguments: [ obj(tx, args.deps), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface GetByAddrArgs { deps: TransactionObjectInput; addr: string | TransactionArgument }

export function getByAddr( tx: Transaction, args: GetByAddrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::get_by_addr`, arguments: [ obj(tx, args.deps), pure(tx, args.addr, `address`) ], }) }

export function length( tx: Transaction, deps: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::length`, arguments: [ obj(tx, deps) ], }) }

export function name( tx: Transaction, dep: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::name`, arguments: [ obj(tx, dep) ], }) }

export function addr( tx: Transaction, dep: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::addr`, arguments: [ obj(tx, dep) ], }) }

export function version( tx: Transaction, dep: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::version`, arguments: [ obj(tx, dep) ], }) }

export interface ContainsNameArgs { deps: TransactionObjectInput; name: string | TransactionArgument }

export function containsName( tx: Transaction, args: ContainsNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::contains_name`, arguments: [ obj(tx, args.deps), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface ContainsAddrArgs { deps: TransactionObjectInput; addr: string | TransactionArgument }

export function containsAddr( tx: Transaction, args: ContainsAddrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::contains_addr`, arguments: [ obj(tx, args.deps), pure(tx, args.addr, `address`) ], }) }

export function toggleUnverifiedAllowed( tx: Transaction, deps: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::deps::toggle_unverified_allowed`, arguments: [ obj(tx, deps) ], }) }
