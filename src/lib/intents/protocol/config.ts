import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";
import * as config from "../../../packages/account_protocol/config";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import { ConfigDepsAction, ToggleUnverifiedAllowedAction } from "../../../packages/account_protocol/config";

import { EXTENSIONS } from "../../../types";
import { ConfigDepsArgs, ProtocolIntentTypes, ToggleUnverifiedAllowedArgs } from "../types";
import { Intent } from "../intent";

export class ConfigDepsIntent extends Intent {
    static type = ProtocolIntentTypes.ConfigDeps;
    declare args: ConfigDepsArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const configDepsAction = ConfigDepsAction.fromBase64(actions[0]);

        this.args = {
            deps: configDepsAction.deps.map((dep) => ({
                name: dep.name,
                addr: dep.addr,
                version: Number(dep.version),
            })),
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: ConfigDepsArgs,
    ) {
        const names: string[] = [];
        const addresses: string[] = [];
        const versions: bigint[] = [];
        actionArgs.deps.forEach((dep) => {
            names.push(dep.name);
            addresses.push(dep.addr);
            versions.push(BigInt(dep.version));
        });

        tx.add(
            config.requestConfigDeps({
                typeArguments: accountGenerics,
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    extensions: EXTENSIONS,
                    names,
                    addresses,
                    versions,
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ): TransactionResult {
        return tx.add(
            config.executeConfigDeps({
                typeArguments: accountGenerics,
                arguments: {
                    executable,
                    account: this.account,
                }
            })
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.destroyEmptyIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            config.deleteConfigDeps({
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.deleteExpiredIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            config.deleteConfigDeps({
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}

export class ToggleUnverifiedAllowedIntent extends Intent {
    static type = ProtocolIntentTypes.ToggleUnverifiedAllowed;
    declare args: ToggleUnverifiedAllowedArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        ToggleUnverifiedAllowedAction.fromBase64(actions[0]);

        this.args = {};
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        _actionArgs: ToggleUnverifiedAllowedArgs,
    ) {
        tx.add(
            config.requestToggleUnverifiedAllowed({
                typeArguments: accountGenerics,
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ): TransactionResult {
        return tx.add(
            config.executeToggleUnverifiedAllowed({
                typeArguments: accountGenerics,
                arguments: {
                    executable,
                    account: this.account,
                }
            })
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.destroyEmptyIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            config.deleteToggleUnverifiedAllowed({
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = tx.add(
            accountProtocol.deleteExpiredIntent({
                typeArguments: accountGenerics,
                arguments: {
                    account: this.account,
                    key,
                }
            })
        );
        tx.add(
            config.deleteToggleUnverifiedAllowed({
                arguments: { expired }
            })
        );
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}
