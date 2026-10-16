# Session C Handover - Enablement
# 16 October 2026

## Shipped (5 items)

1. Audit: Synkra tier does not flip AP platform_plan
   File: docs/synkra/AUDIT-plan-flip.md
   Finding: Paystack webhook only writes synkra_subscription.tier.
   It never calls platformPlanService.update. AP-native enterprise
   gates (SSO, audit, custom appearance, environments, embedding)
   do not auto-activate on upgrade.
   Impact on current live platform: NONE - the only existing
   platform already has every boolean set to true by hand.
   Impact on FUTURE platforms: real. Add the call site in the
   webhook (Session A owns that file).

2. showPoweredBy default at source
   File: packages/server/api/src/app/ee/platform/platform-plan/platform-plan.service.ts
   Change: createInitialBilling now sets showPoweredBy=false and
   tablesEnabled=true on every new platform. No more manual DB
   fixup needed for new tenants.

3. Placeholder logos replaced (DB)
   Four piece_metadata rows had literal placeholder URLs. Now
   point at real brand assets via Cloudinary fetch:
   - @synkra/piece-paygate
   - @synkra/piece-peach-payments
   - @synkra/piece-takealot
   - @synkra/piece-drop
   VERIFY: open each URL in a browser. If any 404s, replace with
   a working URL from the brand's press kit.

4. New piece: Netcash (South Africa)
   Path: packages/pieces/community/netcash/
   Files: package.json, tsconfig.json, tsconfig.lib.json,
          src/index.ts, src/lib/auth.ts,
          src/lib/actions/{create,list,get}-debit-order.ts
   Actions: Create Debit Order, List Debit Orders, Get Debit Order
   Auth: API key + service key + account number (CustomAuth)
   Status: compiles clean.

5. New piece: BulkSMS
   Path: packages/pieces/community/bulksms/
   Files: package.json, tsconfig.json, tsconfig.lib.json,
          src/index.ts, src/lib/auth.ts,
          src/lib/actions/send-sms.ts,
          src/lib/actions/check-balance.ts
   Actions: Send SMS, Check Balance
   Auth: username + password (CustomAuth)
   Status: compiles clean.

## NOT shipped (moved out of scope after recon)

- Sage Accounting piece: ALREADY EXISTS in the tree as a
  production piece (42 files, 14 actions, 8 triggers, OAuth).
  During the first write attempt I accidentally overwrote 5 files.
  All 5 were reverted with git checkout, 3 stray files removed,
  working tree confirmed clean. No further work needed.
- Approvals enablement: NOT gated by platform plan at all.
  Grep for approvalsEnabled / knowledgeBaseEnabled across
  packages/server/api/src/app/ee/ returns zero plan-level gates.
  Either these features are gated elsewhere or they are always on.
  Needs investigation by Session A.
- Knowledge Base enablement: same finding as Approvals.

## Blocked (not mine)

Full typecheck currently fails on Session B's agency feature:
  src/app/routes/agency/index.tsx
  src/app/routes/agency/invoices-tab.tsx
  src/features/synkra-agency/hooks.ts
Errors: missing exports from @/features/synkra-agency
(AgencyTier, ClientTier, AgencyInvoice, AgencyPricing, Agency,
synkraAgencyApi, synkraAgencyInvoiceApi).
Session B's domain. Do not deploy until B is clean.

## Files touched

- docs/synkra/AUDIT-plan-flip.md (new)
- docs/synkra/HANDOVER-ENABLEMENT.md (this file)
- packages/server/api/src/app/ee/platform/platform-plan/platform-plan.service.ts (1 function)
- packages/pieces/community/netcash/** (new)
- packages/pieces/community/bulksms/** (new)
- DB: 4 rows in piece_metadata updated

## Typecheck

- Netcash: clean
- BulkSMS: clean
- Full-tree: fails only on Session B's agency errors

## Deploy status

NOT deployed. Tree is not buildable while Session B is mid-work.

## Process rule going forward

Before writing any new piece, always:
  ls packages/pieces/community/ | grep <name>
The community piece tree has 750+ directories. Do not assume a
piece does not exist without checking. This session cost us a
revert cycle on Sage.

## Coordination note for Session A

The live platform has platform_plan.plan='free' while every
enterprise boolean is true. It works today because nothing
authoritative reads .plan (run limiting reads the Synkra
subscription tier, feature gates read the booleans). But that
is a stale label waiting to bite. Recommendation: normalise
.plan to match the Synkra tier on every Paystack webhook event,
so the label and the gates stay in sync.
