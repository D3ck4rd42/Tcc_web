# Research & Technology Decisions
## TCC Website MVP

**Feature**: 001-tcc-website
**Date**: 2025-11-19
**Status**: Complete

---

## Technology Stack Decisions

### Decision 1: Next.js 14+ App Router vs Pages Router

**Decision**: Use Next.js 14+ with App Router

**Rationale**:
- **Performance**: App Router uses React Server Components by default, reducing client-side JavaScript and improving load times
- **SEO**: Built-in server-side rendering and metadata API for better search engine visibility
- **Future-proof**: Pages Router is legacy; App Router is the recommended path forward
- **Simplified data fetching**: Server Components eliminate complex getServerSideProps patterns
- **Streaming**: Native support for progressive page rendering improves perceived performance

**Alternatives considered**:
- **Next.js Pages Router**: Familiar but legacy; lacks RSC benefits
- **Remix**: Similar SSR capabilities but smaller ecosystem and less mature image optimization
- **Astro**: Excellent for static sites but less suitable for dynamic admin features

**Best practices**:
- Use Server Components by default; Client Components ('use client') only when needed (forms, interactivity)
- Implement route groups: (public) and admin for different layouts
- Use Next.js metadata API for SEO tags
- Leverage parallel routes for admin dashboard

---

### Decision 2: Prisma vs Drizzle ORM

**Decision**: Use Prisma ORM

**Rationale**:
- **Developer experience**: Excellent TypeScript support with auto-generated types
- **Migrations**: Robust migration system with automatic SQL generation
- **Schema-first**: Declarative schema.prisma file is easy for volunteers to understand
- **Tooling**: Prisma Studio provides GUI for database inspection (helpful for non-technical admins)
- **Maturity**: Battle-tested with Next.js; extensive documentation and community support
- **Security**: Parameterized queries prevent SQL injection by default

**Alternatives considered**:
- **Drizzle**: Lighter weight, faster, but less mature tooling and smaller community
- **Raw SQL with pg**: Maximum control but error-prone and requires more SQL expertise
- **TypeORM**: Popular but more complex configuration; decorator-based approach less intuitive

**Best practices**:
- Use Prisma Client singleton pattern (`lib/prisma.ts`) to avoid connection exhaustion
- Enable query logging in development for debugging
- Use Prisma migrations for schema changes (never manual SQL)
- Implement soft deletes for critical data (news posts, submissions)

---

### Decision 3: Shadcn/ui vs Radix UI vs Custom Components

**Decision**: Use Shadcn/ui (built on Radix UI primitives)

**Rationale**:
- **Accessibility**: Radix primitives are WCAG 2.1 AA compliant out-of-the-box
- **Customization**: Copy-paste component approach means full control over styling
- **Tailwind integration**: Designed for Tailwind CSS; no CSS-in-JS overhead
- **No bundle bloat**: Only includes components you use (not a package dependency)
- **Keyboard navigation**: Built-in keyboard support for complex UI (modals, dropdowns, etc.)

**Alternatives considered**:
- **Raw Radix UI**: More control but requires more styling work
- **Material UI**: Heavy bundle size, design language doesn't fit village club aesthetic
- **Headless UI**: Good but less comprehensive than Radix

**Best practices**:
- Install only needed components via CLI: `npx shadcn-ui@latest add button`
- Customize theme in `tailwind.config.ts` for brand colors
- Use `<Form>` component from shadcn for validation integration with React Hook Form + Zod

---

### Decision 4: NextAuth.js vs Lucia vs Clerk

**Decision**: Use NextAuth.js

**Rationale**:
- **Simplicity**: Simple credentials provider for basic username/password auth
- **Session management**: Built-in JWT or database sessions
- **Next.js integration**: Designed specifically for Next.js with App Router support
- **Cost**: Free and open-source (Clerk would add recurring costs)
- **Flexibility**: Can add OAuth providers later if needed

