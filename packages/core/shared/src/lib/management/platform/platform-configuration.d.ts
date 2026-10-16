import { z } from 'zod';
export declare const PlatformConfiguration: z.ZodObject<{
    platformId: z.ZodString;
    isProductTelemetryEnabled: z.ZodBoolean;
    isInfraSetupTelemetryEnabled: z.ZodBoolean;
    maxBarrierSignals: z.ZodInt;
    id: import("zod/mini").ZodMiniString<string>;
    created: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
    updated: import("zod/mini").ZodMiniPipe<import("zod/mini").ZodMiniTransform<unknown, unknown>, import("zod/mini").ZodMiniString<string>>;
}, z.core.$strip>;
export type PlatformConfiguration = z.infer<typeof PlatformConfiguration>;
export declare const PlatformConfigurationSettings: z.ZodObject<{
    isProductTelemetryEnabled: z.ZodBoolean;
    isInfraSetupTelemetryEnabled: z.ZodBoolean;
    maxBarrierSignals: z.ZodInt;
}, z.core.$strip>;
export type PlatformConfigurationSettings = z.infer<typeof PlatformConfigurationSettings>;
export declare const UpdatePlatformConfigurationRequestBody: z.ZodObject<{
    isProductTelemetryEnabled: z.ZodOptional<z.ZodBoolean>;
    isInfraSetupTelemetryEnabled: z.ZodOptional<z.ZodBoolean>;
    maxBarrierSignals: z.ZodOptional<z.ZodInt>;
}, z.core.$strip>;
export type UpdatePlatformConfigurationRequestBody = z.infer<typeof UpdatePlatformConfigurationRequestBody>;
export declare const maxBarrierSignalsBounds: {
    min: number;
    max: number;
};
