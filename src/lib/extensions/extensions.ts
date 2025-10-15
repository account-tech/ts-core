import { DynamicFieldInfo, SuiClient, SuiObjectResponse } from "@mysten/sui/client";
import { Extensions as ExtensionsRaw } from "../../packages/account_extensions/extensions";
import { EXTENSIONS } from "../../types/constants";
import { Dep } from "../account";
import { ExtensionData } from "./types";

export class Extensions {
    extensions: ExtensionData[] = [];

    private constructor(
        public client: SuiClient,
    ) {}

    static async init(client: SuiClient): Promise<Extensions> {
        const extensions = new Extensions(client);
        await extensions.refresh();

        return extensions;
    }

    // get and format extensions data
    async fetch(): Promise<ExtensionData[]> {
        const objectData = await this.client.getObject({
            id: EXTENSIONS,
            options: { showBcs: true }
        });

        if (objectData.data?.bcs?.dataType !== 'moveObject') {
            throw new Error('Expected a move object')
        }
        
        const extensionsRaw = ExtensionsRaw.fromBase64(objectData.data.bcs.bcsBytes);
        // get the inner table items
        let dfs: DynamicFieldInfo[] = [];
        let data: DynamicFieldInfo[];
        let nextCursor: string | null = null;
        let hasNextPage = true;
        while (hasNextPage) {
            ({ data, nextCursor, hasNextPage } = await this.client.getDynamicFields({
                parentId: extensionsRaw.by_name.id.id,
                cursor: nextCursor
            }));
            dfs.push(...data);
        }
        const extensionsIdToName: Record<string, string> = {};
        dfs.forEach((df) => {
            extensionsIdToName[df.objectId] = df.name.value as string;
        });
        // Process in batches of 50 due to API limitations
        const extensionsDfs = [];
        const dfIds = Object.keys(extensionsIdToName);
        for (let i = 0; i < dfIds.length; i += 50) {
            const batch = dfIds.slice(i, i + 50);
            const batchResults = await this.client.multiGetObjects({
                ids: batch,
                options: { showContent: true }
            });
            extensionsDfs.push(...batchResults);
        }

        const extensions: ExtensionData[] = extensionsDfs.map((dfValue: SuiObjectResponse) => {
            const history = (dfValue.data?.content as any).map((entry: any) => {
                return {
                    addr: entry.addr,
                    version: Number(entry.version),
                }
            });

            return { name: extensionsIdToName[dfValue.data!.objectId], history };
        });

        return extensions;
    }

    async refresh() {
        this.setData(await this.fetch());
    }

    setData(extensions: ExtensionData[]) {
        this.extensions = extensions;
    }

    getData(): ExtensionData[] {
        return this.extensions;
    }

    getLatestDeps(): Dep[] {
        return this.extensions.map((extension) => {
            const len = extension.history.length;
            return {
                name: extension.name,
                addr: extension.history[len - 1].addr,
                version: extension.history[len - 1].version,
            }
        });
    }
}

