import { z } from 'zod';
export declare const ApiKey: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    displayName: z.ZodString;
    hashedValue: z.ZodString;
    truncatedValue: z.ZodString;
    lastUsedAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type ApiKey = z.infer<typeof ApiKey>;
export declare const ApiKeyResponseWithValue: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    displayName: z.ZodString;
    lastUsedAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    truncatedValue: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type ApiKeyResponseWithValue = z.infer<typeof ApiKeyResponseWithValue>;
export declare const ApiKeyResponseWithoutValue: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    displayName: z.ZodString;
    lastUsedAt: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    truncatedValue: z.ZodString;
}, z.core.$strip>;
export type ApiKeyResponseWithoutValue = z.infer<typeof ApiKeyResponseWithoutValue>;
export declare const CreateApiKeyRequest: z.ZodObject<{
    displayName: z.ZodString;
}, z.core.$strip>;
export type CreateApiKeyRequest = z.infer<typeof CreateApiKeyRequest>;