**Alternatives considered**:
- **Lucia**: Modern and lightweight but less mature documentation
- **Clerk**: Excellent UX but $25+/month exceeds budget
- **Custom auth**: Reinventing the wheel; high risk of security issues

**Best practices**:
- Use credentials provider with bcrypt password hashing (rounds: 10)
- Store sessions in database (not JWT) for ability to revoke admin access
- Implement role-based access control (RBAC) with admin role
- Use middleware to protect admin routes

---

## Implementation Patterns

### Pattern 1: Email Sending (Contact Form)

**Approach**: Nodemailer with SMTP

**Rationale**:
- OVH provides SMTP service included in hosting
- No third-party API costs (SendGrid, Postmark, etc.)
- Simple HTML email templates sufficient for contact notifications

**Implementation**:
```typescript
// lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactNotification(data: ContactFormData) {
  await transporter.sendMail({
    from: process.env.CONTACT_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `Nouveau message via le site TCC - ${data.name}`,
    html: `...`,
  });
}
```

**Best practices**:
- Add rate limiting (5 submissions per 15 min) to prevent spam
- Validate email addresses with Zod
- Send confirmation email to user after successful submission
- Log all email attempts (success/failure) for debugging

---

### Pattern 2: Image Optimization

**Approach**: next/image with Sharp + Manual Upload Management

**Rationale**:
- next/image automatically optimizes images (WebP, responsive sizes)
- Sharp handles server-side transformations during upload
- Store images in `public/uploads/` or migrate to cloud storage later (Cloudflare R2, Cloudinary)

**Implementation**:
- Use `<Image>` component for all images (except icons)
- Add `priority` prop to hero images to prevent LCP issues
- Lazy-load below-the-fold images automatically
- Validate file uploads: max 5MB, JPEG/PNG/WebP only
- Generate thumbnails on upload for news listings

**Best practices**:
- Set explicit width/height to prevent CLS
- Use `sizes` prop for responsive images
- Implement alt text input in admin for accessibility
- Compress uploads with Sharp before saving (quality: 85)

---

### Pattern 3: Admin Panel Architecture

**Approach**: Server Actions + Optimistic Updates

**Rationale**:
- Server Actions eliminate need for explicit API routes for mutations
- Type-safe RPC-style calls with automatic serialization
- Optimistic updates improve perceived performance

**Implementation**:
```typescript
// app/admin/news/actions.ts
'use server';
import { revalidatePath } from 'next/cache';

export async function createNewsPost(data: NewsFormData) {
  // Validate with Zod
  const validated = newsSchema.parse(data);

  // Insert into DB
  const post = await prisma.newsPost.create({
    data: validated,
  });

  // Revalidate public news pages
  revalidatePath('/news');

  return post;
}
```

**Best practices**:
- Always validate with Zod in Server Actions
- Use `revalidatePath` or `revalidateTag` to update caches
- Return typed responses for optimistic UI updates
- Implement middleware to check admin auth before Server Actions execute

---

## Performance Strategies

### Strategy 1: Core Web Vitals Optimization

**LCP (Largest Contentful Paint) < 2.5s**:
- Use `priority` on hero images
- Preload critical fonts with next/font
- Server-side render above-the-fold content
- Avoid layout shifts with explicit dimensions

**FID (First Input Delay) < 100ms**:
- Minimize JavaScript with Server Components
- Code-split admin routes (dynamic imports)
- Avoid long tasks (> 50ms) on main thread

**CLS (Cumulative Layout Shift) < 0.1**:
- Set width/height on all images
- Reserve space for dynamic content (news cards)
- Use CSS containment for off-screen content

### Strategy 2: Route-Level Optimization

**Static Generation (SSG)**:
- About, Facilities, Coaching pages (rarely change)
- Use `export const revalidate = 3600` for hourly updates if needed

