import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare const ColorProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.COLOR>;
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
export type ColorProperty<R extends boolean> = BasePropertySchema & TPropertyValue<string, PropertyType.COLOR, R>;
