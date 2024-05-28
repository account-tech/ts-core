import { CLOCK, FRAMEWORK } from "./types/constants.js";
import { Account, Kiosk, Multisig, Proposal, TransferPolicy } from "./types/types.js";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { TransactionBlock, TransactionResult } from "@mysten/sui.js/transactions";
import { KioskClient, Network } from "@mysten/kiosk";
import { defaultMoveCoder } from "@typemove/sui";
import { account, multisig } from "../test/types/kraken.js";
import { kiosk } from "../test/types/0x2.js";

export class KrakenClient {
	/**
	 * @description SDK to interact with Kraken package.
	 * @param client connection to fullnode
	 */

	public client: SuiClient;
	public multisigData: Multisig | null;

	constructor(
		public network: "mainnet" | "testnet" | "devnet" | "localnet",
		public url: string,
		public packageId: string,
		public user: string,
		public multisigId: string,
	) {
		if (!url) {
			url = getFullnodeUrl(network);
		}

		this.client = new SuiClient({ url });
		this.multisigData = null;
	}

	async fetchMultisigData() {
		this.multisigData = await this.getMultisig(this.multisigId);
	}

	// ===== CORE =====

	// === Multisig ===

	async getMultisig(id: string): Promise<Multisig> {
		// get Multisig 
		const { data } = await this.client.getObject({
			id,
			options: { showContent: true }
		});

		const multisigDecoded = await defaultMoveCoder().decodedType(data?.content, multisig.Multisig.type())
		const membersAddress = typeof(multisigDecoded!.members.contents) == "string" ? [multisigDecoded!.members.contents] : multisigDecoded!.members.contents;

		const members = await Promise.all(membersAddress.map(async (member: any) => {
			return await this.getAccount(member);
		}));

		console.log(multisigDecoded!.proposals.contents);
		// get proposals in multisig and each action attached to proposals
		const proposals = await Promise.all(multisigDecoded!.proposals.contents.map(async (proposal) => {
			// get the dynamic field action for each proposal
			const parentId = proposal.value.id.id;
			const { data } = await this.client.getDynamicFields({ parentId });
			const df: any = await this.client.getObject({
				id: data[0].objectId,
				options: { showContent: true }
			});
			// TODO: generate right types 
			// + separate function for proposals
			const approved = typeof(proposal.value.approved.contents) == "string" ? [proposal.value.approved.contents] : proposal.value.approved.contents;
			const action = {
				type: df.data?.content?.fields.value.type.split("::").pop(), // The action Struct name
				...df.data?.content?.fields.value.fields // The action Struct fields
			}

			return {
				id,
				key: proposal.key,
				description: proposal.value.description,
				executionTime: proposal.value.execution_time,
				expirationEpoch: proposal.value.expiration_epoch,
				approved,
				action
			}
		}));

		return {
			name: multisigDecoded!.name,
			threshold: Number(multisigDecoded!.threshold),
			members,
			proposals,
		}
	}

	createMultisig(tx: TransactionBlock, name: string, members: string[], accountId: string): TransactionResult {
		const [multisig] = tx.moveCall({
			target: `${this.packageId}::multisig::new`,
			arguments: [tx.pure(name)],
		});

		const [id] = tx.moveCall({
			target: `${FRAMEWORK}::object::id`,
			arguments: [multisig],
			typeArguments: [`${this.packageId}::multisig::Multisig`]
		});
		
		tx.moveCall({
			target: `${this.packageId}::account::join_multisig`,
			arguments: [tx.object(accountId), id],
		});
		
		if (members.length > 0) {
			tx.moveCall({
				target: `${this.packageId}::config::propose_modify`,
				arguments: [
					multisig, 
					tx.pure("init_members"), 
					tx.pure(0), 
					tx.pure(0), 
					tx.pure(""), 
					tx.pure([]), 
					tx.pure([]), 
					tx.pure(members),
					tx.pure([]), 
				],
			});
			
			tx.moveCall({
				target: `${this.packageId}::multisig::approve_proposal`,
				arguments: [
					multisig, 
					tx.pure("init_members"), 
				],
			});
			
			tx.moveCall({
				target: `${this.packageId}::config::execute_modify`,
				arguments: [
					multisig, 
					tx.pure("init_members"), 
					tx.object(CLOCK),
				],
			});
			
			members.forEach((member) => {
				tx.moveCall({
					target: `${this.packageId}::account::send_invite`,
					arguments: [multisig, tx.pure(member)],
				});
			});
		}

		return tx.moveCall({
			target: `${this.packageId}::multisig::share`,
			arguments: [multisig],
		});
	}

