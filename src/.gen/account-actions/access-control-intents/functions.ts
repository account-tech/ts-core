import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export interface RequestBorrowCapArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg }

export function requestBorrowCap( tx: Transaction, typeArgs: [string, string, string], args: RequestBorrowCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::access_control_intents::request_borrow_cap`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome) ], }) }

export interface ExecuteBorrowCapArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeBorrowCap( tx: Transaction, typeArgs: [string, string, string], args: ExecuteBorrowCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::access_control_intents::execute_borrow_cap`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }

export interface ExecuteReturnCapArgs { executable: TransactionObjectInput; account: TransactionObjectInput; cap: GenericArg }

export function executeReturnCap( tx: Transaction, typeArgs: [string, string, string], args: ExecuteReturnCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::access_control_intents::execute_return_cap`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), generic(tx, `${typeArgs[2]}`, args.cap) ], }) }

export function typeNameToString( tx: Transaction, typeArg: string, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::access_control_intents::type_name_to_string`, typeArguments: [typeArg], arguments: [ ], }) }
