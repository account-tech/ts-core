import {PUBLISHED_AT} from "..";
import {Transaction} from "@mysten/sui/transactions";

export function current( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version::current`, arguments: [ ], }) }

export function get( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::version::get`, arguments: [ ], }) }
