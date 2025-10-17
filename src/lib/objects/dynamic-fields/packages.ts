import { SuiMoveObject } from "@mysten/sui/client";
import { UpgradeRules } from "../../../packages/account_actions/package_upgrade";
import { ManagedKeyTypes, Package } from "../types";
import { Asset } from "../managed";

export class Packages extends Asset {
    override type = "packages";
    static keys = [ManagedKeyTypes.UpgradeCap, ManagedKeyTypes.UpgradeRules];
    override assets: Record<string, Package> = {};
    
    async init() {
        this.dfs = this.dfs.filter(df => Packages.keys.some(key => df.name.type.includes(key)));
        const dfIds = this.dfs.map(df => df.objectId);
    
        // Process in batches of 50 due to API limitations
        const dfContents = [];
        for (let i = 0; i < dfIds.length; i += 50) {
            const batch = dfIds.slice(i, i + 50);
            const batchResults = await this.client.multiGetObjects({
                ids: batch,
                options: { showContent: true, showBcs: true }
            });
            dfContents.push(...batchResults);
        }
    
        // Create lookup maps
        const nameToCapRules: Record<string, { capFields: any | null, rulesBcs: string | null }> = {};
    
        dfContents.forEach(obj => {
            if (!obj.data?.content) return;
            const moveObj = obj.data.content as SuiMoveObject;
            if (moveObj.type?.includes('UpgradeRules')) {
                const name = (this.dfs.find(df => df.objectId === obj.data?.objectId)?.name.value as any).pos0;
                if (!nameToCapRules[name]) {
                    nameToCapRules[name] = { capFields: null, rulesBcs: null };
                }
                if (obj.data?.bcs?.dataType !== 'moveObject') {
                    throw new Error('Expected a move object')
                }
                nameToCapRules[name].rulesBcs = obj.data.bcs?.bcsBytes;
            } else if (moveObj.type?.includes('UpgradeCap')) {
                const name = (this.dfs.find(df => df.objectId === obj.data?.objectId)?.name.value as any).pos0;
                if (!nameToCapRules[name]) {
                    nameToCapRules[name] = { capFields: null, rulesBcs: null };
                }
                nameToCapRules[name].capFields = moveObj.fields;
            }
        });
    
        // Process each upgrade policy
        for (const [name, { capFields, rulesBcs }] of Object.entries(nameToCapRules)) {
            if (!rulesBcs || !capFields) continue;
            const upgradeRules = UpgradeRules.fromBase64(rulesBcs);
    
            this.assets[name] = {
                packageId: capFields.package,
                capId: capFields.id.id,
                policy: capFields.policy,
                delayMs: BigInt(upgradeRules.delay_ms),
            };
        }
    }
}