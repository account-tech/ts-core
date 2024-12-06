import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface JoinArgs { user: TransactionObjectInput; account: TransactionObjectInput }

export function join( tx: Transaction, args: JoinArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::join`, arguments: [ obj(tx, args.user), obj(tx, args.account) ], }) }

export interface DeleteProposalArgs { account: TransactionObjectInput; key: string | TransactionArgument; clock: TransactionObjectInput }

export function deleteProposal( tx: Transaction, args: DeleteProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::delete_proposal`, arguments: [ obj(tx, args.account), pure(tx, args.key, `${String.$typeName}`), obj(tx, args.clock) ], }) }

export interface ExecuteProposalArgs { account: TransactionObjectInput; key: string | TransactionArgument; clock: TransactionObjectInput }

export function executeProposal( tx: Transaction, args: ExecuteProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::execute_proposal`, arguments: [ obj(tx, args.account), pure(tx, args.key, `${String.$typeName}`), obj(tx, args.clock) ], }) }

export function addresses( tx: Transaction, multisig: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::addresses`, arguments: [ obj(tx, multisig) ], }) }

export interface AcceptInviteArgs { user: TransactionObjectInput; invite: TransactionObjectInput }

export function acceptInvite( tx: Transaction, args: AcceptInviteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::accept_invite`, arguments: [ obj(tx, args.user), obj(tx, args.invite) ], }) }

export interface ApproveProposalArgs { account: TransactionObjectInput; key: string | TransactionArgument }

export function approveProposal( tx: Transaction, args: ApproveProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::approve_proposal`, arguments: [ obj(tx, args.account), pure(tx, args.key, `${String.$typeName}`) ], }) }

export function approved( tx: Transaction, outcome: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::approved`, arguments: [ obj(tx, outcome) ], }) }

export function assertIsMember( tx: Transaction, multisig: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::assert_is_member`, arguments: [ obj(tx, multisig) ], }) }

export interface AuthenticateArgs { extensions: TransactionObjectInput; account: TransactionObjectInput; role: string | TransactionArgument }

export function authenticate( tx: Transaction, args: AuthenticateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::authenticate`, arguments: [ obj(tx, args.extensions), obj(tx, args.account), pure(tx, args.role, `${String.$typeName}`) ], }) }

export function deleteExpiredConfigMultisig( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::delete_expired_config_multisig`, arguments: [ obj(tx, expired) ], }) }

export function deleteExpiredOutcome( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::delete_expired_outcome`, arguments: [ obj(tx, expired) ], }) }

export interface DisapproveProposalArgs { account: TransactionObjectInput; key: string | TransactionArgument }

export function disapproveProposal( tx: Transaction, args: DisapproveProposalArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::disapprove_proposal`, arguments: [ obj(tx, args.account), pure(tx, args.key, `${String.$typeName}`) ], }) }

export function emptyOutcome( tx: Transaction, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::empty_outcome`, arguments: [ obj(tx, account) ], }) }

export interface ExecuteConfigMultisigArgs { executable: TransactionObjectInput; account: TransactionObjectInput }

export function executeConfigMultisig( tx: Transaction, args: ExecuteConfigMultisigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::execute_config_multisig`, arguments: [ obj(tx, args.executable), obj(tx, args.account) ], }) }

export function getGlobalThreshold( tx: Transaction, multisig: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::get_global_threshold`, arguments: [ obj(tx, multisig) ], }) }

export interface GetMemberIdxArgs { multisig: TransactionObjectInput; addr: string | TransactionArgument }

export function getMemberIdx( tx: Transaction, args: GetMemberIdxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::get_member_idx`, arguments: [ obj(tx, args.multisig), pure(tx, args.addr, `address`) ], }) }

export interface GetRoleIdxArgs { multisig: TransactionObjectInput; name: string | TransactionArgument }

export function getRoleIdx( tx: Transaction, args: GetRoleIdxArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::get_role_idx`, arguments: [ obj(tx, args.multisig), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface GetRoleThresholdArgs { multisig: TransactionObjectInput; name: string | TransactionArgument }

export function getRoleThreshold( tx: Transaction, args: GetRoleThresholdArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::get_role_threshold`, arguments: [ obj(tx, args.multisig), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface HasRoleArgs { member: TransactionObjectInput; role: string | TransactionArgument }

export function hasRole( tx: Transaction, args: HasRoleArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::has_role`, arguments: [ obj(tx, args.member), pure(tx, args.role, `${String.$typeName}`) ], }) }

export interface MemberArgs { multisig: TransactionObjectInput; addr: string | TransactionArgument }

export function member( tx: Transaction, args: MemberArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::member`, arguments: [ obj(tx, args.multisig), pure(tx, args.addr, `address`) ], }) }