	cleanProposals(tx: TransactionBlock): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::multisig::clean_proposals`,
			arguments: [tx.object(this.multisigId)],
		});
	}

	approveProposal(tx: TransactionBlock, key: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::multisig::approve_proposal`,
			arguments: [tx.object(this.multisigId), tx.pure(key)],
		});
	}

	removeApproval(tx: TransactionBlock, key: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::multisig::remove_approval`,
			arguments: [tx.object(this.multisigId), tx.pure(key)],
		});
	}

	executeProposal(tx: TransactionBlock, key: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::multisig::execute_proposal`,
			arguments: [tx.object(this.multisigId), tx.pure(key), tx.object(CLOCK)],
		});
	}

	// === Account ===

	// TODO: implement merge accounts
	async getAccount(owner: string = this.user): Promise<Account> {
		const { data } = await this.client.getOwnedObjects({
			owner,
			filter: { StructType: `${this.packageId}::account::Account` },
			options: { showContent: true }
		});
		
		if (data.length == 0) { 
			return {
				owner,
				id: "",
				username: "",
				profilePicture: "",
				multisigs: [],
			}
		}
		
		const accountDecoded = await defaultMoveCoder().decodedType(data[0].data?.content, account.Account.type())
		const multisigIds = typeof(accountDecoded!.multisigs.contents) == "string" ? [accountDecoded!.multisigs.contents] : accountDecoded!.multisigs.contents;
		
		const multisigsObjs = await this.client.multiGetObjects({
			ids: multisigIds,
			options: { showContent: true }
		});
		const multisigs = await Promise.all(multisigsObjs.map(async (ms: any) => { 
			const multisigsDecoded = await defaultMoveCoder().decodedType(ms.data?.content, multisig.Multisig.type())
			return {
				id: multisigsDecoded!.id.id,
				name: multisigsDecoded!.name
			}
		}));
		
		return {
			owner,
			id: accountDecoded!.id.id,
			username: accountDecoded!.username,
			profilePicture: accountDecoded!.profile_picture,
			multisigs,
		}
	}

	createAccount(tx: TransactionBlock, username: string, profilePicture: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::account::new`,
			arguments: [tx.pure(username), tx.pure(profilePicture)],
		});
	}

	deleteAccount(tx: TransactionBlock, account: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::account::destroy`,
			arguments: [tx.object(account)],
		});
	}

	joinMultisig(tx: TransactionBlock, account: string, multisig: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::account::join_multisig`,
			arguments: [tx.object(account), tx.pure(multisig)],
		});
	}

	leaveMultisig(tx: TransactionBlock, account: string, multisig: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::account::leave_multisig`,
			arguments: [tx.object(account), tx.pure(multisig)],
		});
	}

	// member only
	sendInvite(tx: TransactionBlock, recipient: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::account::send_invite`,
			arguments: [tx.object(this.multisigId), tx.pure(recipient)],
		});
	}

	// member only
	acceptInvite(tx: TransactionBlock, account: string, invite: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::account::accept_invite`,
			arguments: [tx.object(account), tx.object(invite)],
		});
	}

	// member only
	refuseInvite(tx: TransactionBlock, account: string, invite: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::account::refuse_invite`,
			arguments: [tx.object(account), tx.object(invite)],
		});
	}

	// === Coin operations (member only) ===

	mergeCoins(tx: TransactionBlock, to_keep: string, to_merge: string[], coinType: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::coin_operations::merge`,
			arguments: [
				tx.object(this.multisigId), 
				tx.pure(to_keep),
				tx.pure(to_merge),
			],
			typeArguments: [coinType]
		});
	}
	
	splitCoins(tx: TransactionBlock, to_keep: string, to_split: string[], coinType: string): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::coin_operations::split`,
			arguments: [
				tx.object(this.multisigId), 
				tx.pure(to_keep),
				tx.pure(to_split),
			],
			typeArguments: [coinType]
		});
	}

	// ===== PROPOSALS =====

	// === Config ===

	// submit and approve proposal, execute if is only member
	proposeModify(
		tx: TransactionBlock, 
		key: string, 
		executionTime: number,
		expirationEpoch: number,
		description: string,
		name?: string,
		threshold?: number,
		toAdd?: string[],
		toRemove?: string[],
	) {
		tx.moveCall({
			target: `${this.packageId}::config::propose_modify`,
			arguments: [
				tx.object(this.multisigId), 
				tx.pure(key), 
				tx.pure(executionTime), 
				tx.pure(expirationEpoch), 
				tx.pure(description), 
				name ? tx.pure([name]) : tx.pure([]), 
				threshold ? tx.pure([threshold]) : tx.pure([]), 
				toAdd ? tx.pure(toAdd) : tx.pure([]),
				toRemove ? tx.pure(toRemove) : tx.pure([]), 
			],
		});		
		
		this.approveProposal(tx, key);
		
		if (this.multisigData?.threshold == 1) {
			tx.moveCall({
				target: `${this.packageId}::config::execute_modify`,
				arguments: [
					tx.object(this.multisigId), 
					tx.pure(key), 
					tx.object(CLOCK),
				],
			});
		}
	}

	executeModify(
		tx: TransactionBlock, 
		key: string, 
	) {
		tx.moveCall({
			target: `${this.packageId}::config::execute_modify`,
			arguments: [
				tx.object(this.multisigId), 
				tx.pure(key), 
				tx.object(CLOCK),
			],
		});
	}

	// === Kiosk ===

	initKioskClient(): KioskClient {
		let network: Network;
		if (this.network == "mainnet") {
			network = Network.MAINNET;
		} else if (this.network == "testnet") {
			network = Network.TESTNET;
		} else {
			network = Network.CUSTOM;
		}

		return new KioskClient({
			client: this.client,
			network,
		});
	}

	async getKiosks(): Promise<Kiosk[]> {
		const kioskClient = this.initKioskClient();
		const { kioskOwnerCaps } = await kioskClient.getOwnedKiosks({address: this.multisigId});
		
		let kiosks: Kiosk[] = [];

		for (let i = 0; i < kioskOwnerCaps.length; i += 25) {
			const ids = kioskOwnerCaps.map(cap => cap.kioskId).slice(i, i + 25);
			const kioskObjects = await this.client.multiGetObjects({
				ids,
				options: { showContent: true }
			});
			
			kiosks = kiosks.concat(await Promise.all(kioskObjects.map(async (obj: any, index) => {
				const kioskDecoded = await defaultMoveCoder().decodedType(obj.data?.content, kiosk.Kiosk.type());
				return {
					cap: kioskOwnerCaps[i + index].objectId,
					kiosk: kioskOwnerCaps[i + index].kioskId,
					profits: kioskDecoded!.profits,
					itemCount: kioskDecoded!.item_count,
				}
			})));
		}

		return kiosks;
	}
	
	async getPolicy(nftType: string): Promise<TransferPolicy> {
		const kioskClient = this.initKioskClient();
		const policies = await kioskClient.getTransferPolicies({type: nftType});

		return {
			id: policies[0].id,
			hasFloorPrice: policies[0].rules.find(rule => rule.includes("floor_price_rule")) ? true : false,
			hasRoyalty: policies[0].rules.find(rule => rule.includes("royalty_rule")) ? true : false,
			isLocked: policies[0].rules.find(rule => rule.includes("kiosk_lock_rule")) ? true : false,
		};
	}

	// return the Kiosk (must be shared)
	createKiosk(tx: TransactionBlock): TransactionResult {
		return tx.moveCall({
			target: `${this.packageId}::kiosk::new`,
			arguments: [tx.object(this.multisigId)],
		});
	}	

	// 1. create a Kiosk if the Multisig doesn't have one OR
	// 1(bis) get the Kiosk if it already exists
	// 2. get the TransferPolicy for the type
	// 3. transferFrom for each nft of this type
	// 4. repeat for each type
	// (5. share the Kiosk if it has been created in this PTB)
	// not a proposal
	transferFrom(
		tx: TransactionBlock, 
		policy: TransferPolicy,
		multisigKiosk: string,
		multisigCap: string,
		senderKiosk: string,
		senderCap: string,
		nftId: string,
		nftType: string,
	): TransactionResult {
		const [request] = tx.moveCall({
			target: `${this.packageId}::kiosk::transfer_from`,
			arguments: [
				tx.object(this.multisigId), 
				tx.object(multisigKiosk),
				tx.object(multisigCap),
				tx.object(senderKiosk),
				tx.object(senderCap),
				tx.pure(nftId),
			],
			typeArguments: [nftType]
		});
		// fill the request
		const tpId = this.resolveRules(tx, policy, multisigKiosk, request, nftType);
		// destroy the request
		tx.moveCall({
			target: `${FRAMEWORK}::transfer_policy::confirm_request`,
			arguments: [
				tx.object(tpId), 
				request, 
			],
		});
	}

	proposeTransferTo(
		tx: TransactionBlock,
		key: string,
		executionTime: number,
		expirationEpoch: number,
		description: string,
		capId: string,
		nfts: string,
		recipient: string,
	) {
		tx.moveCall({
			target: `${this.packageId}::kiosk::propose_transfer_to`,
			arguments: [
				tx.object(this.multisigId), 
				tx.pure(key), 
				tx.pure(executionTime),
				tx.pure(expirationEpoch),
				tx.pure(description),
				tx.pure(capId),
				tx.pure(nfts),
				tx.pure(recipient),
			],
		});
		this.approveProposal(tx, key);
	}

	async executeTransferTo(tx: TransactionBlock, key: string, capId: string) {
		const ids = this.multisigData?.proposals.filter(p => p.key == key).map(p => p.action.fields.nfts);
		if (!ids) throw new Error("Proposal is not valid");
		const nfts = await this.client.multiGetObjects({
			ids,
			options: { showContent: true }
		});
		// TODO: get their type
		const [action] = this.executeProposal(tx, key);
		const [cap] = tx.moveCall({
			target: `${this.packageId}::kiosk::borrow_cap_transfer`,
			arguments: [action, tx.object(this.multisigId), tx.object(capId)],
		});
		// TODO: complete the function
	}

	private resolveRules(
		tx: TransactionBlock, 
		policy: TransferPolicy,
		kiosk: string, 
		transferRequest: any, 
		nftType: string
	) {
		if (policy.hasFloorPrice) {
			tx.moveCall({
				target: `${this.packageId}::floor_price_rule::prove`,
				typeArguments: [nftType],
				arguments: [tx.object(policy.id), transferRequest],
			});
		}
		if (policy.hasRoyalty) {
			const fee = tx.splitCoins(tx.gas, [0]);
			tx.moveCall({
				target: `${this.packageId}::royalty_rule::pay`,
				typeArguments: [nftType],
				arguments: [tx.object(policy.id), transferRequest, fee],
			});
		} 
		if (policy.isLocked) {
			tx.moveCall({
				target: `${this.packageId}::kiosk_lock_rule::prove`,
				typeArguments: [nftType],
				arguments: [transferRequest, tx.object(kiosk)],
			});
		}
	}
}

