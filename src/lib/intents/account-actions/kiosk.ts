import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";
import { ListAction, TakeAction } from "../../../.gen/account-actions/kiosk/structs";
import * as kiosk from "../../../.gen/account-actions/kiosk/functions";
import * as kioskIntent from "../../../.gen/account-actions/kiosk-intents/functions";
import * as accountProtocol from "../../../.gen/account-protocol/account/functions";
import * as intents from "../../../.gen/account-protocol/intents/functions";

import { ListNftsArgs, TakeNftsArgs, ActionsIntentTypes } from "../types";
import { Intent } from "../intent";
import { CLOCK, SUI_FRAMEWORK } from "../../../types";

export class TakeNftsIntent extends Intent {
    static type = ActionsIntentTypes.TakeNfts;
    declare args: TakeNftsArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const takeActions = actions.map(action => TakeAction.fromFieldsWithTypes(action));

        this.args = {
            kioskName: takeActions[0].name,
            nftIds: takeActions.map(action => action.nftId),
            recipient: takeActions[0].recipient,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: TakeNftsArgs,
    ) {
        kioskIntent.requestTakeNfts(
            tx,
            accountGenerics,
            {
                auth,
                account,
                params,
                outcome,
                kioskName: actionArgs.kioskName,
                nftIds: actionArgs.nftIds,
                recipient: actionArgs.recipient,
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
        typesAndPolicies: { type: string, policy: string }[],
        accountKiosk: string,
        recipientKiosk: string,
        recipientCap: string,
    ) {
        for (const { type, policy } of typesAndPolicies) {
            const request = kioskIntent.executeTakeNfts(
                tx,
                [...accountGenerics, type],
                {
                    executable,
                    account: this.account,
                    accountKiosk,
                    recipientKiosk,
                    recipientCap,
                    policy,
                }
            );
            tx.moveCall({
                target: `${SUI_FRAMEWORK}::transfer_policy::confirm_request`,
                typeArguments: [type],
                arguments: [tx.object(policy), request]
            });
        }
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
        this.args.nftIds.forEach(_ => {
            kiosk.deleteTake(
                tx,
                expired
            );
        });
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
        this.args.nftIds.forEach(_ => {
            kiosk.deleteTake(
                tx,
                expired,
            );
        });
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}

export class ListNftsIntent extends Intent {
    static type = ActionsIntentTypes.ListNfts;
    declare args: ListNftsArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const listActions = actions.map(action => ListAction.fromFieldsWithTypes(action));

        this.args = {
            kioskName: listActions[0].name,
            listings: listActions.map(action => ({ nftId: action.nftId, price: action.price })),
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionObjectInput,
        account: string,
        params: TransactionObjectInput,
        outcome: TransactionObjectInput,
        actionArgs: ListNftsArgs,
    ) {
        kioskIntent.requestListNfts(
            tx,
            accountGenerics,
            {
                auth,
                account,
                params,
                outcome,
                kioskName: actionArgs.kioskName,
                nftIds: actionArgs.listings.map(listing => listing.nftId),
                prices: actionArgs.listings.map(listing => BigInt(listing.price)),
            }
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionObjectInput,
        nftTypes: string[],
        accountKiosk: string,
    ) {
        for (const type of nftTypes) {
            kioskIntent.executeListNfts(
                tx,
                [...accountGenerics, type],
                {
                    executable,
                    account: this.account,
                    kiosk: accountKiosk,
                }
            );
        }
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
        this.args.listings.forEach(_ => {
            kiosk.deleteList(
                tx,
                expired
            );
        });
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
        this.args.listings.forEach(_ => {
            kiosk.deleteList(
                tx,
                expired,
            );
        });
        intents.destroyEmptyExpired(
            tx,
            expired,
        );
    }
}