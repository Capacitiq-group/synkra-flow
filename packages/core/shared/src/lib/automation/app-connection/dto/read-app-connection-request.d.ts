import { z } from 'zod';
import { ProjectType } from '../../../management/project/project';
import { AppConnectionScope, AppConnectionStatus } from '../app-connection';
export declare const ListAppConnectionsRequestQuery: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    projectId: z.ZodString;
    scope: z.ZodOptional<z.ZodEnum<typeof AppConnectionScope>>;
    pieceName: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    status: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<typeof AppConnectionStatus>>>>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListAppConnectionsRequestQuery = z.infer<typeof ListAppConnectionsRequestQuery>;
export declare const GetAppConnectionForWorkerRequestQuery: z.ZodObject<{
    externalId: z.ZodString;
}, z.core.$strip>;
export type GetAppConnectionForWorkerRequestQuery = z.infer<typeof GetAppConnectionForWorkerRequestQuery>;
export declare const ListGlobalConnectionsRequestQuery: z.ZodObject<{
    status: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<typeof AppConnectionStatus>>>>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    pieceName: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
    scope: z.ZodOptional<z.ZodEnum<typeof AppConnectionScope>>;
}, z.core.$strip>;
export type ListGlobalConnectionsRequestQuery = z.infer<typeof ListGlobalConnectionsRequestQuery>;
export declare const ListAppConnectionOwnersRequestQuery: z.ZodObject<{
    projectId: z.ZodString;
}, z.core.$strip>;
export type ListAppConnectionOwnersRequestQuery = z.infer<typeof ListAppConnectionOwnersRequestQuery>;
export declare const ListPlatformAppConnectionsRequestQuery: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    displayName: z.ZodOptional<z.ZodString>;
    pieceName: z.ZodOptional<z.ZodString>;
    scope: z.ZodOptional<z.ZodEnum<typeof AppConnectionScope>>;
    status: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<typeof AppConnectionStatus>>>>;
    projectIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    ownerIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
}, z.core.$strip>;
export type ListPlatformAppConnectionsRequestQuery = z.infer<typeof ListPlatformAppConnectionsRequestQuery>;
export declare const PlatformAppConnectionProjectInfo: z.ZodObject<{
    id: z.ZodString;
    displayName: z.ZodString;
    type: z.ZodEnum<typeof ProjectType>;
}, z.core.$strip>;
export type PlatformAppConnectionProjectInfo = z.infer<typeof PlatformAppConnectionProjectInfo>;
export declare const PlatformAppConnectionsListItem: z.ZodObject<{
    externalId: z.ZodString;
    displayName: z.ZodString;
    type: z.ZodEnum<typeof import("../app-connection").AppConnectionType>;
    pieceName: z.ZodString;
    projectIds: z.ZodArray<import("zod/mini").ZodMiniString<string>>;
    platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    scope: z.ZodEnum<typeof AppConnectionScope>;
    status: z.ZodEnum<typeof AppConnectionStatus>;
    ownerId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    owner: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        firstName: z.ZodString;
        status: z.ZodEnum<typeof import("../../../..").UserStatus>;
        externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformRole: z.ZodEnum<typeof import("../../../..").PlatformRole>;
        lastName: z.ZodString;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    metadata: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>>;
    flowIds: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodArray<import("zod/mini").ZodMiniString<string>>>>;
    pieceVersion: z.ZodString;
    preSelectForNewProjects: z.ZodBoolean;
    usingSecretManager: z.ZodBoolean;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    projects: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        displayName: z.ZodString;
        type: z.ZodEnum<typeof ProjectType>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PlatformAppConnectionsListItem = z.infer<typeof PlatformAppConnectionsListItem>;
export declare const PlatformAppConnectionOwner: z.ZodObject<{
    id: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export type PlatformAppConnectionOwner = z.infer<typeof PlatformAppConnectionOwner>;
export declare const PlatformAppConnectionOwnersResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
        email: z.ZodString;
    }, z.core.$strip>>;
    truncated: z.ZodBoolean;
}, z.core.$strip>;
export type PlatformAppConnectionOwnersResponse = z.infer<typeof PlatformAppConnectionOwnersResponse>;
export declare const MAX_PLATFORM_APP_CONNECTION_OWNERS = 1000;
