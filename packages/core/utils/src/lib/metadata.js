"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
const tslib_1 = require("tslib");
const z = tslib_1.__importStar(require("zod/mini"));
/**
 * Flexible key-value record type for storing arbitrary data
 *
 * The Metadata type provides a flexible way to store additional information
 * on various entities without requiring schema changes. It can be used for:
 * - Custom categorization
 * - Integration with external systems
 * - Environment-specific configurations
 * - Analytics and tracking information
 *
 * @example
 * // Example metadata for a project
 * const metadata = {
 *   department: "marketing",
 *   priority: 1,
 *   customField: "customValue"
 * }
 */
exports.Metadata = z.record(z.string(), z.unknown());
//# sourceMappingURL=metadata.js.map