/// Managed assets are objects added as dynamic fields with the different interfaces

import { DynamicFieldInfo, SuiClient } from "@mysten/sui/client";

export interface Asset {
    init(): Promise<void>;
}

export class Asset {
    client: SuiClient;
    type: string = "";
    static keys: string[] = [];
    dfs: DynamicFieldInfo[] = [];
    assets: Record<string, any> = {}; // name -> asset struct

    constructor(client: SuiClient, dfs: DynamicFieldInfo[]) {
        this.client = client;
        this.dfs = dfs;
    }
}

export class Managed {
    private assetRegistry: Array<typeof Asset>;
    client: SuiClient;
    accountId: string;
    assets: Record<string, Asset> = {};

    private constructor(
        client: SuiClient,
        accountId: string,
        assetRegistry: Array<typeof Asset>,
    ) {
        this.client = client;
        this.assetRegistry = assetRegistry;
        this.accountId = accountId;
    }

    static async init(
        client: SuiClient, 
        accountId: string, 
        assetRegistry: Array<typeof Asset>
    ): Promise<Managed> {
        const managed = new Managed(client, accountId, assetRegistry);
        await managed.refresh();
        return managed;
    }

    async fetch(accountId: string = this.accountId): Promise<Asset[]> {
        if (!accountId && !this.accountId) {
            throw new Error("Account id missing");
        }

        let dfs: DynamicFieldInfo[] = [];
        let data: DynamicFieldInfo[];
        let nextCursor: string | null = null;
        let hasNextPage = true;
        while (hasNextPage) {
            ({ data, nextCursor, hasNextPage } = await this.client.getDynamicFields({
                parentId: accountId,
                cursor: nextCursor
            }));
            dfs.push(...data);
        }
        
        const assets = await Promise.all(this.assetRegistry.map(async assetClass => {
            let asset = new assetClass(this.client, dfs);
            await asset.init();
            return asset;
        }));

        return assets;
    }

    async refresh(accountId: string = this.accountId) {
        const assets = await this.fetch(accountId);
        this.assets = assets.reduce((acc, asset) => {
            acc[asset.type] = asset;
            return acc;
        }, {} as Record<string, Asset>);
    }
}
