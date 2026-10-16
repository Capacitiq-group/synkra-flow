"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECT_COLOR_PALETTE = exports.PICKABLE_COLOR_NAMES = exports.PROJECT_COLOR_SWATCH = exports.ProjectWithLimitsWithPlatform = exports.ProjectMetaData = exports.ProjectWithLimits = exports.Project = exports.ProjectIcon = exports.ProjectPlan = exports.ProjectType = exports.PiecesFilterType = exports.ColorName = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const swatch_1 = require("../../core/common/swatch");
var ColorName;
(function (ColorName) {
    ColorName["RED"] = "RED";
    ColorName["BLUE"] = "BLUE";
    ColorName["YELLOW"] = "YELLOW";
    ColorName["PURPLE"] = "PURPLE";
    ColorName["GREEN"] = "GREEN";
    ColorName["PINK"] = "PINK";
    ColorName["VIOLET"] = "VIOLET";
    ColorName["ORANGE"] = "ORANGE";
    ColorName["DARK_GREEN"] = "DARK_GREEN";
    ColorName["CYAN"] = "CYAN";
    ColorName["LAVENDER"] = "LAVENDER";
    ColorName["DEEP_ORANGE"] = "DEEP_ORANGE";
})(ColorName || (exports.ColorName = ColorName = {}));
var PiecesFilterType;
(function (PiecesFilterType) {
    PiecesFilterType["NONE"] = "NONE";
    PiecesFilterType["ALLOWED"] = "ALLOWED";
})(PiecesFilterType || (exports.PiecesFilterType = PiecesFilterType = {}));
var ProjectType;
(function (ProjectType) {
    ProjectType["TEAM"] = "TEAM";
    ProjectType["PERSONAL"] = "PERSONAL";
})(ProjectType || (exports.ProjectType = ProjectType = {}));
exports.ProjectPlan = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { projectId: zod_1.z.string(), locked: zod_1.z.boolean().default(false), name: zod_1.z.string(), piecesFilterType: zod_1.z.nativeEnum(PiecesFilterType), pieces: zod_1.z.array(zod_1.z.string()), activeFlowsLimit: (0, core_utils_1.Nullable)(zod_1.z.number()) }));
exports.ProjectIcon = zod_1.z.object({
    color: zod_1.z.nativeEnum(ColorName),
});
exports.Project = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { deleted: (0, core_utils_1.Nullable)(core_utils_1.DateOrString), ownerId: zod_1.z.string(), displayName: zod_1.z.string(), platformId: core_utils_1.ApId, maxConcurrentJobs: (0, core_utils_1.Nullable)(zod_1.z.number()), type: zod_1.z.nativeEnum(ProjectType), icon: exports.ProjectIcon, externalId: (0, core_utils_1.Nullable)(zod_1.z.string()), releasesEnabled: zod_1.z.boolean(), notifyFlowOwnerOnFailure: zod_1.z.boolean(), metadata: (0, core_utils_1.Nullable)(core_utils_1.Metadata), poolId: (0, core_utils_1.Nullable)(core_utils_1.ApId), pieceSetId: (0, core_utils_1.Nullable)(core_utils_1.ApId), workerGroupId: (0, core_utils_1.Nullable)(zod_1.z.string()), executionDataRetentionDays: (0, core_utils_1.Nullable)(zod_1.z.number()), sensitive: zod_1.z.boolean() }));
const projectAnalytics = zod_1.z.object({
    totalUsers: zod_1.z.number(),
    activeUsers: zod_1.z.number(),
    totalFlows: zod_1.z.number(),
    activeFlows: zod_1.z.number(),
    lastFlowUpdated: (0, core_utils_1.Nullable)(core_utils_1.DateOrString),
});
exports.ProjectWithLimits = exports.Project.omit({ deleted: true }).extend({
    plan: exports.ProjectPlan,
    analytics: projectAnalytics,
});
exports.ProjectMetaData = zod_1.z.object({
    id: zod_1.z.string(),
    displayName: zod_1.z.string(),
});
exports.ProjectWithLimitsWithPlatform = zod_1.z.object({
    platformName: zod_1.z.string(),
    projects: zod_1.z.array(exports.ProjectWithLimits),
});
const ProjectColor = zod_1.z.object({
    textColor: zod_1.z.string(),
    color: zod_1.z.string(),
});
function projectColorFor(name) {
    const vars = swatch_1.swatchUtils.varsFor({ index: exports.PROJECT_COLOR_SWATCH[name] });
    return {
        color: vars.mark,
        textColor: vars.on,
    };
}
exports.PROJECT_COLOR_SWATCH = {
    [ColorName.PURPLE]: 0,
    [ColorName.VIOLET]: 1,
    [ColorName.PINK]: 2,
    [ColorName.RED]: 3,
    [ColorName.DEEP_ORANGE]: 4,
    [ColorName.ORANGE]: 4,
    [ColorName.YELLOW]: 5,
    [ColorName.GREEN]: 7,
    [ColorName.DARK_GREEN]: 8,
    [ColorName.CYAN]: 9,
    [ColorName.BLUE]: 10,
    [ColorName.LAVENDER]: 11,
};
exports.PICKABLE_COLOR_NAMES = Object.values(ColorName).filter((name) => name !== ColorName.DEEP_ORANGE);
exports.PROJECT_COLOR_PALETTE = {
    [ColorName.PURPLE]: projectColorFor(ColorName.PURPLE),
    [ColorName.VIOLET]: projectColorFor(ColorName.VIOLET),
    [ColorName.PINK]: projectColorFor(ColorName.PINK),
    [ColorName.RED]: projectColorFor(ColorName.RED),
    [ColorName.DEEP_ORANGE]: projectColorFor(ColorName.DEEP_ORANGE),
    [ColorName.ORANGE]: projectColorFor(ColorName.ORANGE),
    [ColorName.YELLOW]: projectColorFor(ColorName.YELLOW),
    [ColorName.GREEN]: projectColorFor(ColorName.GREEN),
    [ColorName.DARK_GREEN]: projectColorFor(ColorName.DARK_GREEN),
    [ColorName.CYAN]: projectColorFor(ColorName.CYAN),
    [ColorName.BLUE]: projectColorFor(ColorName.BLUE),
    [ColorName.LAVENDER]: projectColorFor(ColorName.LAVENDER),
};
//# sourceMappingURL=project.js.map