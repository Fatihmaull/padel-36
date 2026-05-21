# Padel 36 Cibiru Bandung

Premium mobile-first landing page for **Padel 36** — padel court booking demo, facilities, pricing, and location.

## Stack

- Next.js (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customize

| What | Where |
|------|--------|
| WhatsApp number | `src/lib/constants.ts` → `SITE.whatsapp` |
| Address & maps | `src/lib/constants.ts` → `SITE.address`, `SITE.mapsUrl` |
| Pricing | `src/lib/constants.ts` → `PRICING` |
| Copy & facilities | `src/lib/constants.ts` |

## Features

- Mobile-first bottom navigation + desktop header
- Hero, about, facilities carousel, pricing tiers
- Interactive booking demo (date → court → time → summary → confirmation modal)
- WhatsApp FAB + location map embed
- Dark athletic theme (charcoal + volt green)

## Note

Booking flow is **frontend-only** — no API or payment integration. Replace mock logic in `src/hooks/useBookingDemo.ts` when connecting a real backend.
