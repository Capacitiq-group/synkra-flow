import type { ApId, BaseModel, ProjectId } from '@activepieces/core-utils';
export type StoreEntryId = ApId;
export declare const STORE_KEY_MAX_LENGTH = 128;
export declare const STORE_VALUE_MAX_SIZE: number;
export type StoreEntry = {
    key: string;
    projectId: ProjectId;
    value: unknown;
} & BaseModel<StoreEntryId>;
