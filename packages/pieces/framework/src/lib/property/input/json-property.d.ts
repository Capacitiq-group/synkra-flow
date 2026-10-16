import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare const JsonProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.JSON>;
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
export type JsonProperty<R extends boolean> = BasePropertySchema & TPropertyValue<Record<string, unknown>, PropertyType.JSON, R>;
