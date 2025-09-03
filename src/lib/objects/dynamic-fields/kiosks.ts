import { SuiMoveObject } from "@mysten/sui/client";
import { KioskClient, Network } from "@mysten/kiosk";
import { Kiosk, ManagedKeyTypes } from "../types";
import { Asset } from "../managed";

export class Kiosks extends Asset {
    kioskClient = new KioskClient({ client: this.client, network: Network.TESTNET });
    override type = "kiosks";
    static keys = [ManagedKeyTypes.KioskOwner];
    override assets: Record<string, Kiosk> = {}; // name -> kiosk struct

    async init() {
        this.dfs = this.dfs.filter(df => Kiosks.keys.some(key => df.name.type.includes(key)));
        const dfIds = this.dfs.map(df => df.objectId);
        // First get all kiosk cap objects to get kiosk IDs
        // Process in batches of 50 due to API limitations
        const dfContents = [];
        for (let i = 0; i < dfIds.length; i += 50) {
            const batch = dfIds.slice(i, i + 50);
            const batchResults = await this.client.multiGetObjects({
                ids: batch,
                options: { showContent: true }
            });
            dfContents.push(...batchResults);
        }
    
        // Map cap IDs to kiosk IDs
        const capToKioskId: Record<string, string> = {};
        dfContents.forEach(obj => {
            if (!obj.data?.content) return;
            const moveObj = obj.data.content as SuiMoveObject;
            const capId = (moveObj.fields as any).id.id;
            const kioskId = (moveObj.fields as any).for;
            capToKioskId[capId] = kioskId;
        });
    
        // Process each kiosk in parallel
        await Promise.all(this.dfs.map(async df => {
            const kioskId = capToKioskId[df.objectId];
            if (!kioskId) return;
    
            const res = await this.kioskClient.getKiosk({
                id: kioskId,
                options: {
                    withKioskFields: true,
                    withListingPrices: true,
                }
            });
    
            this.assets[(df.name.value as any).pos0] = {
                id: kioskId,
                cap: df.objectId,
                profits: BigInt(res.kiosk!.profits),
                listed: res.listingIds,
                items: res.items.map(item => ({
                    id: item.objectId,
                    type: item.type,
                    display: item.data?.display,
                    fields: (item.data?.content as any).fields,
                })),
            } as Kiosk;
        }));
    }
}