**Incremental Static Regeneration (ISR)**:
- News listing page (revalidate every 10 minutes)
- Homepage (revalidate every 5 minutes)

**Dynamic Server-Side Rendering (SSR)**:
- Admin pages (require authentication)
- Contact form (CSRF token)

---

## Accessibility Best Practices

### WCAG 2.1 AA Compliance Checklist

**Perceivable**:
- [ ] Alt text on all images (descriptive, not decorative)
- [ ] Minimum contrast ratio 4.5:1 for normal text, 3:1 for large text
- [ ] Text resizable up to 200% without loss of functionality
- [ ] No information conveyed by color alone

**Operable**:
- [ ] All functionality available via keyboard (Tab, Enter, Escape, Arrow keys)
- [ ] Visible focus indicators on all interactive elements
- [ ] No keyboard traps
- [ ] Skip navigation link for main content

**Understandable**:
- [ ] Clear error messages on forms with suggestions
- [ ] Labels on all form fields
- [ ] Consistent navigation across pages
- [ ] Language declared in HTML (`<html lang="fr">`)

**Robust**:
- [ ] Valid HTML (no errors in W3C validator)
- [ ] ARIA attributes used correctly (prefer semantic HTML)
- [ ] Name, Role, Value for custom components

### Testing Tools
- **axe DevTools**: Browser extension for automated a11y testing
- **NVDA/JAWS**: Screen reader testing (Windows)
- **VoiceOver**: Screen reader testing (macOS/iOS)
- **Keyboard**: Tab through entire site without mouse

---

## SEO & Local Search Optimization

### Technical SEO

**Metadata**:
```typescript
// app/page.tsx
export const metadata = {
  title: 'Tennis Club Clairefontaine | Club de Tennis en Yvelines (78)',
  description: 'Club de tennis convivial à Clairefontaine-en-Yvelines. Court couvert, professeur diplômé, cours adultes et enfants. Rejoignez-nous !',
  openGraph: {
    title: 'Tennis Club Clairefontaine',
    description: '...',
    images: ['/og-image.jpg'],
  },
};
```

**Structured Data (JSON-LD)**:
```json
{
  "@context": "https://schema.org",
  "@type": "SportsClub",
  "name": "Tennis Club Clairefontaine",
  "sport": "Tennis",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Clairefontaine-en-Yvelines",
    "addressRegion": "Yvelines",
    "postalCode": "78120",
    "addressCountry": "FR"
  },
  "telephone": "+33...",
  "url": "https://www.tennisclubclairefontaine.fr"
}
```

**Sitemap & Robots.txt**:
- Auto-generate sitemap in `app/sitemap.ts`
- Allow all crawlers in robots.txt

**Local SEO**:
- Register on Google Business Profile
- Submit to local directories (PagesJaunes, sports directories)
- Target keywords: "club tennis clairefontaine", "tennis yvelines", "cours tennis 78"

---

## Security Best Practices

### Input Validation

**All user inputs MUST be validated with Zod**:
```typescript
// lib/validations/contact.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[0-9\s\-()]{10,}$/).optional(),
  message: z.string().min(10).max(1000),
});
```

### XSS Protection
- **Never use `dangerouslySetInnerHTML`** unless HTML is sanitized with DOMPurify
- Escape user inputs in email templates
- Set Content-Security-Policy headers

### SQL Injection Protection
- **Always use Prisma ORM** (parameterized queries by default)
- Never concatenate user input into raw SQL queries

### Rate Limiting
```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const contactRateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '15 m'),
});
```

