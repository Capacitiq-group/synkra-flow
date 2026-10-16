import { z } from 'zod';
export type FolderId = string;
export declare const Folder: z.ZodObject<{
    id: z.ZodString;
    projectId: z.ZodString;
    displayName: z.ZodString;
    displayOrder: z.ZodNumber;
    externalId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export declare const UncategorizedFolderId = "NULL";
export type Folder = z.infer<typeof Folder>;
export type FolderDto = Folder & {
    numberOfFlows: number;
    numberOfTables: number;
};
