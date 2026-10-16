import { z } from 'zod';
export * from './health-metrics-request';
export declare const ReleaseHealth: z.ZodObject<{
    current: z.ZodString;
    workers: z.ZodObject<{
        total: z.ZodNumber;
        versionMismatched: z.ZodNumber;
        mismatchedVersions: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const GetSystemHealthChecksResponse: z.ZodObject<{
    latestVersion: z.ZodString;
    appCpu: z.ZodBoolean;
    appRam: z.ZodBoolean;
    disk: z.ZodBoolean;
    workerCpu: z.ZodNullable<z.ZodBoolean>;
    workerRam: z.ZodNullable<z.ZodBoolean>;
    database: z.ZodBoolean;
    release: z.ZodObject<{
        current: z.ZodString;
        workers: z.ZodObject<{
            total: z.ZodNumber;
            versionMismatched: z.ZodNumber;
            mismatchedVersions: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const InfraCheck: z.ZodObject<{
    ok: z.ZodBoolean;
    latencyMs: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const DeploymentConfig: z.ZodObject<{
    executionMode: z.ZodNullable<z.ZodString>;
    fileStorageLocation: z.ZodNullable<z.ZodString>;
    sandboxMemoryLimitKb: z.ZodNullable<z.ZodNumber>;
    s3SignedUrls: z.ZodNullable<z.ZodBoolean>;
    s3Endpoint: z.ZodNullable<z.ZodString>;
    s3Region: z.ZodNullable<z.ZodString>;
    projectRateLimiterEnabled: z.ZodNullable<z.ZodBoolean>;
    defaultConcurrentJobsLimit: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export declare const DiagnosticsWorker: z.ZodObject<{
    workerId: z.ZodString;
    cpuCores: z.ZodNumber;
    cpuUsagePercentage: z.ZodNumber;
    ramUsagePercentage: z.ZodNumber;
    serverPingMs: z.ZodNullable<z.ZodNumber>;
    status: z.ZodString;
}, z.core.$strip>;
export declare const AppInstance: z.ZodObject<{
    hostname: z.ZodString;
    version: z.ZodString;
    cpuCores: z.ZodNumber;
    cpuUsagePercentage: z.ZodNumber;
    ramTotalBytes: z.ZodNumber;
    ramUsagePercentage: z.ZodNumber;
    diskPercentage: z.ZodNumber;
    diskTotalBytes: z.ZodOptional<z.ZodNumber>;
    eventLoopDelayMs: z.ZodNumber;
    cpuStealPercentage: z.ZodOptional<z.ZodNumber>;
    cpuThrottledPercentage: z.ZodOptional<z.ZodNumber>;
    updated: z.ZodString;
}, z.core.$strip>;
export declare const GetDiagnosticsResponse: z.ZodObject<{
    database: z.ZodObject<{
        ok: z.ZodBoolean;
        latencyMs: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    redis: z.ZodObject<{
        ok: z.ZodBoolean;
        latencyMs: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    storage: z.ZodObject<{
        ok: z.ZodBoolean;
        latencyMs: z.ZodNullable<z.ZodNumber>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    config: z.ZodObject<{
        executionMode: z.ZodNullable<z.ZodString>;
        fileStorageLocation: z.ZodNullable<z.ZodString>;
        sandboxMemoryLimitKb: z.ZodNullable<z.ZodNumber>;
        s3SignedUrls: z.ZodNullable<z.ZodBoolean>;
        s3Endpoint: z.ZodNullable<z.ZodString>;
        s3Region: z.ZodNullable<z.ZodString>;
        projectRateLimiterEnabled: z.ZodNullable<z.ZodBoolean>;
        defaultConcurrentJobsLimit: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>;
    apps: z.ZodObject<{
        count: z.ZodNumber;
        instances: z.ZodArray<z.ZodObject<{
            hostname: z.ZodString;
            version: z.ZodString;
            cpuCores: z.ZodNumber;
            cpuUsagePercentage: z.ZodNumber;
            ramTotalBytes: z.ZodNumber;
            ramUsagePercentage: z.ZodNumber;
            diskPercentage: z.ZodNumber;
            diskTotalBytes: z.ZodOptional<z.ZodNumber>;
            eventLoopDelayMs: z.ZodNumber;
            cpuStealPercentage: z.ZodOptional<z.ZodNumber>;
            cpuThrottledPercentage: z.ZodOptional<z.ZodNumber>;
            updated: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    workers: z.ZodObject<{
        count: z.ZodNumber;
        machines: z.ZodArray<z.ZodObject<{
            workerId: z.ZodString;
            cpuCores: z.ZodNumber;
            cpuUsagePercentage: z.ZodNumber;
            ramUsagePercentage: z.ZodNumber;
            serverPingMs: z.ZodNullable<z.ZodNumber>;
            status: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ReleaseHealth = z.infer<typeof ReleaseHealth>;
export type GetSystemHealthChecksResponse = z.infer<typeof GetSystemHealthChecksResponse>;
export type InfraCheck = z.infer<typeof InfraCheck>;
export type DeploymentConfig = z.infer<typeof DeploymentConfig>;
export type DiagnosticsWorker = z.infer<typeof DiagnosticsWorker>;
export type AppInstance = z.infer<typeof AppInstance>;
export type GetDiagnosticsResponse = z.infer<typeof GetDiagnosticsResponse>;
