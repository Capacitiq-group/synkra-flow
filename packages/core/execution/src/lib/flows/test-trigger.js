"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelTestTriggerRequestBody = exports.TestTriggerRequestBody = exports.TriggerTestStrategy = void 0;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
var TriggerTestStrategy;
(function (TriggerTestStrategy) {
    TriggerTestStrategy["SIMULATION"] = "SIMULATION";
    TriggerTestStrategy["TEST_FUNCTION"] = "TEST_FUNCTION";
})(TriggerTestStrategy || (exports.TriggerTestStrategy = TriggerTestStrategy = {}));
exports.TestTriggerRequestBody = zod_1.z.object({
    projectId: core_utils_1.ApId,
    flowId: core_utils_1.ApId,
    flowVersionId: core_utils_1.ApId,
    testStrategy: zod_1.z.nativeEnum(TriggerTestStrategy),
});
exports.CancelTestTriggerRequestBody = zod_1.z.object({
    projectId: core_utils_1.ApId,
    flowId: core_utils_1.ApId,
});
//# sourceMappingURL=test-trigger.js.map