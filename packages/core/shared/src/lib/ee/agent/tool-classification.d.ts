declare function hasFailureTextPrefix(text: string): boolean;
declare function requiresActionPreview({ actionName, input, needsConfirmation, tainted }: {
    actionName: string;
    input?: Record<string, unknown>;
    needsConfirmation?: boolean;
    tainted?: boolean;
}): boolean;
declare function isReadActionName(actionName: string): boolean;
declare function isReadOnlyActionCall({ actionName, input }: {
    actionName: string;
    input?: Record<string, unknown>;
}): boolean;
declare function isWriteActionName(actionName: string): boolean;
declare function readOnlyRejection(actionName: string): {
    success: false;
    error: string;
};
export declare const agentToolClassification: {
    requiresActionPreview: typeof requiresActionPreview;
    isReadActionName: typeof isReadActionName;
    isReadOnlyActionCall: typeof isReadOnlyActionCall;
    isWriteActionName: typeof isWriteActionName;
    readOnlyRejection: typeof readOnlyRejection;
    hasFailureTextPrefix: typeof hasFailureTextPrefix;
};
export {};
