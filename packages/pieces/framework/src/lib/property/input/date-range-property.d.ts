import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare const DateRangePreset: z.ZodMiniEnum<{
    custom: "custom";
    any_time: "any_time";
    last_24_hours: "last_24_hours";
    last_7_days: "last_7_days";
    last_30_days: "last_30_days";
    last_90_days: "last_90_days";
    this_month: "this_month";
}>;
export type DateRangePreset = z.infer<typeof DateRangePreset>;
export declare const DateRangeValue: z.ZodMiniObject<{
    preset: z.ZodMiniOptional<z.ZodMiniEnum<{
        custom: "custom";
        any_time: "any_time";
        last_24_hours: "last_24_hours";
        last_7_days: "last_7_days";
        last_30_days: "last_30_days";
        last_90_days: "last_90_days";
        this_month: "this_month";
    }>>;
    after: z.ZodMiniOptional<z.ZodMiniString<string>>;
    before: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type DateRangeValue = {
    preset?: DateRangePreset;
    after?: string;
    before?: string;
};
export declare const DateRangeProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.DATE_RANGE>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    display: z.ZodMiniOptional<z.ZodMiniEnum<{
        dropdown: "dropdown";
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
export type DateRangeProperty<R extends boolean> = BasePropertySchema & {
    display?: 'dropdown';
} & TPropertyValue<DateRangeValue, PropertyType.DATE_RANGE, R>;
declare function resolve(value: DateRangeValue | null | undefined): {
    after?: string;
    before?: string;
};
export declare const dateRangeUtils: {
    resolve: typeof resolve;
};
export {};
