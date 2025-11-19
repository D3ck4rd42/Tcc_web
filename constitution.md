# Constitution du Projet - Site Web Tennis Club Clairefontaine

**Version:** 1.0
**Date:** 19 Novembre 2025
**Projet:** Site Web du Tennis Club Clairefontaine (TCC)

---

## Table des Matières

1. [Vision & Principes Fondamentaux](#1-vision--principes-fondamentaux)
2. [Standards Techniques](#2-standards-techniques)
3. [Standards de Design & UX](#3-standards-de-design--ux)
4. [Standards de Contenu](#4-standards-de-contenu)
5. [Standards de Sécurité](#5-standards-de-sécurité)
6. [Standards de Performance](#6-standards-de-performance)
7. [Standards de Qualité & Accessibilité](#7-standards-de-qualité--accessibilité)
8. [Processus de Développement](#8-processus-de-développement)

---

## 1. Vision & Principes Fondamentaux

### 1.1 Vision du Projet

> **"Come for the courts. Stay for the community."**

Créer une présence en ligne qui reflète l'authenticité du TCC : un club de village convivial doté d'infrastructures de qualité et d'une excellence pédagogique.

### 1.2 Objectifs Stratégiques

**Objectifs Primaires (P0):**
1. Augmenter le recrutement de nouveaux adhérents (cible : +15-20% la première année)
2. Établir une présence en ligne professionnelle pour gagner en crédibilité
3. Faciliter l'accès à l'information (tarifs, horaires, inscriptions)
4. Valoriser les atouts distinctifs du club (professeur 4/6, court couvert)

### 1.3 Principes Directeurs

#### 1.3.1 Authenticité
- Refléter la réalité du club : convivialité d'un club de village avec excellence pédagogique
- Contenu honnête et transparent (pas de sur-promesses)
- Photos réelles des membres et installations
- Témoignages authentiques

#### 1.3.2 Accessibilité
- Priorité au mobile-first (consultation en mobilité)
- Interface intuitive pour tous les âges
- Information claire et facile à trouver
- Formulaires simples et rapides

#### 1.3.3 Simplicité
- Design épuré, navigation claire
- Pas de complexité inutile
- Formulaire d'inscription complet mais structuré de façon intuitive
- Interface d'administration accessible aux bénévoles non-techniques

#### 1.3.4 Performance
- Temps de chargement < 3 secondes
- Optimisation images automatique
- Site léger et rapide

#### 1.3.5 Maintenabilité
- Code propre, commenté, bien structuré
- Documentation complète
- Interface admin intuitive type WordPress
- Mises à jour de sécurité simplifiées avec notifications
- Surveillance automatique des dépendances

---

## 2. Standards Techniques

### 2.1 Stack Technique Obligatoire

#### 2.1.1 Frontend (Site Public)
- **Framework:** Next.js 14+ (App Router) - OBLIGATOIRE
- **Langage:** TypeScript strict mode - OBLIGATOIRE
- **Styling:** Tailwind CSS - OBLIGATOIRE
- **Composants UI:** Shadcn/ui ou Radix UI
- **Images:** Next/Image avec optimisation automatique (Sharp)
- **Animations:** Framer Motion (optionnel, à utiliser avec modération)

#### 2.1.2 Backend (API)
- **Framework:** Next.js API Routes - OBLIGATOIRE
- **Base de données:** PostgreSQL - OBLIGATOIRE
- **ORM:** Prisma ou Drizzle - OBLIGATOIRE
- **Authentication:** NextAuth.js - OBLIGATOIRE
- **Validation:** Zod - OBLIGATOIRE pour toutes les entrées utilisateur
- **File Storage:** Uploadthing ou stockage local optimisé

#### 2.1.3 Interface d'Administration
- **Éditeur WYSIWYG:** TipTap (moderne, extensible) ou Slate.js
- **Système de blocs:** Custom inspiré de Gutenberg
- **Gestion médias:** Bibliothèque custom avec drag & drop
- **Dashboard:** Charts avec Recharts ou Chart.js
- **Formulaires:** React Hook Form + Zod validation

#### 2.1.4 Fonctionnalités Intégrées
- **Formulaires contact:** Resend ou Nodemailer pour emails
- **Galerie photos:** Lightbox custom (photoswipe)
- **Calendrier événements:** React Big Calendar ou custom
- **SEO:** next-seo + sitemap automatique
- **Analytics:** Google Analytics 4 (intégration native)
- **RGPD:** Module de consentement custom

### 2.2 Conventions de Code

#### 2.2.1 TypeScript
```typescript
// ✅ CORRECT : Typage strict, interfaces explicites
interface CourseData {
  id: string;
  title: string;
  description: string;
  schedule: {
    day: string;
    startTime: string;
    endTime: string;
  };
  price: number;
}

// ❌ INCORRECT : any, types implicites
const data: any = {...}
```

#### 2.2.2 Composants React
```typescript
// ✅ CORRECT : Composants fonctionnels, props typés, nommage clair
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant, children, onClick }: ButtonProps) {
  return <button className={cn(baseStyles, variantStyles[variant])} onClick={onClick}>
    {children}
  </button>
}

// ❌ INCORRECT : Props non typés, classe de composant
```

#### 2.2.3 Structure des Fichiers
```
/app
  /page.tsx                    # Page d'accueil
  /cours-enfants/page.tsx     # Pages publiques
  /adhesion/page.tsx
  /admin
    /dashboard/page.tsx        # Interface admin
    /actualites/page.tsx
/components
  /ui                          # Composants Shadcn/ui
  /layout                      # Header, Footer, etc.
  /forms                       # Formulaires
/lib
  /utils.ts                    # Utilitaires
  /db.ts                       # Configuration DB
/prisma
  /schema.prisma              # Schéma base de données
```

#### 2.2.4 Nommage
- **Fichiers composants:** PascalCase (`CourseCard.tsx`, `HeroSection.tsx`)
- **Fichiers utilitaires:** camelCase (`formatDate.ts`, `validateEmail.ts`)
- **URLs:** kebab-case (`/cours-enfants`, `/notre-equipe`)
- **Variables/fonctions:** camelCase (`userName`, `handleSubmit`)
- **Constantes:** UPPER_SNAKE_CASE (`MAX_FILE_SIZE`, `API_ENDPOINT`)
- **Types/Interfaces:** PascalCase (`UserData`, `CourseSchedule`)

### 2.3 Gestion des Dépendances

#### 2.3.1 Mises à Jour de Sécurité
- **Surveillance automatique:** Dependabot activé sur le repo
- **Audit quotidien:** `npm audit` automatisé
- **Notifications admin:** Dashboard affichant les vulnérabilités détectées
- **Mises à jour critiques:** Appliquer sous 7 jours maximum
- **Mises à jour mineures:** Réviser et appliquer mensuellement

#### 2.3.2 Ajout de Dépendances
- Toujours privilégier les packages bien maintenus (> 1M téléchargements/mois)
- Vérifier la dernière mise à jour (< 6 mois idéalement)
- Consulter les issues GitHub avant installation
- Documenter le choix dans les commits
- Éviter les packages abandonnés

### 2.4 Hébergement & Déploiement

#### 2.4.1 Hébergement
- **Provider:** OVH (hébergement Node.js ou VPS)
- **Budget:** 60-120€/an
- **SSL:** Let's Encrypt (gratuit via OVH)
- **Base de données:** PostgreSQL hébergée sur OVH

#### 2.4.2 Déploiement
- **Build:** Automatisé via Git hooks
- **Process Manager:** PM2 pour process management
- **Reverse Proxy:** Nginx
- **CI/CD:** Scripts de déploiement automatisés
- **Environnements:** Production, Staging (si budget permet)

#### 2.4.3 Backups
- **Fréquence:** Quotidienne automatique
- **Scope:** Base de données PostgreSQL + fichiers médias
- **Rétention:** 30 derniers jours
- **Stockage:** Local serveur OVH + cloud externe (recommandé)
- **Tests:** Vérification d'intégrité mensuelle automatique

---

## 3. Standards de Design & UX

### 3.1 Identité Visuelle

#### 3.1.1 Palette de Couleurs (OBLIGATOIRE)

**Couleurs Principales du Club:**
```css
/* Primaire - Bordeaux */
--color-primary: #8B1538;        /* Boutons, liens, titres */
--color-primary-dark: #5D1126;   /* Hover, emphasis */
--color-primary-light: #722F37;  /* Version adoucie */

/* Secondaire - Blanc cassé */
--color-background: #F8F6F0;     /* Fond principal */
--color-background-alt: #FAF9F6; /* Sections alternées */

/* Neutres */
--color-text: #1F2937;           /* Texte principal */
--color-text-light: #6B7280;     /* Texte secondaire */
--color-white: #FFFFFF;
--color-border: #E5E7EB;         /* Bordures, séparateurs */

/* Terre battue (accent naturel) */
--color-accent-clay: #C17A6D;    /* Accents secondaires */

/* Système */
--color-success: #10B981;        /* Validations */
--color-error: #EF4444;          /* Erreurs */
--color-warning: #F59E0B;        /* Alertes */
--color-info: #3B82F6;           /* Informations */
```

**Règles d'Usage:**
- Bordeaux (#8B1538) : CTAs principaux, header, footer, titres H1
- Blanc cassé (#F8F6F0) : Backgrounds, cartes
- Bordeaux foncé (#5D1126) : Hover states, éléments actifs
- JAMAIS utiliser de couleurs non définies dans la palette
- Contraste minimum WCAG AA : 4.5:1 pour texte normal

#### 3.1.2 Typographie

**Polices Principales:**
```css
/* Titres */
font-family: 'Montserrat', sans-serif;
font-weight: 700 (Bold) pour H1, H2
font-weight: 600 (Semi-Bold) pour H3, H4

/* Corps de texte */
font-family: 'Open Sans', sans-serif;
font-weight: 400 (Regular) pour texte normal
font-weight: 600 (Semi-Bold) pour emphase

/* Système de tailles */
H1: 2.5rem (40px) desktop, 2rem (32px) mobile
H2: 2rem (32px) desktop, 1.75rem (28px) mobile
H3: 1.5rem (24px) desktop, 1.25rem (20px) mobile
Body: 1rem (16px)
Small: 0.875rem (14px)
```

**Hiérarchie:**
- Un seul H1 par page (SEO)
- H2 pour sections principales
- H3 pour sous-sections
- Jamais sauter de niveau (H1 → H3)

#### 3.1.3 Espacement & Layout

**Système d'Espacement (Tailwind):**
```
Petit: 0.5rem (8px)   → space-2, p-2, m-2
Moyen: 1rem (16px)    → space-4, p-4, m-4
Grand: 2rem (32px)    → space-8, p-8, m-8
Très grand: 4rem (64px) → space-16, p-16, m-16
```

**Breakpoints Responsive:**
```
sm: 640px    (Mobile large)
md: 768px    (Tablet)
lg: 1024px   (Desktop)
xl: 1280px   (Desktop large)
2xl: 1536px  (Desktop très large)
```

**Grid Layout:**
- Container max-width: 1280px (xl)
- Padding horizontal: 1rem (mobile), 2rem (desktop)
- Grid columns: 12 colonnes (Tailwind grid)

### 3.2 Composants UI Standards

#### 3.2.1 Boutons

```typescript
// Variantes obligatoires
'primary'    // Bordeaux, actions principales
'secondary'  // Outline bordeaux, actions secondaires
'ghost'      // Transparent, actions tertiaires
'link'       // Style lien, navigation

// Tailles
'sm'   // Petit (32px height)
'md'   // Moyen (40px height) - défaut
'lg'   // Grand (48px height)

// États
default, hover, active, disabled, loading
```

#### 3.2.2 Formulaires

**Standards:**
- Labels toujours visibles (pas de placeholder-only)
- Champs requis marqués avec astérisque rouge (*)
- Messages d'erreur en rouge sous le champ
- Messages de succès en vert
- Validation en temps réel (après blur)
- Protection anti-spam (reCAPTCHA v3 ou honeypot)

**Exemple:**
```typescript
<FormField>
  <Label>Nom complet <span className="text-red-600">*</span></Label>
  <Input type="text" required />
  {error && <ErrorMessage>{error}</ErrorMessage>}
</FormField>
```

#### 3.2.3 Cartes (Cards)

**Structure Standard:**
```typescript
<Card>
  <CardImage src="..." alt="..." />
  <CardHeader>
    <CardTitle>Titre</CardTitle>
    <CardSubtitle>Sous-titre optionnel</CardSubtitle>
  </CardHeader>
  <CardContent>
    Description du contenu
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Variantes:**
- Avec image / Sans image
- Horizontale / Verticale
- Avec shadow / Avec border

### 3.3 Principes UX

#### 3.3.1 Navigation
- Menu principal : Maximum 7 items (5 idéalement)
- Breadcrumbs sur pages profondes
- Footer avec liens rapides
- Recherche accessible (optionnel P1)

#### 3.3.2 Actions Utilisateur
- CTAs clairs et visibles ("Devenir Membre", "Nous Contacter")
- Maximum 1 CTA principal par section
- Feedback immédiat sur toute interaction (loading, success, error)
- Confirmations pour actions destructives

#### 3.3.3 Mobile-First
- Design pensé d'abord pour mobile
- Touch targets minimum 44x44px
- Menus hamburger sur mobile
- Images responsive (srcset)
- Texte lisible sans zoom (16px minimum)

#### 3.3.4 Chargement & Performance UX
- Loading skeletons sur chargement initial
- Images lazy-loaded avec placeholders
- Messages d'erreur clairs et utiles
- Pas de layout shift (CLS = 0)

---

## 4. Standards de Contenu

### 4.1 Ton & Voix

**Tonalité Générale:**
- **Authentique** : Refléter la réalité du club sans artifice
- **Chaleureux** : Accueillant, familial, convivial
- **Professionnel** : Crédible, sérieux (mais pas corporate)
- **Inspirant** : Donne envie de rejoindre la communauté
- **Humble** : Fier mais pas prétentieux

**Style d'Écriture:**
- Phrases courtes et directes
- Vocabulaire simple et accessible
- Tutoiement ou vouvoiement selon contexte (vouvoiement par défaut pour formulaires officiels)
- Émojis : JAMAIS (sauf exceptions explicites)
- Éviter jargon technique tennis sauf si nécessaire

### 4.2 Structure des Contenus

#### 4.2.1 Pages
- **Titre H1** : Clair, descriptif, SEO-friendly
- **Introduction** : 2-3 phrases résumant la page
- **Sections** : Structurées avec H2, H3
- **CTAs** : Présents et pertinents
- **Longueur** : 300-800 mots idéalement

#### 4.2.2 Actualités/Articles
- **Titre** : Accrocheur, 50-60 caractères
- **Extrait** : 150 caractères
- **Image à la une** : Obligatoire, 1200x630px
- **Contenu** : 300-1000 mots
- **Date** : Toujours visible
- **Catégories** : Max 2 par article

#### 4.2.3 SEO
- **Title tag** : 50-60 caractères, mots-clés au début
- **Meta description** : 150-155 caractères, incitatif
- **URLs** : Courtes, descriptives, kebab-case
- **ALT text images** : Descriptif, mots-clés naturels
- **Mots-clés principaux:**
  - "tennis club clairefontaine"
  - "cours tennis clairefontaine"
  - "club tennis yvelines"
  - "cours tennis enfants clairefontaine"

### 4.3 Images & Médias

#### 4.3.1 Standards Techniques
- **Format** : WebP prioritaire (fallback JPG/PNG)
- **Résolution** :
  - Hero images : 1920x1080px (ratio 16:9)
  - Cartes : 800x600px (ratio 4:3)
  - Portraits : 600x800px (ratio 3:4)
- **Poids** : Maximum 300 Ko par image (après compression)
- **Compression** : Automatique via Sharp (Next/Image)
- **ALT text** : Obligatoire sur toutes les images

#### 4.3.2 Standards Éditoriaux
- **Photos authentiques** : Membres réels du club (avec autorisations)
- **Qualité professionnelle** : Pas de photos floues ou mal cadrées
- **Diversité** : Représenter tous les publics (enfants, adultes, femmes, hommes)
- **Action** : Privilégier photos en action (cours, matchs) vs photos posées
- **Luminosité** : Photos lumineuses, éviter contre-jours

---

## 5. Standards de Sécurité

### 5.1 Authentification

**NextAuth.js Configuration:**
```typescript
// Obligatoire
- Sessions sécurisées avec JWT
- CSRF protection activée
- Rate limiting sur /api/auth/*
- Cookies httpOnly, secure, sameSite: 'lax'
- Expiration session : 7 jours
- 2FA recommandé pour admins (optionnel P1)
```

**Mots de passe:**
- Minimum 12 caractères
- Hash avec bcrypt (rounds: 10)
- Jamais stocker en clair
- Reset sécurisé avec token unique

### 5.2 Protection des Entrées Utilisateur

**Validation Zod (OBLIGATOIRE):**
```typescript
// ✅ CORRECT : Validation stricte avec Zod
const ContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^[0-9]{10}$/),
  message: z.string().min(10).max(1000),
});

// Validation côté serveur OBLIGATOIRE
export async function POST(request: Request) {
  const body = await request.json();
  const validated = ContactFormSchema.parse(body); // Throws si invalide
  // ...
}

// ❌ INCORRECT : Pas de validation
const data = await request.json();
// Utilisation directe sans validation
```

**Protection XSS:**
- Échapper toutes les entrées utilisateur
- Sanitize HTML si éditeur WYSIWYG (DOMPurify)
- CSP headers configurés
- Jamais `dangerouslySetInnerHTML` sans sanitization

**Protection SQL Injection:**
- Toujours utiliser ORM Prisma (queries paramétrées)
- Jamais de SQL brut avec inputs utilisateur
- Validation Zod avant toute query

### 5.3 API Routes

**Rate Limiting (OBLIGATOIRE):**
```typescript
// Limites recommandées
/api/contact      → 5 requêtes / 15 min
/api/inscription  → 3 requêtes / heure
/api/auth/signin  → 5 tentatives / 20 min
/api/*            → 100 requêtes / 15 min (général)
```

**Headers Sécurité:**
```typescript
// Obligatoires dans next.config.js
{
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Content-Security-Policy': "default-src 'self'; ..."
}
```

### 5.4 Upload de Fichiers

**Restrictions:**
- Types autorisés : JPG, PNG, GIF, WebP, PDF
- Taille max : 10 Mo (configurable)
- Scan antivirus si budget permet (optionnel)
- Stockage hors de /public si sensible
- Noms de fichiers sanitizés (pas d'exécutables)

### 5.5 HTTPS & SSL

- **HTTPS obligatoire** en production
- SSL Let's Encrypt (gratuit via OVH)
- Redirection automatique HTTP → HTTPS
- HSTS header activé

### 5.6 RGPD

**Obligations:**
- Banner de consentement cookies
- Politique de confidentialité
- Conditions d'utilisation
- Droit d'accès, modification, suppression des données
- Stockage données France/UE uniquement
- Pas de trackers sans consentement (Google Analytics après opt-in)

---

## 6. Standards de Performance

### 6.1 Objectifs Mesurables

**Core Web Vitals (Google):**
```
LCP (Largest Contentful Paint)  < 2.5s   ✅ OBLIGATOIRE
FID (First Input Delay)         < 100ms  ✅ OBLIGATOIRE
CLS (Cumulative Layout Shift)   < 0.1    ✅ OBLIGATOIRE
```

**Autres Métriques:**
```
Temps de chargement initial     < 3s     ✅ OBLIGATOIRE
First Contentful Paint (FCP)    < 1.5s   ✅ OBLIGATOIRE
Time to Interactive (TTI)       < 3.5s   ✅ OBLIGATOIRE
PageSpeed Insights Mobile       > 80/100 ✅ OBLIGATOIRE
PageSpeed Insights Desktop      > 90/100 ✅ OBLIGATOIRE
```

### 6.2 Optimisations Obligatoires

#### 6.2.1 Images
```typescript
// ✅ CORRECT : Next/Image avec optimisation
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Tennis Club Clairefontaine"
  width={1920}
  height={1080}
  priority // Pour hero image
  placeholder="blur" // Avec blurDataURL
/>

// ❌ INCORRECT : <img> standard
<img src="/hero.jpg" alt="..." />
```

**Règles:**
- Toujours utiliser `next/image`
- WebP automatique (Sharp)
- Lazy loading par défaut (sauf hero)
- Responsive images (srcset automatique)
- Placeholder blur pour UX

#### 6.2.2 Fonts

```typescript
// ✅ CORRECT : next/font avec preload
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

// ❌ INCORRECT : Google Fonts via <link>
```

#### 6.2.3 Code Splitting

```typescript
// ✅ CORRECT : Dynamic imports pour composants lourds
import dynamic from 'next/dynamic'

const Calendar = dynamic(() => import('@/components/Calendar'), {
  loading: () => <Skeleton />,
  ssr: false // Si client-only
})

// ❌ INCORRECT : Import statique de composants lourds
import Calendar from '@/components/Calendar'
```

#### 6.2.4 Base de Données

**Optimisations Prisma:**
- Indexation des champs recherchés fréquemment
- Select uniquement les champs nécessaires
- Pagination pour listes longues
- Cache avec Redis si trafic élevé (optionnel P1)

```typescript
// ✅ CORRECT : Select spécifique, indexé
const courses = await prisma.course.findMany({
  select: { id: true, title: true, price: true },
  where: { published: true },
  take: 10
})

// ❌ INCORRECT : Select * sur toute la table
const courses = await prisma.course.findMany()
```

### 6.3 Monitoring

**Outils Obligatoires:**
- Google Analytics 4 (après consentement)
- Google Search Console
- PageSpeed Insights (tests mensuels)
- Lighthouse CI (automatisé en CI/CD)

**Alertes:**
- Drop de performance > 20% → Investigation
- Core Web Vitals dégradés → Priorité haute
- Erreurs 500 → Notification immédiate

---

## 7. Standards de Qualité & Accessibilité

### 7.1 Accessibilité (WCAG 2.1 AA)

**Obligations:**
```
✅ Contraste minimum 4.5:1 (texte normal)
✅ Contraste minimum 3:1 (texte large > 24px)
✅ Navigation au clavier complète
✅ Focus visible sur tous les éléments interactifs
✅ ALT text sur toutes les images
✅ Labels sur tous les champs de formulaire
✅ Landmarks ARIA (header, nav, main, footer)
✅ Headings hiérarchiques (H1 → H2 → H3)
✅ Liens descriptifs (pas "cliquez ici")
✅ Texte redimensionnable jusqu'à 200%
```

**Tests:**
- Lighthouse Accessibility score > 95/100
- axe DevTools : 0 violation
- Navigation clavier complète fonctionnelle

### 7.2 Compatibilité Navigateurs

**Support Minimum:**
```
Chrome/Edge     Dernières 2 versions  ✅ Priorité haute
Firefox         Dernières 2 versions  ✅ Priorité haute
Safari (macOS)  Dernières 2 versions  ✅ Priorité haute
Safari (iOS)    iOS 14+               ✅ Priorité haute
Samsung Internet Dernières 2 versions ✅ Priorité moyenne
```

**Non supportés:**
- Internet Explorer (obsolète)
- Navigateurs > 3 ans

### 7.3 Tests Qualité

**Avant chaque déploiement:**
```
✅ Tests manuels sur Chrome, Firefox, Safari
✅ Tests responsive (mobile, tablet, desktop)
✅ Lighthouse audit (Performance, Accessibility, Best Practices, SEO)
✅ Validation HTML (W3C)
✅ Tests formulaires (validation, soumission, emails)
✅ Vérification liens (aucun lien cassé)
✅ Orthographe et grammaire
```

**Tests Automatisés (Optionnel P1):**
- Jest pour logique métier
- Playwright/Cypress pour E2E
- Vitest pour composants React

---

## 8. Processus de Développement

### 8.1 Git Workflow

**Branches:**
```
main            → Production (protégée)
develop         → Développement actif
feature/*       → Nouvelles fonctionnalités
fix/*           → Corrections de bugs
hotfix/*        → Corrections urgentes production
```

**Commits:**
```
feat: Ajout formulaire d'inscription complète
fix: Correction affichage tarifs sur mobile
style: Mise à jour couleurs header bordeaux
docs: Ajout documentation API
refactor: Optimisation requêtes base de données
perf: Compression images automatique
test: Ajout tests formulaire contact
```

**Convention:**
- Commits atomiques (une fonctionnalité = un commit)
- Messages en français, clairs et descriptifs
- Référence issue si applicable (#123)

### 8.2 Revue de Code

**Checklist Avant Merge:**
```
✅ Code TypeScript strict (pas de 'any')
✅ Composants bien typés
✅ Validation Zod sur toutes les entrées
✅ Accessibilité respectée
✅ Performance OK (pas de regression)
✅ Responsive testé
✅ Pas de console.log en production
✅ Commentaires sur logique complexe
✅ Documentation mise à jour si nécessaire
```

### 8.3 Documentation

**Obligatoire:**
- README.md à jour avec setup instructions
- Documentation API (endpoints, payloads)
- Commentaires JSDoc sur fonctions complexes
- Guide d'utilisation interface admin
- Changelog pour chaque version

**Format JSDoc:**
```typescript
/**
 * Envoie un email de confirmation d'inscription
 * @param email - Email du destinataire
 * @param data - Données d'inscription
 * @returns Promise<boolean> - true si envoi réussi
 * @throws Error si email invalide ou service indisponible
 */
async function sendConfirmationEmail(
  email: string,
  data: InscriptionData
): Promise<boolean> {
  // ...
}
```

### 8.4 Déploiement

**Checklist Avant Déploiement Production:**
```
✅ Tests passés (manuels et automatisés)
✅ Lighthouse > seuils définis (Perf 80+, A11y 95+)
✅ Backup base de données effectué
✅ Variables d'environnement vérifiées
✅ Certificat SSL valide
✅ DNS configuré correctement
✅ Monitoring activé (GA, Sentry optionnel)
✅ Changelog mis à jour
✅ Documentation déploiement suivie
```

**Rollback:**
- Plan de rollback documenté
- Backups testés régulièrement
- Possibilité de revenir à version précédente en < 15 min

### 8.5 Maintenance

**Tâches Récurrentes:**

**Quotidiennes:**
- Vérification backups automatiques
- Monitoring erreurs (si logs configurés)

**Hebdomadaires:**
- Vérification formulaires (nouveaux messages)
- Modération commentaires (si activés)

**Mensuelles:**
- Audit npm (vulnérabilités)
- Mise à jour dépendances non-breaking
- Test restauration backup
- Analyse Google Analytics
- PageSpeed Insights check

**Trimestrielles:**
- Mises à jour majeures (après tests staging)
- Revue contenus obsolètes
- Optimisation SEO
- Audit accessibilité complet

---

## Changelog de la Constitution

### Version 1.0 (19 Novembre 2025)
- Création initiale de la constitution
- Définition des standards techniques (Next.js, TypeScript, Tailwind)
- Définition des standards de design (couleurs TCC, typographie)
- Définition des standards de sécurité (NextAuth, Zod, rate limiting)
- Définition des standards de performance (Core Web Vitals)
- Définition des processus de développement

---

## Références

- **PRD Complet:** `/docs/PRD.md`
- **Next.js Documentation:** https://nextjs.org/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Prisma Documentation:** https://www.prisma.io/docs
- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **Web Vitals:** https://web.dev/vitals/

---

**Cette constitution est un document vivant.** Elle doit être mise à jour à mesure que le projet évolue, tout en maintenant la cohérence et les principes fondamentaux.
