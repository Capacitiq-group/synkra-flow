#!/usr/bin/env bash
# emergency-restore.sh
#
# Take a fresh VPS from zero to running Synkra Flow.
# Requires: docker, git, git auth to Capacitiq-group/synkra-flow,
#           and your .env contents saved somewhere safe.
#
# Usage:
#   bash scripts/emergency-restore.sh
#
# It will:
#   1. Clone (or pull) the repo from the backup branch
#   2. Prompt you to paste .env contents
#   3. Build the app image
#   4. Launch app + worker + postgres + redis
#   5. Health-check

set -euo pipefail

REPO_URL="https://github.com/Capacitiq-group/synkra-flow.git"
BRANCH="backup/2026-10-16-vps-reset"
TARGET="/root/synkra-flow"

echo "==============================================="
echo "  Synkra Flow — emergency restore"
echo "==============================================="

# ---- 1. repo ----
if [ -d "$TARGET/.git" ]; then
  echo "[1/5] repo exists — pulling $BRANCH"
  cd "$TARGET"
  git fetch origin "$BRANCH"
  git checkout "$BRANCH"
  git pull origin "$BRANCH"
else
  echo "[1/5] cloning $BRANCH into $TARGET"
  git clone -b "$BRANCH" "$REPO_URL" "$TARGET"
  cd "$TARGET"
fi

# ---- 2. env ----
if [ ! -s "$TARGET/.env" ]; then
  echo
  echo "[2/5] .env is missing or empty."
  echo "Paste the contents of your saved .env now."
  echo "Finish with a line containing only: EOF"
  echo
  cat > "$TARGET/.env"
  echo
  echo "✓ .env written ($(wc -l < "$TARGET/.env") lines)"
else
  echo "[2/5] .env already present ($(wc -l < "$TARGET/.env") lines)"
fi

# ---- 3. typecheck ----
echo "[3/5] typecheck"
bash scripts/typecheck.sh

# ---- 4. build + deploy ----
echo "[4/5] building + deploying (this takes ~5 min)"
rm -f /tmp/synkra-deploy.lock
bash scripts/deploy-background.sh

# ---- 5. verify ----
echo "[5/5] verify"
curl -sS -o /dev/null -w "public: %{http_code}\n" https://flow.synkra.co.za/ || true

echo
echo "==============================================="
echo "  Restore complete. Check the URL above."
echo "==============================================="
