<!--
  SYNC IMPACT REPORT
  ==================
  Version Change: TEMPLATE → 1.0.0
  Date: 2025-11-19

  Modified Principles:
  - [PRINCIPLE_1_NAME] → I. Authenticité (Authenticity)
  - [PRINCIPLE_2_NAME] → II. Accessibilité (Accessibility)
  - [PRINCIPLE_3_NAME] → III. Simplicité (Simplicity)
  - [PRINCIPLE_4_NAME] → IV. Performance
  - [PRINCIPLE_5_NAME] → V. Maintenabilité (Maintainability)

  Added Sections:
  - Technical Standards (Section 2)
  - Development Workflow (Section 3)
  - Governance (Section 4)

  Removed Sections:
  - None

  Templates Requiring Updates:
  ✅ plan-template.md - Updated Constitution Check section
  ✅ spec-template.md - Aligned with accessibility and user-story requirements
  ✅ tasks-template.md - Aligned with TDD principle and testing requirements

  Follow-up TODOs:
  - None - all placeholders filled with concrete values

  Notes:
  - This is the initial constitution ratification for the TCC Web Project
  - Based on comprehensive project requirements documented in /constitution.md (root)
  - Follows Next.js, TypeScript, Tailwind CSS stack
  - Emphasizes mobile-first, accessibility (WCAG 2.1 AA), and performance (Core Web Vitals)
-->

# Tennis Club Clairefontaine (TCC) Web Project Constitution

## Core Principles

### I. Authenticité (Authenticity)

**Mandatory Rules:**
- Every feature MUST reflect the reality of the club: friendly village atmosphere with pedagogical excellence
- Content MUST be honest and transparent (no over-promising)
- Photos MUST be of real members and facilities (with proper authorizations)
- Testimonials MUST be authentic from real members

**Rationale:** The club's strength is its genuine community character. The website must embody this authenticity to build trust and attract members who align with the club's values. Artificial or stock content would undermine credibility.

### II. Accessibilité (Accessibility)

**Mandatory Rules:**
- Mobile-first design is NON-NEGOTIABLE (primary consultation mode)
- MUST meet WCAG 2.1 Level AA standards minimum
- Navigation MUST be intuitive for all age groups
- Information MUST be clear and easy to find
- Forms MUST be simple and quick to complete
- Touch targets MUST be minimum 44x44px
- Text MUST be readable without zoom (16px minimum)
- Contrast ratio MUST be minimum 4.5:1 for normal text, 3:1 for large text

**Rationale:** Members access the site primarily on mobile devices while at the club or commuting. Accessibility ensures inclusivity for all members regardless of age, technical proficiency, or disability. This is both an ethical imperative and a legal requirement (RGPD compliance).

### III. Simplicité (Simplicity)

**Mandatory Rules:**
- Design MUST be clean with clear navigation (maximum 7 menu items, 5 ideally)
- NO unnecessary complexity
- Registration forms MUST be comprehensive but intuitively structured
- Admin interface MUST be accessible to non-technical volunteers
- Every feature starts with the simplest viable implementation
- YAGNI principle: Don't build what's not explicitly needed

**Rationale:** The club is run by volunteers with varying technical skills. Complex systems create maintenance burden and discourage participation. Simplicity reduces cognitive load for users and ensures long-term sustainability.

### IV. Performance

**Mandatory Rules:**
- Page load time MUST be < 3 seconds
- Core Web Vitals MUST meet Google thresholds:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
- Images MUST be automatically optimized (Sharp with Next/Image)
- PageSpeed Insights Mobile score MUST be > 80/100
- PageSpeed Insights Desktop score MUST be > 90/100
- All images MUST use next/image with lazy loading (except hero images)
- Fonts MUST use next/font with preload and display: swap

**Rationale:** Fast load times directly impact user engagement and conversion rates. Poor performance frustrates users and negatively impacts SEO rankings. Performance is a feature, not an optimization.

### V. Maintenabilité (Maintainability)

**Mandatory Rules:**
- Code MUST be clean, commented, and well-structured
- TypeScript strict mode MUST be enabled (no `any` types except justified)
- Complete documentation MUST be maintained (README, API docs, admin guide)
- Admin interface MUST be WordPress-like in simplicity
- Security updates MUST be monitored automatically (Dependabot enabled)
- Critical security updates MUST be applied within 7 days maximum
- Minor updates MUST be reviewed and applied monthly
- All components MUST be properly typed with interfaces
- All user inputs MUST be validated with Zod

**Rationale:** The project will be maintained by volunteers over years. Without maintainability, technical debt accumulates, security vulnerabilities emerge, and the site becomes unusable. Clear code and documentation enable knowledge transfer.

## Technical Standards

**Stack Requirements (NON-NEGOTIABLE):**

