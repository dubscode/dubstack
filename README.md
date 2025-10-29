# Dubstack Starter

Production-ready Next.js marketing template for service businesses. Launch polished sites in days with typed configuration, reusable sections, and built-in analytics—no starting from scratch.

## Features

- **Single config file** – All copy, branding, CTAs, and contact info in `src/config/site.ts`
- **Homepage sections** – Hero, services, case studies, testimonials, team, trust indicators
- **Service detail pages** – Deep-dive pages at `/services/[slug]` with FAQs, processes, outcomes
- **Blog system** – Article listing + detail pages with reading progress and related posts
- **Booking page** – Embed scheduler (Cal.com, Calendly, etc.) with pre-call expectations
- **Analytics ready** – PostHog + Vercel Analytics wired into layout
- **Database setup** – Drizzle ORM + Postgres schema with users table example

## Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_SITE_URL

# 3. (Optional) Set up database
# Add DATABASE_URL to .env.local, then:
pnpm db:push

# 4. Start dev server
pnpm dev
```

Visit `http://localhost:3000` and start customizing!

## Customization Guide

### 1. Update Branding & Copy
Edit `src/config/site.ts` to update:
- Company name, tagline, logo
- Hero headline and CTAs
- Services list (appears on homepage and generates detail pages)
- Case studies, testimonials, team members
- Contact info, social links, business hours

### 2. Customize Services
Edit `src/lib/services-data.ts`:
- Each service includes title, description, benefits, process, FAQs
- Slugs automatically create routes at `/services/[slug]`
- Add/remove services as needed

### 3. Add Blog Content
Edit `src/lib/blog-data.ts`:
- Add posts with title, content, author, date
- Slugs create routes at `/blog/[slug]`
- Replace with CMS integration when ready

### 4. Update Images
Drop files in `public/`:
- `placeholder-logo.svg` – Your logo
- Headshots for team members
- Hero images and service illustrations

### 5. Configure Analytics (Optional)
Add to `.env.local`:
```bash
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
```

See `event-tracking-report.md` for tracked events.

## Available Commands

```bash
pnpm dev              # Dev server with Turbopack
pnpm build            # Production build
pnpm start            # Serve production build
pnpm checks           # Run Biome + TypeScript checks (auto-fix)
pnpm test             # Run tests in watch mode
pnpm test:run         # Run tests once

# Database commands
pnpm db:push          # Push schema to database
pnpm db:generate      # Generate migrations
pnpm db:studio        # Open Drizzle Studio
```

## Tech Stack

- **Framework** – Next.js 16 (App Router), React 19
- **Language** – TypeScript (strict mode)
- **Styling** – Tailwind CSS 4
- **Components** – Radix UI (via shadcn/ui)
- **Database** – Drizzle ORM + Postgres
- **Code Quality** – Biome (formatter + linter)
- **Testing** – Vitest + jsdom
- **Analytics** – PostHog, Vercel Analytics

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── blog/         # Blog listing + [slug] pages
│   ├── book/         # Booking/scheduling page
│   └── services/     # Service detail [slug] pages
├── components/       # React components
│   ├── sections/     # Homepage sections
│   ├── ui/           # shadcn/ui components
│   └── layout/       # Header, footer
├── config/           # Site configuration
│   └── site.ts       # Main config file (edit this!)
├── lib/              # Data and utilities
│   ├── services-data.ts  # Service definitions
│   ├── blog-data.ts      # Blog posts
│   └── utils.ts          # Helper functions
└── db/               # Database schema and client
    └── schema/       # Drizzle schemas
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` (required)
   - `DATABASE_URL` (if using database)
   - `NEXT_PUBLIC_POSTHOG_KEY` (optional)
4. Deploy

### Other Platforms
Set environment variables, then:
```bash
pnpm build
pnpm start
```

## Using as Template

1. **Fork/clone** this repo
2. **Update package.json** – Change name and description
3. **Update metadata** in `src/app/layout.tsx` – SEO, Open Graph
4. **Customize content** – Edit `src/config/site.ts` and data files
5. **Remove examples** – Delete unused services/blog posts
6. **Update branding** – Replace logos and images in `public/`

## License

MIT – Use freely for client projects and commercial work.
