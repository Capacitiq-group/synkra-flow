import { FlowId } from '@activepieces/core-utils';
import { z } from 'zod';
import { Cursor } from '@activepieces/core-utils';
export declare const ListTriggerEventsRequest: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    flowId: z.ZodString;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListTriggerEventsRequest = Omit<z.infer<typeof ListTriggerEventsRequest>, 'flowId' | 'cursor'> & {
    flowId: FlowId;
    cursor: Cursor | undefined;
};
export declare const SaveTriggerEventRequest: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    flowId: z.ZodString;
    mockData: z.ZodUnknown;
}, z.core.$strip>;
export type SaveTriggerEventRequest = z.infer<typeof SaveTriggerEventRequest>;
