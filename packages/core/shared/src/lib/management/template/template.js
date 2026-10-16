"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedTemplate = exports.Template = exports.TableTemplate = exports.TableDataState = exports.TableImportDataType = exports.TemplateStatus = exports.FlowVersionTemplate = exports.TemplateType = exports.TemplateTag = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
exports.TemplateTag = zod_1.z.object({
    title: zod_1.z.string(),
    color: core_utils_1.ColorHex,
    icon: zod_1.z.string().optional(),
});
var TemplateType;
(function (TemplateType) {
    TemplateType["OFFICIAL"] = "OFFICIAL";
    TemplateType["SHARED"] = "SHARED";
    TemplateType["CUSTOM"] = "CUSTOM";
})(TemplateType || (exports.TemplateType = TemplateType = {}));
exports.FlowVersionTemplate = core_execution_1.FlowVersion.omit({
    id: true,
    created: true,
    updated: true,
    flowId: true,
    state: true,
    updatedBy: true,
    agentIds: true,
    connectionIds: true,
    backupFiles: true,
    notes: true,
}).extend({
    description: zod_1.z.string().optional(),
    //notes were optional for old json templates
    notes: zod_1.z.array(core_execution_1.Note).optional(),
});
var TemplateStatus;
(function (TemplateStatus) {
    TemplateStatus["PUBLISHED"] = "PUBLISHED";
    TemplateStatus["ARCHIVED"] = "ARCHIVED";
})(TemplateStatus || (exports.TemplateStatus = TemplateStatus = {}));
var TableImportDataType;
(function (TableImportDataType) {
    TableImportDataType["CSV"] = "CSV";
})(TableImportDataType || (exports.TableImportDataType = TableImportDataType = {}));
exports.TableDataState = zod_1.z.object({
    type: zod_1.z.nativeEnum(TableImportDataType),
    rows: zod_1.z.array(zod_1.z.array(zod_1.z.object({
        fieldId: zod_1.z.string(),
        value: zod_1.z.string(),
    }))),
});
exports.TableTemplate = zod_1.z.object({
    name: zod_1.z.string(),
    externalId: zod_1.z.string(),
    fields: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string(),
        type: zod_1.z.string(),
        data: zod_1.z.object({
            options: zod_1.z.array(zod_1.z.object({
                value: zod_1.z.string(),
            })),
        }).nullable().optional(),
        externalId: zod_1.z.string(),
    })),
    status: (0, core_utils_1.Nullable)(zod_1.z.string()),
    trigger: (0, core_utils_1.Nullable)(zod_1.z.string()),
    data: (0, core_utils_1.Nullable)(exports.TableDataState),
});
exports.Template = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { name: zod_1.z.string(), type: zod_1.z.nativeEnum(TemplateType), summary: zod_1.z.string(), description: zod_1.z.string(), tags: zod_1.z.array(exports.TemplateTag), blogUrl: (0, core_utils_1.Nullable)(zod_1.z.string()), metadata: (0, core_utils_1.Nullable)(core_utils_1.Metadata), author: zod_1.z.string(), categories: zod_1.z.array(zod_1.z.string()), pieces: zod_1.z.array(zod_1.z.string()), platformId: (0, core_utils_1.Nullable)(zod_1.z.string()), flows: zod_1.z.array(exports.FlowVersionTemplate).optional(), tables: zod_1.z.array(exports.TableTemplate).optional(), status: zod_1.z.nativeEnum(TemplateStatus) }));
exports.SharedTemplate = exports.Template.omit({ platformId: true, id: true, created: true, updated: true });
//# sourceMappingURL=template.js.map