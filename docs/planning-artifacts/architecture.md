---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
status: complete
completedAt: '2026-01-07'
inputDocuments:
  - 'docs/planning-artifacts/prd.md'
  - 'docs/planning-artifacts/ux-design-specification.md'
  - 'docs/architecture.md'
  - 'docs/component-inventory.md'
  - 'docs/development-guide.md'
workflowType: 'architecture'
project_name: 'infojv'
user_name: 'romain'
date: '2026-01-07'
---

# Architecture Decision Document — infojv

_Ce document se construit collaborativement à travers une découverte étape par étape. Les sections sont ajoutées au fur et à mesure que nous progressons dans les décisions architecturales._

---

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
Le PRD définit 45 exigences fonctionnelles organisées en 8 catégories :
- Navigation & Structure (FR1-FR4) : Menu principal, accès Contact global
- Page Accueil (FR5-FR9) : Chiffres clés, services, références, localisation
- Page Expertise (FR10-FR13) : 4 services, grille tarifaire, hero rotatif
- Page Mobile (FR14-FR17) : Bénéfices app, Flutter, référence Oroneo
- Page Projets (FR18-FR22) : Portfolio avec visuels et détails
- Page IA (FR23-FR26) : Cas d'usage PME, messaging accessible
- Contact (FR27-FR32) : Modale, mailto, formulaire SMTP, confirmation
- SEO (FR33-FR37) : Meta tags, Open Graph, sitemap, robots.txt
- Responsive (FR38-FR42) : Mobile/tablette/desktop, ratio 16/9

Implications architecturales : Architecture pages Next.js App Router, composants réutilisables, API Route pour formulaire.

**Non-Functional Requirements:**
27 NFRs réparties en 7 catégories :
- Performance (NFR1-6) : Lighthouse > 90, LCP < 2.5s, TTI < 3s
- Sécurité (NFR7-10) : Honeypot, HTTPS, headers, pas de stockage données
- Accessibilité (NFR11-15) : WCAG 2.1 Level A, contraste 4.5:1
- SEO (NFR16-18) : Lighthouse SEO > 90, Mobile-friendly, Core Web Vitals
- Compatibilité (NFR19-25) : Chrome/Firefox/Safari/Edge 90+, iOS/Android
- Fiabilité (NFR26-27) : Uptime 99%, fallback mailto

Implications architecturales : SSG pour performance, optimisation images, preloading fonts, code splitting automatique.

**Scale & Complexity:**
- Primary domain: Web statique (SSG) avec API Route formulaire
- Complexity level: Basse
- Estimated architectural components: ~15 (5 existants + 7 custom + 3 pages layouts)

### Technical Constraints & Dependencies

**Stack contrainte (brownfield) :**
- Next.js 14.2.x (App Router) — NE PAS upgrader vers v15
- Tailwind CSS 3.4.x — NE PAS upgrader vers v4
- Framer Motion — Animations
- Webpack — NE PAS utiliser Turbopack
- TypeScript strict
- Poppins (Google Fonts) — Font unique

**Dépendances externes :**
- nodemailer + SMTP (ou EmailJS fallback) pour formulaire
- Material Symbols (CDN) pour icônes
- Vercel pour hébergement (uptime 99%)

**Assets contraints :**
- Images existantes dans /public/assets/
- Shapes 3D noires en PNG
- Portrait Julien, mockup mobile, logos banques

### Cross-Cutting Concerns Identified

1. **Design System Cohérence** — Extension du Bento Grid existant sur toutes les nouvelles pages
2. **Performance Budget** — SSG, images optimisées, lazy loading shapes 3D
3. **Responsive Strategy** — Desktop-first adaptation, ratio 16/9 > 1440px
4. **Contact Flow** — Modale accessible depuis toutes les pages, friction minimale
5. **SEO Fondamentaux** — Meta tags, sitemap, robots.txt sur toutes les pages
6. **Accessibility** — Focus states, alt texts, navigation clavier consistante

