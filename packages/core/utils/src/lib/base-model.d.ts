import * as z from 'zod/mini';
export type BaseModel<T> = {
    id: T;
    created: string;
    updated: string;
};
export declare const DateOrString: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
export declare const BaseModelSchema: {
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
};
export declare const Nullable: <T extends z.ZodMiniType>(schema: T) => z.ZodMiniOptional<z.ZodMiniNullable<T>>;
export declare function NullableEnum<T extends Record<string, string | number>>(enumObj: T): z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniEnum<T>>>;
export declare const OptionalBooleanFromQuery: z.ZodMiniPipe<z.ZodMiniTransform<boolean | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>>;
export declare const OptionalIsoDateTimeQuery: z.ZodMiniOptional<z.z.iso.ZodMiniISODateTime>;
export declare const OptionalArrayFromQuery: <T extends z.ZodMiniType>(schema: T) => z.ZodMiniPipe<z.ZodMiniTransform<any[] | undefined, unknown>, z.ZodMiniOptional<z.ZodMiniArray<T>>>;
