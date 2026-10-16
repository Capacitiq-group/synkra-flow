# Session B — Agency, 16 October 2026

## Scope correction

Brief assumed greenfield. Reality: /agency ops page, portal white-label,
and the full agency backend (controller, service, entities, billing,
invoice, portal) already shipped.

## Delivered this batch

1. 7-stage agency onboarding state machine stored in
   synkra_agency.metadata.agencyOnboarding (existing jsonb).
2. Onboarding card + wizard UI on the agency page.
3. Tenant isolation proof script (5+ live assertions).

## Files added

- packages/server/api/src/app/synkra/agency/agency-onboarding.service.ts
- packages/server/api/src/app/synkra/agency/agency-onboarding.controller.ts
- packages/web/src/features/synkra-agency/hooks-onboarding.ts
- packages/web/src/app/routes/agency/onboarding-card.tsx
- scripts/verify-tenant-isolation.sh

## Files edited

- packages/server/api/src/app/synkra/billing/billing.module.ts
- packages/web/src/features/synkra-agency/index.ts
- packages/web/src/app/routes/agency/index.tsx

## No migration

State lives in existing synkra_agency.metadata jsonb column.

## To run the isolation proof

  COOKIE_A='<cookie for user A>' \
  COOKIE_B='<cookie for user B>' \
  bash scripts/verify-tenant-isolation.sh
