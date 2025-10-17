import { CurrencyRules } from "../../../packages/account_actions/currency";
import { Currency, ManagedKeyTypes } from "../types";
import { SuiMoveObject } from "@mysten/sui/client";
import { Asset } from "../managed";

export class Currencies extends Asset {
    override type = "currencies";
    static keys = [ManagedKeyTypes.CurrencyRules, ManagedKeyTypes.TreasuryCap];
    override assets: Record<string, Currency> = {}; // name -> currency struct

    async init() {
        this.dfs = this.dfs.filter(df => Currencies.keys.some(key => df.name.type.includes(key)));
        const dfIds = this.dfs.map(df => df.objectId);
        // Fetch all objects in one batch
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

        // Create lookup map
        const coinTypeToCapRules: Record<string, { capFields: any | null, rulesBcs: string | null }> = {};
    
        dfContents.forEach(obj => {
            if (!obj.data?.content) return;
            const moveObj = obj.data.content as SuiMoveObject;
            if (moveObj.type?.includes('CurrencyRules')) {
                const coinType = (moveObj.fields as any).name.type.match(/<([^>]*)>/)![1];
                if (!coinTypeToCapRules[coinType]) {
                    coinTypeToCapRules[coinType] = { capFields: null, rulesBcs: null };
                }
                if (obj.data?.bcs?.dataType !== 'moveObject') {
                    throw new Error('Expected a move object')
                }
                coinTypeToCapRules[coinType].rulesBcs = obj.data.bcs?.bcsBytes;
            } else if (moveObj.type?.includes('TreasuryCap')) {
                const coinType = moveObj.type.match(/<([^>]*)>/)![1];
                if (!coinTypeToCapRules[coinType]) {
                    coinTypeToCapRules[coinType] = { capFields: null, rulesBcs: null };
                }
                coinTypeToCapRules[coinType].capFields = moveObj.fields;
            }
        });
        
        // Process each currency
        for (const [coinType, { capFields, rulesBcs }] of Object.entries(coinTypeToCapRules)) {
            if (!rulesBcs || !capFields) continue;
            
            const currencyRules = CurrencyRules.fromBase64(rulesBcs);
    
            this.assets[coinType] = {
                currentSupply: BigInt(capFields.total_supply.value),
                maxSupply: currencyRules.max_supply ? BigInt(currencyRules.max_supply) : null,
                totalMinted: BigInt(currencyRules.total_minted),
                totalBurned: BigInt(currencyRules.total_burned),
                canMint: currencyRules.can_mint,
                canBurn: currencyRules.can_burn,
                canUpdateSymbol: currencyRules.can_update_symbol,
                canUpdateName: currencyRules.can_update_name,
                canUpdateDescription: currencyRules.can_update_description,
                canUpdateIcon: currencyRules.can_update_icon,
            } as Currency;
        }
    }
}

