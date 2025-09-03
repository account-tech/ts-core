import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function empty( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::metadata::empty`, arguments: [ ], }) }

export interface FromKeysValuesArgs { keys: Array<string | TransactionArgument> | TransactionArgument; values: Array<string | TransactionArgument> | TransactionArgument }

export function fromKeysValues( tx: Transaction, args: FromKeysValuesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::metadata::from_keys_values`, arguments: [ pure(tx, args.keys, `vector<${String.$typeName}>`), pure(tx, args.values, `vector<${String.$typeName}>`) ], }) }

export interface GetArgs { metadata: TransactionObjectInput; key: string | TransactionArgument }

export function get( tx: Transaction, args: GetArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::metadata::get`, arguments: [ obj(tx, args.metadata), pure(tx, args.key, `${String.$typeName}`) ], }) }

export interface GetEntryByIdxArgs { metadata: TransactionObjectInput; idx: bigint | TransactionArgument }

export function getEntryByIdx( tx: Transaction, args: GetEntryByIdxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::metadata::get_entry_by_idx`, arguments: [ obj(tx, args.metadata), pure(tx, args.idx, `u64`) ], }) }

export function size( tx: Transaction, metadata: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::metadata::size`, arguments: [ obj(tx, metadata) ], }) }
