#!/bin/bash
# Real type check. Uses tsconfig.app.json (the one that actually includes files).
set -e

cd /root/synkra-flow/packages/web
echo "══════════ WEB ══════════"
set -o pipefail
npx tsc -p tsconfig.app.json --noEmit
echo "✓ web OK"

cd /root/synkra-flow/packages/server/api
echo ""
echo "══════════ API ══════════"
npx tsc -p tsconfig.app.json --noEmit
echo "✓ api OK"

echo ""
echo "✓✓✓ ALL TYPES CLEAN — SAFE TO BUILD"
