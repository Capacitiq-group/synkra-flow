type Contract = Record<string, (input: any) => any>;
type RpcSocket = {
    emit(event: string, ...args: unknown[]): unknown;
    on(event: string, listener: (...args: any[]) => void): unknown;
    timeout(ms: number): {
        emitWithAck(event: string, ...args: unknown[]): Promise<unknown>;
    };
};
type NotifySocket = Pick<RpcSocket, 'emit'>;
export declare function createRpcClient<T extends Contract>(socket: RpcSocket, timeout: RpcTimeout): T;
export declare function createRpcServer<T extends Contract>(socket: RpcSocket, handlers: T, log?: RpcLog): void;
export declare function createNotifyClient<T extends Contract>(socket: NotifySocket): T;
export declare function createNotifyServer<T extends Contract>(socket: RpcSocket, handlers: T, log?: RpcLog): void;
export declare function apErrorOf(error: unknown): RpcApError | undefined;
export declare class RpcTimeoutError extends Error {
    readonly method: string;
    readonly timeoutMs: number;
    constructor({ method, timeoutMs, cause }: {
        method: string;
        timeoutMs: number;
        cause: unknown;
    });
}
export type RpcTimeout = number | ((method: string) => number);
export type RpcApError = {
    code: string;
    entityType?: string;
    message?: string;
};
type RpcLog = {
    error(obj: unknown, msg: string): void;
};
export {};
