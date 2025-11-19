# Tasks: TCC Website MVP

**Input**: Design documents from `/specs/001-tcc-website/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/, research.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create Next.js 14+ project with TypeScript in tcc-website/
- [ ] T002 [P] Configure TypeScript strict mode in tsconfig.json
- [ ] T003 [P] Setup Tailwind CSS 3+ in tailwind.config.ts and app/globals.css
- [ ] T004 [P] Configure ESLint and Prettier in .eslintrc.json and .prettierrc
- [ ] T005 Create project directory structure per plan.md (app/, components/, lib/, prisma/, etc.)
- [ ] T006 [P] Install core dependencies: Next.js 14+, React 18+, TypeScript 5.3+, Tailwind CSS
- [ ] T007 [P] Setup environment variables in .env.example and .env.local
- [ ] T008 [P] Configure next.config.js with security headers and image optimization
- [ ] T009 [P] Create root layout in app/layout.tsx with metadata and fonts
- [ ] T010 [P] Setup Git repository and create initial .gitignore

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

### Database & ORM

- [ ] T011 Create Prisma schema in prisma/schema.prisma with all entities (User, NewsPost, Page, ContactSubmission, Media)
- [ ] T012 Generate initial Prisma migration in prisma/migrations/
- [ ] T013 Create Prisma client singleton in lib/prisma.ts
- [ ] T014 Create database seed script in prisma/seed.ts with initial admin user and pages
- [ ] T015 Add seed configuration to package.json

### Authentication

- [ ] T016 [P] Install NextAuth.js and bcrypt dependencies
- [ ] T017 Configure NextAuth.js in lib/auth.ts with credentials provider
- [ ] T018 Create NextAuth API route in app/api/auth/[...nextauth]/route.ts
- [ ] T019 Create auth middleware in middleware.ts to protect admin routes

### Validation & Utilities

- [ ] T020 [P] Install Zod validation library
- [ ] T021 [P] Create Zod schemas in lib/validations/contact.ts
- [ ] T022 [P] Create Zod schemas in lib/validations/news.ts
- [ ] T023 [P] Create Zod schemas in lib/validations/page.ts
- [ ] T024 [P] Create Zod schemas in lib/validations/auth.ts
- [ ] T025 [P] Create utility functions in lib/utils.ts (cn, slugify, etc.)

### Email Configuration

- [ ] T026 [P] Install Nodemailer dependency
- [ ] T027 Create email sending utilities in lib/email.ts with SMTP configuration
- [ ] T028 Create email templates in lib/email-templates.ts (contact notification, confirmation)

### UI Components Foundation

- [ ] T029 [P] Initialize Shadcn/ui configuration
- [ ] T030 [P] Install Shadcn/ui components: button, input, textarea, form, card, dialog, label
- [ ] T031 [P] Create base layout components in components/layout/Header.tsx
- [ ] T032 [P] Create base layout components in components/layout/Footer.tsx
- [ ] T033 [P] Create base layout components in components/layout/Navigation.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Discover Club Information (Priority: P1) 🎯 MVP

**Goal**: Enable prospective members to discover club information through static pages (home, about, facilities, coaching)

**Independent Test**: Navigate to homepage and view all club information pages. Verify SEO metadata, accessibility, and mobile responsiveness.

### Implementation for User Story 1

- [ ] T034 [P] [US1] Create Page model queries in lib/queries/pages.ts for fetching page content
- [ ] T035 [P] [US1] Create public pages API route GET /api/pages/[slug] in app/api/pages/[slug]/route.ts
- [ ] T036 [P] [US1] Create homepage in app/(public)/page.tsx with hero section and key info
- [ ] T037 [P] [US1] Create about page in app/(public)/about/page.tsx
- [ ] T038 [P] [US1] Create facilities page in app/(public)/facilities/page.tsx
- [ ] T039 [P] [US1] Create coaching page in app/(public)/coaching/page.tsx
- [ ] T040 [US1] Create public layout wrapper in app/(public)/layout.tsx with Header and Footer
- [ ] T041 [P] [US1] Add metadata for SEO in each page (title, description, OpenGraph)
- [ ] T042 [P] [US1] Create sitemap.ts in app/sitemap.ts for SEO
- [ ] T043 [P] [US1] Create robots.txt in app/robots.ts
- [ ] T044 [US1] Implement responsive images with next/image in all public pages
- [ ] T045 [P] [US1] Add JSON-LD structured data for SportsClub schema in app/(public)/page.tsx

**Checkpoint**: User Story 1 complete - club information is discoverable and accessible

---

## Phase 4: User Story 2 - View Pricing and Schedules (Priority: P1) 🎯 MVP

**Goal**: Enable prospective members to view membership pricing and court schedules

**Independent Test**: Navigate to pricing page and verify all pricing information is clear, complete, and properly formatted.

### Implementation for User Story 2

- [ ] T046 [P] [US2] Create pricing page in app/(public)/pricing/page.tsx with membership fees and lesson rates
- [ ] T047 [P] [US2] Create pricing display components in components/pricing/PricingCard.tsx
- [ ] T048 [P] [US2] Create schedule display components in components/schedule/ScheduleTable.tsx
- [ ] T049 [US2] Add pricing metadata and SEO optimization in pricing page
- [ ] T050 [US2] Ensure pricing page is mobile-responsive with proper touch targets

**Checkpoint**: User Story 2 complete - pricing and schedules are visible and accessible

---

## Phase 5: User Story 5 - Manage Content (Admin) (Priority: P1) 🎯 MVP

**Goal**: Enable club administrators to update website content without technical knowledge

**Independent Test**: Log into admin panel and edit various content types (pages, pricing, news). Verify changes are saved and reflected on public site.

### Admin Authentication & Layout

- [ ] T051 [US5] Create admin login page in app/admin/login/page.tsx with credentials form
- [ ] T052 [US5] Create admin layout in app/admin/layout.tsx with authentication check and admin navigation
- [ ] T053 [P] [US5] Create admin dashboard in app/admin/dashboard/page.tsx with content overview
- [ ] T054 [P] [US5] Create admin navigation component in components/admin/AdminNav.tsx

### Page Management

- [ ] T055 [P] [US5] Create admin pages list in app/admin/pages/page.tsx
- [ ] T056 [US5] Create page editor in app/admin/pages/[id]/page.tsx with rich text editor
- [ ] T057 [P] [US5] Create API route POST /api/admin/pages/[id] in app/api/admin/pages/[id]/route.ts
- [ ] T058 [P] [US5] Create page editor form component in components/admin/PageEditor.tsx
- [ ] T059 [US5] Implement server action for page updates in app/admin/pages/actions.ts

### Media Management

- [ ] T060 [P] [US5] Create media library page in app/admin/media/page.tsx
- [ ] T061 [US5] Create media upload API route POST /api/admin/media in app/api/admin/media/route.ts
- [ ] T062 [P] [US5] Create media upload component in components/admin/MediaUpload.tsx with image optimization
- [ ] T063 [P] [US5] Create media gallery component in components/admin/MediaGallery.tsx
- [ ] T064 [US5] Implement image validation and Sharp optimization in lib/image-processing.ts

**Checkpoint**: User Story 5 complete - admins can manage all content independently

---

## Phase 6: User Story 3 - Express Interest / Pre-Register (Priority: P2)

**Goal**: Enable prospective members to express interest through a simple contact form

**Independent Test**: Submit contact form and verify confirmation message, email notification to admin, and submission stored in database.

### Implementation for User Story 3

- [ ] T065 [P] [US3] Create contact page in app/(public)/contact/page.tsx
- [ ] T066 [P] [US3] Create contact form component in components/forms/ContactForm.tsx with React Hook Form
- [ ] T067 [US3] Create contact API route POST /api/contact in app/api/contact/route.ts
- [ ] T068 [P] [US3] Implement rate limiting in lib/rate-limit.ts using Upstash Redis
- [ ] T069 [US3] Integrate email sending in contact API with Nodemailer
- [ ] T070 [P] [US3] Create admin contact submissions list in app/admin/contact/page.tsx
- [ ] T071 [P] [US3] Create contact detail view in app/admin/contact/[id]/page.tsx
- [ ] T072 [US3] Create admin contact API routes in app/api/admin/contact/route.ts
- [ ] T073 [P] [US3] Create status update API in app/api/admin/contact/[id]/route.ts
- [ ] T074 [US3] Add honeypot spam prevention to contact form

**Checkpoint**: User Story 3 complete - contact form captures leads effectively

---

## Phase 7: User Story 4 - View Club News and Events (Priority: P2)

**Goal**: Enable members and prospects to view club news and event updates

**Independent Test**: Navigate to news section, view latest posts, and verify admin can create/edit/publish news posts.

### Public News Interface

- [ ] T075 [P] [US4] Create news listing page in app/(public)/news/page.tsx
- [ ] T076 [P] [US4] Create news detail page in app/(public)/news/[slug]/page.tsx
- [ ] T077 [P] [US4] Create news card component in components/news/NewsCard.tsx
- [ ] T078 [P] [US4] Create public news API route GET /api/news in app/api/news/route.ts
- [ ] T079 [P] [US4] Create public news detail API GET /api/news/[slug] in app/api/news/[slug]/route.ts
- [ ] T080 [US4] Implement ISR caching with 10-minute revalidation for news pages

### Admin News Management

- [ ] T081 [P] [US4] Create admin news list in app/admin/news/page.tsx with status filters
- [ ] T082 [US4] Create news editor in app/admin/news/[id]/page.tsx with rich text editor
- [ ] T083 [P] [US4] Create news create page in app/admin/news/new/page.tsx
- [ ] T084 [P] [US4] Create admin news API GET /api/admin/news in app/api/admin/news/route.ts
- [ ] T085 [P] [US4] Create admin news API POST /api/admin/news in app/api/admin/news/route.ts (duplicate route, update)
- [ ] T086 [P] [US4] Create admin news API PATCH /api/admin/news/[id] in app/api/admin/news/[id]/route.ts
- [ ] T087 [P] [US4] Create admin news API DELETE /api/admin/news/[id] (soft delete to ARCHIVED)
- [ ] T088 [P] [US4] Create news editor component in components/admin/NewsEditor.tsx
- [ ] T089 [US4] Implement slug generation and uniqueness check in lib/utils.ts
- [ ] T090 [US4] Implement server actions for news CRUD in app/admin/news/actions.ts

**Checkpoint**: User Story 4 complete - news system is fully functional

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final quality assurance

### Performance Optimization

- [ ] T091 [P] Optimize all images with next/image and set proper sizes attributes
- [ ] T092 [P] Add font optimization with next/font for display: swap
- [ ] T093 [P] Implement proper loading states for all async operations
- [ ] T094 [P] Add error boundaries in app/error.tsx and app/global-error.tsx
- [ ] T095 Verify Core Web Vitals meet targets (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### Accessibility

- [ ] T096 [P] Add alt text to all images
- [ ] T097 [P] Verify all form fields have proper labels
- [ ] T098 [P] Add skip navigation link in app/layout.tsx
- [ ] T099 [P] Ensure proper heading hierarchy across all pages
- [ ] T100 Verify keyboard navigation works for all interactive elements

### Security

- [ ] T101 [P] Implement CSRF protection for all forms
- [ ] T102 [P] Add security headers in next.config.js (CSP, X-Frame-Options, etc.)
- [ ] T103 [P] Implement rate limiting for all public API endpoints
- [ ] T104 [P] Add HTML sanitization for rich text content with DOMPurify
- [ ] T105 Run npm audit and fix any high/critical vulnerabilities

### Documentation & Deployment

- [ ] T106 [P] Create README.md with setup instructions
- [ ] T107 [P] Update .env.example with all required variables
- [ ] T108 [P] Create deployment documentation in docs/deployment.md
- [ ] T109 [P] Create admin user guide in docs/admin-guide.md
- [ ] T110 Validate all functionality per quickstart.md test scenarios

---

## Constitution Compliance Check (MANDATORY)

**Execute before final deployment:**

### Accessibility Validation

- [ ] Run Lighthouse Accessibility audit (score > 95/100 required)
- [ ] Run axe DevTools on all public pages (0 violations required)
- [ ] Test keyboard navigation (Tab through entire site, all functionality accessible)
- [ ] Verify all images have descriptive alt text
- [ ] Verify all form fields have visible labels
- [ ] Check heading hierarchy is semantic (H1→H2→H3, no skips)
- [ ] Test responsive design on mobile (375px), tablet (768px), desktop (1920px)
- [ ] Verify minimum contrast ratio 4.5:1 for normal text, 3:1 for large text
- [ ] Verify touch targets minimum 44x44px on mobile

### Performance Validation

- [ ] Run Lighthouse Performance audit (Mobile > 80, Desktop > 90 required)
- [ ] Verify Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Verify initial page load < 3 seconds on 3G connection
- [ ] Check all images use next/image with optimization
- [ ] Check fonts use next/font with display: swap
- [ ] Verify no unnecessary JavaScript on static pages

### Code Quality & Maintainability

- [ ] Verify TypeScript strict mode enabled (tsconfig.json)
- [ ] Verify no `any` types except justified with comments
- [ ] Verify all components properly typed with interfaces
- [ ] Verify all user inputs validated with Zod schemas
- [ ] Remove all console.log statements from production code
- [ ] Verify complex logic has explanatory comments
- [ ] Verify code follows PascalCase (components), camelCase (functions), UPPER_CASE (constants)

### Security Validation

- [ ] Verify all admin API routes have authentication middleware
- [ ] Verify all user inputs use server-side Zod validation
- [ ] Verify security headers configured in next.config.js
- [ ] Verify HTTPS enabled (production deployment)
- [ ] Verify no hardcoded secrets or credentials in code
- [ ] Run npm audit (0 high/critical vulnerabilities required)
- [ ] Verify rate limiting on contact form (5 requests/15min)
- [ ] Verify passwords hashed with bcrypt (10 rounds)

### Testing Validation

- [ ] Manual cross-browser testing on Chrome (latest)
- [ ] Manual cross-browser testing on Firefox (latest)
- [ ] Manual cross-browser testing on Safari (latest)
- [ ] HTML validation with W3C validator (0 errors)
- [ ] Test all forms: validation, submission, error handling
- [ ] Link validation: verify no broken links
- [ ] RGPD compliance: privacy policy page, cookie consent banner
- [ ] Email functionality: test contact form notifications

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User Story 1 (P1): Can start after Foundational - MVP priority
  - User Story 2 (P1): Can start after Foundational - MVP priority
  - User Story 5 (P1): Can start after Foundational - MVP priority
  - User Story 3 (P2): Can start after Foundational - Post-MVP
  - User Story 4 (P2): Can start after Foundational - Post-MVP
- **Polish (Phase 8)**: Depends on all MVP user stories (1, 2, 5) being complete

### User Story Dependencies

- **User Story 1 (P1)**: Independent - only depends on Foundational
- **User Story 2 (P1)**: Independent - only depends on Foundational
- **User Story 5 (P1)**: Depends on US1 (needs pages to manage) - should implement after US1
- **User Story 3 (P2)**: Independent - only depends on Foundational
- **User Story 4 (P2)**: Independent - only depends on Foundational and US5 (needs admin to manage news)

### Recommended Implementation Order for MVP

1. Complete Phase 1: Setup (T001-T010)
2. Complete Phase 2: Foundational (T011-T033)
3. Complete Phase 3: User Story 1 (T034-T045)
4. Complete Phase 4: User Story 2 (T046-T050)
5. Complete Phase 5: User Story 5 (T051-T064)
6. **STOP and VALIDATE MVP**: Test US1, US2, US5 independently
7. Complete Phase 8: Constitution Compliance Check
8. **Deploy MVP to production**

### Post-MVP Enhancement

After MVP is deployed and validated:

9. Complete Phase 6: User Story 3 (T065-T074) - Add contact form
10. Complete Phase 7: User Story 4 (T075-T090) - Add news system
11. Complete Phase 8: Polish & Cross-Cutting Concerns (T091-T110)
12. Run final Constitution Compliance Check
13. Deploy enhanced version

### Parallel Opportunities

**Within Setup Phase:**
- T002, T003, T004, T006, T007, T008, T009, T010 can all run in parallel

**Within Foundational Phase:**
- Database tasks (T011-T015) must be sequential
- Auth tasks (T016-T019) can run after database
- Validation schemas (T020-T024) can run in parallel
- Email (T026-T028) can run in parallel with validation
- UI components (T029-T033) can run in parallel

**Within Each User Story:**
- Tasks marked [P] can run in parallel (different files)
- API routes can run in parallel with page components
- Component creation tasks can run in parallel

**Across User Stories (if team capacity allows):**
- After Foundational completes, US1, US2, US3, US4 can all start in parallel
- US5 should wait for US1 to complete (needs pages to manage)

---

## Parallel Example: User Story 1

```bash
# After Foundational phase completes, launch these in parallel:
Task T034: "Create Page model queries in lib/queries/pages.ts"
Task T035: "Create public pages API route GET /api/pages/[slug]"
Task T036: "Create homepage in app/(public)/page.tsx"
Task T037: "Create about page in app/(public)/about/page.tsx"
Task T038: "Create facilities page in app/(public)/facilities/page.tsx"
Task T039: "Create coaching page in app/(public)/coaching/page.tsx"
Task T041: "Add metadata for SEO in each page"
Task T042: "Create sitemap.ts in app/sitemap.ts"
Task T043: "Create robots.txt in app/robots.ts"
Task T045: "Add JSON-LD structured data for SportsClub schema"

