# Session log - 16 October 2026

## Shipped (build 96046e0f08cb, deploy 11:37 CEST)

Three parallel sessions, one build, zero downtime.
Release branch: release/2026-10-16-batch

### Session A - developer tools + AI
- BYOK controller (Pro-only, encrypted credentials)
- Synkra AI seed (platform-wide DeepSeek provider)
- AI execution guard
- AI guardrail prompts (about_synkra.md replaces about_activepieces.md)
- Agent tool-skills updates
- API keys module, webhooks module
- Public API controller updates
- Developer settings UI + developer route fix

### Session B - agency programme
- Agency onboarding controller + service
- Agency landing page rebuild
- Tenant isolation verify script

### Session C - enablement
- Netcash piece (new, 3 actions)
- BulkSMS piece (new, 2 actions)
- createInitialBilling now sets showPoweredBy=false + tablesEnabled=true
- Four placeholder logos replaced in DB (paygate, peach, takealot, drop)
- Audit: Paystack webhook does not flip AP native plan

## Builds that failed on the way

1. 10:39 - bun lockfile out of sync. Fixed by bun install + commit bun.lock.
2. 10:54 - api#build failed on synkra-byok.controller.ts (missing 500 in
   response schema, save() return-type narrow). File was edited mid-build
   at 11:01:46. Rebuild at 11:16 succeeded.

## Lessons (add to SESSION-COORDINATION.md)

1. FREEZE RULE: no source edits while a build is running. Docker
   snapshots the tree at COPY time. Edits during build produce a
   binary that reflects no real commit.
2. LOCKFILE RULE: adding a new workspace piece requires bun install
   and committing bun.lock BEFORE any build.
3. TYPECHECK GATE MAY LIE: scripts/typecheck.sh reported clean while
   docker tsc found 4 errors. Investigation owed (Session A).
4. PIECE COLLISION: always ls packages/pieces/community/ | grep <name>
   before writing a new piece. Sage Accounting already existed, got
   clobbered, reverted cleanly. Cost one cycle.

## Live state

- https://flow.synkra.co.za - 200 OK
- Container: synkra-flow-app, image 96046e0f08cb, healthy
- Only platform in DB: EwKJJqAW0qg1wN38CQ5Bq
- All enterprise flags on that platform: true

## Open queue

### Session A
- Fix scripts/typecheck.sh so it matches docker tsconfig.app.json
- Paystack webhook: call platformPlanService.update on tier change
- Investigate Approvals + Knowledge Base gating

### Verification
- Smoke test in UI: Netcash, BulkSMS, PayGate, Peach, Takealot, Drop pieces
- Verify 4 Cloudinary logo URLs load in browser

## Post-deploy hygiene note

Uncommitted files that were in the deployed image had to be committed
after the fact (tool-skills.ts, chat-system-prompt.md, about_synkra.md,
project-routes.tsx). Root cause: work-in-flight overlapped with build
snapshot. Freeze rule prevents recurrence.
