import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import * as upgradePolicies from "../../../packages/account_actions/package_upgrade";
import * as upgradePoliciesIntents from "../../../packages/account_actions/package_upgrade_intents";

import { ActionsIntentTypes, RestrictPolicyArgs, UpgradePackageArgs } from "../types";
import { Intent } from "../intent";

export class UpgradePackageIntent extends Intent {
    static type = ActionsIntentTypes.UpgradePackage;
    declare args: UpgradePackageArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        this.args = {
            packageName: actions[0].fields.name,
            digest: actions[0].fields.digest,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: UpgradePackageArgs,
    ) {
        tx.add(
            upgradePoliciesIntents.requestUpgradePackage({
                typeArguments: accountGenerics,
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    packageName: actionArgs.packageName,
                    digest: actionArgs.digest,
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
            upgradePoliciesIntents.executeUpgradePackage({
                typeArguments: accountGenerics,
                arguments: {
                    executable,
                    account: this.account,
                }
            })
        );
    }

    commit(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
        receipt: TransactionArgument,
    ) {
        tx.add(
            upgradePoliciesIntents.executeCommitUpgrade({
                typeArguments: accountGenerics,
                arguments: {
                    executable,
                    account: this.account,
                    receipt,
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
            upgradePolicies.deleteUpgrade({
                arguments: { expired }
            })
        );
        tx.add(
            upgradePolicies.deleteCommit({
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
            upgradePolicies.deleteUpgrade({
                arguments: { expired }
            })
        );
        tx.add(
            upgradePolicies.deleteCommit({
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

export class RestrictPolicyIntent extends Intent {
    static type = ActionsIntentTypes.RestrictPolicy;
    declare args: RestrictPolicyArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);

        this.args = {
            packageName: actions[0].fields.name,
            policy: actions[0].fields.policy,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: RestrictPolicyArgs,
    ) {
        tx.add(
            upgradePoliciesIntents.requestRestrictPolicy({
                typeArguments: accountGenerics,
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    packageName: actionArgs.packageName,
                    policy: actionArgs.policy,
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
            upgradePoliciesIntents.executeRestrictPolicy({
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
            upgradePolicies.deleteRestrict({
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
            upgradePolicies.deleteRestrict({
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