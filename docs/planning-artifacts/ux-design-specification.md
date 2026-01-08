---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
status: completed
inputDocuments:
  - 'docs/planning-artifacts/prd.md'
  - 'docs/content-pages-infojv.md'
  - 'docs/component-inventory.md'
workflowType: 'ux-design'
lastStep: 1
---

# UX Design Specification — infojv

**Author:** romain
**Date:** 2026-01-07

---

## Design Context

### Existing Design System

Le projet dispose déjà d'un design system implémenté :

**Couleurs :**
| Token | Valeur | Usage |
|-------|--------|-------|
| `bg-page` | #0C0C0C | Fond sombre |
| `bg-card` | #FFF4F3 | Cards default (crème rosé) |
| `bg-card-mint` | #C9F9E3 | Cards mint |
| `accent` | #53E1A1 | Couleur accent (mint) |

**Typographie :**
- Font unique : Poppins
- Weights : 400, 500, 600, 700

**Composants existants :**
- `BentoGrid` — Container grid 4×4
- `BentoCard` — Cards avec 5 variantes (default, white, mint, mint-reverse, dark)
- `FloatingShape` — Shapes 3D avec animations (float, rotate, pulse)
- `Button` — CTAs (primary, secondary, ghost)
- `Icon` — Material Symbols wrapper

**Border radius :** 24px sur toutes les cards

### Pages existantes

- `/` — Homepage Bento Grid (implémentée, à corriger ratio 16/9 + scroll mobile)
- `/expertise` — Page expertise (existe mais à refondre)

### Pages à créer

- `/mobile` — Services développement mobile
- `/projets` — Portfolio (Oroneo, BAS)
- `/ia` — Services IA
- `/contact` — Modale contact

---

## Executive Summary

### Project Vision

Refonte complète du site vitrine infojv.net pour repositionner Julien Villard comme expert digital freelance spécialisé en Dev Web, Mobile, IA et Automatisation. Le site doit servir de preuve vivante de ses compétences (design moderne Bento Grid) tout en convertissant 5-10 prospects/mois via une UX fluide et des CTAs clairs.

### Target Users

**Persona 1 — Patrick (Président club sportif)**
Cherche un site moderne pour son club. Juge la compétence du prestataire à travers son propre site. Sensible au portfolio et au prix.

**Persona 2 — Jean-Michel (Patron PME)**
Veut de la visibilité Google. Très sensible au prix, demande de la transparence tarifaire. A besoin d'exemples concrets de réalisations.

**Persona 3 — Lucas (Entrepreneur app)**
A une idée d'app mobile. Cherche un freelance accessible, pas une agence froide. Veut un contact facile et rapide.

**Persona 4 — Sophie (DG PME curieuse IA)**
Intriguée par l'IA mais intimidée par le jargon. Cherche des cas d'usage métier concrets, pas de la tech pour la tech.

### Key Design Challenges

1. **Cohérence Bento Grid** — Décliner le design system sur 5 pages (home existante + expertise refonte + 4 nouvelles) tout en variant les layouts
2. **Responsive mobile** — Corriger le bug de scroll et adapter le grid pour mobile (stack vertical)
3. **Ratio 16/9** — Maintenir le ratio d'écran sur la home en desktop >1440px via CSS aspect-ratio
4. **Conversion douce** — Amener à la modale contact sans être agressif, respecter le ton "humain et léger"
5. **Pricing UX** — Répondre au besoin de transparence sans afficher de grille tarifaire fixe

### Design Opportunities

1. **Hero animé** — Rotation de 3 accroches avec AnimatePresence (Framer Motion) sur la page Expertise
2. **Modale contextuelle** — Trigger intelligent après 15s pour visiteurs de retour
3. **Storytelling visuel** — Utiliser les shapes 3D et les cards pour raconter l'expertise de façon non-linéaire
4. **Page IA différenciante** — Vulgarisation créative avec des cas d'usage concrets, ton décalé ("L'IA, c'est pas que pour les grosses sociétés")

---

## Core User Experience

### Defining Experience

L'expérience core d'infojv.net se résume en une phrase : **"Je comprends, je fais confiance, je contacte."**

Le site est conçu comme un funnel doux où :
1. L'utilisateur comprend instantanément l'offre (Bento Grid visuel)
2. Il trouve le service correspondant à son besoin (navigation claire)
3. Il est rassuré par le portfolio et le ton humain
4. Il contacte sans friction via la modale globale

