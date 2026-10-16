import { z } from 'zod';
export declare function isPieceVisible({ pieces, name }: {
    pieces: PieceSelection;
    name: string;
}): boolean;
export declare function isComponentVisible({ selected, name }: {
    selected: string[] | undefined;
    name: string;
}): boolean;
export declare enum PieceSelectionMode {
    INCLUDE_ALL = "include_all",
    EXCLUDE_ALL = "exclude_all"
}
export declare const PieceSelection: z.ZodObject<{
    mode: z.ZodDefault<z.ZodEnum<{
        include_all: PieceSelectionMode.INCLUDE_ALL;
        exclude_all: PieceSelectionMode.EXCLUDE_ALL;
    }>>;
    exceptions: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type PieceSelection = z.infer<typeof PieceSelection>;
export declare enum RequiredActionsMode {
    ANY = "any",
    ALL = "all"
}
export declare const RequiredActions: z.ZodObject<{
    mode: z.ZodDefault<z.ZodEnum<typeof RequiredActionsMode>>;
    actions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export type RequiredActions = z.infer<typeof RequiredActions>;
export declare const PieceSetConfig: z.ZodObject<{
    pieces: z.ZodDefault<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<{
            include_all: PieceSelectionMode.INCLUDE_ALL;
            exclude_all: PieceSelectionMode.EXCLUDE_ALL;
        }>>;
        exceptions: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    selectedActions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    selectedTriggers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    requiredActions: z.ZodDefault<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<typeof RequiredActionsMode>>;
        actions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PieceSetConfig = z.infer<typeof PieceSetConfig>;
export declare const PieceSet: z.ZodObject<{
    platformId: import("zod/mini").ZodMiniString<string>;
    name: z.ZodString;
    key: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<z.ZodString>>;
    isDefault: z.ZodBoolean;
    generatedForProjectId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNullable<import("zod/mini").ZodMiniString<string>>>;
    config: z.ZodObject<{
        pieces: z.ZodDefault<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<{
                include_all: PieceSelectionMode.INCLUDE_ALL;
                exclude_all: PieceSelectionMode.EXCLUDE_ALL;
            }>>;
            exceptions: z.ZodDefault<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        selectedActions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
        selectedTriggers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
        requiredActions: z.ZodDefault<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<typeof RequiredActionsMode>>;
            actions: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type PieceSet = z.infer<typeof PieceSet>;
export declare const ComponentSelection: z.ZodDiscriminatedUnion<[z.ZodObject<{
    mode: z.ZodLiteral<"all">;
}, z.core.$strip>, z.ZodObject<{
    mode: z.ZodLiteral<"selected">;
    selected: z.ZodArray<z.ZodString>;
}, z.core.$strip>], "mode">;
export type ComponentSelection = z.infer<typeof ComponentSelection>;
export declare const CreatePieceSetRequestBody: z.ZodObject<{
    name: z.ZodString;
    key: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreatePieceSetRequestBody = z.infer<typeof CreatePieceSetRequestBody>;
export declare const UpdatePieceSetRequestBody: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    key: z.ZodOptional<z.ZodString>;
    pieces: z.ZodOptional<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<{
            include_all: PieceSelectionMode.INCLUDE_ALL;
            exclude_all: PieceSelectionMode.EXCLUDE_ALL;
        }>>;
        exceptions: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    actions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
        mode: z.ZodLiteral<"all">;
    }, z.core.$strip>, z.ZodObject<{
        mode: z.ZodLiteral<"selected">;
        selected: z.ZodArray<z.ZodString>;
    }, z.core.$strip>], "mode">>>;
    triggers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodDiscriminatedUnion<[z.ZodObject<{
        mode: z.ZodLiteral<"all">;
    }, z.core.$strip>, z.ZodObject<{
        mode: z.ZodLiteral<"selected">;
        selected: z.ZodArray<z.ZodString>;
    }, z.core.$strip>], "mode">>>;
    requiredActions: z.ZodOptional<z.ZodObject<{
        mode: z.ZodOptional<z.ZodEnum<typeof RequiredActionsMode>>;
        actions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UpdatePieceSetRequestBody = z.infer<typeof UpdatePieceSetRequestBody>;
export declare const DuplicatePieceSetRequestBody: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type DuplicatePieceSetRequestBody = z.infer<typeof DuplicatePieceSetRequestBody>;
export declare const AssignProjectsRequestBody: z.ZodObject<{
    projectIds: z.ZodArray<import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type AssignProjectsRequestBody = z.infer<typeof AssignProjectsRequestBody>;
export declare const ListPieceSetsRequestQuery: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export type ListPieceSetsRequestQuery = z.infer<typeof ListPieceSetsRequestQuery>;
