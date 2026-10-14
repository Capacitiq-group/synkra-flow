# SYNKRA — Master Executive Document
# Accounts, Access Programmes, Integrations, Developer Ecosystem,
# Commercial Architecture
# Version: 14 October 2026

## 1. Executive Overview
SYNKRA owns its own automation infrastructure. Not reselling an
external platform. Costs are infrastructure + operations, not
reseller fees.

Categories:
1. Standard Flow customers
2. Agency Accounts
3. Student Programme
4. Community Access
5. Institutional and Volume Based Pricing
6. Integration Partners and Developers
7. Integration users / connected client environments

Keep categories separate. Do not merge into one account system.

## 2. Core Principle
> Differentiate access based on WHO the customer is and HOW SYNKRA is
  used, while keeping the underlying Flow product consistent.

Programmes determine access + commercial rate + account structure.
Programmes do NOT create separate versions of Flow.

## 3. Standard Flow
Public plans define: workflow capacity, executions, resources,
integrations, limits, functionality, add-ons.

Standard Flow prices are the source from which programme pricing is
derived. Discounts change the rate, not the product.

## 4. Agency Programme
SYNKRA → Agency → Agency's clients

Agency is SYNKRA's direct customer. Agency pays for Agency Programme
and buys client Flow subscriptions at Agency Rates. Agency sets its
own client pricing. SYNKRA does not dictate agency retail.

## 5. Agency Account Architecture
ONE agency workspace. MULTIPLE isolated client environments.

Agency Workspace → Client A / B / C / D

Each client environment: own data, workflows, integrations,
connections, credentials, usage, permissions, activity, config,
add-on allocation, portal config.

Client isolation is MANDATORY. No cross-contamination.

## 6. Agency Client Authorization
Each client environment has its own authorized connections.
No unrestricted master credential. Agency does NOT receive raw OAuth
tokens.

## 7. Agency Free Workspace
No minimum client count. No minimum usage. No proof of large base.

> Build everything you want. Pay when you are ready to deploy it.

Free workspace allows:
- Apply for Agency account
- Create agency workspace
- Configure profile
- Explore environment
- Build + test workflows
- Create + configure draft client environments
- Prepare integrations + connections for testing
- Configure white-label branding
- Preview branded portal
- Prepare production configs

Restriction: NOT production. No live clients, workflows, portals.

## 8. Agency Production Activation
Pay when ready to deploy. Paid subscription relevant when moving from
Draft/Test → Production.

Unlocks: live clients, production workflows, production integrations,
client access, live portals, white-labelling, client management,
production usage, subscription allocation, add-on purchase.

## 9. Agency Tiers
- Agency 20: 20 clients, R699/month
- Agency 100: 100 clients, R1,499/month
- Agency 500: 500 clients, R2,999/month
- 500+: Custom sales process

## 10. What the Agency Fee Pays For
NOT payment for free clients.

Access to: agency workspace, client env management, provisioning,
production deployment, Agency Rates, white-label, portal, centralised
management, usage visibility, allocation, billing, handover, controls.

Client Flow subscriptions remain separate.

## 11. Agency Wholesale Flow Pricing
Agency pays SYNKRA per active client at wholesale. Agency sets own
retail. May mark up, bundle, absorb, charge management fee, combine
with consulting.

## 12. Agency Flow Discount Structure
- Agency 20: 35% off public Flow
- Agency 100: 40% off
- Agency 500: 40% off
- 500+: Custom

Represent internally as "Agency Rates" — avoid permanent public
percentage promises.

## 13. Agency Client Entitlements
Discount changes rate, not product. Basic entitlement = Basic.
Pro entitlement = Pro.

## 14. Agency Add-Ons
Separate from subscription. Agency buys wholesale, allocates + prices
for clients.

Direct prices (unchanged reference):
- AI: R0.10
- SMS: R0.90
- WhatsApp: R0.50
- Voice: R5/minute
- S3: R30/GB

Agency Rates are a wholesale schedule, not automatic % discount.

## 15. Agency Credits and Consumption
Client plans keep included allowances. Agency can purchase additional
capacity attributed per client.

## 16. Credit Expiration
- Included credits expire monthly
- Paid credits roll over up to 1 year
- FIFO: current included → oldest purchased → newer purchased

## 17. White-Label Client Portal
Portal reinforces agency relationship. Presentation layer over SYNKRA
infrastructure. Not a separate automation product.

