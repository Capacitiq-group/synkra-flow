import { z } from 'zod';
import { ApEdition } from '../../../core/flag/flag';
import { PackageType, PieceCategory } from '../piece';
export declare const EXACT_VERSION_PATTERN = "^[0-9]+\\.[0-9]+\\.[0-9]+$";
export declare const EXACT_VERSION_REGEX: RegExp;
export declare const ExactVersionType: z.ZodString;
export declare const VersionType: z.ZodString;
export declare enum SuggestionType {
    ACTION = "ACTION",
    TRIGGER = "TRIGGER",
    ACTION_AND_TRIGGER = "ACTION_AND_TRIGGER"
}
export declare enum PieceSortBy {
    NAME = "NAME",
    UPDATED = "UPDATED",
    CREATED = "CREATED",
    POPULARITY = "POPULARITY"
}
export declare enum PieceOrderBy {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum PieceAudienceFilter {
    HUMAN = "human",
    AI = "ai",
    ALL = "all"
}
export declare const GetPieceRequestWithScopeParams: z.ZodObject<{
    name: z.ZodString;
    scope: z.ZodString;
}, z.core.$strip>;
export type GetPieceRequestWithScopeParams = z.infer<typeof GetPieceRequestWithScopeParams>;
export declare const GetPieceRequestParams: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type GetPieceRequestParams = z.infer<typeof GetPieceRequestParams>;
export declare const ListPiecesRequestQuery: z.ZodObject<{
    projectId: z.ZodOptional<z.ZodString>;
    release: z.ZodOptional<z.ZodString>;
    includeHidden: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<boolean | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>>;
    audience: z.ZodOptional<z.ZodEnum<typeof PieceAudienceFilter>>;
    edition: z.ZodOptional<z.ZodEnum<typeof ApEdition>>;
    searchQuery: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodOptional<z.ZodEnum<typeof PieceSortBy>>;
    orderBy: z.ZodOptional<z.ZodEnum<typeof PieceOrderBy>>;
    categories: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<any[] | undefined, unknown>, import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniArray<z.ZodEnum<typeof PieceCategory>>>>;
    suggestionType: z.ZodOptional<z.ZodEnum<typeof SuggestionType>>;
    locale: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ListPiecesRequestQuery = z.infer<typeof ListPiecesRequestQuery>;
export declare const RegistryPiecesRequestQuery: z.ZodObject<{
    release: z.ZodString;
    edition: z.ZodEnum<typeof ApEdition>;
}, z.core.$strip>;
export type RegistryPiecesRequestQuery = z.infer<typeof RegistryPiecesRequestQuery>;
export declare const GetPieceRequestQuery: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
    locale: z.ZodOptional<z.ZodString>;
    audience: z.ZodOptional<z.ZodEnum<typeof PieceAudienceFilter>>;
}, z.core.$strip>;
export type GetPieceRequestQuery = z.infer<typeof GetPieceRequestQuery>;
export declare const PieceOptionRequest: z.ZodObject<{
    projectId: z.ZodString;
    pieceName: z.ZodString;
    pieceVersion: z.ZodString;
    actionOrTriggerName: z.ZodString;
    propertyName: z.ZodString;
    flowId: z.ZodString;
    flowVersionId: z.ZodString;
    input: z.ZodAny;
    searchValue: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PieceOptionRequest = z.infer<typeof PieceOptionRequest>;
export declare enum PieceScope {
    PLATFORM = "PLATFORM"
}
export declare const AddPieceRequestBody: z.ZodUnion<readonly [z.ZodObject<{
    packageType: z.ZodLiteral<PackageType.ARCHIVE>;
    scope: z.ZodLiteral<PieceScope>;
    pieceName: z.ZodString;
    pieceVersion: z.ZodString;
    pieceArchive: import("zod/mini").ZodMiniObject<{
        filename: import("zod/mini").ZodMiniString<string>;
        data: import("zod/mini").ZodMiniUnknown;
        type: import("zod/mini").ZodMiniLiteral<"file">;
        mimetype: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    packageType: z.ZodLiteral<PackageType.REGISTRY>;
    scope: z.ZodLiteral<PieceScope>;
    pieceName: z.ZodString;
    pieceVersion: z.ZodString;
}, z.core.$strip>]>;
export type AddPieceRequestBody = z.infer<typeof AddPieceRequestBody>;
