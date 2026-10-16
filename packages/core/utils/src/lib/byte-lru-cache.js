"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createByteLruCache = createByteLruCache;
const utils_1 = require("./utils");
function createByteLruCache({ budgetBytes }) {
    const entries = new Map();
    let totalBytes = 0;
    return {
        get: (key) => {
            const entry = entries.get(key);
            if ((0, utils_1.isNil)(entry)) {
                return undefined;
            }
            entries.delete(key);
            entries.set(key, entry);
            return entry.value;
        },
        set: ({ key, value, sizeBytes }) => {
            const existing = entries.get(key);
            if (!(0, utils_1.isNil)(existing)) {
                entries.delete(key);
                totalBytes -= existing.sizeBytes;
            }
            if (sizeBytes > budgetBytes) {
                return;
            }
            entries.set(key, { value, sizeBytes });
            totalBytes += sizeBytes;
            for (const [oldestKey, oldest] of entries) {
                if (totalBytes <= budgetBytes) {
                    break;
                }
                entries.delete(oldestKey);
                totalBytes -= oldest.sizeBytes;
            }
        },
    };
}
//# sourceMappingURL=byte-lru-cache.js.map