import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::init`, arguments: [ ], }) }

export function length( tx: Transaction, extensions: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::length`, arguments: [ obj(tx, extensions) ], }) }

export interface GetByIdxArgs { extensions: TransactionObjectInput; idx: bigint | TransactionArgument }

export function getByIdx( tx: Transaction, args: GetByIdxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::get_by_idx`, arguments: [ obj(tx, args.extensions), pure(tx, args.idx, `u64`) ], }) }

export function name( tx: Transaction, extension: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::name`, arguments: [ obj(tx, extension) ], }) }

export function history( tx: Transaction, extension: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::history`, arguments: [ obj(tx, extension) ], }) }

export function addr( tx: Transaction, history: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::addr`, arguments: [ obj(tx, history) ], }) }

export function version( tx: Transaction, history: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::version`, arguments: [ obj(tx, history) ], }) }

export interface GetLatestForNameArgs { extensions: TransactionObjectInput; name: string | TransactionArgument }

export function getLatestForName( tx: Transaction, args: GetLatestForNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::get_latest_for_name`, arguments: [ obj(tx, args.extensions), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface IsExtensionArgs { extensions: TransactionObjectInput; name: string | TransactionArgument; addr: string | TransactionArgument; version: bigint | TransactionArgument }

export function isExtension( tx: Transaction, args: IsExtensionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::is_extension`, arguments: [ obj(tx, args.extensions), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.addr, `address`), pure(tx, args.version, `u64`) ], }) }

export interface AddArgs { extensions: TransactionObjectInput; adminCap: TransactionObjectInput; name: string | TransactionArgument; addr: string | TransactionArgument; version: bigint | TransactionArgument }

export function add( tx: Transaction, args: AddArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::add`, arguments: [ obj(tx, args.extensions), obj(tx, args.adminCap), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.addr, `address`), pure(tx, args.version, `u64`) ], }) }

export interface RemoveArgs { extensions: TransactionObjectInput; adminCap: TransactionObjectInput; name: string | TransactionArgument }

export function remove( tx: Transaction, args: RemoveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::remove`, arguments: [ obj(tx, args.extensions), obj(tx, args.adminCap), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface UpdateArgs { extensions: TransactionObjectInput; adminCap: TransactionObjectInput; name: string | TransactionArgument; addr: string | TransactionArgument; version: bigint | TransactionArgument }

export function update( tx: Transaction, args: UpdateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::update`, arguments: [ obj(tx, args.extensions), obj(tx, args.adminCap), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.addr, `address`), pure(tx, args.version, `u64`) ], }) }

export interface GetIdxForNameArgs { extensions: TransactionObjectInput; name: string | TransactionArgument }

export function getIdxForName( tx: Transaction, args: GetIdxForNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::extensions::get_idx_for_name`, arguments: [ obj(tx, args.extensions), pure(tx, args.name, `${String.$typeName}`) ], }) }
