import { CoinStruct, SuiClient } from "@mysten/sui/client";

export async function findObjectTypes(
    client: SuiClient,
    objectIds: string[],
): Promise<string[]> {
    let objectTypes: string[] = [];
    for (let i = 0; i < objectIds.length; i += 50) {
        const objects = await client.multiGetObjects({
            ids: objectIds.slice(i, i + 50),
            options: { showType: true }
        });
        objectTypes.push(...objects.map(object => object.data?.type!));
    }
    return objectTypes;
}

export async function findCoinsToMerge(
    client: SuiClient,
    accountId: string,
    coinType: string,
    amount: bigint,
): Promise<string[]> {
    let allCoins: CoinStruct[] = [];
    let data: CoinStruct[] = [];
    let nextCursor: string | null | undefined = null;
    let hasNextPage = true;
    while (hasNextPage) {
        ({ data, hasNextPage, nextCursor } = await client.getCoins({
            coinType,
            owner: accountId,
            cursor: nextCursor,
        }));
        allCoins.push(...data);

        if (allCoins.reduce((acc, coin) => acc + BigInt(coin.balance), 0n) >= amount) {
            break;
        }
    }

    return allCoins.map(coin => coin.coinObjectId);
}

export async function findCoinsToMergeBatch(
    client: SuiClient,
    accountId: string,
    coinType: string,
    amounts: bigint[],
): Promise<string[][]> {
    let allCoins: CoinStruct[][] = [[]];
    let data: CoinStruct[] = [];
    let nextCursor: string | null | undefined = null;
    let hasNextPage = true;
    let amountIndex = 0;
    while (hasNextPage && amounts.length > 0) {
        ({ data, hasNextPage, nextCursor } = await client.getCoins({
            coinType,
            owner: accountId,
            cursor: nextCursor,
        }));
        allCoins[amountIndex].push(...data);

        if (allCoins[amountIndex].reduce((acc, coin) => acc + BigInt(coin.balance), 0n) >= amounts[amountIndex]) {
            amountIndex++;
            allCoins.push([]);
        }
    }

    return allCoins.map(coins => coins.map(coin => coin.coinObjectId));
}