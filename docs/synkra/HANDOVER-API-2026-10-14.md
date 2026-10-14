# Public API — Session 2026-10-14

## What exists
Read-only public API at `/v1/synkra/public/*` exposing platform data to
holders of an API key. Commit `d89ebb8a`. Not yet browser-verified.

## Auth model
Uses AP's existing `sk_live_*` API key system. No new middleware.
Prefix `sk-` detected in `core/security/v2/authn/authenticate.ts`.
Returns principal `{ id, type: 'SERVICE', platform: { id } }`.

## Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| GET | /ping | Verify key works |
| GET | /me | Account + tier + usage |
| GET | /flows | List all flows |
| GET | /runs?limit&flowId | List recent runs |
| GET | /runs/:id | Run detail |

All 403 without valid key.

## UI work needed (next session)
1. **API Keys page** at `/platform/api-keys` — polish, verify visible
2. **API docs page** at `/platform/api-docs` — document 5 endpoints
3. **Optional:** API tab in unified Settings hub

## Roadmap after UI
1.5 — `POST /flows/:id/run`
1.6 — connections endpoints
1.7 — webhooks
1.8 — usage breakdown
2.0 — OpenAPI + Postman
2.1 — TypeScript SDK

## Known issues
- `/me.executionsThisMonth` hardcoded to 0
- No rate limiting yet
- No pagination
- FlowRun `finished` field cast through unknown (type mismatch)
- No audit logging

## File map
- `packages/server/api/src/app/synkra/public-api/public-api.controller.ts`
- `packages/server/api/src/app/synkra/billing/billing.module.ts` (registration)

## Test commands
```bash
API_KEY="sk_live_..."
curl -H "Authorization: Bearer $API_KEY" \
  https://flow.synkra.co.za/api/v1/synkra/public/ping
