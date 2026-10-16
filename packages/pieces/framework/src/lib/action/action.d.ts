import * as z from "zod/mini";
import { ActionContext } from '../context';
import type { OutputSchema } from '../output-schema';
import { ActionBase, Audience, AiMetadata, ActionClassification, PropertyGroup } from '../piece-metadata';
import { InputPropertyMap } from '../property';
import { ExtractPieceAuthPropertyTypeForMethods, PieceAuthProperty } from '../property/authentication';
export type ActionRunner<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = PieceAuthProperty, ActionProps extends InputPropertyMap = InputPropertyMap> = (ctx: ActionContext<PieceAuth, ActionProps>) => Promise<unknown | void>;
export declare const ErrorHandlingOptionsParam: z.ZodMiniObject<{
    retryOnFailure: z.ZodMiniObject<{
        defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>;
    continueOnFailure: z.ZodMiniObject<{
        defaultValue: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
        hide: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export type ErrorHandlingOptionsParam = z.infer<typeof ErrorHandlingOptionsParam>;
type CreateActionParams<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined, ActionProps extends InputPropertyMap> = {
    /**
     * A dummy parameter used to infer {@code PieceAuth} type
     */
    name: string;
    /**
     * this parameter is used to infer the type of the piece auth value in run and test methods
     */
    auth?: PieceAuth;
    displayName: string;
    description: string;
    props: ActionProps;
    propertyGroups?: PropertyGroup[];
    run: ActionRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, ActionProps>;
    test?: ActionRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, ActionProps>;
    requireAuth?: boolean;
    errorHandlingOptions?: ErrorHandlingOptionsParam;
    outputSchema?: OutputSchema;
    audience?: Audience;
    aiMetadata?: AiMetadata;
    classification?: ActionClassification;
};
export declare class IAction<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = any, ActionProps extends InputPropertyMap = InputPropertyMap> implements ActionBase {
    readonly name: string;
    readonly displayName: string;
    readonly description: string;
    readonly props: ActionProps;
    readonly propertyGroups: PropertyGroup[] | undefined;
    readonly run: ActionRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, ActionProps>;
    readonly test: ActionRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, ActionProps>;
    readonly requireAuth: boolean;
    readonly errorHandlingOptions: ErrorHandlingOptionsParam;
    readonly outputSchema?: OutputSchema | undefined;
    readonly audience?: Audience | undefined;
    readonly aiMetadata?: AiMetadata | undefined;
    readonly classification?: ActionClassification | undefined;
    constructor(name: string, displayName: string, description: string, props: ActionProps, propertyGroups: PropertyGroup[] | undefined, run: ActionRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, ActionProps>, test: ActionRunner<ExtractPieceAuthPropertyTypeForMethods<PieceAuth>, ActionProps>, requireAuth: boolean, errorHandlingOptions: ErrorHandlingOptionsParam, outputSchema?: OutputSchema | undefined, audience?: Audience | undefined, aiMetadata?: AiMetadata | undefined, classification?: ActionClassification | undefined);
}
export type Action<PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = any, ActionProps extends InputPropertyMap = any> = IAction<PieceAuth, ActionProps>;
export declare const createAction: <PieceAuth extends PieceAuthProperty | PieceAuthProperty[] | undefined = PieceAuthProperty, ActionProps extends InputPropertyMap = any>(params: CreateActionParams<PieceAuth, ActionProps>) => IAction<PieceAuth, ActionProps>;
export {};
