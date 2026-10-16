import { z } from 'zod';
export declare enum UserIdentityProvider {
    EMAIL = "EMAIL",
    GOOGLE = "GOOGLE",
    SAML = "SAML",
    JWT = "JWT"
}
export declare const UserIdentity: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    trackEvents: z.ZodBoolean;
    newsLetter: z.ZodBoolean;
    verified: z.ZodBoolean;
    tokenVersion: z.ZodOptional<z.ZodString>;
    provider: z.ZodEnum<typeof UserIdentityProvider>;
    imageUrl: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    lastLoggedInPlatformId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type UserIdentity = z.infer<typeof UserIdentity>;