**Action core :** Conversion du visiteur en prospect qualifié
**Métrique cible :** 5-10 contacts entrants/mois

### Platform Strategy

| Plateforme | Support | Priorité |
|------------|---------|----------|
| Desktop Chrome/Firefox/Edge | Full | P1 |
| Desktop Safari | Full | P1 |
| Mobile iOS Safari | Full (stack vertical) | P1 |
| Mobile Android Chrome | Full (stack vertical) | P1 |
| Tablette | Responsive intermédiaire | P2 |

**Contraintes techniques :**
- Ratio 16/9 sur home en desktop >1440px (CSS aspect-ratio)
- Scroll mobile à corriger (bug actuel)
- Pas de fonctionnalité offline requise

### Effortless Interactions

1. **Contact omnipresent** — Bouton CTA visible sur toutes les pages, déclenche modale (pas de navigation vers /contact)
2. **Navigation directe** — Header sticky avec 4 liens : Expertise, Mobile, IA, Projets
3. **Micro-copy orienté action** — "Discutons de votre projet" > "Contact"
4. **Cards cliquables** — Chaque service card mène à sa page dédiée
5. **Modale intelligente** — Retour visiteur après 15s : "De retour ? Vous voulez qu'on s'appelle ?"

### Critical Success Moments

| Moment | Timing | Indicateur de succès |
|--------|--------|----------------------|
| First Impression | 0-3s | Le design moderne inspire confiance |
| Service Match | 3-10s | L'utilisateur identifie le service qui lui correspond |
| Trust Building | 10-60s | Portfolio et ton humain rassurent |
| Conversion Trigger | Variable | CTA visible incite au contact |
| Return Engagement | 15s+ | Modale retour visiteur capture les hésitants |

### Experience Principles

| # | Principe | Application |
|---|----------|-------------|
| 1 | **Montrer > Dire** | Le Bento Grid EST le portfolio. Design = preuve de compétence. |
| 2 | **Pro mais Humain** | Ton accessible, "c'est moi qui réponds", pas d'agence froide. |
| 3 | **Bénéfices > Tech** | Focus résultats, pas jargon. "Temps gagné" plutôt que "ML". |
| 4 | **Contact = ROI** | Chaque page converge vers la modale contact. Zéro friction. |

---

## Desired Emotional Response

### Primary Emotional Goals

**Confiance** — L'utilisateur doit sentir qu'il est entre les mains d'un expert compétent. Le design moderne du site EST la preuve de cette compétence.

**Accessibilité** — Malgré l'expertise, Julien reste approchable. Le ton "humain et léger" crée une connexion. "Pas de commercial, c'est moi qui réponds."

**Curiosité** — Particulièrement sur la page IA, l'utilisateur doit avoir envie d'en savoir plus. Les cas d'usage concrets démystifient sans intimider.

**Sérénité** — Pas de stress lié au prix ou à l'engagement. Transparence tarifaire, CTAs doux, pas de pression commerciale.

### Emotional Journey Mapping

| Phase | Émotion | Indicateur de succès |
|-------|---------|---------------------|
| First Impression (0-3s) | Impressed | "Ce site est moderne" |
| Understanding (3-10s) | Clarity | "Je comprends son offre" |
| Exploration (10-60s) | Engaged Curiosity | Navigation vers pages services |
| Trust Building (30s-2min) | Confidence | Temps passé sur portfolio |
| Conversion | Motivated | Clic sur CTA contact |
| Post-Contact | Satisfied | Formulaire envoyé |
| Return Visit (15s+) | Recognized | Interaction avec modale retour |

### Micro-Emotions

**À cultiver :**
- Confiance (vs Scepticisme) → Portfolio + expérience + design
- Curiosité (vs Confusion) → Textes clairs, bénéfices > tech
- Appartenance (vs Exclusion) → Ton PME-friendly
- Motivation (vs Hésitation) → CTAs clairs, friction minimale
- Sérénité (vs Anxiété) → Transparence tarifaire

**À éviter absolument :**
- Intimidation (jargon technique, ton agence froide)
- Frustration (bugs, formulaires complexes)
- Méfiance (absence de portfolio, prix cachés)
- Confusion (navigation peu claire, contenu flou)

### Design Implications

