import { Account, Intent, Outcome, Asset } from "src/lib";

export interface SDKConfig {
    // Account configuration
    accountType: typeof Account; // AccountClass
    ownedObjects: boolean; // e.g. true, false
    assetFactory: Array<typeof Asset>; // Asset classes
    intentFactory: Array<typeof Intent>; // Intent classes
    outcomeFactory: Array<typeof Outcome>; // Outcome classes
}
