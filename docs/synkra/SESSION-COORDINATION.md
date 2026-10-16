# Synkra Flow — Multi-Session Coordination
# 16 October 2026

## Why this exists

We run 2-3 Claude sessions in parallel on the same repo. This
document prevents collisions, races, and duplicated work.

READ THIS FIRST if you are any of the sessions below.

---

## The three sessions

### Session A — Developer Tools, AI, Migration, Custom Domain
**Owner:** primary session (instructs the others)
**Domain:**
- packages/server/api/src/app/synkra/ai/**
- packages/server/api/src/app/synkra/api-keys/**
- packages/server/api/src/app/synkra/webhooks/**
- packages/server/api/src/app/synkra/public-api/**
- packages/server/api/src/app/synkra/developer/**
- packages/server/api/src/app/synkra/migration/**
- packages/server/api/src/app/synkra/custom-domain/**
- packages/web/src/app/routes/developer/**
- packages/web/src/app/routes/settings/**
- packages/web/src/features/synkra-developer/**
- packages/web/src/features/synkra-migration/**

**This session's queue:**
1. AI boot seed — Synkra DeepSeek provider so Chat works on paid tiers
2. BYOK backend + Settings UI (Pro only)
3. AI guardrails — refuse personal ChatGPT use, inject product knowledge
4. Custom domain for Agency (1 / 3 / 10 / unlimited per tier)
5. Migration from n8n (then Make)

### Session B — Agency Programme
**Domain:**
- packages/server/api/src/app/synkra/agency/**
- packages/web/src/app/routes/agency/**
- packages/web/src/app/routes/portal/**
- packages/web/src/features/synkra-agency/**

**This session's queue:**
1. Rebuild /agency landing page — make it a real operations dashboard, not a generic hero
2. Build the 7-stage agency onboarding flow (spec: AGENCY-ONBOARDING-SPEC.md)
3. Verify client isolation is provable end-to-end
4. Make white-label config actually render on the client portal

### Session C — Feature enablement + pieces
**Domain:**
- packages/server/api/src/app/ee/platform/platform-plan/**
- packages/pieces/community/<new pieces>/**
- packages/server/api/src/assets/synkra-pieces/**

**This session's queue:**
1. AUDIT: does AP's native plan flip when Synkra tier changes? (critical bug if not — Business users might not get SSO)
2. Enable Approvals (Business+), Tables (all), Knowledge Base (Business+)
3. Turn off `showPoweredBy` globally
4. Fix missing piece logos (Ozow, SnapScan, Peach, PayGate, Takealot, Drop, Bob Go, Courier Guy, Pargo, Uber Direct, iKhokha, Yoco, PayFast, Synkra Chat)
5. Add missing SA pieces: Netcash, Sage Accounting, BulkSMS/Clickatell

---

## RULES

### File ownership
- If a file is in your domain, you own it.
- If a file is NOT in your domain, do not edit it.
- If you MUST touch a shared file (see list below), append ONE line
  at the end with a comment marker `// [SESSION-<letter>]` and stop.

### Shared files (append-only)
- packages/server/api/src/app/synkra/billing/billing.module.ts
- packages/web/src/app/routes/project-routes.tsx
- packages/web/src/app/components/primary-rail/index.tsx
- packages/web/src/app/routes/settings/shell.tsx
- packages/web/src/app/routes/settings/index.tsx

Example append:
```ts
// [SESSION-A] Custom domain controller
import { synkraCustomDomainController } from '../custom-domain/custom-domain.controller';
// ...then in the register block:
await app.register(synkraCustomDomainController, { prefix: '/v1/synkra/custom-domain' });
Never reorder or reformat lines outside your block.

Never edit
.env

Dockerfile

scripts/typecheck.sh

scripts/deploy-background.sh
BATCHING RULE (IMPORTANT)
Do NOT deploy after every small change. We batch 4-5 features
per build. Every build takes ~5 minutes of VPS CPU. Three sessions
each building after every change = blocked worker + wasted time.

Batch rule:

Accumulate 4-5 finished, typechecked features

THEN run one deploy

Coordinate with the other sessions via the primary session (A)

If you finish a feature and don't have 4-5 yet, keep building.
TYPECHECK — MANDATORY BEFORE ANY COMMIT
bash
cd /root/synkra-flow
bash scripts/typecheck.sh
Must print:

text
✓✓✓ ALL TYPES CLEAN — SAFE TO BUILD
If anything else → fix the errors, run again. Do NOT commit until clean.

The typecheck script uses tsconfig.app.json (not the bare tsconfig.json
which checks zero files). It uses
DEPLOY
Use the background script so it survives terminal close:

bash
cd /root/synkra-flow

# 1. Confirm no build is running
pgrep -f "docker build.*synkra-flow" && echo "ABORT" || echo "clear"

# 2. Confirm typecheck passes (re-run it)
bash scripts/typecheck.sh

# 3. Launch detached
rm -f /tmp/synkra-deploy.lock
setsid nohup bash scripts/deploy-background.sh > /dev/null 2>&1 < /dev/null &
disown

# 4. Note the log path
LOG=$(ls -t /tmp/synkra-deploy-*.log | head -1)
echo "Log: $LOG"
DO NOT run docker build or docker run manually. The script does
it all: typecheck, build, deploy, wait 45s, public check, log.

Check deploy status later
bash
LOG=$(ls -t /tmp/synkra-deploy-*.log | head -1)
tail -30 "$LOG"
docker images synkra-flow:keep --format "{{.ID}} {{.CreatedSince}}"
docker inspect synkra-flow-app --format '{{.Image}}' | cut -c1-19
curl -sS -o /dev/null -w "public: %{http_code}\n" https://flow.synkra.co.za/
If the two image IDs match and public is 200 → deployed successfully.
COMMIT + PUSH
We work on local main. Origin main is protected.

bash
cd /root/synkra-flow
git add <your files>
git commit -m "feat(<scope>): <short description>" --no-verify

# Push as a feature branch:
git push origin main:release/<date>-<scope>
Then open a PR in browser:
https://github.com/Capacitiq-group/synkra-flow/compare/main...release/<date>-<scope>

Base MUST say Capacitiq-group/synkra-flow, never activepieces/activepieces.
NEVER DO
Never push to activepieces/activepieces (upstream). No upstream remote
is configured — do not add one.

Never commit .env

Never paste API keys in chat

Never run two deploys simultaneously

Never docker compose up (hangs)

Never edit a file owned by another session
session

KEY DOCS
docs/synkra/MASTER-EXECUTIVE-DOCUMENT.md — commercial model,
programmes, integrations, developer ecosystem (61 sections)

docs/synkra/AGENCY-PROGRAMME.md — agency architecture

docs/synkra/AGENCY-ONBOARDING-SPEC.md — 7-stage onboarding

docs/synkra/SETTINGS-AND-DEVTOOLS-SPEC.md — settings IA

docs/synkra/HANDOVER-2026-10-15.md — full state as of 15 Oct

docs/synkra/HANDOVER-API-2026-10-14.md — public API details
LIVE INFRA
App: https://flow.synkra.co.za

Chat widget: https://chat.synkra.co.za

Docs (external team owns): https://docs.synkra.co.za

Containers: synkra-flow-app, synkra-flow-worker, synkra-flow-postgres, synkra-flow-redis

DB: docker exec -it synkra-flow-postgres psql -U postgres -d activepieces

Redis: docker exec -it synkra-flow-redis redis-cli

ENV
All secrets in /root/synkra-flow/.env. Never printed in full.
Keys present: Paystack live keys, Resend, DeepSeek (SYNKRA_AI_*),
Postgres, Redis, S3, JWT, encryption.

CUSTOM DOMAIN TIERS (Session A)
Agency 20: 1 custom domain

Agency 100: 3 custom domains

Agency 500: 10 custom domains

500+: unlimited (via custom contract)

MIGRATION SOURCES (Session A)
v1: n8n (public REST API, easiest)

v1.1: Make (scenario JSON import)

v2: Zapier (ZIP export parse, best-effort)

