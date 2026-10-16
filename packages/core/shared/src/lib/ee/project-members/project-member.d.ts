import { z } from 'zod';
export type ProjectMemberId = string;
export declare const ProjectMember: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    userId: import("zod/mini").ZodMiniString<string>;
    projectId: z.ZodString;
    projectRoleId: import("zod/mini").ZodMiniString<string>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type ProjectMember = z.infer<typeof ProjectMember>;
export declare const ProjectMemberWithUser: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    userId: import("zod/mini").ZodMiniString<string>;
    projectId: z.ZodString;
    projectRoleId: import("zod/mini").ZodMiniString<string>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        firstName: z.ZodString;
        status: z.ZodEnum<typeof import("../../core/user/user").UserStatus>;
        externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
        platformRole: z.ZodEnum<typeof import("../../core/user/user").PlatformRole>;
        lastName: z.ZodString;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
        imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    }, z.core.$strip>;
    projectRole: import("zod/mini").ZodMiniObject<{
        name: import("zod/mini").ZodMiniString<string>;
        permissions: import("zod/mini").ZodMiniArray<import("zod/mini").ZodMiniString<string>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        type: import("zod/mini").ZodMiniString<string>;
        userCount: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>;
    project: z.ZodObject<{
        id: z.ZodString;
        displayName: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ProjectMemberWithUser = z.infer<typeof ProjectMemberWithUser>;