## 18. White-Label Capabilities
Logo, name, colours, favicon, portal branding, subdomain, support info,
contact info, client-facing config.

Depth scales with tier:
- 20: Core
- 100: + custom portal subdomain
- 500: Advanced
- 500+: Custom

Free workspace: config + preview only. Live portals require paid tier.

## 19. Client Portal Scope
Lightweight. NOT a full Flow dashboard.

Client sees: package, allowance, usage, add-on balance, activity,
support info, requests, agency announcements, capacity requests,
basic billing (if agency chooses).

Client does NOT see: SYNKRA marketplace, developer tools,
integration development, other clients, other envs, agency internals,
direct SYNKRA billing.

## 20. Client Handover
Client env retains workflows, config, data, usage history, connections,
settings. Agency access removed. Client may become direct SYNKRA
customer depending on conversion process.

## 21. Agency Billing
Centralised: agency subscription, client envs, client subscriptions,
Agency Rates, add-ons, allocation, usage per client, capacity,
invoices, client commercial info.

## 22. Why the Agency Model Works
SYNKRA outsources customer acquisition + management to agencies.

Without agency: find → educate → sell → onboard → support → retain.
With agency: SYNKRA → Agency → multiple clients.

Agency Rate is part of distribution economics, not just a discount.

## 23-29. Student Programme
Separate from institutional model. For individual students.

Use cases: student businesses, startups, freelancing, client work,
lead capture, onboarding, notifications, CRM, e-commerce, invoicing,
project management, experimentation, learning.

Entitlement: FULL Flow plan functionality. Not crippled.
Pricing: Basic R149, Pro R249. Rate changes, not product.
Verification: institution identity / institutional email. Simple.
Business: student can operate own business under their account.
Customers of student business are NOT SYNKRA customers.
Student → Agency progression when managing multiple envs.

## 30. Student Organizations
Student society/org ≠ individual student account. Falls under
organization/community structure.

## 31-37. Community Access Programme
Separate from student + institutional.

Eligible: NPOs, NGOs, churches, community organizations, small
community associations, qualifying community-serving orgs.

Subsidy: 60% off standard Flow.
Examples: R199 → R79, R399 → R159.

Subsidise ACCESS, not consumption.

Community pays normal add-on pricing (AI, SMS, WhatsApp, Voice,
Storage).

Eligibility: application-based, 12 months then annual renewal.

Faith-based additional gate: church ≠ auto-qualify. Must show genuine,
ongoing community initiative providing tangible non-religious benefit.

Qualifying: soup kitchens, community gardens, book clubs, wellness
programmes, clothing/food drives, skills dev, youth dev, job support,
free recreation, social programmes.

Non-qualifying alone: worship, Bible study, prayer meetings, ordinary
youth ministry, discipleship.

Evidence: programme info, flyers, photos, reports, website, social,
schedules, attendance, impact data.

## 38-41. Institutional / Volume Based Pricing
Separate from Student / Community / Agency.

Institution is the customer. Purchases for organizational use.
Not individual student.

Staff operations: HR, leave, procurement, finance, faculty admin,
IT requests, comms, documents, compliance, approvals, onboarding,
offboarding, admin requests.

Student operations: applications, screening, routing, onboarding,
registration, documents, support, appointments, notifications,
transfers, academic admin, graduation.

Foundational (not premium add-ons): SSO, admin, roles, permissions,
provisioning, faculty/dept structure, audit, billing, usage mgmt,
data controls, governance, security.

NGOs/NPOs/community/faith-based qualifying + individual students →
their programmes. Everyone else → Volume Based Pricing.

## 42. Integrations
Not superficial connectors. Real capabilities: auth, authorization,
granular scopes, triggers, actions, search, get, create, update,
delete, sync, data retrieval/creation/update, event handling.

## 43. Integration Authentication
SYNKRA integration/auth layer. NOT exposing customer credentials to
third-party developers. Developer never receives raw OAuth tokens.

**NOTE: Nango was previously considered. DEPRECATED.**
**We use Activepieces' native auth layer.**

## 44. Granular Scopes
Respect underlying platform permissions. Least-privilege.
Customer authorizes only what's needed.

## 45. Current Integration Ecosystem
Slack, HubSpot, Zoho Books, ClickUp, Notion, Shopify, Typeform, Tally,
Calendly, Xero, Airtable, Monday, Asana, Pipedrive, Google Drive,
Google Sheets, Gmail, Google Forms.

