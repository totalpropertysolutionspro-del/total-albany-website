# TPS Pro Website

Public-facing website for **Total Property Solutions Pro LLC** — commercial cleaning across Troy, Albany, and the NY Capital Region.

## URLs

- **Live (custom domain, after DNS):** https://tpsprocleaning.com
- **GitHub Pages (pre-domain / fallback):** https://totalpropertysolutionspro-del.github.io/total-albany-website/

## Stack

Single static HTML file with embedded CSS. No build step, no dependencies. Served directly by GitHub Pages.

## Files

- `index.html` — entire site (HTML + CSS + GA4 snippet)
- `CNAME` — custom domain mapping for GitHub Pages → `tpsprocleaning.com`
- `_config.yml` — Jekyll/Pages metadata

## Updating the site

```bash
# edit index.html, then:
git add index.html
git commit -m "update site"
git push origin main
```

GitHub Pages republishes automatically within 30–60 seconds.

## Google Analytics

The GA4 snippet at the top of `index.html` uses placeholder ID `G-XXXXXXXXXX`. Replace both occurrences with the real measurement ID from your GA4 property.

## DNS — Cloudflare records to point `tpsprocleaning.com` at GitHub Pages

Add these at the Cloudflare DNS dashboard for `tpsprocleaning.com`:

### A records (apex `tpsprocleaning.com` → GitHub Pages)

| Type | Name | Value             | Proxy   |
|------|------|-------------------|---------|
| A    | @    | 185.199.108.153   | DNS only |
| A    | @    | 185.199.109.153   | DNS only |
| A    | @    | 185.199.110.153   | DNS only |
| A    | @    | 185.199.111.153   | DNS only |

### CNAME (www → GitHub Pages)

| Type  | Name | Value                                   | Proxy   |
|-------|------|-----------------------------------------|---------|
| CNAME | www  | totalpropertysolutionspro-del.github.io | DNS only |

> Set the Cloudflare proxy to **DNS only** (gray cloud) for first-time issuance of the GitHub Pages SSL cert. After HTTPS is confirmed working, you can re-enable the orange-cloud proxy if desired.

## After DNS propagates

1. In the GitHub repo: **Settings → Pages**, confirm the custom domain shows `tpsprocleaning.com` and "Enforce HTTPS" is checked.
2. Update the website URL on **Google Business Profile** to `https://tpsprocleaning.com`.
3. Update business cards, email signatures, and social profiles.

## Branch notes

- `main` — live static site (this content)
- `replit-archive` — preserves the original Replit-built React/Vite/Express scaffold that previously lived on this repo, in case any of that work is needed later

## Owner

Total Property Solutions Pro LLC
100 State Street, Suite 370 · Albany, NY 12207
(518) 948-7156 · crcp183@gmail.com
