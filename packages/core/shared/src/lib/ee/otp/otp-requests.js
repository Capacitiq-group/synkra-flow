"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOtpRequestBody = void 0;
const zod_1 = require("zod");
const otp_type_1 = require("./otp-type");
exports.CreateOtpRequestBody = zod_1.z.object({
    email: zod_1.z.string(),
    type: zod_1.z.enum([otp_type_1.OtpType.EMAIL_VERIFICATION, otp_type_1.OtpType.PASSWORD_RESET]),
});
//# sourceMappingURL=otp-requests.js.map