**Frontend:**
- Framework: Next.js 14+ (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Component Library: Shadcn/ui or Radix UI
- Image Optimization: Next/Image with Sharp
- Font Loading: next/font

**Backend:**
- API Framework: Next.js API Routes
- Database: PostgreSQL
- ORM: Prisma or Drizzle
- Authentication: NextAuth.js
- Validation: Zod (all user inputs)
- Rate Limiting: Required on all API routes (5-100 req/15min depending on endpoint)

**Security (MANDATORY):**
- All validation MUST use Zod schemas server-side
- XSS protection: all user inputs MUST be escaped
- SQL injection protection: MUST use ORM (Prisma) parameterized queries
- HTTPS MUST be enabled in production (Let's Encrypt via OVH)
- CSRF protection MUST be enabled (NextAuth default)
- Security headers MUST be configured (CSP, X-Frame-Options, etc.)
- Passwords MUST be hashed with bcrypt (rounds: 10)
- Sessions MUST use httpOnly, secure, sameSite cookies

**Accessibility (MANDATORY):**
- Lighthouse Accessibility score MUST be > 95/100
- axe DevTools MUST show 0 violations
- Keyboard navigation MUST be fully functional
- All images MUST have descriptive alt text
- All form fields MUST have visible labels
- Heading hierarchy MUST be semantic (H1 → H2 → H3)
- Focus states MUST be visible on all interactive elements

**Testing Requirements:**
- Manual testing REQUIRED on Chrome, Firefox, Safari before each deployment
- Responsive testing REQUIRED (mobile, tablet, desktop)
- Lighthouse audit REQUIRED (Performance, Accessibility, Best Practices, SEO)
- HTML validation REQUIRED (W3C)
- All forms MUST be tested (validation, submission, email delivery)
- Link validation REQUIRED (no broken links)

## Development Workflow

**Git Workflow:**
- `main` branch: Production (protected)
- `develop` branch: Active development
- `feature/*`: New features
- `fix/*`: Bug fixes
- `hotfix/*`: Urgent production fixes

**Commit Convention:**
- Format: `type: description` (in French)
- Types: `feat`, `fix`, `style`, `docs`, `refactor`, `perf`, `test`
- Commits MUST be atomic (one feature = one commit)
- Messages MUST be clear and descriptive

**Code Review Checklist (MANDATORY before merge):**
- ✅ TypeScript strict mode (no `any`)
- ✅ Components properly typed
- ✅ Zod validation on all inputs
- ✅ Accessibility requirements met
- ✅ Performance validated (no regression)
- ✅ Responsive design tested
- ✅ No console.log in production
- ✅ Complex logic commented
- ✅ Documentation updated

**Deployment Checklist (MANDATORY before production):**
- ✅ All tests passed (manual and automated)
- ✅ Lighthouse scores meet thresholds (Perf 80+, A11y 95+)
- ✅ Database backup completed
- ✅ Environment variables verified
- ✅ SSL certificate valid
- ✅ DNS configured correctly
- ✅ Monitoring enabled (Google Analytics after RGPD consent)
- ✅ Changelog updated

## Governance

**Constitution Authority:**
This constitution supersedes all other development practices and guidelines. Any deviation from these principles MUST be:
1. Documented with clear justification
2. Reviewed and approved explicitly
3. Accompanied by a migration plan if technical debt is introduced

**Amendment Process:**
1. Proposed amendments MUST be documented in writing
2. Amendments MUST include rationale and impact analysis
3. Version number MUST be incremented according to semantic versioning:
   - **MAJOR**: Backward incompatible governance changes or principle removals
   - **MINOR**: New principles added or materially expanded guidance
   - **PATCH**: Clarifications, wording fixes, non-semantic refinements
4. LAST_AMENDED_DATE MUST be updated to date of approval

**Compliance Review:**
- All pull requests MUST verify alignment with principles
- Complexity additions MUST be explicitly justified against Simplicity principle
- Performance regressions MUST be rejected unless accompanied by critical justification
- Accessibility violations MUST be blocking

**Maintenance Schedule:**
- **Daily**: Verify automated backups
- **Weekly**: Check contact forms for new submissions
- **Monthly**:
  - Run `npm audit` for vulnerabilities
  - Apply non-breaking dependency updates
  - Test backup restoration
  - Review Google Analytics
  - Run PageSpeed Insights check
- **Quarterly**:
  - Apply major version updates (after staging tests)
  - Review and remove obsolete content
  - Complete accessibility audit
  - SEO optimization review

**Reference Documentation:**
- Comprehensive standards: `/constitution.md` (root level)
- PRD: `/docs/PRD.md`
- Runtime development guidance: Referenced in spec templates and task templates

**Version**: 1.0.0 | **Ratified**: 2025-11-19 | **Last Amended**: 2025-11-19
