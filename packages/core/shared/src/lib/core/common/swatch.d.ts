declare function hashToIndex({ seed }: {
    seed: string;
}): number;
declare function varsFor({ index }: {
    index: number;
}): SwatchVars;
declare function varsForSeed({ seed }: {
    seed: string;
}): SwatchVars;
export declare const swatchUtils: {
    hashToIndex: typeof hashToIndex;
    varsFor: typeof varsFor;
    varsForSeed: typeof varsForSeed;
};
export type SwatchVars = {
    mark: string;
    on: string;
    surface: string;
    ink: string;
    line: string;
};
export {};