| Émotion | Implication UX |
|---------|----------------|
| Confiance | Animations Framer Motion fluides, shapes 3D, portfolio visible |
| Accessibilité | Micro-copy conversationnel, première personne |
| Curiosité IA | Ton décalé page /ia, cas d'usage concrets sans jargon |
| Sérénité pricing | Mentions "À partir de..." sur cards services |
| Reconnaissance | Modale retour visiteur après 15s |
| Satisfaction | Feedback visuel clair après soumission formulaire |

### Emotional Design Principles

1. **Design = Preuve** — Chaque pixel du site prouve la compétence de Julien. Les animations fluides et le Bento Grid créent la confiance.

2. **Humain > Corporate** — Le ton conversationnel ("c'est moi qui réponds") crée une connexion émotionnelle que les agences ne peuvent pas reproduire.

3. **Démystifier sans infantiliser** — Surtout pour l'IA : vulgariser sans être condescendant. "On commence petit, on grandit ensemble."

4. **Rassurer sur le prix** — La transparence tarifaire (même indicative) élimine l'anxiété qui bloque la conversion.

5. **Reconnaître le retour** — La modale 15s pour les visiteurs de retour crée un sentiment de relation, pas de transaction.

---

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**Linear** — Référence Bento Grid. Animations fluides, dark mode premium, micro-interactions subtiles. Inspiration directe pour le layout home et les transitions cards.

**Stripe** — Clarté exceptionnelle. Chaque page a un objectif clair, CTAs hiérarchisés intelligemment. Inspiration pour la structure des pages services (Expertise, Mobile, IA).

**Vercel** — Palette proche (dark + accent vibrant). Gradient subtils, cards épurées, shapes abstraites. Validation du choix design actuel.

**Notion** — Ton conversationnel qui démystifie la complexité. "Simple, powerful, beautiful." Inspiration pour le copywriting page IA.

**Cal.com** — CTA contact omnipresent sans être intrusif. Modale fluide. Inspiration pour l'expérience de prise de contact.

### Transferable UX Patterns

**Navigation :**
- Header sticky minimal (logo + liens + CTA)
- Cards cliquables comme navigation secondaire
- Pas de mega menu, liens directs

**Interactions :**
- Hover cards avec scale(1.02) + shadow elevation
- Stagger animations sur entrée des cards
- Hero text rotation avec AnimatePresence
- Modale contact slide-in depuis la droite

