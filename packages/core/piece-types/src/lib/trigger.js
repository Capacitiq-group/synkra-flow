"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATION_PROPERTY_NAME = exports.TriggerTestStrategy = exports.WebhookHandshakeConfiguration = exports.WebhookHandshakeStrategy = exports.TriggerStrategy = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
var TriggerStrategy;
(function (TriggerStrategy) {
    TriggerStrategy["POLLING"] = "POLLING";
    TriggerStrategy["WEBHOOK"] = "WEBHOOK";
    TriggerStrategy["APP_WEBHOOK"] = "APP_WEBHOOK";
    TriggerStrategy["MANUAL"] = "MANUAL";
})(TriggerStrategy || (exports.TriggerStrategy = TriggerStrategy = {}));
var WebhookHandshakeStrategy;
(function (WebhookHandshakeStrategy) {
    WebhookHandshakeStrategy["NONE"] = "NONE";
    WebhookHandshakeStrategy["HEADER_PRESENT"] = "HEADER_PRESENT";
    WebhookHandshakeStrategy["QUERY_PRESENT"] = "QUERY_PRESENT";
    WebhookHandshakeStrategy["BODY_PARAM_PRESENT"] = "BODY_PARAM_PRESENT";
    WebhookHandshakeStrategy["HEAD_REQUEST"] = "HEAD_REQUEST";
})(WebhookHandshakeStrategy || (exports.WebhookHandshakeStrategy = WebhookHandshakeStrategy = {}));
exports.WebhookHandshakeConfiguration = z.object({
    strategy: z.enum(WebhookHandshakeStrategy),
    paramName: z.optional(z.string()),
});
var TriggerTestStrategy;
(function (TriggerTestStrategy) {
    TriggerTestStrategy["SIMULATION"] = "SIMULATION";
    TriggerTestStrategy["TEST_FUNCTION"] = "TEST_FUNCTION";
})(TriggerTestStrategy || (exports.TriggerTestStrategy = TriggerTestStrategy = {}));
exports.AUTHENTICATION_PROPERTY_NAME = 'auth';
//# sourceMappingURL=trigger.js.map