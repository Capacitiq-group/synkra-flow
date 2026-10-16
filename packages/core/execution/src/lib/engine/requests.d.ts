import { z } from 'zod';
import { FlowRunStatus } from '../flow-run/execution/flow-execution';
import { StepOutput } from '../flow-run/execution/step-output';
import { FlowRun } from '../flow-run/flow-run';
import { AiRouterMatchMode } from '../flows/actions/action';
import { StreamStepProgress } from './engine-operation';
export declare const UploadRunLogsRequest: z.ZodObject<{
    runId: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<typeof FlowRunStatus>>;
    projectId: z.ZodString;
    streamStepProgress: z.ZodOptional<z.ZodEnum<typeof StreamStepProgress>>;
    logsFileId: z.ZodOptional<z.ZodString>;
    stepNameToTest: z.ZodOptional<z.ZodString>;
    failedStep: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        displayName: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    startTime: z.ZodOptional<z.ZodString>;
    finishTime: z.ZodOptional<z.ZodString>;
    stepResponse: z.ZodOptional<z.ZodObject<{
        runId: z.ZodString;
        success: z.ZodBoolean;
        input: z.ZodUnknown;
        output: z.ZodUnknown;
        sampleDataFileId: z.ZodOptional<z.ZodString>;
        sampleDataInputFileId: z.ZodOptional<z.ZodString>;
        standardError: z.ZodString;
        standardOutput: z.ZodString;
    }, z.core.$strip>>;
    stepsCount: z.ZodOptional<z.ZodNumber>;
    internalError: z.ZodOptional<z.ZodObject<{
        source: z.ZodEnum<typeof import("../flow-run/execution/execution-output").RunInternalErrorSource>;
        message: z.ZodString;
        code: z.ZodOptional<z.ZodString>;
        occurredAt: z.ZodString;
    }, z.core.$strip>>;
    provisionMs: z.ZodOptional<z.ZodNumber>;
    bootMs: z.ZodOptional<z.ZodNumber>;
    runMs: z.ZodOptional<z.ZodNumber>;
    workerHandlerId: z.ZodOptional<z.ZodString>;
    httpRequestId: z.ZodOptional<z.ZodString>;
    willRetry: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UploadRunLogsRequest = z.infer<typeof UploadRunLogsRequest>;
export declare const UpdateStepProgressRequest: z.ZodObject<{
    projectId: z.ZodString;
    runId: z.ZodString;
    output: z.ZodUnknown;
    sequence: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type UpdateStepProgressRequest = z.infer<typeof UpdateStepProgressRequest>;
export declare const FileTransportQueryParams: z.ZodObject<{
    token: z.ZodString;
}, z.core.$strip>;
export type FileTransportQueryParams = z.infer<typeof FileTransportQueryParams>;
export declare const FileReadToken: z.ZodObject<{
    fileId: z.ZodString;
    fileType: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type FileReadToken = z.infer<typeof FileReadToken>;
export declare const SendFlowResponseRequest: z.ZodObject<{
    workerHandlerId: z.ZodString;
    httpRequestId: z.ZodString;
    runResponse: z.ZodObject<{
        status: z.ZodCoercedNumber<unknown>;
        body: z.ZodAny;
        headers: z.ZodRecord<z.ZodString, z.ZodCoercedString<unknown>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SendFlowResponseRequest = z.infer<typeof SendFlowResponseRequest>;
export declare const GetFlowVersionForWorkerRequest: z.ZodObject<{
    versionId: z.ZodString;
}, z.core.$strip>;
export type GetFlowVersionForWorkerRequest = z.infer<typeof GetFlowVersionForWorkerRequest>;
export type UpdateRunProgressRequest = {
    flowRun: Omit<FlowRun, 'steps'>;
    step?: {
        name: string;
        path: readonly [string, number][];
        output: StepOutput;
    };
};
export declare const AI_ROUTER_MAX_STATE_LENGTH = 20000;
export declare const ChooseAiRouteRequest: z.ZodObject<{
    state: z.ZodString;
    question: z.ZodString;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    matchMode: z.ZodEnum<typeof AiRouterMatchMode>;
    flowId: z.ZodString;
    flowRunId: z.ZodString;
    waitpointId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ChooseAiRouteRequest = z.infer<typeof ChooseAiRouteRequest>;
export declare const StartAiRouteResponse: z.ZodObject<{
    requestId: z.ZodString;
}, z.core.$strip>;
export type StartAiRouteResponse = z.infer<typeof StartAiRouteResponse>;
export declare const ChooseAiRouteResponse: z.ZodObject<{
    matched: z.ZodArray<z.ZodString>;
    probabilities: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$strip>;
export type ChooseAiRouteResponse = z.infer<typeof ChooseAiRouteResponse>;
