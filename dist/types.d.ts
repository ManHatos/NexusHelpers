export declare class APIError {
    readonly status: number;
    readonly code: number;
    readonly message: string;
    constructor(status: number, context: [number, string]);
}
export declare const Errors: {
    0: APIError;
    1: APIError;
    2: APIError;
    3: APIError;
    4: APIError;
    5: APIError;
    6: APIError;
    7: APIError;
    8: APIError;
    9: APIError;
    10: APIError;
    11: APIError;
    12: APIError;
    13: APIError;
    14: APIError;
    15: APIError;
    16: APIError;
    17: APIError;
};
export interface StatePayload {
    type: SubjectTypes;
    sub: bigint;
    exp: Date;
    vf: string;
}
export declare enum SubjectTypes {
    Roblox = 0,
    Discord = 1
}
export interface RobloxAccount {
    id: bigint;
    linkedAt: Date;
}
export interface Account {
    discord: bigint;
    roblox: RobloxAccount[];
    createdAt: Date;
}
