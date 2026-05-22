#!/bin/bash
# ── Onari Fitness — Lancement local ──

PORT=4242
DEPLOY_DIR="$(cd "$(dirname "$0")/deploy" && pwd)"

# Tue un éventuel serveur déjà lancé sur ce port
lsof -ti tcp:$PORT | xargs kill -9 2>/dev/null

# Lance le serveur HTTP en arrière-plan
python3 -m http.server $PORT --directory "$DEPLOY_DIR" &>/dev/null &
SERVER_PID=$!

echo "✅  Serveur lancé (PID $SERVER_PID) → http://localhost:$PORT"

# Attend que le serveur réponde (max 3s)
for i in {1..6}; do
  sleep 0.5
  curl -s "http://localhost:$PORT" > /dev/null && break
done

# Ouvre dans Chrome
open -a "Google Chrome" "http://localhost:$PORT"

echo "🚀  Onari ouvert dans Chrome"
