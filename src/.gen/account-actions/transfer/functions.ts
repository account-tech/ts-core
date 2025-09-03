import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface NewTransferArgs { intent: TransactionObjectInput; recipient: string | TransactionArgument; intentWitness: GenericArg }

export function newTransfer( tx: Transaction, typeArgs: [string, string], args: NewTransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::transfer::new_transfer`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), pure(tx, args.recipient, `address`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface DoTransferArgs { executable: TransactionObjectInput; object: GenericArg; intentWitness: GenericArg }

export function doTransfer( tx: Transaction, typeArgs: [string, string, string], args: DoTransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::transfer::do_transfer`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), generic(tx, `${typeArgs[1]}`, args.object), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export function deleteTransfer( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::transfer::delete_transfer`, arguments: [ obj(tx, expired) ], }) }
