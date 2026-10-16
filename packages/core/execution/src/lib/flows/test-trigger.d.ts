import { z } from 'zod';
export declare enum TriggerTestStrategy {
    SIMULATION = "SIMULATION",
    TEST_FUNCTION = "TEST_FUNCTION"
}
export declare const TestTriggerRequestBody: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    flowId: import("zod/mini").ZodMiniString<string>;
    flowVersionId: import("zod/mini").ZodMiniString<string>;
    testStrategy: z.ZodEnum<typeof TriggerTestStrategy>;
}, z.core.$strip>;
export type TestTriggerRequestBody = z.infer<typeof TestTriggerRequestBody>;
export declare const CancelTestTriggerRequestBody: z.ZodObject<{
    projectId: import("zod/mini").ZodMiniString<string>;
    flowId: import("zod/mini").ZodMiniString<string>;
}, z.core.$strip>;
export type CancelTestTriggerRequestBody = z.infer<typeof CancelTestTriggerRequestBody>;
