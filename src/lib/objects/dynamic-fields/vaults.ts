import { DynamicFieldInfo, SuiMoveObject } from "@mysten/sui/client";
import { ManagedKeyTypes, Vault } from "../types";
import { Asset } from "../managed";

export class Vaults extends Asset {
    override type = "vaults";
    static keys = [ManagedKeyTypes.Vault];
    override assets: Record<string, Vault> = {};
    
    async init() {
        this.dfs = this.dfs.filter(df => Vaults.keys.some(key => df.name.type.includes(key)));
        const dfIds = this.dfs.map(df => df.objectId);
        // First get all vault objects to extract bag IDs
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
        
        // Map vault IDs to their bag IDs
        const vaultToBagId: Record<string, string> = {};
        dfContents.forEach(df => {
            if (!df.data?.content) return;
            const moveObj = df.data.content as SuiMoveObject;
            vaultToBagId[df.data.objectId] = (moveObj.fields as any).value.fields.bag.fields.id.id;
        });
        
        // Process each vault in parallel
        await Promise.all(this.dfs.map(async df => {
            const bagId = vaultToBagId[df.objectId];
            if (!bagId) return;
            
            // Get all dynamic fields (coins) in the bag
            let dfs: DynamicFieldInfo[] = [];
            let data: DynamicFieldInfo[];
            let nextCursor: string | null = null;
            let hasNextPage = true;
            while (hasNextPage) {
                ({ data, nextCursor, hasNextPage } = await this.client.getDynamicFields({
                    parentId: bagId,
                    cursor: nextCursor
                }));
                dfs.push(...data);
            }
            
            // Map field IDs to their coin types
            const fieldIdsToCoinType: Record<string, string> = {};
            dfs.forEach(df => {
                fieldIdsToCoinType[df.objectId] = (df.name.value as any).name;
            });
    
            // Fetch all coin objects in one batch
            const coinObjs = await this.client.multiGetObjects({
                ids: Object.keys(fieldIdsToCoinType),
                options: { showContent: true }
            });
            
            // Extract balances from coin objects and combine with types
            const coins: Record<string, bigint> = {};
            coinObjs.forEach(coin => {
                if (!coin.data?.content) return;
                const moveObj = coin.data.content as SuiMoveObject;
                const coinType = fieldIdsToCoinType[coin.data.objectId];
                coins[coinType] = BigInt((moveObj.fields as any).value);
            });
            
            this.assets[(df.name.value as any).pos0] = { coins };
        }));
    }
}