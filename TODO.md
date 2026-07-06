# TODO

## Setup
- [x] Decide on repo name / whether this lives in its own GitHub repo or as a subfolder of a monorepo — own repo, `howlongtho-website`
- [x] Init git, create GitHub repo (`howlongtho-website`), push — https://github.com/afknapping/howlongtho-website
- [x] Enable GitHub Pages — custom domain set to `howlongtho.com` via CNAME file, build succeeded
- [x] Point `howlongtho.com` DNS at GitHub Pages (Hover) — A records live, HTTPS enforced, cert valid through 2026-10-03
- [x] `www.howlongtho.com` CNAME added at Hover — redirects to apex over HTTP (HTTPS on www itself will show a cert warning since the cert only covers the canonical `howlongtho.com`; known GitHub Pages limitation, not worth fixing for now)
- [ ] Add Buttondown embed form (buttondown.com) to homepage
- [ ] Add App Store / Google Play badges (placeholder links until apps are live)
- [ ] Link to PWA demo at app.howlongtho.com (separate repo: `howlongtho-pwa`)

## Content
- [x] Write homepage copy — sourced from the shared content base, see
  `marketing/copy/content-base.md` in the main project folder (not this repo);
  keep homepage in sync with it manually, no generator yet
- [ ] Decide pre-launch vs post-launch mailing list copy (same list, swap CTA later)
- [ ] Add privacy policy page
- [ ] Decide which subtitle option ships (see content-base.md open question) and
  finalize the hero subhead

## Later (not now)
- [ ] Evaluate migrating from plain markdown to Jekyll
