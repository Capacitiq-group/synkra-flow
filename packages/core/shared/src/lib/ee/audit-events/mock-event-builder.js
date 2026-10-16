"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMockEvent = void 0;
const core_execution_1 = require("@activepieces/core-execution");
const core_utils_1 = require("@activepieces/core-utils");
const index_1 = require("./index");
const buildMockEvent = ({ event, platformId, projectId }) => {
    const isoNow = new Date().toISOString();
    const project = { displayName: 'Dream Department' };
    const user = {
        id: (0, core_utils_1.apId)(),
        email: 'sample@example.com',
        firstName: 'Sample',
        lastName: 'User',
    };
    const workerEnvelope = {
        id: (0, core_utils_1.apId)(),
        created: isoNow,
        updated: isoNow,
        platformId,
        projectId,
    };
    const baseEnvelope = Object.assign(Object.assign({}, workerEnvelope), { ip: '127.0.0.1', userId: user.id, userEmail: user.email, projectDisplayName: project.displayName });
    const flow = { id: (0, core_utils_1.apId)(), externalId: (0, core_utils_1.apId)(), created: isoNow, updated: isoNow };
    const flowVersion = {
        id: (0, core_utils_1.apId)(),
        displayName: 'Sample flow',
        flowId: flow.id,
        created: isoNow,
        updated: isoNow,
    };
    switch (event) {
        case index_1.ApplicationEventName.FLOW_RUN_STARTED:
        case index_1.ApplicationEventName.FLOW_RUN_FINISHED:
        case index_1.ApplicationEventName.FLOW_RUN_RESUMED:
        case index_1.ApplicationEventName.FLOW_RUN_RETRIED: {
            const mock = Object.assign(Object.assign({}, workerEnvelope), { action: event, data: {
                    flowRun: {
                        id: (0, core_utils_1.apId)(),
                        startTime: isoNow,
                        finishTime: isoNow,
                        duration: 1234,
                        environment: 'PRODUCTION',
                        flowId: flow.id,
                        flowVersionId: flowVersion.id,
                        flowDisplayName: flowVersion.displayName,
                        status: event === index_1.ApplicationEventName.FLOW_RUN_FINISHED ? 'FAILED' : 'RUNNING',
                    },
                    project,
                } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_CREATED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_CREATED, data: { flow, project } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_PIECES_UPGRADED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_PIECES_UPGRADED, data: {
                    flowId: flow.id,
                    flowVersionId: flowVersion.id,
                    steps: [
                        { stepName: 'step_1', actionOrTriggerName: 'send_email', decision: 'UPGRADED', prevVersion: '0.1.0', newVersion: '0.2.0' },
                        { stepName: 'step_2', actionOrTriggerName: 'delete_row', decision: 'KEPT', prevVersion: '0.1.0', newVersion: null },
                    ],
                } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_PIECES_REVERTED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_PIECES_REVERTED, data: {
                    flowId: flow.id,
                    flowVersionId: flowVersion.id,
                    steps: [
                        { stepName: 'step_1', actionOrTriggerName: 'send_email', prevVersion: '0.2.0', newVersion: '0.1.0' },
                    ],
                } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_DELETED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_DELETED, data: { flow, flowVersion, project } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_UPDATED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_UPDATED, data: {
                    flow,
                    flowVersion,
                    request: {
                        type: core_execution_1.FlowOperationType.LOCK_AND_PUBLISH,
                        request: { status: core_execution_1.FlowStatus.ENABLED },
                    },
                    project,
                } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_PUBLISHED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_PUBLISHED, data: { flow, flowVersion, project } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_ACTIVATED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_ACTIVATED, data: { flow, flowVersion, project } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_DEACTIVATED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.FLOW_DEACTIVATED, data: { flow, flowVersion, project } });
            return mock;
        }
        case index_1.ApplicationEventName.FOLDER_CREATED:
        case index_1.ApplicationEventName.FOLDER_UPDATED:
        case index_1.ApplicationEventName.FOLDER_DELETED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: {
                    folder: {
                        id: (0, core_utils_1.apId)(),
                        displayName: 'Sample folder',
                        created: isoNow,
                        updated: isoNow,
                    },
                    project,
                } });
            return mock;
        }
        case index_1.ApplicationEventName.CONNECTION_UPSERTED:
        case index_1.ApplicationEventName.CONNECTION_DELETED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: {
                    connection: {
                        id: (0, core_utils_1.apId)(),
                        displayName: 'Sample connection',
                        externalId: 'sample-connection',
                        pieceName: '@activepieces/piece-sample',
                        status: 'ACTIVE',
                        type: 'CUSTOM_AUTH',
                        created: isoNow,
                        updated: isoNow,
                    },
                    project,
                } });
            return mock;
        }
        case index_1.ApplicationEventName.AGENT_CREATED:
        case index_1.ApplicationEventName.AGENT_UPDATED:
        case index_1.ApplicationEventName.AGENT_DELETED:
        case index_1.ApplicationEventName.AGENT_PUBLISHED:
        case index_1.ApplicationEventName.AGENT_UNPUBLISHED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: {
                    agent: {
                        id: (0, core_utils_1.apId)(),
                        displayName: 'Marketing agent',
                    },
                } });
            return mock;
        }
        case index_1.ApplicationEventName.AGENT_ACTION_EXECUTED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: {
                    source: core_execution_1.AgentRunSource.FLOW_STEP,
                    flow: { id: (0, core_utils_1.apId)(), runId: (0, core_utils_1.apId)() },
                    conversation: { id: (0, core_utils_1.apId)(), source: core_execution_1.AgentRunSource.FLOW_STEP },
                    agent: { id: (0, core_utils_1.apId)(), displayName: 'Marketing agent' },
                    action: { kind: index_1.AgentActionKind.PIECE, pieceName: '@activepieces/piece-gmail', pieceDisplayName: 'Gmail', actionName: 'send_email', displayName: 'Send Email' },
                    outcome: index_1.AgentActionOutcome.SUCCEEDED,
                    connection: { externalId: (0, core_utils_1.apId)(), label: 'marketing@acme.com' },
                } });
            return mock;
        }
        case index_1.ApplicationEventName.VARIABLE_UPSERTED:
        case index_1.ApplicationEventName.VARIABLE_DELETED:
        case index_1.ApplicationEventName.VARIABLE_VALUE_REVEALED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: {
                    variable: {
                        id: (0, core_utils_1.apId)(),
                        name: 'SAMPLE_VARIABLE',
                        created: isoNow,
                        updated: isoNow,
                    },
                    project,
                } });
            return mock;
        }
        case index_1.ApplicationEventName.USER_SIGNED_IN:
        case index_1.ApplicationEventName.USER_PASSWORD_RESET:
        case index_1.ApplicationEventName.USER_EMAIL_VERIFIED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: { user } });
            return mock;
        }
        case index_1.ApplicationEventName.USER_SIGNED_UP: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.USER_SIGNED_UP, data: { source: 'credentials', user } });
            return mock;
        }
        case index_1.ApplicationEventName.SIGNING_KEY_CREATED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.SIGNING_KEY_CREATED, data: {
                    signingKey: {
                        id: (0, core_utils_1.apId)(),
                        displayName: 'Sample signing key',
                        created: isoNow,
                        updated: isoNow,
                    },
                } });
            return mock;
        }
        case index_1.ApplicationEventName.AUDIT_LOG_RETENTION_UPDATED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.AUDIT_LOG_RETENTION_UPDATED, data: {
                    previousRetentionDays: 365,
                    retentionDays: 90,
                    instanceLimitDays: null,
                } });
            return mock;
        }
        case index_1.ApplicationEventName.PROJECT_ROLE_CREATED:
        case index_1.ApplicationEventName.PROJECT_ROLE_UPDATED:
        case index_1.ApplicationEventName.PROJECT_ROLE_DELETED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: {
                    projectRole: {
                        id: (0, core_utils_1.apId)(),
                        created: isoNow,
                        updated: isoNow,
                        name: 'Sample role',
                        permissions: [],
                        platformId,
                    },
                } });
            return mock;
        }
        case index_1.ApplicationEventName.PROJECT_RELEASE_CREATED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.PROJECT_RELEASE_CREATED, data: {
                    release: {
                        name: 'v1.0.0',
                        description: 'Sample release',
                        type: 'PROJECT',
                        projectId: projectId !== null && projectId !== void 0 ? projectId : (0, core_utils_1.apId)(),
                    },
                } });
            return mock;
        }
        case index_1.ApplicationEventName.PROJECT_REPLACED: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: index_1.ApplicationEventName.PROJECT_REPLACED, data: {
                    sourceActivepiecesVersion: '0.0.0',
                    applied: {
                        flowsCreated: 1,
                        flowsUpdated: 0,
                        flowsDeleted: 0,
                        flowsUnchanged: 0,
                        tablesCreated: 0,
                        tablesUpdated: 0,
                        tablesDeleted: 0,
                        tablesUnchanged: 0,
                        foldersCreated: 0,
                        foldersUpdated: 0,
                        foldersDeleted: 0,
                        foldersUnchanged: 0,
                        connectionsCreated: 0,
                        connectionsUpdated: 0,
                        connectionsUnchanged: 0,
                    },
                    failedCount: 0,
                    outcome: 'SUCCESS',
                    durationMs: 1234,
                } });
            return mock;
        }
        case index_1.ApplicationEventName.FLOW_APPROVAL_REQUESTED:
        case index_1.ApplicationEventName.FLOW_APPROVAL_GRANTED:
        case index_1.ApplicationEventName.FLOW_APPROVAL_REJECTED:
        case index_1.ApplicationEventName.FLOW_APPROVAL_WITHDRAWN: {
            const mock = Object.assign(Object.assign({}, baseEnvelope), { action: event, data: {
                    approvalRequestId: (0, core_utils_1.apId)(),
                    flowId: flow.id,
                    flowVersionId: flowVersion.id,
                    flowDisplayName: flowVersion.displayName,
                    rejectionReason: event === index_1.ApplicationEventName.FLOW_APPROVAL_REJECTED ? 'Needs stricter validation' : null,
                } });
            return mock;
        }
    }
};
exports.buildMockEvent = buildMockEvent;
//# sourceMappingURL=mock-event-builder.js.map