"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.FileLocation = exports.isZstdCompressed = exports.FileCompression = exports.FileType = void 0;
exports.maxSocketHttpBufferSizeBytes = maxSocketHttpBufferSizeBytes;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
var FileType;
(function (FileType) {
    /**
     * Default; not written by any caller. Lets consumers fall back when a file's
     * type isn't recognized.
     */
    FileType["UNKNOWN"] = "UNKNOWN";
    /**
     * Compressed (ZSTD) execution-log manifest for a single flow run.
     * Expires on the file-cleanup schedule.
     */
    FileType["FLOW_RUN_LOG"] = "FLOW_RUN_LOG";
    /**
     * One step output (or loop-iteration bundle) sliced out of a flow-run-log manifest
     * when it exceeds AP_FLOW_RUN_LOG_SLICE_THRESHOLD_KB.
     */
    FileType["FLOW_RUN_LOG_SLICE"] = "FLOW_RUN_LOG_SLICE";
    /**
     * Tarball of a custom piece's source, downloaded and extracted by the worker
     * to load piece code. Stored in DB, kept indefinitely.
     */
    FileType["PACKAGE_ARCHIVE"] = "PACKAGE_ARCHIVE";
    /**
     * File produced or referenced by a flow step at runtime (e.g. a step's
     * attachment output). Expires on the file-cleanup schedule.
     */
    FileType["FLOW_STEP_FILE"] = "FLOW_STEP_FILE";
    /**
     * Saved sample output for a step, captured during test runs and reused in
     * the builder. Kept indefinitely.
     */
    FileType["SAMPLE_DATA"] = "SAMPLE_DATA";
    /*
    @deprecated activepieces no longer stores trigger payload
    */
    FileType["TRIGGER_PAYLOAD"] = "TRIGGER_PAYLOAD";
    /**
     * Saved sample input for a step, paired with SAMPLE_DATA so a step can be
     * re-tested in isolation. Kept indefinitely.
     */
    FileType["SAMPLE_DATA_INPUT"] = "SAMPLE_DATA_INPUT";
    /**
     * Serialized payload of a captured trigger event used to populate the
     * trigger sample-data UI. Expires on the file-cleanup schedule.
     */
    FileType["TRIGGER_EVENT_FILE"] = "TRIGGER_EVENT_FILE";
    /**
     * Snapshot of a project's flows/connections/tables for release versioning
     * and rollback. Kept indefinitely.
     */
    FileType["PROJECT_RELEASE"] = "PROJECT_RELEASE";
    /**
     * Snapshot of a single flow version's schema for migration/rollback.
     * Kept indefinitely.
     */
    FileType["FLOW_VERSION_BACKUP"] = "FLOW_VERSION_BACKUP";
    /**
     * Platform public assets, like logos, should be stored in the database.
     */
    FileType["PLATFORM_ASSET"] = "PLATFORM_ASSET";
    /**
     * User profile pictures, should be stored in the database.
     */
    FileType["USER_PROFILE_PICTURE"] = "USER_PROFILE_PICTURE";
    /**
     * Large webhook payloads offloaded from Redis to file storage.
     */
    FileType["WEBHOOK_PAYLOAD"] = "WEBHOOK_PAYLOAD";
    /**
     * Input and output of a single recorded MCP tool call, backing the Activity
     * tab's detail sheet. Expires on the file-cleanup schedule.
     */
    FileType["MCP_CALL_PAYLOAD"] = "MCP_CALL_PAYLOAD";
    /**
     * Files uploaded for knowledge base ingestion.
     */
    FileType["KNOWLEDGE_BASE"] = "KNOWLEDGE_BASE";
    /**
     * Prebuilt per-locked-flow-version run artifact (flow definition + resolved
     * piece manifest + compiled code steps), addressed by flowVersionId. Lets a
     * worker provision a flow by download + extract instead of fetch + compile.
     * Stored at the configured location (S3 when available). Kept indefinitely.
     */
    FileType["FLOW_BUNDLE"] = "FLOW_BUNDLE";
    /**
     * Platform-wide prewarm scope (distinct piece packages + code-step sources for every
     * enabled flow), addressed by a deterministic per-scope id and overwritten on each
     * recompute. Downloaded by workers instead of shipping the scope over the RPC socket.
     * Stored at the configured location (S3 when available).
     */
    FileType["PREWARM_SCOPE"] = "PREWARM_SCOPE";
})(FileType || (exports.FileType = FileType = {}));
var FileCompression;
(function (FileCompression) {
    FileCompression["NONE"] = "NONE";
    FileCompression["ZSTD"] = "ZSTD";
})(FileCompression || (exports.FileCompression = FileCompression = {}));
const ZSTD_MAGIC = 0xFD2FB528;
const ZSTD_SKIPPABLE_START = 0x184D2A50;
const ZSTD_SKIPPABLE_END = 0x184D2A5F;
// @TODO: remove after 30 days
const isZstdCompressed = (data) => {
    if (data.length < 4)
        return false;
    const magic = (data[0] | (data[1] << 8) | (data[2] << 16) | (data[3] << 24)) >>> 0;
    return magic === ZSTD_MAGIC || (magic >= ZSTD_SKIPPABLE_START && magic <= ZSTD_SKIPPABLE_END);
};
exports.isZstdCompressed = isZstdCompressed;
var FileLocation;
(function (FileLocation) {
    FileLocation["S3"] = "S3";
    FileLocation["DB"] = "DB";
})(FileLocation || (exports.FileLocation = FileLocation = {}));
exports.File = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: (0, core_utils_1.Nullable)(zod_1.z.string()), platformId: (0, core_utils_1.Nullable)(zod_1.z.string()), type: zod_1.z.nativeEnum(FileType), compression: zod_1.z.nativeEnum(FileCompression), data: zod_1.z.unknown().optional(), location: zod_1.z.nativeEnum(FileLocation), size: (0, core_utils_1.Nullable)(zod_1.z.number()), fileName: (0, core_utils_1.Nullable)(zod_1.z.string()), s3Key: (0, core_utils_1.Nullable)(zod_1.z.string()), metadata: (0, core_utils_1.Nullable)(zod_1.z.record(zod_1.z.string(), zod_1.z.string())) }));
const SOCKET_BUFFER_FLOOR_MB = 100;
const SOCKET_BUFFER_OVERHEAD_MB = 4;
function maxSocketHttpBufferSizeBytes(maxFileSizeMb) {
    return Math.max(maxFileSizeMb + SOCKET_BUFFER_OVERHEAD_MB, SOCKET_BUFFER_FLOOR_MB) * 1024 * 1024;
}
//# sourceMappingURL=index.js.map