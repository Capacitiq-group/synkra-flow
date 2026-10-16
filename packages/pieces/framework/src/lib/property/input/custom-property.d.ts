import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare const CustomProperty: z.ZodMiniObject<{
    code: z.ZodMiniString<string>;
    type: z.ZodMiniLiteral<PropertyType.CUSTOM>;
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
export type CustomProperty<R extends boolean> = BasePropertySchema & TPropertyValue<unknown, PropertyType.CUSTOM, R> & {
    code: string;
};
export type CustomPropertyCodeFunctionParams = {
    containerId: string;
    value: unknown;
    onChange: (value: unknown) => void;
    isEmbeded: boolean;
    projectId: string;
    property: Pick<CustomProperty<boolean>, 'displayName' | 'description' | 'required'>;
    disabled: boolean;
};
