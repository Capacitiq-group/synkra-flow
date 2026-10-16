export declare function createByteLruCache<T>({ budgetBytes }: CreateByteLruCacheParams): ByteLruCache<T>;
export type ByteLruCache<T> = {
    get(key: string): T | undefined;
    set(params: {
        key: string;
        value: T;
        sizeBytes: number;
    }): void;
};
export type CreateByteLruCacheParams = {
    budgetBytes: number;
};
