import * as z from 'zod/mini';
export declare enum McpPropertyType {
    TEXT = "Text",
    BOOLEAN = "Boolean",
    DATE = "Date",
    NUMBER = "Number",
    ARRAY = "Array",
    OBJECT = "Object"
}
export declare const McpProperty: z.ZodMiniObject<{
    name: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    type: z.ZodMiniString<string>;
    required: z.ZodMiniBoolean<boolean>;
}, z.z.core.$strip>;
export type McpProperty = z.infer<typeof McpProperty>;
export declare const McpTrigger: z.ZodMiniObject<{
    pieceName: z.ZodMiniString<string>;
    triggerName: z.ZodMiniString<string>;
    input: z.ZodMiniObject<{
        toolName: z.ZodMiniString<string>;
        toolDescription: z.ZodMiniString<string>;
        inputSchema: z.ZodMiniArray<z.ZodMiniObject<{
            name: z.ZodMiniString<string>;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            type: z.ZodMiniString<string>;
            required: z.ZodMiniBoolean<boolean>;
        }, z.z.core.$strip>>;
        returnsResponse: z.ZodMiniBoolean<boolean>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export type McpTrigger = z.infer<typeof McpTrigger>;
