"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDestination = exports.EventDestinationPlatformScope = void 0;
const tslib_1 = require("tslib");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const index_1 = require("../audit-events/index");
const dto_1 = require("./dto");
const EventDestinationBase = Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { platformId: zod_1.z.string(), events: zod_1.z.array(zod_1.z.enum(index_1.ApplicationEventName)), url: zod_1.z.url(), enabled: zod_1.z.boolean(), headers: dto_1.EventDestinationHeadersRequest.nullable(), format: zod_1.z.enum(dto_1.EventDestinationFormat) });
const EventDestinationProjectScope = zod_1.z.object(Object.assign(Object.assign({}, EventDestinationBase), { scope: zod_1.z.literal(dto_1.EventDestinationScope.PROJECT), projectId: zod_1.z.string() }));
exports.EventDestinationPlatformScope = zod_1.z.object(Object.assign(Object.assign({}, EventDestinationBase), { scope: zod_1.z.literal(dto_1.EventDestinationScope.PLATFORM) }));
exports.EventDestination = zod_1.z.discriminatedUnion('scope', [
    exports.EventDestinationPlatformScope,
    EventDestinationProjectScope,
]);
tslib_1.__exportStar(require("./dto"), exports);
//# sourceMappingURL=index.js.map