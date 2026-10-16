import { z } from 'zod';
export declare const ManagedAuthnRequestBody: z.ZodObject<{
    externalAccessToken: z.ZodString;
}, z.core.$strip>;
export type ManagedAuthnRequestBody = z.infer<typeof ManagedAuthnRequestBody>;
