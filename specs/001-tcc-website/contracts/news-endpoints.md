# News API Endpoints
## TCC Website MVP

---

## Public Endpoints

### GET `/api/news`

List published news posts (public view).

**Authentication**: None

**Query Parameters**:
```typescript
{
  page?: number; // Default: 1
  pageSize?: number; // Default: 10, Max: 50
  sortBy?: 'publishedAt' | 'title'; // Default: 'publishedAt'
  order?: 'asc' | 'desc'; // Default: 'desc'
}
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    featuredImage: string | null;
    publishedAt: string; // ISO 8601
    author: {
      name: string;
    };
  }>,
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  }
}
```

**Example**:
```bash
GET /api/news?page=1&pageSize=10
```

```json
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "title": "Stage d'été 2025 : inscriptions ouvertes !",
      "slug": "stage-ete-2025-inscriptions-ouvertes",
      "excerpt": "Les inscriptions pour notre stage d'été sont maintenant ouvertes...",
      "featuredImage": "/uploads/stage-ete-2025.jpg",
      "publishedAt": "2025-06-15T10:00:00.000Z",
      "author": {
        "name": "Admin TCC"
      }
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 10,
    "total": 23,
    "totalPages": 3
  }
}
```

---

### GET `/api/news/[slug]`

Get a single published news post by slug.

**Authentication**: None

**Path Parameters**:
- `slug`: URL-friendly post identifier (e.g., `stage-ete-2025-inscriptions-ouvertes`)

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    id: string;
    title: string;
    slug: string;
    content: string; // Full HTML content
    excerpt: string | null;
    featuredImage: string | null;
    publishedAt: string; // ISO 8601
    author: {
      name: string;
    };
  }
}
```

**Error** (404 Not Found):
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "News post not found"
  }
}
```

**Example**:
```bash
GET /api/news/stage-ete-2025-inscriptions-ouvertes
```

```json
{
  "success": true,
  "data": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Stage d'été 2025 : inscriptions ouvertes !",
    "slug": "stage-ete-2025-inscriptions-ouvertes",
    "content": "<h1>Stage d'été 2025</h1><p>Les inscriptions pour notre stage d'été sont maintenant ouvertes...</p>",
    "excerpt": "Les inscriptions pour notre stage d'été sont maintenant ouvertes...",
    "featuredImage": "/uploads/stage-ete-2025.jpg",
    "publishedAt": "2025-06-15T10:00:00.000Z",
    "author": {
      "name": "Admin TCC"
    }
  }
}
```

---

## Admin Endpoints

### GET `/api/admin/news`

List all news posts (drafts, published, archived) for admin management.

**Authentication**: Required (Admin session)

**Query Parameters**:
```typescript
{
  page?: number; // Default: 1
  pageSize?: number; // Default: 20, Max: 100
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED' | 'ALL'; // Default: 'ALL'
  sortBy?: 'updatedAt' | 'publishedAt' | 'title'; // Default: 'updatedAt'
  order?: 'asc' | 'desc'; // Default: 'desc'
  search?: string; // Search in title and excerpt
}
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
    publishedAt: string | null; // ISO 8601
    author: {
      id: string;
      name: string;
    };
    createdAt: string; // ISO 8601
    updatedAt: string; // ISO 8601
  }>,
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  }
}
```

**Error** (401 Unauthorized):
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Authentication required"
  }
}
```

---

### POST `/api/admin/news`

Create a new news post.

**Authentication**: Required (Admin session)

**Request Body**:
```typescript
{
  title: string; // Min 5, Max 200
  slug?: string; // Optional: auto-generated if not provided
  excerpt?: string; // Max 500
  content: string; // Min 50
  featuredImage?: string; // URL or path
  status?: 'DRAFT' | 'PUBLISHED'; // Default: 'DRAFT'
  publishedAt?: string; // ISO 8601, auto-set if status=PUBLISHED
}
```

**Validation** (Zod):
```typescript
const createNewsSchema = z.object({
  title: z.string().min(5).max(200),
  slug: z.string().regex(/^[a-z0-9-]+$/).max(250).optional(),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(50),
  featuredImage: z.string().url().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED']).default('DRAFT'),
  publishedAt: z.string().datetime().optional(),
});
```

**Response** (201 Created):
```typescript
{
  success: true,
  data: {
    id: string;
    title: string;
    slug: string; // Generated or provided
    excerpt: string | null;
    content: string;
    featuredImage: string | null;
    status: 'DRAFT' | 'PUBLISHED';
    publishedAt: string | null;
    authorId: string;
    createdAt: string;
    updatedAt: string;
  }
}
```

**Error** (400 Bad Request - Validation):
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data",
    "details": [
      {
        "path": ["title"],
        "message": "String must contain at least 5 character(s)"
      }
    ]
  }
}
```

