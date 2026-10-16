import * as z from "zod/mini";
import { OnStartContext, TestOrRunHookContext, TriggerHookContext } from '../context';
import type { OutputSchema } from '../output-schema';
import { ActionClassification, AiMetadata, PropertyGroup, TriggerBase } from '../piece-metadata';
import { InputPropertyMap } from '../property';
import { ExtractPieceAuthPropertyTypeForMethods, PieceAuthProperty } from '../property/authentication';
import { TriggerStrategy, TriggerTestStrategy, WebhookHandshakeConfiguration } from '@activepieces/core-piece-types';
export { TriggerStrategy };
export declare const DEDUPE_KEY_PROPERTY = "_dedupe_key";
export declare enum WebhookRenewStrategy {
    CRON = "CRON",
    NONE = "NONE"
}
type OnStartRunner<PieceAuth extends PieceAuthProperty | undefined, TriggerProps extends InputPropertyMap> = (ctx: OnStartContext<PieceAuth, TriggerProps>) => Promise<unknown | void>;
export declare const WebhookRenewConfiguration: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
    strategy: z.ZodMiniLiteral<WebhookRenewStrategy.CRON>;
    cronExpression: z.ZodMiniString<string>;
}, z.z.core.$strip>, z.ZodMiniObject<{
    strategy: z.ZodMiniLiteral<WebhookRenewStrategy.NONE>;
}, z.z.core.$strip>]>;
export type WebhookRenewConfiguration = z.infer<typeof WebhookRenewConfiguration>;
export interface WebhookResponse {
    status: number;
    body?: unknown;
    headers?: Record<string, string>;
}
type BaseTriggerParams<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, TriggerProps extends InputPropertyMap, TS extends TriggerStrategy> = {
    name: string;
    displayName: string;
    description: string;
    requireAuth?: boolean;
    auth?: PieceAuth;
    props: TriggerProps;
    propertyGroups?: PropertyGroup[];
    type: TS;
    onEnable: (context: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>;
    onDisable: (context: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>;
    run: (context: TestOrRunHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<unknown[]>;
    test?: (context: TestOrRunHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<unknown[]>;
    onStart?: OnStartRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps>;
    sampleData: unknown;
    outputSchema?: OutputSchema;
    aiMetadata?: AiMetadata;
    classification?: ActionClassification;
};
type WebhookTriggerParams<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, TriggerProps extends InputPropertyMap, TS extends TriggerStrategy> = BaseTriggerParams<PieceAuth, TriggerProps, TS> & {
    handshakeConfiguration?: WebhookHandshakeConfiguration;
    onHandshake?: (context: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<WebhookResponse>;
    renewConfiguration?: WebhookRenewConfiguration;
    onRenew?(context: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>): Promise<void>;
};
type CreateTriggerParams<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, TriggerProps extends InputPropertyMap, TS extends TriggerStrategy> = TS extends TriggerStrategy.WEBHOOK ? WebhookTriggerParams<PieceAuth, TriggerProps, TS> : BaseTriggerParams<PieceAuth, TriggerProps, TS>;
export declare class ITrigger<TS extends TriggerStrategy, PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, TriggerProps extends InputPropertyMap> implements TriggerBase {
    readonly name: string;
    readonly displayName: string;
    readonly description: string;
    readonly requireAuth: boolean;
    readonly props: TriggerProps;
    readonly type: TS;
    readonly handshakeConfiguration: WebhookHandshakeConfiguration;
    readonly onHandshake: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<WebhookResponse>;
    readonly renewConfiguration: WebhookRenewConfiguration;
    readonly onRenew: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>;
    readonly onEnable: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>;
    readonly onDisable: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>;
    readonly onStart: OnStartRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps>;
    readonly run: (ctx: TestOrRunHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<unknown[]>;
    readonly test: (ctx: TestOrRunHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<unknown[]>;
    readonly sampleData: unknown;
    readonly testStrategy: TriggerTestStrategy;
    readonly outputSchema?: OutputSchema | undefined;
    readonly aiMetadata?: AiMetadata | undefined;
    readonly classification?: ActionClassification | undefined;
    readonly propertyGroups?: PropertyGroup[] | undefined;
    constructor(name: string, displayName: string, description: string, requireAuth: boolean, props: TriggerProps, type: TS, handshakeConfiguration: WebhookHandshakeConfiguration, onHandshake: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<WebhookResponse>, renewConfiguration: WebhookRenewConfiguration, onRenew: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>, onEnable: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>, onDisable: (ctx: TriggerHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<void>, onStart: OnStartRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps>, run: (ctx: TestOrRunHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<unknown[]>, test: (ctx: TestOrRunHookContext<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, TriggerProps, TS>) => Promise<unknown[]>, sampleData: unknown, testStrategy: TriggerTestStrategy, outputSchema?: OutputSchema | undefined, aiMetadata?: AiMetadata | undefined, classification?: ActionClassification | undefined, propertyGroups?: PropertyGroup[] | undefined);
}
export type Trigger<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = any, TriggerProps extends InputPropertyMap = any, S extends TriggerStrategy = any> = ITrigger<S, PieceAuth, TriggerProps>;
export declare const createTrigger: <TS extends TriggerStrategy, PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, TriggerProps extends InputPropertyMap>(params: CreateTriggerParams<PieceAuth, TriggerProps, TS>) => ITrigger<TriggerStrategy.WEBHOOK, PieceAuth, TriggerProps> | ITrigger<TriggerStrategy.POLLING, PieceAuth, TriggerProps> | ITrigger<TriggerStrategy.MANUAL, PieceAuth, TriggerProps> | ITrigger<TriggerStrategy.APP_WEBHOOK, PieceAuth, TriggerProps>;
