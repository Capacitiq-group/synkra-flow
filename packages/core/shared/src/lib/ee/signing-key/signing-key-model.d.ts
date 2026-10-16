import { ApId } from '@activepieces/core-utils';
import { z } from 'zod';
export declare enum KeyAlgorithm {
    RSA = "RSA"
}
export type SigningKeyId = ApId;
export declare const SigningKey: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    publicKey: z.ZodString;
    displayName: z.ZodString;
    algorithm: z.ZodEnum<typeof KeyAlgorithm>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type SigningKey = z.infer<typeof SigningKey>;
