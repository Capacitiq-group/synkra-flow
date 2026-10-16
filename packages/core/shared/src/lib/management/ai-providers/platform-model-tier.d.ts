import { AIProviderName } from '@activepieces/core-utils';
import { z } from 'zod';
export declare const PlatformModelTierEntry: z.ZodObject<{
    configId: import("zod/mini").ZodMiniString<string>;
    modelId: z.ZodString;
}, z.core.$strip>;
export declare const PlatformModelTier: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    name: z.ZodString;
    emoji: z.ZodString;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    position: z.ZodNumber;
    entries: z.ZodArray<z.ZodObject<{
        configId: import("zod/mini").ZodMiniString<string>;
        modelId: z.ZodString;
    }, z.core.$strip>>;
    isDefault: z.ZodBoolean;
    isFast: z.ZodBoolean;
    thinkingBudget: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    deleted: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>>>;
    replacedBy: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export declare const PlatformModelTierSummary: z.ZodObject<{
    id: import("zod/mini").ZodMiniString<string>;
    name: z.ZodString;
    emoji: z.ZodString;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    position: z.ZodNumber;
    isDefault: z.ZodBoolean;
    isFast: z.ZodBoolean;
    mainModel: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodObject<{
        provider: z.ZodEnum<typeof AIProviderName>;
        modelId: z.ZodString;
    }, z.core.$strip>>>;
    fallbackCount: z.ZodNumber;
}, z.core.$strip>;
export declare const CreatePlatformModelTierRequest: z.ZodObject<{
    name: z.ZodString;
    emoji: z.ZodString;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    entries: z.ZodArray<z.ZodObject<{
        configId: import("zod/mini").ZodMiniString<string>;
        modelId: z.ZodString;
    }, z.core.$strip>>;
    thinkingBudget: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
}, z.core.$strip>;
export declare const UpdatePlatformModelTierRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    emoji: z.ZodOptional<z.ZodString>;
    description: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    entries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        configId: import("zod/mini").ZodMiniString<string>;
        modelId: z.ZodString;
    }, z.core.$strip>>>;
    thinkingBudget: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodNumber>>;
    isDefault: z.ZodOptional<z.ZodLiteral<true>>;
    isFast: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strip>;
export declare const ReorderPlatformModelTiersRequest: z.ZodObject<{
    tierIds: z.ZodArray<import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export declare const DeletePlatformModelTierRequest: z.ZodObject<{
    replacedBy: z.ZodOptional<import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type PlatformModelTierEntry = z.infer<typeof PlatformModelTierEntry>;
export type PlatformModelTier = z.infer<typeof PlatformModelTier>;
export type PlatformModelTierSummary = z.infer<typeof PlatformModelTierSummary>;
export type CreatePlatformModelTierRequest = z.infer<typeof CreatePlatformModelTierRequest>;
export type UpdatePlatformModelTierRequest = z.infer<typeof UpdatePlatformModelTierRequest>;
export type ReorderPlatformModelTiersRequest = z.infer<typeof ReorderPlatformModelTiersRequest>;
export type DeletePlatformModelTierRequest = z.infer<typeof DeletePlatformModelTierRequest>;
