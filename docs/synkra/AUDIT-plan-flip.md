# AUDIT: Synkra tier does not flip AP platform_plan
# Session C
# Severity: HIGH

## Summary

Synkra billing and Activepieces native plan state are DISCONNECTED.
When a user upgrades via Paystack, only synkra_subscription.tier
changes. platform_plan.plan never updates. As a result, AP-native
enterprise gates (SSO, audit log, custom appearance, environments,
embedding, custom domains) do not activate for paying Synkra
customers.

## Evidence

1. Paystack webhook only writes to Synkra table.
   File: packages/server/api/src/app/synkra/billing/paystack-webhook.controller.ts
   On charge.success it calls svc.updateTier(userId, { tier, status, ... }).
   It does NOT call platformPlanService.update.
   It does NOT call billingProvider.refreshEntitlements.

2. Subscription service repo is SynkraSubscriptionEntity.
   File: packages/server/api/src/app/synkra/billing/subscription.service.ts
   updateTier does repo().update({ userId }, params). No platform plan
   reference anywhere in the file.

3. Synkra billing provider methods are stubs.
   File: packages/server/api/src/app/synkra/billing/synkra-billing-provider.ts
   refreshEntitlements: async () => {} (no-op)
   ensureEnrolled: async () => {} (no-op)
   isBillingEnforced: async () => true (run gating only)
   Only shouldBlockOnCredits has real logic.

4. Grep confirms zero wiring.
   grep -rn "platformPlanService" \
     packages/server/api/src/app/synkra/ --include="*.ts"
   returns no matches.

## Impact

Starter tier:  expected Standard,    actual Standard (accidental match)
Pro tier:      expected Pro,         actual Standard (broken)
Business tier: expected Business,    actual Standard (broken)
Enterprise:    expected Enterprise,  actual Standard (broken)

Business customers do not get SSO, audit log, custom appearance,
environments, approvals, knowledge base, embedding.

## Fix

Owner: Session A (file is in synkra/billing/).

After svc.updateTier(...) in the webhook, resolve the platform owner's
platformId and call:

    await platformPlanService(log).update({
      platformId,
      plan: apPlanNameFromTier(tier),
      tablesEnabled: true,
    });

apPlanNameFromTier maps:
    free -> standard
    starter -> standard
    pro -> pro
    business -> business
    enterprise -> enterprise

platformPlanService lives at:
    packages/server/api/src/app/ee/platform/platform-plan/platform-plan.service.ts

## Domain split

Session A edits the webhook call site.
Session C edits the mapping helper in ee/platform/platform-plan/.
