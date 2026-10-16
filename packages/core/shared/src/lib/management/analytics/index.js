"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsReportRequest = exports.PlatformAnalyticsReport = exports.AnalyticsFlowReport = exports.AnalyticsFlowReportItem = exports.AnalyticsRunsUsage = exports.AnalyticsRunsUsageItem = exports.AnalyticsTimePeriod = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const user_1 = require("../../core/user");
var AnalyticsTimePeriod;
(function (AnalyticsTimePeriod) {
    AnalyticsTimePeriod["LAST_WEEK"] = "last-week";
    AnalyticsTimePeriod["LAST_MONTH"] = "last-month";
    AnalyticsTimePeriod["LAST_THREE_MONTHS"] = "last-three-months";
    AnalyticsTimePeriod["LAST_SIX_MONTHS"] = "last-six-months";
    AnalyticsTimePeriod["LAST_YEAR"] = "last-year";
})(AnalyticsTimePeriod || (exports.AnalyticsTimePeriod = AnalyticsTimePeriod = {}));
exports.AnalyticsRunsUsageItem = zod_1.z.object({
    day: zod_1.z.string(),
    flowId: zod_1.z.string(),
    runs: zod_1.z.number(),
});
exports.AnalyticsRunsUsage = zod_1.z.array(exports.AnalyticsRunsUsageItem);
exports.AnalyticsFlowReportItem = zod_1.z.object({
    flowId: zod_1.z.string(),
    flowName: zod_1.z.string(),
    projectId: zod_1.z.string(),
    projectName: zod_1.z.string(),
    status: zod_1.z.nativeEnum(core_execution_1.FlowStatus),
    timeSavedPerRun: (0, core_utils_1.Nullable)(zod_1.z.number()),
    ownerId: (0, core_utils_1.Nullable)(zod_1.z.string()),
});
exports.AnalyticsFlowReport = zod_1.z.array(exports.AnalyticsFlowReportItem);
exports.PlatformAnalyticsReport = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { cachedAt: core_utils_1.DateOrString, runs: exports.AnalyticsRunsUsage, outdated: zod_1.z.boolean(), flows: exports.AnalyticsFlowReport, platformId: zod_1.z.string(), users: zod_1.z.array(user_1.UserWithMetaInformation) }));
exports.AnalyticsReportRequest = zod_1.z.object({
    timePeriod: zod_1.z.nativeEnum(AnalyticsTimePeriod).optional(),
});
//# sourceMappingURL=index.js.map