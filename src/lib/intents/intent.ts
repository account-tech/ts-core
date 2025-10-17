import { TransactionArgument } from "@mysten/sui/transactions";
import { DynamicFieldInfo, SuiClient } from "@mysten/sui/client";
import { normalizeStructTag } from "@mysten/sui/utils";

import { newParams, newParamsWithRandKey } from "../../packages/account_protocol/intents";
import { confirmExecution } from "../../packages/account_protocol/account";
import { ActionsArgs, IntentArgs, IntentFields } from "./types";
import { Outcome } from "./outcome";

export interface Intent {
    init(): Promise<void>;

    request(
        accountGenerics: [string, string] | null, 
        auth: TransactionArgument | null,  
        account: string, 
        params: TransactionArgument, 
        outcome: TransactionArgument, 
        actionArgs: ActionsArgs
    ): void;
    
    execute(
        accountGenerics: [string, string] | null, 
        executable: TransactionArgument, 
        ...args: any[]
    ): void;
    
    clearEmpty(
        accountGenerics: [string, string], 
        key: string
    ): void;
    
    deleteExpired(
        accountGenerics: [string, string], 
        key: string
    ): void;
}

export class Intent {
    static type: string;
    args!: ActionsArgs;

    constructor(
        public client: SuiClient,
        public account: string,
        public outcome: Outcome,
        public fields: IntentFields,
    ) { }

    static createParams(intentArgs: IntentArgs) {
        newParams({ arguments: { 
            key: intentArgs.key, 
            description: intentArgs.description ?? "",
            executionTimes: intentArgs.executionTimes ?? [0n],
            expirationTime: intentArgs.expirationTime ?? BigInt(Math.floor(Date.now()) + 7 * 24 * 60 * 60 * 1000),
        }});
    }

    static createParamsWithRandKey(intentArgs: Pick<IntentArgs, "description" | "executionTimes" | "expirationTime">) {
        newParamsWithRandKey({ arguments: { 
            description: intentArgs.description ?? "",
            executionTimes: intentArgs.executionTimes ?? [0n],
            expirationTime: intentArgs.expirationTime ?? BigInt(Math.floor(Date.now()) + 7 * 24 * 60 * 60 * 1000),
        }});
    }

    completeExecution(accountGenerics: [string, string], executable: TransactionArgument) {
        confirmExecution({
            typeArguments: accountGenerics, 
            arguments: { account: this.account!, executable }
        });
    }

    async fetchActions(parentId: string): Promise<any[]> {
        // get the actions in each proposal bag
        let dfs: DynamicFieldInfo[] = [];
        let data: DynamicFieldInfo[] = [];
        let nextCursor: string | null | undefined = null;
        let hasNextPage = true;
        while (hasNextPage) {
            ({ data, hasNextPage, nextCursor } = await this.client.getDynamicFields({
                parentId,
                cursor: nextCursor,
            }));

            dfs.push(...data);
        }
        // sort actions by ascending order 
        const ids = dfs
            .sort((a, b) => Number(a.name.value) - Number(b.name.value))
            .map(df => df.objectId);

        let actions: any[] = [];
        if (dfs.length > 0) {
            // Process in batches of 50 due to API limitations
            const allActionDfs = [];
            for (let i = 0; i < ids.length; i += 50) {
                const batchIds = ids.slice(i, i + 50);
                const batchResults = await this.client.multiGetObjects({
                    ids: batchIds,
                    options: { showContent: true }
                });
                allActionDfs.push(...batchResults);
            }
            actions = allActionDfs.map((df: any) => df.data?.content.fields.value);
        }
        if (actions.length === 0) {
            throw new Error('No actions found for the proposal');
        }

        return actions;
    }

    assertProposalExists() {
        if (!this.fields?.key) {
            throw new Error(`Intent key does not exist: ${this.fields.key}`);
        }
    }

    hasExpired(): boolean {
        return this.fields.expirationTime < Date.now();
    }
}

export class Intents {
    private intentFactory: Array<typeof Intent>;
    private outcomeFactory: Array<typeof Outcome>;
    intents: Record<string, Intent> = {};

    private constructor(
        public client: SuiClient,
        public accountId: string,
        public intentsBagId: string,
        intentFactory: Array<typeof Intent>,
        outcomeFactory: Array<typeof Outcome>,
    ) { 
        this.intentFactory = intentFactory;
        this.outcomeFactory = outcomeFactory;
    }

    static async init(
        client: SuiClient,
        accountId: string,
        intentsBagId: string,
        intentFactory: Array<typeof Intent>,
        outcomeFactory: Array<typeof Outcome>,
    ): Promise<Intents> {
        const intents = new Intents(client, accountId, intentsBagId, intentFactory, outcomeFactory);
        await intents.refresh();
        return intents;
    }

    async fetchIntents(intentsBagId: string): Promise<Intent[]> {
        // get Intents with actions
        let dfs: DynamicFieldInfo[] = [];
        let data: DynamicFieldInfo[];
        let nextCursor: string | null = null;
        let hasNextPage = true;
        while (hasNextPage) {
            ({ data, nextCursor, hasNextPage } = await this.client.getDynamicFields({
                parentId: intentsBagId,
                cursor: nextCursor
            }));
            dfs.push(...data);
        }
        const dfIds = dfs.map((df) => df.objectId);
        // Process in batches of 50 due to API limitations
        const intentsDfs = [];
        for (let i = 0; i < dfIds.length; i += 50) {
            const batch = dfIds.slice(i, i + 50);
            const batchResults = await this.client.multiGetObjects({
                ids: batch,
                options: { showContent: true }
            });
            intentsDfs.push(...batchResults);
        }
        const intents = await Promise.all(intentsDfs.map(async (df: any) => {
            const intentRaw = (df.data?.content as any).fields.value.fields;
            const outcomeType = this.outcomeFactory.find(outcome => outcome.type === intentRaw.outcome.type);
            if (!outcomeType) {
                throw new Error(`Outcome type ${intentRaw.outcome.type} not found`);
            }
            const outcome = new outcomeType(this.accountId, intentRaw.key, intentRaw.outcome);
            
            const fields: IntentFields = {
                type_: normalizeStructTag(intentRaw.type_.fields.name),
                key: intentRaw.key,
                description: intentRaw.description,
                account: intentRaw.account,
                creator: intentRaw.creator,
                creationTime: BigInt(intentRaw.creation_time),
                executionTimes: intentRaw.execution_times.map((time: any) => BigInt(time)),
                expirationTime: BigInt(intentRaw.expiration_time),
                role: intentRaw.role,
                actionsId: intentRaw.actions.fields.id.id,
            }
            
            let intentType = this.intentFactory.find(intent => intent.type === normalizeStructTag(fields.type_));
            if (!intentType) {
                throw new Error(`Intent type ${normalizeStructTag(fields.type_)} not registered`);
            }
            let intent = new intentType(this.client, this.accountId, outcome, fields);
            await intent.init();
            return intent;
        }));

        return intents;
    }

    async refresh(intentsBagId: string = this.intentsBagId) {
        const intents = await this.fetchIntents(intentsBagId);
        this.intents = intents.reduce((acc, intent) => {
            acc[intent.fields.key] = intent;
            return acc;
        }, {} as Record<string, Intent>);
    }
}