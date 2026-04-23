# portfolio

My personal site — projects, blog, research, GitHub contributions.

Live at [govindvashishat.me](https://govindvashishat.me).

## Stack

- Next.js + Tailwind
- TinaCMS for blog/research content (MDX)
- Hosted on Vercel

## Local development

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- CMS: http://localhost:3000/admin (edits files directly in local mode)

## Content

- **Projects** — edit `src/lib/projects.ts`
- **Blog / Research** — use the `/admin` UI (or edit `content/blog/*.mdx` and `content/research/*.mdx` directly)

## Deploy

Push to `main`. Vercel rebuilds. Make sure `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` are set in Vercel env vars.
