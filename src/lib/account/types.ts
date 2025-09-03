export type AccountData = {
    id: string;
    metadata: Metadata[];
    deps: Dep[];
    unverifiedDepsAllowed: boolean;
    lockedObjects: string[];
    intentsBagId: string;
}

export type Metadata = {
    key: string;
    value: string;
};

export type Dep = {
    name: string;
    addr: string;
    version: number;
}