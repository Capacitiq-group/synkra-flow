# Synkra Flow — Agency Onboarding Spec
# Status: Design approved, not yet built
# Date: 13 October 2026

## Core principle

An agency should be able to sign up, configure its business, create its
first client workspace, connect tools, build an automation, and decide
how to charge its client without speaking to anyone at Synkra.

We are not selling freelancers more runs. We are building infrastructure
that lets freelancers and agencies deliver automation as a business.

## Three parties

- **Synkra Flow** — platform, infrastructure, integrations, capacity
- **The agency** — pays Synkra, creates workflows, manages client workspaces
- **The agency's client** — receives the automation the agency configured

Flow's wholesale price is not the agency's client price. These are
separate commercial agreements.

## Three layers

| Layer | Purpose |
|-------|---------|
| Agency account | Subscription, billing, team, client portfolio, usage |
| Client workspaces | Separate environment per client |
| Workflow builder | Where automations are built and run |

Never blur these. An agency is not a client workspace. A client workspace
is not a workflow. A workflow is not a subscription.

## Seven-stage onboarding journey

### Stage 1 — Choose how you want to use Flow
- Build for your business
- Build for clients (agency)
- I'm exploring

Agency option shows price, billing frequency, client allowance, usage
limits up front. No lengthy comparison page.

Users can transition from personal to agency without losing workflows.

### Stage 2 — Create the agency account
Minimum info: agency name, owner name, business email, country, currency,
intended size. Editable later.

No registration docs, tax docs, or manual approval for freelancers unless
required for legal/fraud reasons.

### Stage 3 — Select and activate agency plan
Show real plan names + prices. Each plan communicates:
- Agency subscription (what agency pays Synkra)
- Client capacity (how many client workspaces)
- Included usage (workflow runs)
- Wholesale pricing (what client subscriptions cost the agency)
- Additional charges

Distinguish client capacity from execution capacity — they're different.

Payment via Paystack. On success, entitlements apply automatically.
On failure, show error, allow retry. Don't falsely claim active when pending.

Recommendation: allow exploration before requiring payment, but require
active subscription for agency-specific entitlements.

### Stage 4 — Configure agency workspace
Arrive at setup checklist inside Flow (not the builder):
1. Configure agency profile
2. Invite team (optional for solo)
3. Add first client
4. Connect integration
5. Create or import workflow

Checklist is dismissible. Complete in any order.

### Stage 5 — Add first client (most important stage)
Dedicated flow, not "create workspace and figure it out".

Fields:
- Client/business name
- Contact email (optional unless inviting)
- Internal notes (optional)
- Invite immediately OR add as managed workspace only

After creating, land on client overview showing: status, workflows,
executions, usage, integrations, billing, team, actions.

Client should NOT need to become a Flow customer. Agency creates and
manages the workspace. Client gets invited when agency is ready. If the
client never logs in, agency still delivers service through workflows.

### Stage 6 — Connect integration + build first workflow
Three paths:
- Create workflow (blank)
- Start from template
- Connect integration

Not sequential. Real routes into the product.

Activation milestone = successful verified execution, not just creation
of a workflow. Agencies need to know automation is running before telling
client it's ready.

## Billing models

### Model A — Agency-managed (recommended to launch with)
Agency pays Synkra wholesale for client subscriptions. Agency charges
clients whatever they want. Client doesn't pay Synkra directly.

Pros: agency controls commercial relationship. Pricing reflects value.
Synkra has direct relationship with agency.

Cons: agency manages invoicing, bears collection risk.

### Model B — Flow-managed client subscriptions
Platform manages client subscription lifecycle. Client may have direct
billing relationship with Synkra. Agency still charges for services.

Adds complexity: who owns billing relationship, who receives money, how
wholesale discount applies.

### Model C — Hybrid
Both models available. Most flexible, most complex. Don't launch here.

**Recommendation: Launch Model A. Design for B later.**

## Unresolved product rules (must decide before launch)

- What happens when agency stops paying its own subscription?
- What happens when agency cancels a client workspace?
- Who owns client data/workflows when relationship ends?
- Which party owes Synkra money in each scenario?

## Client billing section

Dedicated section for agency owner (not buried in general settings).

Per client, display:
- Client (business/workspace)
- Flow plan (applicable subscription)
- Wholesale cost (what agency owes Synkra)
- Client price (agency's own price, clearly labelled agency-managed)
- Billing arrangement (agency vs Flow)
- Status (active, pending, past due, cancelled)

## Implementation status

- Backend: built (13 files in packages/server/api/src/app/synkra/agency/)
- DB: 3 tables (synkra_agency, synkra_agency_client, synkra_agency_invoice)
- Frontend dashboard: exists (routes/agency/index.tsx — clients, branding, invoices, portal)
- Onboarding: NOT BUILT
- Marketing/landing page: NOT BUILT
- Plan picker: NOT BUILT
- Client billing section: NOT BUILT
- Client subscription model: undecided at code level
