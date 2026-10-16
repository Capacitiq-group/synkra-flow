import * as z from "zod/mini";
export declare const DropdownOption: z.ZodMiniObject<{
    label: z.ZodMiniString<string>;
    value: z.ZodMiniUnknown;
    description: z.ZodMiniOptional<z.ZodMiniString<string>>;
    icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type DropdownOption<T> = {
    label: string;
    value: T;
    description?: string;
    icon?: string;
};
export declare const DropdownState: z.ZodMiniObject<{
    disabled: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    placeholder: z.ZodMiniOptional<z.ZodMiniString<string>>;
    options: z.ZodMiniArray<z.ZodMiniObject<{
        label: z.ZodMiniString<string>;
        value: z.ZodMiniUnknown;
        description: z.ZodMiniOptional<z.ZodMiniString<string>>;
        icon: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.z.core.$strip>>;
}, z.z.core.$strip>;
export type DropdownState<T> = {
    disabled?: boolean;
    placeholder?: string;
    options: DropdownOption<T>[];
};
