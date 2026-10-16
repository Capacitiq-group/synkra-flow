"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInRequest = void 0;
const zod_1 = require("zod");
const attribution_1 = require("../../common/attribution");
const user_1 = require("../../user/user");
exports.SignInRequest = zod_1.z.object({
    email: user_1.EmailType,
    password: user_1.PasswordType,
    attribution: attribution_1.AttributionParams.optional(),
});
//# sourceMappingURL=sign-in-request.js.map