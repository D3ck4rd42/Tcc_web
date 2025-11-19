# Data Model
## TCC Website MVP

**Feature**: 001-tcc-website
**Date**: 2025-11-19
**Status**: Phase 1 Design

---

## Overview

This document defines the database schema for the TCC Website MVP. The model supports:
- Static page content management
- News/events publishing
- Contact form submissions
- Admin user authentication
- Media/image management

**Database**: PostgreSQL 15+
**ORM**: Prisma
**Schema Location**: `prisma/schema.prisma`

---

## Entity Relationship Diagram

```
┌─────────────┐
│   User      │──┐
│ (Admin)     │  │
└─────────────┘  │
                 │ authored_by
                 │
                 ├────────────────┐
                 │                │
                 ▼                ▼
         ┌──────────────┐  ┌─────────────┐
         │  NewsPost    │  │   Page      │
         │              │  │ (Static)    │
         └──────────────┘  └─────────────┘
                 │
                 │ has_many
                 ▼
         ┌──────────────┐
         │  Media       │
         │  (Images)    │
         └──────────────┘

         ┌──────────────────┐
         │ ContactSubmission│
         │  (Independent)   │
         └──────────────────┘
```

---

## Entities

### 1. User (Admin Accounts)

**Purpose**: Authenticate and authorize admin users who manage site content.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Primary Key | Unique user identifier |
| `email` | String | Unique, Not Null, Max 255 | Admin email (used for login) |
| `password` | String | Not Null, Min 60 | Bcrypt hashed password (rounds: 10) |
| `name` | String | Not Null, Max 100 | Admin display name |
| `role` | Enum | Default: ADMIN | Role (ADMIN, SUPER_ADMIN for future RBAC) |
| `createdAt` | DateTime | Auto | Account creation timestamp |
| `updatedAt` | DateTime | Auto | Last update timestamp |

**Relationships**:
- `newsPosts`: One-to-Many → NewsPost (authored posts)
- `pages`: One-to-Many → Page (edited pages)

**Validation Rules** (Zod):
```typescript
email: z.string().email().max(255)
password: z.string().min(8).max(72) // bcrypt max input
name: z.string().min(2).max(100)
role: z.enum(['ADMIN', 'SUPER_ADMIN'])
```

**Indexes**:
- `email` (unique)

**Notes**:
- Passwords MUST be hashed with bcrypt before storage
- Email verification NOT required for MVP (only 2-3 admins, created manually)
- Soft delete NOT needed (admins rarely removed)

---

### 2. NewsPost

**Purpose**: Store blog-style news articles and event announcements.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Primary Key | Unique post identifier |
| `title` | String | Not Null, Max 200 | Post title |
| `slug` | String | Unique, Not Null, Max 250 | URL-friendly slug (auto-generated from title) |
| `excerpt` | String | Nullable, Max 500 | Short summary for listings (optional) |
| `content` | Text | Not Null | Full post content (HTML from rich text editor) |
| `featuredImage` | String | Nullable, Max 500 | Path to featured image (optional) |
| `status` | Enum | Default: DRAFT | Publication status |
| `publishedAt` | DateTime | Nullable | Publication timestamp (null if draft) |
| `authorId` | UUID | Foreign Key → User | Author (admin who created post) |
| `createdAt` | DateTime | Auto | Creation timestamp |
| `updatedAt` | DateTime | Auto | Last edit timestamp |

**Relationships**:
- `author`: Many-to-One → User

**Validation Rules** (Zod):
```typescript
title: z.string().min(5).max(200)
slug: z.string().regex(/^[a-z0-9-]+$/).max(250)
excerpt: z.string().max(500).optional()
content: z.string().min(50) // Minimum viable content
featuredImage: z.string().url().optional()
status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
```

**Indexes**:
- `slug` (unique)
- `status, publishedAt` (composite - for querying published posts by date)
- `authorId` (foreign key)

