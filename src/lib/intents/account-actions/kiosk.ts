import { Transaction, TransactionArgument } from "@mysten/sui/transactions";
import { ListAction, TakeAction } from "../../../packages/account_actions/kiosk";
import * as kiosk from "../../../packages/account_actions/kiosk";
import * as kioskIntent from "../../../packages/account_actions/kiosk_intents";
import * as accountProtocol from "../../../packages/account_protocol/account";
import * as intents from "../../../packages/account_protocol/intents";

import { ListNftsArgs, TakeNftsArgs, ActionsIntentTypes } from "../types";
import { Intent } from "../intent";

export class TakeNftsIntent extends Intent {
    static type = ActionsIntentTypes.TakeNfts;
    declare args: TakeNftsArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const takeActions = actions.map(action => TakeAction.fromBase64(action));

        this.args = {
            kioskName: takeActions[0].name,
            nftIds: takeActions.map(action => action.nft_id),
            recipient: takeActions[0].recipient,
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: TakeNftsArgs,
    ) {
        tx.add(
            kioskIntent.requestTakeNfts({
                typeArguments: accountGenerics,
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    kioskName: actionArgs.kioskName,
                    nftIds: actionArgs.nftIds,
                    recipient: actionArgs.recipient,
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
        typesAndPolicies: { type: string, policy: string }[],
        accountKiosk: string,
        recipientKiosk: string,
        recipientCap: string,
    ) {
        for (const { type, policy } of typesAndPolicies) {
            tx.add(
                kioskIntent.executeTakeNfts({
                    typeArguments: [...accountGenerics, type],
                    arguments: {
                        executable,
                        account: this.account,
                        accountKiosk,
                        recipientKiosk,
                        recipientCap,
                        policy,
                    }
                })
            );
        }
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
        this.args.nftIds.forEach(_ => {
            tx.add(
                kiosk.deleteTake({
                    arguments: { expired }
                })
            );
        });
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
        this.args.nftIds.forEach(_ => {
            tx.add(
                kiosk.deleteTake({
                    arguments: { expired }
                })
            );
        });
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}

export class ListNftsIntent extends Intent {
    static type = ActionsIntentTypes.ListNfts;
    declare args: ListNftsArgs;

    async init() {
        const actions = await this.fetchActions(this.fields.actionsId);
        const listActions = actions.map(action => ListAction.fromBase64(action));

        this.args = {
            kioskName: listActions[0].name,
            listings: listActions.map(action => ({ nftId: action.nft_id, price: BigInt(action.price) })),
        };
    }

    request(
        tx: Transaction,
        accountGenerics: [string, string],
        auth: TransactionArgument,
        account: string,
        params: TransactionArgument,
        outcome: TransactionArgument,
        actionArgs: ListNftsArgs,
    ) {
        tx.add(
            kioskIntent.requestListNfts({
                typeArguments: accountGenerics,
                arguments: {
                    auth,
                    account,
                    params,
                    outcome,
                    kioskName: actionArgs.kioskName,
                    nftIds: actionArgs.listings.map(listing => listing.nftId),
                    prices: actionArgs.listings.map(listing => BigInt(listing.price)),
                }
            })
        );
    }

    execute(
        tx: Transaction,
        accountGenerics: [string, string],
        executable: TransactionArgument,
        nftTypes: string[],
        accountKiosk: string,
    ) {
        for (const type of nftTypes) {
            tx.add(
                kioskIntent.executeListNfts({
                    typeArguments: [...accountGenerics, type],
                    arguments: {
                        executable,
                        account: this.account,
                        kiosk: accountKiosk,
                    }
                })
            );
        }
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
        this.args.listings.forEach(_ => {
            tx.add(
                kiosk.deleteList({
                    arguments: { expired }
                })
            );
        });
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
        this.args.listings.forEach(_ => {
            tx.add(
                kiosk.deleteList({
                    arguments: { expired }
                })
            );
        });
        tx.add(
            intents.destroyEmptyExpired({
                arguments: { expired }
            })
        );
    }
}