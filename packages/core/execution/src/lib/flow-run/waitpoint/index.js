"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNFAVOURABLE_SIGNAL_STATUSES = exports.MAX_SIGNAL_REASON_LENGTH = exports.MAX_INLINE_BARRIER_SIGNALS = exports.BarrierSummary = exports.BarrierSignalSummary = exports.CreateWaitpointResponse = exports.BarrierCreatedState = exports.CreateWaitpointRequest = exports.CreateBarrierRequest = exports.BarrierPolicy = exports.BarrierSignalStatus = exports.WaitpointVersion = void 0;
exports.shouldReleaseBarrier = shouldReleaseBarrier;
exports.barrierReleasesOnLastPendingSignal = barrierReleasesOnLastPendingSignal;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const flow_execution_1 = require("../execution/flow-execution");
function shouldReleaseBarrier({ policy, sealed, counts }) {
    if ((policy === null || policy === void 0 ? void 0 : policy.releaseOnFirstFailure) === true && exports.UNFAVOURABLE_SIGNAL_STATUSES.some((status) => countOf({ counts, status }) > 0)) {
        return true;
    }
    if (!(0, core_utils_1.isNil)(policy === null || policy === void 0 ? void 0 : policy.requiredSuccesses) && countOf({ counts, status: BarrierSignalStatus.SUCCEEDED }) >= policy.requiredSuccesses) {
        return true;
    }
    if (!sealed) {
        return false;
    }
    return countOf({ counts, status: BarrierSignalStatus.PENDING }) === 0;
}
function barrierReleasesOnLastPendingSignal({ policy, sealed }) {
    return sealed && (0, core_utils_1.isNil)(policy === null || policy === void 0 ? void 0 : policy.requiredSuccesses) && (policy === null || policy === void 0 ? void 0 : policy.releaseOnFirstFailure) !== true;
}
function countOf({ counts, status }) {
    var _a;
    return (_a = counts[status]) !== null && _a !== void 0 ? _a : 0;
}
exports.WaitpointVersion = zod_1.z.enum(['V0', 'V1']);
var BarrierSignalStatus;
(function (BarrierSignalStatus) {
    BarrierSignalStatus["PENDING"] = "PENDING";
    BarrierSignalStatus["SUCCEEDED"] = "SUCCEEDED";
    BarrierSignalStatus["FAILED"] = "FAILED";
    BarrierSignalStatus["REJECTED"] = "REJECTED";
    BarrierSignalStatus["CANCELED"] = "CANCELED";
    BarrierSignalStatus["NOT_DISPATCHED"] = "NOT_DISPATCHED";
})(BarrierSignalStatus || (exports.BarrierSignalStatus = BarrierSignalStatus = {}));
exports.BarrierPolicy = zod_1.z.object({
    requiredSuccesses: zod_1.z.number().int().positive().optional(),
    releaseOnFirstFailure: zod_1.z.boolean().optional(),
    reasonRequiredOn: zod_1.z.enum(['none', 'reject', 'both']).optional(),
});
exports.CreateBarrierRequest = zod_1.z.object({
    policy: exports.BarrierPolicy.optional(),
    signals: zod_1.z.array(zod_1.z.object({ label: zod_1.z.string().optional() })).optional(),
});
exports.CreateWaitpointRequest = zod_1.z.object({
    flowRunId: zod_1.z.string(),
    projectId: zod_1.z.string(),
    stepName: zod_1.z.string(),
    type: zod_1.z.enum(['DELAY', 'WEBHOOK', 'BARRIER']),
    version: exports.WaitpointVersion,
    resumeDateTime: zod_1.z.string().optional(),
    responseToSend: flow_execution_1.RespondResponse.optional(),
    workerHandlerId: zod_1.z.string().optional(),
    httpRequestId: zod_1.z.string().optional(),
    barrier: exports.CreateBarrierRequest.optional(),
});
exports.BarrierCreatedState = zod_1.z.object({
    signalCount: zod_1.z.number().int().nonnegative(),
    signals: zod_1.z.array(zod_1.z.object({
        label: zod_1.z.string().nullable(),
        confirmUrl: zod_1.z.string(),
    })).optional(),
    signalsTruncated: zod_1.z.boolean().optional(),
});
exports.CreateWaitpointResponse = zod_1.z.object({
    id: zod_1.z.string(),
    resumeUrl: zod_1.z.string(),
    barrier: exports.BarrierCreatedState.optional(),
});
exports.BarrierSignalSummary = zod_1.z.object({
    sequence: zod_1.z.number().int().nullable(),
    label: zod_1.z.string().nullable(),
    outcome: zod_1.z.enum(BarrierSignalStatus),
    result: zod_1.z.unknown().nullable(),
    runId: zod_1.z.string().nullable(),
});
exports.BarrierSummary = zod_1.z.object({
    total: zod_1.z.number().int().nonnegative(),
    succeeded: zod_1.z.number().int().nonnegative(),
    failed: zod_1.z.number().int().nonnegative(),
    rejected: zod_1.z.number().int().nonnegative(),
    canceled: zod_1.z.number().int().nonnegative(),
    notDispatched: zod_1.z.number().int().nonnegative(),
    stillRunning: zod_1.z.number().int().nonnegative(),
    timedOut: zod_1.z.boolean(),
    signals: zod_1.z.array(exports.BarrierSignalSummary).optional(),
    signalsTruncated: zod_1.z.boolean().optional(),
});
exports.MAX_INLINE_BARRIER_SIGNALS = 100;
exports.MAX_SIGNAL_REASON_LENGTH = 2000;
exports.UNFAVOURABLE_SIGNAL_STATUSES = [
    BarrierSignalStatus.FAILED,
    BarrierSignalStatus.REJECTED,
    BarrierSignalStatus.CANCELED,
    BarrierSignalStatus.NOT_DISPATCHED,
];
//# sourceMappingURL=index.js.map