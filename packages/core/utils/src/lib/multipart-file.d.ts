import * as z from 'zod/mini';
export declare const ApMultipartFile: z.ZodMiniObject<{
    filename: z.ZodMiniString<string>;
    data: z.ZodMiniUnknown;
    type: z.ZodMiniLiteral<"file">;
    mimetype: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type ApMultipartFile = z.infer<typeof ApMultipartFile> & {
    data: Buffer;
};
export declare const isMultipartFile: (value: unknown) => value is ApMultipartFile;
