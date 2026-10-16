"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
exports.toFailsafeOutput = toFailsafeOutput;
class HttpError extends Error {
    constructor(requestBody, params) {
        const status = params.status || 500;
        const responseBody = Buffer.isBuffer(params.responseBody) ? params.responseBody.toString() : params.responseBody;
        super(JSON.stringify({
            response: {
                status: status,
                body: responseBody,
            },
            request: {
                body: requestBody,
            },
        }));
        this.requestBody = requestBody;
        this.status = status;
        this.responseBody = responseBody;
    }
    errorMessage() {
        return {
            response: {
                status: this.status,
                body: this.responseBody,
            },
            request: {
                body: this.requestBody,
            },
        };
    }
    get response() {
        return {
            status: this.status,
            body: this.responseBody,
        };
    }
    get request() {
        return {
            body: this.requestBody,
        };
    }
}
exports.HttpError = HttpError;
function toFailsafeOutput({ error, requestBody }) {
    if (error instanceof HttpError) {
        return error.errorMessage();
    }
    return {
        response: {
            status: 0,
            body: error instanceof Error ? error.message : String(error),
        },
        request: {
            body: requestBody,
        },
    };
}
//# sourceMappingURL=http-error.js.map