---

## Starter Template Evaluation

### Primary Technology Domain

**Web Application (Static/SSG)** — Site vitrine avec formulaire contact.

Le projet existe déjà (brownfield), les décisions de starter ont été prises lors de l'initialisation.

### Starter Heritage

**Origine probable :** `npx create-next-app@14 --typescript --tailwind --eslint --app`

Le projet hérite d'une configuration Next.js 14 standard avec App Router.

### Current Stack (Established)

**Language & Runtime:**
- TypeScript 5.x avec configuration strict
- Node.js >=18

**Framework:**
- Next.js 14.2.15 (App Router)
- Static Site Generation (SSG) pour toutes les pages

**Styling Solution:**
- Tailwind CSS 3.4.1 (utility-first)
- PostCSS 8 pour processing
- clsx + tailwind-merge pour class merging conditionnel

**Animations:**
- Framer Motion 12.23.26
- Patterns établis : float, rotate, pulse pour shapes 3D

**Build Tooling:**
- Webpack (configuration par défaut Next.js)
- Turbopack explicitement désactivé

**Code Organization:**
- `/src/app/` pour pages (App Router)
- `/src/components/ui/` pour composants réutilisables
- `/src/lib/` pour utilitaires
- `/public/assets/` pour images statiques

**Development Experience:**
- Hot reload via Next.js dev server
- ESLint configuré
- Path alias `@/` pour imports

### Architectural Decisions Inherited

Ces décisions sont **figées** pour ce projet brownfield :

| Décision | Valeur | Raison |
|----------|--------|--------|
| Framework version | Next.js 14.2.x | Pas d'upgrade vers v15 (breaking changes) |
| CSS framework | Tailwind 3.4.x | Pas d'upgrade vers v4 (breaking changes) |
| Bundler | Webpack | Turbopack instable avec la config actuelle |
| Font | Poppins uniquement | Cohérence design system |
| Hébergement | Vercel | Intégration native Next.js |

### Extensions Nécessaires

Pour supporter les FRs, ces ajouts sont nécessaires :

| Besoin | Solution |
|--------|----------|
| Formulaire contact | API Route `/api/contact` + nodemailer |
| SEO | Next.js Metadata API (natif) |
| Sitemap | next-sitemap ou généré manuellement |
| Validation forms | Zod ou validation manuelle |
| Email fallback | EmailJS (client-side) si SMTP échoue |

**Note:** Pas de nouvelle dépendance majeure requise — extensions légères de la stack existante.

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Formulaire contact : nodemailer + Gmail/SMTP
- Validation : manuelle (regex + required)
- Anti-spam : honeypot

**Important Decisions (Shape Architecture):**
- SEO : sitemap statique + Metadata API native
- State management : useState + Context minimal

**Deferred Decisions (Post-MVP):**
- Analytics (Google Analytics, Plausible, etc.)
- Modale retour visiteur (Growth feature)
- Agent conversationnel (Growth feature)

### Data Architecture

**Pas de base de données** — Site 100% statique.

Toutes les données sont :
- Hardcodées dans les composants (textes, tarifs)
- Assets statiques dans `/public/` (images, shapes 3D)

### Authentication & Security

**Pas d'authentification utilisateur.**

Sécurité implémentée :

| Mesure | Implementation |
|--------|----------------|
| HTTPS | Vercel (automatique) |
| Honeypot anti-spam | Champ caché CSS dans formulaire |
| Headers sécurité | Next.js config (X-Frame-Options, CSP basic) |
| Validation inputs | Côté client + serveur |

### API & Communication Patterns

**Une seule API Route : `/api/contact`**

| Aspect | Décision |
|--------|----------|
| Transport email | nodemailer |
| SMTP Provider | Gmail App Password ou SMTP infojv.net |
| Validation | Manuelle (regex email, champs requis) |
| Anti-spam | Honeypot (champ hidden) |
| Fallback | mailto: link en parallèle |
| Rate limiting | Non requis MVP (volume faible) |

