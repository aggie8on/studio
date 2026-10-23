# Toothless

Minimal single-column site for Toothless, an independent creative studio. Built with Next.js (App Router).

## Development

```bash
npm install
npm run dev
```

## Editing content

- `lib/projects.ts` — projects shown on the home overlay, `/work` and `/work/[slug]`. Entries with `placeholder: true` are stand-ins.
- `app/page.tsx` — home copy and timeline.
- `app/studio/page.tsx` — studio services and process.
- `app/globals.css` — the whole design system (one stylesheet).

Placeholder image boxes (`.ph`) can be swapped for real images by dropping an `<img>` inside them.

Deploys on Vercel.
