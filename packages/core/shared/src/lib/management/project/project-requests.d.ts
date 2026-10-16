import { z } from 'zod';
import { PiecesFilterType, ProjectType } from './project';
export declare const UpdateProjectPlatformRequest: z.ZodObject<{
    releasesEnabled: z.ZodOptional<z.ZodBoolean>;
    notifyFlowOwnerOnFailure: z.ZodOptional<z.ZodBoolean>;
    displayName: z.ZodOptional<z.ZodString>;
    externalId: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>;
    icon: z.ZodOptional<z.ZodObject<{
        color: z.ZodEnum<typeof import("./project").ColorName>;
    }, z.core.$strip>>;
    plan: z.ZodOptional<z.ZodObject<{
        pieces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        piecesFilterType: z.ZodOptional<z.ZodEnum<typeof PiecesFilterType>>;
        activeFlowsLimit: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>>;
    }, z.core.$strip>>;
    globalConnectionExternalIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    maxConcurrentJobs: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>>;
    workerGroupId: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>>;
    executionDataRetentionDays: z.ZodOptional<import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>>;
    sensitive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateProjectPlatformRequest = z.infer<typeof UpdateProjectPlatformRequest>;
export declare const CreatePlatformProjectRequest: z.ZodObject<{
    displayName: z.ZodString;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    maxConcurrentJobs: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    globalConnectionExternalIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    alertReceiverEmail: z.ZodOptional<z.ZodNullable<z.ZodEmail>>;
    sensitive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreatePlatformProjectRequest = z.infer<typeof CreatePlatformProjectRequest>;
export declare const ListProjectRequestForPlatformQueryParams: z.ZodObject<{
    externalId: z.ZodOptional<z.ZodString>;
    externalUserId: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    types: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<typeof ProjectType>>>>;
}, z.core.$strip>;
export type ListProjectRequestForPlatformQueryParams = z.infer<typeof ListProjectRequestForPlatformQueryParams>;
