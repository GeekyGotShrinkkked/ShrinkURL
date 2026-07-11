# ShrinkURL

A fast, no-nonsense URL shortener. Paste a long link, pick your own slug, get a short link back — no account required.

Built with Next.js (App Router), MongoDB, and Tailwind CSS.

## Features

- **Custom slugs** — choose your own short link text instead of a random string
- **Instant redirects** — indexed MongoDB lookups keep redirects fast
- **No sign-up required** — shorten a link in seconds, no account needed
- **Responsive UI** — works cleanly on mobile, tablet, and desktop

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Database | MongoDB |
| Fonts | Geist Sans / Geist Mono |

## Project structure

```
app/
  page.js                → Home page
  shorten/page.js        → Shorten-a-link form
  about/page.js           → About page
  contact/
    page.js               → Contact page
    ContactForm.js        → Contact form (client component)
  [url]/page.js           → Dynamic redirect handler
  api/generate/route.js  → API route: creates a new short link
  lib/mongodb.js          → MongoDB client singleton
  globals.css              → Design tokens + shared styles
Components/
  Navbar.js               → Sticky nav with mobile menu
  Footer.js
  ui/
    Button.js
    Card.js
    SectionHeading.js
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your-mongodb-connection-string
NEXT_PUBLIC_HOST=http://localhost:3000
```

- `MONGODB_URI` — **required**. A connection string for a MongoDB instance (local or [Atlas](https://www.mongodb.com/atlas)). The app connects to a database named `shrinkURL` and a collection named `url`, both created automatically on first insert.
- `NEXT_PUBLIC_HOST` — used as a fallback when building the displayed short link. In the browser, the app prefers `window.location.origin`, so this mainly matters for server contexts or if you want to force a specific domain.

`.env.local` is gitignored by default — never commit real credentials.

### 3. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

## How it works

1. A user submits a destination URL and a custom slug on `/shorten`.
2. `POST /api/generate` validates the input, checks the slug isn't taken, and inserts `{ url, shortUrl }` into MongoDB.
3. Visiting `/{slug}` looks up the document and redirects to the destination URL (falls back to `/` if the slug doesn't exist).

## Roadmap / not yet implemented

- Contact form submissions are UI-only right now — see the comment in `app/contact/ContactForm.js` for the `/api/contact` route it expects.
- Click analytics / stats shown on the homepage are placeholder figures.

## License

Add your license of choice here.
