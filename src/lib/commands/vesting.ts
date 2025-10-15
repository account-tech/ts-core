import { SuiClient } from "@mysten/sui/client";
import { normalizeStructTag } from "@mysten/sui/utils";
import { TransactionArgument } from "@mysten/sui/transactions";
import { claim as claimVesting, cancelPayment as cancelPaymentVesting, destroyEmpty as destroyEmptyVesting, destroyCap as destroyCapVesting } from "../../packages/account_actions/vesting";
import { ACCOUNT_ACTIONS } from "../../types";

export async function getCaps(
    client: SuiClient,
    addr: string
): Promise<{ capId: string, vestingId: string }[]> {
    const caps = await client.getOwnedObjects({
        owner: addr,
        filter: { StructType: `${ACCOUNT_ACTIONS.V1}::vesting::ClaimCap` },
        options: { showContent: true }
    })
    return caps.data?.map((cap) => ({
        capId: (cap.data?.content as any).fields.id.id,
        vestingId: (cap.data?.content as any).fields.vesting_id,
    }))
}

export async function getVestings(
    client: SuiClient,
    ids: string[]
): Promise<{
    coinType: string,
    id: string,
    balance: bigint,
    lastClaimed: bigint,
    startTimestamp: bigint,
    endTimestamp: bigint,
    recipient: string
}[]> {
    let vestings = [];
    for (let i = 0; i < ids.length; i += 50) {
        const batch = ids.slice(i, i + 50);
        const batchResults = await client.multiGetObjects({
            ids: batch,
            options: { showContent: true }
        });
        vestings.push(...batchResults);
    };

    return vestings.map((vesting: any) => {
        const fields = vesting.data.content.fields;
        return {
            coinType: normalizeStructTag(vesting.data.content.type.match(/<([^>]*)>/)![1]),
            id: fields.id.id,
            balance: BigInt(fields.balance),
            lastClaimed: BigInt(fields.last_claimed),
            startTimestamp: BigInt(fields.start_timestamp),
            endTimestamp: BigInt(fields.end_timestamp),
            recipient: fields.recipient,
        }
    });
}

/// Claims the unlocked amount of a vesting
export function claim(
    coinType: string,
    vesting: TransactionArgument,
    cap: TransactionArgument,
) {
    claimVesting({
        typeArguments: [coinType],
        arguments: { vesting, cap },
    });
}

/// Cancels a vesting and sends back the coin to the account
export function cancelPayment(
    configType: string,
    coinType: string,
    auth: TransactionArgument,
    account: TransactionArgument,
    vesting: TransactionArgument,
) {
    cancelPaymentVesting({
        typeArguments: [configType, coinType],
        arguments: { auth, vesting, account },
    });
}

/// Destroys a Vesting object with empty balance
export function destroyEmpty(
    coinType: string,
    vesting: TransactionArgument,
) {
    destroyEmptyVesting({
        typeArguments: [coinType],
        arguments: { vesting },
    });
}

/// Destroys a ClaimCap
export function destroyCap(
    cap: TransactionArgument,
) {
    destroyCapVesting({
        arguments: { cap },
    });
}