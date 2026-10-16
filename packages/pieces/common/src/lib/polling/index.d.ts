import { AppConnectionValueForAuthProperty, FilesService, ServerContext, Store } from '@activepieces/pieces-framework';
interface TimebasedPolling<AuthValue, PropsValue> {
    strategy: DedupeStrategy.TIMEBASED;
    items: (params: {
        auth: AuthValue;
        store: Store;
        propsValue: PropsValue;
        lastFetchEpochMS: number;
        server?: ServerContext;
    }) => Promise<{
        epochMilliSeconds: number;
        data: unknown;
    }[]>;
}
interface LastItemPolling<AuthValue extends AppConnectionValueForAuthProperty<any>, PropsValue> {
    strategy: DedupeStrategy.LAST_ITEM;
    items: (params: {
        auth: AuthValue;
        store: Store;
        files?: FilesService;
        propsValue: PropsValue;
        lastItemId: unknown;
        server?: ServerContext;
    }) => Promise<{
        id: unknown;
        data: unknown;
    }[]>;
}
export declare enum DedupeStrategy {
    TIMEBASED = 0,
    LAST_ITEM = 1
}
export type Polling<AuthValue extends AppConnectionValueForAuthProperty<any>, PropsValue> = TimebasedPolling<AuthValue, PropsValue> | LastItemPolling<AuthValue, PropsValue>;
export declare const pollingHelper: {
    poll<AuthValue extends AppConnectionValueForAuthProperty<any>, PropsValue>(polling: Polling<AuthValue, PropsValue>, { store, auth, propsValue, maxItemsToPoll, files, server, }: {
        store: Store;
        auth: AuthValue;
        propsValue: PropsValue;
        files: FilesService;
        maxItemsToPoll?: number;
        server?: ServerContext;
    }): Promise<unknown[]>;
    onEnable<AuthValue extends AppConnectionValueForAuthProperty<any>, PropsValue>(polling: Polling<AuthValue, PropsValue>, { store, auth, propsValue, server, isRepublish, }: {
        store: Store;
        auth: AuthValue;
        propsValue: PropsValue;
        server?: ServerContext;
        isRepublish?: boolean;
    }): Promise<void>;
    onDisable<AuthValue extends AppConnectionValueForAuthProperty<any>, PropsValue>(polling: Polling<AuthValue, PropsValue>, params: {
        store: Store;
        auth: AuthValue;
        propsValue: PropsValue;
    }): Promise<void>;
    test<AuthValue extends AppConnectionValueForAuthProperty<any>, PropsValue>(polling: Polling<AuthValue, PropsValue>, { auth, propsValue, store, files, server, }: {
        store: Store;
        auth: AuthValue;
        propsValue: PropsValue;
        files: FilesService;
        server?: ServerContext;
    }): Promise<unknown[]>;
};
export {};
