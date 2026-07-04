# HowLongTho — Website

Marketing site for HowLongTho, deployed via GitHub Pages at howlongtho.com.

## What this is

- A static, markdown-based site (plain files for now — no Jekyll config yet, just letting
  GitHub Pages' default processing render the `.md` files).
- Captures emails via a Buttondown embed.
- Links out to the PWA demo (app.howlongtho.com, separate repo), the iOS App Store, and
  Google Play once those are live.
- Hosts the privacy policy.

## Structure

- `index.md` — homepage
- `TODO.md` — running task list

## Deployment

- Repo: https://github.com/afknapping/howlongtho-website
- GitHub Pages: enabled, source = `main` branch, root. Custom domain set via the
  `CNAME` file (contains `howlongtho.com`).
- DNS (at Hover, registrar for howlongtho.com): point the apex domain at GitHub Pages
  with four `A` records on `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
  - Optionally add `AAAA` records on `@` for IPv6:
    `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- Once DNS propagates, GitHub will auto-issue an HTTPS cert; enable "Enforce HTTPS" in
  the repo's Pages settings once available.
- `app.howlongtho.com` (PWA, separate `howlongtho-pwa` repo) needs its own `CNAME`
  record at Hover pointing to `afknapping.github.io` once that repo exists.

## Later

- Consider migrating to Jekyll (or another static site generator) once the site outgrows
  plain markdown — not needed yet.
