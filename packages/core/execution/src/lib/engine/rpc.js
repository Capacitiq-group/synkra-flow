"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcTimeoutError = void 0;
exports.createRpcClient = createRpcClient;
exports.createRpcServer = createRpcServer;
exports.createNotifyClient = createNotifyClient;
exports.createNotifyServer = createNotifyServer;
exports.apErrorOf = apErrorOf;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const RPC_EVENT = 'rpc';
const NOTIFY_EVENT = 'rpc-notify';
const AP_ERROR_PROP = 'apError';
function createRpcClient(socket, timeout) {
    return new Proxy({}, {
        get(_target, method) {
            return (payload) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const timeoutMs = typeof timeout === 'function' ? timeout(method) : timeout;
                try {
                    const result = yield socket.timeout(timeoutMs).emitWithAck(RPC_EVENT, { method, payload });
                    if (isRpcErrorEnvelope(result)) {
                        throw Object.assign(new Error(`RPC [${method}] handler threw: ${result.__rpcError}`), (0, core_utils_1.spreadIfNotUndefined)(AP_ERROR_PROP, result.__rpcApError));
                    }
                    return result;
                }
                catch (error) {
                    if (error instanceof Error && error.message.startsWith('RPC [')) {
                        throw error;
                    }
                    throw new RpcTimeoutError({ method, timeoutMs, cause: error });
                }
            });
        },
    });
}
function createRpcServer(socket, handlers, log) {
    socket.on(RPC_EVENT, (msg, ack) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const handler = handlers[msg.method];
        try {
            const result = yield handler(msg.payload);
            ack(result);
        }
        catch (error) {
            log === null || log === void 0 ? void 0 : log.error({ error, rpc: { method: msg.method } }, 'RPC handler threw');
            ack(Object.assign({ __rpcError: (0, core_utils_1.toError)(error).message }, (0, core_utils_1.spreadIfNotUndefined)('__rpcApError', apErrorOf(error))));
        }
    }));
}
function createNotifyClient(socket) {
    return new Proxy({}, {
        get(_target, method) {
            return (payload) => {
                socket.emit(NOTIFY_EVENT, { method, payload });
            };
        },
    });
}
function createNotifyServer(socket, handlers, log) {
    socket.on(NOTIFY_EVENT, (msg) => {
        const handler = handlers[msg === null || msg === void 0 ? void 0 : msg.method];
        if (typeof handler !== 'function') {
            log === null || log === void 0 ? void 0 : log.error({ rpc: { method: String(msg === null || msg === void 0 ? void 0 : msg.method) } }, 'Notify received for unknown method, ignoring');
            return;
        }
        handler(msg === null || msg === void 0 ? void 0 : msg.payload);
    });
}
function apErrorOf(error) {
    const source = error instanceof core_utils_1.ActivepiecesError ? error.error : (0, core_utils_1.isObject)(error) ? error[AP_ERROR_PROP] : undefined;
    if (!(0, core_utils_1.isObject)(source) || typeof source['code'] !== 'string') {
        return undefined;
    }
    const params = (0, core_utils_1.isObject)(source['params']) ? source['params'] : source;
    const entityType = params['entityType'];
    const message = params['message'];
    return Object.assign(Object.assign({ code: source['code'] }, (0, core_utils_1.spreadIfNotUndefined)('entityType', typeof entityType === 'string' ? entityType : undefined)), (0, core_utils_1.spreadIfNotUndefined)('message', typeof message === 'string' ? message : undefined));
}
function isRpcErrorEnvelope(value) {
    return (0, core_utils_1.isObject)(value) && '__rpcError' in value;
}
class RpcTimeoutError extends Error {
    constructor({ method, timeoutMs, cause }) {
        super(`RPC [${method}] failed (timeout: ${timeoutMs}ms): ${(0, core_utils_1.toError)(cause).message}`);
        this.method = method;
        this.timeoutMs = timeoutMs;
    }
}
exports.RpcTimeoutError = RpcTimeoutError;
//# sourceMappingURL=rpc.js.map