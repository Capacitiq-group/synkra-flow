import { PiecePropertyMap } from ".";
import { PieceAuthProperty } from "./authentication";
import * as z from "zod/mini";
declare function buildSchema(props: PiecePropertyMap, auth: PieceAuthProperty | PieceAuthProperty[] | undefined, requireAuth?: boolean | undefined): z.ZodMiniObject<Record<string, z.ZodMiniType<unknown, unknown, z.z.core.$ZodTypeInternals<unknown, unknown>>>, z.z.core.$strip>;
export declare const piecePropertiesUtils: {
    buildSchema: typeof buildSchema;
};
export {};
