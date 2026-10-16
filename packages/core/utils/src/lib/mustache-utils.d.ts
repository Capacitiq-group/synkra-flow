export declare function extractMustacheTokens(input: string): MustacheToken[];
export type MustacheToken = {
    token: string;
    inner: string;
    index: number;
};
