# Implementation Plan: TCC Website MVP

**Branch**: `001-tcc-website` | **Date**: 2025-11-19 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-tcc-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create a modern, mobile-first website for Tennis Club Clairefontaine that serves as a digital storefront to increase membership by 15-20% in the first year. The MVP includes public pages (home, about, facilities, pricing, contact), a simple contact form for lead capture, news/events section, and a volunteer-friendly admin panel for content management. Technical approach: Next.js 14+ App Router with TypeScript, Tailwind CSS, PostgreSQL + Prisma ORM, hosted on OVH shared/VPS hosting within €60-120/year budget.

## Technical Context

**Language/Version**: TypeScript 5.3+ / Node.js 18+ LTS
**Primary Dependencies**:
  - Next.js 14+ (App Router)
  - React 18+
  - Tailwind CSS 3+
  - Shadcn/ui or Radix UI (component library)
  - Prisma ORM (database access)
  - NextAuth.js (authentication)
  - Zod (validation)
  - Sharp (image optimization via next/image)
  - Nodemailer (contact form emails)
  - React Hook Form (form management)

**Storage**: PostgreSQL 15+ (hosted on OVH or compatible provider)
**Testing**:
  - Manual: Chrome, Firefox, Safari (desktop + mobile)
  - Lighthouse (Performance, Accessibility, SEO)
  - W3C HTML Validator
  - axe DevTools (accessibility)

**Target Platform**: Web (responsive: mobile, tablet, desktop) - deployed on OVH shared/VPS hosting with Node.js support
**Project Type**: Web application (Next.js full-stack)
**Performance Goals**:
  - Page load < 3s on 3G connection
  - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - PageSpeed Mobile > 80, Desktop > 90
  - Lighthouse Accessibility > 95

**Constraints**:
  - Budget: €60-120/year hosting (OVH shared or light VPS)
  - Volunteer maintenance: Admin UI must be WordPress-simple
  - Rural internet: Must work well on slower connections
  - SEO: Must rank for "tennis club clairefontaine" within 2 weeks
  - RGPD/GDPR compliance required

**Scale/Scope**:
  - Users: ~90 current members + ~500-1000 annual visitors
  - Content: ~10-15 static pages, ~20-50 news posts/year
  - Admin Users: 2-3 volunteers
  - Forms: ~50-100 contact submissions/year
  - Concurrent Users: Low (< 10 typical, < 50 peak during events)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Authenticité (Authenticity)
- [x] Feature reflects genuine club values (friendly village atmosphere + pedagogical excellence)
  - *Spec explicitly calls out showcasing young 4/6 coach, real facilities, and community spirit*
- [x] Content is honest and transparent (no over-promising)
  - *Success criteria include realistic metrics, no exaggerated claims*
- [x] Uses real photos and testimonials (with authorizations) where applicable
  - *Planned for content population phase; admin can upload real club photos*

### Principle II: Accessibilité (Accessibility)
- [x] Mobile-first design approach documented
  - *Explicitly stated in spec FR-006 and SC-007*
- [x] WCAG 2.1 Level AA compliance planned
  - *FR-007, SC-008 mandate WCAG 2.1 AA compliance*
- [x] Navigation intuitive for all age groups
  - *User story focuses on parents and players of all ages*
- [x] Touch targets minimum 44x44px
  - *Will be enforced in Tailwind config and component design*
- [x] Text minimum 16px, contrast ratios meet standards (4.5:1 normal, 3:1 large)
  - *Will be enforced in Tailwind theme and tested with axe DevTools*

### Principle III: Simplicité (Simplicity)
- [x] Design is clean with clear navigation (max 7 menu items)
  - *MVP scope limited to: Home, About, Facilities, Coaching, Pricing, News, Contact = 7 items max*
- [x] No unnecessary complexity introduced
  - *MVP features only essential functionality: info pages, contact form, simple news, basic admin*
- [x] Admin interface accessible to non-technical volunteers
  - *FR-010-013 specify simple admin capabilities; User Story 5 emphasizes volunteer-friendliness*
- [x] Follows YAGNI: only builds what's explicitly needed
  - *Spec focuses on P1/P2 priorities only; no advanced features like booking, payment, etc.*

### Principle IV: Performance
- [x] Page load time target < 3 seconds
  - *FR-008, SC-002 explicitly require < 3s load time*
- [x] Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - *SC-002 references Core Web Vitals compliance*
- [x] Images use next/image with optimization
  - *Technical Context specifies Sharp via next/image*
