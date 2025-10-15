/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This module defines the VersionWitness type used to track the version of the
 * protocol. This type is used as a regular witness, but for an entire package
 * instead of a single module.
 */

import { MoveStruct, normalizeMoveArguments, type RawTransactionArgument } from '../utils/index.js';
import { bcs, type BcsType } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/protocol::version_witness';
export const VersionWitness = new MoveStruct({ name: `${$moduleName}::VersionWitness`, fields: {
        package_addr: bcs.Address
    } });
export interface NewArguments<PW extends BcsType<any>> {
    PackageWitness: RawTransactionArgument<PW>;
}
export interface NewOptions<PW extends BcsType<any>> {
    package?: string;
    arguments: NewArguments<PW> | [
        PackageWitness: RawTransactionArgument<PW>
    ];
    typeArguments: [
        string
    ];
}
/** Creates a new VersionWitness for the package where the Witness is instianted. */
export function _new<PW extends BcsType<any>>(options: NewOptions<PW>) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${options.typeArguments[0]}`
    ] satisfies string[];
    const parameterNames = ["PackageWitness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'version_witness',
        function: 'new',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
        typeArguments: options.typeArguments
    });
}
export interface PackageAddrArguments {
    witness: RawTransactionArgument<string>;
}
export interface PackageAddrOptions {
    package?: string;
    arguments: PackageAddrArguments | [
        witness: RawTransactionArgument<string>
    ];
}
/** Returns the address of the package where the witness has been created. */
export function packageAddr(options: PackageAddrOptions) {
    const packageAddress = options.package ?? '@account/protocol';
    const argumentsTypes = [
        `${packageAddress}::version_witness::VersionWitness`
    ] satisfies string[];
    const parameterNames = ["witness"];
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'version_witness',
        function: 'package_addr',
        arguments: normalizeMoveArguments(options.arguments, argumentsTypes, parameterNames),
    });
}