# Then complete sequential tasks:
Task T040: "Create public layout wrapper" (depends on pages being created)
Task T044: "Implement responsive images" (depends on pages being created)
```

---

## Implementation Strategy

### MVP First (User Stories 1, 2, 5 Only)

The MVP delivers core value: **Discoverable club website with content management**

**MVP Scope (110 tasks total):**
1. Setup (10 tasks)
2. Foundational (23 tasks)
3. User Story 1 - Club Info (12 tasks)
4. User Story 2 - Pricing (5 tasks)
5. User Story 5 - Admin Panel (14 tasks)
6. Constitution Compliance (32 checks)
7. Partial Polish (14 essential tasks)

**MVP Value:**
- ✅ Club is discoverable on Google
- ✅ Prospective members find all info online
- ✅ Volunteers can update content independently
- ✅ Meets performance and accessibility standards
- ✅ RGPD compliant

**Estimated Timeline:** 2-3 weeks for single developer

### Incremental Delivery (Post-MVP)

**Phase A - MVP (Week 1-3):**
1. Setup + Foundational → Foundation ready (Days 1-3)
2. User Story 1 + User Story 2 → Public info complete (Days 4-7)
3. User Story 5 → Admin complete (Days 8-12)
4. Polish + Compliance → MVP ready (Days 13-15)
5. **Deploy MVP to production**

**Phase B - Lead Capture (Week 4):**
1. User Story 3 → Contact form (Days 16-18)
2. Test + Deploy

**Phase C - Community Engagement (Week 5):**
1. User Story 4 → News system (Days 19-23)
2. Final polish + Deploy

### Parallel Team Strategy

With 3 developers working in parallel:

**Week 1:**
- Team completes Setup + Foundational together (Days 1-3)

**Week 2:**
- Developer A: User Story 1 (Club Info)
- Developer B: User Story 2 (Pricing)
- Developer C: User Story 5 (Admin Panel)

**Week 3:**
- Developer A: User Story 3 (Contact Form)
- Developer B: User Story 4 (News System)
- Developer C: Polish + Compliance

**Result:** All features complete in 3 weeks vs 5 weeks single developer

---

## Task Summary

**Total Tasks:** 110 implementation tasks + 32 compliance checks = 142 total

**Breakdown by Phase:**
- Setup: 10 tasks
- Foundational: 23 tasks
- User Story 1 (P1 MVP): 12 tasks
- User Story 2 (P1 MVP): 5 tasks
- User Story 5 (P1 MVP): 14 tasks
- User Story 3 (P2): 10 tasks
- User Story 4 (P2): 16 tasks
- Polish: 20 tasks
- Constitution Compliance: 32 checks

**MVP Tasks:** 64 core tasks + 32 compliance checks = 96 tasks for MVP

**Parallel Opportunities:**
- Setup phase: 8 tasks can run in parallel
- Foundational phase: 15 tasks can run in parallel
- User Story 1: 9 tasks can run in parallel
- User Story 2: 4 tasks can run in parallel
- User Story 5: 9 tasks can run in parallel
- User Story 3: 6 tasks can run in parallel
- User Story 4: 11 tasks can run in parallel
- Polish: 16 tasks can run in parallel

**Total Parallel Opportunities:** 78 tasks (71% can run in parallel with proper team coordination)

---

## Notes

- All tasks follow strict checklist format: `- [ ] [ID] [P?] [Story?] Description with file path`
- [P] marker indicates tasks that can run in parallel (different files, no blocking dependencies)
- [Story] label (US1-US5) maps tasks to specific user stories for traceability
- Tests are NOT included as they were not explicitly requested in the specification
- Each user story phase is independently completable and testable
- MVP scope focuses on P1 user stories (1, 2, 5) for fastest time to value
- Post-MVP features (US3, US4) can be added incrementally without breaking existing functionality
- Constitution compliance checks are mandatory before production deployment
- File paths follow Next.js 14+ App Router conventions per plan.md
