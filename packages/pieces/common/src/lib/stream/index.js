"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamUtils = void 0;
const tslib_1 = require("tslib");
const node_stream_1 = require("node:stream");
function toStreamingBody(file) {
    if ('body' in file) {
        return { body: file.body, size: file.size };
    }
    return { body: node_stream_1.Readable.from(file.data), size: file.data.length };
}
function readChunks(_a) {
    return tslib_1.__asyncGenerator(this, arguments, function* readChunks_1({ readable, chunkSize, }) {
        var _b, e_1, _c, _d;
        let pending = [];
        let pendingLength = 0;
        try {
            for (var _e = true, readable_1 = tslib_1.__asyncValues(readable), readable_1_1; readable_1_1 = yield tslib_1.__await(readable_1.next()), _b = readable_1_1.done, !_b; _e = true) {
                _d = readable_1_1.value;
                _e = false;
                const data = _d;
                pending.push(Buffer.isBuffer(data) ? data : Buffer.from(data));
                pendingLength += pending[pending.length - 1].length;
                while (pendingLength >= chunkSize) {
                    const combined = pending.length === 1 ? pending[0] : Buffer.concat(pending);
                    yield yield tslib_1.__await(combined.subarray(0, chunkSize));
                    const rest = combined.subarray(chunkSize);
                    pending = rest.length > 0 ? [rest] : [];
                    pendingLength = rest.length;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_e && !_b && (_c = readable_1.return)) yield tslib_1.__await(_c.call(readable_1));
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (pendingLength > 0) {
            yield yield tslib_1.__await(pending.length === 1 ? pending[0] : Buffer.concat(pending));
        }
    });
}
exports.streamUtils = { readChunks, toStreamingBody };
//# sourceMappingURL=index.js.map