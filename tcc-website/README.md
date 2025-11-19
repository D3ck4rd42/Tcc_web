# Tennis Club Clairefontaine Website - MVP

Modern, mobile-first website for Tennis Club Clairefontaine built with Next.js 16, TypeScript, and Tailwind CSS.

## Project Status

### ✅ Completed (Phases 1 & 2)
- Next.js 16 with App Router and TypeScript 5.3+ strict mode
- Tailwind CSS v4 for styling with system fonts
- Prisma ORM with comprehensive PostgreSQL schema (User, Page, NewsPost, ContactSubmission, Media)
- NextAuth.js v5 for authentication with credentials provider
- Zod validation schemas for all forms (contact, news, pages, auth)
- Email configuration with Nodemailer and French templates
- Base UI components (Button, Input, Textarea, Label, Card)
- Layout components (Header, Footer, Navigation)
- Security headers, CSP, and image optimization configured
- SEO-ready metadata with OpenGraph support

### 🚧 In Progress (Phase 3+)
- Public club information pages (User Story 1)
- Pricing and schedules display (User Story 2)
- Admin panel for content management (User Story 5)
- Contact form with spam prevention (User Story 3)
- News and events system (User Story 4)

## Tech Stack

- **Framework**: Next.js 16.0.3 with App Router
- **Language**: TypeScript 5.x (strict mode enabled)
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL 15+ with Prisma ORM v7
- **Authentication**: NextAuth.js v5 (beta)
- **Validation**: Zod v4
- **Forms**: React Hook Form v7
- **Email**: Nodemailer v7
- **Image Processing**: Sharp (via next/image)

## Getting Started

### Prerequisites

- Node.js 18+ LTS
- PostgreSQL 15+
- SMTP server credentials (Mailtrap for dev, production SMTP for live)

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your credentials:
# - DATABASE_URL: PostgreSQL connection string
# - NEXTAUTH_SECRET: Generate with: openssl rand -base64 32
# - SMTP credentials

# Generate Prisma client (requires network access to Prisma binaries)
npm run db:generate

# Create and run database migrations
npm run db:migrate

# Seed database with initial admin user and pages
npm run db:seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Default Admin Credentials

After seeding, login at `/admin/login`:
- **Email**: admin@tennisclubclairefontaine.fr
- **Password**: admin123

⚠️ **Change this password immediately in production!**

## Database Schema

Main entities:
- **User**: Admin authentication (email, hashed password, role)
- **Page**: Static content (home, about, facilities, coaching, pricing)
- **NewsPost**: News/events with slug, status (DRAFT/PUBLISHED/ARCHIVED)
- **ContactSubmission**: Contact form entries with status tracking
- **Media**: Image uploads with metadata (dimensions, alt text)

## Scripts

```bash
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed initial data
npm run db:studio    # Open Prisma Studio GUI
```

## Project Structure

```
tcc-website/
├── app/
│   ├── (public)/          # Public route group (home, about, etc.)
│   ├── admin/             # Protected admin routes
│   ├── api/               # API routes (auth, contact, news, pages)
│   └── layout.tsx         # Root layout with metadata
├── components/
│   ├── ui/                # Button, Input, Textarea, Label, Card
│   └── layout/            # Header, Footer, Navigation
├── lib/
│   ├── validations/       # Zod schemas (contact, news, page, auth)
│   ├── auth.ts            # NextAuth config with credentials
│   ├── email.ts           # Nodemailer transporter
│   ├── email-templates.ts # French email templates
│   ├── prisma.ts          # Prisma client singleton
│   └── utils.ts           # cn(), slugify(), formatDate()
├── prisma/
│   ├── schema.prisma      # Full database schema
│   └── seed.ts            # Admin user + default pages
├── middleware.ts          # Protects /admin routes
└── .env.example           # Environment variables template
```

## Known Issues & Notes

1. **Prisma Client Generation**: In restricted networks, run with `PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npm run db:generate`

2. **Next.js 16 Middleware**: Warning about deprecated middleware→proxy convention (non-breaking, will be updated)

3. **Build**: TypeScript compilation excludes `prisma/` directory to avoid build-time Prisma client requirement

4. **Fonts**: Using system fonts for optimal performance (removed Google Fonts due to env restrictions)

## Development Roadmap

- [x] Phase 1: Setup & Configuration (T001-T010)
- [x] Phase 2: Foundational Infrastructure (T011-T033)
- [ ] Phase 3: User Story 1 - Discover Club Info (T034-T045)
- [ ] Phase 4: User Story 2 - Pricing & Schedules (T046-T050)
- [ ] Phase 5: User Story 5 - Admin Panel (T051-T064)
- [ ] Phase 6: User Story 3 - Contact Form (T065-T074)
- [ ] Phase 7: User Story 4 - News System (T075-T090)
- [ ] Phase 8: Polish & Compliance (T091-T110)

## Performance & Accessibility Goals

- Page load < 3s on 3G connection
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Lighthouse: Performance > 90, Accessibility > 95, SEO > 90
- WCAG 2.1 Level AA compliance
- Mobile-first responsive design
- 44x44px minimum touch targets
- 4.5:1 text contrast ratio

## Constitution Principles

This project adheres to:
- **Authenticité**: Honest, transparent content reflecting real club values
- **Accessibilité**: Mobile-first, WCAG AA, intuitive for all ages
- **Simplicité**: Clean design, no unnecessary complexity
- **Performance**: Optimized for rural internet, fast load times
- **Maintenabilité**: TypeScript strict, Zod validation, documented code

## Deployment

Target: OVH shared/VPS hosting (€60-120/year budget)
- Requires Node.js 18+ support
- PostgreSQL database
- Environment variables configuration
- SMTP server for emails

## Contact

Tennis Club Clairefontaine - Villeneuve-sur-Yonne
Email: contact@tennisclubclairefontaine.fr
