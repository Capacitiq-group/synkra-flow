import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from './common';
import { PropertyType } from './property-type';
import { MarkdownVariant } from '@activepieces/core-piece-types';
export declare const MarkDownProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.MARKDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
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
export type MarkDownProperty = BasePropertySchema & TPropertyValue<undefined, PropertyType.MARKDOWN, false> & {
    variant?: MarkdownVariant;
};
