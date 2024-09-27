/** API error class */
export class APIError {
    /** HTTP status code */
    status;
    /** identifiable error code */
    code;
    /** readable error message */
    message;
    constructor(status, context) {
        this.status = status;
        this.code = context[0];
        this.message = context[1];
    }
}
/** API error directory */
export const Errors = {
    /** An unknown error has occurred */
    0: new APIError(500, [0, "An unknown error has occured"]),
    /** Resource not found */
    1: new APIError(404, [1, "Not Found"]),
    /** An invalid state was provided */
    2: new APIError(400, [2, "Invalid state"]),
    /** An invalid payload was provided */
    3: new APIError(400, [3, "Invalid payload"]),
    /** Bad body provided */
    4: new APIError(400, [4, "Bad body"]),
    /** Verification payload has expired */
    5: new APIError(400, [5, "Payload expired"]),
    /** Bad code */
    6: new APIError(400, [6, "Bad code"]),
    /** Missing scopes */
    7: new APIError(400, [7, "Missing scopes"]),
    /** Unsupported sub type */
    8: new APIError(400, [8, "Unsupported sub type"]),
    /** Method not allowed */
    9: new APIError(405, [9, "Method not allowed"]),
    /** Bad query */
    10: new APIError(400, [10, "Bad query"]),
    /** Missing authorization */
    11: new APIError(401, [11, "Missing authorization"]),
    /** Missing access */
    12: new APIError(403, [12, "Missing access"]),
    /** Datastore unavailable */
    13: new APIError(500, [13, "Datastore unavailable"]),
    /** Account already exists */
    14: new APIError(409, [14, "Account already exists"]),
    /** Roblox account linked limit reached */
    15: new APIError(409, [15, "Roblox account linked limit reached"]),
    /** Roblox account already linked */
    16: new APIError(409, [16, "Roblox account already linked"]),
    /** Too many accounts queried */
    17: new APIError(413, [17, "Too many accounts queried"]),
    /** Invalid session code provided */
    18: new APIError(400, [18, "Invalid session"]),
    /** Session not found */
    19: new APIError(404, [19, "Session not found"]),
    /** Access expired */
    20: new APIError(403, [20, "Access expired"]),
};
/** state payload types */
export var SubjectTypes;
(function (SubjectTypes) {
    SubjectTypes[SubjectTypes["Roblox"] = 0] = "Roblox";
    SubjectTypes[SubjectTypes["Discord"] = 1] = "Discord";
})(SubjectTypes || (SubjectTypes = {}));
