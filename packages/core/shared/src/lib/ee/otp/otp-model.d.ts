import { z } from 'zod';
import { OtpType } from './otp-type';
export declare enum OtpState {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED"
}
export declare const OtpModel: z.ZodObject<{
    type: z.ZodEnum<typeof OtpType>;
    identityId: import("zod/mini").ZodMiniString<string>;
    value: z.ZodString;
    state: z.ZodEnum<typeof OtpState>;
    attempts: z.ZodNumber;
    version: z.ZodNumber;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type OtpModel = z.infer<typeof OtpModel>;
