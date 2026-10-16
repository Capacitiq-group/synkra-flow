import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "../common";
import { DropdownState } from "./common";
import { PropertyType } from "../property-type";
export declare const StaticDropdownDisplay: z.ZodMiniEnum<{
    cards: "cards";
}>;
export type StaticDropdownDisplay = z.infer<typeof StaticDropdownDisplay>;
export declare const StaticDropdownProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.STATIC_DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    options: z.ZodMiniObject<{
        disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        options: z.ZodMiniArray<z.ZodMiniObject<{
            label: z.ZodMiniString<string>;
            value: z.ZodMiniUnknown;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
    display: z.ZodMiniOptional<z.ZodMiniEnum<{
        cards: "cards";
    }>>;
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
export type StaticDropdownProperty<T, R extends boolean> = BasePropertySchema & {
    options: DropdownState<T>;
    display?: StaticDropdownDisplay;
} & TPropertyValue<T, PropertyType.STATIC_DROPDOWN, R>;
export declare const StaticMultiSelectDropdownProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.STATIC_MULTI_SELECT_DROPDOWN>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    options: z.ZodMiniObject<{
        disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
        options: z.ZodMiniArray<z.ZodMiniObject<{
            label: z.ZodMiniString<string>;
            value: z.ZodMiniUnknown;
            description: z.ZodMiniOptional<z.ZodMiniString<string>>;
            icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.z.core.$strip>>;
    }, z.z.core.$strip>;
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
export type StaticMultiSelectDropdownProperty<T, R extends boolean> = BasePropertySchema & {
    options: DropdownState<T>;
} & TPropertyValue<T[], PropertyType.STATIC_MULTI_SELECT_DROPDOWN, R>;