**Notes**:
- Use **soft delete** (status: ARCHIVED) instead of hard delete
- Auto-generate `slug` from `title` using slugify (handle duplicates)
- `content` stores sanitized HTML (use DOMPurify if user can input HTML)
- For MVP, rich text editor can be simple (Tiptap or React-Quill)

---

### 3. Page (Static Content)

**Purpose**: Store editable static page content (About, Facilities, Coaching, Pricing, etc.).

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Primary Key | Unique page identifier |
| `slug` | String | Unique, Not Null, Max 100 | URL path (e.g., "about", "facilities") |
| `title` | String | Not Null, Max 200 | Page title (for <title> tag and H1) |
| `content` | Text | Not Null | Page content (HTML from rich text editor) |
| `metaDescription` | String | Nullable, Max 160 | SEO meta description |
| `lastEditedBy` | UUID | Foreign Key → User | Admin who last edited |
| `createdAt` | DateTime | Auto | Creation timestamp |
| `updatedAt` | DateTime | Auto | Last edit timestamp |

**Relationships**:
- `editor`: Many-to-One → User (last editor)

**Validation Rules** (Zod):
```typescript
slug: z.string().regex(/^[a-z0-9-]+$/).max(100)
title: z.string().min(3).max(200)
content: z.string().min(10)
metaDescription: z.string().max(160).optional()
```

**Indexes**:
- `slug` (unique)

**Notes**:
- Pages are **NOT user-deletable** (only admins via DB if needed)
- Seed initial pages on deployment: home, about, facilities, coaching, pricing, contact
- For MVP, no versioning (just `updatedAt` tracking)

---

### 4. ContactSubmission

**Purpose**: Store contact form submissions from prospective members.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Primary Key | Unique submission identifier |
| `name` | String | Not Null, Max 100 | Submitter name |
| `email` | String | Not Null, Max 255 | Submitter email |
| `phone` | String | Nullable, Max 20 | Phone number (optional) |
| `message` | Text | Not Null | Message content |
| `status` | Enum | Default: NEW | Follow-up status |
| `ipAddress` | String | Nullable, Max 45 | Submitter IP (for spam detection) |
| `userAgent` | String | Nullable, Max 500 | Browser user agent (for analytics) |
| `emailSent` | Boolean | Default: false | Whether notification email was sent |
| `createdAt` | DateTime | Auto | Submission timestamp |

**Relationships**: None (independent entity)

**Validation Rules** (Zod):
```typescript
name: z.string().min(2).max(100)
email: z.string().email().max(255)
phone: z.string().regex(/^\+?[0-9\s\-()]{10,20}$/).optional()
message: z.string().min(10).max(1000)
status: z.enum(['NEW', 'CONTACTED', 'CLOSED'])
```

**Indexes**:
- `email` (for duplicate checking)
- `createdAt` (for listing by date)
- `status` (for filtering)

**Notes**:
- **Data retention**: Auto-delete submissions older than 1 year (RGPD compliance)
- Rate limit: 5 submissions per 15 min per IP address
- Admin dashboard should show NEW submissions prominently

---

### 5. Media (Image Library)

**Purpose**: Track uploaded images for news posts and pages.

**Fields**:
| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Primary Key | Unique media identifier |
| `filename` | String | Not Null, Max 255 | Original filename |
| `storagePath` | String | Unique, Not Null, Max 500 | Path in filesystem or cloud storage |
| `url` | String | Not Null, Max 500 | Public URL for accessing image |
| `altText` | String | Nullable, Max 200 | Accessibility alt text |
| `mimeType` | String | Not Null, Max 50 | MIME type (e.g., image/jpeg) |
| `fileSize` | Integer | Not Null | File size in bytes |
| `width` | Integer | Nullable | Image width in pixels |
| `height` | Integer | Nullable | Image height in pixels |
| `uploadedBy` | UUID | Foreign Key → User | Admin who uploaded |
| `createdAt` | DateTime | Auto | Upload timestamp |

**Relationships**:
- `uploader`: Many-to-One → User

