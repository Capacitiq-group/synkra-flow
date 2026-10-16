"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSyncPlan = exports.FlowProjectOperation = exports.FlowSyncError = exports.DiffState = exports.FolderOperation = exports.TableOperation = exports.ConnectionOperation = exports.ProjectOperation = exports.ProjectState = exports.FolderState = exports.TableState = exports.FieldState = exports.ConnectionState = exports.FlowState = exports.FolderOperationType = exports.TableOperationType = exports.ConnectionOperationType = exports.FlowProjectOperationType = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const table_1 = require("../tables/table");
var FlowProjectOperationType;
(function (FlowProjectOperationType) {
    FlowProjectOperationType["UPDATE_FLOW"] = "UPDATE_FLOW";
    FlowProjectOperationType["CREATE_FLOW"] = "CREATE_FLOW";
    FlowProjectOperationType["DELETE_FLOW"] = "DELETE_FLOW";
})(FlowProjectOperationType || (exports.FlowProjectOperationType = FlowProjectOperationType = {}));
var ConnectionOperationType;
(function (ConnectionOperationType) {
    ConnectionOperationType["UPDATE_CONNECTION"] = "UPDATE_CONNECTION";
    ConnectionOperationType["CREATE_CONNECTION"] = "CREATE_CONNECTION";
})(ConnectionOperationType || (exports.ConnectionOperationType = ConnectionOperationType = {}));
var TableOperationType;
(function (TableOperationType) {
    TableOperationType["UPDATE_TABLE"] = "UPDATE_TABLE";
    TableOperationType["CREATE_TABLE"] = "CREATE_TABLE";
    TableOperationType["DELETE_TABLE"] = "DELETE_TABLE";
})(TableOperationType || (exports.TableOperationType = TableOperationType = {}));
var FolderOperationType;
(function (FolderOperationType) {
    FolderOperationType["UPDATE_FOLDER"] = "UPDATE_FOLDER";
    FolderOperationType["CREATE_FOLDER"] = "CREATE_FOLDER";
    FolderOperationType["DELETE_FOLDER"] = "DELETE_FOLDER";
})(FolderOperationType || (exports.FolderOperationType = FolderOperationType = {}));
exports.FlowState = core_execution_1.PopulatedFlow;
exports.ConnectionState = zod_1.z.object({
    externalId: zod_1.z.string(),
    pieceName: zod_1.z.string(),
    displayName: zod_1.z.string(),
});
exports.FieldState = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    data: (0, core_utils_1.Nullable)(zod_1.z.object({
        options: zod_1.z.array(zod_1.z.object({
            value: zod_1.z.string(),
        })),
    })),
    externalId: zod_1.z.string(),
});
exports.TableState = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    externalId: zod_1.z.string(),
    fields: zod_1.z.array(exports.FieldState),
    status: (0, core_utils_1.NullableEnum)(table_1.TableAutomationStatus),
    trigger: (0, core_utils_1.NullableEnum)(table_1.TableAutomationTrigger),
});
exports.FolderState = zod_1.z.object({
    externalId: zod_1.z.string(),
    displayName: zod_1.z.string(),
    displayOrder: zod_1.z.number(),
});
exports.ProjectState = zod_1.z.object({
    flows: zod_1.z.array(core_execution_1.PopulatedFlow),
    // NOTE: This is optional because in old releases, the connections, tables, agents and mcp state is not present
    connections: zod_1.z.array(exports.ConnectionState).optional(),
    tables: zod_1.z.array(exports.TableState).optional(),
    folders: zod_1.z.array(exports.FolderState).optional(),
});
exports.ProjectOperation = zod_1.z.union([
    zod_1.z.object({
        type: zod_1.z.literal(FlowProjectOperationType.UPDATE_FLOW),
        newFlowState: exports.FlowState,
        flowState: exports.FlowState,
    }),
    zod_1.z.object({
        type: zod_1.z.literal(FlowProjectOperationType.CREATE_FLOW),
        flowState: exports.FlowState,
    }),
    zod_1.z.object({
        type: zod_1.z.literal(FlowProjectOperationType.DELETE_FLOW),
        flowState: exports.FlowState,
    }),
]);
exports.ConnectionOperation = zod_1.z.union([
    zod_1.z.object({
        type: zod_1.z.literal(ConnectionOperationType.UPDATE_CONNECTION),
        newConnectionState: exports.ConnectionState,
        connectionState: exports.ConnectionState,
    }),
    zod_1.z.object({
        type: zod_1.z.literal(ConnectionOperationType.CREATE_CONNECTION),
        connectionState: exports.ConnectionState,
    }),
]);
exports.TableOperation = zod_1.z.union([
    zod_1.z.object({
        type: zod_1.z.literal(TableOperationType.UPDATE_TABLE),
        newTableState: exports.TableState,
        tableState: exports.TableState,
    }),
    zod_1.z.object({
        type: zod_1.z.literal(TableOperationType.CREATE_TABLE),
        tableState: exports.TableState,
    }),
    zod_1.z.object({
        type: zod_1.z.literal(TableOperationType.DELETE_TABLE),
        tableState: exports.TableState,
    }),
]);
exports.FolderOperation = zod_1.z.union([
    zod_1.z.object({
        type: zod_1.z.literal(FolderOperationType.UPDATE_FOLDER),
        newFolderState: exports.FolderState,
        folderState: exports.FolderState,
    }),
    zod_1.z.object({
        type: zod_1.z.literal(FolderOperationType.CREATE_FOLDER),
        folderState: exports.FolderState,
    }),
    zod_1.z.object({
        type: zod_1.z.literal(FolderOperationType.DELETE_FOLDER),
        folderState: exports.FolderState,
    }),
]);
exports.DiffState = zod_1.z.object({
    flows: zod_1.z.array(exports.ProjectOperation),
    connections: zod_1.z.array(exports.ConnectionOperation),
    tables: zod_1.z.array(exports.TableOperation),
});
exports.FlowSyncError = zod_1.z.object({
    flowId: zod_1.z.string(),
    message: zod_1.z.string(),
});
exports.FlowProjectOperation = zod_1.z.union([
    zod_1.z.object({
        type: zod_1.z.literal(FlowProjectOperationType.CREATE_FLOW),
        flow: zod_1.z.object({
            id: zod_1.z.string(),
            displayName: zod_1.z.string(),
        }),
    }),
    zod_1.z.object({
        type: zod_1.z.literal(FlowProjectOperationType.UPDATE_FLOW),
        flow: zod_1.z.object({
            id: zod_1.z.string(),
            displayName: zod_1.z.string(),
        }),
        targetFlow: zod_1.z.object({
            id: zod_1.z.string(),
            displayName: zod_1.z.string(),
        }),
    }),
    zod_1.z.object({
        type: zod_1.z.literal(FlowProjectOperationType.DELETE_FLOW),
        flow: zod_1.z.object({
            id: zod_1.z.string(),
            displayName: zod_1.z.string(),
        }),
    }),
]);
exports.ProjectSyncPlan = zod_1.z.object({
    flows: zod_1.z.array(exports.FlowProjectOperation),
    connections: zod_1.z.array(exports.ConnectionOperation),
    tables: zod_1.z.array(exports.TableOperation),
    errors: zod_1.z.array(exports.FlowSyncError),
});
//# sourceMappingURL=project-state.js.map