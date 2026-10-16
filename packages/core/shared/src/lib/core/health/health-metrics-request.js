"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformMetricsHealthHistory = exports.PlatformMetricsHealthDay = exports.PlatformMetricsLive = exports.StuckJob = exports.PlatformMetricsReport = exports.InternalErrorImpactItem = exports.PlatformMetricsStatusPoint = exports.PlatformMetricsSummary = exports.PlatformMetricsReportRequest = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.PlatformMetricsReportRequest = zod_1.z.object({
    createdAfter: zod_1.z.string(),
    createdBefore: zod_1.z.string(),
});
exports.PlatformMetricsSummary = zod_1.z.object({
    completed: zod_1.z.number(),
    successRate: zod_1.z.number(),
    previousCompleted: zod_1.z.number(),
    previousSuccessRate: zod_1.z.number(),
});
exports.PlatformMetricsStatusPoint = zod_1.z.object({
    day: zod_1.z.string(),
    status: zod_1.z.enum(core_execution_1.FlowRunStatus),
    count: zod_1.z.number(),
});
exports.InternalErrorImpactItem = zod_1.z.object({
    projectId: core_utils_1.ApId,
    projectName: zod_1.z.string(),
    flowId: core_utils_1.ApId,
    flowName: zod_1.z.string(),
    count: zod_1.z.number(),
});
exports.PlatformMetricsReport = zod_1.z.object({
    summary: exports.PlatformMetricsSummary,
    statusTimeseries: zod_1.z.array(exports.PlatformMetricsStatusPoint),
    internalErrors: zod_1.z.array(exports.InternalErrorImpactItem),
    nextRefreshAt: zod_1.z.string(),
});
exports.StuckJob = zod_1.z.object({
    flowRunId: core_utils_1.ApId,
    flowId: core_utils_1.ApId,
    flowName: zod_1.z.string(),
    projectId: core_utils_1.ApId,
    projectName: zod_1.z.string(),
    status: zod_1.z.enum(core_execution_1.FlowRunStatus),
});
exports.PlatformMetricsLive = zod_1.z.object({
    running: zod_1.z.number(),
    queued: zod_1.z.number(),
    stuckJobs: zod_1.z.array(exports.StuckJob),
});
exports.PlatformMetricsHealthDay = zod_1.z.object({
    day: zod_1.z.string(),
    internalErrors: zod_1.z.number(),
    affectedFlows: zod_1.z.number(),
    stuckJobs: zod_1.z.number(),
});
exports.PlatformMetricsHealthHistory = zod_1.z.object({
    days: zod_1.z.array(exports.PlatformMetricsHealthDay),
});
//# sourceMappingURL=health-metrics-request.js.map