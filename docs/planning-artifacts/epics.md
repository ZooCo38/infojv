---
stepsCompleted: [1, 2, 3, 4]
status: complete
validatedAt: '2026-01-07'
inputDocuments:
  - 'docs/planning-artifacts/prd.md'
  - 'docs/planning-artifacts/architecture.md'
  - 'docs/planning-artifacts/ux-design-specification.md'
project_name: 'infojv'
date: '2026-01-07'
---

# infojv - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for infojv, decomposing the requirements from the PRD, UX Design, and Architecture into implementable stories.

## Requirements Inventory

### Functional Requirements

**Navigation & Structure (FR1-FR4)**
- FR1: Visiteur peut naviguer entre les pages via un menu principal
- FR2: Visiteur peut accéder à la page Contact depuis n'importe quelle page
- FR3: Visiteur peut revenir à l'accueil via le logo Info JV
- FR4: Visiteur peut voir la page d'accueil avec un layout Bento Grid

**Page Accueil (FR5-FR9)**
- FR5: Visiteur peut voir les chiffres clés (50+ projets, 20+ ans)
- FR6: Visiteur peut voir les services proposés avec liens vers pages dédiées
- FR7: Visiteur peut voir les références banques (Caisse d'Épargne, Banque Populaire, La Banque Postale)
- FR8: Visiteur peut voir la localisation (Marseille, Peypin, Aix)
- FR9: Visiteur peut voir un CTA Contact clair

**Page Expertise (FR10-FR13)**
- FR10: Visiteur peut voir les 4 services proposés (Dev Web, Mobile, IA, Automatisation)
- FR11: Visiteur peut voir une grille tarifaire avec prix "à partir de..."
- FR12: Visiteur peut voir une accroche hero rotative (3 messages)
- FR13: Visiteur peut naviguer vers les pages services spécifiques

**Page Mobile (FR14-FR17)**
- FR14: Visiteur peut comprendre les bénéfices d'une app mobile
- FR15: Visiteur peut voir la technologie utilisée (Flutter)
- FR16: Visiteur peut voir une référence projet (Oroneo)
- FR17: Visiteur peut accéder à un CTA Contact spécifique mobile

**Page Projets (FR18-FR22)**
- FR18: Visiteur peut voir les projets réalisés avec visuels
- FR19: Visiteur peut voir les détails d'un projet (type, description, résultat)
- FR20: Visiteur peut voir le projet Oroneo (app mobile + IA)
- FR21: Visiteur peut voir le projet BAS (automatisation)
- FR22: Visiteur peut accéder à un CTA Contact après consultation portfolio

**Page IA (FR23-FR26)**
- FR23: Visiteur peut comprendre l'approche IA accessible PME
- FR24: Visiteur peut voir les cas d'usage concrets (compagnon marque, aide admin, aide stratégique, agents)
- FR25: Visiteur peut voir un messaging anti-jargon
- FR26: Visiteur peut accéder à un CTA Contact spécifique IA

**Contact & Lead Generation (FR27-FR32)**
- FR27: Visiteur peut ouvrir une modale de contact depuis n'importe quelle page
- FR28: Visiteur peut envoyer un email via mailto
- FR29: Visiteur peut soumettre un formulaire (nom, email, message)
- FR30: Visiteur peut voir le message "Pas de commercial, c'est moi qui réponds"
- FR31: Système envoie le formulaire à Julien par email (SMTP)
- FR32: Système affiche une confirmation après envoi formulaire

**SEO & Discoverability (FR33-FR37)**
- FR33: Système génère des meta titles uniques par page
- FR34: Système génère des meta descriptions optimisées par page
- FR35: Système génère les balises Open Graph pour partage social
- FR36: Système génère un sitemap.xml automatique
- FR37: Système expose un robots.txt configuré

**Responsive & Display (FR38-FR42)**
- FR38: Visiteur peut consulter le site sur mobile (< 640px)
- FR39: Visiteur peut consulter le site sur tablette (640-1024px)
- FR40: Visiteur peut consulter le site sur desktop (1024-1440px)
- FR41: Page accueil respecte ratio 16/9 sur écrans > 1440px
- FR42: Page accueil est scrollable sur mobile

**Growth Features - Post-MVP (FR43-FR45)**
- FR43: Système détecte un visiteur de retour (localStorage)
- FR44: Système affiche une modale contextuelle après 15s pour visiteur retour
- FR45: Système affiche une modale engagement après 3 min sur le site

### Non-Functional Requirements

**Performance (NFR1-NFR6)**
- NFR1: Lighthouse Performance Score > 90
- NFR2: First Contentful Paint < 1.5s
- NFR3: Largest Contentful Paint < 2.5s
- NFR4: Cumulative Layout Shift < 0.1
- NFR5: Time to Interactive < 3s
- NFR6: Temps chargement initial (3G) < 3s

**Sécurité (NFR7-NFR10)**
- NFR7: Formulaire protégé par honeypot anti-spam
- NFR8: HTTPS obligatoire (certificat SSL)
- NFR9: Headers de sécurité standards (X-Frame-Options, CSP basic)
- NFR10: Pas de stockage de données utilisateur côté serveur

**Accessibilité (NFR11-NFR15)**
- NFR11: WCAG 2.1 Level A
- NFR12: Contraste minimum 4.5:1
- NFR13: Navigation clavier fonctionnelle
- NFR14: Alt texts sur toutes images
- NFR15: Focus visible sur éléments interactifs

**SEO (NFR16-NFR18)**
- NFR16: Lighthouse SEO Score > 90
- NFR17: Mobile-friendly (Google) Pass
- NFR18: Core Web Vitals Pass

**Compatibilité (NFR19-NFR25)**
- NFR19: Chrome 90+ supporté
- NFR20: Firefox 88+ supporté
- NFR21: Safari 14+ supporté
- NFR22: Edge 90+ supporté
- NFR23: Safari iOS 14+ supporté
- NFR24: Chrome Android 90+ supporté
- NFR25: IE11 non supporté

**Fiabilité (NFR26-NFR27)**
- NFR26: Uptime cible > 99% (Vercel standard)
- NFR27: Formulaire fallback mailto si SMTP échoue

### Additional Requirements

**Architecture Requirements:**
- Projet brownfield - Stack existante Next.js 14.2, Tailwind 3.4, Framer Motion
- Pas de starter template à initialiser (code existant)
- nodemailer + Gmail/SMTP pour formulaire contact
- Honeypot anti-spam (champ caché CSS)
- Sitemap statique dans /public/
- Metadata API native Next.js pour SEO
- ContactModalContext pour état global modale
- Validation manuelle formulaire (pas de lib)

**UX Requirements:**
- Design system Bento Grid avec 5 variantes de cards
- Grilles flexibles 4×4 à 4×6 selon contenu
- Animations entry avec stagger sur cards
- Hero rotatif avec AnimatePresence
- Responsive breakpoints : sm(640), md(768), lg(1024), xl(1280), 2xl(1440)
- Modale contact accessible (focus trap, Escape close)

**Files to Create (from Architecture):**
- src/app/mobile/page.tsx
- src/app/projets/page.tsx
- src/app/ia/page.tsx
- src/app/api/contact/route.ts
- src/components/contact/ContactModal.tsx
- src/components/heroes/HeroRotating.tsx
- src/components/cards/ServiceCard.tsx
- src/components/cards/ProjectCard.tsx
- src/components/ui/Input.tsx
- src/components/ui/Textarea.tsx
- src/components/ui/Badge.tsx
- src/contexts/ContactModalContext.tsx
- public/sitemap.xml
- public/robots.txt
- .env.local
- .env.example

### FR Coverage Map

| Epic | Functional Requirements |
|------|-------------------------|
| Epic 1: Contact System Foundation | FR2, FR27, FR28, FR29, FR30, FR31, FR32 |
| Epic 2: Homepage Polish | FR4, FR5, FR6, FR7, FR8, FR9, FR41, FR42 |
| Epic 3: Expertise Page Redesign | FR10, FR11, FR12, FR13 |
| Epic 4: Mobile Page | FR14, FR15, FR16, FR17 |
| Epic 5: Projects Page | FR18, FR19, FR20, FR21, FR22 |
| Epic 6: AI Page | FR23, FR24, FR25, FR26 |
| Epic 7: Navigation & SEO | FR1, FR3, FR33, FR34, FR35, FR36, FR37, FR38, FR39, FR40 |

**Coverage Verification:** 42/42 MVP FRs mapped (FR43-45 = Post-MVP Growth Features)

## Epic List

### Epic 1: Contact System Foundation
**Goal:** Permettre aux visiteurs de contacter Julien facilement depuis n'importe quelle page via une modale de contact fonctionnelle.
**Priority:** P0 (Critical - Lead Generation)
**FRs:** FR2, FR27, FR28, FR29, FR30, FR31, FR32
**NFRs:** NFR7 (honeypot), NFR27 (fallback mailto)

### Epic 2: Homepage Polish
**Goal:** Corriger les bugs existants (ratio 16/9, scroll mobile) et finaliser la page d'accueil avec toutes les informations requises.
**Priority:** P0 (Critical - First Impression)
**FRs:** FR4, FR5, FR6, FR7, FR8, FR9, FR41, FR42
**NFRs:** NFR1-6 (Performance), NFR11-15 (Accessibility)

### Epic 3: Expertise Page Redesign
**Goal:** Refondre la page /expertise avec la grille tarifaire et le hero rotatif pour présenter les 4 services.
**Priority:** P1 (High - Service Presentation)
**FRs:** FR10, FR11, FR12, FR13
**Dependencies:** Epic 1 (CTA Contact)

### Epic 4: Mobile Page
**Goal:** Créer la page /mobile dédiée aux services de développement mobile avec mise en avant Flutter et projet Oroneo.
**Priority:** P1 (High - Service Deep Dive)
**FRs:** FR14, FR15, FR16, FR17
**Dependencies:** Epic 1 (CTA Contact), Epic 3 (ServiceCard)

### Epic 5: Projects Page
**Goal:** Créer la page /projets pour présenter le portfolio avec les projets Oroneo et BAS.
**Priority:** P1 (High - Social Proof)
**FRs:** FR18, FR19, FR20, FR21, FR22
**Dependencies:** Epic 1 (CTA Contact)

### Epic 6: AI Page
**Goal:** Créer la page /ia avec l'approche IA accessible PME et les cas d'usage concrets.
**Priority:** P1 (High - Differentiation)
**FRs:** FR23, FR24, FR25, FR26
**Dependencies:** Epic 1 (CTA Contact)

### Epic 7: Navigation & SEO
**Goal:** Finaliser la navigation globale et optimiser le SEO avec meta tags, sitemap et robots.txt.
**Priority:** P2 (Medium - Discoverability)
**FRs:** FR1, FR3, FR33, FR34, FR35, FR36, FR37, FR38, FR39, FR40
**NFRs:** NFR16-18 (SEO), NFR19-25 (Compatibility)

---

## Epic Details

### Epic 1: Contact System Foundation

**Epic Goal:** Permettre aux visiteurs de contacter Julien facilement depuis n'importe quelle page via une modale de contact fonctionnelle.

**Requirements Covered:** FR2, FR27, FR28, FR29, FR30, FR31, FR32, NFR7, NFR27

---

#### Story 1.1: Create ContactModalContext

As a **developer**,
I want **a React Context to manage the contact modal open/close state globally**,
So that **any component can trigger the modal from anywhere in the app**.

**Acceptance Criteria:**

**Given** the ContactModalContext is implemented
**When** I wrap the app with ContactModalProvider
**Then** any child component can access `isOpen` and `setIsOpen` functions

**Given** a component calls `openModal()`
**When** the function is invoked
**Then** the modal state becomes `isOpen: true`

**Given** a component calls `closeModal()`
**When** the function is invoked
**Then** the modal state becomes `isOpen: false`

**Technical Notes:**
- Create `src/contexts/ContactModalContext.tsx`
- Export `ContactModalProvider` and `useContactModal` hook
- Use `useState` for state management (no external libs)

**FR Coverage:** Enables FR2, FR27

---

#### Story 1.2: Create Contact Form UI Components

As a **developer**,
I want **reusable Input and Textarea components following the design system**,
So that **I can build the contact form with consistent styling**.

**Acceptance Criteria:**

**Given** the Input component is rendered
**When** I pass `label`, `name`, `type`, and `required` props
**Then** it displays a styled input with label following Bento design

**Given** the Textarea component is rendered
**When** I pass `label`, `name`, and `rows` props
**Then** it displays a styled textarea with label following Bento design

**Given** an input has an error state
**When** I pass `error` prop with a message
**Then** the input shows the error message in red below

**Given** keyboard navigation is used
**When** I tab through form fields
**Then** focus states are clearly visible (NFR15)

**Technical Notes:**
- Create `src/components/ui/Input.tsx`
- Create `src/components/ui/Textarea.tsx`
- Use Tailwind tokens: `bg-card`, `rounded-lg`, `font-poppins`
- Include `cn()` for class merging

**FR Coverage:** Enables FR29
**NFR Coverage:** NFR11-15 (Accessibility)

---

#### Story 1.3: Create Contact Modal Component

As a **visiteur**,
I want **to open a contact modal with a form to send a message to Julien**,
So that **I can request information or start a project discussion**.

**Acceptance Criteria:**

**Given** I click any "Contact" CTA button on the site
**When** the modal opens
**Then** I see a form with fields: Nom, Email, Message

**Given** the modal is open
**When** I view the form
**Then** I see the message "Pas de commercial, c'est moi qui réponds" (FR30)

**Given** the modal is open
**When** I press Escape or click outside
**Then** the modal closes

**Given** I submit the form with valid data
**When** the API call succeeds
**Then** I see a success confirmation message (FR32)

**Given** I submit the form with valid data
**When** the API call fails
**Then** I see a mailto fallback link to contact@infojv.net (FR28, NFR27)

**Given** the modal is open
**When** I use keyboard navigation
**Then** focus is trapped within the modal (accessibility)

**Technical Notes:**
- Create `src/components/contact/ContactModal.tsx`
- Use Framer Motion for entry/exit animations
- Implement focus trap for accessibility
- Status enum: `'idle' | 'loading' | 'success' | 'error'`
- Include honeypot hidden field (NFR7)

**FR Coverage:** FR27, FR28, FR29, FR30, FR32
**NFR Coverage:** NFR7 (honeypot), NFR27 (fallback)

---

#### Story 1.4: Create Contact API Route

As a **système**,
I want **an API endpoint that receives form submissions and sends emails via nodemailer**,
So that **Julien receives contact requests by email**.

**Acceptance Criteria:**

**Given** a POST request to `/api/contact` with valid data
**When** the request includes `name`, `email`, `message`
**Then** an email is sent to contact@infojv.net via SMTP

**Given** the honeypot field contains data
**When** the form is submitted
**Then** the API returns 200 silently without sending email (spam blocked)

**Given** a POST request with missing required fields
**When** validation fails
**Then** the API returns 400 with `{ success: false, error: "Validation error message" }`

**Given** SMTP fails
**When** the email cannot be sent
**Then** the API returns 500 with `{ success: false, error: "Erreur d'envoi" }`

**Given** the email is sent successfully
**When** the response is returned
**Then** it contains `{ success: true, message: "Message envoyé" }`

**Technical Notes:**
- Create `src/app/api/contact/route.ts`
- Use nodemailer with Gmail App Password or SMTP infojv.net
- Manual validation (regex email, required fields)
- Create `.env.example` with SMTP config template
- Response format: `{ success: boolean, message?: string, error?: string }`

**FR Coverage:** FR31
**NFR Coverage:** NFR7 (honeypot), NFR10 (no server storage)

---

### Epic 2: Homepage Polish

**Epic Goal:** Corriger les bugs existants (ratio 16/9, scroll mobile) et finaliser la page d'accueil avec toutes les informations requises.

**Requirements Covered:** FR4, FR5, FR6, FR7, FR8, FR9, FR41, FR42, NFR1-6, NFR11-15

---

#### Story 2.1: Fix Homepage 16/9 Ratio on Large Screens

As a **visiteur sur écran large (>1440px)**,
I want **the homepage to maintain a 16/9 aspect ratio without horizontal scroll**,
So that **the Bento Grid layout displays optimally on ultrawide monitors**.

**Acceptance Criteria:**

**Given** I view the homepage on a screen >1440px width
**When** the page loads
**Then** the main container maintains 16/9 max aspect ratio

**Given** I view the homepage on a 2560px wide screen
**When** the page loads
**Then** the content is centered with background visible on sides

**Given** I resize the browser horizontally
**When** the width exceeds 1440px
**Then** no horizontal scrollbar appears

**Technical Notes:**
- Add `max-w-[1440px]` or viewport-based constraint
- Center container with `mx-auto`
- Test on 1920px, 2560px viewports

**FR Coverage:** FR41

---

#### Story 2.2: Fix Mobile Scroll Behavior

As a **visiteur sur mobile (<640px)**,
I want **to scroll through all homepage content vertically**,
So that **I can see all cards and information on my phone**.

**Acceptance Criteria:**

**Given** I view the homepage on mobile (<640px)
**When** I scroll vertically
**Then** all Bento cards are accessible in a single column layout

**Given** I view the homepage on mobile
**When** the page loads
**Then** the grid converts to responsive stacked layout

**Given** I scroll on mobile
**When** reaching the bottom
**Then** all 10 cards are visible (InfoJV, Projets, Années, Site Web, Julien, Mobile, Banques, Marseille, Contact)

**Technical Notes:**
- Ensure `grid-template-areas` responsive override
- Cards stack in logical order on mobile
- Test on 375px, 414px viewports

**FR Coverage:** FR42
**NFR Coverage:** NFR17 (Mobile-friendly)

---

#### Story 2.3: Polish Homepage Key Numbers Card

As a **visiteur**,
I want **to see impressive key numbers (50+ projects, 20+ years)**,
So that **I understand Info JV's experience and credibility**.

**Acceptance Criteria:**

**Given** I view the homepage
**When** I look at the key numbers section
**Then** I see "50+" prominently displayed with "projets réalisés"

**Given** I view the homepage
**When** I look at the key numbers section
**Then** I see "20+" prominently displayed with "ans d'expérience"

**Given** the key numbers are rendered
**When** I check contrast
**Then** the numbers meet WCAG 4.5:1 contrast ratio (NFR12)

**Technical Notes:**
- Update existing card with final content
- Use accent color for numbers
- Typography: large bold numbers, smaller description

**FR Coverage:** FR5
**NFR Coverage:** NFR12 (Contrast)

---

#### Story 2.4: Polish Homepage Services Links

As a **visiteur**,
I want **to see the services offered with clear links to dedicated pages**,
So that **I can quickly navigate to learn more about specific services**.

**Acceptance Criteria:**

**Given** I view the homepage
**When** I look at the services section
**Then** I see links to: Site Web, Mobile, IA, Automatisation

**Given** I click on a service link
**When** the link is "Mobile"
**Then** I navigate to `/mobile` page

**Given** I click on a service link
**When** the link is "Site Web"
**Then** I navigate to `/expertise` page

**Given** the service links are displayed
**When** I hover over them
**Then** visual feedback indicates they are clickable

**Technical Notes:**
- Use Next.js `Link` component for client-side navigation
- Services: Site Web → /expertise, Mobile → /mobile, IA → /ia

**FR Coverage:** FR6

---

#### Story 2.5: Polish Homepage Bank References Card

As a **visiteur**,
I want **to see the prestigious bank clients (Caisse d'Épargne, Banque Populaire, La Banque Postale)**,
So that **I trust Info JV's credibility with major institutions**.

**Acceptance Criteria:**

**Given** I view the homepage
**When** I look at the bank references card
**Then** I see logos for Caisse d'Épargne, Banque Populaire, La Banque Postale

**Given** the bank logos are displayed
**When** I check the images
**Then** all logos have descriptive alt texts (NFR14)

**Given** the bank references card is viewed
**When** I check accessibility
**Then** the card is identified as a list of client references

**Technical Notes:**
- Bank logos in `/assets/` folder
- Use `next/image` for optimization
- Black background for logos card

**FR Coverage:** FR7
**NFR Coverage:** NFR14 (Alt texts)

---

#### Story 2.6: Polish Homepage Location Card

As a **visiteur**,
I want **to see the service areas (Marseille, Peypin, Aix)**,
So that **I know where Info JV operates**.

**Acceptance Criteria:**

**Given** I view the homepage
**When** I look at the location card
**Then** I see "Marseille" as primary location

**Given** I view the location card
**When** I check for additional locations
**Then** I see mentions of Peypin and Aix-en-Provence area

**Given** the location card is displayed
**When** it animates in
**Then** the entry animation uses stagger effect with other cards

**Technical Notes:**
- Update existing Marseille card
- Include regional coverage messaging
- Map pin icon from Material Symbols

**FR Coverage:** FR8

---

#### Story 2.7: Polish Homepage Contact CTA Card

As a **visiteur**,
I want **to see a clear Contact CTA on the homepage**,
So that **I can easily initiate contact with Julien**.

**Acceptance Criteria:**

**Given** I view the homepage
**When** I look at the Contact card
**Then** I see a prominent "Me Contacter" or similar CTA

**Given** I click the Contact CTA
**When** the click is registered
**Then** the ContactModal opens (via ContactModalContext)

**Given** the Contact CTA is visible
**When** I use keyboard navigation
**Then** I can focus and activate the button with Enter/Space

**Technical Notes:**
- Integrate with ContactModalContext from Epic 1
- Use `accent` color for CTA visibility
- Ensure focus ring visible (NFR15)

**FR Coverage:** FR9
**NFR Coverage:** NFR13 (Keyboard nav), NFR15 (Focus visible)
**Dependencies:** Epic 1 (ContactModalContext)

---

### Epic 3: Expertise Page Redesign

**Epic Goal:** Refondre la page /expertise avec la grille tarifaire et le hero rotatif pour présenter les 4 services.

**Requirements Covered:** FR10, FR11, FR12, FR13

---

#### Story 3.1: Create HeroRotating Component

As a **visiteur**,
I want **to see a rotating hero with 3 different catch phrases**,
So that **I'm engaged by dynamic, compelling messaging**.

**Acceptance Criteria:**

**Given** I view the Expertise page
**When** the hero section loads
**Then** I see the first catch phrase displayed prominently

**Given** the hero is displayed
**When** 5 seconds pass
**Then** the catch phrase smoothly transitions to the next one

**Given** 3 catch phrases exist
**When** all have been displayed
**Then** the rotation loops back to the first phrase

**Given** the hero transitions
**When** AnimatePresence handles the switch
**Then** the animation is smooth with fade/slide effect

**Technical Notes:**
- Create `src/components/heroes/HeroRotating.tsx`
- Use Framer Motion `AnimatePresence` for exit/enter animations
- 3 messages from UX specification
- Auto-rotate every 5 seconds with `useEffect` interval

**FR Coverage:** FR12

---

#### Story 3.2: Create ServiceCard Component

As a **developer**,
I want **a reusable ServiceCard component for displaying services**,
So that **I can consistently present service offerings across pages**.

**Acceptance Criteria:**

**Given** the ServiceCard is rendered
**When** I pass `title`, `description`, `icon`, and `href` props
**Then** it displays a Bento-style card with all information

**Given** a ServiceCard is displayed
**When** I click on it
**Then** I navigate to the linked service page

**Given** a ServiceCard is displayed
**When** I hover over it
**Then** visual feedback indicates it's interactive

**Given** multiple ServiceCards are rendered
**When** they animate in
**Then** they use stagger animation pattern

**Technical Notes:**
- Create `src/components/cards/ServiceCard.tsx`
- Props interface: `ServiceCardProps`
- Use existing BentoCard as base or create new
- Include icon support (Material Symbols)

**FR Coverage:** Enables FR10, FR13

---

#### Story 3.3: Create Pricing Grid Section

As a **visiteur**,
I want **to see a pricing grid with "starting from" prices for each service**,
So that **I have a clear idea of budget requirements**.

**Acceptance Criteria:**

**Given** I view the Expertise page
**When** I look at the pricing section
**Then** I see prices for: Site Web, App Mobile, Solution IA, Automatisation

**Given** the pricing grid is displayed
**When** I read the prices
**Then** each shows "À partir de X€" format

**Given** the pricing grid is displayed
**When** I check the layout
**Then** prices are organized in a clear grid (2×2 or 4×1 responsive)

**Given** the pricing information is viewed
**When** I check contrast
**Then** price text meets WCAG 4.5:1 ratio

**Technical Notes:**
- Pricing data from PRD/UX specification
- Use Bento Grid card for pricing section
- Responsive: 2×2 on desktop, stack on mobile

**FR Coverage:** FR11

---

#### Story 3.4: Build Expertise Page Layout

As a **visiteur**,
I want **to see the complete Expertise page with services and pricing**,
So that **I understand what Info JV offers and at what price point**.

**Acceptance Criteria:**

**Given** I navigate to `/expertise`
**When** the page loads
**Then** I see the HeroRotating component at the top

**Given** I view the Expertise page
**When** I scroll down
**Then** I see 4 service cards: Dev Web, Mobile, IA, Automatisation (FR10)

**Given** I click on a service card
**When** the card is "Mobile"
**Then** I navigate to `/mobile` (FR13)

**Given** I view the Expertise page
**When** I look for pricing
**Then** I see the pricing grid section

**Given** I view the Expertise page
**When** I look for contact options
**Then** I see a Contact CTA that opens the modal

**Technical Notes:**
- Refactor existing `src/app/expertise/page.tsx`
- Use Bento Grid layout (4×4 or 4×6)
- Integrate: HeroRotating, ServiceCard×4, PricingGrid, ContactCTA
- Page metadata for SEO

**FR Coverage:** FR10, FR13
**Dependencies:** Story 3.1, 3.2, 3.3, Epic 1 (CTA)

---

### Epic 4: Mobile Page

**Epic Goal:** Créer la page /mobile dédiée aux services de développement mobile avec mise en avant Flutter et projet Oroneo.

**Requirements Covered:** FR14, FR15, FR16, FR17

---

#### Story 4.1: Create Mobile Page Hero Section

As a **visiteur**,
I want **to understand the benefits of having a mobile app**,
So that **I consider mobile development for my business**.

**Acceptance Criteria:**

**Given** I navigate to `/mobile`
**When** the page loads
**Then** I see a compelling hero section about mobile app benefits

**Given** I view the Mobile page hero
**When** I read the content
**Then** I understand key benefits: reach, engagement, modern business presence

**Given** the hero section is displayed
**When** I check the layout
**Then** it follows the Bento Grid design system

**Technical Notes:**
- Create `src/app/mobile/page.tsx`
- Hero section with benefit-focused messaging
- Use existing BentoCard components
- Include floating 3D shapes for visual interest

**FR Coverage:** FR14

---

#### Story 4.2: Create Flutter Technology Section

As a **visiteur**,
I want **to see that Info JV uses Flutter technology**,
So that **I understand the modern, cross-platform approach**.

**Acceptance Criteria:**

**Given** I view the Mobile page
**When** I look for technology information
**Then** I see Flutter prominently mentioned

**Given** the Flutter section is displayed
**When** I read the content
**Then** I understand benefits: single codebase, iOS + Android, performance

**Given** the technology section is visible
**When** I check for visuals
**Then** I see Flutter logo or relevant iconography

**Technical Notes:**
- Flutter technology card/section
- Cross-platform benefits messaging
- Use Badge component if needed for tech tags

**FR Coverage:** FR15

---

#### Story 4.3: Create Oroneo Project Reference Section

As a **visiteur**,
I want **to see a real project example (Oroneo)**,
So that **I have proof of Info JV's mobile development capabilities**.

**Acceptance Criteria:**

**Given** I view the Mobile page
**When** I look for project examples
**Then** I see the Oroneo project featured

**Given** the Oroneo section is displayed
**When** I read the content
**Then** I see: project type (mobile + IA), description, visual/mockup

**Given** the Oroneo reference is shown
**When** I want more details
**Then** I can navigate to the full Projects page

**Technical Notes:**
- Project reference card with Oroneo details
- Link to /projets for full portfolio
- Include app mockup visual if available

**FR Coverage:** FR16

---

#### Story 4.4: Add Mobile Page Contact CTA

As a **visiteur intéressé par le mobile**,
I want **to easily contact Julien about mobile development**,
So that **I can discuss my mobile app project**.

**Acceptance Criteria:**

**Given** I view the Mobile page
**When** I scroll to the bottom
**Then** I see a clear Contact CTA for mobile projects

**Given** I click the Mobile Contact CTA
**When** the modal opens
**Then** it's the same ContactModal from Epic 1

**Given** the CTA is displayed
**When** I read the messaging
**Then** it's contextual to mobile development (e.g., "Discuter de votre projet mobile")

**Technical Notes:**
- Use ContactModalContext to open modal
- Contextual CTA messaging for mobile
- Prominent placement at page bottom

**FR Coverage:** FR17
**Dependencies:** Epic 1 (ContactModalContext)

---

### Epic 5: Projects Page

**Epic Goal:** Créer la page /projets pour présenter le portfolio avec les projets Oroneo et BAS.

**Requirements Covered:** FR18, FR19, FR20, FR21, FR22

---

#### Story 5.1: Create ProjectCard Component

As a **developer**,
I want **a reusable ProjectCard component for displaying portfolio projects**,
So that **I can consistently present projects with visuals and details**.

**Acceptance Criteria:**

**Given** the ProjectCard is rendered
**When** I pass `title`, `type`, `description`, `result`, and `image` props
**Then** it displays a Bento-style card with all project information

**Given** a ProjectCard is displayed
**When** I view the card
**Then** I see: project type badge, title, description, result/outcome

**Given** a ProjectCard has an image
**When** the card renders
**Then** the image is displayed with optimized loading (next/image)

**Given** multiple ProjectCards are rendered
**When** they animate in
**Then** they use stagger animation pattern

**Technical Notes:**
- Create `src/components/cards/ProjectCard.tsx`
- Create `src/components/ui/Badge.tsx` for project type tags
- Props interface: `ProjectCardProps`
- Use `next/image` for visuals

**FR Coverage:** FR18, FR19

---

#### Story 5.2: Create Projects Page with Oroneo Project

As a **visiteur**,
I want **to see the Oroneo project in the portfolio**,
So that **I see proof of mobile + IA expertise**.

**Acceptance Criteria:**

**Given** I navigate to `/projets`
**When** the page loads
**Then** I see the Oroneo project prominently displayed

**Given** the Oroneo project is shown
**When** I read the details
**Then** I see: type (Mobile + IA), description, result achieved

**Given** the Oroneo project card is displayed
**When** I check for visuals
**Then** I see app mockup or screenshot

**Given** the Projects page loads
**When** I check the layout
**Then** it follows Bento Grid design system

**Technical Notes:**
- Create `src/app/projets/page.tsx`
- Oroneo project data from content specification
- Include visual from `/assets/` if available
- Page metadata for SEO

**FR Coverage:** FR20

---

#### Story 5.3: Add BAS Project to Projects Page

As a **visiteur**,
I want **to see the BAS automatisation project**,
So that **I see proof of process automation expertise**.

**Acceptance Criteria:**

**Given** I view the Projects page
**When** I look for automation projects
**Then** I see the BAS project displayed

**Given** the BAS project is shown
**When** I read the details
**Then** I see: type (Automatisation), description, result achieved

**Given** both Oroneo and BAS are displayed
**When** I view the page layout
**Then** projects are organized in a visually appealing grid

**Technical Notes:**
- Add BAS project to Projects page
- Project data from content specification
- May include process diagram or relevant visual

**FR Coverage:** FR21

---

#### Story 5.4: Add Projects Page Contact CTA

As a **visiteur ayant consulté le portfolio**,
I want **to easily contact Julien after seeing the projects**,
So that **I can discuss a similar project for my business**.

**Acceptance Criteria:**

**Given** I view the Projects page
**When** I scroll to the bottom
**Then** I see a Contact CTA after the portfolio section

**Given** I click the Projects Contact CTA
**When** the modal opens
**Then** it's the same ContactModal from Epic 1

**Given** the CTA is displayed
**When** I read the messaging
**Then** it encourages starting a project conversation

**Technical Notes:**
- Use ContactModalContext to open modal
- Placement after all project cards
- Messaging: "Un projet similaire ?" or equivalent

**FR Coverage:** FR22
**Dependencies:** Epic 1 (ContactModalContext)

---

### Epic 6: AI Page

**Epic Goal:** Créer la page /ia avec l'approche IA accessible PME et les cas d'usage concrets.

**Requirements Covered:** FR23, FR24, FR25, FR26

---

#### Story 6.1: Create AI Page with Accessible Approach Hero

As a **visiteur PME**,
I want **to understand that AI is accessible for my business**,
So that **I don't feel intimidated by complex technology**.

**Acceptance Criteria:**

**Given** I navigate to `/ia`
**When** the page loads
**Then** I see a hero section with accessible AI messaging

**Given** I read the AI page content
**When** I look at the language used
**Then** it avoids technical jargon and uses simple terms (FR25)

**Given** the AI page hero is displayed
**When** I read the main message
**Then** I understand "L'IA n'est pas réservée aux géants de la tech"

**Given** the page loads
**When** I check the design
**Then** it follows Bento Grid design system

**Technical Notes:**
- Create `src/app/ia/page.tsx`
- Anti-jargon messaging from content specification
- Approachable, non-intimidating tone
- Include floating 3D shapes for visual interest

**FR Coverage:** FR23, FR25

---

#### Story 6.2: Create AI Use Cases Section

As a **visiteur PME**,
I want **to see concrete AI use cases relevant to my business**,
So that **I can envision how AI would help me**.

**Acceptance Criteria:**

**Given** I view the AI page
**When** I look for use cases
**Then** I see 4 concrete examples: Compagnon de marque, Aide administrative, Aide stratégique, Agents automatisés

**Given** each use case is displayed
**When** I read the description
**Then** I understand the practical benefit without technical complexity

**Given** the use cases section is displayed
**When** I check the layout
**Then** use cases are organized in a clear grid (2×2 or cards)

**Given** I read "Compagnon de marque"
**When** I understand the concept
**Then** I see it's about AI-powered customer engagement

**Given** I read "Aide administrative"
**When** I understand the concept
**Then** I see it's about automating repetitive admin tasks

**Technical Notes:**
- 4 use case cards/sections
- Each with: title, short description, icon
- Simple, benefit-focused language
- May reuse ServiceCard or create specific layout

**FR Coverage:** FR24

---

#### Story 6.3: Add AI Page Contact CTA

As a **visiteur intéressé par l'IA**,
I want **to easily contact Julien about AI solutions**,
So that **I can explore AI possibilities for my business**.

**Acceptance Criteria:**

**Given** I view the AI page
**When** I scroll to the bottom
**Then** I see a Contact CTA specific to AI inquiries

**Given** I click the AI Contact CTA
**When** the modal opens
**Then** it's the same ContactModal from Epic 1

**Given** the CTA is displayed
**When** I read the messaging
**Then** it's contextual to AI (e.g., "Explorons ensemble ce que l'IA peut faire pour vous")

**Technical Notes:**
- Use ContactModalContext to open modal
- Encouraging, non-intimidating CTA text
- Prominent placement at page bottom

**FR Coverage:** FR26
**Dependencies:** Epic 1 (ContactModalContext)

---

### Epic 7: Navigation & SEO

**Epic Goal:** Finaliser la navigation globale et optimiser le SEO avec meta tags, sitemap et robots.txt.

**Requirements Covered:** FR1, FR3, FR33, FR34, FR35, FR36, FR37, FR38, FR39, FR40, NFR16-18, NFR19-25

---

#### Story 7.1: Update Header Navigation Menu

As a **visiteur**,
I want **a clear navigation menu to access all pages**,
So that **I can easily explore the site content**.

**Acceptance Criteria:**

**Given** I view the header on any page
**When** I look at the navigation
**Then** I see links to: Accueil, Expertise, Mobile, Projets, IA, Contact

**Given** I click the Info JV logo
**When** navigation occurs
**Then** I return to the homepage (FR3)

**Given** I use the navigation on mobile
**When** the screen is < 640px
**Then** the menu adapts (hamburger or other mobile pattern)

**Given** I use keyboard navigation
**When** I tab through the menu
**Then** all links are focusable and activatable (NFR13)

**Technical Notes:**
- Update existing Header component
- Add navigation links for new pages
- Mobile-responsive menu pattern
- Logo links to `/`

**FR Coverage:** FR1, FR3
**NFR Coverage:** NFR13 (Keyboard nav)

---

#### Story 7.2: Add Page SEO Metadata

As a **moteur de recherche**,
I want **unique, optimized metadata for each page**,
So that **the site ranks well for relevant searches**.

**Acceptance Criteria:**

**Given** I check the homepage
**When** I view the HTML head
**Then** I see unique title: "Info JV - Développeur Web, Mobile & IA à Marseille"

**Given** I check each page
**When** I view meta descriptions
**Then** each page has a unique, optimized description (<160 chars)

**Given** I check any page
**When** I view Open Graph tags
**Then** I see og:title, og:description, og:image for social sharing

**Given** I share a page on social media
**When** the preview generates
**Then** it shows correct title, description, and image

**Technical Notes:**
- Use Next.js Metadata API in each page.tsx
- Create metadata exports for: /, /expertise, /mobile, /projets, /ia
- Include Open Graph tags: og:title, og:description, og:type, og:url
- Default og:image pointing to preview asset

**FR Coverage:** FR33, FR34, FR35
**NFR Coverage:** NFR16 (SEO Score > 90)

---

#### Story 7.3: Create Sitemap and Robots.txt

As a **moteur de recherche**,
I want **a sitemap.xml and robots.txt file**,
So that **the site is properly indexed**.

**Acceptance Criteria:**

**Given** I access `/sitemap.xml`
**When** the file loads
**Then** I see all pages listed: /, /expertise, /mobile, /projets, /ia

**Given** the sitemap is generated
**When** I check the format
**Then** it follows standard sitemap XML format with lastmod dates

**Given** I access `/robots.txt`
**When** the file loads
**Then** I see: Allow all crawlers, link to sitemap

**Given** robots.txt is configured
**When** crawlers read it
**Then** no sensitive paths are exposed (if any)

**Technical Notes:**
- Create `public/sitemap.xml` with static URLs
- Create `public/robots.txt` with sitemap reference
- URLs: https://infojv.net/sitemap.xml pattern
- Include all public pages

**FR Coverage:** FR36, FR37
**NFR Coverage:** NFR16 (SEO Score > 90)

---

#### Story 7.4: Responsive Design Verification

As a **visiteur sur différents appareils**,
I want **the site to display correctly on mobile, tablet, and desktop**,
So that **I have a good experience regardless of device**.

**Acceptance Criteria:**

**Given** I view the site on mobile (< 640px)
**When** I navigate all pages
**Then** content is readable and interactive elements are usable (FR38)

**Given** I view the site on tablet (640-1024px)
**When** I navigate all pages
**Then** layout adapts appropriately with proper spacing (FR39)

**Given** I view the site on desktop (1024-1440px)
**When** I navigate all pages
**Then** full Bento Grid layouts display as designed (FR40)

**Given** I test on Chrome, Firefox, Safari, Edge
**When** I navigate the site
**Then** all pages render consistently (NFR19-22)

**Given** I test on Safari iOS and Chrome Android
**When** I navigate the site
**Then** mobile experience is smooth (NFR23-24)

**Technical Notes:**
- Verification story - test all pages across breakpoints
- Use existing Tailwind responsive classes
- Test: 375px, 640px, 768px, 1024px, 1280px, 1440px
- Cross-browser check on major browsers

**FR Coverage:** FR38, FR39, FR40
**NFR Coverage:** NFR17 (Mobile-friendly), NFR19-24 (Browser compatibility)

---

## Summary

| Epic | Stories | FRs Covered |
|------|---------|-------------|
| Epic 1: Contact System Foundation | 4 | FR2, FR27-32 |
| Epic 2: Homepage Polish | 7 | FR4-9, FR41-42 |
| Epic 3: Expertise Page Redesign | 4 | FR10-13 |
| Epic 4: Mobile Page | 4 | FR14-17 |
| Epic 5: Projects Page | 4 | FR18-22 |
| Epic 6: AI Page | 3 | FR23-26 |
| Epic 7: Navigation & SEO | 4 | FR1, FR3, FR33-40 |

**Total Stories:** 30
**Total FRs Covered:** 42/42 MVP (100%)
