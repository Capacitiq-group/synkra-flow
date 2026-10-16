import { z } from 'zod';
import { TriggerPayload } from '../../engine';
import { StepOutput } from './step-output';
export declare enum ExecutionType {
    BEGIN = "BEGIN",
    RESUME = "RESUME"
}
export type ExecutionState = {
    steps: Record<string, StepOutput>;
    tags: string[];
};
export declare const ExecutionState: z.ZodObject<{
    steps: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    tags: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare enum RunInternalErrorSource {
    ENGINE = "ENGINE",
    WORKER = "WORKER"
}
export declare const RunInternalError: z.ZodObject<{
    source: z.ZodEnum<typeof RunInternalErrorSource>;
    message: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
    occurredAt: z.ZodString;
}, z.core.$strip>;
export type RunInternalError = z.infer<typeof RunInternalError>;
export type ExecutioOutputFile = {
    executionState: ExecutionState;
    internalError?: RunInternalError;
    version?: number;
};
export type ResumePayload = TriggerPayload;
