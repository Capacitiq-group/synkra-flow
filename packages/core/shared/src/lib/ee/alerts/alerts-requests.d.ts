import { z } from 'zod';
import { AlertChannel } from './alerts-dto';
export declare const ListAlertsParams: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type ListAlertsParams = z.infer<typeof ListAlertsParams>;
export declare const CreateAlertParams: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    channel: z.ZodEnum<typeof AlertChannel>;
    receiver: z.ZodString;
}, z.core.$strip>;
export type CreateAlertParams = z.infer<typeof CreateAlertParams>;
