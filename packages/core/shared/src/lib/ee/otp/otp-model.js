"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpModel = exports.OtpState = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const otp_type_1 = require("./otp-type");
var OtpState;
(function (OtpState) {
    OtpState["PENDING"] = "PENDING";
    OtpState["CONFIRMED"] = "CONFIRMED";
})(OtpState || (exports.OtpState = OtpState = {}));
exports.OtpModel = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { type: zod_1.z.nativeEnum(otp_type_1.OtpType), identityId: core_utils_1.ApId, value: zod_1.z.string(), state: zod_1.z.nativeEnum(OtpState), attempts: zod_1.z.number(), version: zod_1.z.number() }));
//# sourceMappingURL=otp-model.js.map