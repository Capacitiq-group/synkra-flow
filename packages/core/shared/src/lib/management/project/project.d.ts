import { z } from 'zod';
export declare enum ColorName {
    RED = "RED",
    BLUE = "BLUE",
    YELLOW = "YELLOW",
    PURPLE = "PURPLE",
    GREEN = "GREEN",
    PINK = "PINK",
    VIOLET = "VIOLET",
    ORANGE = "ORANGE",
    DARK_GREEN = "DARK_GREEN",
    CYAN = "CYAN",
    LAVENDER = "LAVENDER",
    DEEP_ORANGE = "DEEP_ORANGE"
}
export declare enum PiecesFilterType {
    NONE = "NONE",
    ALLOWED = "ALLOWED"
}
export declare enum ProjectType {
    TEAM = "TEAM",
    PERSONAL = "PERSONAL"
}
export declare const ProjectPlan: z.ZodObject<{
    projectId: z.ZodString;
    locked: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodString;
    piecesFilterType: z.ZodEnum<typeof PiecesFilterType>;
    pieces: z.ZodArray<z.ZodString>;
    activeFlowsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type ProjectPlan = z.infer<typeof ProjectPlan>;
export declare const ProjectIcon: z.ZodObject<{
    color: z.ZodEnum<typeof ColorName>;
}, z.core.$strip>;
export type ProjectIcon = z.infer<typeof ProjectIcon>;
export declare const Project: z.ZodObject<{
    deleted: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
    ownerId: z.ZodString;
    displayName: z.ZodString;
    platformId: import("zod/mini").ZodMiniString<string>;
    maxConcurrentJobs: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    type: z.ZodEnum<typeof ProjectType>;
    icon: z.ZodObject<{
        color: z.ZodEnum<typeof ColorName>;
    }, z.core.$strip>;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    releasesEnabled: z.ZodBoolean;
    notifyFlowOwnerOnFailure: z.ZodBoolean;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    poolId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    pieceSetId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    workerGroupId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    executionDataRetentionDays: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    sensitive: z.ZodBoolean;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type Project = z.infer<typeof Project>;
export declare const ProjectWithLimits: z.ZodObject<{
    type: z.ZodEnum<typeof ProjectType>;
    platformId: import("zod/mini").ZodMiniString<string>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    displayName: z.ZodString;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    ownerId: z.ZodString;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    icon: z.ZodObject<{
        color: z.ZodEnum<typeof ColorName>;
    }, z.core.$strip>;
    workerGroupId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    maxConcurrentJobs: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    releasesEnabled: z.ZodBoolean;
    notifyFlowOwnerOnFailure: z.ZodBoolean;
    poolId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    pieceSetId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    executionDataRetentionDays: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    sensitive: z.ZodBoolean;
    plan: z.ZodObject<{
        projectId: z.ZodString;
        locked: z.ZodDefault<z.ZodBoolean>;
        name: z.ZodString;
        piecesFilterType: z.ZodEnum<typeof PiecesFilterType>;
        pieces: z.ZodArray<z.ZodString>;
        activeFlowsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>;
    analytics: z.ZodObject<{
        totalUsers: z.ZodNumber;
        activeUsers: z.ZodNumber;
        totalFlows: z.ZodNumber;
        activeFlows: z.ZodNumber;
        lastFlowUpdated: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ProjectWithLimits = z.infer<typeof ProjectWithLimits>;
export declare const ProjectMetaData: z.ZodObject<{
    id: z.ZodString;
    displayName: z.ZodString;
}, z.core.$strip>;
export type ProjectMetaData = z.infer<typeof ProjectMetaData>;
export declare const ProjectWithLimitsWithPlatform: z.ZodObject<{
    platformName: z.ZodString;
    projects: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<typeof ProjectType>;
        platformId: import("zod/mini").ZodMiniString<string>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        displayName: z.ZodString;
        externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        ownerId: z.ZodString;
        metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
        icon: z.ZodObject<{
            color: z.ZodEnum<typeof ColorName>;
        }, z.core.$strip>;
        workerGroupId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        maxConcurrentJobs: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        releasesEnabled: z.ZodBoolean;
        notifyFlowOwnerOnFailure: z.ZodBoolean;
        poolId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        pieceSetId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        executionDataRetentionDays: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
        sensitive: z.ZodBoolean;
        plan: z.ZodObject<{
            projectId: z.ZodString;
            locked: z.ZodDefault<z.ZodBoolean>;
            name: z.ZodString;
            piecesFilterType: z.ZodEnum<typeof PiecesFilterType>;
            pieces: z.ZodArray<z.ZodString>;
            activeFlowsLimit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
            id: import("zod/mini").ZodMiniString<string>;
            created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
            updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        }, z.core.$strip>;
        analytics: z.ZodObject<{
            totalUsers: z.ZodNumber;
            activeUsers: z.ZodNumber;
            totalFlows: z.ZodNumber;
            activeFlows: z.ZodNumber;
            lastFlowUpdated: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ProjectWithLimitsWithPlatform = z.infer<typeof ProjectWithLimitsWithPlatform>;
declare const ProjectColor: z.ZodObject<{
    textColor: z.ZodString;
    color: z.ZodString;
}, z.core.$strip>;
type ProjectColor = z.infer<typeof ProjectColor>;
export declare const PROJECT_COLOR_SWATCH: Record<ColorName, number>;
export declare const PICKABLE_COLOR_NAMES: ColorName[];
export declare const PROJECT_COLOR_PALETTE: Record<ColorName, ProjectColor>;
export {};
