import { ACCOUNT_ACTIONS, ACCOUNT_PROTOCOL, TransactionPureInput } from "../../types";
import { Dep } from "../account";

export const ProtocolIntentTypes = {
    ConfigDeps: `${ACCOUNT_PROTOCOL.V1.slice(2)}::config::ConfigDepsIntent`,
    ToggleUnverifiedAllowed: `${ACCOUNT_PROTOCOL.V1.slice(2)}::config::ToggleUnverifiedAllowedIntent`,
} as const;

export const ActionsIntentTypes = {
    Empty: `${ACCOUNT_ACTIONS.V1.slice(2)}::empty_intents::EmptyIntent`,

    BorrowCap: `${ACCOUNT_ACTIONS.V1.slice(2)}::access_control_intents::BorrowCapIntent`,
    
    DisableRules: `${ACCOUNT_ACTIONS.V1.slice(2)}::currency_intents::DisableRulesIntent`,
    UpdateMetadata: `${ACCOUNT_ACTIONS.V1.slice(2)}::currency_intents::UpdateMetadataIntent`,
    MintAndTransfer: `${ACCOUNT_ACTIONS.V1.slice(2)}::currency_intents::MintAndTransferIntent`,
    MintAndVest: `${ACCOUNT_ACTIONS.V1.slice(2)}::currency_intents::MintAndVestIntent`,
    WithdrawAndBurn: `${ACCOUNT_ACTIONS.V1.slice(2)}::currency_intents::WithdrawAndBurnIntent`,

    TakeNfts: `${ACCOUNT_ACTIONS.V1.slice(2)}::kiosk_intents::TakeNftsIntent`,
    ListNfts: `${ACCOUNT_ACTIONS.V1.slice(2)}::kiosk_intents::ListNftsIntent`,

    WithdrawAndTransferToVault: `${ACCOUNT_ACTIONS.V1.slice(2)}::owned_intents::WithdrawAndTransferToVaultIntent`,
    WithdrawAndTransfer: `${ACCOUNT_ACTIONS.V1.slice(2)}::owned_intents::WithdrawAndTransferIntent`,
    WithdrawAndVest: `${ACCOUNT_ACTIONS.V1.slice(2)}::owned_intents::WithdrawAndVestIntent`,

    UpgradePackage: `${ACCOUNT_ACTIONS.V1.slice(2)}::package_upgrade_intents::UpgradePackageIntent`,
    RestrictPolicy: `${ACCOUNT_ACTIONS.V1.slice(2)}::package_upgrade_intents::RestrictPolicyIntent`,

    SpendAndTransfer: `${ACCOUNT_ACTIONS.V1.slice(2)}::vault_intents::SpendAndTransferIntent`,
    SpendAndVest: `${ACCOUNT_ACTIONS.V1.slice(2)}::vault_intents::SpendAndVestIntent`,
} as const;

export type IntentStatus = {
    stage: 'pending' | 'resolved' | 'executable'; // pending approval > waiting for execution_time > executable
    deletable: boolean; // can be deleted because expiration time reached, (can still be resolved or executed)
}

export type IntentFields = {
    type_: string;
    key: string;
    description: string;
    account: string;
    creator: string;
    creationTime: bigint;
    executionTimes: bigint[];
    expirationTime: bigint;
    role: string;
    actionsId: string;
}

export type IntentArgs = {
    key: string;
    description?: string;
    executionTimes?: bigint[];
    expirationTime?: bigint;
}

export type ActionsArgs =
    ConfigDepsArgs | ToggleUnverifiedAllowedArgs |
    BorrowCapArgs |
    DisableRulesArgs | UpdateMetadataArgs | MintAndTransferArgs | MintAndVestArgs | WithdrawAndBurnArgs |
    TakeNftsArgs | ListNftsArgs |
    WithdrawAndTransferToVaultArgs | WithdrawAndTransferArgs | WithdrawAndVestArgs |
    SpendAndTransferArgs | SpendAndVestArgs |
    UpgradePackageArgs | RestrictPolicyArgs;

export type ConfigDepsArgs = {
    deps: Dep[];
}

export type ToggleUnverifiedAllowedArgs = {}

export type BorrowCapArgs = {
    capType: string;
}

export type DisableRulesArgs = {
    coinType: string;
    mint: boolean;
    burn: boolean;
    updateSymbol: boolean;
    updateName: boolean;
    updateDescription: boolean;
    updateIcon: boolean;
}

export type UpdateMetadataArgs = {
    coinType: string;
    newName: string | null;
    newSymbol: string | null;
    newDescription: string | null;
    newIconUrl: string | null;
}

export type MintAndTransferArgs = {
    coinType: string;
    transfers: { amount: bigint, recipient: string }[];
}

export type MintAndVestArgs = {
    coinType: string;
    amount: bigint;
    start: bigint; // ms
    end: bigint; // ms
    recipient: string;
}

export type WithdrawAndBurnArgs = {
    coinType: string;
    coinId: TransactionPureInput;
    amount: bigint;
}

export type TakeNftsArgs = {
    kioskName: string;
    nftIds: string[];
    recipient: string;
}

export type ListNftsArgs = {
    kioskName: string;
    listings: { nftId: string, price: bigint }[];
}

export type WithdrawAndTransferToVaultArgs = {
    coinType: string;
    coinId: TransactionPureInput;
    coinAmount: bigint;
    vaultName: string;
}

export type WithdrawAndTransferArgs = {
    transfers: { objectId: TransactionPureInput, recipient: string }[];
}

export type WithdrawAndVestArgs = {
    coinId: TransactionPureInput;
    start: bigint;
    end: bigint;
    recipient: string;
}

export type SpendAndTransferArgs = {
    treasuryName: string;
    coinType: string;
    transfers: { amount: bigint, recipient: string }[];
}

export type SpendAndVestArgs = {
    treasuryName: string;
    coinType: string;
    amount: bigint;
    start: bigint;
    end: bigint;
    recipient: string;
}

export type UpgradePackageArgs = {
    packageName: string;
    digest: number[];
}

export type RestrictPolicyArgs = {
    packageName: string;
    policy: typeof Policy[keyof typeof Policy];
}

export const Policy = {
    Compatible: 0,
    Additive: 128,
    DepOnly: 192,
    Immutable: 255,
} as const;