**Visuels :**
- Dark (#0C0C0C) + accent mint (#53E1A1)
- Cards cream/pastel (#FFF4F3)
- Shapes 3D flottantes
- Gradient subtle pour highlights

**Grid Flexibility :**
- Colonnes : 4 (fixe)
- Lignes : flexible selon le contenu (4 à 6)
- Home : 4×4 strict (contrainte ratio 16/9 desktop)
- Pages services : 4×5 ou 4×6 selon besoin

### Anti-Patterns to Avoid

| Anti-Pattern | Impact négatif |
|--------------|----------------|
| Slider/carousel automatique | Distrait, frustrant, mauvais pour SEO |
| Mega menu | Overkill, complexité inutile |
| Formulaire multi-étapes | Friction, abandon |
| Ton corporate froid | Perte du différenciant humain |
| Prix totalement cachés | Méfiance, prospect non qualifié |
| Animations excessives | Distrait du message, fatigue |
| Chat bot popup | Anti-humain, agaçant |

### Design Inspiration Strategy

**Adopt (tel quel) :**
- Bento Grid 4 colonnes, lignes flexibles
- Dark + mint palette (Vercel)
- Stagger animations (Framer)
- Header sticky minimal

**Adapt (modifier pour infojv) :**
- Hero rotation Apple → 3 accroches Expertise
- Modale Cal.com → Formulaire 3 champs
- Ton Notion → Contexte PME française
- Grid rows adaptées par page (4-6 lignes)

**Avoid (ne pas faire) :**
- Slider auto portfolio
- Booking calendar complexe
- Jargon non vulgarisé
- Tout pattern "agence corporate"

---

## Design System Foundation

### Design System Choice

**Approche :** Custom Design System sur Tailwind CSS 3.4

Le projet utilise un design system custom construit sur Tailwind CSS, avec des composants React spécifiques et Framer Motion pour les animations. Cette approche offre une différenciation visuelle maximale tout en bénéficiant de la productivité de Tailwind.

### Rationale for Selection

1. **Déjà en place** — Le système existe avec 5 composants fonctionnels et des tokens définis
2. **Différenciation** — Le style Bento Grid custom est un différenciant clé (règle "le site = la preuve")
3. **Flexibilité** — Tailwind permet d'ajuster finement sans contrainte de framework UI
4. **Performance** — Pas de dépendance lourde (MUI = +200kb), bundle léger
5. **Cohérence** — Un seul pattern architectural (Tailwind + Framer)

### Implementation Approach

**Stack technique :**
- Next.js 14.2 (App Router)
- Tailwind CSS 3.4 (tokens custom)
- Framer Motion (animations)
- TypeScript (typage strict)

**Structure composants :**
```
src/components/
├── ui/
│   ├── BentoGrid.tsx
│   ├── BentoCard.tsx
│   ├── FloatingShape.tsx
│   ├── Button.tsx
│   └── Icon.tsx
├── contact/
│   ├── ContactModal.tsx
│   └── ReturnVisitorModal.tsx
├── heroes/
│   └── HeroRotating.tsx
└── cards/
    ├── ServiceCard.tsx
    └── ProjectCard.tsx
```

### Customization Strategy

**Tokens existants (tailwind.config.js) :**

| Token | Valeur | Usage |
|-------|--------|-------|
| `bg-page` | #0C0C0C | Fond sombre global |
| `bg-card` | #FFF4F3 | Cards default |
| `bg-card-mint` | #C9F9E3 | Cards mint |
| `accent` | #53E1A1 | CTAs, highlights |
| `font-poppins` | Poppins | Typographie unique |

**Tokens à ajouter :**

| Token | Valeur | Usage |
|-------|--------|-------|
| `gap-grid` | 16px | Espacement grille desktop |
| `gap-grid-mobile` | 12px | Espacement grille mobile |
| `shadow-card-hover` | 0 8px 30px rgba(0,0,0,0.12) | Hover cards |
| `radius-card` | 24px | Border-radius cards |

**Composants à créer :**

| Composant | Description | Dépendances |
|-----------|-------------|-------------|
| `ContactModal` | Modale contact avec formulaire 3 champs | Framer Motion, API Route |
| `ReturnVisitorModal` | Modale trigger 15s pour retour visiteur | Framer Motion, localStorage |
| `HeroRotating` | Hero avec rotation 3 accroches | Framer Motion AnimatePresence |
| `ServiceCard` | Extension BentoCard avec CTA intégré | BentoCard |
| `ProjectCard` | Card projet avec badge, description, résultat | BentoCard |

---

## Defining Core Experience

### The Defining Experience

**Statement :** "Découvrir un expert accessible en 5 secondes, le contacter en 3 clics"

L'expérience définissante d'infojv est la combinaison de :
1. **Impact visuel immédiat** — Le Bento Grid moderne prouve la compétence avant même de lire
2. **Clarté de l'offre** — 4 services identifiables en un coup d'œil
3. **Contact sans friction** — CTA omniprésent, modale instantanée

### User Mental Model

**Comportement type :**
- Recherche Google → Ouvre 3-5 sites freelance en parallèle
- Évalue en 5-10 secondes : "Ce site inspire-t-il confiance ?"
- Cherche : portfolio, prix, moyen de contact
- Compare : qui semble le plus pro ET accessible ?

**Attentes :**
- Design moderne = compétence technique
- Contact visible = entreprise réactive
- Ton humain = pas une agence froide

**Frustrations actuelles :**
- Sites WordPress génériques
- Formulaires complexes
- "Contactez-nous" sans visage

### Success Criteria

| Métrique | Cible | Mesure |
|----------|-------|--------|
| Time to Understand | < 5s | Test utilisateur |
| Clicks to Contact | ≤ 3 | Analytics |
| Form Completion Time | < 30s | Analytics |
| Bounce Rate | < 40% | Analytics |
| Monthly Contacts | 5-10 | CRM |

### Novel UX Patterns

**Établis (safe) :**
- Header sticky avec navigation directe
- CTA button déclenche modale
- Formulaire 3 champs standard

**Semi-novel (différenciant) :**
- Bento Grid comme layout principal
- Hero avec rotation de texte (AnimatePresence)
- Modale retour visiteur (15s trigger)

**Approche :** Innovation visuelle (Bento) + patterns établis pour les actions critiques (contact).

### Experience Mechanics

**Flow Principal :**

```
Arrivée (0s)
    │
    ▼
Impact Visuel (0-3s) ─── "Ce site est moderne"
    │
    ▼
Compréhension (3-10s) ── "Je vois les 4 services"
    │
    ├──► Clic Card ──► Page Service ──► CTA Contact
    │
    └──► Scroll ──► Portfolio/Localisation ──► CTA Contact
                                                    │
                                                    ▼
                                            Modale Contact
                                                    │
                                                    ▼
                                            3 champs + Submit
                                                    │
                                                    ▼
                                            Confirmation + Email
```

**Flow Retour Visiteur :**

```
Retour détecté (localStorage)
    │
    ▼
Timer 15s
    │
    ▼
Modale "De retour ?"
    │
    ├──► "Discutons" ──► Modale Contact
    │
    └──► "Plus tard" ──► Fermer (cookie 24h)
```

---

## Visual Design Foundation

### Color System

**Primary Palette:**

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Background | `bg-page` | #0C0C0C | Page background |
| Card Default | `bg-card` | #FFF4F3 | Standard cards |
| Card Mint | `bg-card-mint` | #C9F9E3 | Accent cards |
| Accent | `accent` | #53E1A1 | CTAs, highlights |
| Text Light | `white` | #FFFFFF | Text on dark |
| Text Dark | `dark` | #1A1A1A | Text on light |

**Semantic Colors:**
- Success: #53E1A1 (accent)
- Error: #FF6B6B
- Warning: #FFD93D

**Gradients:**
- Mint gradient: #FFFFFF → #C9F9E3 (135deg)
- Hero fade: transparent → #0C0C0C (180deg)

### Typography System

**Font Family:** Poppins (Google Fonts)

**Type Scale:**

| Level | Size | Weight | Line-height |
|-------|------|--------|-------------|
| H1 | 48px (3rem) | 700 | 1.2 |
| H2 | 36px (2.25rem) | 600 | 1.25 |
| H3 | 24px (1.5rem) | 600 | 1.3 |
| H4 | 20px (1.25rem) | 500 | 1.4 |
| Body | 16px (1rem) | 400 | 1.6 |
| Body Large | 18px (1.125rem) | 400 | 1.6 |
| Small | 14px (0.875rem) | 400 | 1.5 |
| Button | 16px (1rem) | 500 | 1 |

### Spacing & Layout Foundation

**Spacing Scale (base 4px):**
- xs: 4px | sm: 8px | md: 12px | base: 16px | lg: 24px | xl: 32px | 2xl: 48px

**Grid System:**
- Columns: 4 (fixed)
- Rows: 4-6 (flexible per page)
- Gap: 16px (desktop) / 12px (mobile)
- Max-width: 1440px
- Home ratio: 16/9 on screens ≥1440px

**Breakpoints:**
- sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1440px

### Accessibility Considerations

**Color Contrast:**
- All text combinations exceed WCAG AAA (7:1 ratio)
- Accent color on dark: 9.7:1 (AAA compliant)

**Typography:**
- Minimum body text: 16px
- Maximum line length: 75 characters
- Sufficient line-height for readability (1.5-1.6)

**Interactive Elements:**
- Touch targets: minimum 44×44px
- Focus states: visible outline with accent color
- Hover states: scale + shadow for discoverability

**Motion:**
- Respect `prefers-reduced-motion`
- No auto-playing animations that can't be paused
- Transition durations under 400ms

---

## Design Direction Decision

### Design Directions Explored

**Direction retenue : Bento Grid Dark Premium**

Une seule direction a été explorée car le projet brownfield dispose déjà d'une homepage implémentée avec un style établi. L'objectif est de maintenir la cohérence tout en l'étendant aux nouvelles pages.

**Caractéristiques clés :**
- Dark mode (#0C0C0C) comme base
- Cards pastel (crème #FFF4F3, mint #C9F9E3)
- Accent mint vibrant (#53E1A1)
- Shapes 3D noires flottantes
- Grid 4 colonnes, lignes flexibles

### Chosen Direction

**Direction : Bento Grid Dark Premium (existante)**

| Élément | Choix |
|---------|-------|
| Layout | Bento Grid 4 colonnes |
| Background | Dark #0C0C0C |
| Cards | Pastel (#FFF4F3, #C9F9E3) |
| Accent | Mint #53E1A1 |
| Typography | Poppins 400-700 |
| Shapes | 3D noires, animations float |
| Interactions | Scale + shadow on hover |
| Navigation | Header sticky minimal |

### Design Rationale

1. **Cohérence brownfield** — La homepage existe, il faut étendre le style, pas le changer
2. **Différenciation marché** — Le Bento Grid dark se démarque des sites freelance génériques
3. **Preuve de compétence** — Le design moderne prouve les capacités techniques (règle d'or #5)
4. **Support émotionnel** — Dark = premium, pastel = accessible, mint = moderne

### Implementation Approach

**Pages services (Expertise, Mobile, IA) :**
- Hero 4 colonnes en haut
- Grid services/cas d'usage en dessous
- CTA final en bas
- 4-6 lignes selon contenu

**Page Projets :**
- Hero compact
- 2 projets en cards larges (2 colonnes chacun)
- Section ouverture + CTA

**Modale Contact :**
- Overlay sur page courante
- Slide-in from right
- Background crème (#FFF4F3)
- 3 champs + submit
- Liens alternatifs (email, Twitter)

**Modale Retour Visiteur :**
- Même style que contact
- Trigger après 15s (localStorage)
- Message personnalisé
- CTA direct vers contact

---

## User Journey Flows

### Journey 1: Patrick (Site web moderne)

**Persona:** Président club sportif cherchant prestataire crédible
**Goal:** Trouver un freelance compétent pour un site moderne
**Entry:** Google "freelance site web marseille"

**Flow:**
1. Atterrit sur Home → Impression design (0-3s)
2. Identifie card Projets → Clic
3. Parcourt portfolio (Oroneo, BAS)
4. Convaincu par la qualité → Clic CTA Contact
5. Remplit formulaire → Submit
6. Reçoit confirmation

**Critical Moments:**
- First impression (design = preuve)
- Portfolio discovery (social proof)
- Contact friction (must be minimal)

### Journey 2: Jean-Michel (Prix et devis)

**Persona:** Patron PME sensible au prix
**Goal:** Comprendre l'offre et avoir une idée des tarifs
**Entry:** Google "création site entreprise"

**Flow:**
1. Atterrit sur Home → Voit cards services
2. Clic Expertise → Lit les 4 services
3. Cherche indication prix → "À partir de..."
4. Rassuré → Clic CTA Discutons
5. Mentionne budget dans message
6. Submit → Attend devis personnalisé

**Critical Moments:**
- Prix visibility (évite frustration)
- Service clarity (comprend ce qu'il achète)
- Budget mention (qualifie le lead)

### Journey 3: Lucas (App mobile)

**Persona:** Entrepreneur avec idée d'app
**Goal:** Trouver un dev mobile accessible (pas agence)
**Entry:** Recommandation ou Google

**Flow:**
1. Atterrit sur Home → Identifie card Mobile
2. Clic → Page Mobile
3. Lit bénéfices (base users, notifs, outil métier)
4. Découvre Flutter (1 app, 2 stores)
5. Voit projet Oroneo → Confiance
6. CTA "Parlons de votre projet d'app"
7. Décrit son idée → Submit

**Critical Moments:**
- Technical credibility (Flutter mention)
- Project similarity (Oroneo = proof)
- Accessible tone (freelance, not agency)

### Journey 4: Sophie (Curiosité IA)

**Persona:** DG PME curieuse mais intimidée par l'IA
**Goal:** Comprendre ce que l'IA peut faire pour son business
**Entry:** Curiosité (article, LinkedIn)

**Flow:**
1. Atterrit sur Home → Voit card IA (intriguée)
2. Clic → Page IA
3. Lit Hero "L'IA, c'est pas que pour les grosses sociétés"
4. Aha moment: "C'est pour moi !"
5. Parcourt 4 cas d'usage
6. Identifie son besoin (ex: support client)
7. CTA "Parlons de votre cas" → Submit

**Critical Moments:**
- Demystification (no jargon)
- Use case identification (4 clear options)
- Personal connection (conversational tone)

### Journey 5: Visiteur de Retour

**Persona:** Prospect ayant déjà visité, revient hésitant
**Goal:** Convertir un lead "warm"
**Trigger:** localStorage détecte retour + 15s on page

**Flow:**
1. Retour détecté
2. Timer 15 secondes (confirme engagement)
3. Modale "De retour ? On s'appelle ?"
4. Options: Discutons / Plus tard / X
5. Si Discutons → Modale Contact
6. Submit → Conversion

**Critical Moments:**
- Recognition (personalized message)
- Respect (option to dismiss)
- Low friction (direct to contact)

### Journey Patterns

**Navigation Patterns:**
- Card-to-page: Click service card → dedicated page
- CTA omnipresent: Contact accessible from any page
- Header sticky: Navigation always visible

**Decision Patterns:**
- Service selection: Visual cards with clear labels
- Price indication: "À partir de..." reduces anxiety
- Use case matching: 4 options on IA page

**Feedback Patterns:**
- Hover states: scale + shadow on cards
- Form validation: real-time feedback
- Submit confirmation: animation + message + email

### Flow Optimization Principles

1. **Minimize steps to contact** — Max 3 clicks from any page
2. **Show don't tell** — Portfolio visible early in journey
3. **Reduce anxiety** — Price hints, human tone, no jargon
4. **Respect return visitors** — Recognize without being pushy
5. **Clear success feedback** — Animation + confirmation message

---

## Component Strategy

### Design System Components

**Existing (implemented):**

| Component | Variants | Usage |
|-----------|----------|-------|
| `BentoGrid` | - | 4-column grid container |
| `BentoCard` | default, white, mint, mint-reverse, dark | Standard cards |
| `FloatingShape` | float, rotate, pulse | 3D decorative shapes |
| `Button` | primary, secondary, ghost | CTAs |
| `Icon` | - | Material Symbols wrapper |

### Custom Components

**ContactModal**
- Purpose: Overlay contact form
- Features: 3 fields, validation, success animation
- States: closed, open, submitting, success, error
- Accessibility: dialog role, focus trap, ESC to close

**ReturnVisitorModal**
- Purpose: Engage returning visitors
- Features: 15s delay trigger, localStorage detection
- States: hidden, visible, dismissed (24h cookie)

**HeroRotating**
- Purpose: Animated hero text rotation
- Features: 3+ text pairs, configurable interval
- Animation: AnimatePresence fade/slide

**ServiceCard**
- Purpose: Service card with integrated CTA
- Extends: BentoCard
- Props: icon, title, description, href, variant

**ProjectCard**
- Purpose: Portfolio project card (2-col span)
- Props: badge, title, description, result, image

**Input / Textarea**
- Purpose: Styled form fields
- States: default, focus, error, disabled
- Accessibility: labels, error messages

**Badge**
- Purpose: Category labels
- Variants: default, mint, dark
- Sizes: sm, md

### Component Implementation Strategy

**Build approach:**
1. Use existing Tailwind tokens for consistency
2. Framer Motion for all animations
3. TypeScript strict mode for props
4. Accessibility-first (ARIA, keyboard nav)

**File structure:**
```
src/components/
├── ui/           # Existing + Input, Textarea, Badge
├── contact/      # ContactModal, ReturnVisitorModal
├── heroes/       # HeroRotating
└── cards/        # ServiceCard, ProjectCard
```

### Implementation Roadmap

**Phase 1 — Core (blocking):**
- ContactModal (conversion critical)
- Input / Textarea (form fields)
- HeroRotating (Expertise page)

**Phase 2 — Service Pages:**
- ServiceCard (clickable service cards)
- ProjectCard (portfolio cards)
- Badge (project types)

**Phase 3 — Enhancement:**
- ReturnVisitorModal (secondary conversion)

---

## UX Consistency Patterns

### Button Hierarchy

| Level | Style | Usage |
|-------|-------|-------|
| Primary | Solid accent (#53E1A1), dark text | Main CTA (1 per view) |
| Secondary | Border accent, transparent bg | Secondary actions |
| Ghost | Text only, underline on hover | Tertiary, dismiss actions |

**Rules:**
- Single primary button per visible viewport
- Primary positioned right in button groups
- Ghost for cancel/dismiss actions

### Feedback Patterns

**Success:**
- Animated checkmark + mint background
- Positive message with next action hint
- Auto-dismiss after 3s or redirect

**Error:**
- Red border (#FF6B6B) + warning icon
- Clear explanation + solution
- Inline positioning under affected field

**Loading:**
- Spinner or skeleton based on context
- Button text changes ("Envoi...")
- 10s timeout → error message

### Form Patterns

**Validation Timing:**
- On blur: field-level validation
- On submit: full form validation
- On error: focus first invalid field

**Field States:**
- Default: neutral border, white bg
- Focus: accent border, subtle shadow
- Error: red border, error message below
- Disabled: 50% opacity, not-allowed cursor

**Labels:**
- Always visible (no placeholder-only)
- Required fields marked with red *
- Helper text in gray below if needed

### Navigation Patterns

**Header:**
- Sticky top position
- Content: Logo | Nav links | CTA Contact
- Mobile: Hamburger → fullscreen menu
- On scroll: solid background after 50px

**Card Navigation:**
- Hover: scale(1.02) + shadow elevation
- Cursor: pointer
- Transition: 200ms ease
- Click: Navigate to dedicated page

### Modal Patterns

**Open:**
- Trigger: CTA click
- Animation: slide-in from right (300ms)
- Backdrop: #0C0C0C at 80% opacity
- Body: scroll-lock enabled

**Close:**
- Triggers: X button, backdrop click, ESC key
- Animation: slide-out to right (200ms)
- Focus: return to trigger element

**Accessibility:**
- role="dialog", aria-modal="true"
- Focus trap while open
- ESC key closes modal

### Interaction States

| Element | Hover | Active | Focus |
|---------|-------|--------|-------|
| Card | scale(1.02) + shadow | scale(0.98) | 2px accent outline |
| Primary Button | brightness(1.1) | scale(0.98) | 2px white outline offset |
| Secondary Button | 10% accent bg | scale(0.98) | 2px accent outline |
| Link | underline | accent color | 2px accent outline |
| Input | accent border | - | accent border + shadow |

**Global Transitions:**
- Interaction: 200ms ease
- Transform: 150ms ease

---

## Responsive Design & Accessibility

### Responsive Strategy

**Approach:** Desktop-first with complete mobile adaptation

| Viewport | Grid | Layout |
|----------|------|--------|
| ≥1440px (2xl) | 4 columns | Home with 16/9 ratio |
| 1024-1439px (lg-xl) | 4 columns | Full Bento Grid |
| 768-1023px (md) | 2 columns | Simplified grid |
| <768px (sm) | 1 column | Vertical stack |

**Key Adaptations:**
- Home ratio 16/9 only on 2xl+ screens
- FloatingShapes hidden on mobile (performance)
- Header collapses to hamburger on mobile
- Modal becomes fullscreen on mobile

### Breakpoint Strategy

| Breakpoint | Value | Trigger |
|------------|-------|---------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet → 2 columns |
| lg | 1024px | Desktop → 4 columns |
| xl | 1280px | Desktop standard |
| 2xl | 1440px | Desktop large → ratio 16/9 |

**Implementation:** Mobile-first media queries with Tailwind CSS

### Accessibility Strategy

**Target:** WCAG 2.1 Level AA

**Color Contrast:**
- All text combinations exceed 7:1 (AAA)
- UI elements exceed 3:1 minimum
- Accent on dark: 9.7:1

**Interactive Elements:**
- Touch targets: minimum 44×44px
- Focus states: 2px accent outline
- Keyboard navigation: full Tab support
- Skip links: jump to main content

**Semantic HTML:**
- Proper heading hierarchy (h1 → h2 → h3)
- Landmark regions (nav, main, footer)
- ARIA labels on interactive elements

**Motion:**
- Respect `prefers-reduced-motion`
- No auto-playing animations
- Transitions < 400ms

### Testing Strategy

**Responsive Testing:**
- Real devices: iPhone SE/12/14, Pixel 5, iPad
- Browser DevTools responsive mode
- Cross-browser: Chrome, Firefox, Safari, Edge

**Accessibility Testing:**
- Automated: Lighthouse, axe DevTools
- Screen readers: VoiceOver, NVDA
- Keyboard-only navigation
- Color blindness simulation

**Performance:**
- Mobile: Lighthouse score > 90
- LCP < 2.5s, CLS < 0.1

### Implementation Guidelines

**Responsive Development:**
- Use Tailwind responsive prefixes (sm:, md:, lg:)
- Relative units (rem) for typography
- Fluid spacing with clamp() where appropriate
- Test touch targets on actual devices

**Accessibility Development:**
- Semantic HTML first, ARIA when needed
- Focus trap in modals
- Skip link to main content
- Alt text on decorative images: alt=""
- Form labels always visible

---

