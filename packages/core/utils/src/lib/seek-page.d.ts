import * as z from 'zod/mini';
export type Cursor = string | null;
export type SeekPage<T> = {
    next: Cursor;
    previous: Cursor;
    data: T[];
};
export declare const SeekPage: (t: z.ZodMiniType) => z.ZodMiniType;
