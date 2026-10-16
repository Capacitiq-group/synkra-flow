import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare const CheckboxProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.CHECKBOX>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    reveals: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniString<string>>>;
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
export type CheckboxProperty<R extends boolean> = BasePropertySchema & {
    /** Names of sibling props revealed (rendered nested) when this checkbox is on. Effective inside a 'section' group. */
    reveals?: string[];
} & TPropertyValue<boolean, PropertyType.CHECKBOX, R>;
