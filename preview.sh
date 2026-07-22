#!/usr/bin/env bash
# Local preview for the website, using real Jekyll (rbenv-managed).
set -euo pipefail

export PATH="$HOME/.rbenv/shims:$PATH"

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT="${PORT:-4000}"

cd "$DIR"
jekyll serve --port "$PORT" --detach
sleep 1

open "http://localhost:$PORT/"

echo "Preview running at http://localhost:$PORT"
echo "  Home:          http://localhost:$PORT/"
echo "  Privacy:       http://localhost:$PORT/privacy/"
echo "  Timeblindness: http://localhost:$PORT/timeblindness/"
echo "Stop with: pkill -f 'jekyll .*--port $PORT'"