Note: Google Drive + Gmail have had connection issues. Not fully
production-ready until verified.

## 46. New Integration Expansion
Target: +20 new platforms. Focus: GitHub, PayFast, Yoco, iKhokha,
Sage, WhatsApp Business, other SA payment platforms, SA business
systems, globally relevant SaaS, dev tools, CRM, finance, comms,
e-commerce, productivity.

South African relevance important.

## 47. Integration Marketplace
Build → Validate → Publish → Install → Use

Free to build. Free to list. Free to publish (reviewed).
Free for customers to install.

Customer needs active Flow subscription to use integration.

## 48. Developer Access
Access to build tools. NO access to customer credentials.

Provides: developer portal, API, SDKs, docs, dev tools, sandbox,
validation, publishing, status, security declarations.

## 49. Integration Review
Review: technical validity, auth, scopes, security, data handling,
functionality, errors, reliability, docs, naming, UX, compliance.

Statuses: Draft, Testing, Submitted, Under Review, Approved,
Published, Suspended, Deprecated.

## 50. Integration Developer Security
Customer authorizes → SYNKRA manages connection → Flow executes.

No raw credentials to developer.

## 51. Integration Economics
Integration ≠ automatic commission.

If SYNKRA facilitates transaction/money movement → possible
transaction economics. Otherwise no automatic %.

Integration access ≠ transaction commission.

## 52. Agency Integrations
Each client env has own connections. NO agency master credential.

Agency → Client Env → Client-authorized Integration Connection

## 53. Marketplace + Agency
Agencies use marketplace integrations within client envs.
Different clients → different integration sets.
Each client's connections remain separate.

## 54. Overall Account Architecture
- Standard: Customer → SYNKRA Flow
- Student: Student → Student Programme → Flow
- Community: Org → Community Access → Flow
- Institution: Institution → Volume Pricing → SYNKRA
- Agency: Agency → Agency Programme → Client Envs → Flow
- Developer: Developer → Developer Ecosystem → Marketplace → Customers

## 55. Programme Separation
Student: individuals
Community: qualifying community orgs
Institutional: universities + large orgs
Agency: agencies managing multiple clients

## 56. Core Pricing Philosophy
1. SYNKRA owns infrastructure
2. Standard Flow is reference product
3. Agency pricing is wholesale
4. Agency fees are access fees
5. Every active agency client has Flow subscription
6. Agencies determine own retail
7. Add-ons separate
8. Included credits expire monthly
9. Purchased credits roll over 1 year (FIFO)
10. Community subsidises access, not consumption
11. Students receive real product (not crippled)
12. Institutions get foundational infrastructure
13. Integrations are real ecosystem
14. Customer credentials protected

## 57. Commercial Flow of Money
- Direct: Customer → SYNKRA
- Student: Student → SYNKRA at Student pricing + normal add-ons
- Community: Org pays subsidised subscription + normal add-ons
- Institution: Volume Based Pricing
- Agency: Agency fee + client subscriptions at Agency Rates +
  add-ons at wholesale. Agency charges own clients.

## 58. Agency Economic Example
Agency 20 with 10 clients:
- Pays R699 platform fee
- Pays 10 client subscriptions at Agency Rate
- Clients NOT free
- Agency makes margin between SYNKRA rate and client price

## 59. Strategic Reason for Wholesale Pricing
Acquisition strategy. Exchange per-customer revenue for access to
agency's customer base. Low marginal infra cost.

## 60. Master Relationship Map
SYNKRA
├── Standard Flow Customers
├── Student Programme
├── Community Access (NPOs, NGOs, community orgs, qualifying faith-based)
├── Institutional / Volume Pricing
├── Agency Programme (20/100/500/500+ → client envs)
└── Integration Ecosystem (SYNKRA-built + third-party)

## 61. Final Operating Principles
- Flow is the product
- Programmes determine access + commercial treatment
- Agencies are distributors, not free-account holders
- Every active agency client is commercially accounted for
- Agency pricing is wholesale
- Agency controls its own markup
- White-labelling strengthens the agency relationship
- Client environments are isolated
- Customer integrations are separately authorized
- Developers do not receive raw customer credentials
- Integrations are a real ecosystem
- Students get affordable access to build real businesses
- Community organisations receive subsidised access for real benefit
- Community subsidies apply to access, not consumption
- Institutions receive volume pricing + foundational infrastructure
- SYNKRA's infra economics support these channels without reseller costs
