"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunInternalError = exports.RunInternalErrorSource = exports.ExecutionState = exports.ExecutionType = void 0;
const zod_1 = require("zod");
var ExecutionType;
(function (ExecutionType) {
    ExecutionType["BEGIN"] = "BEGIN";
    ExecutionType["RESUME"] = "RESUME";
})(ExecutionType || (exports.ExecutionType = ExecutionType = {}));
exports.ExecutionState = zod_1.z.object({
    steps: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
    tags: zod_1.z.array(zod_1.z.string()),
});
var RunInternalErrorSource;
(function (RunInternalErrorSource) {
    RunInternalErrorSource["ENGINE"] = "ENGINE";
    RunInternalErrorSource["WORKER"] = "WORKER";
})(RunInternalErrorSource || (exports.RunInternalErrorSource = RunInternalErrorSource = {}));
exports.RunInternalError = zod_1.z.object({
    source: zod_1.z.enum(RunInternalErrorSource),
    message: zod_1.z.string(),
    code: zod_1.z.string().optional(),
    occurredAt: zod_1.z.string(),
});
//# sourceMappingURL=execution-output.js.map