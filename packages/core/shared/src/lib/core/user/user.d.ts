import { z } from 'zod';
export declare enum PlatformRole {
    /**
     * Platform administrator with full control over platform settings,
     * users, and all projects
     */
    ADMIN = "ADMIN",
    /**
     * Regular platform member with access only to projects they are
     * explicitly invited to
     */
    MEMBER = "MEMBER",
    /**
     * Platform operator with automatic access to all projects without editior permission, except (others' private projects) in the
     * platform but no platform administration capabilities
     */
    OPERATOR = "OPERATOR"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare const EmailType: z.ZodString;
export declare const PasswordType: z.ZodString;
export declare const User: z.ZodObject<{
    platformRole: z.ZodEnum<typeof PlatformRole>;
    status: z.ZodEnum<typeof UserStatus>;
    identityId: z.ZodString;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type User = z.infer<typeof User>;
export declare const UserWithMetaInformation: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    firstName: z.ZodString;
    status: z.ZodEnum<typeof UserStatus>;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    platformRole: z.ZodEnum<typeof PlatformRole>;
    lastName: z.ZodString;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    lastActiveDate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
    imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
}, z.core.$strip>;
export type UserWithMetaInformation = z.infer<typeof UserWithMetaInformation>;
export declare const AP_MAXIMUM_PROFILE_PICTURE_SIZE: number;
export declare const PROFILE_PICTURE_ALLOWED_TYPES: string[];
export declare const UpdateMeRequestBody: z.ZodObject<{
    profilePicture: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type UpdateMeRequestBody = z.infer<typeof UpdateMeRequestBody>;
export declare const UpdateMeResponse: z.ZodObject<{
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    trackEvents: z.ZodBoolean;
    newsLetter: z.ZodBoolean;
    imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
}, z.core.$strip>;
export type UpdateMeResponse = z.infer<typeof UpdateMeResponse>;
