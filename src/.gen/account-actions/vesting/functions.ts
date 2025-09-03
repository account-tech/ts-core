import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface ClaimArgs { vesting: TransactionObjectInput; cap: TransactionObjectInput; clock: TransactionObjectInput }

export function claim( tx: Transaction, typeArg: string, args: ClaimArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::claim`, typeArguments: [typeArg], arguments: [ obj(tx, args.vesting), obj(tx, args.cap), obj(tx, args.clock) ], }) }

export interface CancelPaymentArgs { auth: TransactionObjectInput; vesting: TransactionObjectInput; account: TransactionObjectInput }

export function cancelPayment( tx: Transaction, typeArgs: [string, string], args: CancelPaymentArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::cancel_payment`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.vesting), obj(tx, args.account) ], }) }

export function destroyEmpty( tx: Transaction, typeArg: string, vesting: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::destroy_empty`, typeArguments: [typeArg], arguments: [ obj(tx, vesting) ], }) }

export function destroyCap( tx: Transaction, cap: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::destroy_cap`, arguments: [ obj(tx, cap) ], }) }

export interface NewVestArgs { intent: TransactionObjectInput; startTimestamp: bigint | TransactionArgument; endTimestamp: bigint | TransactionArgument; recipient: string | TransactionArgument; intentWitness: GenericArg }

export function newVest( tx: Transaction, typeArgs: [string, string], args: NewVestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::new_vest`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), pure(tx, args.startTimestamp, `u64`), pure(tx, args.endTimestamp, `u64`), pure(tx, args.recipient, `address`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface DoVestArgs { executable: TransactionObjectInput; coin: TransactionObjectInput; intentWitness: GenericArg }

export function doVest( tx: Transaction, typeArgs: [string, string, string], args: DoVestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::do_vest`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.coin), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export function deleteVest( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::delete_vest`, arguments: [ obj(tx, expired) ], }) }

export function balanceValue( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::balance_value`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function lastClaimed( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::last_claimed`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function startTimestamp( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::start_timestamp`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function endTimestamp( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::end_timestamp`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }

export function recipient( tx: Transaction, typeArg: string, self: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vesting::recipient`, typeArguments: [typeArg], arguments: [ obj(tx, self) ], }) }
