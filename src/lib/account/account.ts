import { SuiClient } from "@mysten/sui/client";
import { AccountData, Metadata, Dep } from "./types";

export interface Account {
	init(id?: string): Promise<void>;
	refresh(id?: string): Promise<void>;
}

export class Account implements AccountData {
	static type: string;
	id: string = "";
	metadata: Metadata[] = [];
	deps: Dep[] = [];
	unverifiedDepsAllowed: boolean = false;
	intentsBagId: string = "";

	constructor(
		public client: SuiClient,
	) { }

	getName(): string {
		return this.metadata.find(m => m.key == "name")?.value!;
	}
}
