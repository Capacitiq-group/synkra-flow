#!/usr/bin/env bash
#
# Session B — tenant isolation proof.
#
# Requires:
#   COOKIE_A  — signed-in cookie header for agency user A
#   COOKIE_B  — signed-in cookie header for agency user B
#
# Obtain by signing in as two different users in a browser and copying
# the Cookie header from DevTools (any authenticated request).
#
# Usage:
#   BASE=https://flow.synkra.co.za \
#   COOKIE_A='token=...' \
#   COOKIE_B='token=...' \
#   bash scripts/verify-tenant-isolation.sh
set -uo pipefail

BASE="${BASE:-https://flow.synkra.co.za}"
COOKIE_A="${COOKIE_A:-}"
COOKIE_B="${COOKIE_B:-}"

if [[ -z "$COOKIE_A" || -z "$COOKIE_B" ]]; then
  echo "FATAL: set COOKIE_A and COOKIE_B env vars"
  echo "  COOKIE_A='<cookie header for agency user A>'"
  echo "  COOKIE_B='<cookie header for agency user B>'"
  exit 1
fi

PASS=0; FAIL=0
say() { printf '%s\n' "$*"; }
ok()  { PASS=$((PASS+1)); say "  ok   $*"; }
bad() { FAIL=$((FAIL+1)); say "  FAIL $*"; }
jq_get() { python3 -c "import sys,json;d=json.load(sys.stdin);print(d$(printf '%s' "$1"))" 2>/dev/null || true; }

say "===================================================="
say "Tenant isolation proof — BASE=$BASE"
say "===================================================="

# 1. Each user's agency is distinct
A_AGENCY=$(curl -sS "$BASE/api/v1/synkra/agency" -H "cookie: $COOKIE_A")
B_AGENCY=$(curl -sS "$BASE/api/v1/synkra/agency" -H "cookie: $COOKIE_B")

A_ID=$(printf '%s' "$A_AGENCY" | jq_get "['id']")
B_ID=$(printf '%s' "$B_AGENCY" | jq_get "['id']")

say "A agency id: $A_ID"
say "B agency id: $B_ID"
say ""

if [[ -n "$A_ID" && -n "$B_ID" && "$A_ID" != "$B_ID" ]]; then
  ok "A and B have different agencies"
else
  bad "A and B share or lack an agency"
fi

# 2. Each user creates a client
A_CLIENT=$(curl -sS -X POST "$BASE/api/v1/synkra/agency/clients" \
  -H "cookie: $COOKIE_A" -H 'content-type: application/json' \
  -d '{"name":"iso-A-'$(date +%s)'","clientTier":"starter"}')
B_CLIENT=$(curl -sS -X POST "$BASE/api/v1/synkra/agency/clients" \
  -H "cookie: $COOKIE_B" -H 'content-type: application/json' \
  -d '{"name":"iso-B-'$(date +%s)'","clientTier":"starter"}')

A_CID=$(printf '%s' "$A_CLIENT" | jq_get "['id']")
B_CID=$(printf '%s' "$B_CLIENT" | jq_get "['id']")

say "A client id: $A_CID"
say "B client id: $B_CID"
say ""

if [[ -n "$A_CID" && -n "$B_CID" ]]; then
  ok "both clients created"
else
  bad "client creation failed"
  say "A raw: $A_CLIENT"
  say "B raw: $B_CLIENT"
fi

# 3. A's list only contains A's client
A_LIST=$(curl -sS "$BASE/api/v1/synkra/agency/clients" -H "cookie: $COOKIE_A")
if printf '%s' "$A_LIST" | grep -q "$B_CID"; then
  bad "B's client id appeared in A's client list — LEAK"
else
  ok "A's list does not contain B's client"
fi

# 4. B's list only contains B's client
B_LIST=$(curl -sS "$BASE/api/v1/synkra/agency/clients" -H "cookie: $COOKIE_B")
if printf '%s' "$B_LIST" | grep -q "$A_CID"; then
  bad "A's client id appeared in B's client list — LEAK"
else
  ok "B's list does not contain A's client"
fi

# 5. Anonymous cannot fetch agency
CODE=$(curl -sS -o /dev/null -w '%{http_code}' "$BASE/api/v1/synkra/agency")
if [[ "$CODE" == "401" || "$CODE" == "403" ]]; then
  ok "anonymous GET /agency → $CODE"
else
  bad "anonymous GET /agency → $CODE (expected 401/403)"
fi

# 6. Portal token from A does not reveal B's client
A_PORTAL=$(curl -sS -X POST \
  "$BASE/api/v1/synkra/agency/clients/$A_CID/portal/enable" \
  -H "cookie: $COOKIE_A" -H 'content-type: application/json')
A_TOKEN=$(printf '%s' "$A_PORTAL" | jq_get "['portalToken']")

if [[ -n "$A_TOKEN" ]]; then
  PORTAL_BODY=$(curl -sS "$BASE/api/v1/synkra/agency/public/$A_TOKEN")
  if printf '%s' "$PORTAL_BODY" | grep -q "$B_CID"; then
    bad "A's portal leaked B's client id"
  else
    ok "A's portal does not leak B's client"
  fi
else
  bad "could not enable portal for A"
fi

# 7. B's cookie cannot enable a portal on A's client
CODE=$(curl -sS -o /dev/null -w '%{http_code}' -X POST \
  "$BASE/api/v1/synkra/agency/clients/$A_CID/portal/enable" \
  -H "cookie: $COOKIE_B" -H 'content-type: application/json')
if [[ "$CODE" == "200" ]]; then
  bad "B could enable portal on A's client — LEAK"
else
  ok "B on A's client portal enable → $CODE"
fi

say ""
say "----------------------------------------------------"
say "Passed: $PASS    Failed: $FAIL"
[[ "$FAIL" -eq 0 ]] || exit 1
