import {PUBLISHED_AT} from "..";
import {String} from "../../_dependencies/source/0x1/string/structs";
import {GenericArg, generic, obj, pure} from "../../_framework/util";
import {Transaction, TransactionArgument, TransactionObjectInput} from "@mysten/sui/transactions";

export interface LockCapArgs { auth: TransactionObjectInput; account: TransactionObjectInput; cap: TransactionObjectInput; name: string | TransactionArgument; delayMs: bigint | TransactionArgument }

export function lockCap( tx: Transaction, typeArg: string, args: LockCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::lock_cap`, typeArguments: [typeArg], arguments: [ obj(tx, args.auth), obj(tx, args.account), obj(tx, args.cap), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.delayMs, `u64`) ], }) }

export interface HasCapArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function hasCap( tx: Transaction, typeArg: string, args: HasCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::has_cap`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface GetCapPackageArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function getCapPackage( tx: Transaction, typeArg: string, args: GetCapPackageArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::get_cap_package`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface GetCapVersionArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function getCapVersion( tx: Transaction, typeArg: string, args: GetCapVersionArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::get_cap_version`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface GetCapPolicyArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function getCapPolicy( tx: Transaction, typeArg: string, args: GetCapPolicyArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::get_cap_policy`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export interface GetTimeDelayArgs { account: TransactionObjectInput; name: string | TransactionArgument }

export function getTimeDelay( tx: Transaction, typeArg: string, args: GetTimeDelayArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::get_time_delay`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.name, `${String.$typeName}`) ], }) }

export function getPackagesInfo( tx: Transaction, typeArg: string, account: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::get_packages_info`, typeArguments: [typeArg], arguments: [ obj(tx, account) ], }) }

export interface IsPackageManagedArgs { account: TransactionObjectInput; packageAddr: string | TransactionArgument }

export function isPackageManaged( tx: Transaction, typeArg: string, args: IsPackageManagedArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::is_package_managed`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.packageAddr, `address`) ], }) }

export interface GetPackageAddrArgs { account: TransactionObjectInput; packageName: string | TransactionArgument }

export function getPackageAddr( tx: Transaction, typeArg: string, args: GetPackageAddrArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::get_package_addr`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.packageName, `${String.$typeName}`) ], }) }

export interface GetPackageNameArgs { account: TransactionObjectInput; packageAddr: string | TransactionArgument }

export function getPackageName( tx: Transaction, typeArg: string, args: GetPackageNameArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::get_package_name`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.packageAddr, `address`) ], }) }

export interface NewUpgradeArgs { intent: TransactionObjectInput; name: string | TransactionArgument; digest: Array<number | TransactionArgument> | TransactionArgument; intentWitness: GenericArg }

export function newUpgrade( tx: Transaction, typeArgs: [string, string], args: NewUpgradeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::new_upgrade`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.digest, `vector<u8>`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface DoUpgradeArgs { executable: TransactionObjectInput; account: TransactionObjectInput; clock: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function doUpgrade( tx: Transaction, typeArgs: [string, string, string], args: DoUpgradeArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::do_upgrade`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.clock), obj(tx, args.versionWitness), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export function deleteUpgrade( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::delete_upgrade`, arguments: [ obj(tx, expired) ], }) }

export interface NewCommitArgs { intent: TransactionObjectInput; name: string | TransactionArgument; intentWitness: GenericArg }

export function newCommit( tx: Transaction, typeArgs: [string, string], args: NewCommitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::new_commit`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), pure(tx, args.name, `${String.$typeName}`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface DoCommitArgs { executable: TransactionObjectInput; account: TransactionObjectInput; receipt: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function doCommit( tx: Transaction, typeArgs: [string, string, string], args: DoCommitArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::do_commit`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.receipt), obj(tx, args.versionWitness), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export function deleteCommit( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::delete_commit`, arguments: [ obj(tx, expired) ], }) }

export interface NewRestrictArgs { intent: TransactionObjectInput; name: string | TransactionArgument; policy: number | TransactionArgument; intentWitness: GenericArg }

export function newRestrict( tx: Transaction, typeArgs: [string, string], args: NewRestrictArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::new_restrict`, typeArguments: typeArgs, arguments: [ obj(tx, args.intent), pure(tx, args.name, `${String.$typeName}`), pure(tx, args.policy, `u8`), generic(tx, `${typeArgs[1]}`, args.intentWitness) ], }) }

export interface DoRestrictArgs { executable: TransactionObjectInput; account: TransactionObjectInput; versionWitness: TransactionObjectInput; intentWitness: GenericArg }

export function doRestrict( tx: Transaction, typeArgs: [string, string, string], args: DoRestrictArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::do_restrict`, typeArguments: typeArgs, arguments: [ obj(tx, args.executable), obj(tx, args.account), obj(tx, args.versionWitness), generic(tx, `${typeArgs[2]}`, args.intentWitness) ], }) }

export function deleteRestrict( tx: Transaction, expired: TransactionObjectInput ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::delete_restrict`, arguments: [ obj(tx, expired) ], }) }

export interface BorrowCapArgs { account: TransactionObjectInput; packageAddr: string | TransactionArgument }

export function borrowCap( tx: Transaction, typeArg: string, args: BorrowCapArgs ) { return tx.moveCall({ target: `${PUBLISHED_AT}::package_upgrade::borrow_cap`, typeArguments: [typeArg], arguments: [ obj(tx, args.account), pure(tx, args.packageAddr, `address`) ], }) }
