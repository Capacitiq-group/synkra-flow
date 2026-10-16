"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDiagnosticsResponse = exports.AppInstance = exports.DiagnosticsWorker = exports.DeploymentConfig = exports.InfraCheck = exports.GetSystemHealthChecksResponse = exports.ReleaseHealth = void 0;
const tslib_1 = require("tslib");
const zod_1 = require("zod");
tslib_1.__exportStar(require("./health-metrics-request"), exports);
exports.ReleaseHealth = zod_1.z.object({
    current: zod_1.z.string(),
    workers: zod_1.z.object({
        total: zod_1.z.number(),
        versionMismatched: zod_1.z.number(),
        mismatchedVersions: zod_1.z.array(zod_1.z.string()),
    }),
});
exports.GetSystemHealthChecksResponse = zod_1.z.object({
    latestVersion: zod_1.z.string(),
    appCpu: zod_1.z.boolean(),
    appRam: zod_1.z.boolean(),
    disk: zod_1.z.boolean(),
    workerCpu: zod_1.z.boolean().nullable(),
    workerRam: zod_1.z.boolean().nullable(),
    database: zod_1.z.boolean(),
    release: exports.ReleaseHealth,
});
// Server-measured infra round-trip, so a cross-region benchmark client gets the authoritative
// in-region latency that its own client-side timing cannot observe.
exports.InfraCheck = zod_1.z.object({
    ok: zod_1.z.boolean(),
    latencyMs: zod_1.z.number().nullable(),
    detail: zod_1.z.string().optional(),
});
exports.DeploymentConfig = zod_1.z.object({
    executionMode: zod_1.z.string().nullable(),
    fileStorageLocation: zod_1.z.string().nullable(),
    sandboxMemoryLimitKb: zod_1.z.number().nullable(),
    s3SignedUrls: zod_1.z.boolean().nullable(),
    s3Endpoint: zod_1.z.string().nullable(),
    s3Region: zod_1.z.string().nullable(),
    projectRateLimiterEnabled: zod_1.z.boolean().nullable(),
    defaultConcurrentJobsLimit: zod_1.z.number().nullable(),
});
exports.DiagnosticsWorker = zod_1.z.object({
    workerId: zod_1.z.string(),
    cpuCores: zod_1.z.number(),
    cpuUsagePercentage: zod_1.z.number(),
    ramUsagePercentage: zod_1.z.number(),
    serverPingMs: zod_1.z.number().nullable(),
    status: zod_1.z.string(),
});
// One live app replica, self-registered into the appMachines cache on its metrics tick. Unlike a
// worker (which registers over its healthcheck socket), an app has no inbound connection, so it
// writes its own row; `updated` drives offline detection since an app dies without a disconnect.
exports.AppInstance = zod_1.z.object({
    hostname: zod_1.z.string(),
    version: zod_1.z.string(),
    cpuCores: zod_1.z.number(),
    cpuUsagePercentage: zod_1.z.number(),
    ramTotalBytes: zod_1.z.number(),
    ramUsagePercentage: zod_1.z.number(),
    diskPercentage: zod_1.z.number(),
    diskTotalBytes: zod_1.z.number().optional(),
    eventLoopDelayMs: zod_1.z.number(),
    cpuStealPercentage: zod_1.z.number().optional(),
    cpuThrottledPercentage: zod_1.z.number().optional(),
    updated: zod_1.z.string(),
});
exports.GetDiagnosticsResponse = zod_1.z.object({
    database: exports.InfraCheck,
    redis: exports.InfraCheck,
    storage: exports.InfraCheck,
    config: exports.DeploymentConfig,
    apps: zod_1.z.object({
        count: zod_1.z.number(),
        instances: zod_1.z.array(exports.AppInstance),
    }),
    workers: zod_1.z.object({
        count: zod_1.z.number(),
        machines: zod_1.z.array(exports.DiagnosticsWorker),
    }),
});
//# sourceMappingURL=index.js.map