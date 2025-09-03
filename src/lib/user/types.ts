export type Profile = {
    username: string;
    avatar: string;
}

export type Invite = {
    id: string;
    accountAddr: string;
    accountName: string;
}

export type UserData = {
    id: string;
    profile: Profile;
    accountIds: string[];
    invites: Invite[];
}