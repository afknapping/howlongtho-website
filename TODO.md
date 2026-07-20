# TODO

## Setup
- [x] Decide on repo name / whether this lives in its own GitHub repo or as a subfolder of a monorepo — own repo, `howlongtho-website`
- [x] Init git, create GitHub repo (`howlongtho-website`), push — https://github.com/afknapping/howlongtho-website
- [x] Enable GitHub Pages — custom domain set to `howlongtho.com` via CNAME file, build succeeded
- [x] Point `howlongtho.com` DNS at GitHub Pages (Hover) — A records live. "HTTPS enforced" had silently lapsed (bare `http://` was serving 200 directly instead of redirecting) — re-enabled and verified 2026-07-20, now returns a real 301 to `https://`
- [x] `www.howlongtho.com` CNAME added at Hover — redirects to apex over HTTP (HTTPS on www itself will show a cert warning since the cert only covers the canonical `howlongtho.com`; known GitHub Pages limitation, not worth fixing for now)
- [ ] Add Buttondown embed form (buttondown.com) to homepage
- [ ] Add App Store / Google Play badges (placeholder links until apps are live)
- [ ] Link to PWA demo at app.howlongtho.com (separate repo: `howlongtho-pwa`)

## Content
- [x] Write homepage copy — sourced verbatim from
  `marketing/copy/ios-app-store-content.md` in the main project folder (not
  this repo); no per-platform diversions (decided 2026-07-20); keep in sync
  manually, no generator yet
- [ ] Decide pre-launch vs post-launch mailing list copy (same list, swap CTA later)
- [x] Add privacy policy page — `privacy.md`, linked from the homepage footer
- [x] Decide which subtitle option ships — "Time you can actually feel"

## Later (not now)
- [ ] Evaluate migrating from plain markdown to Jekyll
