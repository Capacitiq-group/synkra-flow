declare const STEPS: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
declare const STATUS_SCALES: readonly ["danger", "warning", "success"];
declare function contrastRatio({ foreground, background, }: {
    foreground: string;
    background: string;
}): number;
declare function onPrimaryFor({ hex }: {
    hex: string;
}): string;
declare function cssVariables({ primaryColor, }: {
    primaryColor: string;
}): Record<string, string>;
declare function statusCssVariables({ statusColors, }: {
    statusColors: StatusColors;
}): Record<string, string>;
declare function variableNames(): string[];
declare function defaultPrimaryColor(): string;
declare function defaultStatusColor({ scale }: {
    scale: StatusScale;
}): string;
declare function defaultRamp({ scale }: {
    scale: RampScale;
}): Ramp;
declare function ramp({ hex, scale }: {
    hex: string;
    scale: RampScale;
}): Ramp;
declare function swatches(): Swatch[];
export declare const brandColors: {
    statusScales: readonly ["danger", "warning", "success"];
    steps: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    cssVariables: typeof cssVariables;
    statusCssVariables: typeof statusCssVariables;
    variableNames: typeof variableNames;
    defaultPrimaryColor: typeof defaultPrimaryColor;
    defaultStatusColor: typeof defaultStatusColor;
    defaultRamp: typeof defaultRamp;
    ramp: typeof ramp;
    swatches: typeof swatches;
    contrastRatio: typeof contrastRatio;
    onPrimaryFor: typeof onPrimaryFor;
};
export type StatusScale = (typeof STATUS_SCALES)[number];
export type StatusColors = Partial<Record<StatusScale, string>>;
type RampScale = 'accent' | StatusScale;
type RampStep = (typeof STEPS)[number];
type Ramp = {
    light: Record<RampStep, string>;
    dark: Record<RampStep, string>;
    onSolid: string;
};
type SwatchRoles = {
    mark: string;
    on: string;
    surface: string;
    line: string;
    ink: string;
};
type Swatch = {
    light: SwatchRoles;
    dark: SwatchRoles;
};
export {};
