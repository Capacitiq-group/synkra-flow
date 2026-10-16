"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = exports.AlertChannel = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var AlertChannel;
(function (AlertChannel) {
    AlertChannel["EMAIL"] = "EMAIL";
})(AlertChannel || (exports.AlertChannel = AlertChannel = {}));
exports.Alert = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: core_utils_1.ApId, channel: zod_1.z.nativeEnum(AlertChannel), receiver: zod_1.z.string() }));
//# sourceMappingURL=alerts-dto.js.map