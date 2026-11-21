#!/bin/bash
PROJECT_DIR="/Users/danielsantander/Documents/Agrotech/agrotech-hq"
PORT=7770

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

NODE_BIN=""
if command -v node > /dev/null 2>&1; then
  NODE_BIN="$(command -v node)"
elif [ -x "/opt/homebrew/bin/node" ]; then
  NODE_BIN="/opt/homebrew/bin/node"
elif [ -x "/usr/local/bin/node" ]; then
  NODE_BIN="/usr/local/bin/node"
fi

cd "$PROJECT_DIR" || exit 1

if curl -s "http://localhost:$PORT" > /dev/null 2>&1; then
  open "http://localhost:$PORT"
  exit 0
fi

if [ -n "$NODE_BIN" ]; then
  nohup "$NODE_BIN" "$PROJECT_DIR/server.cjs" > /tmp/agrotech_7770.log 2>&1 < /dev/null &
fi

for i in {1..20}; do
  if curl -s "http://localhost:$PORT" > /dev/null 2>&1; then
    break
  fi
  sleep 0.2
done

open "http://localhost:$PORT"
