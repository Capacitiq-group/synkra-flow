import { z } from 'zod';
import { PlatformRole } from '../../core/user/index';
export declare enum InvitationType {
    PLATFORM = "PLATFORM",
    PROJECT = "PROJECT"
}
export declare enum InvitationStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED"
}
export declare const UserInvitation: z.ZodObject<{
    email: z.ZodString;
    status: z.ZodEnum<typeof InvitationStatus>;
    type: z.ZodEnum<typeof InvitationType>;
    platformId: z.ZodString;
    platformRole: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof PlatformRole>>>;
    projectId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    projectRoleId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    projectRole: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniObject<{
        name: import("zod/mini").ZodMiniString<string>;
        permissions: import("zod/mini").ZodMiniArray<import("zod/mini").ZodMiniString<string>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        type: import("zod/mini").ZodMiniString<string>;
        userCount: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type UserInvitation = z.infer<typeof UserInvitation>;
export declare const UserInvitationWithLink: z.ZodObject<{
    email: z.ZodString;
    status: z.ZodEnum<typeof InvitationStatus>;
    type: z.ZodEnum<typeof InvitationType>;
    platformId: z.ZodString;
    platformRole: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniEnum<typeof PlatformRole>>>;
    projectId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    projectRoleId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    projectRole: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniObject<{
        name: import("zod/mini").ZodMiniString<string>;
        permissions: import("zod/mini").ZodMiniArray<import("zod/mini").ZodMiniString<string>>;
        platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
        type: import("zod/mini").ZodMiniString<string>;
        userCount: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
        id: import("zod/mini").ZodMiniString<string>;
        created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
        updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    link: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UserInvitationWithLink = z.infer<typeof UserInvitationWithLink>;
export declare const SendUserInvitationRequest: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<InvitationType.PROJECT>;
    email: z.ZodString;
    projectId: z.ZodString;
    projectRole: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<InvitationType.PLATFORM>;
    email: z.ZodString;
    platformRole: z.ZodEnum<typeof PlatformRole>;
}, z.core.$strip>]>;
export type SendUserInvitationRequest = z.infer<typeof SendUserInvitationRequest>;
export declare const AcceptUserInvitationRequest: z.ZodObject<{
    invitationToken: z.ZodString;
}, z.core.$strip>;
export type AcceptUserInvitationRequest = z.infer<typeof AcceptUserInvitationRequest>;
export declare const ListUserInvitationsRequest: z.ZodObject<{
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<typeof InvitationType>;
    projectId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<typeof InvitationStatus>>;
}, z.core.$strip>;
export type ListUserInvitationsRequest = z.infer<typeof ListUserInvitationsRequest>;
