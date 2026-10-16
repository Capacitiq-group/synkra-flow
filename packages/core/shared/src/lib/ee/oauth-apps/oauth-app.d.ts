import { z } from 'zod';
export declare const OAuthApp: z.ZodObject<{
    pieceName: z.ZodString;
    platformId: z.ZodString;
    clientId: z.ZodString;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type OAuthApp = z.infer<typeof OAuthApp>;
export declare const UpsertOAuth2AppRequest: z.ZodObject<{
    pieceName: z.ZodString;
    clientId: z.ZodString;
    clientSecret: z.ZodString;
}, z.core.$strip>;
export type UpsertOAuth2AppRequest = z.infer<typeof UpsertOAuth2AppRequest>;
export declare const ListOAuth2AppRequest: z.ZodObject<{
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListOAuth2AppRequest = z.infer<typeof ListOAuth2AppRequest>;
