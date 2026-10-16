"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectReplaceResponse = exports.InstalledPiece = exports.ConnectionAwaitingAuthorization = exports.ProjectReplaceApplied = exports.ProjectReplaceItemFailure = exports.ProjectReplaceItemOp = exports.ProjectReplaceItemKind = exports.ProjectReplacePreflightFailure = exports.PieceInstallFailure = exports.ProjectReplacePreflightError = exports.ProjectReplaceErrorKind = exports.ProjectReplaceRequest = exports.RequiredPiece = exports.PROJECT_REPLACE_SCHEMA_VERSION = void 0;
const zod_1 = require("zod");
const piece_1 = require("../pieces/piece");
const project_state_1 = require("./project-state");
exports.PROJECT_REPLACE_SCHEMA_VERSION = 1;
exports.RequiredPiece = zod_1.z.object({
    name: zod_1.z.string(),
    version: zod_1.z.string(),
    pieceType: zod_1.z.nativeEnum(piece_1.PieceType),
});
exports.ProjectReplaceRequest = zod_1.z.object({
    schemaVersion: zod_1.z.literal(exports.PROJECT_REPLACE_SCHEMA_VERSION),
    sourceActivepiecesVersion: zod_1.z.string(),
    flows: project_state_1.ProjectState.shape.flows,
    tables: zod_1.z.array(project_state_1.TableState),
    folders: zod_1.z.array(project_state_1.FolderState),
    connections: zod_1.z.array(project_state_1.ConnectionState),
    requiredPieces: zod_1.z.array(exports.RequiredPiece),
});
var ProjectReplaceErrorKind;
(function (ProjectReplaceErrorKind) {
    ProjectReplaceErrorKind["AP_VERSION_MISMATCH"] = "AP_VERSION_MISMATCH";
    ProjectReplaceErrorKind["PIECE_VERSION_MISMATCH"] = "PIECE_VERSION_MISMATCH";
    ProjectReplaceErrorKind["CONNECTION_PIECE_MISMATCH"] = "CONNECTION_PIECE_MISMATCH";
})(ProjectReplaceErrorKind || (exports.ProjectReplaceErrorKind = ProjectReplaceErrorKind = {}));
exports.ProjectReplacePreflightError = zod_1.z.discriminatedUnion('kind', [
    zod_1.z.object({
        kind: zod_1.z.literal(ProjectReplaceErrorKind.AP_VERSION_MISMATCH),
        sourceVersion: zod_1.z.string(),
        destVersion: zod_1.z.string(),
        message: zod_1.z.string(),
    }),
    zod_1.z.object({
        kind: zod_1.z.literal(ProjectReplaceErrorKind.PIECE_VERSION_MISMATCH),
        pieceName: zod_1.z.string(),
        sourceVersion: zod_1.z.string(),
        destVersion: zod_1.z.string(),
    }),
    zod_1.z.object({
        kind: zod_1.z.literal(ProjectReplaceErrorKind.CONNECTION_PIECE_MISMATCH),
        externalId: zod_1.z.string(),
        expectedPieceName: zod_1.z.string(),
        foundPieceName: zod_1.z.string(),
    }),
]);
exports.PieceInstallFailure = zod_1.z.object({
    pieceName: zod_1.z.string(),
    version: zod_1.z.string(),
    pieceType: zod_1.z.nativeEnum(piece_1.PieceType),
    message: zod_1.z.string(),
});
exports.ProjectReplacePreflightFailure = zod_1.z.object({
    errors: zod_1.z.array(exports.ProjectReplacePreflightError),
});
var ProjectReplaceItemKind;
(function (ProjectReplaceItemKind) {
    ProjectReplaceItemKind["FLOW"] = "flow";
    ProjectReplaceItemKind["TABLE"] = "table";
    ProjectReplaceItemKind["FOLDER"] = "folder";
    ProjectReplaceItemKind["CONNECTION"] = "connection";
})(ProjectReplaceItemKind || (exports.ProjectReplaceItemKind = ProjectReplaceItemKind = {}));
var ProjectReplaceItemOp;
(function (ProjectReplaceItemOp) {
    ProjectReplaceItemOp["CREATE"] = "CREATE";
    ProjectReplaceItemOp["UPDATE"] = "UPDATE";
    ProjectReplaceItemOp["DELETE"] = "DELETE";
})(ProjectReplaceItemOp || (exports.ProjectReplaceItemOp = ProjectReplaceItemOp = {}));
exports.ProjectReplaceItemFailure = zod_1.z.object({
    kind: zod_1.z.nativeEnum(ProjectReplaceItemKind),
    externalId: zod_1.z.string(),
    op: zod_1.z.nativeEnum(ProjectReplaceItemOp),
    error: zod_1.z.string(),
});
exports.ProjectReplaceApplied = zod_1.z.object({
    flowsCreated: zod_1.z.number(),
    flowsUpdated: zod_1.z.number(),
    flowsDeleted: zod_1.z.number(),
    flowsUnchanged: zod_1.z.number(),
    tablesCreated: zod_1.z.number(),
    tablesUpdated: zod_1.z.number(),
    tablesDeleted: zod_1.z.number(),
    tablesUnchanged: zod_1.z.number(),
    foldersCreated: zod_1.z.number(),
    foldersUpdated: zod_1.z.number(),
    foldersDeleted: zod_1.z.number(),
    foldersUnchanged: zod_1.z.number(),
    connectionsCreated: zod_1.z.number(),
    connectionsUpdated: zod_1.z.number(),
    connectionsUnchanged: zod_1.z.number(),
});
exports.ConnectionAwaitingAuthorization = zod_1.z.object({
    externalId: zod_1.z.string(),
    pieceName: zod_1.z.string(),
    displayName: zod_1.z.string(),
});
exports.InstalledPiece = zod_1.z.object({
    name: zod_1.z.string(),
    version: zod_1.z.string(),
    pieceType: zod_1.z.nativeEnum(piece_1.PieceType),
});
exports.ProjectReplaceResponse = zod_1.z.object({
    applied: exports.ProjectReplaceApplied,
    failed: zod_1.z.array(exports.ProjectReplaceItemFailure),
    connectionsAwaitingAuthorization: zod_1.z.array(exports.ConnectionAwaitingAuthorization),
    piecesInstalled: zod_1.z.array(exports.InstalledPiece),
    durationMs: zod_1.z.number(),
});
//# sourceMappingURL=project-replace.js.map