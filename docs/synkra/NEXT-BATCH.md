# NEXT-BATCH: SA Pieces Rebuild
# Session C follow-up

## What this batch does

Fixes everything the audit found wrong in the SA piece library.
Every piece was checked against the vendor's real API docs.

## DELETE

- @synkra/piece-drop
  Reason: fake company. drop.co.za is a parked domain for sale.
  Every endpoint (api.drop.co.za, sandbox-api.drop.co.za) has no DNS.
  Whole piece was hallucinated by a previous AI session.

- @synkra/piece-netcash
  Reason: Netcash has no REST API. Real integration is SOAP at
  ws.netcash.co.za. We already have 7 payment gateways. Not worth it.

## NEW

- @synkra/piece-droppa
  Replaces Drop. Droppa is a real SA courier with a documented API.
  Base: https://www.droppergroup.co.za/droppa/services/v1
  Auth: Bearer API_KEY:SERVICE_ID
  Actions: Get Same-Day Quote, Create Booking, Get Booking, Cancel Booking.

## REWRITE

- @synkra/piece-bulksms
  Old: https://bulksms.2way.co.za/eapi/submission, username/password auth.
  New: https://api.bulksms.com/v1, HTTP Basic with token_id:token_secret.
  Endpoints: POST /messages, GET /profile.

- @synkra/piece-takealot
  Old: https://seller-api.takealot.com/v1/orders
  New: https://marketplace-api.takealot.com/v1
  Auth: X-API-Key header.
  Endpoints: /offers, /sales, /shipments, /returns, /seller.

- @synkra/piece-ikhokha
  Old: https://api.ikhokha.com (base is correct, but auth is wrong).
  New: same base but HMAC-SHA256 signature required.
  Headers: IK-APPID, IK-SIGN.
  Signature: HMAC_SHA256(path + rawBody, AppSecret).hex.

## FIX BASE URL

- @synkra/piece-yoco
  Old: https://online.yoco.com/v1
  New: https://payments.yoco.com/api

- @synkra/piece-peach-payments
  Old: https://api.peachpayments.com/v2
  New: https://secure.peachpayments.com/v2 (live)
       https://testsecure.peachpayments.com/v2 (sandbox)

- @synkra/piece-bob-go
  Old: https://api.bobgo.co.za (missing /v2)
  New: https://api.bobgo.co.za/v2/
  Auth change: bearer token (was CustomAuth with api_key)

## CLEANUP

- @synkra/piece-snapscan
  Remove dead reference to merchant.snapscan.co.za.
  Keep pos.snapscan.io (that one is real).

## LEAVE ALONE

- @synkra/piece-ozow (deprecated API but still works)
- @synkra/piece-payfast (base correct)
- @synkra/piece-paygate (base correct)
- @synkra/piece-uber-direct (base correct)
- @synkra/piece-pargo (base correct, no public docs)
- @synkra/piece-courier-guy (base correct)
- @synkra/piece-synkra-chat (internal)

## How we ship

Pieces live as pre-bundled tgz in
packages/server/api/src/assets/synkra-pieces/.

The bundled JS inside each tgz IS the piece. There is no TypeScript
source in the tree to recompile.

Process per piece:
1. Extract tgz to /tmp/pieces-work/<name>/
2. Edit package/src/index.js (minified but readable)
3. Re-pack with the same file layout
4. Copy back to assets/synkra-pieces/
5. Bump the version in BUNDLED_PIECES (0.1.x -> 0.2.0)
   so the boot seed installs the new one.

## Version bumps

Existing (keep at 0.1.x, no change):
- synkra-chat 0.1.0
- payfast 0.1.0
- yoco 0.1.1
- ikhokha 0.1.1
- courier-guy 0.1.0
- bob-go 0.1.0
- uber-direct 0.1.0
- pargo 0.1.0
- ozow 0.1.0

Bumping to 0.2.0 (new file at synkra-piece-<name>-0.2.0.tgz):
- snapscan
- paygate (logo only, no code change)
- peach-payments
- takealot
- bulksms
- netcash (deleted, no bump)

Removing from list:
- drop
- netcash

Adding:
- droppa 0.1.0

## Order of work

Phase 1: Extract all pieces to /tmp/pieces-work/
Phase 2: Easy base URL fixes (yoco, peach, bob-go, snapscan)
Phase 3: Auth rewrites (ikhokha, bulksms)
Phase 4: Full rewrite (takealot)
Phase 5: Delete drop + netcash; build droppa
Phase 6: Re-pack everything, update BUNDLED_PIECES, typecheck, build, deploy

## Verification checklist (after deploy)

- [ ] Netcash not in pieces list
- [ ] Drop not in pieces list
- [ ] Droppa appears with logo
- [ ] BulkSMS appears with correct auth form
- [ ] Takealot appears with X-API-Key auth
- [ ] iKhokha auth form has AppID + AppSecret fields
- [ ] Bob Go auth form has Bearer token
- [ ] Yoco, Peach, SnapScan unchanged from user perspective
- [ ] All 8 SA pieces: Netcash gone, Drop gone, Droppa new
