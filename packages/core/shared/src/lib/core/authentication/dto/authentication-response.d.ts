import { z } from 'zod';
export declare const UserWithoutPassword: z.ZodObject<{
    status: z.ZodEnum<typeof import("../../user/user").UserStatus>;
    platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    platformRole: z.ZodEnum<typeof import("../../user/user").PlatformRole>;
}, z.core.$strip>;
export type UserWithoutPassword = z.infer<typeof UserWithoutPassword>;
export declare const AuthenticationResponse: z.ZodObject<{
    status: z.ZodEnum<typeof import("../../user/user").UserStatus>;
    platformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    platformRole: z.ZodEnum<typeof import("../../user/user").PlatformRole>;
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    trackEvents: z.ZodBoolean;
    newsLetter: z.ZodBoolean;
    verified: z.ZodBoolean;
    token: z.ZodString;
    projectId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AuthenticationResponse = z.infer<typeof AuthenticationResponse>;
