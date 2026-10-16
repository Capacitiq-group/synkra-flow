import * as z from "zod/mini";
import { ApFile } from "./file-property";
import { PropertyType } from "./property-type";
export declare const BasePropertySchema: z.ZodMiniObject<{
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
export type BasePropertySchema = z.infer<typeof BasePropertySchema>;
export declare const TPropertyValue: <T extends z.ZodMiniType, U extends PropertyType>(_T: T, propertyType: U) => z.ZodMiniObject<{
    type: z.ZodMiniLiteral<U>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
}, z.z.core.$strip>;
export type TPropertyValue<T, U extends PropertyType, REQUIRED extends boolean> = {
    valueSchema: T;
    type: U;
    required: REQUIRED;
    defaultValue?: U extends PropertyType.ARRAY ? unknown[] : U extends PropertyType.JSON ? object : U extends PropertyType.CHECKBOX ? boolean : U extends PropertyType.LONG_TEXT ? string : U extends PropertyType.RICH_TEXT ? string : U extends PropertyType.SHORT_TEXT ? string : U extends PropertyType.NUMBER ? number : U extends PropertyType.DROPDOWN ? unknown : U extends PropertyType.MULTI_SELECT_DROPDOWN ? unknown[] : U extends PropertyType.STATIC_MULTI_SELECT_DROPDOWN ? unknown[] : U extends PropertyType.STATIC_DROPDOWN ? unknown : U extends PropertyType.DATE_TIME ? string : U extends PropertyType.DATE_RANGE ? object : U extends PropertyType.FILE ? ApFile : U extends PropertyType.COLOR ? string : unknown;
};
