"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerSettingsResponse = exports.WorkerMachineHealthcheckRequest = exports.ConsumeJobResponse = exports.ConsumeJobRequest = exports.WorkerMachineWithStatus = exports.WorkerMachine = exports.MachineInformation = exports.WorkerProps = exports.SandboxInformation = exports.NetworkMode = exports.WorkerGroupScope = exports.WorkerMachineType = exports.WorkerMachineStatus = void 0;
const zod_1 = require("zod");
const core_utils_1 = require("@activepieces/core-utils");
const engine_operation_1 = require("../engine/engine-operation");
const job_data_1 = require("./job-data");
var WorkerMachineStatus;
(function (WorkerMachineStatus) {
    WorkerMachineStatus["ONLINE"] = "ONLINE";
    WorkerMachineStatus["OFFLINE"] = "OFFLINE";
})(WorkerMachineStatus || (exports.WorkerMachineStatus = WorkerMachineStatus = {}));
var WorkerMachineType;
(function (WorkerMachineType) {
    WorkerMachineType["SHARED"] = "SHARED";
    WorkerMachineType["DEDICATED"] = "DEDICATED";
})(WorkerMachineType || (exports.WorkerMachineType = WorkerMachineType = {}));
var WorkerGroupScope;
(function (WorkerGroupScope) {
    WorkerGroupScope["PLATFORM"] = "platform";
    WorkerGroupScope["PROJECT"] = "project";
})(WorkerGroupScope || (exports.WorkerGroupScope = WorkerGroupScope = {}));
var NetworkMode;
(function (NetworkMode) {
    NetworkMode["UNRESTRICTED"] = "UNRESTRICTED";
    NetworkMode["STRICT"] = "STRICT";
})(NetworkMode || (exports.NetworkMode = NetworkMode = {}));
exports.SandboxInformation = zod_1.z.object({
    sandboxId: zod_1.z.string(),
    boxId: zod_1.z.number(),
    busy: zod_1.z.boolean(),
    memoryUsageBytes: zod_1.z.number(),
});
exports.WorkerProps = zod_1.z.object({
    EXECUTION_MODE: zod_1.z.string().optional(),
    WORKER_CONCURRENCY: zod_1.z.string().optional(),
    SANDBOX_MEMORY_LIMIT: zod_1.z.string().optional(),
    REUSE_SANDBOX: zod_1.z.string().optional(),
    version: zod_1.z.string().optional(),
});
exports.MachineInformation = zod_1.z.object({
    cpuUsagePercentage: zod_1.z.number(),
    diskInfo: zod_1.z.object({
        total: zod_1.z.number(),
        free: zod_1.z.number(),
        used: zod_1.z.number(),
        percentage: zod_1.z.number(),
    }),
    workerId: zod_1.z.string(),
    workerProps: exports.WorkerProps,
    ramUsagePercentage: zod_1.z.number(),
    totalAvailableRamInBytes: zod_1.z.number(),
    totalCpuCores: zod_1.z.number(),
    ip: zod_1.z.string(),
    serverPingMs: zod_1.z.number().optional(),
    sandboxes: zod_1.z.array(exports.SandboxInformation).default([]),
});
exports.WorkerMachine = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { information: exports.MachineInformation }));
exports.WorkerMachineWithStatus = exports.WorkerMachine.extend({
    status: zod_1.z.nativeEnum(WorkerMachineStatus),
    type: zod_1.z.nativeEnum(WorkerMachineType),
    workerGroupId: zod_1.z.string().optional(),
    workerGroupScope: zod_1.z.nativeEnum(WorkerGroupScope).optional(),
});
exports.ConsumeJobRequest = zod_1.z.object({
    jobId: zod_1.z.string(),
    jobData: job_data_1.JobData,
    attempsStarted: zod_1.z.number(),
    lastAttempt: zod_1.z.boolean().optional(),
    engineToken: zod_1.z.string(),
    token: zod_1.z.string(),
    queueName: zod_1.z.string(),
});
exports.ConsumeJobResponse = zod_1.z.object({
    status: zod_1.z.nativeEnum(engine_operation_1.EngineResponseStatus),
    errorMessage: zod_1.z.string().optional(),
    logs: zod_1.z.string().optional(),
    response: zod_1.z.unknown().optional(),
});
exports.WorkerMachineHealthcheckRequest = exports.MachineInformation;
exports.WorkerSettingsResponse = zod_1.z.object({
    PUBLIC_URL: zod_1.z.string(),
    TRIGGER_TIMEOUT_SECONDS: zod_1.z.number(),
    TRIGGER_HOOKS_TIMEOUT_SECONDS: zod_1.z.number(),
    PAUSED_FLOW_TIMEOUT_DAYS: zod_1.z.number(),
    EXECUTION_MODE: zod_1.z.string(),
    FLOW_TIMEOUT_SECONDS: zod_1.z.number(),
    LOG_LEVEL: zod_1.z.string(),
    LOG_PRETTY: zod_1.z.string(),
    ENVIRONMENT: zod_1.z.string(),
    APP_WEBHOOK_SECRETS: zod_1.z.string(),
    MAX_FLOW_RUN_LOG_SIZE_MB: zod_1.z.number(),
    FLOW_RUN_LOG_INPUT_TRUNCATE_THRESHOLD_KB: zod_1.z.number().optional(),
    FLOW_RUN_LOG_SLICE_THRESHOLD_KB: zod_1.z.number().optional(),
    MAX_FILE_SIZE_MB: zod_1.z.number(),
    SANDBOX_MEMORY_LIMIT: zod_1.z.string(),
    SANDBOX_PROPAGATED_ENV_VARS: zod_1.z.array(zod_1.z.string()),
    DEV_PIECES: zod_1.z.array(zod_1.z.string()),
    SENTRY_DSN: zod_1.z.string().optional(),
    LOKI_PASSWORD: zod_1.z.string().optional(),
    LOKI_URL: zod_1.z.string().optional(),
    LOKI_USERNAME: zod_1.z.string().optional(),
    BETTERSTACK_HOST: zod_1.z.string().optional(),
    BETTERSTACK_TOKEN: zod_1.z.string().optional(),
    HYPERDX_TOKEN: zod_1.z.string().optional(),
    FILE_STORAGE_LOCATION: zod_1.z.string(),
    S3_USE_SIGNED_URLS: zod_1.z.string(),
    EVENT_DESTINATION_TIMEOUT_SECONDS: zod_1.z.number(),
    WORKER_GROUP_ID: zod_1.z.string().optional(),
    EDITION: zod_1.z.string(),
    NETWORK_MODE: zod_1.z.enum(NetworkMode),
    SSRF_ALLOW_LIST: zod_1.z.array(zod_1.z.string()),
    ENFORCE_CONNECTION_PIECE_BINDING: zod_1.z.boolean(),
    PAGE_ONCALL_WEBHOOK: zod_1.z.string().optional(),
    APP_VERSION: zod_1.z.string().optional(),
    PROJECT_WORKER: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=index.js.map