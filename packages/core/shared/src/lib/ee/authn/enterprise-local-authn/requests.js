"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpAndAcceptRequestBody = exports.ResetPasswordRequestBody = exports.VerifyEmailRequestBody = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const sign_up_request_1 = require("../../../core/authentication/dto/sign-up-request");
exports.VerifyEmailRequestBody = zod_1.z.object({
    identityId: core_utils_1.ApId,
    otp: zod_1.z.string(),
});
exports.ResetPasswordRequestBody = zod_1.z.object({
    identityId: core_utils_1.ApId,
    otp: zod_1.z.string(),
    newPassword: zod_1.z.string(),
});
exports.SignUpAndAcceptRequestBody = sign_up_request_1.SignUpRequest.omit({ email: true }).extend({
    invitationToken: zod_1.z.string(),
});
//# sourceMappingURL=requests.js.map