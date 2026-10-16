import * as z from "zod/mini";
export declare const propsValidation: {
    validateZod<T extends Record<string, unknown>>(props: T, schema: Partial<Record<keyof T, z.core.$ZodType>>): Promise<void>;
};
