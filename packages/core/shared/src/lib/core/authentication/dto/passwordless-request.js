"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteSignUpRequest = exports.VerifyEmailCodeRequest = exports.RequestEmailCodeRequest = exports.MAX_CAPTCHA_TOKEN_LENGTH = exports.MAX_FULL_NAME_LENGTH = void 0;
const zod_1 = require("zod");
const attribution_1 = require("../../common/attribution");
const user_1 = require("../../user/user");
exports.MAX_FULL_NAME_LENGTH = 100;
exports.MAX_CAPTCHA_TOKEN_LENGTH = 2048;
exports.RequestEmailCodeRequest = zod_1.z.object({
    email: user_1.EmailType,
    captchaToken: zod_1.z.string().trim().min(1).max(exports.MAX_CAPTCHA_TOKEN_LENGTH).optional(),
});
exports.VerifyEmailCodeRequest = zod_1.z.object({
    email: user_1.EmailType,
    code: zod_1.z.string().trim().min(1),
    attribution: attribution_1.AttributionParams.optional(),
});
exports.CompleteSignUpRequest = zod_1.z.object({
    fullName: zod_1.z.string().trim().min(1).max(exports.MAX_FULL_NAME_LENGTH),
    attribution: attribution_1.AttributionParams.optional(),
});
//# sourceMappingURL=passwordless-request.js.map