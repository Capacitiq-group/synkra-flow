"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseAiRouteResponse = exports.StartAiRouteResponse = exports.ChooseAiRouteRequest = exports.AI_ROUTER_MAX_STATE_LENGTH = exports.GetFlowVersionForWorkerRequest = exports.SendFlowResponseRequest = exports.FileReadToken = exports.FileTransportQueryParams = exports.UpdateStepProgressRequest = exports.UploadRunLogsRequest = void 0;
const zod_1 = require("zod");
const execution_output_1 = require("../flow-run/execution/execution-output");
const flow_execution_1 = require("../flow-run/execution/flow-execution");
const flow_run_1 = require("../flow-run/flow-run");
const action_1 = require("../flows/actions/action");
const sample_data_1 = require("../flows/sample-data");
const engine_operation_1 = require("./engine-operation");
exports.UploadRunLogsRequest = zod_1.z.object({
    runId: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    // Optional so the worker can post a timings-only update (provision/boot/run) after a successful
    // execute without re-asserting the terminal status the engine already reported.
    status: zod_1.z.nativeEnum(flow_execution_1.FlowRunStatus).optional(),
    projectId: zod_1.z.string(),
    streamStepProgress: zod_1.z.nativeEnum(engine_operation_1.StreamStepProgress).optional(),
    logsFileId: zod_1.z.string().optional(),
    stepNameToTest: zod_1.z.string().optional(),
    failedStep: flow_run_1.FailedStep.optional(),
    startTime: zod_1.z.string().optional(),
    finishTime: zod_1.z.string().optional(),
    stepResponse: sample_data_1.StepRunResponse.optional(),
    stepsCount: zod_1.z.number().optional(),
    internalError: execution_output_1.RunInternalError.optional(),
    provisionMs: zod_1.z.number().optional(),
    bootMs: zod_1.z.number().optional(),
    runMs: zod_1.z.number().optional(),
    workerHandlerId: zod_1.z.string().optional(),
    httpRequestId: zod_1.z.string().optional(),
    willRetry: zod_1.z.boolean().optional(),
});
exports.UpdateStepProgressRequest = zod_1.z.object({
    projectId: zod_1.z.string(),
    runId: zod_1.z.string(),
    output: zod_1.z.unknown(),
    sequence: zod_1.z.number().optional(),
});
exports.FileTransportQueryParams = zod_1.z.object({
    token: zod_1.z.string(),
});
exports.FileReadToken = zod_1.z.object({
    fileId: zod_1.z.string(),
    fileType: zod_1.z.string().optional(),
});
exports.SendFlowResponseRequest = zod_1.z.object({
    workerHandlerId: zod_1.z.string(),
    httpRequestId: zod_1.z.string(),
    runResponse: zod_1.z.object({
        // The return_response piece stores status/headers as dynamic props that are not always coerced
        // (e.g. a literal "200" or a {{...}} that resolves to a number). Coerce here so a valid user
        // response succeeds instead of 400ing — which the engine would mis-report as an INTERNAL_ERROR.
        status: zod_1.z.coerce.number(),
        body: zod_1.z.any(),
        headers: zod_1.z.record(zod_1.z.string(), zod_1.z.coerce.string()),
    }),
});
exports.GetFlowVersionForWorkerRequest = zod_1.z.object({
    versionId: zod_1.z.string(),
});
exports.AI_ROUTER_MAX_STATE_LENGTH = 20000;
exports.ChooseAiRouteRequest = zod_1.z.object({
    state: zod_1.z.string().max(exports.AI_ROUTER_MAX_STATE_LENGTH),
    question: zod_1.z.string(),
    options: zod_1.z.record(zod_1.z.string(), zod_1.z.string()),
    matchMode: zod_1.z.enum(action_1.AiRouterMatchMode),
    flowId: zod_1.z.string(),
    flowRunId: zod_1.z.string(),
    waitpointId: zod_1.z.string().optional(),
});
exports.StartAiRouteResponse = zod_1.z.object({
    requestId: zod_1.z.string(),
});
exports.ChooseAiRouteResponse = zod_1.z.object({
    matched: zod_1.z.array(zod_1.z.string()),
    probabilities: zod_1.z.record(zod_1.z.string(), zod_1.z.number()).optional(),
});
//# sourceMappingURL=requests.js.map