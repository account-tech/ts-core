import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export interface RequestEmptyArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg }

export function requestEmpty( tx: Transaction, typeArgs: [string, string], args: RequestEmptyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::empty_intents::request_empty`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome) ], }) }

export interface ExecuteEmptyArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeEmpty( tx: Transaction, typeArgs: [string, string], args: ExecuteEmptyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::empty_intents::execute_empty`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }
