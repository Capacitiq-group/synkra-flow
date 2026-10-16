import { z } from 'zod';
import * as zMini from 'zod/mini';
export declare enum SampleDataFileType {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}
export declare const DATA_TYPE_KEY_IN_FILE_METADATA = "dataType";
export declare enum SampleDataDataType {
    JSON = "JSON",
    STRING = "STRING"
}
export declare const SaveSampleDataRequest: z.ZodObject<{
    stepName: z.ZodString;
    payload: z.ZodUnknown;
    type: z.ZodEnum<typeof SampleDataFileType>;
}, z.core.$strip>;
export type SaveSampleDataRequest = z.infer<typeof SaveSampleDataRequest>;
export declare const GetSampleDataRequest: z.ZodObject<{
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    stepName: z.ZodString;
    projectId: z.ZodString;
    type: z.ZodEnum<typeof SampleDataFileType>;
}, z.core.$strip>;
export type GetSampleDataRequest = z.infer<typeof GetSampleDataRequest>;
export declare const CreateStepRunRequestBody: z.ZodObject<{
    projectId: z.ZodString;
    flowVersionId: z.ZodString;
    stepName: z.ZodString;
}, z.core.$strip>;
export type CreateStepRunRequestBody = z.infer<typeof CreateStepRunRequestBody>;
export declare const StepRunResponse: z.ZodObject<{
    runId: z.ZodString;
    success: z.ZodBoolean;
    input: z.ZodUnknown;
    output: z.ZodUnknown;
    sampleDataFileId: z.ZodOptional<z.ZodString>;
    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
    standardError: z.ZodString;
    standardOutput: z.ZodString;
}, z.core.$strip>;
export type StepRunResponse = z.infer<typeof StepRunResponse>;
export declare const StepExecutionPath: z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodNumber], null>>;
export type StepExecutionPath = z.infer<typeof StepExecutionPath>;
export declare const SampleDataSetting: z.ZodObject<{
    sampleDataFileId: z.ZodOptional<z.ZodString>;
    sampleDataInputFileId: z.ZodOptional<z.ZodString>;
    lastTestDate: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SampleDataSettings = z.infer<typeof SampleDataSetting>;
export declare const DEFAULT_SAMPLE_DATA_SETTINGS: SampleDataSettings;
export declare const SaveSampleDataResponse: zMini.ZodMiniObject<{
    type: zMini.ZodMiniEnum<typeof import("@activepieces/core-piece-types").FileType>;
    id: zMini.ZodMiniString<string>;
    size: zMini.ZodMiniOptional<zMini.ZodMiniNullable<zMini.ZodMiniNumber<number>>>;
}, z.core.$strip>;
export type SaveSampleDataResponse = z.infer<typeof SaveSampleDataResponse>;
