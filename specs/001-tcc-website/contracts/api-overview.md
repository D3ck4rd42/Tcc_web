# API Contracts Overview
## TCC Website MVP

**Feature**: 001-tcc-website
**Date**: 2025-11-19
**API Style**: REST
**Base URL**: `https://www.tennisclubclairefontaine.fr/api`

---

## API Architecture

### Implementation Approach

**Next.js API Routes** (App Router):
- Location: `app/api/[domain]/route.ts`
- HTTP Methods: GET, POST, PUT, PATCH, DELETE
- Authentication: NextAuth.js session middleware
- Validation: Zod schemas (server-side)
- Rate Limiting: Upstash Rate Limit or custom middleware

### Authentication

**Admin Endpoints** require authentication:
- Session-based auth via NextAuth.js
- Cookie: `next-auth.session-token` (httpOnly, secure, sameSite)
- Middleware checks session validity before processing request

**Public Endpoints** (no auth):
- Contact form submission
- News listing/detail
- Page content retrieval

---

## Endpoint Summary

| Domain | Endpoint | Method | Auth | Description |
|--------|----------|--------|------|-------------|
| **Auth** | `/api/auth/[...nextauth]` | * | - | NextAuth.js endpoints (login, logout, session) |
| **News** | `/api/news` | GET | ❌ | List published news posts |
| | `/api/news/[slug]` | GET | ❌ | Get news post by slug |
| | `/api/admin/news` | GET | ✅ | List all news (admin view) |
| | `/api/admin/news` | POST | ✅ | Create news post |
| | `/api/admin/news/[id]` | PATCH | ✅ | Update news post |
| | `/api/admin/news/[id]` | DELETE | ✅ | Delete (archive) news post |
| **Pages** | `/api/pages/[slug]` | GET | ❌ | Get page content by slug |
| | `/api/admin/pages` | GET | ✅ | List all pages (admin) |
| | `/api/admin/pages/[id]` | PATCH | ✅ | Update page content |
| **Contact** | `/api/contact` | POST | ❌ | Submit contact form |
| | `/api/admin/contact` | GET | ✅ | List submissions (admin) |
| | `/api/admin/contact/[id]` | PATCH | ✅ | Update submission status |
| **Media** | `/api/admin/media` | GET | ✅ | List uploaded media |
| | `/api/admin/media` | POST | ✅ | Upload new media |
| | `/api/admin/media/[id]` | DELETE | ✅ | Delete media file |

---

## Common Response Formats

### Success Response

```typescript
{
  success: true,
  data: T, // Type varies by endpoint
  meta?: {
    page?: number,
    pageSize?: number,
    total?: number,
  }
}
```

### Error Response

```typescript
{
  success: false,
  error: {
    code: string, // "VALIDATION_ERROR", "NOT_FOUND", "UNAUTHORIZED", etc.
    message: string,
    details?: any, // Zod validation errors, etc.
  }
}
```

### Pagination Format

For list endpoints (e.g., `/api/news`):
```typescript
{
  success: true,
  data: T[],
  meta: {
    page: 1,
    pageSize: 10,
    total: 45,
    totalPages: 5,
  }
}
```

---

## Rate Limiting

| Endpoint Type | Limit | Window |
|---------------|-------|--------|
| Contact form | 5 requests | 15 minutes |
| Admin mutations | 100 requests | 15 minutes |
| Public reads | 100 requests | 1 minute |

**Implementation**: Upstash Rate Limit with Redis

**Response on limit exceeded**:
```typescript
{
  success: false,
  error: {
    code: "RATE_LIMIT_EXCEEDED",
    message: "Too many requests. Please try again later.",
    retryAfter: 900, // seconds
  }
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Request body failed Zod validation |
| `UNAUTHORIZED` | 401 | Not authenticated (missing/invalid session) |
| `FORBIDDEN` | 403 | Authenticated but not authorized |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Unexpected server error |

---

## Contract Files

Detailed contracts for each domain:

1. **[auth-endpoints.md](./auth-endpoints.md)**: Authentication (NextAuth.js)
2. **[news-endpoints.md](./news-endpoints.md)**: News/blog posts (public + admin)
3. **[pages-endpoints.md](./pages-endpoints.md)**: Static page content (public + admin)
4. **[contact-endpoints.md](./contact-endpoints.md)**: Contact form submissions
5. **[media-endpoints.md](./media-endpoints.md)**: Image/file uploads (admin)

---

## Security Headers

All API responses include:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
```

---

## CORS Policy

**Same-origin only** for MVP:
- Frontend and API hosted on same domain
- No CORS headers needed

**Future** (if API needed for mobile app):
- Allow specific origins via `Access-Control-Allow-Origin`
- Credentials: true (for cookies)

---

**Contracts Overview Complete**: ✅
**See individual contract files for detailed endpoint specifications**: ➡️
