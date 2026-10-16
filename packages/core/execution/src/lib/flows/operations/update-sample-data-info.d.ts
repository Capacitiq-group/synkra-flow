import { FlowVersion } from '../flow-version';
import { UpdateSampleDataInfoRequest } from '.';
declare const _updateSampleDataInfo: (flowVersion: FlowVersion, request: UpdateSampleDataInfoRequest) => {
    flowId: string;
    displayName: string;
    trigger: {
        type: import("@activepieces/shared").FlowTriggerType.EMPTY;
        settings: any;
        name: string;
        valid: boolean;
        displayName: string;
        lastUpdatedDate: string;
        nextAction?: any;
    } | {
        type: import("@activepieces/shared").FlowTriggerType.PIECE;
        settings: {
            propertySettings: Record<string, {
                type: import("@activepieces/shared").PropertyExecutionType;
                schema?: any;
            }>;
            pieceName: string;
            pieceVersion: string;
            input: Record<string, any>;
            sampleData?: {
                sampleDataFileId?: string | undefined;
                sampleDataInputFileId?: string | undefined;
                lastTestDate?: string | undefined;
            } | undefined;
            customLogoUrl?: string | undefined;
            triggerName?: string | undefined;
        };
        name: string;
        valid: boolean;
        displayName: string;
        lastUpdatedDate: string;
        nextAction?: any;
    };
    valid: boolean;
    agentIds: string[];
    state: import("../flow-version").FlowVersionState;
    connectionIds: string[];
    notes: {
        id: string;
        content: string;
        color: import("@activepieces/shared").NoteColorVariant;
        position: {
            x: number;
            y: number;
        };
        size: {
            width: number;
            height: number;
        };
        createdAt: string;
        updatedAt: string;
        ownerId?: string | null | undefined;
    }[];
    id: string;
    created: string;
    updated: string;
    updatedBy?: string | null | undefined;
    schemaVersion?: string | null | undefined;
    backupFiles?: Record<string, string> | null | undefined;
};
export { _updateSampleDataInfo };
