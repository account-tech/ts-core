/**************************************************************
 * THIS FILE IS GENERATED AND SHOULD NOT BE MANUALLY MODIFIED *
 **************************************************************/


/**
 * This module tracks the version of the package by implementing the
 * version_witness type. A new version type should be defined for each new version
 * of the package.
 */

import { MoveTuple } from '../utils/index.js';
import { bcs } from '@mysten/sui/bcs';
import { type Transaction } from '@mysten/sui/transactions';
const $moduleName = '@account/protocol::version';
export const V1 = new MoveTuple({ name: `${$moduleName}::V1`, fields: [bcs.bool()] });
export interface GetOptions {
    package?: string;
    arguments?: [
    ];
}
export function get(options: GetOptions = {}) {
    const packageAddress = options.package ?? '@account/protocol';
    return (tx: Transaction) => tx.moveCall({
        package: packageAddress,
        module: 'version',
        function: 'get',
    });
}