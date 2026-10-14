# Synkra Flow — Agency Programme
# Complete reference. Last updated 14 Oct 2026.

## 1. Commercial model

Chain: Synkra → Agency → Agency's clients

- Agency is Synkra's direct customer
- Agency's clients are the agency's customers, not Synkra's
- Synkra sets wholesale rates; agency sets its own retail rates
- Synkra never touches the agency's client billing

### Tiers

| Tier | Monthly fee | Client cap | Wholesale discount |
|------|------------:|-----------:|-------------------:|
| Agency 20 | R699 | 20 clients | 35% off public Flow |
| Agency 100 | R1,499 | 100 clients | 40% off |
| Agency 500 | R2,999 | 500 clients | 40% off |
| 500+ | Custom | Custom | Custom |

### Wholesale rates (client subscription cost to the agency)

| Client tier | Public | Agency 20 (35%) | Agency 100/500 (40%) |
|-------------|-------:|----------------:|---------------------:|
| Starter | R299 | R194 | R179 |
| Business | R599 | R389 | R359 |
| Pro | R999 | R649 | R599 |

### What the agency fee pays for

Agency workspace, client environment management, client provisioning,
production deployment, agency rates, white-label branding, client portal,
centralised billing view, client handover, agency-specific controls.

The fee is NOT "20 free clients". Each active client environment is billed
separately at wholesale rate.

## 2. Data model

### synkra_agency (one row per agency, unique per user)

| Column | Purpose |
|--------|---------|
| id | Primary key |
| ownerUserId | Agency owner (unique) |
| platformId | Which platform |
| name | Agency name |
| tier | agency_20 / agency_100 / agency_500 |
| status | draft / active / suspended / cancelled |
| clientEnvironmentsLimit | 20 / 100 / 500 |
| wholesaleDiscount | 0.35 or 0.40 |
| branding | JSONB: logo, colour, support email, welcome message |
| metadata | JSONB extensible |
| activatedAt | When live |
| cancelledAt | When cancelled |

### synkra_agency_client (one row per client env, unique per project)

| Column | Purpose |
|--------|---------|
| id | PK |
| agencyId | Parent |
| projectId | Flow project (unique) |
| name | Client name |
| status | draft / active / suspended / transferred |
| clientTier | starter / business / pro |
| wholesaleMonthlyZar | What agency pays Synkra |
| clientPriceZar | What agency charges client (nullable) |
| portalToken | 256-bit token |
| portalEnabled | Is portal live |
| portalLastViewedAt | Last view |
| activatedAt | When live |
| metadata | Extensible |

### synkra_agency_invoice (monthly invoices Synkra → agency)

Columns: id, agencyId, invoiceNumber, periodStart, periodEnd, dueDate,
amountZar, agencyFeeZar, wholesaleTotalZar, lineItems (JSONB),
status (pending/paid/overdue/cancelled/failed), paystackReference,
paystackPaymentUrl, paidAt, remindersSent, lastReminderAt, pdfUrl, metadata.

## 3. Backend services

### agency.service.ts (14 methods)
- getForUser, getOrCreateDraftForUser, updateProfile, updateTier
- activate, suspend, updateBranding
- listClients, getClientByIdOrThrow, createClient, activateClient,
  suspendClient, transferClient
- countActiveClients, sumWholesaleMonthlyZar, computeWholesaleZar

### portal.service.ts (3 methods)
- enablePortal, disablePortal, getPublicView (no-auth)

### invoice.service.ts (7 methods)
- generateInvoice (idempotent per period), list, getById, markPaid,
  cancel, enforceOverdue, recordReminder, findByPaystackReference

