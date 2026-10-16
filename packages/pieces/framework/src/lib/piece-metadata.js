"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiecePackageInformation = exports.PieceMetadataModelSummary = exports.PieceMetadataModel = exports.PieceMetadataSummary = exports.PieceMetadata = exports.TriggerBase = exports.ActionBase = exports.PropertyGroup = exports.PropertyGroupDisplay = exports.isReadOnlyClassification = exports.READ_ONLY_CLASSIFICATIONS = exports.ActionClassification = exports.AiMetadata = exports.Audience = exports.PieceBase = void 0;
const tslib_1 = require("tslib");
const property_1 = require("./property");
const trigger_1 = require("./trigger/trigger");
const action_1 = require("./action/action");
const authentication_1 = require("./property/authentication");
const z = tslib_1.__importStar(require("zod/mini"));
const core_piece_types_1 = require("@activepieces/core-piece-types");
const I18nForPiece = z.optional(z.record(z.string(), z.record(z.string(), z.string())));
exports.PieceBase = z.object({
    id: z.optional(z.string()),
    name: z.string(),
    displayName: z.string(),
    logoUrl: z.string(),
    description: z.string(),
    authors: z.array(z.string()),
    platformId: z.optional(z.string()),
    directoryPath: z.optional(z.string()),
    auth: z.optional(z.union([authentication_1.PieceAuthProperty, z.array(authentication_1.PieceAuthProperty)])),
    version: z.string(),
    categories: z.optional(z.array(z.enum(core_piece_types_1.PieceCategory))),
    minimumSupportedRelease: z.optional(z.string()),
    maximumSupportedRelease: z.optional(z.string()),
    deprecated: z.optional(z.boolean()),
    i18n: I18nForPiece,
});
exports.Audience = z.enum(['human', 'ai', 'both']);
exports.AiMetadata = z.object({
    description: z.optional(z.string()),
    idempotent: z.optional(z.boolean()),
});
exports.ActionClassification = z.enum(['READ', 'SEARCH', 'WRITE', 'DESTRUCTIVE']);
exports.READ_ONLY_CLASSIFICATIONS = ['READ', 'SEARCH'];
const isReadOnlyClassification = (classification) => classification !== undefined && exports.READ_ONLY_CLASSIFICATIONS.includes(classification);
exports.isReadOnlyClassification = isReadOnlyClassification;
exports.PropertyGroupDisplay = z.enum(['tabs', 'section', 'summary', 'builder', 'footer']);
exports.PropertyGroup = z.object({
    key: z.string(),
    display: exports.PropertyGroupDisplay,
    label: z.optional(z.string()),
    description: z.optional(z.string()),
    icon: z.optional(z.string()),
    props: z.array(z.string()),
});
exports.ActionBase = z.object({
    name: z.string(),
    displayName: z.string(),
    description: z.string(),
    props: property_1.PiecePropertyMap,
    propertyGroups: z.optional(z.array(exports.PropertyGroup)),
    requireAuth: z.boolean(),
    errorHandlingOptions: z.optional(action_1.ErrorHandlingOptionsParam),
    outputSchema: z.optional(z.custom()),
    audience: z.optional(exports.Audience),
    aiMetadata: z.optional(exports.AiMetadata),
    classification: z.optional(exports.ActionClassification),
});
exports.TriggerBase = z.object({
    name: z.string(),
    displayName: z.string(),
    description: z.string(),
    props: property_1.PiecePropertyMap,
    propertyGroups: z.optional(z.array(exports.PropertyGroup)),
    errorHandlingOptions: z.optional(action_1.ErrorHandlingOptionsParam),
    type: z.enum(core_piece_types_1.TriggerStrategy),
    sampleData: z.unknown(),
    handshakeConfiguration: z.optional(z.custom()),
    renewConfiguration: z.optional(trigger_1.WebhookRenewConfiguration),
    testStrategy: z.enum(core_piece_types_1.TriggerTestStrategy),
    outputSchema: z.optional(z.custom()),
    aiMetadata: z.optional(exports.AiMetadata),
    classification: z.optional(exports.ActionClassification),
});
exports.PieceMetadata = z.object(Object.assign(Object.assign({}, exports.PieceBase.shape), { actions: z.record(z.string(), exports.ActionBase), triggers: z.record(z.string(), exports.TriggerBase) }));
exports.PieceMetadataSummary = z.object(Object.assign(Object.assign({}, exports.PieceBase.shape), { actions: z.number(), triggers: z.number(), suggestedActions: z.optional(z.array(exports.ActionBase)), suggestedTriggers: z.optional(z.array(exports.TriggerBase)) }));
const PiecePackageMetadata = z.object({
    projectUsage: z.number(),
    pieceType: z.enum(core_piece_types_1.PieceType),
    packageType: z.enum(core_piece_types_1.PackageType),
    platformId: z.optional(z.string()),
    archiveId: z.optional(z.string()),
});
exports.PieceMetadataModel = z.object(Object.assign(Object.assign({}, exports.PieceMetadata.shape), PiecePackageMetadata.shape));
exports.PieceMetadataModelSummary = z.object(Object.assign(Object.assign({}, exports.PieceMetadataSummary.shape), PiecePackageMetadata.shape));
exports.PiecePackageInformation = z.object({
    name: z.string(),
    version: z.string(),
});
//# sourceMappingURL=piece-metadata.js.map