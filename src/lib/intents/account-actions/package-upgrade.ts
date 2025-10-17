import { TransactionArgument } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";
import * as upgradePolicies from "../../../packages/account_actions/package_upgrade";
import * as upgradePoliciesIntents from "../../../packages/account_actions/package_upgrade_intents";
import { RestrictAction, UpgradeAction } from "../../../packages/account_actions/package_upgrade";

import { ActionsIntentTypes, RestrictPolicyArgs, UpgradePackageArgs } from "../types";
import { Intent } from "../intent";

export class UpgradePackageIntent extends Intent {
    static type = ActionsIntentTypes.UpgradePackage;
    declare args: UpgradePackageArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const upgradeAction = UpgradeAction.fromBase64(actions[0]);

        this.args = {
            packageName: upgradeAction.name,
            digest: upgradeAction.digest,
        };
    }

    request(
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: UpgradePackageArgs,
    ) {
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
        });
    }

    execute(
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        return upgradePoliciesIntents.executeUpgradePackage({
            typeArguments: accountGenerics,
            arguments: {
                executable,
                account: this.account,
            }
        });
    }

    commit(
        accountGenerics: [string, string],
        executable: TransactionArgument,
        receipt: TransactionArgument,
    ) {
        upgradePoliciesIntents.executeCommitUpgrade({
            typeArguments: accountGenerics,
            arguments: {
                executable,
                account: this.account,
                receipt,
            }
        });
    }

    clearEmpty(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        upgradePolicies.deleteUpgrade(expired);
        upgradePolicies.deleteCommit(expired);
        intents.destroyEmptyExpired(expired);
    }

    deleteExpired(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        upgradePolicies.deleteUpgrade(expired);
        upgradePolicies.deleteCommit(expired);
        intents.destroyEmptyExpired(expired);
    }
}

export class RestrictPolicyIntent extends Intent {
    static type = ActionsIntentTypes.RestrictPolicy;
    declare args: RestrictPolicyArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const restrictAction = RestrictAction.fromBase64(actions[0]);

        if (restrictAction.policy !== 0 && restrictAction.policy !== 128 && restrictAction.policy !== 192 && restrictAction.policy !== 255) {
            throw new Error("Invalid policy");
        }

        this.args = {
            packageName: restrictAction.name,
            policy: restrictAction.policy,
        };
    }

    request(
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: RestrictPolicyArgs,
    ) {
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
        });
    }

    execute(
        accountGenerics: [string, string],
        executable: TransactionArgument,
    ) {
        upgradePoliciesIntents.executeRestrictPolicy({
            typeArguments: accountGenerics,
            arguments: {
                executable,
                account: this.account,
            }
        });
    }

    clearEmpty(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        upgradePolicies.deleteRestrict(expired);
        intents.destroyEmptyExpired(expired);
    }

    deleteExpired(
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent({
            typeArguments: accountGenerics,
            arguments: {
                account: this.account,
                key,
            }
        });
        upgradePolicies.deleteRestrict(expired);
        intents.destroyEmptyExpired(expired);
    }
}