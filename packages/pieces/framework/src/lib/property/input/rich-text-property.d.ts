import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare const RichTextProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.RICH_TEXT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    formatProperty: z.ZodMiniOptional<z.ZodMiniString<string>>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    advanced: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    width: z.ZodMiniOptional<z.ZodMiniEnum<{
        half: "half";
        full: "full";
    }>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type RichTextProperty<R extends boolean> = BasePropertySchema & {
    /**
     * Name of a sibling property whose value selects the editing mode.
     * The sibling value is mapped by convention: 'plain_text' | 'plain' | 'text' -> plain,
     * 'html' -> rich/html, 'markdown' | 'md' -> markdown. Anything else falls back to plain.
     */
    formatProperty?: string;
} & TPropertyValue<string, PropertyType.RICH_TEXT, R>;
