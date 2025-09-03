import {PUBLISHED_AT} from "..";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export function init( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::init`, arguments: [ ], }) }

export function new_( tx: Transaction, ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::new`, arguments: [ ], }) }

export interface TransferArgs { registry: TransactionObjectInput; user: TransactionObjectInput; recipient: string | TransactionArgument }

export function transfer( tx: Transaction, args: TransferArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::transfer`, arguments: [ obj(tx, args.registry), obj(tx, args.user), pure(tx, args.recipient, `address`) ], }) }

export interface DestroyArgs { registry: TransactionObjectInput; user: TransactionObjectInput }

export function destroy( tx: Transaction, args: DestroyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::destroy`, arguments: [ obj(tx, args.registry), obj(tx, args.user) ], }) }

export interface AcceptInviteArgs { user: TransactionObjectInput; invite: TransactionObjectInput }

export function acceptInvite( tx: Transaction, args: AcceptInviteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::accept_invite`, arguments: [ obj(tx, args.user), obj(tx, args.invite) ], }) }

export function refuseInvite( tx: Transaction, invite: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::refuse_invite`, arguments: [ obj(tx, invite) ], }) }

export interface ReorderAccountsArgs { user: TransactionObjectInput; addrs: Array<string | TransactionArgument> | TransactionArgument }

export function reorderAccounts( tx: Transaction, typeArg: string, args: ReorderAccountsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::reorder_accounts`, typeArguments: [typeArg], arguments: [ obj(tx, args.user), pure(tx, args.addrs, `vector<address>`) ], }) }

export interface AddAccountArgs { user: TransactionObjectInput; account: TransactionObjectInput; configWitness: GenericArg }

export function addAccount( tx: Transaction, typeArgs: [string, string], args: AddAccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::add_account`, typeArguments: typeArgs, arguments: [ obj(tx, args.user), obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }

export interface RemoveAccountArgs { user: TransactionObjectInput; account: TransactionObjectInput; configWitness: GenericArg }

export function removeAccount( tx: Transaction, typeArgs: [string, string], args: RemoveAccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::remove_account`, typeArguments: typeArgs, arguments: [ obj(tx, args.user), obj(tx, args.account), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }

export interface SendInviteArgs { account: TransactionObjectInput; recipient: string | TransactionArgument; configWitness: GenericArg }

export function sendInvite( tx: Transaction, typeArgs: [string, string], args: SendInviteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::send_invite`, typeArguments: typeArgs, arguments: [ obj(tx, args.account), pure(tx, args.recipient, `address`), generic(tx, `${typeArgs[1]}`, args.configWitness) ], }) }

export function users( tx: Transaction, registry: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::users`, arguments: [ obj(tx, registry) ], }) }

export function idsForType( tx: Transaction, typeArg: string, user: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::ids_for_type`, typeArguments: [typeArg], arguments: [ obj(tx, user) ], }) }

export function allIds( tx: Transaction, user: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::user::all_ids`, arguments: [ obj(tx, user) ], }) }