**Error** (409 Conflict - Duplicate Slug):
```json
{
  "success": false,
  "error": {
    "code": "DUPLICATE_SLUG",
    "message": "A post with this slug already exists"
  }
}
```

**Example**:
```bash
POST /api/admin/news
Content-Type: application/json

{
  "title": "Tournoi interne - Résultats",
  "excerpt": "Découvrez les résultats du tournoi interne de ce weekend.",
  "content": "<h1>Tournoi interne</h1><p>Bravo à tous les participants...</p>",
  "status": "PUBLISHED"
}
```

---

### PATCH `/api/admin/news/[id]`

Update an existing news post.

**Authentication**: Required (Admin session)

**Path Parameters**:
- `id`: UUID of news post

**Request Body** (partial update):
```typescript
{
  title?: string; // Min 5, Max 200
  slug?: string; // Regex: /^[a-z0-9-]+$/
  excerpt?: string; // Max 500
  content?: string; // Min 50
  featuredImage?: string | null; // URL or path
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  publishedAt?: string | null; // ISO 8601
}
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    featuredImage: string | null;
    status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
    publishedAt: string | null;
    authorId: string;
    createdAt: string;
    updatedAt: string;
  }
}
```

**Error** (404 Not Found):
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "News post not found"
  }
}
```

**Example**:
```bash
PATCH /api/admin/news/123e4567-e89b-12d3-a456-426614174000
Content-Type: application/json

{
  "status": "PUBLISHED",
  "publishedAt": "2025-11-19T14:30:00.000Z"
}
```

---

### DELETE `/api/admin/news/[id]`

Delete (archive) a news post. Soft delete: sets status to ARCHIVED.

**Authentication**: Required (Admin session)

**Path Parameters**:
- `id`: UUID of news post

**Query Parameters** (optional):
```typescript
{
  hard?: boolean; // Default: false. If true, permanently delete from DB
}
```

**Response** (200 OK - Soft Delete):
```typescript
{
  success: true,
  data: {
    id: string;
    status: 'ARCHIVED';
  }
}
```

**Response** (204 No Content - Hard Delete):
No body (post permanently deleted)

**Error** (404 Not Found):
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "News post not found"
  }
}
```

**Example (Soft Delete)**:
```bash
DELETE /api/admin/news/123e4567-e89b-12d3-a456-426614174000
```

**Example (Hard Delete - Dangerous)**:
```bash
DELETE /api/admin/news/123e4567-e89b-12d3-a456-426614174000?hard=true
```

---

## Implementation Notes

### Slug Generation

If `slug` not provided in POST request, auto-generate from `title`:
```typescript
import slugify from 'slugify';

function generateSlug(title: string): string {
  return slugify(title, {
    lower: true,
    strict: true,
    locale: 'fr',
  });
}

// Handle duplicates by appending number
async function ensureUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (await prisma.newsPost.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}
```

### Content Sanitization

If allowing HTML input from admin, sanitize before storage:
```typescript
import DOMPurify from 'isomorphic-dompurify';

const cleanContent = DOMPurify.sanitize(content, {
  ALLOWED_TAGS: ['h1', 'h2', 'h3', 'p', 'a', 'strong', 'em', 'ul', 'ol', 'li', 'img'],
  ALLOWED_ATTR: ['href', 'src', 'alt', 'title'],
});
```

### Published Date Handling

- When status changes from DRAFT to PUBLISHED, auto-set `publishedAt` if null
- When status changes from PUBLISHED to DRAFT, set `publishedAt` to null

---

**News Endpoints Complete**: ✅
