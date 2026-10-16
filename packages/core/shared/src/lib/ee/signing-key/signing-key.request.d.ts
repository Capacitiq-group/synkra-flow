import { z } from 'zod';
export declare const AddSigningKeyRequestBody: z.ZodObject<{
    displayName: z.ZodString;
}, z.core.$strip>;
export type AddSigningKeyRequestBody = z.infer<typeof AddSigningKeyRequestBody>;
