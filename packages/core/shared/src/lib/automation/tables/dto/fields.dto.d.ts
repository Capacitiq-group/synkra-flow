import { z } from 'zod';
import { FieldType } from '../field';
export declare const CreateFieldRequest: z.ZodUnion<readonly [z.ZodObject<{
    name: z.ZodString;
    type: z.ZodLiteral<FieldType.STATIC_DROPDOWN>;
    tableId: z.ZodString;
    data: z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    externalId: z.ZodOptional<z.ZodString>;
    position: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    name: z.ZodString;
    type: z.ZodUnion<readonly [z.ZodLiteral<FieldType.TEXT>, z.ZodLiteral<FieldType.NUMBER>, z.ZodLiteral<FieldType.DATE>, z.ZodLiteral<FieldType.DATETIME>]>;
    tableId: z.ZodString;
    externalId: z.ZodOptional<z.ZodString>;
    position: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>]>;
export declare const UpdateFieldRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ReorderFieldsRequest: z.ZodObject<{
    tableId: z.ZodString;
    fieldIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const ListFieldsRequestQuery: z.ZodObject<{
    tableId: z.ZodString;
}, z.core.$strip>;
export type CreateFieldRequest = z.infer<typeof CreateFieldRequest>;
export type UpdateFieldRequest = z.infer<typeof UpdateFieldRequest>;
export type ReorderFieldsRequest = z.infer<typeof ReorderFieldsRequest>;
export type ListFieldsRequestQuery = z.infer<typeof ListFieldsRequestQuery>;
