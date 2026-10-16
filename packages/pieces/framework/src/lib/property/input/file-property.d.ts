import type { Readable } from "node:stream";
import * as z from "zod/mini";
import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
export declare class ApFile {
    filename: string;
    data: Buffer;
    extension?: string | undefined;
    constructor(filename: string, data: Buffer, extension?: string | undefined);
    get base64(): string;
}
export declare const FileProperty: z.ZodMiniObject<{
    type: z.ZodMiniLiteral<PropertyType.FILE>;
    required: z.ZodMiniBoolean<boolean>;
    defaultValue: z.ZodMiniOptional<z.ZodMiniAny>;
    streaming: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
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
export type ApStreamingFile = {
    filename: string;
    extension?: string;
    size?: number;
    body: Readable;
};
export type FileProperty<R extends boolean, S extends boolean = false> = BasePropertySchema & {
    streaming?: S;
} & TPropertyValue<S extends true ? ApStreamingFile | ApFile : ApFile, PropertyType.FILE, R>;
