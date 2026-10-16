"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMockActionContext = createMockActionContext;
exports.createMockPollingTriggerContext = createMockPollingTriggerContext;
const tslib_1 = require("tslib");
const core_piece_types_1 = require("@activepieces/core-piece-types");
function createMockActionContext(params) {
    var _a;
    return {
        executionType: params.resumePayload ? core_piece_types_1.ExecutionType.RESUME : core_piece_types_1.ExecutionType.BEGIN,
        resumePayload: params.resumePayload,
        auth: undefined,
        propsValue: params.propsValue,
        store: {
            put: (key, value) => tslib_1.__awaiter(this, void 0, void 0, function* () { return value; }),
            get: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return null; }),
            delete: () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return;
            }),
        },
        connections: {
            get: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return null; }),
        },
        tags: {
            add: () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return;
            }),
        },
        server: {
            apiUrl: 'http://localhost:3000',
            publicUrl: 'http://localhost:4200',
            token: 'test-token',
        },
        files: {
            write: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return 'test-file-url'; }),
            upload: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return ({ id: 'test-file-id', url: 'test-file-url' }); }),
        },
        output: {
            update: () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return;
            }),
        },
        agent: {
            tools: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return ({}); }),
        },
        run: {
            id: 'test-run-id',
            canPause: (_a = params.canPause) !== null && _a !== void 0 ? _a : true,
            stop: () => {
                return;
            },
            pause: () => {
                return;
            },
            respond: () => {
                return;
            },
            createWaitpoint: (waitpoint) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a;
                (_a = params.onCreateWaitpoint) === null || _a === void 0 ? void 0 : _a.call(params, waitpoint);
                return {
                    id: 'test-waitpoint-id',
                    resumeUrl: 'http://localhost:3000/resume',
                    buildResumeUrl: () => 'http://localhost:3000/resume',
                };
            }),
            waitForWaitpoint: (waitpointId) => {
                var _a;
                (_a = params.onWaitForWaitpoint) === null || _a === void 0 ? void 0 : _a.call(params, waitpointId);
            },
        },
        project: {
            id: 'test-project-id',
            externalId: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return undefined; }),
        },
        flows: {
            list: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return ({ data: [], next: null, previous: null }); }),
            current: {
                id: 'test-flow-id',
                version: {
                    id: 'test-flow-version-id',
                },
            },
        },
        step: {
            name: 'test-step',
        },
        generateResumeUrl: () => 'http://localhost:3000/resume',
    };
}
function createMockPollingTriggerContext(params) {
    return Object.assign(Object.assign({}, createMockActionContext({ propsValue: params.propsValue })), { setSchedule: (schedule) => {
            var _a;
            (_a = params.onSetSchedule) === null || _a === void 0 ? void 0 : _a.call(params, schedule);
        } });
}
//# sourceMappingURL=index.js.map