**Validation Rules** (Zod):
```typescript
filename: z.string().max(255)
altText: z.string().max(200).optional()
mimeType: z.enum(['image/jpeg', 'image/png', 'image/webp'])
fileSize: z.number().max(5 * 1024 * 1024) // Max 5MB
```

**Indexes**:
- `storagePath` (unique)
- `uploadedBy` (foreign key)
- `createdAt` (for sorting)

**Notes**:
- For MVP, store in `public/uploads/` directory
- Future: migrate to Cloudflare R2 or Cloudinary for CDN benefits
- Generate thumbnails on upload (e.g., 300x300 for admin gallery)
- Unused media cleanup: Manually review quarterly (no auto-delete in MVP)

---

## Prisma Schema Example

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Role {
  ADMIN
  SUPER_ADMIN
}

enum PostStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

enum SubmissionStatus {
  NEW
  CONTACTED
  CLOSED
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique @db.VarChar(255)
  password  String   @db.VarChar(60)
  name      String   @db.VarChar(100)
  role      Role     @default(ADMIN)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  newsPosts NewsPost[]
  pages     Page[]
  media     Media[]

  @@map("users")
}

model NewsPost {
  id             String     @id @default(uuid())
  title          String     @db.VarChar(200)
  slug           String     @unique @db.VarChar(250)
  excerpt        String?    @db.VarChar(500)
  content        String     @db.Text
  featuredImage  String?    @db.VarChar(500)
  status         PostStatus @default(DRAFT)
  publishedAt    DateTime?
  authorId       String
  createdAt      DateTime   @default(now())
  updatedAt      DateTime   @updatedAt

  // Relations
  author User @relation(fields: [authorId], references: [id], onDelete: Cascade)

  @@index([status, publishedAt])
  @@index([authorId])
  @@map("news_posts")
}

model Page {
  id              String   @id @default(uuid())
  slug            String   @unique @db.VarChar(100)
  title           String   @db.VarChar(200)
  content         String   @db.Text
  metaDescription String?  @db.VarChar(160)
  lastEditedBy    String
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  // Relations
  editor User @relation(fields: [lastEditedBy], references: [id], onDelete: Cascade)

  @@map("pages")
}

model ContactSubmission {
  id         String           @id @default(uuid())
  name       String           @db.VarChar(100)
  email      String           @db.VarChar(255)
  phone      String?          @db.VarChar(20)
  message    String           @db.Text
  status     SubmissionStatus @default(NEW)
  ipAddress  String?          @db.VarChar(45)
  userAgent  String?          @db.VarChar(500)
  emailSent  Boolean          @default(false)
  createdAt  DateTime         @default(now())

  @@index([email])
  @@index([createdAt])
  @@index([status])
  @@map("contact_submissions")
}

model Media {
  id          String   @id @default(uuid())
  filename    String   @db.VarChar(255)
  storagePath String   @unique @db.VarChar(500)
  url         String   @db.VarChar(500)
  altText     String?  @db.VarChar(200)
  mimeType    String   @db.VarChar(50)
  fileSize    Int
  width       Int?
  height      Int?
  uploadedBy  String
  createdAt   DateTime @default(now())

  // Relations
  uploader User @relation(fields: [uploadedBy], references: [id], onDelete: Cascade)

  @@index([uploadedBy])
  @@index([createdAt])
  @@map("media")
}
```

---

## Migration Strategy

### Initial Migration

1. **Create Prisma schema** (`prisma/schema.prisma`) with entities above
2. **Generate migration**:
   ```bash
   npx prisma migrate dev --name init
   ```
3. **Seed initial data** (`prisma/seed.ts`):
   - Create initial admin user
   - Create default pages (home, about, facilities, coaching, pricing, contact)
   - Add sample news post (optional)

### Seed Script Example

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Seed admin user
  const adminPassword = await bcrypt.hash('ChangeMe123!', 10);
  const admin = await prisma.user.create({
    data: {
      email: 'admin@tennisclubclairefontaine.fr',
      password: adminPassword,
      name: 'Admin TCC',
      role: 'SUPER_ADMIN',
    },
  });

  // Seed default pages
  const pages = [
    { slug: 'home', title: 'Accueil', content: '<h1>Bienvenue au Tennis Club Clairefontaine</h1>' },
    { slug: 'about', title: 'À propos', content: '<h1>Notre club</h1>' },
    { slug: 'facilities', title: 'Installations', content: '<h1>Nos courts</h1>' },
    { slug: 'coaching', title: 'Cours & Coaching', content: '<h1>Notre professeur</h1>' },
    { slug: 'pricing', title: 'Tarifs', content: '<h1>Adhésions et cours</h1>' },
    { slug: 'contact', title: 'Contact', content: '<h1>Contactez-nous</h1>' },
  ];

  for (const page of pages) {
    await prisma.page.create({
      data: {
        ...page,
        lastEditedBy: admin.id,
      },
    });
  }

  console.log('✅ Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Run seed:
```bash
npx prisma db seed
```

---

## State Transitions

### NewsPost Status Flow

```
DRAFT ──(publish)──> PUBLISHED ──(archive)──> ARCHIVED
  │                       │
  └──────(delete)─────────┘
