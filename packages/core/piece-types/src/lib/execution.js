"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseMetadata = exports.WebhookPauseMetadata = exports.DelayPauseMetadata = exports.RespondResponse = exports.StreamStepProgress = exports.PauseType = exports.ExecutionType = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
var ExecutionType;
(function (ExecutionType) {
    ExecutionType["BEGIN"] = "BEGIN";
    ExecutionType["RESUME"] = "RESUME";
})(ExecutionType || (exports.ExecutionType = ExecutionType = {}));
var PauseType;
(function (PauseType) {
    PauseType["DELAY"] = "DELAY";
    PauseType["WEBHOOK"] = "WEBHOOK";
})(PauseType || (exports.PauseType = PauseType = {}));
var StreamStepProgress;
(function (StreamStepProgress) {
    StreamStepProgress["WEBSOCKET"] = "WEBSOCKET";
    StreamStepProgress["NONE"] = "NONE";
})(StreamStepProgress || (exports.StreamStepProgress = StreamStepProgress = {}));
exports.RespondResponse = z.object({
    status: z.optional(z.number()),
    body: z.optional(z.unknown()),
    headers: z.optional(z.record(z.string(), z.string())),
});
exports.DelayPauseMetadata = z.object({
    type: z.literal(PauseType.DELAY),
    resumeDateTime: z.string(),
    requestIdToReply: z.optional(z.string()),
    handlerId: z.optional(z.string()),
    streamStepProgress: z.optional(z.enum(StreamStepProgress)),
});
exports.WebhookPauseMetadata = z.object({
    type: z.literal(PauseType.WEBHOOK),
    requestId: z.string(),
    requestIdToReply: z.optional(z.string()),
    response: exports.RespondResponse,
    handlerId: z.optional(z.string()),
    streamStepProgress: z.optional(z.enum(StreamStepProgress)),
});
exports.PauseMetadata = z.union([exports.DelayPauseMetadata, exports.WebhookPauseMetadata]);
//# sourceMappingURL=execution.js.map