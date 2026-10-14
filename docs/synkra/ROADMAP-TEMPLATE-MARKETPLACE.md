# Template Marketplace — Roadmap Note

**Added:** 14 October 2026
**Status:** Planned, not started
**Priority:** Post-beta, 4-6 weeks after public launch

---

## Concept

A marketplace where Synkra Flow users can publish workflow templates
for other users to install and use. Templates can be free or paid.

This turns the platform into a two-sided ecosystem:

- **Publishers** create templates that solve specific problems
- **Consumers** install templates instead of building from scratch
- **Synkra** takes a revenue share on paid templates

---

## Why this matters

1. **Distribution** — publishers bring their own audiences
2. **Activation** — new users can install working workflows instantly
3. **Stickiness** — once a user has invested in templates, churn drops
4. **Revenue** — Synkra takes a share of every paid template

---

## Open questions to resolve before building

- Commission percentage on paid templates
- Payment processing (Paystack direct? Synkra holds funds?)
- Review process before templates go public
- Versioning (what happens when a template updates?)
- Dependencies (what if a template needs pieces the installer doesn't have?)
- Refunds (how do we handle a bad template?)
- Ownership (does the publisher retain copyright? Can they remove it?)
- Minimum quality bar (documentation, test coverage, sample data)
- Free vs paid rules (can anyone publish paid? Need verification first?)

---

## Rough scope

- Marketplace browsing page (grid + search)
- Template detail page (screenshots, install button, reviews)
- Publisher dashboard (list, edit, unpublish)
- Install flow (creates a flow in the user's workspace)
- Review queue (Synkra admin approves before public)
- Payouts for paid templates
- Commission tracking

Estimated 6-10 batches to build properly.

---

## Dependency

The current template tables (`template`, `flow_template`) are empty
after we hid them in the V1 build. We will need to rebuild the
template publishing flow from scratch, which is part of this work.

END OF NOTE.
