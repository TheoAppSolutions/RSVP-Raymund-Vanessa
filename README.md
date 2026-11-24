# Raymund & Vanessa — RSVP (Next.js 14)

1. `npm install`
2. Copy `.env.example` to `.env.local` and set `ADMIN_PASSWORD`.
3. `npm run dev` → `/` (wedding website), `/admin` (password-protected guest responses).
4. Set `ADMIN_PASSWORD` in Vercel. Fill in venue addresses in `lib/event.ts`.

## Guest records

- The former RSVP form is now a button linking to `/admin`.
- All 34 archived responses are stored in `data/rsvps.ts`. Edit that file and rebuild/redeploy to update the dashboard. No database or external record service is required.
- The dashboard retains search, attendance/date filters, sorting, message details, and CSV export. Records are read-only, and new RSVP submissions are closed.

## Media & map

- Hero image: `public/hero.jpg` · Gallery: `public/gallery/01.jpg…` (edit the list in `MEDIA` in `lib/event.ts`) · Music: drop an mp3 at `public/music/wedding.mp3`.
- Map: enable the **Maps Embed API** in Google Cloud, set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, and restrict the key to your domain (HTTP referrers).
