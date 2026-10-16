import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare const NumberProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.NUMBER>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    display: z.ZodMiniOptional<z.ZodMiniEnum<{
        stepper: "stepper";
    }>>;
    min: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    max: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    step: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
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
export type NumberProperty<R extends boolean> = BasePropertySchema & {
    display?: 'stepper';
    min?: number;
    max?: number;
    step?: number;
} & TPropertyValue<number, PropertyType.NUMBER, R>;
