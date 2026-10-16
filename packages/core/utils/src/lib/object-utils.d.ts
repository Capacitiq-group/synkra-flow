export declare function deleteProperties(obj: Record<string, unknown>, props: string[]): {
    [x: string]: unknown;
};
export declare function omit<T extends object, K extends keyof T>(obj: T, keysToOmit: K[]): Omit<T, K>;
export declare const spreadIfNotUndefined: <T>(key: string, value: T | undefined) => Record<string, T>;
export declare const spreadIfDefined: <T>(key: string, value: T | undefined | null) => Record<string, T>;
export declare function deleteProps<T extends Record<string, unknown>, K extends keyof T>(obj: T, prop: K[]): Omit<T, K>;
export declare function cloneResolvedValue(value: unknown): unknown;
export declare function sanitizeObjectForPostgresql<T>(input: T): T;
export declare function applyFunctionToValuesSync<T>(obj: unknown, apply: (str: string) => unknown): T;
export declare function applyFunctionToValues<T>(obj: unknown, apply: (str: string) => Promise<unknown>): Promise<T>;
export declare const isObject: (obj: unknown) => obj is Record<string, unknown>;
export declare function prune(value: unknown): unknown;
export declare function deepEquals({ a, b }: DeepEqualsParams): boolean;
type DeepEqualsParams = {
    a: unknown;
    b: unknown;
};
export declare function groupBy<T, K extends string | number | symbol>(items: T[], keySelector: (item: T) => K): Record<K, T[]>;
export {};
