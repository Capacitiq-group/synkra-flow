import { ApId } from '@activepieces/core-utils';
import * as z from 'zod/mini';
import { PackageType, PieceType } from './piece';
import { TriggerStrategy } from './trigger';
export declare const STORE_KEY_MAX_LENGTH = 128;
export declare const EXACT_VERSION_PATTERN = "^[0-9]+\\.[0-9]+\\.[0-9]+$";
export declare const EXACT_VERSION_REGEX: RegExp;
export declare const ExactVersionType: z.ZodMiniString<string>;
export declare const VersionType: z.ZodMiniString<string>;
export declare const PrivatePiecePackage: z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.ARCHIVE>;
    pieceType: z.ZodMiniEnum<typeof PieceType>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    archiveId: z.ZodMiniString<string>;
    platformId: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type PrivatePiecePackage = z.infer<typeof PrivatePiecePackage>;
export declare const OfficialPiecePackage: z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.REGISTRY>;
    pieceType: z.ZodMiniLiteral<PieceType.OFFICIAL>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type OfficialPiecePackage = z.infer<typeof OfficialPiecePackage>;
export declare const CustomNpmPiecePackage: z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.REGISTRY>;
    pieceType: z.ZodMiniLiteral<PieceType.CUSTOM>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    platformId: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export type CustomNpmPiecePackage = z.infer<typeof CustomNpmPiecePackage>;
export declare const PublicPiecePackage: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.REGISTRY>;
    pieceType: z.ZodMiniLiteral<PieceType.OFFICIAL>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.REGISTRY>;
    pieceType: z.ZodMiniLiteral<PieceType.CUSTOM>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    platformId: z.ZodMiniString<string>;
}, z.z.core.$strip>]>;
export type PublicPiecePackage = OfficialPiecePackage | CustomNpmPiecePackage;
export declare const PiecePackage: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.ARCHIVE>;
    pieceType: z.ZodMiniEnum<typeof PieceType>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    archiveId: z.ZodMiniString<string>;
    platformId: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.REGISTRY>;
    pieceType: z.ZodMiniLiteral<PieceType.OFFICIAL>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    packageType: z.ZodMiniLiteral<PackageType.REGISTRY>;
    pieceType: z.ZodMiniLiteral<PieceType.CUSTOM>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    platformId: z.ZodMiniString<string>;
}, z.z.core.$strip>]>;
export type PiecePackage = PrivatePiecePackage | OfficialPiecePackage | CustomNpmPiecePackage;
export declare enum TriggerSourceScheduleType {
    CRON_EXPRESSION = "CRON_EXPRESSION",
    INTERVAL = "INTERVAL"
}
export declare const ScheduleOptions: z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
    type: z.ZodMiniLiteral<TriggerSourceScheduleType.CRON_EXPRESSION>;
    cronExpression: z.ZodMiniString<string>;
    timezone: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    type: z.ZodMiniLiteral<TriggerSourceScheduleType.INTERVAL>;
    intervalMs: z.ZodMiniNumberFormat;
}, z.z.core.$strip>], "type">;
export type ScheduleOptions = z.infer<typeof ScheduleOptions>;
export declare const TriggerSource: z.ZodMiniObject<{
    type: z.ZodMiniEnum<typeof TriggerStrategy>;
    projectId: z.ZodMiniString<string>;
    flowId: z.ZodMiniString<string>;
    triggerName: z.ZodMiniString<string>;
    schedule: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniDiscriminatedUnion<[z.ZodMiniObject<{
        type: z.ZodMiniLiteral<TriggerSourceScheduleType.CRON_EXPRESSION>;
        cronExpression: z.ZodMiniString<string>;
        timezone: z.ZodMiniString<string>;
    }, z.z.core.$strip>, z.ZodMiniObject<{
        type: z.ZodMiniLiteral<TriggerSourceScheduleType.INTERVAL>;
        intervalMs: z.ZodMiniNumberFormat;
    }, z.z.core.$strip>], "type">>>;
    flowVersionId: z.ZodMiniString<string>;
    pieceName: z.ZodMiniString<string>;
    pieceVersion: z.ZodMiniString<string>;
    deleted: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    simulate: z.ZodMiniBoolean<boolean>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type TriggerSource = z.infer<typeof TriggerSource>;
export type FileId = ApId;
export declare enum FileType {
    UNKNOWN = "UNKNOWN",
    FLOW_RUN_LOG = "FLOW_RUN_LOG",
    FLOW_RUN_LOG_SLICE = "FLOW_RUN_LOG_SLICE",
    PACKAGE_ARCHIVE = "PACKAGE_ARCHIVE",
    FLOW_STEP_FILE = "FLOW_STEP_FILE",
    SAMPLE_DATA = "SAMPLE_DATA",
    TRIGGER_PAYLOAD = "TRIGGER_PAYLOAD",
    SAMPLE_DATA_INPUT = "SAMPLE_DATA_INPUT",
    TRIGGER_EVENT_FILE = "TRIGGER_EVENT_FILE",
    PROJECT_RELEASE = "PROJECT_RELEASE",
    FLOW_VERSION_BACKUP = "FLOW_VERSION_BACKUP",
    PLATFORM_ASSET = "PLATFORM_ASSET",
    USER_PROFILE_PICTURE = "USER_PROFILE_PICTURE",
    WEBHOOK_PAYLOAD = "WEBHOOK_PAYLOAD",
    MCP_CALL_PAYLOAD = "MCP_CALL_PAYLOAD",
    KNOWLEDGE_BASE = "KNOWLEDGE_BASE",
    FLOW_BUNDLE = "FLOW_BUNDLE",
    PREWARM_SCOPE = "PREWARM_SCOPE"
}
export declare enum FileCompression {
    NONE = "NONE",
    ZSTD = "ZSTD"
}
export declare enum FileLocation {
    S3 = "S3",
    DB = "DB"
}
export declare const File: z.ZodMiniObject<{
    projectId: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    platformId: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    type: z.ZodMiniEnum<typeof FileType>;
    compression: z.ZodMiniEnum<typeof FileCompression>;
    data: z.ZodMiniOptional<z.ZodMiniUnknown>;
    location: z.ZodMiniEnum<typeof FileLocation>;
    size: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniNumber<number>>>;
    fileName: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    s3Key: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    metadata: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniString<string>>>>;
    id: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
}, z.z.core.$strip>;
export type File = z.infer<typeof File> & {
    data: Buffer;
};
export declare enum PlatformRole {
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
    OPERATOR = "OPERATOR"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare const UserWithMetaInformation: z.ZodMiniObject<{
    id: z.ZodMiniString<string>;
    email: z.ZodMiniString<string>;
    firstName: z.ZodMiniString<string>;
    status: z.ZodMiniEnum<typeof UserStatus>;
    externalId: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    platformId: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
    platformRole: z.ZodMiniEnum<typeof PlatformRole>;
    lastName: z.ZodMiniString<string>;
    created: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    updated: z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>;
    lastActiveDate: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniPipe<z.ZodMiniTransform<unknown, unknown>, z.ZodMiniString<string>>>>;
    imageUrl: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniString<string>>>;
}, z.z.core.$strip>;
export type UserWithMetaInformation = z.infer<typeof UserWithMetaInformation>;
