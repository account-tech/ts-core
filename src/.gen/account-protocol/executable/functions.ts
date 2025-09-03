import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function intent( tx: Transaction, typeArg: string, executable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::executable::intent`, typeArguments: [typeArg], arguments: [ obj(tx, executable) ], }) }

export function actionIdx( tx: Transaction, typeArg: string, executable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::executable::action_idx`, typeArguments: [typeArg], arguments: [ obj(tx, executable) ], }) }

export function containsAction( tx: Transaction, typeArgs: [string, string], executable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::executable::contains_action`, typeArguments: typeArgs, arguments: [ obj(tx, executable) ], }) }

export interface NextActionArgs { executable: TransactionObjectInput; intentWitness: GenericArg }

export function nextAction( tx: Transaction, typeArgs: [string, string, string], args: NextActionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::executable::next_action`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export function new_( tx: Transaction, typeArg: string, intent: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::executable::new`, typeArguments: [typeArg], arguments: [ obj(tx, intent) ], }) }

export function destroy( tx: Transaction, typeArg: string, executable: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::executable::destroy`, typeArguments: [typeArg], arguments: [ obj(tx, executable) ], }) }
