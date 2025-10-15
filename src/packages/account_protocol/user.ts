/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * Users have a non-transferable User account object used to track Accounts in
 * which they are a member. Each account type can define a way to send on-chain
 * invites to Users. Invited users can accept or refuse the invite, to add the
 * Account id to their User account or not. Alternatively, Account interfaces can
 * define rules allowing users to join an Account without invite. This avoid the
 * need for an indexer as all data can be easily found on-chain.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
import * as object from './deps/sui/object.js';
import * as table from './deps/sui/table.js';
import * as vec_map from './deps/sui/vec_map.js';
const $moduleName = '@account/protocol::user';
export const Registry = new MoveStruct({ name: `${$moduleName}::Registry`, fields: {
        id: object.UID,
        users: table.Table
    } });
export const User = new MoveStruct({ name: `${$moduleName}::User`, fields: {
        id: object.UID,
        accounts: vec_map.VecMap(bcs.string(), bcs.vector(bcs.Address))
    } });
export const Invite = new MoveStruct({ name: `${$moduleName}::Invite`, fields: {
        id: object.UID,
        account_addr: bcs.Address,
        account_type: bcs.string()
    } });
export interface NewOptions {
    package?: string;
    arguments?: [
    ];
}
/** Creates a soulbound User account (1 per address) */
export function _new(options: NewOptions = {}) {
    const packageAddress = options.package ?? '@account/protocol';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'new',
    });
}
export interface TransferArguments {
    registry: RawTransactionArgument<string>;
    user: RawTransactionArgument<string>;
    recipient: RawTransactionArgument<string>;
}
export interface TransferOptions {
    package?: string;
    arguments: TransferArguments | [
        registry: RawTransactionArgument<string>,
        user: RawTransactionArgument<string>,
        recipient: RawTransactionArgument<string>
    ];
}
/** Can transfer the User object only if the other address has no User object yet */
export function transfer(options: TransferOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::Registry`,
        `${packageAddress}::user::User`,
        'address'
    ] satisfies string[];
    const parameterNames = ["registry", "user", "recipient"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'transfer',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface DestroyArguments {
    registry: RawTransactionArgument<string>;
    user: RawTransactionArgument<string>;
}
export interface DestroyOptions {
    package?: string;
    arguments: DestroyArguments | [
        registry: RawTransactionArgument<string>,
        user: RawTransactionArgument<string>
    ];
}
/** Must remove all Accounts before, for consistency */
export function destroy(options: DestroyOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::Registry`,
        `${packageAddress}::user::User`
    ] satisfies string[];
    const parameterNames = ["registry", "user"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'destroy',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface AcceptInviteArguments {
    user: RawTransactionArgument<string>;
    invite: RawTransactionArgument<string>;
}
export interface AcceptInviteOptions {
    package?: string;
    arguments: AcceptInviteArguments | [
        user: RawTransactionArgument<string>,
        invite: RawTransactionArgument<string>
    ];
}
/** Invited user can register the Account in his User account */
export function acceptInvite(options: AcceptInviteOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::User`,
        `${packageAddress}::user::Invite`
    ] satisfies string[];
    const parameterNames = ["user", "invite"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'accept_invite',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface RefuseInviteArguments {
    invite: RawTransactionArgument<string>;
}
export interface RefuseInviteOptions {
    package?: string;
    arguments: RefuseInviteArguments | [
        invite: RawTransactionArgument<string>
    ];
}
/** Deletes the invite object */
export function refuseInvite(options: RefuseInviteOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::Invite`
    ] satisfies string[];
    const parameterNames = ["invite"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'refuse_invite',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface ReorderAccountsArguments {
    user: RawTransactionArgument<string>;
    addrs: RawTransactionArgument<string[]>;
}
export interface ReorderAccountsOptions {
    package?: string;
    arguments: ReorderAccountsArguments | [
        user: RawTransactionArgument<string>,
        addrs: RawTransactionArgument<string[]>
    ];
    typeArguments: [
        string
    ];
}
export function reorderAccounts(options: ReorderAccountsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::User`,
        'vector<address>'
    ] satisfies string[];
    const parameterNames = ["user", "addrs"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'reorder_accounts',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AddAccountArguments<CW extends BcsType<any>> {
    user: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface AddAccountOptions<CW extends BcsType<any>> {
    package?: string;
    arguments: AddAccountArguments<CW> | [
        user: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string
    ];
}
export function addAccount<CW extends BcsType<any>>(options: AddAccountOptions<CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::User`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["user", "account", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'add_account',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface RemoveAccountArguments<CW extends BcsType<any>> {
    user: RawTransactionArgument<string>;
    account: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface RemoveAccountOptions<CW extends BcsType<any>> {
    package?: string;
    arguments: RemoveAccountArguments<CW> | [
        user: RawTransactionArgument<string>,
        account: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string
    ];
}
export function removeAccount<CW extends BcsType<any>>(options: RemoveAccountOptions<CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::User`,
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["user", "account", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'remove_account',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface SendInviteArguments<CW extends BcsType<any>> {
    account: RawTransactionArgument<string>;
    recipient: RawTransactionArgument<string>;
    configWitness: RawTransactionArgument<CW>;
}
export interface SendInviteOptions<CW extends BcsType<any>> {
    package?: string;
    arguments: SendInviteArguments<CW> | [
        account: RawTransactionArgument<string>,
        recipient: RawTransactionArgument<string>,
        configWitness: RawTransactionArgument<CW>
    ];
    typeArguments: [
        string,
        string
    ];
}
/** Invites can be sent by an Account member (upon Account creation for instance) */
export function sendInvite<CW extends BcsType<any>>(options: SendInviteOptions<CW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::account::Account<${options.typeArguments[0]}>`,
        'address',
        `${options.typeArguments[1]}`
    ] satisfies string[];
    const parameterNames = ["account", "recipient", "configWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'send_invite',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface UsersArguments {
    registry: RawTransactionArgument<string>;
}
export interface UsersOptions {
    package?: string;
    arguments: UsersArguments | [
        registry: RawTransactionArgument<string>
    ];
}
export function users(options: UsersOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::Registry`
    ] satisfies string[];
    const parameterNames = ["registry"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'users',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}
export interface IdsForTypeArguments {
    user: RawTransactionArgument<string>;
}
export interface IdsForTypeOptions {
    package?: string;
    arguments: IdsForTypeArguments | [
        user: RawTransactionArgument<string>
    ];
    typeArguments: [
        string
    ];
}
export function idsForType(options: IdsForTypeOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::User`
    ] satisfies string[];
    const parameterNames = ["user"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'ids_for_type',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface AllIdsArguments {
    user: RawTransactionArgument<string>;
}
export interface AllIdsOptions {
    package?: string;
    arguments: AllIdsArguments | [
        user: RawTransactionArgument<string>
    ];
}
export function allIds(options: AllIdsOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::user::User`
    ] satisfies string[];
    const parameterNames = ["user"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'user',
        function: 'all_ids',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}