**Schéma flux contact :**
```
User → Form Submit → API Route /api/contact
                          ↓
                    Validation (serveur)
                          ↓
                    Honeypot check
                          ↓
                    nodemailer → SMTP Gmail
                          ↓
                    Response JSON → UI feedback
```

### Frontend Architecture

| Aspect | Décision |
|--------|----------|
| State management | useState + Context minimal |
| Context global | ContactModalContext (open/close) |
| Composants | Functional components + TypeScript |
| Routing | Next.js App Router (file-based) |
| Animations | Framer Motion (existant) |
| Styling | Tailwind CSS utility classes |

**Pattern composants :**
- `/src/components/ui/` — Composants design system réutilisables
- `/src/components/contact/` — ContactModal, ReturnVisitorModal
- `/src/components/heroes/` — HeroRotating
- `/src/components/cards/` — ServiceCard, ProjectCard

### Infrastructure & Deployment

| Aspect | Décision |
|--------|----------|
| Hébergement | Vercel |
| CI/CD | Vercel auto-deploy (push main) |
| Environnements | Production uniquement (preview auto) |
| Variables env | `.env.local` (GMAIL_USER, GMAIL_APP_PASSWORD) |
| Monitoring | Vercel Analytics (optionnel) |
| Logs | Vercel Logs (natif) |

### Decision Impact Analysis

**Implementation Sequence:**
1. ContactModalContext (prérequis pour CTA global)
2. API Route /api/contact + nodemailer
3. ContactModal component
4. Pages avec Metadata API
5. sitemap.xml statique

**Cross-Component Dependencies:**
- ContactModal dépend de ContactModalContext
- Tous les CTAs contact dépendent de ContactModalContext
- API Route indépendante (peut être testée isolément)

---

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Points de conflit adressés :** 6 catégories de patterns définis pour garantir la cohérence entre agents AI.

### Naming Patterns

**Composants React :**

| Élément | Convention | Exemple |
|---------|------------|---------|
| Nom composant | PascalCase | `ContactModal` |
| Fichier composant | PascalCase.tsx | `ContactModal.tsx` |
| Props interface | PascalCase + Props | `ContactModalProps` |

**Fonctions & Variables :**

| Élément | Convention | Exemple |
|---------|------------|---------|
| Fonctions | camelCase | `handleSubmit`, `validateEmail` |
| Variables | camelCase | `isOpen`, `formData` |
| Constantes | SCREAMING_SNAKE_CASE | `API_ENDPOINT` |
| Hooks custom | use + PascalCase | `useContactModal` |

**Fichiers & Dossiers :**

| Élément | Convention | Exemple |
|---------|------------|---------|
| Pages Next.js | kebab-case/page.tsx | `expertise/page.tsx` |
| Composants | PascalCase.tsx | `BentoCard.tsx` |
| Utilitaires | camelCase.ts | `utils.ts` |
| Types/Interfaces | PascalCase.ts | `types.ts` |

### Structure Patterns

**Organisation projet (établie) :**
```
src/
├── app/                      # Pages (App Router)
│   ├── api/contact/route.ts  # API Routes
│   ├── [page]/page.tsx       # Pages
│   └── layout.tsx            # Layout global
├── components/
│   ├── ui/                   # Design system
│   ├── contact/              # Feature: contact
│   ├── heroes/               # Feature: heroes
│   └── cards/                # Feature: cards
├── contexts/                 # React Contexts
│   └── ContactModalContext.tsx
├── lib/                      # Utilitaires
│   └── utils.ts
└── types/                    # Types partagés (si besoin)
```

**Règle co-location :** Les composants spécifiques à une feature sont groupés par feature, pas par type.

### Format Patterns

**API Response Format :**
```typescript
// Succès
{ success: true, message: "Email envoyé avec succès" }

// Erreur
{ success: false, error: "Veuillez renseigner un email valide" }
```

**HTTP Status Codes :**

| Code | Usage |
|------|-------|
| 200 | Succès |
| 400 | Erreur validation (champs invalides) |
| 500 | Erreur serveur (SMTP fail) |

**Error Messages :** Texte simple en français, user-friendly.

### State Management Patterns

**Loading States (Status Enum) :**
```typescript
type FormStatus = 'idle' | 'loading' | 'success' | 'error';
const [status, setStatus] = useState<FormStatus>('idle');
```

**Context Pattern :**
```typescript
// contexts/ContactModalContext.tsx
interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
```

### Process Patterns

**Validation Flow :**
1. Validation côté client (avant submit)
2. Validation côté serveur (API Route)
3. Affichage erreur inline sous le champ

**Form Submit Flow :**
```
idle → (submit) → loading → success | error → (reset) → idle
```

**Error Recovery :**
- Erreur validation : rester sur le form, afficher message
- Erreur serveur : afficher message + proposer mailto fallback

### Enforcement Guidelines

**Tous les agents AI DOIVENT :**
1. Utiliser PascalCase pour les composants et leurs fichiers
2. Utiliser le status enum pour les états de chargement
3. Retourner `{ success, message/error }` depuis l'API Route
4. Placer les nouveaux composants dans le bon dossier feature
5. Typer les props avec l'interface `ComponentNameProps`

**Anti-Patterns à éviter :**
- ❌ `userCard.tsx` → ✅ `UserCard.tsx`
- ❌ `interface IUserCard` → ✅ `interface UserCardProps`
- ❌ `const [loading, setLoading]` → ✅ `const [status, setStatus]`
- ❌ `return { data: ..., error: ... }` → ✅ `return { success: true, message: ... }`

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
infojv/
├── README.md
├── package.json
├── package-lock.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .env.local                    # Variables SMTP
├── .env.example                  # Template variables
├── .gitignore
│
├── public/
│   ├── favicon.ico
│   ├── sitemap.xml               # SEO (FR36)
│   ├── robots.txt                # SEO (FR37)
│   └── assets/
│       ├── Julien-Villard.png
│       ├── mobile.png
│       ├── preview.png
│       ├── shape_3D/
│       │   ├── Cone.png
│       │   ├── Cylinder-Black-Matte.png
│       │   ├── Pill-Black-Matte.png
│       │   ├── RoundCube-Black-Matte.png
│       │   └── SuperToroid-Black-Matte.png
│       └── logos-banque/
│           ├── bnp.svg
│           ├── bp.svg
│           └── epargne.png
│
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx              # Homepage (FR4-FR9)
    │   ├── expertise/
    │   │   └── page.tsx          # Refonte (FR10-FR13)
    │   ├── mobile/
    │   │   └── page.tsx          # (FR14-FR17)
    │   ├── projets/
    │   │   └── page.tsx          # (FR18-FR22)
    │   ├── ia/
    │   │   └── page.tsx          # (FR23-FR26)
    │   └── api/
    │       └── contact/
    │           └── route.ts      # (FR29-FR32)
    │
    ├── components/
    │   ├── ui/                   # Design System
    │   │   ├── BentoGrid.tsx     # Existant
    │   │   ├── BentoCard.tsx     # Existant
    │   │   ├── FloatingShape.tsx # Existant
    │   │   ├── Button.tsx        # Existant
    │   │   ├── Icon.tsx          # Existant
    │   │   ├── Input.tsx         # Form field
    │   │   ├── Textarea.tsx      # Form field
    │   │   └── Badge.tsx         # Project badges
    │   │
    │   ├── contact/              # Feature: Contact
    │   │   └── ContactModal.tsx  # (FR27-FR30)
    │   │
    │   ├── heroes/               # Feature: Heroes
    │   │   └── HeroRotating.tsx  # (FR12)
    │   │
    │   └── cards/                # Feature: Cards
    │       ├── ServiceCard.tsx   # Expertise cards
    │       └── ProjectCard.tsx   # Portfolio cards
    │
    ├── contexts/
    │   └── ContactModalContext.tsx
    │
    └── lib/
        └── utils.ts              # Existant
