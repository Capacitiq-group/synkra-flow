import { z } from 'zod';
export declare const CreateFlowRequest: z.ZodObject<{
    displayName: z.ZodString;
    folderId: z.ZodOptional<z.ZodString>;
    folderName: z.ZodOptional<z.ZodString>;
    projectId: z.ZodString;
    templateId: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>;
    externalId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateFlowRequest = z.infer<typeof CreateFlowRequest>;
