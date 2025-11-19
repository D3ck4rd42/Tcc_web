# Feature Specification: TCC Website MVP

**Feature Branch**: `001-tcc-website`
**Created**: 2025-11-19
**Status**: Draft
**Input**: User description: "Create MVP website for Tennis Club Clairefontaine"

## Constitution Alignment

Ensure this feature aligns with core principles:
- **Authenticité**: Content and functionality reflect genuine club values - showcasing the young 4/6 coach, court facilities, and village community spirit
- **Accessibilité**: Mobile-first, WCAG 2.1 AA, intuitive for all ages (key for parents and older members)
- **Simplicité**: Clean design, no unnecessary complexity, volunteer-friendly administration
- **Performance**: Load < 3s, Core Web Vitals met, optimized assets (critical for rural internet)
- **Maintenabilité**: TypeScript strict, Zod validation, documented code

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Club Information (Priority: P1)

A prospective member (parent or player) discovers the TCC through a Google search and wants to learn about the club, its facilities, coaching, and how to join.

**Why this priority**: This is the core value proposition - making the club visible and accessible online. Without this, the website serves no purpose.

**Independent Test**: Can be fully tested by navigating to the homepage and viewing club information pages. Delivers immediate value by establishing online presence.

**Acceptance Scenarios**:

1. **Given** a user searches "tennis club clairefontaine" on Google, **When** they click the result, **Then** they see an attractive homepage with key club information
2. **Given** a user is on the homepage, **When** they scroll or navigate, **Then** they can find information about facilities (covered court, outdoor courts)
3. **Given** a user wants to know about coaching, **When** they visit the coaching section, **Then** they see information about the young 4/6 coach and lesson programs
4. **Given** a user wants contact information, **When** they look for contact details, **Then** they find email, phone, and address clearly displayed

---

### User Story 2 - View Pricing and Schedules (Priority: P1)

A prospective member wants to understand membership costs, lesson prices, and court availability schedules before committing.

**Why this priority**: Pricing transparency is critical for conversion - 80% of users need this info before reaching out.

**Independent Test**: Can be tested by navigating to pricing/schedules pages and verifying all information is clear and complete.

**Acceptance Scenarios**:

1. **Given** a user wants to know membership costs, **When** they visit the pricing page, **Then** they see clear annual membership fees (adults, youth, families)
2. **Given** a user wants lesson information, **When** they view lesson pricing, **Then** they see individual and group lesson rates
3. **Given** a user wants to know court hours, **When** they check schedules, **Then** they see court availability and lesson times

---

### User Story 3 - Express Interest / Pre-Register (Priority: P2)

A prospective member wants to express interest in joining or pre-register for the next season without complex forms.

**Why this priority**: Enables lead capture and reduces friction in the conversion funnel. Secondary to information discovery.

**Independent Test**: Can be tested by submitting a contact form and verifying submission handling (email notification to admin).

**Acceptance Scenarios**:

1. **Given** a user wants to join, **When** they click "Register Interest", **Then** they see a simple form (name, email, phone, message)
2. **Given** a user submits the form, **When** form is processed, **Then** they see a confirmation message and club admin receives email notification
3. **Given** an admin receives notification, **When** they review it, **Then** they have all necessary contact info to follow up

---

### User Story 4 - View Club News and Events (Priority: P2)

Members and prospective members want to stay informed about club events, tournaments, and news.

**Why this priority**: Builds community engagement and keeps site content fresh. Important but not critical for initial launch.

**Independent Test**: Can be tested by viewing news section and verifying latest posts are displayed correctly.

**Acceptance Scenarios**:

1. **Given** a user visits the site, **When** they navigate to news section, **Then** they see recent club updates and events
2. **Given** an admin wants to post news, **When** they use the admin interface, **Then** they can create/edit/delete news posts
3. **Given** a news post exists, **When** a user clicks it, **Then** they see the full content with images if included

---

### User Story 5 - Manage Content (Admin) (Priority: P1)

Club administrators need to update website content (pricing, schedules, news) without technical knowledge.

**Why this priority**: Critical for sustainability - volunteers must be able to maintain the site independently.

**Independent Test**: Can be tested by logging into admin panel and editing various content types.

**Acceptance Scenarios**:

1. **Given** an admin needs to update pricing, **When** they log into admin panel, **Then** they can edit pricing information with a simple WYSIWYG interface
2. **Given** an admin wants to add news, **When** they create a post, **Then** they can add text, images, and publish immediately
3. **Given** an admin needs to update schedules, **When** they access schedule management, **Then** they can modify hours and availability

---

### Edge Cases

- What happens when a user submits the contact form with invalid email?
- How does the system handle image uploads that are too large?
- What happens if an admin tries to delete published news with existing views?
- How does the site perform on slow rural internet connections (< 1 Mbps)?
- What happens when content exceeds recommended character limits?

## Requirements *(mandatory)*

### Functional Requirements

**Public Website:**
- **FR-001**: System MUST display club information (about, facilities, coaching) on public pages
- **FR-002**: System MUST show current pricing for memberships and lessons
- **FR-003**: System MUST display court schedules and availability
- **FR-004**: System MUST provide contact form for prospective members to express interest
- **FR-005**: System MUST display club news and events in reverse chronological order
- **FR-006**: System MUST be mobile-responsive (mobile-first design)
- **FR-007**: System MUST meet WCAG 2.1 AA accessibility standards
- **FR-008**: System MUST load initial page in under 3 seconds on 3G connection

**Admin Panel:**
- **FR-009**: System MUST authenticate admin users before allowing content management
- **FR-010**: System MUST allow admins to edit club information pages
- **FR-011**: System MUST allow admins to update pricing and schedules
- **FR-012**: System MUST allow admins to create, edit, and delete news posts
- **FR-013**: System MUST allow admins to upload and manage images
- **FR-014**: System MUST send email notifications when contact forms are submitted
- **FR-015**: System MUST validate all form inputs before submission

**Data & Security:**
- **FR-016**: System MUST securely store admin credentials (hashed passwords)
- **FR-017**: System MUST protect admin routes from unauthorized access
- **FR-018**: System MUST validate and sanitize all user inputs to prevent XSS/injection attacks
- **FR-019**: System MUST persist all content changes to database
- **FR-020**: System MUST handle concurrent admin edits safely

### Key Entities

- **Club Information**: Static pages with content about the club (about, facilities, coaching, contact)
- **Pricing**: Membership fees, lesson rates, other costs
- **Schedule**: Court hours, lesson times, availability
- **News Post**: Title, content, published date, author, featured image, status (draft/published)
- **Contact Submission**: Name, email, phone, message, submission timestamp
- **Admin User**: Username/email, hashed password, role/permissions
- **Media**: Uploaded images with metadata (filename, size, alt text)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Website is discoverable via Google search for "tennis club clairefontaine" within 2 weeks of launch
- **SC-002**: Homepage loads in under 3 seconds on 3G connection (tested via Lighthouse)
- **SC-003**: 80% of prospective members find pricing information without asking via email/phone
- **SC-004**: Contact form submissions are received and processed within 5 minutes
- **SC-005**: Volunteer admins can update basic content (pricing, news) without developer assistance
- **SC-006**: Website maintains 95%+ uptime on shared hosting
- **SC-007**: Mobile usability score of 90+ on Google PageSpeed Insights
- **SC-008**: All public pages pass WCAG 2.1 AA accessibility validation
- **SC-009**: Contact form conversion rate of 5%+ from homepage visitors
- **SC-010**: Administrative tasks (posting news, updating pricing) take under 5 minutes
