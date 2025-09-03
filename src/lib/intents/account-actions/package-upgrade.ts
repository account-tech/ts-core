import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";
import * as accountProtocol from "../../../.gen/account-protocol/account/functions";
import * as intents from "../../../.gen/account-protocol/intents/functions";
import * as upgradePolicies from "../../../.gen/account-actions/package-upgrade/functions";
import * as upgradePoliciesIntents from "../../../.gen/account-actions/package-upgrade-intents/functions";
import { RestrictAction, UpgradeAction } from "../../../.gen/account-actions/package-upgrade/structs";

import { ActionsIntentTypes, RestrictPolicyArgs, UpgradePackageArgs } from "../types";
import { Intent } from "../intent";
import { CLOCK } from "../../../types";

export class UpgradePackageIntent extends Intent {
    static type = ActionsIntentTypes.UpgradePackage;
    declare args: UpgradePackageArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const upgradeAction = UpgradeAction.fromFieldsWithTypes(actions[0]);

        this.args = {
            packageName: upgradeAction.name,
            digest: upgradeAction.digest,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: UpgradePackageArgs,
    ) {
        upgradePoliciesIntents.requestUpgradePackage(
            tx,
            accountGenerics,
            {
                auth,
                account,
                params,
                outcome,
                packageName: actionArgs.packageName,
                digest: actionArgs.digest,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ): TransactionResult { // Ticket
        return upgradePoliciesIntents.executeUpgradePackage(
            tx,
            accountGenerics,
            {
                executable,
                account: this.account,
                clock: CLOCK
            }
        );
    }

    commit(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
        receipt: TransactionObjectInput,
    ) {
        upgradePoliciesIntents.executeCommitUpgrade(
            tx,
            accountGenerics,
            {
                executable,
                account: this.account,
                receipt,
            }
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
            }
        );
        upgradePolicies.deleteUpgrade(
            tx,
            expired
        );
        upgradePolicies.deleteCommit(
            tx,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
                clock: CLOCK,
            }
        );
        upgradePolicies.deleteUpgrade(
            tx,
            expired
        );
        upgradePolicies.deleteCommit(
            tx,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}

export class RestrictPolicyIntent extends Intent {
    static type = ActionsIntentTypes.RestrictPolicy;
    declare args: RestrictPolicyArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const restrictAction = RestrictAction.fromFieldsWithTypes(actions[0]);

        if (restrictAction.policy !== 0 && restrictAction.policy !== 128 && restrictAction.policy !== 192 && restrictAction.policy !== 255) {
            throw new Error("Invalid policy");
        }

        this.args = {
            packageName: restrictAction.name,
            policy: restrictAction.policy,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: RestrictPolicyArgs,
    ) {
        upgradePoliciesIntents.requestRestrictPolicy(
            tx,
            accountGenerics,
            {
                auth,
                account,
                params,
                outcome,
                packageName: actionArgs.packageName,
                policy: actionArgs.policy,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
    ) {
        upgradePoliciesIntents.executeRestrictPolicy(
            tx,
            accountGenerics,
            {
                executable,
                account: this.account,
            }
        );
    }

    clearEmpty(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.destroyEmptyIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
            }
        );
        upgradePolicies.deleteRestrict(
            tx,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }

    deleteExpired(
        tx: Transaction,
        accountGenerics: [string, string],
        key: string,
    ) {
        const expired = accountProtocol.deleteExpiredIntent(
            tx,
            accountGenerics,
            {
                account: this.account,
                key,
                clock: CLOCK,
            }
        );
        upgradePolicies.deleteRestrict(
            tx,
            expired
        );
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}