export interface IsMemberArgs { multisig: TransactionObjectInput; addr: string | TransactionArgument }

export function isMember( tx: Transaction, args: IsMemberArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::is_member`, arguments: [ obj(tx, args.multisig), pure(tx, args.addr, `address`) ], }) }

export interface LeaveArgs { user: TransactionObjectInput; account: TransactionObjectInput }

export function leave( tx: Transaction, args: LeaveArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::leave`, arguments: [ obj(tx, args.user), obj(tx, args.account) ], }) }

export interface MemberMutArgs { multisig: TransactionObjectInput; addr: string | TransactionArgument }

export function memberMut( tx: Transaction, args: MemberMutArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::member_mut`, arguments: [ obj(tx, args.multisig), pure(tx, args.addr, `address`) ], }) }

export interface NewAccountArgs { extensions: TransactionObjectInput; name: string | TransactionArgument }

export function newAccount( tx: Transaction, args: NewAccountArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::new_account`, arguments: [ obj(tx, args.extensions), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface ProposeConfigMultisigArgs { auth: TransactionObjectInput; account: TransactionObjectInput; outcome: TransactionObjectInput; key: string | TransactionArgument; description: string | TransactionArgument; executionTime: bigint | TransactionArgument; expirationTime: bigint | TransactionArgument; addresses: Array<string | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument; roles: Array<Array<string | TransactionArgument> | TransactionArgument> | TransactionArgument; global: bigint | TransactionArgument; roleNames: Array<string | TransactionArgument> | TransactionArgument; roleThresholds: Array<bigint | TransactionArgument> | TransactionArgument }

export function proposeConfigMultisig( tx: Transaction, args: ProposeConfigMultisigArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::propose_config_multisig`, arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.outcome), pure(tx, args.key, `${String.$typeName}`), pure(tx, args.description, `${String.$typeName}`), pure(tx, args.executionTime, `u64`), pure(tx, args.expirationTime, `u64`), pure(tx, args.addresses, `vector<address>`), pure(tx, args.weights, `vector<u64>`), pure(tx, args.roles, `vector<vector<${String.$typeName}>>`), pure(tx, args.global, `u64`), pure(tx, args.roleNames, `vector<${String.$typeName}>`), pure(tx, args.roleThresholds, `vector<u64>`) ], }) }

export function roles( tx: Transaction, member: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::roles`, arguments: [ obj(tx, member) ], }) }

export function refuseInvite( tx: Transaction, invite: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::refuse_invite`, arguments: [ obj(tx, invite) ], }) }

export interface RoleExistsArgs { multisig: TransactionObjectInput; name: string | TransactionArgument }

export function roleExists( tx: Transaction, args: RoleExistsArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::role_exists`, arguments: [ obj(tx, args.multisig), pure(tx, args.name, `${String.$typeName}`) ], }) }

export function roleWeight( tx: Transaction, outcome: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::role_weight`, arguments: [ obj(tx, outcome) ], }) }

export interface SendInviteArgs { account: TransactionObjectInput; recipient: string | TransactionArgument }

export function sendInvite( tx: Transaction, args: SendInviteArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::send_invite`, arguments: [ obj(tx, args.account), pure(tx, args.recipient, `address`) ], }) }

export function totalWeight( tx: Transaction, outcome: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::total_weight`, arguments: [ obj(tx, outcome) ], }) }

export interface ValidateArgs { outcome: TransactionObjectInput; multisig: TransactionObjectInput; issuer: TransactionObjectInput }

export function validate( tx: Transaction, args: ValidateArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::validate`, arguments: [ obj(tx, args.outcome), obj(tx, args.multisig), obj(tx, args.issuer) ], }) }

export interface VerifyNewRulesArgs { addresses: Array<string | TransactionArgument> | TransactionArgument; weights: Array<bigint | TransactionArgument> | TransactionArgument; roles: Array<Array<string | TransactionArgument> | TransactionArgument> | TransactionArgument; global: bigint | TransactionArgument; roleNames: Array<string | TransactionArgument> | TransactionArgument; roleThresholds: Array<bigint | TransactionArgument> | TransactionArgument }

export function verifyNewRules( tx: Transaction, args: VerifyNewRulesArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::verify_new_rules`, arguments: [ pure(tx, args.addresses, `vector<address>`), pure(tx, args.weights, `vector<u64>`), pure(tx, args.roles, `vector<vector<${String.$typeName}>>`), pure(tx, args.global, `u64`), pure(tx, args.roleNames, `vector<${String.$typeName}>`), pure(tx, args.roleThresholds, `vector<u64>`) ], }) }

export function weight( tx: Transaction, member: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::multisig::weight`, arguments: [ obj(tx, member) ], }) }
