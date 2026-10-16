export declare const deno: {
    /**
     * Runs a program body in a one-shot Deno process. The body must assign its
     * output to a `result` variable. Resolves with the result, or rejects with
     * an Error carrying the process stdout/stderr.
     */
    run({ body, permissions, cwd, memoryLimitMb, allowReadPaths, resolveNodeModules, env, denoDirBase, timeoutMs }: DenoProgramParams): Promise<unknown>;
    createSession({ bootstrapBody, permissions, cwd, memoryLimitMb, env, idleTimeoutMs }: DenoSessionParams): Promise<DenoSession>;
};
export declare enum DenoPermission {
    ALL = "ALL",
    NET = "NET",
    ENV = "ENV",
    RUN = "RUN",
    SYS = "SYS",
    WRITE_TMP = "WRITE_TMP",
    READ_TMP = "READ_TMP"
}
type DenoProgramParams = {
    body: string;
    permissions: DenoPermission[];
    cwd?: string;
    memoryLimitMb?: number;
    allowReadPaths?: string[];
    resolveNodeModules?: boolean;
    env?: Record<string, string>;
    denoDirBase?: string;
    timeoutMs?: number;
};
export type DenoSession = {
    setGlobal(params: SessionSetGlobalParams): Promise<void>;
    run(params: SessionRunParams): Promise<unknown>;
    isAlive(): boolean;
    dispose(): void;
};
type DenoSessionParams = {
    bootstrapBody: string;
    permissions: DenoPermission[];
    cwd?: string;
    memoryLimitMb?: number;
    env?: Record<string, string>;
    idleTimeoutMs?: number;
};
type SessionSetGlobalParams = {
    key: string;
    value: unknown;
};
type SessionRunParams = {
    script: string;
};
export {};
