export declare class HttpError extends Error {
    private readonly requestBody;
    private readonly status;
    private readonly responseBody;
    constructor(requestBody: unknown, params: HttpErrorParams);
    errorMessage(): {
        response: {
            status: number;
            body: unknown;
        };
        request: {
            body: unknown;
        };
    };
    get response(): {
        status: number;
        body: unknown;
    };
    get request(): {
        body: unknown;
    };
}
export declare function toFailsafeOutput({ error, requestBody }: FailsafeOutputParams): {
    response: {
        status: number;
        body: unknown;
    };
    request: {
        body: unknown;
    };
};
export type HttpErrorParams = {
    status: number;
    responseBody: unknown;
};
export type FailsafeOutputParams = {
    error: unknown;
    requestBody: unknown;
};
