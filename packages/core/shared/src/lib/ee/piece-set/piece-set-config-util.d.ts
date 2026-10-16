import { PieceSelectionMode, PieceSetConfig, RequiredActionsMode, UpdatePieceSetRequestBody } from './index';
declare function buildDefaultSet(platformId: string): {
    id: string;
    platformId: string;
    name: string;
    key: string;
    isDefault: boolean;
    generatedForProjectId: null;
    config: {
        pieces: {
            mode: PieceSelectionMode;
            exceptions: string[];
        };
        selectedActions: Record<string, string[]>;
        selectedTriggers: Record<string, string[]>;
        requiredActions: {
            mode: RequiredActionsMode;
            actions: Record<string, string[]>;
        };
    };
};
declare function emptyConfig(): PieceSetConfig;
declare function applyUpdate({ current, request }: {
    current: PieceSetConfig;
    request: UpdatePieceSetRequestBody;
}): PieceSetConfig;
export declare const pieceSetConfigUtil: {
    buildDefaultSet: typeof buildDefaultSet;
    emptyConfig: typeof emptyConfig;
    applyUpdate: typeof applyUpdate;
};
export {};
