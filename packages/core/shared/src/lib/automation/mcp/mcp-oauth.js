"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATFORM_WIDE_PROJECT_FILTER_VALUE = exports.RevokeMcpOAuthGrantsRequestBody = exports.ListMcpOAuthGrantsRequestQuery = exports.McpOAuthGrant = exports.McpOAuthAuthorizationCode = exports.McpOAuthToken = exports.McpOAuthClient = exports.McpOAuthClientKey = void 0;
const core_utils_1 = require("@activepieces/core-utils");
const zod_1 = require("zod");
const user_1 = require("../../core/user/user");
exports.McpOAuthClientKey = zod_1.z.enum(['claude', 'claude-code', 'chatgpt', 'cursor', 'vscode', 'codex', 'gemini-cli', 'opencode', 'windsurf', 'unknown']);
exports.McpOAuthClient = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { clientId: zod_1.z.string(), clientSecret: zod_1.z.string().nullable(), clientSecretExpiresAt: zod_1.z.coerce.number(), clientIdIssuedAt: zod_1.z.coerce.number(), redirectUris: zod_1.z.array(zod_1.z.string()), clientName: zod_1.z.string().nullable(), grantTypes: zod_1.z.array(zod_1.z.string()), tokenEndpointAuthMethod: zod_1.z.string() }));
exports.McpOAuthToken = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { refreshToken: zod_1.z.string(), clientId: zod_1.z.string(), clientKey: exports.McpOAuthClientKey.nullable(), userId: zod_1.z.string(), projectId: zod_1.z.string().nullable(), platformId: zod_1.z.string(), scopes: zod_1.z.array(zod_1.z.string()).nullable(), expiresAt: zod_1.z.string(), revoked: zod_1.z.boolean(), lastUsedAt: zod_1.z.string().nullable() }));
exports.McpOAuthAuthorizationCode = zod_1.z.object(Object.assign(Object.assign({}, core_utils_1.BaseModelSchema), { code: zod_1.z.string(), clientId: zod_1.z.string(), userId: zod_1.z.string(), projectId: zod_1.z.string().nullable(), platformId: zod_1.z.string(), redirectUri: zod_1.z.string(), codeChallenge: zod_1.z.string(), codeChallengeMethod: zod_1.z.string(), scopes: zod_1.z.array(zod_1.z.string()).nullable(), state: zod_1.z.string().nullable(), nonce: zod_1.z.string().nullable(), expiresAt: zod_1.z.string(), used: zod_1.z.boolean() }));
exports.McpOAuthGrant = zod_1.z.object({
    id: zod_1.z.string(),
    clientKey: exports.McpOAuthClientKey,
    clientName: zod_1.z.string().nullable(),
    projectId: zod_1.z.string().nullable(),
    projectName: zod_1.z.string().nullable(),
    member: user_1.UserWithMetaInformation.nullable(),
    created: zod_1.z.string(),
    lastUsedAt: zod_1.z.string().nullable(),
});
exports.ListMcpOAuthGrantsRequestQuery = zod_1.z.object({
    cursor: zod_1.z.string().optional(),
    limit: zod_1.z.coerce.number().int().min(1).max(100).optional(),
    projectIds: (0, core_utils_1.OptionalArrayFromQuery)(zod_1.z.string()),
    memberIds: (0, core_utils_1.OptionalArrayFromQuery)(core_utils_1.ApId),
    clientKeys: (0, core_utils_1.OptionalArrayFromQuery)(exports.McpOAuthClientKey),
});
exports.RevokeMcpOAuthGrantsRequestBody = zod_1.z.object({
    ids: zod_1.z.array(core_utils_1.ApId).min(1).max(100),
});
exports.PLATFORM_WIDE_PROJECT_FILTER_VALUE = 'platform-wide';
//# sourceMappingURL=mcp-oauth.js.map