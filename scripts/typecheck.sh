#!/bin/bash
# Fail-fast type check for both packages. Use before EVERY deploy.
set -e

cd /root/synkra-flow/packages/web
echo "══════════ WEB ══════════"
set -o pipefail
npx tsc -p tsconfig.json --noEmit
echo "✓ web OK"

cd /root/synkra-flow/packages/server/api
echo ""
echo "══════════ API ══════════"
npx tsc -p tsconfig.app.json --noEmit
echo "✓ api OK"

echo ""
echo "✓✓✓ ALL TYPES CLEAN — SAFE TO BUILD"
