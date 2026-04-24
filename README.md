# Katana Labs — Next.js

Next.js 15 (App Router) Port der Werbeagentur-Site mit framer-motion Scroll-Drop Effekten.

## Setup

```bash
cd werbeagentur-next
npm install
npm run dev
```

Öffnen: http://localhost:3000

## Struktur

- `app/page.jsx` — Startseite (Hero, Services, Contact, Footer)
- `app/impressum`, `agb`, `datenschutz`, `widerruf` — Legal Pages
- `components/DropReveal.jsx` — Top-down word-by-word Scroll-Drop (das was du wolltest)
- `components/FadeUp.jsx` — sanftes Fade-In von unten
- `components/Hero|Services|Contact|Footer|Nav.jsx` — Sektionen
- `public/images/` — Alle Bilder + `impressum-anbieter.png` (Adresse als Grafik, nicht indexierbar)

## Drop-Effekt anpassen

In `components/DropReveal.jsx`:
- `distance` — Drop-Höhe in px (default 80)
- `stagger` — Delay zwischen Wörtern (default 0.06s)
- `delay` — Initial-Delay vor Animation
