import { z } from 'zod';
import { Cursor } from '@activepieces/core-utils';
import { FlowStatus } from '../flow';
import { FlowVersionState } from '../flow-version';
export declare const ListFlowsRequest: z.ZodObject<{
    folderId: z.ZodOptional<z.ZodString>;
    folderIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
    status: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<typeof FlowStatus>>>>;
    projectId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    agentExternalIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    versionState: z.ZodOptional<z.ZodEnum<typeof FlowVersionState>>;
    connectionExternalIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    externalIds: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodString>>>;
    sortBy: z.ZodOptional<z.ZodEnum<{
        NAME: "NAME";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        ASC: "ASC";
        DESC: "DESC";
    }>>;
}, z.core.$strip>;
export type ListFlowsRequest = Omit<z.infer<typeof ListFlowsRequest>, 'cursor'> & {
    cursor: Cursor | undefined;
};
export declare const GetFlowQueryParamsRequest: z.ZodObject<{
    versionId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetFlowQueryParamsRequest = z.infer<typeof GetFlowQueryParamsRequest>;
export declare const ListFlowVersionRequest: z.ZodObject<{
    limit: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListFlowVersionRequest = Omit<z.infer<typeof ListFlowVersionRequest>, 'cursor'> & {
    cursor: Cursor | undefined;
};
