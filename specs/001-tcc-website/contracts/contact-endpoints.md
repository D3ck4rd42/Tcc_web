# Contact API Endpoints
## TCC Website MVP

---

## Public Endpoint

### POST `/api/contact`

Submit a contact form inquiry.

**Authentication**: None

**Rate Limiting**: 5 requests per 15 minutes per IP address

**Request Body**:
```typescript
{
  name: string; // Min 2, Max 100
  email: string; // Valid email, Max 255
  phone?: string; // Optional, regex: /^\+?[0-9\s\-()]{10,20}$/
  message: string; // Min 10, Max 1000
}
```

**Validation** (Zod):
```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Adresse email invalide').max(255),
  phone: z.string()
    .regex(/^\+?[0-9\s\-()]{10,20}$/, 'Numéro de téléphone invalide')
    .optional(),
  message: z.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    id: string; // Submission UUID
    message: string; // "Votre message a été envoyé avec succès. Nous vous répondrons bientôt !"
  }
}
```

**Error** (400 Bad Request - Validation):
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Données invalides",
    "details": [
      {
        "path": ["email"],
        "message": "Adresse email invalide"
      },
      {
        "path": ["message"],
        "message": "Le message doit contenir au moins 10 caractères"
      }
    ]
  }
}
```

**Error** (429 Too Many Requests):
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Trop de tentatives. Veuillez réessayer dans 15 minutes.",
    "retryAfter": 900
  }
}
```

**Error** (500 Internal Server Error - Email Send Failure):
```json
{
  "success": false,
  "error": {
    "code": "EMAIL_SEND_FAILED",
    "message": "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement."
  }
}
```

**Example**:
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "Marie Dupont",
  "email": "marie.dupont@example.com",
  "phone": "06 12 34 56 78",
  "message": "Bonjour, je souhaite inscrire mon fils de 8 ans pour des cours de tennis. Quels sont les créneaux disponibles ?"
}
```

```json
{
  "success": true,
  "data": {
    "id": "789e4567-e89b-12d3-a456-426614174999",
    "message": "Votre message a été envoyé avec succès. Nous vous répondrons bientôt !"
  }
}
```

---

## Admin Endpoints

### GET `/api/admin/contact`

List contact form submissions.

**Authentication**: Required (Admin session)

**Query Parameters**:
```typescript
{
  page?: number; // Default: 1
  pageSize?: number; // Default: 20, Max: 100
  status?: 'NEW' | 'CONTACTED' | 'CLOSED' | 'ALL'; // Default: 'NEW'
  sortBy?: 'createdAt' | 'name' | 'email'; // Default: 'createdAt'
  order?: 'asc' | 'desc'; // Default: 'desc'
  search?: string; // Search in name, email, message
}
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: Array<{
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string; // Truncated to 200 chars in list view
    status: 'NEW' | 'CONTACTED' | 'CLOSED';
    emailSent: boolean;
    createdAt: string; // ISO 8601
  }>,
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    statusCounts: {
      NEW: number;
      CONTACTED: number;
      CLOSED: number;
    }
  }
}
```

**Example**:
```bash
GET /api/admin/contact?status=NEW&page=1&pageSize=20
```

```json
{
  "success": true,
  "data": [
    {
      "id": "789e4567-e89b-12d3-a456-426614174999",
      "name": "Marie Dupont",
      "email": "marie.dupont@example.com",
      "phone": "06 12 34 56 78",
      "message": "Bonjour, je souhaite inscrire mon fils de 8 ans pour des cours de tennis...",
      "status": "NEW",
      "emailSent": true,
      "createdAt": "2025-11-19T10:30:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "total": 5,
    "totalPages": 1,
    "statusCounts": {
      "NEW": 5,
      "CONTACTED": 12,
      "CLOSED": 23
    }
  }
}
```

---

### GET `/api/admin/contact/[id]`

Get full details of a contact submission.

**Authentication**: Required (Admin session)

**Path Parameters**:
- `id`: UUID of contact submission

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string; // Full message
    status: 'NEW' | 'CONTACTED' | 'CLOSED';
    emailSent: boolean;
    ipAddress: string | null;
    userAgent: string | null;
    createdAt: string; // ISO 8601
  }
}
```

**Error** (404 Not Found):
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Contact submission not found"
  }
}
```

---

### PATCH `/api/admin/contact/[id]`

Update contact submission status.

**Authentication**: Required (Admin session)

**Path Parameters**:
- `id`: UUID of contact submission

**Request Body**:
```typescript
{
  status: 'NEW' | 'CONTACTED' | 'CLOSED';
}
```

**Validation** (Zod):
```typescript
const updateContactStatusSchema = z.object({
  status: z.enum(['NEW', 'CONTACTED', 'CLOSED']),
});
```

**Response** (200 OK):
```typescript
{
  success: true,
  data: {
    id: string;
    status: 'NEW' | 'CONTACTED' | 'CLOSED';
  }
}
```

**Example**:
```bash
PATCH /api/admin/contact/789e4567-e89b-12d3-a456-426614174999
Content-Type: application/json

