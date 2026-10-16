"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowRun = exports.RunTimeline = exports.TimelinePhase = exports.FailedStep = exports.FlowRetryStrategy = exports.RunEnvironment = exports.RAW_PAYLOAD_HEADER = exports.FAIL_PARENT_ON_FAILURE_HEADER = exports.PARENT_RUN_ID_HEADER = exports.FAILED_STEP_MESSAGE_MAX_LENGTH = void 0;
exports.truncateFailedStepMessage = truncateFailedStepMessage;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
const core_utils_2 = require("@activepieces/core-utils");
const execution_output_1 = require("./execution/execution-output");
const flow_execution_1 = require("./execution/flow-execution");
exports.FAILED_STEP_MESSAGE_MAX_LENGTH = 700;
function truncateFailedStepMessage(failedStep) {
    if ((0, core_utils_2.isNil)(failedStep) || (0, core_utils_2.isNil)(failedStep.message)) {
        return failedStep;
    }
    const truncated = (0, core_utils_2.truncateString)({
        value: failedStep.message,
        maxLength: exports.FAILED_STEP_MESSAGE_MAX_LENGTH,
    });
    if (truncated === failedStep.message) {
        return failedStep;
    }
    return Object.assign(Object.assign({}, failedStep), { message: truncated });
}
exports.PARENT_RUN_ID_HEADER = 'ap-parent-run-id';
exports.FAIL_PARENT_ON_FAILURE_HEADER = 'ap-fail-parent-on-failure';
exports.RAW_PAYLOAD_HEADER = 'ap-raw-payload';
var RunEnvironment;
(function (RunEnvironment) {
    RunEnvironment["PRODUCTION"] = "PRODUCTION";
    RunEnvironment["TESTING"] = "TESTING";
})(RunEnvironment || (exports.RunEnvironment = RunEnvironment = {}));
var FlowRetryStrategy;
(function (FlowRetryStrategy) {
    FlowRetryStrategy["ON_LATEST_VERSION"] = "ON_LATEST_VERSION";
    FlowRetryStrategy["FROM_FAILED_STEP"] = "FROM_FAILED_STEP";
})(FlowRetryStrategy || (exports.FlowRetryStrategy = FlowRetryStrategy = {}));
exports.FailedStep = zod_1.z.object({
    name: zod_1.z.string(),
    displayName: zod_1.z.string(),
    message: zod_1.z.string().optional(),
});
exports.TimelinePhase = zod_1.z.object({
    name: zod_1.z.enum(['QUEUE', 'PROVISION', 'BOOT', 'RUN']),
    durationMs: zod_1.z.number(),
});
// One leg per execution attempt; legs.length > 1 means the run paused and resumed.
exports.RunTimeline = zod_1.z.object({
    legs: zod_1.z.array(zod_1.z.array(exports.TimelinePhase)),
});
exports.FlowRun = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: zod_1.z.string(), flowId: zod_1.z.string(), parentRunId: zod_1.z.string().optional(), failParentOnFailure: zod_1.z.boolean(), triggeredBy: zod_1.z.string().optional(), tags: zod_1.z.array(zod_1.z.string()).optional(), flowVersionId: zod_1.z.string(), flowVersion: zod_1.z.object({
        displayName: zod_1.z.string().optional(),
    }).optional(), logsFileId: (0, core_utils_1.Nullable)(zod_1.z.string()), status: zod_1.z.nativeEnum(flow_execution_1.FlowRunStatus), startTime: zod_1.z.string().nullish(), finishTime: zod_1.z.string().nullish(), timeline: exports.RunTimeline.nullish(), environment: zod_1.z.nativeEnum(RunEnvironment), 
    // The steps data may be missing if the flow has not started yet,
    // or if the run is older than AP_EXECUTION_DATA_RETENTION_DAYS and its execution data has been purged.
    steps: (0, core_utils_1.Nullable)(zod_1.z.record(zod_1.z.string(), zod_1.z.unknown())), failedStep: exports.FailedStep.optional(), stepNameToTest: zod_1.z.string().optional(), archivedAt: (0, core_utils_1.Nullable)(zod_1.z.string()), stepsCount: zod_1.z.number().optional(), 
    // Populated only for platform admins on INTERNAL_ERROR runs; stripped from the response otherwise.
    internalError: execution_output_1.RunInternalError.optional() }));
//# sourceMappingURL=flow-run.js.map