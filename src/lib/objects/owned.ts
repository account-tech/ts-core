import { SuiClient, SuiMoveObject, SuiObjectResponse } from "@mysten/sui/client";
import { OwnedData, Coin, Nft, OtherObj } from "./types";

export class Owned implements OwnedData {
    coins: Coin[] = [];
    nfts: Nft[] = [];
    objects: OtherObj[] = [];

    private constructor(
        public client: SuiClient,
        public accountId: string,
    ) { }

    static async init(client: SuiClient, accountId: string): Promise<Owned> {
        const owned = new Owned(client, accountId);
        await owned.refresh();
        return owned;
    }

    async fetch(accountId: string = this.accountId): Promise<OwnedData> {
        if (!accountId && !this.accountId) {
            throw new Error("Multisig address missing");
        }
        
        let allObjects: SuiObjectResponse[] = [];
        let data: SuiObjectResponse[] = [];
        let nextCursor: string | null | undefined = null;
        let hasNextPage = true;
        while (hasNextPage) {
            ({ data, hasNextPage, nextCursor } = await this.client.getOwnedObjects({
                owner: accountId,
                cursor: nextCursor,
                options: { showContent: true, showType: true, showDisplay: true }
            }));
            
            allObjects.push(...data);
        }
        
        const coinMap = new Map<string, Coin>(); // type -> Coin
        const nfts: Nft[] = [];
        const objects: OtherObj[] = [];

        allObjects.forEach(obj => {
            if (!obj.data?.type || !obj.data?.objectId) return;

            // Check if it's a Coin
            if (obj.data.type.startsWith("0x2::coin::Coin")) {
                const type = obj.data.type.match(/<([^>]*)>/)![1];
                if (!coinMap.has(type)) {
                    coinMap.set(type, {
                        type,
                        instances: [],
                        totalAmount: 0n
                    });
                }
                const coin = coinMap.get(type)!;
                coin.instances.push({ amount: BigInt((obj.data?.content as any).fields.balance), ref: { objectId: obj.data.objectId, version: obj.data.version, digest: obj.data.digest } });
                coin.totalAmount += BigInt((obj.data?.content as any).fields.balance);
            }
            // Check if it's a "visual" NFT
            else if (obj.data.display?.data) {
                const display = obj.data.display;
                nfts.push({
                    type: obj.data.type,
                    ref: { objectId: obj.data.objectId, version: obj.data.version, digest: obj.data.digest },
                    name: display?.data?.name ?? "",
                    image: display?.data?.image_url ?? "" // TODO: add default
                });
            }
            // Everything else goes to objects
            else {
                objects.push({
                    type: obj.data.type,
                    ref: { objectId: obj.data.objectId, version: obj.data.version, digest: obj.data.digest },
                    fields: Object.fromEntries(Object.entries((obj.data.content as SuiMoveObject).fields ?? {}).filter(([key]) => key !== 'id'))
                });
            }
        });

        return {
            coins: Array.from(coinMap.values()).sort((a, b) => a.type.localeCompare(b.type)),
            nfts: nfts.sort((a, b) => a.type.localeCompare(b.type)),
            objects: objects.sort((a, b) => a.type.localeCompare(b.type))
        };
    }

    async refresh(accountId: string = this.accountId) {
        const ownedData = await this.fetch(accountId);
        this.setData(ownedData);
    }

    getData(): OwnedData {
        return {
            coins: this.coins,
            nfts: this.nfts,
            objects: this.objects
        };
    }

    setData(data: OwnedData) {
        this.coins = data.coins;
        this.nfts = data.nfts;
        this.objects = data.objects;
    }

    getCoin(coinType: string): Coin | undefined {
        return this.coins.find(c => c.type === coinType);
    }

    getNft(nftType: string): Nft | undefined {
        return this.nfts.find(n => n.type === nftType);
    }

    getOtherObj(type: string): OtherObj | undefined {
        return this.objects.find(o => o.type === type);
    }

    getObjOrNftRefById(id: string): { objectId: string, version: string, digest: string } | undefined {
        const obj = this.nfts.find(n => n.ref.objectId === id) ?? this.objects.find(o => o.ref.objectId === id);
        if (!obj) return undefined;
        return { objectId: obj.ref.objectId, version: obj.ref.version, digest: obj.ref.digest };
    }

    getCoinTypeById(id: string): string | undefined {
        for (const coin of this.coins) {
            const instance = coin.instances.find(i => i.ref.objectId === id);
            if (instance) return coin.type;
        }
        return undefined;
    }

    getTypeById(id: string): string | undefined {
        // Check coins first
        for (const coin of this.coins) {
            const instance = coin.instances.find(i => i.ref.objectId === id);
            if (instance) return `0x2::coin::Coin<${coin.type}>`;
        }
        // Then check NFTs and other objects
        const obj = this.nfts.find(n => n.ref.objectId === id) ?? this.objects.find(o => o.ref.objectId === id);
        if (!obj) return undefined;
        return obj.type;
    }
}