# Chevalier Law LLC — Next.js Website

A responsive, production-ready site built with Next.js (App Router) and Tailwind CSS.

## Features
- Pages per the functional spec: Home, Who We Are, People & Person Detail (Biography / Relevant Experience / Awards / Practice Areas), Practice Areas & Individual pages, Knowledge & Insights (opens posts in a new tab), Contact.
- Simple JSON data for People and Practice Areas.
- Markdown-based posts for Insights.
- SEO basics: sitemap, robots.
- Fully responsive layouts.

## Quickstart
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Content
- Edit people/practice data under `data/`.
- Add/update posts as Markdown files in `content/posts/*.md`.

## Deployment (Vercel recommended)
1. Create a Vercel account and **Import** this repo.
2. Set `Framework Preset: Next.js`. Default build = `next build` and output = `.next`.
3. Deploy to a staging domain, e.g. `chevalierlawllc.vercel.app`.
4. Connect the production domain:
   - In Vercel project → **Settings → Domains** → add `chevalierlawllc.com`.
   - Update DNS at the registrar to Vercel’s records (typically a CNAME to `cname.vercel-dns.com` for the root via ALIAS/ANAME support; if not supported, add Vercel-provided A records). See Vercel’s instructions for your registrar.
5. Zero‑downtime cutover from Tilda:
   - Keep the Tilda site live while staging is verified.
   - Lower DNS TTL (e.g., 300 seconds) 24h before cutover.
   - Switch DNS to Vercel records. Propagation is usually minutes.
   - Set any **301 redirects** needed (Vercel → Project → Settings → Redirects) to preserve SEO if Tilda URLs will change.

## Alternatives
- Netlify, Cloudflare Pages, or AWS Amplify work similarly (connect repo → deploy → update DNS).

## Contact Form
- Replace the `action` URL in `app/contact/page.tsx` with your form provider (Formspree, Getform, or a serverless function).

## Customisation Checklist
- Replace placeholder images with firm-approved photography.
- Fill accurate address/phone/email in `app/layout.tsx` and `app/contact/page.tsx`.
- Expand `data/people.ts` and `data/practice-areas.ts` with real content.
- Add posts to `content/posts`.
- Add analytics (e.g., Vercel Analytics or Google Analytics) if desired.