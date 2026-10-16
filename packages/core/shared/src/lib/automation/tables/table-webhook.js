"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWebhook = exports.TableWebhookEventType = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var TableWebhookEventType;
(function (TableWebhookEventType) {
    TableWebhookEventType["RECORD_CREATED"] = "RECORD_CREATED";
    TableWebhookEventType["RECORD_UPDATED"] = "RECORD_UPDATED";
    TableWebhookEventType["RECORD_DELETED"] = "RECORD_DELETED";
})(TableWebhookEventType || (exports.TableWebhookEventType = TableWebhookEventType = {}));
exports.TableWebhook = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: zod_1.z.string(), tableId: zod_1.z.string(), events: zod_1.z.array(zod_1.z.nativeEnum(TableWebhookEventType)), flowId: zod_1.z.string() }));
//# sourceMappingURL=table-webhook.js.map