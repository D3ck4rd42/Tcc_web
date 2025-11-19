# Developer Quickstart Guide
## TCC Website MVP

**Feature**: 001-tcc-website
**Date**: 2025-11-19
**Target Audience**: Developers setting up the project for the first time

---

## Prerequisites

Before starting, ensure you have:

- **Node.js**: v18.17+ LTS (recommended: v20+)
- **pnpm**: v8+ (or npm/yarn)
- **PostgreSQL**: v15+ (local or Docker)
- **Git**: v2.30+
- **Code Editor**: VS Code recommended (with extensions below)

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "prisma.prisma",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

---

## Quick Start (5 Minutes)

### 1. Clone the Repository

```bash
git clone https://github.com/tennisclubclairefontaine/tcc-website.git
cd tcc-website
```

### 2. Install Dependencies

```bash
pnpm install
# or: npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your local configuration:

```bash
# Database
DATABASE_URL="postgresql://tcc_user:tcc_password@localhost:5432/tcc_website_dev"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-random-32-char-string-here"  # Run: openssl rand -base64 32

# Email (for contact form)
SMTP_HOST="smtp.mailtrap.io"  # Use Mailtrap for local testing
SMTP_PORT="2525"
SMTP_USER="your_mailtrap_user"
SMTP_PASS="your_mailtrap_password"
ADMIN_EMAIL="admin@localhost"
CONTACT_EMAIL="contact@localhost"

# Rate Limiting (optional for local dev)
# UPSTASH_REDIS_REST_URL=""
# UPSTASH_REDIS_REST_TOKEN=""
```

### 4. Set Up PostgreSQL

**Option A: Docker (Easiest)**

```bash
docker run --name tcc-postgres \
  -e POSTGRES_USER=tcc_user \
  -e POSTGRES_PASSWORD=tcc_password \
  -e POSTGRES_DB=tcc_website_dev \
  -p 5432:5432 \
  -d postgres:15
```

**Option B: Local PostgreSQL**

```sql
CREATE DATABASE tcc_website_dev;
CREATE USER tcc_user WITH PASSWORD 'tcc_password';
GRANT ALL PRIVILEGES ON DATABASE tcc_website_dev TO tcc_user;
```

### 5. Run Database Migrations & Seed

```bash
# Generate Prisma Client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# Seed initial data (admin user + default pages)
pnpm prisma db seed
```

**Default admin credentials** (change immediately!):
- Email: `admin@tennisclubclairefontaine.fr`
- Password: `ChangeMe123!`

### 6. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure Overview

```
tcc-website/
├── app/                      # Next.js App Router
│   ├── (public)/             # Public pages (no auth)
│   │   ├── page.tsx          # Homepage
│   │   ├── about/            # About page
│   │   ├── news/             # News listing & detail
│   │   └── contact/          # Contact form
│   ├── admin/                # Admin panel (auth required)
│   │   ├── dashboard/        # Admin dashboard
│   │   ├── news/             # Manage news
│   │   └── pages/            # Manage pages
│   ├── api/                  # API routes
│   │   ├── auth/             # NextAuth endpoints
│   │   ├── contact/          # Contact form submission
│   │   └── admin/            # Admin API endpoints
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/               # React components
│   ├── ui/                   # Shadcn/ui components
│   ├── layout/               # Header, Footer, Nav
│   ├── forms/                # Form components
│   └── admin/                # Admin-specific components
│
├── lib/                      # Utilities & configurations
│   ├── prisma.ts             # Prisma client singleton
│   ├── auth.ts               # NextAuth config
│   ├── email.ts              # Email sending
│   ├── validations/          # Zod schemas
│   └── utils.ts              # Helper functions
│
├── prisma/                   # Database
│   ├── schema.prisma         # Database schema
│   ├── migrations/           # Migration history
│   └── seed.ts               # Seed script
│
├── public/                   # Static assets
│   └── uploads/              # User-uploaded images
│
├── specs/                    # Feature specifications (this directory)
│   └── 001-tcc-website/
│       ├── spec.md           # Feature spec
│       ├── plan.md           # Implementation plan
│       ├── data-model.md     # Database design
│       └── contracts/        # API contracts
│
├── .env.local                # Environment variables (gitignored)
├── .env.example              # Example env vars
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies & scripts
```

---

## Common Tasks

### Database Operations

**View database in GUI**:
```bash
pnpm prisma studio
```
Opens Prisma Studio at [http://localhost:5555](http://localhost:5555)

**Create a new migration**:
```bash
pnpm prisma migrate dev --name add_some_feature
```

**Reset database** (⚠️ deletes all data):
```bash
pnpm prisma migrate reset
```

**Update Prisma Client** (after schema changes):
```bash
pnpm prisma generate
```

---

### Adding Shadcn/ui Components

Install components as needed:
```bash
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add form
pnpm dlx shadcn-ui@latest add input
pnpm dlx shadcn-ui@latest add textarea
pnpm dlx shadcn-ui@latest add card
pnpm dlx shadcn-ui@latest add dialog
```

This copies components to `components/ui/` for customization.

---

### Email Testing (Local Development)

Use **Mailtrap** for testing emails without sending real emails:

1. Sign up at [mailtrap.io](https://mailtrap.io/) (free tier)
2. Get SMTP credentials from your inbox
3. Add to `.env.local`:
   ```
   SMTP_HOST="sandbox.smtp.mailtrap.io"
   SMTP_PORT="2525"
   SMTP_USER="your_mailtrap_username"
   SMTP_PASS="your_mailtrap_password"
   ```

All emails will be captured in Mailtrap inbox instead of being sent.

---

### Rate Limiting (Optional for Local Dev)

For production-like rate limiting locally:

1. Sign up for **Upstash Redis** free tier
2. Create a Redis database
3. Add credentials to `.env.local`:
   ```
   UPSTASH_REDIS_REST_URL="https://your-redis.upstash.io"
   UPSTASH_REDIS_REST_TOKEN="your_token"
   ```

Skip this for local dev if you don't need rate limiting.

---

## Development Workflow

### 1. Feature Development

```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Make changes, commit regularly
git add .
git commit -m "feat: add your feature"

