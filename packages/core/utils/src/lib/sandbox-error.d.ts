export declare const sandboxError: {
    build({ error, stdout, stderr }: BuildSandboxErrorParams): Error;
    payloadSource: string;
};
export type SandboxErrorPayload = {
    message: string;
    name?: string;
    stack?: string;
};
type BuildSandboxErrorParams = {
    error: SandboxErrorPayload | string | undefined;
    stdout: string;
    stderr: string;
};
export {};
