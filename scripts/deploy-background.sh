#!/bin/bash
# Synkra Flow — background build + deploy
# Survives terminal close. Logs to /tmp/synkra-deploy-<timestamp>.log

set -o pipefail

LOG="/tmp/synkra-deploy-$(date +%Y%m%d-%H%M%S).log"
LOCK="/tmp/synkra-deploy.lock"

# Prevent concurrent builds
if [ -e "$LOCK" ]; then
  PID=$(cat "$LOCK")
  if kill -0 "$PID" 2>/dev/null; then
    echo "ABORT: another deploy already running (PID $PID)" | tee -a "$LOG"
    exit 1
  fi
  rm -f "$LOCK"
fi
echo $$ > "$LOCK"

trap 'rm -f "$LOCK"' EXIT

exec >> "$LOG" 2>&1

echo "======================================"
echo "Synkra Flow deploy started: $(date)"
echo "PID: $$"
echo "Log: $LOG"
echo "======================================"

cd /root/synkra-flow

TAG="synkra-flow:$(date +%s)"
echo ""
echo "--- Typecheck ---"
if ! bash scripts/typecheck.sh; then
  echo "ABORT: typecheck failed"
  exit 1
fi

echo ""
echo "--- Build ($TAG) ---"
if ! docker build -t synkra-flow:latest -t "$TAG" -t synkra-flow:keep -f Dockerfile . ; then
  echo "ABORT: docker build failed"
  exit 1
fi
echo "BUILD OK"

echo ""
echo "--- Deploy ---"
docker rm -f synkra-flow-app 2>/dev/null || true

docker run -d --name synkra-flow-app \
  --network synkraflow \
  --env-file /root/synkra-flow/.env \
  -e AP_CONTAINER_TYPE=APP \
  -p 8199:80 \
  -l traefik.enable=true \
  -l traefik.docker.network=coolify \
  -l "traefik.http.routers.synkraflow.entrypoints=https" \
  -l "traefik.http.routers.synkraflow.rule=Host(\`flow.synkra.co.za\`) || Host(\`automations.synkra.co.za\`)" \
  -l traefik.http.routers.synkraflow.service=synkraflow \
  -l traefik.http.routers.synkraflow.tls=true \
  -l traefik.http.routers.synkraflow.tls.certresolver=letsencrypt \
  -l traefik.http.services.synkraflow.loadbalancer.server.port=80 \
  synkra-flow:keep

docker network connect coolify synkra-flow-app 2>/dev/null || true

echo ""
echo "--- Waiting 45s for boot ---"
sleep 45

echo ""
echo "--- Public check ---"
curl -sS -o /dev/null -w "public: %{http_code}\n" https://flow.synkra.co.za/ || echo "curl failed"

echo ""
echo "--- Container status ---"
docker ps --filter name=synkra-flow-app --format "{{.Names}} | {{.Status}} | {{.CreatedAt}}"

echo ""
echo "======================================"
echo "Deploy finished: $(date)"
echo "======================================"
