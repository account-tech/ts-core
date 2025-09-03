import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj} from "../../_framework/util";
import {Transaction, TransactionObjectInput} from "@mysten/sui/transactions";

export function new_( tx: Transaction, typeArg: string, packageWitness: GenericArg ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version_witness::new`, typeArguments: [typeArg], arguments: [ generic(tx, `${typeArg}`, packageWitness) ], }) }

export function packageAddr( tx: Transaction, witness: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version_witness::package_addr`, arguments: [ obj(tx, witness) ], }) }
