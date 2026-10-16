import * as z from "zod/mini";
import { BasePieceAuthSchema } from "./common";
import { TPropertyValue } from "../input/common";
import { PropertyType } from "../input/property-type";
export declare const SecretTextProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.SECRET_TEXT>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    displayName: z.ZodMiniString<string>;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    hasConnectionIdentifier: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
}, z.z.core.$strip>;
export type SecretTextProperty<R extends boolean> = BasePieceAuthSchema<string> & TPropertyValue<string, PropertyType.SECRET_TEXT, R>;
