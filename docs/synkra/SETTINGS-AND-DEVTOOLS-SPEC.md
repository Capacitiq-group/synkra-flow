# Synkra Flow — Settings + Developer Tools Architecture
# Status: design approved, phased build
# Date: 14 October 2026

## Core principle

Every tab answers a different question. No overlap.

- General: How should Flow behave?
- Variables: What reusable values can my workflows access?
- Workspace: How is this workspace configured and managed?
- Account: Who am I, and what are my personal preferences?
- Security: How is access to my account and workspace protected?
- Developer Tools: How do I access Flow programmatically and extend it?

## Settings (five tabs)

### General — product behaviour
- Default workflow settings
- Execution preferences
- Date/time format
- Time zone
- Notification preferences (if not in Account)
- Interface preferences

### Variables — reusable workflow values
Scope organised by type:
- Workspace variables (COMPANY_NAME)
- Environment-specific variables (API_BASE_URL) — if supported
- User-defined variables (DEFAULT_CURRENCY)

Each variable: name, value, scope, description.
CRITICAL: sensitive credentials do NOT belong here. They go to a dedicated
secrets facility with encryption, masking, access controls.

### Workspace — the working environment
- Workspace details (name, logo, identity)
- Members (invite, remove, view)
- Roles and permissions
- Workspace preferences
- Workspace management (ownership, transfer, deletion)
- Workspace activity

Changing workspace name ≠ changing user's personal profile.
Removing a member ≠ deleting their Flow account.
Agency management does NOT belong here — it has its own area.

### Account — the individual user
- Profile (name, picture, personal details)
- Email + verification status
- Personal preferences (language, interface)
- Personal notifications
- Connected accounts (login methods)
- Account management (deactivate, delete)

Follows the person, not the workspace.
Email change triggers verification.
Deletion explains consequences first.

### Security — narrow, defined purpose
- Password (change)
- MFA (configure)
- Active sessions (view, revoke)
- Login activity (review)
- Connected authentication methods
- Security alerts

DISTINCTION:
- Connecting Slack to a workflow = Integrations/Connections area
- Configuring Slack as a login method = Security
Workspace admins don't see members' private auth credentials.

## The three concepts (do not merge)

| Concept | What it is | Where |
|---------|-----------|-------|
| Developer Tools | Programmatic access, technical resources | flow.synkra.co.za |
| Developer Portal | Learn, build, test, distribute | developers.synkra.co.za (proposed) |
| Integration Marketplace | Discover, install integrations | flow.synkra.co.za (user-facing) |

## Navigation structure

### Main
- Dashboard
- Workflows
- Executions
- Integrations
- Agency (if applicable)

### Platform management
- Developer Tools  ← NEW top-level
- Billing
- Settings

### Supporting
- Documentation
- Help and support
- User profile (avatar menu)

Developer Tools and Billing both need direct sidebar access. Neither
should be buried inside Settings. They represent distinct activities:
- Billing = commercial relationship
- Developer Tools = programmatic access + extensibility

## Developer Tools — sections

Implement only what backend supports. Start with Overview + Docs link.

### A. Overview (landing)
Answers: What can I do? What have I configured? What next?
- API access status
- Active API credentials count
- Registered applications count
- Webhook endpoints count
- Integration development status
- Recent API activity
- Link to developer docs

### B. API & Credentials
- API keys / tokens
- Create credentials with permissions
- Revoke credentials
- Credential names
- Permissions and scopes
- Expiration support
- Usage information

Rules:
- Don't mix customer credentials, third-party integration credentials,
  and internal service credentials in one screen.
- Never display secret again after creation. Safe rotation only.
- Don't build this UI before backend auth/permission/revocation exists.

### C. Webhooks
- Register endpoints
- Select events
- Configure authentication / signing secrets
- View delivery attempts
- Inspect response status
- Retry failed deliveries
- Disable/delete endpoints

Webhooks ≠ General preferences. They're an integration resource.

### D. Applications
- Create application (name, description, redirect URLs)
- Manage OAuth credentials
- Define permissions
- View status
- Dev vs production configurations

Two types:
- Private applications (customer's own use)
- Public integrations (for other Flow users, go through review)

Different approval processes.

### E. Developer Activity
- API request logs
- Error responses
- Authentication failures
- Webhook delivery history
- Rate-limit information

Multi-tenant safety: developers must not inspect other customers'
data just because their integration processes events.

### F. Documentation
Prominent link to docs.synkra.co.za.
Do NOT duplicate documentation inside the dashboard.

## Resource allocation table

| Resource | Location |
|----------|----------|
| Flow API credentials | Developer Tools → API & Credentials |
| Webhook endpoints | Developer Tools → Webhooks |
| Registered OAuth apps | Developer Tools → Applications |
| Integration submission | Developer Portal |
| Marketplace listing/install | Marketplace |
| Workspace variables | Settings → Variables |
| Sensitive workflow creds | Connections area |
| Personal login methods + MFA | Settings → Security |
| Workspace membership/roles | Settings → Workspace |
| Subscription and invoices | Billing |

## Critical distinction

Flow API token = authenticate external app TO Flow.
Workflow credential = authenticate Flow's workflow TO external service.

These are different. Don't put them in one screen.

Workspace variable (COMPANY_NAME) ≠ secret (private key).
Different storage, different masking, different access.

## Build phases

### Phase 1 — clean current Settings (this week)
- Fix sidebar label "Connections" (verify not reverted)
- Fix Workspace sub-tab label "Connections"
- Hide Environment sub-tab (no value for our audience)
- Trim Pieces table columns: Name + logo only
- Do NOT collapse Workspace — keep but trim

### Phase 2 — Developer Tools shell (next session)
- Top-level sidebar item "Developer Tools"
- Landing page (Overview) with placeholders
- Sections: API & Credentials, Webhooks, Applications, Activity, Docs
- Wire to existing AP API endpoints where they exist
- All sections return "coming soon" if backend missing

### Phase 3 — fill in Developer Tools (weeks)
- API credentials (needs backend work)
- Webhooks (needs backend work)
- Applications (needs OAuth app registration backend)
- Activity logs

### Phase 4 — Developer Portal (future)
- Separate subdomain developers.synkra.co.za
- Learn, build, test, distribute
- Separate from Developer Tools

## Anti-patterns to avoid

- Do NOT add a "million tabs" — one clear concept per section
- Do NOT bury Developer Tools inside Settings
- Do NOT put variables in Workspace tab (they have their own)
- Do NOT expose credentials as variables
- Do NOT show secrets again after creation
- Do NOT merge the three concepts (Tools/Portal/Marketplace)