- [x] Fonts use next/font with display: swap
  - *Technical Context includes next/font*
- [x] PageSpeed targets: Mobile > 80, Desktop > 90
  - *SC-007 requires Mobile 90+, aligned with constitution*

### Principle V: Maintenabilité (Maintainability)
- [x] TypeScript strict mode enabled (no `any` except justified)
  - *Technical Context specifies TypeScript 5.3+ strict mode*
- [x] All components properly typed with interfaces
  - *Will be enforced during implementation via constitution standards*
- [x] All user inputs validated with Zod
  - *FR-015 mandates input validation; Technical Context includes Zod*
- [x] Code documented and commented
  - *Will be enforced during code review*
- [x] Follows naming conventions (PascalCase components, camelCase functions, etc.)
  - *Standard TypeScript/React conventions apply*

### Technical Standards
- [x] Stack: Next.js 14+, TypeScript strict, Tailwind CSS
  - *Fully specified in Technical Context*
- [x] Backend: Next.js API Routes, PostgreSQL, Prisma/Drizzle
  - *Fully specified in Technical Context (Prisma chosen)*
- [x] Security: Zod validation, rate limiting, HTTPS, security headers
  - *FR-016-020 cover security requirements; Zod in dependencies*
- [x] Testing: Manual (Chrome/Firefox/Safari), Responsive, Lighthouse, Accessibility
  - *Testing approach fully specified in Technical Context*

**GATE STATUS**: ✅ **PASSED** - All constitutional requirements are aligned with the feature specification.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
tcc-website/                      # Next.js App Router structure
├── app/                          # App Router pages (Next.js 14+)
│   ├── (public)/                 # Public pages route group
│   │   ├── page.tsx              # Homepage
│   │   ├── about/                # About pages
│   │   ├── facilities/           # Facilities info
│   │   ├── coaching/             # Coaching info
│   │   ├── pricing/              # Pricing & memberships
│   │   ├── news/                 # News listing & detail
│   │   └── contact/              # Contact form page
│   ├── admin/                    # Admin panel
│   │   ├── layout.tsx            # Admin layout with auth check
│   │   ├── dashboard/            # Admin dashboard
│   │   ├── pages/                # Manage static pages
│   │   ├── news/                 # Manage news posts
│   │   ├── pricing/              # Manage pricing
│   │   └── media/                # Media library
│   ├── api/                      # API routes
│   │   ├── auth/                 # NextAuth endpoints
│   │   ├── contact/              # Contact form submission
│   │   ├── news/                 # News CRUD
│   │   ├── pages/                # Page content CRUD
│   │   └── media/                # Image upload/management
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles (Tailwind)
│
├── components/                   # React components
│   ├── ui/                       # Shadcn/ui components
│   ├── layout/                   # Layout components (Header, Footer, Nav)
│   ├── forms/                    # Form components (ContactForm, etc.)
│   ├── admin/                    # Admin-specific components
│   └── shared/                   # Shared utility components
│
├── lib/                          # Utility libraries
│   ├── prisma.ts                 # Prisma client singleton
│   ├── auth.ts                   # NextAuth configuration
│   ├── email.ts                  # Email sending (Nodemailer)
│   ├── validations/              # Zod schemas
│   └── utils.ts                  # Utility functions
│
├── prisma/                       # Prisma ORM
│   ├── schema.prisma             # Database schema
│   ├── migrations/               # DB migrations
│   └── seed.ts                   # Seed data (optional)
│
├── public/                       # Static assets
│   ├── images/                   # Static images
│   ├── uploads/                  # User-uploaded images (or use cloud storage)
│   └── favicon.ico               # Favicon
│
├── types/                        # TypeScript type definitions
│   └── index.d.ts                # Global types
│
├── __tests__/                    # Manual test checklists & docs
│   ├── accessibility.md          # A11y test checklist
│   ├── performance.md            # Performance test checklist
│   └── browsers.md               # Cross-browser test checklist
│
├── .env.local                    # Environment variables (gitignored)
├── .env.example                  # Example env vars
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
└── README.md                     # Project documentation
```

**Structure Decision**: Next.js 14+ App Router monolith structure. This is appropriate because:
1. **Simplicity**: Single codebase is easiest for volunteers to maintain
2. **Performance**: Next.js App Router provides optimal performance out-of-the-box
3. **Deployment**: Single deployment target (OVH) - no need to coordinate frontend/backend
4. **Scale**: Project scope doesn't justify microservices or separate API
5. **Cost**: Single hosting instance within budget constraints

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