```

- **DRAFT**: Editable by author, not visible to public
- **PUBLISHED**: Visible to public, editable by admins
- **ARCHIVED**: Hidden from public listings, preserved in DB

### ContactSubmission Status Flow

```
NEW ──(admin contacts)──> CONTACTED ──(resolved)──> CLOSED
```

- **NEW**: Awaiting admin review
- **CONTACTED**: Admin has reached out to submitter
- **CLOSED**: Issue resolved or no longer relevant

---

## Performance Considerations

### Query Optimization

**Common Queries**:
1. **Get published news posts (homepage)**:
   ```typescript
   prisma.newsPost.findMany({
     where: { status: 'PUBLISHED' },
     orderBy: { publishedAt: 'desc' },
     take: 5,
     include: { author: { select: { name: true } } },
   });
   ```
   - **Index**: `(status, publishedAt)` composite

2. **Get page by slug**:
   ```typescript
   prisma.page.findUnique({
     where: { slug: 'about' },
   });
   ```
   - **Index**: `slug` unique

3. **Recent contact submissions**:
   ```typescript
   prisma.contactSubmission.findMany({
     where: { status: 'NEW' },
     orderBy: { createdAt: 'desc' },
     take: 20,
   });
   ```
   - **Index**: `(status, createdAt)` composite

### Caching Strategy

- **Static pages**: Cache at Next.js level (ISR with 1 hour revalidation)
- **News listings**: Cache with 10 min revalidation
- **Admin queries**: No caching (always fresh data)

---

## Security Considerations

### Data Protection

- **Passwords**: NEVER store plaintext; use bcrypt with 10 rounds
- **PII (Personally Identifiable Information)**:
  - Contact submissions contain PII (name, email, phone)
  - Implement data retention policy (delete after 1 year)
  - Provide RGPD-compliant data export/deletion endpoints

### Audit Logging

**MVP**: Basic tracking via `createdAt`, `updatedAt`, `authorId`, `lastEditedBy`

**Future**: Add `AuditLog` table for admin actions:
```prisma
model AuditLog {
  id        String   @id @default(uuid())
  userId    String
  action    String   // "CREATE", "UPDATE", "DELETE"
  entity    String   // "NewsPost", "Page", etc.
  entityId  String
  changes   Json?    // Old vs new values
  createdAt DateTime @default(now())

  user User @relation(fields: [userId], references: [id])
}
```

---

## Future Enhancements (Post-MVP)

1. **Tagging System**: Add `Tag` model and many-to-many with `NewsPost`
2. **Comments**: Add `Comment` model for news posts (with moderation)
3. **Events Calendar**: Add `Event` model with date/time fields
4. **Booking System**: Add `Booking` model for court reservations
5. **Members Area**: Add `Member` model with authentication
6. **Newsletter**: Add `Subscriber` model and email integration

---

**Data Model Complete**: ✅
**Ready for API Contract Definition**: ✅
