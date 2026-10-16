import { ExecutionToolStatus } from './agents';
export type ExecuteToolResponse = {
    status: ExecutionToolStatus;
    output?: unknown;
    resolvedInput: Record<string, unknown>;
    errorMessage?: unknown;
};
export declare function normalizeToolOutputToExecuteResponse(raw: unknown): ExecuteToolResponse;
