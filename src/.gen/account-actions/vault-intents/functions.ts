import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface RequestSpendAndTransferArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; vaultName: string | TransactionArgument; amounts: Array<bigint | TransactionArgument> | TransactionArgument; recipients: Array<string | TransactionArgument> | TransactionArgument }

export function requestSpendAndTransfer( tx: Transaction, typeArgs: [string, string, string], args: RequestSpendAndTransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault_intents::request_spend_and_transfer`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.vaultName, `${String.$typeName}`), pure(tx, args.amounts, `vector<u64>`), pure(tx, args.recipients, `vector<address>`) ], }) }

export interface ExecuteSpendAndTransferArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeSpendAndTransfer( tx: Transaction, typeArgs: [string, string, string], args: ExecuteSpendAndTransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault_intents::execute_spend_and_transfer`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }

export interface RequestSpendAndVestArgs { auth: TransactionObjectInput; account: TransactionObjectInput; params: TransactionObjectInput; outcome: GenericArg; vaultName: string | TransactionArgument; coinAmount: bigint | TransactionArgument; startTimestamp: bigint | TransactionArgument; endTimestamp: bigint | TransactionArgument; recipient: string | TransactionArgument }

export function requestSpendAndVest( tx: Transaction, typeArgs: [string, string, string], args: RequestSpendAndVestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault_intents::request_spend_and_vest`, typeArguments: typeArgs, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.params), generic(tx, `${typeArgs[1]}`, args.outcome), pure(tx, args.vaultName, `${String.$typeName}`), pure(tx, args.coinAmount, `u64`), pure(tx, args.startTimestamp, `u64`), pure(tx, args.endTimestamp, `u64`), pure(tx, args.recipient, `address`) ], }) }

export interface ExecuteSpendAndVestArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeSpendAndVest( tx: Transaction, typeArgs: [string, string, string], args: ExecuteSpendAndVestArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::vault_intents::execute_spend_and_vest`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }
