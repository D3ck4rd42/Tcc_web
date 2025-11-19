# Implementation Plan: Site Web Tennis Club Clairefontaine

**Branch**: `claude/create-plan-document-01B5df4TXBr3XW5GeYUFBPd5` | **Date**: 2025-11-19 | **Spec**: [PRD](../../docs/PRD.md)
**Input**: Product Requirements Document from `docs/PRD.md`

**Note**: This document follows the plan-template.md structure and provides the detailed implementation plan for the Tennis Club Clairefontaine website.

## Summary

Le Tennis Club Clairefontaine (TCC) nécessite un site web moderne pour augmenter sa visibilité en ligne et recruter de nouveaux adhérents. Le projet consiste à développer une application web complète avec Next.js incluant un site vitrine public et une interface d'administration custom (type WordPress) permettant aux bénévoles de gérer facilement tous les contenus sans compétences techniques.

**Approche technique:** Application Next.js 14+ avec TypeScript, interface admin WYSIWYG (TipTap), base de données PostgreSQL, hébergée sur OVH avec un budget annuel de 60-120€.

**Objectifs:**
- Créer une présence en ligne professionnelle pour le club
- Augmenter le recrutement de nouveaux adhérents (+15-20% la première année)
- Fournir un outil de gestion de contenu intuitif pour les bénévoles
- Atteindre 1000 visiteurs/mois en fin d'année 1

## Technical Context

**Language/Version**: TypeScript (strict mode) avec Next.js 14+ (App Router)
**Primary Dependencies**: Next.js, React, Tailwind CSS, Shadcn/ui, Prisma ORM, NextAuth.js, TipTap (éditeur WYSIWYG), Zod (validation)
**Storage**: PostgreSQL (hébergée sur OVH)
**Testing**: Jest + React Testing Library (tests unitaires), Playwright (tests E2E)
**Target Platform**: Web application déployée sur OVH (VPS ou hébergement Node.js), compatible tous navigateurs modernes, mobile-first
**Project Type**: Web application (frontend public + backend API + interface admin)
**Performance Goals**:
- Temps de chargement < 3 secondes
- First Contentful Paint < 1.5s
- Score Lighthouse > 90/100
- Optimisation images automatique (WebP/AVIF)

**Constraints**:
- Budget hébergement: 60-120€/an (OVH)
- Interface admin doit être intuitive pour bénévoles non-techniques
- Gestion contenu sans compétences en code
- RGPD compliant (données personnelles via formulaire inscription)
- Mobile-first responsive design obligatoire
- Sécurité renforcée (authentification, rate limiting, protection XSS/CSRF)

**Scale/Scope**:
- ~90 adhérents actuels, objectif croissance +15-20%
- Site vitrine: 6-8 pages principales + section actualités + événements
- Interface admin complète (gestion pages, articles, médias, événements, équipe, menus)
- Attendu: 100-500 visiteurs/mois initialement, 1000 visiteurs/mois en fin d'année 1
- 30-50 photos HD, galerie extensible
- Formulaire d'inscription complet avec tous les champs du formulaire papier

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Conformité à la Constitution du Projet:**

✅ **Vision & Authenticité**: Le plan reflète la vision "Come for the courts. Stay for the community" avec un site authentique valorisant la convivialité et l'excellence pédagogique.

✅ **Stack Technique Obligatoire**:
- Next.js 14+ (App Router) ✓
- TypeScript strict mode ✓
- Tailwind CSS ✓
- PostgreSQL + Prisma ORM ✓
- NextAuth.js pour authentification ✓
- Zod pour validation ✓
- TipTap pour éditeur WYSIWYG ✓

✅ **Standards de Design**:
- Mobile-first responsive ✓
- Palette bordeaux/blanc cassé ✓
- Typographie Montserrat + Open Sans ✓
- Shadcn/ui pour composants ✓

✅ **Standards de Performance**:
- Temps de chargement < 3s ✓
- Optimisation images automatique (Next/Image + Sharp) ✓
- Score Lighthouse > 90 ✓

✅ **Standards de Sécurité**:
- HTTPS obligatoire (Let's Encrypt) ✓
- Protection XSS, CSRF, SQL injection ✓
- Rate limiting ✓
- Surveillance automatique dépendances (Dependabot) ✓
- RGPD compliance ✓

✅ **Maintenabilité**:
- Code TypeScript strict, bien structuré ✓
- Documentation complète ✓
- Interface admin intuitive type WordPress ✓
- Notifications mises à jour sécurité ✓

**Aucune violation de la constitution identifiée.**

## Project Structure

### Documentation (this feature)

```text
specs/001-site-web-tcc/
├── plan.md              # Ce fichier (plan d'implémentation)
├── research.md          # Phase 0 output (recherche technique, hébergement OVH, etc.)
├── data-model.md        # Phase 1 output (schéma BDD, modèles Prisma)
├── quickstart.md        # Phase 1 output (guide développeur, setup local)
├── contracts/           # Phase 1 output (API contracts, composants)
│   ├── api-routes.md
│   ├── components.md
│   └── admin-interfaces.md
└── tasks.md             # Phase 2 output (liste des tâches d'implémentation)
```

### Source Code (repository root)

```text
# Option 2: Web application (frontend + backend + admin)

/
├── app/                          # Next.js 14+ App Router
│   ├── (public)/                 # Routes publiques (site vitrine)
│   │   ├── page.tsx              # Page d'accueil
│   │   ├── le-club/page.tsx      # À propos du club
│   │   ├── notre-equipe/page.tsx # Équipe pédagogique
│   │   ├── cours/
│   │   │   ├── enfants/page.tsx
│   │   │   ├── adultes/page.tsx
│   │   │   └── stages/page.tsx
│   │   ├── adhesion/page.tsx     # Tarifs et inscription
│   │   ├── contact/page.tsx
│   │   ├── actualites/
│   │   │   ├── page.tsx          # Liste actualités
│   │   │   └── [slug]/page.tsx   # Détail article
│   │   └── evenements/
│   │       ├── page.tsx          # Calendrier
│   │       └── [slug]/page.tsx
│   │
│   ├── admin/                    # Interface d'administration
│   │   ├── layout.tsx            # Layout admin (sidebar, header)
│   │   ├── page.tsx              # Dashboard admin
│   │   ├── pages/                # Gestion pages
│   │   ├── articles/             # Gestion actualités
│   │   ├── medias/               # Bibliothèque médias
│   │   ├── evenements/           # Gestion événements
│   │   ├── equipe/               # Gestion équipe
│   │   ├── menus/                # Gestion menus navigation
│   │   ├── parametres/           # Paramètres site
│   │   └── securite/             # Audit sécurité, mises à jour
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/                 # NextAuth endpoints
│   │   ├── pages/                # CRUD pages
│   │   ├── articles/             # CRUD articles
│   │   ├── medias/               # Upload/gestion médias
│   │   ├── evenements/           # CRUD événements
│   │   ├── equipe/               # CRUD membres équipe
│   │   ├── contact/              # Formulaire contact
│   │   ├── inscription/          # Formulaire inscription
│   │   └── newsletter/           # Gestion newsletter
│   │
│   └── globals.css               # Styles globaux
│
├── components/                   # Composants réutilisables
│   ├── ui/                       # Composants Shadcn/ui
│   ├── public/                   # Composants site public
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── CourseCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── ContactForm.tsx
│   └── admin/                    # Composants admin
│       ├── Sidebar.tsx
│       ├── Editor/               # Éditeur WYSIWYG (TipTap)
│       ├── MediaLibrary/
│       ├── Dashboard/
│       └── forms/
│
├── lib/                          # Utilitaires et configuration
│   ├── db.ts                     # Client Prisma
│   ├── auth.ts                   # Configuration NextAuth
│   ├── utils.ts                  # Fonctions utilitaires
│   ├── validations/              # Schémas Zod
│   └── email.ts                  # Configuration emails (Resend/Nodemailer)
│
├── prisma/                       # Base de données
│   ├── schema.prisma             # Schéma BDD
│   ├── migrations/               # Migrations
│   └── seed.ts                   # Données initiales
│
├── public/                       # Fichiers statiques
│   ├── images/
│   ├── uploads/                  # Médias uploadés
│   └── fonts/
│
├── styles/                       # Styles additionnels
│
├── tests/                        # Tests
│   ├── unit/                     # Tests unitaires (Jest)
│   ├── integration/              # Tests intégration
│   └── e2e/                      # Tests E2E (Playwright)
│
├── .env.local                    # Variables d'environnement (dev)
├── .env.production               # Variables d'environnement (prod)
├── next.config.js                # Configuration Next.js
├── tailwind.config.ts            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
└── package.json                  # Dépendances npm
```

**Structure Decision**:

L'architecture choisie est une **application web monolithique Next.js** avec séparation claire entre:
1. **Frontend Public** (`app/(public)/*`): Site vitrine accessible à tous
2. **Interface Admin** (`app/admin/*`): Zone protégée pour gestion contenu (authentification requise)
3. **Backend API** (`app/api/*`): API Routes Next.js pour toutes les opérations CRUD

Cette structure permet:
- **Simplicité de déploiement**: Une seule application à déployer sur OVH
- **Performance optimale**: SSG/SSR Next.js pour le site public, routes API optimisées
- **Maintenabilité**: Séparation claire des responsabilités, code TypeScript strict
- **Évolutivité**: Ajout facile de nouvelles fonctionnalités (pages, sections admin)

Les dossiers suivent les conventions Next.js 14 App Router avec:
- Route groups `(public)` pour le site vitrine (permet layout spécifique)
- Routes protégées dans `/admin` (middleware auth)
- API Routes dans `/api` (backend)
- Composants réutilisables dans `/components` (organisés par domaine)
- Configuration centralisée dans `/lib`

## Complexity Tracking

> **Cette section est vide car aucune violation de la constitution n'a été identifiée.**

Le projet respecte tous les principes de la constitution:
- Stack technique conforme (Next.js, TypeScript, PostgreSQL, etc.)
- Pas de complexité excessive introduite
- Approche simple et maintenable privilégiée
- Interface admin custom justifiée par les besoins spécifiques (vs WordPress trop générique)

## Phase 0: Research & Analysis

### Objectives

Phase de recherche technique préalable pour valider les choix technologiques et préparer l'environnement de développement.

### Key Research Areas

1. **Hébergement OVH**
   - Évaluer les offres OVH compatibles Node.js (VPS vs hébergement mutualisé)
   - Valider la configuration PostgreSQL sur OVH
   - Tester le déploiement Next.js sur infrastructure OVH
   - Vérifier la disponibilité SSL Let's Encrypt
   - Confirmer le budget (objectif: 60-120€/an)

2. **Optimisation Images & Médias**
   - Valider la configuration Next/Image avec Sharp
   - Tester la génération automatique WebP/AVIF
   - Évaluer les solutions de stockage médias (local vs Uploadthing)
   - Définir la stratégie de compression et optimisation

3. **Interface Admin WYSIWYG**
   - POC éditeur TipTap avec système de blocs custom
   - Évaluer l'intégration TipTap vs Slate.js
   - Tester les fonctionnalités clés (upload images, galeries, tableaux)
   - Valider l'UX pour utilisateurs non techniques

4. **Email & Formulaires**
   - Comparer Resend vs Nodemailer (coûts, facilité, fiabilité)
   - Tester l'envoi d'emails transactionnels (formulaire contact, confirmations)
   - Valider la configuration SMTP avec OVH
   - Tester reCAPTCHA v3 ou honeypot pour anti-spam

5. **SEO & Analytics**
   - Valider l'intégration Google Analytics 4
   - Tester la génération automatique de sitemap (next-sitemap)
   - Vérifier le support Schema.org (SportsClub, LocalBusiness)
   - Évaluer les besoins en meta tags (next-seo)

6. **Sécurité & RGPD**
   - Valider l'architecture de sécurité (NextAuth.js + rate limiting)
   - Préparer le schéma de gestion des consentements RGPD
   - Définir la stratégie de sauvegarde (BDD + médias)
   - Tester Dependabot pour surveillance vulnérabilités

### Deliverables

- **research.md**: Document complet avec résultats des POCs et recommandations
- **Choix hébergement validé**: Configuration OVH précise avec prix
- **POCs validés**:
  - Éditeur TipTap fonctionnel
  - Upload et optimisation d'images
  - Envoi d'emails
- **Schéma de sécurité défini**: Architecture authentification, protection API, RGPD

## Phase 1: Design & Architecture

### Objectives

Concevoir l'architecture détaillée de l'application, le modèle de données, et les contrats d'interface.

### Key Design Areas

#### 1. Data Model Design

**Schéma de base de données (Prisma)**:

Entités principales à modéliser:
- **User**: Utilisateurs admin (authentification NextAuth)
  - Rôles: Admin, Éditeur, Auteur
- **Page**: Pages statiques du site (Accueil, Le Club, Notre Équipe, etc.)
  - Contenu JSON (blocs éditeur)
  - Métadonnées SEO
- **Article**: Actualités/blog
  - Catégories, tags
  - Image à la une
  - Contenu JSON (blocs)
- **Event**: Événements/Tournois
  - Dates, lieu, description
  - Galerie photos
- **TeamMember**: Membres de l'équipe (professeurs, bureau)
  - Photo, bio, fonction
- **Media**: Bibliothèque médias
  - Fichiers uploadés (images, PDF)
  - Métadonnées (alt text, titre, description)
- **Menu**: Menus de navigation
  - Structure hiérarchique
- **FormSubmission**: Soumissions formulaires (contact, inscription)
  - Données RGPD compliant
- **Settings**: Paramètres site (coordonnées, réseaux sociaux, etc.)

**Relations**:
- User → Article (auteur)
- Article → Media (image à la une)
- Event → Media (galerie)
- Page → Media (contenu)
- Menu → Page (liens)

**Document à produire**: `data-model.md` avec schémas Prisma complets et diagramme ERD

#### 2. API Contracts

**Endpoints API à définir**:

**Authentification**:
- `POST /api/auth/signin`: Connexion admin
- `POST /api/auth/signout`: Déconnexion
- `GET /api/auth/session`: Session courante

**Pages**:
- `GET /api/pages`: Liste pages (public + admin)
- `GET /api/pages/[slug]`: Détail page
- `POST /api/pages`: Créer page (admin)
- `PUT /api/pages/[id]`: Modifier page (admin)
- `DELETE /api/pages/[id]`: Supprimer page (admin)

**Articles**:
- `GET /api/articles`: Liste articles (pagination, filtres)
- `GET /api/articles/[slug]`: Détail article
- `POST /api/articles`: Créer article (admin)
- `PUT /api/articles/[id]`: Modifier article (admin)
- `DELETE /api/articles/[id]`: Supprimer article (admin)

**Médias**:
- `GET /api/medias`: Bibliothèque médias (admin)
- `POST /api/medias`: Upload média (admin)
- `DELETE /api/medias/[id]`: Supprimer média (admin)

**Événements**:
- `GET /api/evenements`: Liste événements
- `POST /api/evenements`: Créer événement (admin)
- `PUT /api/evenements/[id]`: Modifier événement (admin)
- `DELETE /api/evenements/[id]`: Supprimer événement (admin)

**Équipe**:
- `GET /api/equipe`: Liste membres équipe
- `POST /api/equipe`: Ajouter membre (admin)
- `PUT /api/equipe/[id]`: Modifier membre (admin)
- `DELETE /api/equipe/[id]`: Supprimer membre (admin)

**Formulaires**:
- `POST /api/contact`: Soumettre formulaire contact
- `POST /api/inscription`: Soumettre formulaire inscription
- `GET /api/submissions`: Liste soumissions (admin)

**Menus**:
- `GET /api/menus`: Récupérer menus
- `PUT /api/menus`: Mettre à jour menus (admin)

**Paramètres**:
- `GET /api/settings`: Récupérer paramètres
- `PUT /api/settings`: Mettre à jour paramètres (admin)

**Validation**: Tous les endpoints utilisent Zod pour validation des entrées

**Document à produire**: `contracts/api-routes.md` avec spécifications détaillées (request/response schemas, codes erreur)

#### 3. Component Architecture

**Hiérarchie des composants**:

**Site Public**:
- `Layout` (wrapper global)
  - `Header` (navigation, logo, menu)
  - `Main` (contenu page)
  - `Footer` (coordonnées, liens, réseaux sociaux)

**Composants pages**:
- `Hero` (section hero page accueil)
- `CourseCard` (carte cours)
- `TestimonialCard` (témoignage)
- `ArticleCard` (carte actualité)
- `EventCard` (carte événement)
- `TeamMemberCard` (carte membre équipe)
- `ContactForm` (formulaire contact)
- `InscriptionForm` (formulaire inscription complet)
- `PhotoGallery` (galerie photos avec lightbox)
- `Calendar` (calendrier événements)

**Interface Admin**:
- `AdminLayout`
  - `AdminSidebar` (navigation admin)
  - `AdminHeader` (user menu, notifications)
  - `AdminMain` (contenu)

**Composants admin**:
- `Dashboard` (tableau de bord avec stats)
- `Editor` (éditeur WYSIWYG TipTap)
  - `EditorToolbar`
  - `BlockSelector`
  - `BlockRenderers` (paragraphe, titre, image, galerie, tableau, etc.)
- `MediaLibrary` (bibliothèque médias)
  - `MediaGrid`
  - `MediaUploader` (drag & drop)
  - `MediaEditor` (crop, resize)
- `PageManager` (gestion pages)
- `ArticleManager` (gestion articles)
- `EventManager` (gestion événements)
- `TeamManager` (gestion équipe)
- `MenuEditor` (éditeur menus drag & drop)
- `SettingsPanel` (paramètres)
- `SecurityDashboard` (audit sécurité, mises à jour)

**Composants UI partagés** (Shadcn/ui):
- Button, Input, Textarea, Select, Checkbox, Radio
- Dialog, Sheet, Popover, Dropdown
- Table, Card, Badge, Avatar
- Alert, Toast (notifications)
- Tabs, Accordion
- Calendar, DatePicker

**Document à produire**: `contracts/components.md` avec spécifications de props, états, comportements

#### 4. Admin Interface Design

**Structure de l'interface admin**:

```
/admin
├── Dashboard (statistiques, actions rapides)
├── Pages
│   ├── Toutes les pages (liste)
│   └── Ajouter/Modifier (éditeur)
├── Articles
│   ├── Tous les articles
│   ├── Ajouter/Modifier
│   ├── Catégories
│   └── Étiquettes
├── Médias
│   ├── Bibliothèque (grille)
│   └── Ajouter (upload)
├── Événements
│   ├── Tous les événements (calendrier + liste)
│   └── Ajouter/Modifier
├── Équipe
│   ├── Tous les membres
│   └── Ajouter/Modifier
├── Apparence
│   ├── Menus (éditeur drag & drop)
│   └── Paramètres visuels
├── Utilisateurs
│   ├── Tous les utilisateurs
│   ├── Ajouter
│   └── Rôles
├── Paramètres
│   ├── Général (nom site, coordonnées, etc.)
│   ├── SEO
│   ├── RGPD
│   └── Emails
└── Sécurité
    ├── Audit dépendances
    ├── Mises à jour
    └── Logs
```

**Workflows clés**:
1. **Créer un article**:
   - Titre → Contenu (éditeur blocs) → Image à la une → Catégorie/Tags → Métadonnées SEO → Publier/Brouillon

2. **Gérer médias**:
   - Upload (drag & drop) → Métadonnées (alt text, titre) → Optimisation automatique → Bibliothèque

3. **Modifier menus**:
   - Sélectionner menu (principal, footer) → Ajouter items (pages, catégories, liens) → Drag & drop réorganisation → Sauvegarder

**Document à produire**: `contracts/admin-interfaces.md` avec wireframes et workflows détaillés

### Deliverables

- ✅ **data-model.md**: Schéma complet base de données avec diagramme ERD
- ✅ **contracts/api-routes.md**: Spécifications API détaillées
- ✅ **contracts/components.md**: Architecture composants avec props et comportements
- ✅ **contracts/admin-interfaces.md**: Wireframes et workflows interface admin
- ✅ **quickstart.md**: Guide développeur pour setup local et contribution

## Phase 2: Implementation Planning

### Objectives

Décomposer l'implémentation en tâches atomiques, ordonnées par dépendances et priorités.

### Task Breakdown Strategy

**Organisation par modules**:
1. **Setup & Infrastructure** (P0)
   - Initialisation Next.js + TypeScript
   - Configuration Tailwind + Shadcn/ui
   - Setup Prisma + PostgreSQL
   - Configuration NextAuth.js
   - Setup tests (Jest + Playwright)

2. **Backend Core** (P0)
   - Schéma Prisma
   - Migrations initiales
   - API Routes CRUD (Pages, Articles, Médias, Événements, Équipe)
   - Middleware authentification
   - Validation Zod
   - Rate limiting

3. **Frontend Public** (P0)
   - Layout global (Header, Footer)
   - Pages principales:
     - Accueil
     - Le Club
     - Notre Équipe
     - Cours (Enfants, Adultes, Stages)
     - Adhésion & Tarifs
     - Contact
   - Composants réutilisables (Cards, Forms)
   - Formulaire contact
   - Formulaire inscription complet

4. **Interface Admin** (P0)
   - Layout admin (Sidebar, Header)
   - Dashboard
   - Éditeur WYSIWYG (TipTap avec blocs)
   - Bibliothèque médias (upload, gestion)
   - Gestion pages
   - Gestion articles
   - Gestion événements
   - Gestion équipe
   - Éditeur menus
   - Paramètres

5. **Fonctionnalités Intégrées** (P0)
   - SEO (next-seo, sitemap)
   - Analytics (Google Analytics 4)
   - Emails (Resend/Nodemailer)
   - RGPD (consentement cookies)
   - Protection spam (reCAPTCHA/honeypot)

6. **Sécurité & Maintenance** (P0)
   - Headers sécurité
   - CSRF/XSS protection
   - Surveillance dépendances (Dependabot)
   - Module sécurité dans admin
   - Backups automatiques

7. **Contenus Initiaux** (P0)
   - Textes pages (du PRD)
   - Photos (30-50 photos)
   - Témoignages (4-6)
   - Événements initiaux
   - Mentions légales & Politique confidentialité

8. **Phase 2 - Extensions** (P1)
   - Section Actualités/Blog structurée
   - Calendrier événements dynamique
   - Intégration réseaux sociaux
   - Newsletter

9. **Phase 3 - Contenus Vidéo** (P2)
   - Section "Conseils du Pro"
   - Intégration YouTube
   - SEO avancé
   - Analytics avancés (heatmaps, A/B testing)

### Deliverable

- ✅ **tasks.md**: Liste détaillée et ordonnée de toutes les tâches d'implémentation avec:
  - Identifiant unique
  - Description claire
  - Priorité (P0/P1/P2)
  - Dépendances
  - Estimation effort (S/M/L)
  - Critères d'acceptation

Le document tasks.md sera généré par la commande `/speckit.tasks` et servira de référence pour l'implémentation.

## Risk Analysis

### Technical Risks

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Complexité déploiement Next.js sur OVH | Moyenne | Élevé | Phase 0: POC déploiement, validation configuration serveur. Documentation détaillée. Plan B: Vercel (coût supérieur). |
| Performance insuffisante (> 3s chargement) | Faible | Moyen | Optimisation Next/Image, SSG pour pages statiques, monitoring Lighthouse dès début, lazy loading composants. |
| Complexité interface admin pour bénévoles | Moyenne | Élevé | Tests utilisateurs dès MVP, formation prévue, documentation vidéo, UX inspirée WordPress (familier). |
| Vulnérabilités sécurité | Moyenne | Élevé | Dependabot actif, audit npm régulier, code reviews, tests sécurité (OWASP), rate limiting, validation stricte Zod. |
| Surcharge base de données PostgreSQL OVH | Faible | Moyen | Indexation optimale Prisma, requêtes optimisées, cache (React Query), monitoring performances BDD. |

### Content & Process Risks

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Retard collecte contenus (textes, photos) | Élevée | Moyen | Phase 0 dédiée, checklist détaillée, responsable contenu désigné, contenu placeholder si nécessaire. |
| Manque de compétences bénévoles pour gestion | Moyenne | Élevé | Formation intensive prévue, documentation complète, vidéos tutoriels, support initial rapproché. |
| Abandonnement mise à jour site après lancement | Moyenne | Élevé | Interface ultra-intuitive, processus légers (1 article = 5 min), calendrier éditorial, responsabilisation équipe. |
| Non-conformité RGPD | Faible | Élevé | Audit RGPD en Phase 1, module consentement intégré, politique confidentialité validée, minimisation collecte données. |

### Budget & Timeline Risks

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Dépassement budget hébergement | Faible | Faible | Hébergement OVH validé 60-120€/an, marge prévue, alternatives identifiées (o2switch, Hostinger). |
| Retard développement (> 8 semaines MVP) | Moyenne | Moyen | Priorisation stricte P0, scope MVP réduit si nécessaire, timeline réaliste (2-3 mois), développement avec Claude Code (accélération). |
| Coût imprévu (emails, services tiers) | Faible | Faible | Services gratuits privilégiés (Nodemailer, reCAPTCHA), budget tampons prévu, alternatives open-source. |

### User Adoption Risks

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Faible trafic initial (< 100 visiteurs/mois) | Moyenne | Moyen | Plan communication Phase 2, SEO local optimisé, Google My Business, partenariats mairie/école, flyers avec URL. |
| Taux conversion faible (formulaires) | Moyenne | Moyen | UX formulaires optimisée, CTAs clairs, A/B testing, suivi Analytics, ajustements itératifs. |
| Site pas mobile-friendly | Faible | Élevé | Mobile-first obligatoire dès design, tests responsive continus, validation devices variés. |

## Success Metrics

### Phase 0 (Semaines 1-2)

| Métrique | Objectif | Validation |
|----------|----------|------------|
| POC déploiement OVH | Succès | Application Next.js déployée et accessible |
| POC éditeur TipTap | Fonctionnel | Création contenu avec blocs (texte, image, galerie) |
| Contenus collectés | 100% | Textes, 30+ photos, 4+ témoignages |
| Budget validé | ≤ 120€/an | Hébergement + domaine confirmés |

### Phase 1 - MVP (Semaines 3-8)

| Métrique | Objectif | Validation |
|----------|----------|------------|
| Pages P0 complètes | 6/6 | Accueil, Le Club, Équipe, Cours, Adhésion, Contact |
| Interface admin fonctionnelle | 100% | Gestion pages, articles, médias, événements, équipe, menus |
| Score Lighthouse | > 90/100 | Performance, Accessibilité, SEO, Best Practices |
| Temps chargement | < 3s | Test Google PageSpeed Insights |
| Tests responsive | Succès | Mobile, Tablet, Desktop validés |
| Formulaires fonctionnels | 100% | Réception emails contact et inscription |

### Phase 2 - Lancement (Semaines 9-12)

| Métrique | Objectif | Validation |
|----------|----------|------------|
| Visiteurs uniques | > 100/mois | Google Analytics |
| Soumissions formulaires | > 5 | Formulaires contact ou inscription |
| Google indexation | 100% pages | Google Search Console |
| Score SEO local | Top 3 | "tennis club clairefontaine" sur Google |

### Phase 3 - Consolidation (Mois 4-6)

| Métrique | Objectif | Validation |
|----------|----------|------------|
| Visiteurs uniques | > 500/mois | Google Analytics |
| Articles publiés | > 15 | Section actualités active |
| Événements créés | > 10 | Calendrier dynamique |
| Présence réseaux sociaux | Active | Facebook + Instagram, 3-5 posts/semaine |
| Adhésions attribuables | > 5 | Tracking formulaires |

### Phase 4 - Année 1 (Mois 7-12)

| Métrique | Objectif | Validation |
|----------|----------|------------|
| Visiteurs uniques | > 1000/mois | Google Analytics |
| Augmentation adhésions | +15-20% | Comparaison année N-1 |
| Vidéos publiées | > 10 | Chaîne YouTube active |
| Taux rebond | < 50% | Google Analytics |
| Durée session moyenne | > 2 min | Google Analytics |
| Pages/session | > 2.5 | Google Analytics |
| Satisfaction bénévoles | > 8/10 | Sondage utilisation interface admin |

### KPIs Techniques (Continus)

| Métrique | Objectif | Outil |
|----------|----------|-------|
| Uptime | > 99.5% | Monitoring OVH |
| Temps réponse API | < 200ms | Logs applicatifs |
| Vulnérabilités critiques | 0 | Dependabot, npm audit |
| Couverture tests | > 70% | Jest |
| Erreurs JS | < 0.1% sessions | Google Analytics / Sentry |

## Next Steps

### Immediate Actions

1. **Valider ce plan** avec le bureau du TCC et l'équipe projet
2. **Créer les documents Phase 0** (research.md) via `/speckit.plan` en mode recherche
3. **Lancer les POCs identifiés**:
   - Déploiement Next.js sur OVH
   - Éditeur TipTap avec système de blocs
   - Upload et optimisation images
   - Envoi d'emails transactionnels
4. **Préparer l'environnement**:
   - Compte OVH
   - Domaine tcclairefontaine.fr
   - Repository GitHub
5. **Constituer l'équipe**:
   - Responsable Web (coordinateur)
   - Responsable Contenu (textes)
   - Responsable Photos (shooting, sélection)

### Phase Sequence

```
Phase 0: Research (Semaines 1-2)
  ↓
Phase 1: Design & Architecture (Semaines 3-4)
  - data-model.md
  - contracts/ (api-routes, components, admin-interfaces)
  - quickstart.md
  ↓
Phase 2: Implementation Planning (Semaine 5)
  - tasks.md (via /speckit.tasks)
  ↓
Implementation (Semaines 5-8)
  - Développement selon tasks.md
  - Tests continus
  - Revue code
  ↓
Launch (Semaines 9-12)
  - Mise en production
  - Communication
  - Monitoring
```

### Command to Generate Tasks

Une fois les phases 0 et 1 complétées, exécuter:

```bash
/speckit.tasks
```

Cette commande générera automatiquement le fichier `tasks.md` avec la liste détaillée et ordonnée de toutes les tâches d'implémentation basées sur ce plan.

---

**Document Status**: ✅ Ready for Review
**Next Command**: `/speckit.plan` (mode research) pour générer research.md
**Owner**: Équipe Projet TCC
**Last Updated**: 2025-11-19
