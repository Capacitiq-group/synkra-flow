import * as z from 'zod/mini';
export declare const FileResponseInterface: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    base64Url: z.ZodMiniString<string>;
    fileName: z.ZodMiniString<string>;
    extension: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    mimeType: z.ZodMiniString<string>;
    url: z.ZodMiniString<string>;
    fileName: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>]>;
export type FileResponseInterface = z.infer<typeof FileResponseInterface>;
export declare enum HumanInputFormResultTypes {
    FILE = "file",
    MARKDOWN = "markdown"
}
export declare function createKeyForFormInput(displayName: string): string;
export declare const HumanInputFormResult: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    type: z.ZodMiniLiteral<HumanInputFormResultTypes.FILE>;
    value: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        base64Url: z.ZodMiniString<string>;
        fileName: z.ZodMiniString<string>;
        extension: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        mimeType: z.ZodMiniString<string>;
        url: z.ZodMiniString<string>;
        fileName: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>]>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<HumanInputFormResultTypes.MARKDOWN>;
    value: z.ZodMiniString<string>;
    files: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        base64Url: z.ZodMiniString<string>;
        fileName: z.ZodMiniString<string>;
        extension: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        mimeType: z.ZodMiniString<string>;
        url: z.ZodMiniString<string>;
        fileName: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>]>>>;
}, z.z.core.$strip>]>;
export type HumanInputFormResult = z.infer<typeof HumanInputFormResult>;
export declare const ChatFormResponse: z.ZodMiniObject<{
    sessionId: z.ZodMiniString<string>;
    message: z.ZodMiniString<string>;
    files: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
}, z.z.core.$strip>;
export type ChatFormResponse = z.infer<typeof ChatFormResponse>;
