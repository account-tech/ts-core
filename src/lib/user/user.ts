import { SuiClient, SuiMoveObject, SuiObjectResponse } from "@mysten/sui/client";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";
import { normalizeStructTag } from "@mysten/sui/utils";
import { SuinsClient } from '@mysten/suins';

import { User as UserRaw, Invite as InviteRaw } from "../../packages/account_protocol/user";
import { acceptInvite, refuseInvite, reorderAccounts } from "../../packages/account_protocol/user";
import { _new, transfer, destroy } from "../../packages/account_protocol/user";
import { USER_REGISTRY, ACCOUNT_PROTOCOL } from "../../types/constants";
import { UserData, Invite, Profile } from "./types";
import { RawTransactionArgument } from "src/packages/utils";

export class User implements UserData {
	id: string = "";
	profile: Profile = { username: "", avatar: "" };
	accountIds: string[] = [];
	invites: Invite[] = [];

	constructor(
		public client: SuiClient,
		public accountType: string,
		public address?: string,
		public baseSuiNS: string = "0x0080100390e27b7cae27c999a55ba6c8a8162e9f4cbee5a77cbfdbfc018bd3fc"
	) {	}

	static async init(
		client: SuiClient,
		accountType: string,
		address?: string,
	): Promise<User> {
		const user = new User(client, accountType, address);
		if (address) await user.refresh();
		return user;
	}

	async fetch(owner: string = this.address!): Promise<UserData> {
		if (!owner && !this.address) {
			throw new Error("No address provided to refresh account");
		}

		// Fetch user object
		const { data: userData } = await this.client.getOwnedObjects({
			owner,
			filter: { StructType: `${ACCOUNT_PROTOCOL.V1}::user::User` },
			options: { showContent: true, showBcs: true }
		});
		if (userData[0].data?.bcs?.dataType !== 'moveObject') {
			throw new Error('Expected a move object')
		}
		const userRaw = userData.length !== 0 ? UserRaw.fromBase64(userData[0].data?.bcs?.bcsBytes) : null;

		const profile = await this.fetchProfile(owner);

		const accountIds = userRaw?.accounts.contents.flatMap((entry) => entry.value) ?? [];
		const invites = await this.fetchInvites(owner);

		return {
			id: userRaw?.id.id ?? "",
			profile,
			accountIds,
			invites,
		}
	}

	async fetchProfile(owner: string): Promise<Profile> {
		let username = `${owner.slice(0, 5)}...${owner.slice(-3)}`;
		let avatar = "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-1024.png";

		try {
			const names = (await this.client.resolveNameServiceNames({ format: "at", address: owner })).data;

			if (names.length > 0) {
				username = names[0];

				const networks = ["mainnet", "testnet"];
				for (const network of networks) {
					try {
						const suinsClient = new SuinsClient({ client: this.client, network: network as "mainnet" | "testnet",});
						const nameRecord = await suinsClient.getNameRecord(username);
						if (nameRecord?.avatar) {
							avatar = nameRecord.avatar;
							break;
						}
					} catch (err) {
					}
				}
			}
		} catch (err) {
		}

		return { username, avatar };
	}

	async fetchInvites(owner: string = this.address!): Promise<Invite[]> {
		// Fetch invite objects
		const { data: inviteData } = await this.client.getOwnedObjects({
			owner,
			filter: { StructType: `${ACCOUNT_PROTOCOL.V1}::user::Invite` },
			options: { showContent: true, showBcs: true }
		});
		if (inviteData.length === 0) return [];

		const invitesParsed = inviteData
			.map(invite => InviteRaw.fromBase64((invite.data?.bcs as any).bcsBytes))
			.filter(invite => normalizeStructTag(invite.account_type) === this.accountType);

		// Get all account addresses from invites
		const accountAddrs = invitesParsed.map(invite => invite.account_addr);

		// Fetch all account objects in one batch
		// Process in batches of 50 due to API limitations
		const accountObjs = [];
		for (let i = 0; i < accountAddrs.length; i += 50) {
			const batch = accountAddrs.slice(i, i + 50);
			const batchResults = await this.client.multiGetObjects({
				ids: batch,
				options: { showContent: true }
			});
			accountObjs.push(...batchResults);
		}

		// Create a map of account address to name
		const accountNames = new Map<string, string>();
		accountObjs.forEach((acc: SuiObjectResponse) => {
			if (!acc.data?.content) return;
			const moveObj = acc.data.content as SuiMoveObject;
			const name = (moveObj.fields as any).metadata.fields.inner.fields.contents
				.find((entry: any) => entry.fields.key === "name")?.fields.value;
			if (name) {
				accountNames.set(acc.data.objectId, name);
			}
		});

		// Group invites by account type
		const invites = invitesParsed
			.map(invite => {
				return {
					id: invite.id.id,
					accountAddr: invite.account_addr,
					accountName: accountNames.get(invite.account_addr) ?? invite.account_addr
				};
			})
			.sort((a, b) => a.accountName.localeCompare(b.accountName));

		return invites;
	}

	async refresh(address: string = this.address!) {
		this.setData(await this.fetch(address));
	}

	setData(account: UserData) {
		this.id = account.id;
		this.profile = account.profile;
		this.accountIds = account.accountIds;
		this.invites = account.invites;
	}

	getData(): UserData {
		return {
			id: this.id,
			profile: this.profile,
			accountIds: this.accountIds,
			invites: this.invites
		}
	}

	// returns an account object that can be used in the ptb before being transferred
	createUser(
		tx: Transaction, 
		username?: string, 
		avatar?: string
	): TransactionResult {
		// TODO: uncomment for mainnet
		// if (username && this.profile.username.slice(6, 9) === "...") {
		// 	const suinsClient = new SuinsClient({ client: this.client, network: 'mainnet' });
		// 	const suinsTransaction = new SuinsTransaction(suinsClient, tx);

		// 	const subNameNft = suinsTransaction.createSubName({
		// 		parentNft: this.baseSuiNS, // user@account
		// 		name: username,
		// 		expirationTimestampMs: 1911625240737,
		// 		allowChildCreation: true,
		// 		allowTimeExtension: false,
		// 	});

		// if (avatar) {
		// 	suinsTransaction.setUserData({
		// 		nft: subNameNft,
		// 		key: ALLOWED_METADATA.avatar,
		// 		value: avatar,
		// 		isSubname: false,
		// 	});
		// }

		// 	tx.transferObjects([subNameNft], tx.pure.address(this.address!));
		// }

		return tx.add(
			_new()
		);
	}

	transferUser(
		tx: Transaction,
		user: RawTransactionArgument<string>,
		recipient: string
	) {
		return tx.add(
			transfer({arguments: { registry: USER_REGISTRY, user, recipient }})
		);
	}

	deleteUser(
		tx: Transaction,
		user: RawTransactionArgument<string>
	) {
		return tx.add(
			destroy({arguments: { registry: USER_REGISTRY, user }})
		);
	}

	acceptInvite(
		tx: Transaction,
		user: RawTransactionArgument<string>,
		invite: RawTransactionArgument<string>
	) {
		return tx.add(
			acceptInvite({arguments: { user, invite }})
		);
	}

	refuseInvite(
		tx: Transaction,
		invite: RawTransactionArgument<string>
	) {
		return tx.add(
			refuseInvite({arguments: { invite }})
		);
	}

	reorderAccounts(
		tx: Transaction,
		user: RawTransactionArgument<string>,
		accountType: string,
		accountAddrs: string[]
	) {
		return tx.add(
			reorderAccounts({
				typeArguments: [accountType],
				arguments: { user, addrs: accountAddrs }
			})
		);
	}
}

