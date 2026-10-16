import * as z from "zod/mini";
import { TPropertyValue } from '../input/common';
import { PropertyType } from '../input/property-type';
import { BasePieceAuthSchema } from './common';
export declare const BasicAuthPropertyValue: z.ZodMiniObject<{
    username: z.ZodMiniString<string>;
    password: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type BasicAuthPropertyValue = z.infer<typeof BasicAuthPropertyValue>;
export declare const BasicAuthProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.BASIC_AUTH>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    username: z.ZodMiniObject<{
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>;
    password: z.ZodMiniObject<{
        displayName: z.ZodMiniString<string>;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>;
export type BasicAuthProperty = BasePieceAuthSchema<BasicAuthPropertyValue> & {
    username: {
        displayName: string;
        description?: string;
    };
    password: {
        displayName: string;
        description?: string;
    };
} & TPropertyValue<BasicAuthPropertyValue, PropertyType.BASIC_AUTH, true>;