{
  "status": "CONTACTED"
}
```

```json
{
  "success": true,
  "data": {
    "id": "789e4567-e89b-12d3-a456-426614174999",
    "status": "CONTACTED"
  }
}
```

---

### DELETE `/api/admin/contact/[id]`

Delete a contact submission (hard delete).

**Authentication**: Required (Admin session)

**Path Parameters**:
- `id`: UUID of contact submission

**Response** (204 No Content):
No body (submission permanently deleted)

**Error** (404 Not Found):
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Contact submission not found"
  }
}
```

**Example**:
```bash
DELETE /api/admin/contact/789e4567-e89b-12d3-a456-426614174999
```

---

## Implementation Notes

### Email Notification

When a contact form is submitted, send notification email to admin:

```typescript
// lib/email.ts
import nodemailer from 'nodemailer';

export async function sendContactNotification(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const adminEmail = {
    from: process.env.CONTACT_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `[TCC Website] Nouveau message de ${data.name}`,
    html: `
      <h2>Nouveau message via le formulaire de contact</h2>
      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      ${data.phone ? `<p><strong>Téléphone :</strong> ${data.phone}</p>` : ''}
      <p><strong>Message :</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Reçu le ${new Date().toLocaleString('fr-FR')}</small></p>
    `,
  };

  await transporter.sendMail(adminEmail);

  // Optional: Send confirmation to user
  const userEmail = {
    from: process.env.CONTACT_EMAIL,
    to: data.email,
    subject: 'Confirmation de votre message - Tennis Club Clairefontaine',
    html: `
      <h2>Merci pour votre message !</h2>
      <p>Bonjour ${data.name},</p>
      <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
      <p>À très bientôt,<br>L'équipe du Tennis Club Clairefontaine</p>
    `,
  };

  await transporter.sendMail(userEmail);
}
```

### Rate Limiting Implementation

```typescript
// app/api/contact/route.ts
import { contactRateLimit } from '@/lib/rate-limit';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const ip = headers().get('x-forwarded-for') ?? 'unknown';
  const { success, remaining, reset } = await contactRateLimit.limit(ip);

  if (!success) {
    return Response.json(
      {
        success: false,
        error: {
          code: 'RATE_LIMIT_EXCEEDED',
          message: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.',
          retryAfter: Math.floor((reset - Date.now()) / 1000),
        },
      },
      { status: 429 }
    );
  }

  // Process contact form...
}
```

### Spam Prevention

1. **Rate limiting**: 5 submissions per 15 min per IP
2. **Honeypot field**: Add hidden field to form (reject if filled)
3. **CAPTCHA** (future): Add reCAPTCHA v3 if spam becomes an issue

```typescript
// Honeypot validation
const honeyPotSchema = z.object({
  // ... normal fields
  website: z.string().length(0), // Hidden field, must be empty
});

if (data.website !== '') {
  // Bot detected
  return Response.json(
    { success: false, error: { code: 'SPAM_DETECTED', message: 'Invalid submission' } },
    { status: 400 }
  );
}
```

### Data Retention (RGPD)

Implement automated cleanup:
```typescript
// scripts/cleanup-old-submissions.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanupOldSubmissions() {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const result = await prisma.contactSubmission.deleteMany({
    where: {
      createdAt: {
        lt: oneYearAgo,
      },
    },
  });

  console.log(`Deleted ${result.count} submissions older than 1 year`);
}

cleanupOldSubmissions();
```

Run monthly via cron:
```bash
0 2 1 * * node scripts/cleanup-old-submissions.js
```

---

**Contact Endpoints Complete**: ✅
