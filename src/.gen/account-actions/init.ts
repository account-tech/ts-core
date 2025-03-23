import * as accessControlIntents from "./access-control-intents/structs";
import * as accessControl from "./access-control/structs";
import * as currencyIntents from "./currency-intents/structs";
import * as currency from "./currency/structs";
import * as kioskIntents from "./kiosk-intents/structs";
import * as kiosk from "./kiosk/structs";
import * as ownedIntents from "./owned-intents/structs";
import * as packageUpgradeIntents from "./package-upgrade-intents/structs";
import * as packageUpgrade from "./package-upgrade/structs";
import * as transfer from "./transfer/structs";
import * as vaultIntents from "./vault-intents/structs";
import * as vault from "./vault/structs";
import * as version from "./version/structs";
import * as vesting from "./vesting/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(accessControl.BorrowAction);
loader.register(accessControl.CapKey);
loader.register(accessControl.ReturnAction);
loader.register(accessControlIntents.BorrowCapIntent);
loader.register(currency.BurnAction);
loader.register(currency.CurrencyRules);
loader.register(currency.CurrencyRulesKey);
loader.register(currency.DisableAction);
loader.register(currency.MintAction);
loader.register(currency.TreasuryCapKey);
loader.register(currency.UpdateAction);
loader.register(currencyIntents.DisableRulesIntent);
loader.register(currencyIntents.MintAndTransferIntent);
loader.register(currencyIntents.MintAndVestIntent);
loader.register(currencyIntents.UpdateMetadataIntent);
loader.register(currencyIntents.WithdrawAndBurnIntent);
loader.register(kiosk.KioskOwnerKey);
loader.register(kiosk.ListAction);
loader.register(kiosk.TakeAction);
loader.register(kioskIntents.ListNftsIntent);
loader.register(kioskIntents.TakeNftsIntent);
loader.register(ownedIntents.WithdrawAndTransferIntent);
loader.register(ownedIntents.WithdrawAndTransferToVaultIntent);
loader.register(ownedIntents.WithdrawAndVestIntent);
loader.register(packageUpgrade.CommitAction);
loader.register(packageUpgrade.RestrictAction);
loader.register(packageUpgrade.UpgradeAction);
loader.register(packageUpgrade.UpgradeCapKey);
loader.register(packageUpgrade.UpgradeIndex);
loader.register(packageUpgrade.UpgradeIndexKey);
loader.register(packageUpgrade.UpgradeRules);
loader.register(packageUpgrade.UpgradeRulesKey);
loader.register(packageUpgradeIntents.RestrictPolicyIntent);
loader.register(packageUpgradeIntents.UpgradePackageIntent);
loader.register(transfer.TransferAction);
loader.register(vault.DepositAction);
loader.register(vault.SpendAction);
loader.register(vault.Vault);
loader.register(vault.VaultKey);
loader.register(vaultIntents.SpendAndTransferIntent);
loader.register(vaultIntents.SpendAndVestIntent);
loader.register(version.V1);
loader.register(vesting.ClaimCap);
loader.register(vesting.VestAction);
loader.register(vesting.Vesting);
 }