# Push to remote
git push -u origin feature/your-feature-name
```

### 2. Code Quality Checks

**Linting**:
```bash
pnpm lint
```

**Type checking**:
```bash
pnpm type-check
# or: tsc --noEmit
```

**Formatting** (Prettier):
```bash
pnpm format
# or: pnpm format:check (to check without fixing)
```

### 3. Testing

**Manual Testing Checklist**:
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile (DevTools responsive mode)
- [ ] Check accessibility (axe DevTools)
- [ ] Run Lighthouse audit (Performance, Accessibility, SEO)
- [ ] Validate HTML (W3C validator)

**Lighthouse audit**:
```bash
# Install Lighthouse CLI
npm install -g @lh ci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3000
```

### 4. Pull Request Checklist

Before creating a PR:

- [ ] Code passes `pnpm lint`
- [ ] TypeScript has no errors (`pnpm type-check`)
- [ ] Manual tests completed (browsers, responsive, accessibility)
- [ ] Lighthouse scores meet thresholds (Perf 80+, A11y 95+)
- [ ] No `console.log` statements left in code
- [ ] Complex logic is commented
- [ ] Environment variables documented in `.env.example`

---

## Building for Production

### Local Production Build

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Production Environment Variables

Ensure these are set in production:

```bash
# Database (production PostgreSQL)
DATABASE_URL="postgresql://user:password@prod-db:5432/tcc_website"

# NextAuth.js
NEXTAUTH_URL="https://www.tennisclubclairefontaine.fr"
NEXTAUTH_SECRET="strong-random-secret-in-production"

# Email (OVH SMTP)
SMTP_HOST="ssl0.ovh.net"
SMTP_PORT="465"
SMTP_USER="contact@tennisclubclairefontaine.fr"
SMTP_PASS="secure_password"
ADMIN_EMAIL="admin@tennisclubclairefontaine.fr"
CONTACT_EMAIL="contact@tennisclubclairefontaine.fr"

# Rate Limiting
UPSTASH_REDIS_REST_URL="your_production_redis_url"
UPSTASH_REDIS_REST_TOKEN="your_production_token"

# Node environment
NODE_ENV="production"
```

### Deployment Script (Example)

```bash
#!/bin/bash
# deploy.sh

set -e

echo "🚀 Starting deployment..."

# Pull latest code
git pull origin main

# Install dependencies
pnpm install --frozen-lockfile

# Run migrations
pnpm prisma migrate deploy

# Build application
pnpm build

# Restart application (PM2 example)
pm2 restart tcc-website

echo "✅ Deployment complete!"
```

---

## Troubleshooting

### Database Connection Issues

**Error**: `Can't reach database server at localhost:5432`

**Solution**:
- Check PostgreSQL is running: `docker ps` or `systemctl status postgresql`
- Verify `DATABASE_URL` in `.env.local`
- Ensure port 5432 is not blocked by firewall

### Prisma Client Not Found

**Error**: `@prisma/client did not initialize yet`

**Solution**:
```bash
pnpm prisma generate
pnpm install
```

### Port 3000 Already in Use

**Solution**:
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
pnpm dev --port 3001
```

### TypeScript Errors After Schema Changes

**Solution**:
```bash
# Regenerate Prisma Client types
pnpm prisma generate

# Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

---

## Useful Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |
| `pnpm type-check` | Check TypeScript types |
| `pnpm prisma studio` | Open database GUI |
| `pnpm prisma migrate dev` | Create & apply migration |
| `pnpm prisma generate` | Generate Prisma Client |
| `pnpm prisma db seed` | Seed database with initial data |

---

## Learning Resources

### Next.js 14+ App Router
- [Official Docs](https://nextjs.org/docs)
- [App Router Tutorial](https://nextjs.org/learn)
- [Server Components Explained](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### Prisma ORM
- [Prisma Docs](https://www.prisma.io/docs)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)

### NextAuth.js
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Credentials Provider](https://next-auth.js.org/providers/credentials)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Shadcn/ui
- [Shadcn/ui Docs](https://ui.shadcn.com/)
- [Component Catalog](https://ui.shadcn.com/docs/components)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## Getting Help

### Internal Resources
- **Specs**: `/specs/001-tcc-website/`
- **Constitution**: `/.specify/memory/constitution.md`
- **API Contracts**: `/specs/001-tcc-website/contracts/`

### Community Support
- **Next.js Discord**: [discord.gg/nextjs](https://discord.gg/nextjs)
- **Prisma Discord**: [discord.gg/prisma](https://discord.gg/prisma)
- **Stack Overflow**: Tag `next.js`, `prisma`, `nextauth`

### Contact Maintainers
- **Email**: dev@tennisclubclairefontaine.fr
- **GitHub Issues**: [github.com/tennisclubclairefontaine/tcc-website/issues](https://github.com/tennisclubclairefontaine/tcc-website/issues)

---

**Quickstart Guide Complete**: ✅
**Ready to start coding!** 🎾