### HTTPS & Security Headers
- **Force HTTPS** in production (Let's Encrypt via OVH)
- Set security headers in `next.config.js`:
  ```javascript
  headers: [
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  ]
  ```

---

## RGPD/GDPR Compliance

### Data Collection
- **Contact form**: Name, email, phone, message (legitimate interest: responding to inquiries)
- **Admin accounts**: Email, hashed password (necessary for service operation)
- **Analytics**: Google Analytics only after explicit consent

### Required Pages
- **Privacy Policy** (`/privacy`):
  - What data is collected
  - Why it's collected
  - How long it's retained
  - User rights (access, deletion, portability)
- **Legal Notice** (`/legal`):
  - Site owner information
  - Hosting provider
  - CNIL declaration if needed

### Cookie Consent
- Use cookie banner (tarteaucitron.js or similar)
- No tracking cookies before user consent
- Essential cookies only (session, CSRF) don't require consent

### Data Retention
- Contact submissions: 1 year
- Admin sessions: 30 days
- Backups: 90 days

### User Rights
- Provide contact email for GDPR requests
- Implement data export (JSON download of user's data)
- Implement data deletion (hard delete on request)

---

## Deployment Considerations

### OVH Hosting Requirements

**Shared Hosting** (€5-10/month):
- ✅ Node.js support (check version compatibility)
- ✅ PostgreSQL database included
- ✅ SSL certificate (Let's Encrypt)
- ❌ Limited RAM (may struggle with heavy traffic)
- ❌ No full SSH access (deployment via FTP/Git)

**VPS Hosting** (€10-15/month):
- ✅ Full control (SSH, root access)
- ✅ Node.js + PostgreSQL
- ✅ More RAM (2-4GB)
- ✅ Can install PM2 for process management
- ⚠️ Requires more technical setup

**Recommendation**: Start with VPS for flexibility; migrate to dedicated if traffic grows.

### Environment Variables
```bash
# .env.example
DATABASE_URL="postgresql://user:pass@localhost:5432/tcc_website"
NEXTAUTH_URL="https://www.tennisclubclairefontaine.fr"
NEXTAUTH_SECRET="[generate-random-32-char-string]"
ADMIN_EMAIL="admin@tennisclubclairefontaine.fr"
SMTP_HOST="ssl0.ovh.net"
SMTP_PORT="465"
SMTP_USER="contact@tennisclubclairefontaine.fr"
SMTP_PASS="[secure-password]"
```

### Deployment Script
```bash
# deploy.sh
#!/bin/bash
git pull origin main
npm install --production
npx prisma migrate deploy
npm run build
pm2 restart tcc-website
```

---

## Monitoring & Maintenance

### Performance Monitoring
- **Google PageSpeed Insights**: Weekly manual checks
- **Lighthouse CI**: Run on each deployment (GitHub Actions)
- **Real User Monitoring**: Consider free tier of Vercel Analytics or Plausible

### Error Tracking
- **Console logs**: Check daily for errors
- **Sentry**: Free tier for error tracking (10k events/month)

### Backup Strategy
- **Database**: Daily automated backups via OVH or pg_dump cron job
- **Code**: Git repository on GitHub (main + develop branches)
- **Uploads**: Weekly backup of `/public/uploads/` to external storage

### Security Updates
- **Dependabot**: Enable on GitHub for automated PR on vulnerabilities
- **npm audit**: Run monthly; fix critical issues within 7 days
- **Next.js updates**: Check quarterly; update after testing on staging

---

## Summary of Key Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| **Framework** | Next.js 14+ App Router | Performance, SEO, React Server Components |
| **ORM** | Prisma | Developer experience, type safety, tooling |
| **Components** | Shadcn/ui (Radix primitives) | Accessibility, customization, Tailwind integration |
| **Auth** | NextAuth.js | Simplicity, Next.js integration, free |
| **Email** | Nodemailer + OVH SMTP | No extra cost, included in hosting |
| **Images** | next/image + Sharp | Automatic optimization, WebP, responsive |
| **Hosting** | OVH VPS | Budget-friendly, full control, scalable |
| **Database** | PostgreSQL | Robust, relational, free with OVH |

---

**All NEEDS CLARIFICATION items resolved**: ✅
**Ready to proceed to Phase 1 (Design & Contracts)**: ✅
