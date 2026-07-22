#!/usr/bin/env bash
# Local preview for the website. Simulates Jekyll's {% include %} resolution
# (no local Jekyll install needed) and serves the result, then opens it in
# your default browser.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STAGE="$(mktemp -d)"
PORT="${PORT:-8743}"

cp -r "$DIR/fonts" "$STAGE/"
cp -r "$DIR/assets" "$STAGE/"

python3 - "$DIR" "$STAGE" <<'PYEOF'
import sys, re, os
site_dir, stage = sys.argv[1], sys.argv[2]
includes_dir = f"{site_dir}/_includes"
includes = {f: open(f"{includes_dir}/{f}").read() for f in os.listdir(includes_dir)}
for name in ["index.md", "privacy.md"]:
    text = open(f"{site_dir}/{name}").read()
    text = re.sub(r'^---\n.*?\n---\n', '', text, flags=re.S)
    for inc_name, inc_content in includes.items():
        text = text.replace('{% include ' + inc_name + ' %}', inc_content)
    out = name.replace('.md', '.html')
    open(f"{stage}/{out}", 'w').write(text)
PYEOF

cd "$STAGE"
python3 -m http.server "$PORT" > /dev/null 2>&1 &
SERVER_PID=$!
sleep 1

open "http://localhost:$PORT/index.html"

echo "Preview running at http://localhost:$PORT (PID $SERVER_PID)"
echo "  Home:    http://localhost:$PORT/index.html"
echo "  Privacy: http://localhost:$PORT/privacy.html"
echo "Stop with: kill $SERVER_PID"
