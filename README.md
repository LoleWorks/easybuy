# EasyBuy Moldova — Bilbor Landing Page

A React + Vite landing page for the Bilbor water Meta ad campaign, targeting
pregnant women and mothers in Moldova.

## Stack
- React 18 + Vite (no SSR/routing needed — single page)
- Plain CSS (`src/index.css`, custom-property tokens, light/dark aware)
- RO/RU copy toggle (`src/data/content.js`)
- ElevenLabs Conversational AI widget (Ana), embedded live via `<elevenlabs-convai>`
- Order form → Cloudflare Pages Function → the same Google Sheet Ana's WhatsApp tool writes to, plus a WhatsApp handoff

## Local development
```bash
npm install
npm run dev
```
Note: the ElevenLabs widget and the `/api/submit-order` function only work
on a real deployment (Cloudflare Pages) or via `wrangler pages dev`, not
plain `vite dev` — the widget needs a live WebSocket to ElevenLabs, and the
API route is a Cloudflare Pages Function.

## Deploying to Cloudflare Pages
1. In the Cloudflare dashboard: **Workers & Pages -> Create -> Pages -> Connect to Git**, pick this repo.
2. Build command: `npm run build`. Build output directory: `dist`.
3. Cloudflare auto-detects `functions/api/submit-order.js` at the repo root — no extra config needed.
4. Under **Settings -> Environment variables**, add `GOOGLE_SHEET_SECRET` (type **Secret**) with the value Ana's `log_order_to_sheet` tool uses — given to you separately, not stored in this repo.
5. Redeploy after adding the environment variable (Functions only pick up new env vars on a fresh deploy).
6. Point a custom domain (e.g. a subdomain of easybuy.md) at the Pages project under **Custom domains**.

## Why a real deploy instead of a Claude Artifact preview
A Claude Artifact runs in a sandbox that blocks outbound network calls except loading a few CDN scripts. Inside that sandbox, the ElevenLabs widget's script loads but can never open its live WebSocket, and the order form can't safely reach the Google Sheet (the write secret would either be blocked by the sandbox or have to live in public client-side code). On real hosting, neither problem exists — the widget connects for real, and the secret stays server-side in the Pages Function the whole time.

## Correcting two figures from the original design draft
- The bulk-price threshold is **6 baxuri** (pay for 5, get 6), not 5 — matching what Ana's live agent actually honors.
- Free delivery is **≥600 lei total**, not a box-count threshold — matching the policy used everywhere else in this campaign.

If either of those was actually intentional in the design and Ana should be updated to match instead, flag it and both `src/data/content.js` and Ana's config can be aligned.
