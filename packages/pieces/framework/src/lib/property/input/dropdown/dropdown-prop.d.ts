import { BasePropertySchema, TPropertyValue } from "../common";
import { DropdownState } from "./common";
import { AppConnectionValueForAuthProperty, PropertyContext } from "../../../context";
import * as z from "zod/mini";
import { PropertyType } from "../property-type";
import { PieceAuthProperty } from "../../authentication";
type DynamicDropdownOptions<T, PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = undefined> = (propsValue: Record<string, unknown> & {
    auth?: PieceAuth extends undefined ? undefined : AppConnectionValueForAuthProperty<Exclude<PieceAuth, undefined>>;
}, ctx: PropertyContext) => Promise<DropdownState<T>>;
export declare const DropdownProperty: z.ZodMiniObject<{
    refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
    type: z.ZodMiniLiteral<PropertyType.DROPDOWN>;
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
export type DropdownProperty<T, R extends boolean, PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = undefined> = BasePropertySchema & {
    /**
     * A dummy property used to infer {@code PieceAuth} type
     */
    auth: PieceAuth;
    refreshers: string[];
    refreshOnSearch?: boolean;
    options: DynamicDropdownOptions<T, PieceAuth>;
} & TPropertyValue<T, PropertyType.DROPDOWN, R>;
export declare const MultiSelectDropdownProperty: z.ZodMiniObject<{
    refreshers: z.ZodMiniArray<z.ZodMiniString<string>>;
    type: z.ZodMiniLiteral<PropertyType.MULTI_SELECT_DROPDOWN>;
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
export type MultiSelectDropdownProperty<T, R extends boolean, PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = undefined> = BasePropertySchema & {
    /**
     * A dummy property used to infer {@code PieceAuth} type
     */
    auth: PieceAuth;
    refreshers: string[];
    refreshOnSearch?: boolean;
    options: DynamicDropdownOptions<T, PieceAuth>;
} & TPropertyValue<T[], PropertyType.MULTI_SELECT_DROPDOWN, R>;
export {};
