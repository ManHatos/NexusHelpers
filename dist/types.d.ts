/** API error class */
export declare class APIError {
    /** HTTP status code */
    readonly status: number;
    /** identifiable error code */
    readonly code: number;
    /** readable error message */
    readonly message: string;
    constructor(status: number, context: [number, string]);
}
/** API error directory */
export declare const Errors: {
    /** An unknown error has occurred */
    0: APIError;
    /** Resource not found */
    1: APIError;
    /** An invalid state was provided */
    2: APIError;
    /** An invalid payload was provided */
    3: APIError;
    /** Bad body provided */
    4: APIError;
    /** Verification payload has expired */
    5: APIError;
    /** Bad code */
    6: APIError;
    /** Missing scopes */
    7: APIError;
    /** Unsupported sub type */
    8: APIError;
    /** Method not allowed */
    9: APIError;
    /** Bad query */
    10: APIError;
    /** Missing authorization */
    11: APIError;
    /** Missing access */
    12: APIError;
    /** Datastore unavailable */
    13: APIError;
    /** Account already exists */
    14: APIError;
    /** Roblox account linked limit reached */
    15: APIError;
    /** Roblox account already linked */
    16: APIError;
    /** Too many accounts queried */
    17: APIError;
    /** Invalid session code provided */
    18: APIError;
    /** Session not found */
    19: APIError;
    /** Access expired */
    20: APIError;
    /** Subject not found */
    21: APIError;
};
/** state payload types */
export declare enum SubjectTypes {
    Roblox = 0,
    Discord = 1
}
/** a roblox linked account */
export interface RobloxAccount {
    id: bigint;
    linkedAt: Date;
}
/** a nexus account */
export interface Account {
    discord: bigint;
    roblox: RobloxAccount[];
    createdAt: Date;
}
