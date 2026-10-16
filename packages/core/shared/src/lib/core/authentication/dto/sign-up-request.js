"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchPlatformRequest = exports.SignUpRequest = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const attribution_1 = require("../../common/attribution");
const user_1 = require("../../user/user");
const passwordless_request_1 = require("./passwordless-request");
exports.SignUpRequest = zod_1.z.object({
    email: user_1.EmailType,
    password: user_1.PasswordType,
    firstName: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)),
    lastName: zod_1.z.string().regex(new RegExp(core_utils_1.SAFE_STRING_PATTERN)),
    trackEvents: zod_1.z.boolean(),
    newsLetter: zod_1.z.boolean(),
    captchaToken: zod_1.z.string().trim().min(1).max(passwordless_request_1.MAX_CAPTCHA_TOKEN_LENGTH).optional(),
    attribution: attribution_1.AttributionParams.optional(),
});
exports.SwitchPlatformRequest = zod_1.z.object({
    platformId: core_utils_1.ApId,
});
//# sourceMappingURL=sign-up-request.js.map