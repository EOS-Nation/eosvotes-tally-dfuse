// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface GetAccount {
    account_name: string;
    head_block_num: number;
    head_block_time: string;
    privileged: boolean;
    last_code_update: string;
    created: string;
    core_liquid_balance: string;
    ram_quota: number;
    net_weight: number;
    cpu_weight: number;
    net_limit: Limit;
    cpu_limit: Limit;
    ram_usage: number;
    permissions: PermissionElement[];
    total_resources: TotalResources;
    self_delegated_bandwidth: SelfDelegatedBandwidth;
    refund_request: null;
    voter_info: VoterInfo;
}

export interface Limit {
    used: number;
    available: number;
    max: number;
}

export interface PermissionElement {
    perm_name: string;
    parent: string;
    required_auth: RequiredAuth;
}

export interface RequiredAuth {
    threshold: number;
    keys: Key[];
    accounts: Account[];
    waits: any[];
}

export interface Account {
    permission: AccountPermission;
    weight: number;
}

export interface AccountPermission {
    actor: string;
    permission: string;
}

export interface Key {
    key: string;
    weight: number;
}

export interface SelfDelegatedBandwidth {
    from: string;
    to: string;
    net_weight: string;
    cpu_weight: string;
}

export interface TotalResources {
    owner: string;
    net_weight: string;
    cpu_weight: string;
    ram_bytes: number;
}

export interface VoterInfo {
    owner: string;
    proxy: string;
    producers: string[];
    staked: number;
    last_vote_weight: string;
    proxied_vote_weight: string;
    is_proxy: number;
}