### invoice-pdf.service.ts
- generate(invoice) → PDF Buffer (pdfkit, green #5DD62C accents)

### billing.service.ts
- getSummary(agencyId) → agency fee, per-client rows, savings

### billing-cron.service.ts
- runOnce() hourly: generate invoices, send reminders, enforce overdue

## 4. API endpoints

Under /v1/synkra/agency:
GET /, PATCH /, POST /activate, POST /suspend, POST /tier, PATCH /branding,
GET /clients, POST /clients, POST /clients/:id/activate,
POST /clients/:id/suspend, POST /clients/:id/transfer, GET /pricing,
POST /wholesale-preview, GET /billing, GET /invoices, GET /invoices/:id,
GET /invoices/:id/pdf, POST /invoices/regenerate,
POST /clients/:id/portal/enable, POST /clients/:id/portal/disable,
GET /public/:token (no auth)

Under /v1/synkra/paystack:
POST /agency-webhook

## 5. Client environment isolation

Each client env = a Flow project (TEAM type, owned by agency owner).
Isolation is free: workflows, connections, credentials, tables, usage,
permissions all scoped to projectId. No new isolation code written.

## 6. Frontend

### /agency dashboard
Sections: header, draft banner, stats grid, tier switcher, branding card,
client list, invoices tab.

### /portal/:token — public client portal (no login)
Shows: agency logo + name, welcome message, package tier + status,
3 usage tiles, support email, footer. Read-only. Instantly revocable.

## 7. Emails
Templates: sendAgencyInvoice, sendAgencyReminder, sendAgencySuspended,
sendAgencyRestored.
Transport: Resend → SMTP → log-only fallback.
@shadow.synkra.internal silently dropped.

## 8. Invoice lifecycle
Day 0 — invoice generated, email sent, due = today+7
Day 1-7 — daily reminder emails
Day 8 — overdue, agency + all clients suspended, suspension email
Later — payment via Paystack → webhook → paid → unsuspended
All steps idempotent.

## 9. Grace period
Day 0-7 — clients run normally
Day 8 — workflows pause, read-only for agency
Day 8+ — payment link still active; pay → immediate resume
Day 30 — manual review

## 10. Test status

CONFIRMED (simulated):
- Upgrade flow → tier change
- Credit pack purchase → lot created
- Idempotency on duplicate webhook
- Cancel semantics

BUILT, DEPLOYED, NEVER TESTED E2E:
- Agency dashboard UI
- Client creation (creates Flow project)
- Client activation
- Branding save
- Portal link generation
- Portal public view
- Invoice generation + PDF + Paystack link
- Agency webhook unsuspend on payment
- Daily cron passes
- Overdue enforcement

## 11. NOT built
Agency self-signup, tier upgrade billing, add-on packs for agencies,
agency cancellation UI, client-facing login, portal custom domain,
Agency 500+ custom path, commission tracking, handover to another agency,
client notification of handover, agency reports, agency team members,
agency API access.

## 12. File locations

packages/server/api/src/app/synkra/agency/
  agency.entity.ts, agency-client.entity.ts, invoice.entity.ts
  agency.service.ts, portal.service.ts, invoice.service.ts
  invoice-pdf.service.ts, billing.service.ts, billing-cron.service.ts
  agency.controller.ts, portal.controller.ts, invoice.controller.ts
  agency-webhook.controller.ts

packages/web/src/app/routes/agency/
  index.tsx (406 lines), branding-card.tsx, invoices-tab.tsx

packages/web/src/app/routes/portal/
  index.tsx

packages/web/src/features/synkra-agency/
  api.ts, hooks.ts, index.ts

## 13. Enable Agency for a user
1. Login
2. Open /agency (avatar menu → Agency Programme)
3. Backend getOrCreateDraftForUser creates draft row
4. User renames, picks tier, clicks Activate
5. Status → active
6. Next monthly cron generates first invoice
7. User creates clients via New client button
8. Each client creates a Flow project owned by agency owner

## 14. Agency viability

| Agency size | Revenue | Margin |
|-------------|--------:|-------:|
| 1 client @ R400 | R400/mo | ~R31 |
| 5 clients @ R599 | R2,995/mo | R1,326/mo |
| 20 clients @ R700 | R14,000/mo | R5,521/mo |
| 50 clients @ R700 | R35,000/mo | R14,840/mo |

Viable for agencies charging >R260/client.

## 15. Priority order for next work
1. Test everything end-to-end (P0)
2. Wire add-on packs
3. Client handover to another agency
4. Agency self-application flow
5. Agency 500+ custom pricing
6. Agency team members
7. Portal subdomain

None of these block beta.

## 16. Free tier rule (clarified 14 Oct 2026)

**There is no free agency tier.**

- Agency workspace access: **free**
  - Any logged-in user can open `/agency`
  - Can view dashboard, explore tiers, configure branding
  - Agency record sits in `draft` status — no subscription
- Adding the **first client**: requires paid subscription
  - Gate is at `POST /v1/synkra/agency/clients`
  - If agency has no active subscription → reject with "subscribe to add your first client"
  - Must pick a tier (Agency 20 / 100 / 500) before any client can be created

This means:
- Onboarding can be permissive (workspace, branding, tier preview all free)
- Revenue starts the moment they want to deliver
- No "free forever" tier to maintain
- "Free" in earlier conversations meant *workspace access*, not a plan