```

### Architectural Boundaries

**API Boundary:**
- Unique endpoint : `/api/contact`
- Responsabilité : validation + envoi email
- Pas d'autres API Routes prévues MVP

**Component Boundaries:**
```
Layout (layout.tsx)
    └── ContactModalContext (global)
            ├── Header (navigation + CTA)
            ├── Page Content (variable)
            └── ContactModal (modale overlay)
```

**Data Flow:**
```
User Input → ContactModal → API Route → nodemailer → SMTP → Email
                ↓
            UI Feedback (success/error)
```

### Requirements to Structure Mapping

| FR Category | Files/Directories |
|-------------|-------------------|
| Navigation (FR1-FR4) | `layout.tsx`, Header component |
| Homepage (FR5-FR9) | `app/page.tsx` |
| Expertise (FR10-FR13) | `app/expertise/page.tsx`, `HeroRotating.tsx` |
| Mobile (FR14-FR17) | `app/mobile/page.tsx` |
| Projets (FR18-FR22) | `app/projets/page.tsx`, `ProjectCard.tsx` |
| IA (FR23-FR26) | `app/ia/page.tsx` |
| Contact (FR27-FR32) | `ContactModal.tsx`, `api/contact/route.ts` |
| SEO (FR33-FR37) | `layout.tsx` (metadata), `sitemap.xml`, `robots.txt` |
| Responsive (FR38-FR42) | Tailwind classes dans tous les composants |

### Files to Create (MVP)

| Fichier | Raison |
|---------|--------|
| `src/app/mobile/page.tsx` | Nouvelle page FR14-FR17 |
| `src/app/projets/page.tsx` | Nouvelle page FR18-FR22 |
| `src/app/ia/page.tsx` | Nouvelle page FR23-FR26 |
| `src/app/api/contact/route.ts` | API formulaire FR29-FR32 |
| `src/components/contact/ContactModal.tsx` | Modale contact FR27-FR30 |
| `src/components/heroes/HeroRotating.tsx` | Hero animé FR12 |
| `src/components/cards/ServiceCard.tsx` | Cards services |
| `src/components/cards/ProjectCard.tsx` | Cards projets |
| `src/components/ui/Input.tsx` | Champ formulaire |
| `src/components/ui/Textarea.tsx` | Champ message |
| `src/components/ui/Badge.tsx` | Badges projets |
| `src/contexts/ContactModalContext.tsx` | État modale global |
| `public/sitemap.xml` | SEO FR36 |
| `public/robots.txt` | SEO FR37 |
| `.env.local` | Variables SMTP |
| `.env.example` | Template variables |

---

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
Toutes les technologies choisies sont compatibles et testées ensemble :
- Next.js 14.2 + Tailwind 3.4 + Framer Motion = stack production-ready
- nodemailer + API Route = pattern standard Next.js
- Vercel + SSG = déploiement optimisé

**Pattern Consistency:**
Les patterns définis sont alignés avec le code brownfield existant et les conventions React/TypeScript standard.

**Structure Alignment:**
La structure projet étend logiquement l'existant sans refactoring majeur.

### Requirements Coverage Validation ✅

**Functional Requirements Coverage:**
45/45 FRs architecturalement supportés (100%)

**Non-Functional Requirements Coverage:**
27/27 NFRs adressés par les choix architecturaux (100%)

### Implementation Readiness Validation ✅

**Decision Completeness:**
- Toutes les décisions critiques documentées avec versions
- Patterns d'implémentation complets avec exemples
- Anti-patterns identifiés

**Structure Completeness:**
- 16 fichiers à créer clairement listés
- Structure dossiers complète
- Mapping FR → fichiers établi

**Pattern Completeness:**
- Naming conventions exhaustives
- Format API défini
- State management pattern établi

### Gap Analysis Results

**Critical Gaps:** Aucun

**Important Gaps:**
- Header/Navigation : détails visuels à définir lors de l'implémentation (non bloquant)

**Nice-to-Have Gaps:**
- Tests automatisés (post-MVP)
- Documentation API Swagger (non requis)

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed (Low)
- [x] Technical constraints identified (Next.js 14.2, Tailwind 3.4)
- [x] Cross-cutting concerns mapped (6 concerns)

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined (API Route + nodemailer)
- [x] Performance considerations addressed (SSG, CDN)

**✅ Implementation Patterns**
- [x] Naming conventions established (PascalCase, camelCase)
- [x] Structure patterns defined (feature-based)
- [x] Communication patterns specified (Context)
- [x] Process patterns documented (status enum, error handling)

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** HIGH

**Key Strengths:**
- Stack brownfield éprouvée
- Complexité basse, scope clair
- Design system existant réutilisable
- Patterns simples et cohérents

**Areas for Future Enhancement:**
- Tests automatisés (Growth phase)
- Analytics (Growth phase)
- Modale retour visiteur (Growth phase)

### Implementation Handoff

**AI Agent Guidelines:**
- Suivre les décisions architecturales exactement comme documentées
- Utiliser les patterns d'implémentation de manière consistante
- Respecter la structure projet et les boundaries
- Référencer ce document pour toute question architecturale

**First Implementation Priority:**
1. ContactModalContext (prérequis global)
2. Input/Textarea components (prérequis formulaire)
3. ContactModal + API Route (FR critique)
4. Pages /mobile, /projets, /ia
5. Refonte /expertise avec HeroRotating
6. SEO (sitemap, robots.txt, metadata)

---

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2026-01-07
**Document Location:** docs/planning-artifacts/architecture.md

### Final Architecture Deliverables

**Complete Architecture Document**
- Toutes les décisions architecturales documentées avec versions spécifiques
- Patterns d'implémentation garantissant la cohérence des agents AI
- Structure projet complète avec tous les fichiers et dossiers
- Mapping requirements → architecture
- Validation confirmant cohérence et complétude

**Implementation Ready Foundation**
- 5 décisions architecturales majeures
- 6 catégories de patterns d'implémentation
- 16 fichiers à créer
- 45 FRs + 27 NFRs supportés

**AI Agent Implementation Guide**
- Stack technique avec versions vérifiées
- Règles de cohérence prévenant les conflits
- Structure projet avec boundaries claires
- Patterns d'intégration et standards de communication

### Development Sequence

1. Initialiser ContactModalContext (prérequis global)
2. Créer composants Input/Textarea (prérequis formulaire)
3. Implémenter ContactModal + API Route /api/contact
4. Créer pages /mobile, /projets, /ia
5. Refondre /expertise avec HeroRotating
6. Ajouter SEO (sitemap.xml, robots.txt, metadata)
7. Corriger bugs homepage (ratio 16/9, scroll mobile)

### Quality Assurance Checklist

**✅ Architecture Coherence**
- [x] Toutes les décisions fonctionnent ensemble
- [x] Technologies compatibles
- [x] Patterns supportent les décisions
- [x] Structure alignée avec les choix

**✅ Requirements Coverage**
- [x] 45/45 FRs supportés
- [x] 27/27 NFRs adressés
- [x] Concerns transversaux gérés
- [x] Points d'intégration définis

**✅ Implementation Readiness**
- [x] Décisions spécifiques et actionnables
- [x] Patterns prévenant les conflits
- [x] Structure complète et non-ambiguë
- [x] Exemples fournis

---

**Architecture Status:** READY FOR IMPLEMENTATION ✅

**Next Phase:** Créer les Epics et Stories pour l'implémentation

**Document Maintenance:** Mettre à jour ce document si des décisions techniques majeures sont prises pendant l'implémentation.

