"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithMetaInformation = exports.UserStatus = exports.PlatformRole = exports.File = exports.FileLocation = exports.FileCompression = exports.FileType = exports.TriggerSource = exports.ScheduleOptions = exports.TriggerSourceScheduleType = exports.PiecePackage = exports.PublicPiecePackage = exports.CustomNpmPiecePackage = exports.OfficialPiecePackage = exports.PrivatePiecePackage = exports.VersionType = exports.ExactVersionType = exports.EXACT_VERSION_REGEX = exports.EXACT_VERSION_PATTERN = exports.STORE_KEY_MAX_LENGTH = void 0;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const z = tslib_1.__importStar(require("zod/mini"));
const piece_1 = require("./piece");
const trigger_1 = require("./trigger");
// Contracts that the execution layer (@activepieces/core-execution) and the engine
// need from @activepieces/shared. Hosted here (the piece-types contract package) so
// the engine can name them without importing shared. See SRE-163.
// ── store-entry ────────────────────────────────────────────────────────────
exports.STORE_KEY_MAX_LENGTH = 128;
// ── piece version patterns ─────────────────────────────────────────────────
exports.EXACT_VERSION_PATTERN = '^[0-9]+\\.[0-9]+\\.[0-9]+$';
exports.EXACT_VERSION_REGEX = new RegExp(exports.EXACT_VERSION_PATTERN);
const VERSION_PATTERN = '^([~^])?[0-9]+\\.[0-9]+\\.[0-9]+$';
exports.ExactVersionType = z.string().check(z.regex(new RegExp(exports.EXACT_VERSION_PATTERN)));
exports.VersionType = z.string().check(z.regex(new RegExp(VERSION_PATTERN)));
// ── piece package ──────────────────────────────────────────────────────────
exports.PrivatePiecePackage = z.object({
    packageType: z.literal(piece_1.PackageType.ARCHIVE),
    pieceType: z.enum(piece_1.PieceType),
    pieceName: z.string(),
    pieceVersion: z.string(),
    archiveId: z.string(),
    platformId: z.string(),
});
exports.OfficialPiecePackage = z.object({
    packageType: z.literal(piece_1.PackageType.REGISTRY),
    pieceType: z.literal(piece_1.PieceType.OFFICIAL),
    pieceName: z.string(),
    pieceVersion: z.string(),
});
exports.CustomNpmPiecePackage = z.object({
    packageType: z.literal(piece_1.PackageType.REGISTRY),
    pieceType: z.literal(piece_1.PieceType.CUSTOM),
    pieceName: z.string(),
    pieceVersion: z.string(),
    platformId: z.string(),
});
exports.PublicPiecePackage = z.union([exports.OfficialPiecePackage, exports.CustomNpmPiecePackage]);
exports.PiecePackage = z.union([exports.PrivatePiecePackage, exports.OfficialPiecePackage, exports.CustomNpmPiecePackage]);
// ── trigger source / schedule ──────────────────────────────────────────────
var TriggerSourceScheduleType;
(function (TriggerSourceScheduleType) {
    TriggerSourceScheduleType["CRON_EXPRESSION"] = "CRON_EXPRESSION";
    TriggerSourceScheduleType["INTERVAL"] = "INTERVAL";
})(TriggerSourceScheduleType || (exports.TriggerSourceScheduleType = TriggerSourceScheduleType = {}));
exports.ScheduleOptions = z.discriminatedUnion('type', [
    z.object({
        type: z.literal(TriggerSourceScheduleType.CRON_EXPRESSION),
        cronExpression: z.string(),
        timezone: z.string(),
    }),
    z.object({
        type: z.literal(TriggerSourceScheduleType.INTERVAL),
        intervalMs: z.int().check(z.minimum(60000)),
    }),
]);
exports.TriggerSource = z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { type: z.enum(trigger_1.TriggerStrategy), projectId: z.string(), flowId: z.string(), triggerName: z.string(), schedule: (0, core_utils_1.Nullable)(exports.ScheduleOptions), flowVersionId: z.string(), pieceName: z.string(), pieceVersion: z.string(), deleted: (0, core_utils_1.Nullable)(z.string()), simulate: z.boolean() }));
var FileType;
(function (FileType) {
    FileType["UNKNOWN"] = "UNKNOWN";
    FileType["FLOW_RUN_LOG"] = "FLOW_RUN_LOG";
    FileType["FLOW_RUN_LOG_SLICE"] = "FLOW_RUN_LOG_SLICE";
    FileType["PACKAGE_ARCHIVE"] = "PACKAGE_ARCHIVE";
    FileType["FLOW_STEP_FILE"] = "FLOW_STEP_FILE";
    FileType["SAMPLE_DATA"] = "SAMPLE_DATA";
    FileType["TRIGGER_PAYLOAD"] = "TRIGGER_PAYLOAD";
    FileType["SAMPLE_DATA_INPUT"] = "SAMPLE_DATA_INPUT";
    FileType["TRIGGER_EVENT_FILE"] = "TRIGGER_EVENT_FILE";
    FileType["PROJECT_RELEASE"] = "PROJECT_RELEASE";
    FileType["FLOW_VERSION_BACKUP"] = "FLOW_VERSION_BACKUP";
    FileType["PLATFORM_ASSET"] = "PLATFORM_ASSET";
    FileType["USER_PROFILE_PICTURE"] = "USER_PROFILE_PICTURE";
    FileType["WEBHOOK_PAYLOAD"] = "WEBHOOK_PAYLOAD";
    FileType["MCP_CALL_PAYLOAD"] = "MCP_CALL_PAYLOAD";
    FileType["KNOWLEDGE_BASE"] = "KNOWLEDGE_BASE";
    FileType["FLOW_BUNDLE"] = "FLOW_BUNDLE";
    FileType["PREWARM_SCOPE"] = "PREWARM_SCOPE";
})(FileType || (exports.FileType = FileType = {}));
var FileCompression;
(function (FileCompression) {
    FileCompression["NONE"] = "NONE";
    FileCompression["ZSTD"] = "ZSTD";
})(FileCompression || (exports.FileCompression = FileCompression = {}));
var FileLocation;
(function (FileLocation) {
    FileLocation["S3"] = "S3";
    FileLocation["DB"] = "DB";
})(FileLocation || (exports.FileLocation = FileLocation = {}));
exports.File = z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: (0, core_utils_1.Nullable)(z.string()), platformId: (0, core_utils_1.Nullable)(z.string()), type: z.enum(FileType), compression: z.enum(FileCompression), data: z.optional(z.unknown()), location: z.enum(FileLocation), size: (0, core_utils_1.Nullable)(z.number()), fileName: (0, core_utils_1.Nullable)(z.string()), s3Key: (0, core_utils_1.Nullable)(z.string()), metadata: (0, core_utils_1.Nullable)(z.record(z.string(), z.string())) }));
// ── user (meta) ────────────────────────────────────────────────────────────
var PlatformRole;
(function (PlatformRole) {
    PlatformRole["ADMIN"] = "ADMIN";
    PlatformRole["MEMBER"] = "MEMBER";
    PlatformRole["OPERATOR"] = "OPERATOR";
})(PlatformRole || (exports.PlatformRole = PlatformRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
exports.UserWithMetaInformation = z.object({
    id: z.string(),
    email: z.string(),
    firstName: z.string(),
    status: z.enum(UserStatus),
    externalId: (0, core_utils_1.Nullable)(z.string()),
    platformId: (0, core_utils_1.Nullable)(z.string()),
    platformRole: z.enum(PlatformRole),
    lastName: z.string(),
    created: core_utils_1.DateOrString,
    updated: core_utils_1.DateOrString,
    lastActiveDate: (0, core_utils_1.Nullable)(core_utils_1.DateOrString),
    imageUrl: (0, core_utils_1.Nullable)(z.string()),
});
//# sourceMappingURL=execution-contracts.js.map