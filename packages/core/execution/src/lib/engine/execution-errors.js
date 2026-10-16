"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiRouterEvaluationError = exports.SSRFBlockedError = exports.RequireError = exports.EngineGenericError = exports.WaitpointRejectedError = exports.FormulaEvaluationError = exports.InvalidScheduleIntervalError = exports.InvalidCronExpressionError = exports.VariableNotFoundError = exports.EngineFileNotFoundError = exports.FetchError = exports.FileSizeError = exports.PausedFlowTimeoutError = exports.FileStoreError = exports.StorageError = exports.StorageInvalidKeyError = exports.StorageLimitError = exports.ConnectionExpiredError = exports.ConnectionPieceMismatchError = exports.ConnectionLoadingError = exports.ConnectionNotFoundError = exports.ExecutionError = exports.ExecutionErrorType = void 0;
const core_piece_types_1 = require("@activepieces/core-piece-types");
var ExecutionErrorType;
(function (ExecutionErrorType) {
    ExecutionErrorType["ENGINE"] = "ENGINE";
    ExecutionErrorType["USER"] = "USER";
})(ExecutionErrorType || (exports.ExecutionErrorType = ExecutionErrorType = {}));
class ExecutionError extends Error {
    constructor(name, message, type, cause) {
        super(message);
        this.cause = cause;
        this.name = name;
        this.type = type;
    }
}
exports.ExecutionError = ExecutionError;
function formatMessage(message) {
    return JSON.stringify({
        message,
    }, null, 2);
}
class ConnectionNotFoundError extends ExecutionError {
    constructor(connectionName, cause) {
        super('ConnectionNotFound', formatMessage(`connection (${connectionName}) not found`), ExecutionErrorType.USER, cause);
    }
}
exports.ConnectionNotFoundError = ConnectionNotFoundError;
class ConnectionLoadingError extends ExecutionError {
    constructor(connectionName, cause) {
        super('ConnectionLoadingFailure', formatMessage(`Failed to load connection (${connectionName})`), ExecutionErrorType.USER, cause);
    }
}
exports.ConnectionLoadingError = ConnectionLoadingError;
class ConnectionPieceMismatchError extends ExecutionError {
    constructor(connectionName, pieceName, cause) {
        const message = pieceName === undefined
            ? `connection (${connectionName}) can't be used here: this step type has no piece identity to bind to`
            : `connection (${connectionName}) does not belong to piece (${pieceName})`;
        super('ConnectionPieceMismatch', formatMessage(message), ExecutionErrorType.USER, cause);
    }
}
exports.ConnectionPieceMismatchError = ConnectionPieceMismatchError;
class ConnectionExpiredError extends ExecutionError {
    constructor(connectionName, cause) {
        super('ConnectionExpired', formatMessage(`connection (${connectionName}) expired, reconnect again`), ExecutionErrorType.USER, cause);
    }
}
exports.ConnectionExpiredError = ConnectionExpiredError;
class StorageLimitError extends ExecutionError {
    constructor(key, maxStorageSizeInBytes, cause) {
        super('StorageLimitError', formatMessage(`Failed to read/write key "${key}", the value you are trying to read/write is larger than ${Math.floor(maxStorageSizeInBytes / 1024)} KB`), ExecutionErrorType.USER, cause);
        this.maxStorageSizeInBytes = maxStorageSizeInBytes;
    }
}
exports.StorageLimitError = StorageLimitError;
class StorageInvalidKeyError extends ExecutionError {
    constructor(key, cause) {
        super('StorageInvalidKeyError', formatMessage(`Failed to read/write key "${key}", the key is empty or longer than ${core_piece_types_1.STORE_KEY_MAX_LENGTH} characters`), ExecutionErrorType.USER, cause);
    }
}
exports.StorageInvalidKeyError = StorageInvalidKeyError;
class StorageError extends ExecutionError {
    constructor(key, cause) {
        super('StorageError', formatMessage(`Failed to read/write key "${key}" due to ${JSON.stringify(cause)}`), ExecutionErrorType.ENGINE, cause);
    }
}
exports.StorageError = StorageError;
class FileStoreError extends ExecutionError {
    constructor(cause) {
        super('FileStoreError', formatMessage(`Failed to store file due to ${JSON.stringify(cause)}`), ExecutionErrorType.ENGINE, cause);
    }
}
exports.FileStoreError = FileStoreError;
class PausedFlowTimeoutError extends ExecutionError {
    constructor(cause, maximumPauseDurationDays) {
        super('PausedFlowTimeoutError', `The flow cannot be paused for more than ${maximumPauseDurationDays} days`, ExecutionErrorType.USER, cause);
    }
}
exports.PausedFlowTimeoutError = PausedFlowTimeoutError;
class FileSizeError extends ExecutionError {
    constructor(currentFileSize, maximumSupportSize, cause) {
        super('FileSizeError', JSON.stringify({
            message: 'File size is larger than maximum supported size',
            currentFileSize: `${currentFileSize} MB`,
            maximumSupportSize: `${maximumSupportSize} MB`,
        }), ExecutionErrorType.USER, cause);
    }
}
exports.FileSizeError = FileSizeError;
class FetchError extends ExecutionError {
    constructor(url, cause) {
        super('FetchError', formatMessage(`Failed to fetch from ${url}`), ExecutionErrorType.ENGINE, cause);
    }
}
exports.FetchError = FetchError;
class EngineFileNotFoundError extends ExecutionError {
    constructor(fileId, cause) {
        super('EngineFileNotFound', formatMessage(`File (${fileId}) no longer exists`), ExecutionErrorType.USER, cause);
    }
}
exports.EngineFileNotFoundError = EngineFileNotFoundError;
class VariableNotFoundError extends ExecutionError {
    constructor(name, cause) {
        super('VariableNotFound', formatMessage(`variable (${name}) not found`), ExecutionErrorType.USER, cause);
    }
}
exports.VariableNotFoundError = VariableNotFoundError;
class InvalidCronExpressionError extends ExecutionError {
    constructor(cronExpression, cause) {
        super('InvalidCronExpressionError', formatMessage(`Invalid cron expression: ${cronExpression}`), ExecutionErrorType.USER, cause);
    }
}
exports.InvalidCronExpressionError = InvalidCronExpressionError;
class InvalidScheduleIntervalError extends ExecutionError {
    constructor(intervalMs, cause) {
        super('InvalidScheduleIntervalError', formatMessage(`Invalid schedule interval: ${intervalMs} ms`), ExecutionErrorType.USER, cause);
    }
}
exports.InvalidScheduleIntervalError = InvalidScheduleIntervalError;
class FormulaEvaluationError extends ExecutionError {
    constructor({ expression, message, cause }) {
        super('FormulaEvaluationError', formatMessage(`Formula error: ${message} (expression: ${expression})`), ExecutionErrorType.USER, cause);
    }
}
exports.FormulaEvaluationError = FormulaEvaluationError;
class WaitpointRejectedError extends ExecutionError {
    constructor(message, cause) {
        super('WaitpointRejectedError', formatMessage(message), ExecutionErrorType.USER, cause);
    }
}
exports.WaitpointRejectedError = WaitpointRejectedError;
class EngineGenericError extends ExecutionError {
    constructor(name, message, cause) {
        super(name, formatMessage(message), ExecutionErrorType.ENGINE, cause);
    }
}
exports.EngineGenericError = EngineGenericError;
class RequireError extends ExecutionError {
    constructor(piecePath, cause) {
        const causeMessage = cause instanceof Error ? cause.message : String(cause);
        super('RequireError', formatMessage(`Failed to require piece module at ${piecePath}: ${causeMessage}`), ExecutionErrorType.ENGINE, cause);
    }
}
exports.RequireError = RequireError;
class SSRFBlockedError extends ExecutionError {
    constructor({ host, ip, cause }) {
        super('SSRFBlockedError', formatMessage(`SSRF protection: refusing to connect to ${host} (resolved ${ip}) — private, loopback, link-local, or multicast address`), ExecutionErrorType.USER, cause);
    }
}
exports.SSRFBlockedError = SSRFBlockedError;
class AiRouterEvaluationError extends ExecutionError {
    constructor({ message, cause }) {
        super('AiRouterEvaluationError', formatMessage(message), ExecutionErrorType.USER, cause);
    }
}
exports.AiRouterEvaluationError = AiRouterEvaluationError;
//# sourceMappingURL=execution-errors.js.map