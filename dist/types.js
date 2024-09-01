export class APIError {
    status;
    code;
    message;
    constructor(status, context) {
        this.status = status;
        this.code = context[0];
        this.message = context[1];
    }
}
export const Errors = {
    0: new APIError(500, [0, "An unknown error has occured"]),
    1: new APIError(404, [1, "Not Found"]),
    2: new APIError(400, [2, "Invalid state"]),
    3: new APIError(400, [3, "Invalid payload"]),
    4: new APIError(400, [4, "Bad body"]),
    5: new APIError(400, [5, "Payload expired"]),
    6: new APIError(400, [6, "Bad code"]),
    7: new APIError(400, [7, "Missing scopes"]),
    8: new APIError(400, [8, "Unsupported sub type"]),
    9: new APIError(405, [9, "Method not allowed"]),
    10: new APIError(400, [10, "Bad query"]),
    11: new APIError(401, [11, "Missing authorization"]),
    12: new APIError(403, [12, "Missing access"]),
    13: new APIError(500, [13, "Datastore unavailable"]),
    14: new APIError(409, [14, "Account already exists"]),
    15: new APIError(409, [15, "Roblox account linked limit reached"]),
    16: new APIError(409, [16, "Roblox account already linked"]),
    17: new APIError(413, [17, "Too many accounts queried"]),
    18: new APIError(400, [18, "Invalid session"]),
    19: new APIError(404, [19, "Session not found"]),
};
export var SubjectTypes;
(function (SubjectTypes) {
    SubjectTypes[SubjectTypes["Roblox"] = 0] = "Roblox";
    SubjectTypes[SubjectTypes["Discord"] = 1] = "Discord";
})(SubjectTypes || (SubjectTypes = {}));
