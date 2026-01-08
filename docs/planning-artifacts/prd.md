---
stepsCompleted: [1, 2, 3, 4, 7, 8, 9, 10, 11]
inputDocuments:
  - 'docs/analysis/brainstorming-session-2026-01-06.md'
  - 'docs/content-pages-infojv.md'
  - 'docs/project-overview.md'
workflowType: 'prd'
lastStep: 11
status: completed
completed_at: '2026-01-07'
skippedSteps: [5, 6]
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 1
  projectDocs: 2
---

# Product Requirements Document - infojv

**Author:** romain
**Date:** 2026-01-07

## Executive Summary

### Vision

Info JV est la refonte du site vitrine de Julien Villard, expert digital indépendant avec 20+ ans d'expérience. L'objectif est de créer un site moderne en Bento Grid qui inspire **confiance et accessibilité**, tout en générant des **demandes de contact** qualifiées.

Le site existant (Next.js 14.2, Tailwind, Framer Motion) dispose d'une homepage et d'une page expertise. Cette refonte ajoute 4 nouvelles pages (Mobile, Projets, IA, Contact), une grille tarifaire, et corrige les problèmes existants (ratio 16/9, scroll mobile, refonte expertise).

**Pivot stratégique :** Focus sur Dev Web, Mobile, IA, Automatisation. Les services mariage/photos/asso sont retirés du messaging (dilution du positionnement pro).

### Problème résolu

Les PME, clubs et entrepreneurs cherchent un prestataire digital de confiance mais sont souvent intimidés par :
- Des agences froides et des devis opaques
- Un jargon technique incompréhensible
- L'impression que "c'est pas pour eux"

Info JV leur dit : "C'est accessible, c'est humain, voici les tarifs."

### Cible utilisateurs

| Persona | Besoin | Déclencheur contact |
|---------|--------|---------------------|
| Président club sportif | Site moderne | Portfolio visuel |
| Patron PME | Visibilité web | **Prix accessibles** + exemples |
| Entrepreneur | App mobile | Contact facile, pas trop "agence" |
| DG PME | IA/Automatisation | Cas d'usage sans jargon |

### Ce qui rend ce projet spécial

**Positionnement unique :** Expert freelance accessible — pas une agence, pas un amateur.

**Différenciateurs clés :**
- **Confiance** : 20 ans d'expérience, clients banque/assurance, portfolio concret
- **Simplicité** : Ton humain, zéro bullshit, bénéfices avant technique
- **Accessibilité** : Grille tarifaire visible ("à partir de..."), contact direct avec Julien
- **Le site = la preuve** : Design moderne Bento Grid qui démontre le savoir-faire

**Objectif émotionnel visiteur :**
> "Ce mec a l'air compétent, accessible, et ses tarifs sont clairs. Je le contacte."

### Parcours utilisateur cible

```
Home (Bento 16/9) → Service (bénéfices + tarif) → Projets (preuves) → Contact (CTA)
```

**Hiérarchie CTAs :**
- CTA principal sur chaque page → Contact
- CTAs secondaires → Navigation vers services connexes
- Contact omniprésent (header/footer) mais non intrusif

## Project Classification

**Technical Type:** web_app (Next.js App Router)
**Domain:** general (site vitrine services)
**Complexity:** low
**Project Context:** Brownfield — extension système existant

### Scope technique

| Catégorie | Détail |
|-----------|--------|
| **Stack** | Next.js 14.2, TypeScript, Tailwind 3.4, Framer Motion |
| **Pages existantes** | `/` (fix ratio 16/9 via CSS aspect-ratio + scroll mobile), `/expertise` (refonte complète) |
| **Pages à créer** | `/mobile`, `/projets`, `/ia`, `/contact` |
| **Feature ajoutée** | Grille tarifaire (emplacement à définir : `/expertise` ou encarts) |
| **Formulaire** | API Route Next.js + nodemailer (SMTP) ou EmailJS (gratuit, sans fees) |
| **Email** | mailto: simple |
| **Responsive** | Mobile-first, ratio 16/9 desktop home uniquement |

## Success Criteria

### User Success

**Objectif :** Le visiteur trouve une réponse à son besoin (site web, app mobile, accompagnement IA) et repart convaincu que Julien est le bon choix.

**Indicateurs de succès utilisateur :**
- Visiteur identifie rapidement le service qui correspond à son besoin
- Visiteur voit des preuves concrètes (portfolio, références banques)
- Visiteur comprend les tarifs sans chercher ("à partir de...")
- Visiteur ressent : confiance, simplicité, accessibilité

**Moment déclic :** Variable selon persona
- Patron PME → Grille tarifaire accessible
- Entrepreneur → Portfolio Oroneo
- DG PME → Cas d'usage IA concrets

### Business Success

**À 3 mois :**
- 5-10 contacts prospects entrants par mois
- Site fonctionnel et responsive sur tous devices

**À 12 mois :**
- Augmentation du chiffre d'affaires
- Panier moyen des affaires +20%
- Plus de clients PME de qualité
- Nouveaux chantiers IA

**Métrique principale :** Nombre de contacts générés via le site

### Technical Success

| Critère | Cible |
|---------|-------|
| Performance Lighthouse | > 90 |
| Ratio 16/9 Home | Respecté > 1440px (CSS aspect-ratio) |
| Scroll mobile | Fonctionnel sur toutes pages |
| Responsive | Mobile-first, testé iOS/Android |
| Formulaire contact | API Route + SMTP opérationnel |
| Temps de chargement | < 3s sur 3G |

### Measurable Outcomes

| Métrique | Baseline | Cible 3 mois | Cible 12 mois |
|----------|----------|--------------|---------------|
| Contacts/mois | ~0 | 5-10 | 10-15 |
| Temps moyen sur site | - | > 2 min | > 3 min |
| Taux rebond | - | < 50% | < 40% |
| Pages/session | - | > 2.5 | > 3 |

## Product Scope

### MVP - Minimum Viable Product

**Pages à livrer :**
- `/` — Fix ratio 16/9 + correction scroll mobile
- `/expertise` — Refonte complète avec grille tarifaire
- `/mobile` — Bénéfices + référence Oroneo
- `/projets` — Portfolio (Oroneo, BAS)
- `/ia` — Cas d'usage PME accessibles
- `/contact` — Modale avec mailto + formulaire (API Route + SMTP)

**Exigences transversales MVP :**
- Responsive mobile-first
- Design cohérent Bento Grid
- CTAs contact sur chaque page
- Performance Lighthouse > 90

### Growth Features (Post-MVP)

- **Trigger engagement 3 min** — Modale contact contextuelle après 3 min sur le site
- **Trigger visiteur retour** — Modale après 15s "De retour ? Vous voulez qu'on s'appelle ?"
- **Agent conversationnel** — Chatbot IA pour qualification leads (Crisp, Intercom, ou custom)
- **Analytics avancés** — Tracking parcours utilisateur, heatmaps
- **SEO** — Optimisation meta descriptions, sitemap, rich snippets

### Vision (Future)

- **Espace client** — Suivi de projet en ligne
- **Booking intégré** — Calendly pour prise de RDV directe
- **Témoignages dynamiques** — Section avis clients
- **Blog/Actualités** — Contenu SEO long terme

## User Journeys

### Parcours 1 : Patrick — Le président qui veut moderniser son club

Patrick, 52 ans, préside l'AS Peypin depuis 8 ans. Le site du club date de 2015 — menu hamburger cassé, photos pixelisées, impossible à modifier. Chaque fois qu'un sponsor demande le lien, il a un peu honte. "On a 200 licenciés mais on ressemble à un club amateur."

Un soir, après un match, un parent lui parle d'un "gars du coin qui fait des sites modernes, pas cher". Patrick tape "Info JV" sur son téléphone. Le site s'ouvre — **propre, moderne, pro**. Il pense immédiatement : "Si son site ressemble à ça, il peut faire pareil pour nous."

Il clique sur **Projets**, voit des réalisations concrètes. Puis **Expertise** — les tarifs "à partir de 800€" le rassurent. C'est dans le budget du club. Il clique sur **Contact**, remplit le formulaire en 30 secondes. Le lendemain matin, Julien répond personnellement. Une semaine plus tard, le club a un devis.

**Moment déclic :** Le site d'Info JV lui-même = la preuve.

### Parcours 2 : Jean-Michel — Le patron PME obsédé par les prix

Jean-Michel, 48 ans, dirige une PME de 15 employés dans le BTP. Son site actuel ? "Un truc que mon neveu a fait en 2018." Il veut être visible sur Google quand les clients cherchent "plombier Marseille" mais les agences qu'il a contactées demandent 5000€ minimum. "C'est du vol."

Il cherche "création site web Marseille pas cher" — tombe sur Info JV. Premier réflexe : chercher les prix. Il trouve **Expertise**, scroll jusqu'à la grille tarifaire. "À partir de 1200€ pour un site pro." Il respire. C'est raisonnable.

Il parcourt les **Projets** — des vrais sites, pas des maquettes. Il note les références banques — "Si les banques lui font confiance, c'est qu'il est sérieux." Il clique sur **Contact**, hésite, puis voit "Pas de commercial, c'est moi qui réponds." Il envoie : "Bonjour, je cherche un site simple pour ma boîte de plomberie."

**Moment déclic :** Grille tarifaire visible + "c'est moi qui réponds".

### Parcours 3 : Lucas — L'entrepreneur qui rêve d'une app

Lucas, 32 ans, a une idée d'application depuis 2 ans — un outil de gestion pour les coachs sportifs. Il a contacté 3 agences : devis entre 25k et 80k€. "Ils me parlent de sprints, de backlog, de MVP... Je veux juste mon app."

Un ami lui dit : "Contacte Julien, il a fait Oroneo, c'est propre." Lucas va sur Info JV, clique direct sur **Mobile**. Il lit "Votre idée mérite une app" — ça lui parle. Il voit Oroneo en référence, télécharge l'app pour voir. **C'est exactement le niveau qu'il veut.**

Il lit "Flutter : une app, deux stores" — il comprend que c'est efficace. Il scroll, voit le CTA "Parlons de votre projet d'app". Il clique, tombe sur la modale contact. Pas de formulaire à 15 champs, juste nom/email/message. Il écrit son idée en 3 lignes.

**Moment déclic :** Voir Oroneo en action + simplicité du contact.

### Parcours 4 : Sophie — La DG qui veut comprendre l'IA

Sophie, 45 ans, dirige une PME de services. Elle entend parler d'IA partout — "ChatGPT va révolutionner..." — mais concrètement, elle ne sait pas par où commencer. Elle a peur de se faire avoir par des vendeurs de rêve.

En cherchant "IA pour PME Marseille", elle tombe sur Info JV. Elle clique sur **IA**. Premier titre : "L'IA, c'est pas que pour les grosses sociétés." Elle sourit. Elle lit les cas d'usage : "Un assistant qui répond à vos clients 24h/24", "Notes de frais automatiques", "Analysez vos ventes sans être expert data."

**C'est concret. Pas de jargon.** Elle comprend enfin ce que l'IA pourrait faire pour elle. Le CTA dit "Curieux ? Parlons de votre cas. Pas de blabla." Elle clique, remplit le formulaire : "Je voudrais automatiser le traitement des demandes clients."

**Moment déclic :** Cas d'usage en langage PME + "pas de blabla".

### Parcours 5 : Le visiteur de retour (Growth Feature)

Deux semaines après sa première visite, Jean-Michel revient sur Info JV. Il veut montrer le site à son associé pour valider le budget. Après 15 secondes, une modale apparaît :

> "De retour ? Vous voulez qu'on s'appelle ? Ce sera peut-être plus simple."

Jean-Michel pense "Tiens, il a vu que je suis revenu." Il clique, entre son numéro. Julien le rappelle dans l'heure.

**Capabilities révélées :** Détection retour visiteur (localStorage), modale contextuelle, CTA téléphone.

### Journey Requirements Summary

| Parcours | Capabilities clés |
|----------|-------------------|
| Patrick (club) | Portfolio visuel, tarifs clairs, formulaire simple |
| Jean-Michel (PME) | Grille tarifaire, références crédibilité, ton humain |
| Lucas (app) | Référence mobile (Oroneo), techno accessible, contact fluide |
| Sophie (IA) | Cas d'usage concrets, vulgarisation, CTA rassurant |
| Visiteur retour | Détection retour (localStorage), modale contextuelle, rappel téléphone |

**Exigences fonctionnelles révélées :**
- Portfolio avec visuels de qualité
- Grille tarifaire visible et rassurante
- Formulaire contact minimaliste (nom, email, message)
- Références clients (banques) pour crédibilité
- Cas d'usage IA vulgarisés
- Référence mobile téléchargeable (Oroneo)
- CTA "c'est moi qui réponds" pour humaniser
- Détection visiteur retour (Growth)

## Web App Specific Requirements

### Project-Type Overview

Info JV est une **web app statique/SSG** construite avec Next.js 14.2 App Router. Le site est un MPA (Multi-Page Application) avec des pages distinctes pour chaque service. L'objectif principal est la génération de leads via un design moderne et une navigation fluide.

### Browser Support Matrix

| Navigateur | Version minimale | Priorité |
|------------|------------------|----------|
| Chrome | 90+ | Haute |
| Firefox | 88+ | Haute |
| Safari | 14+ | Haute |
| Edge | 90+ | Haute |
| Safari iOS | 14+ | **Critique** |
| Chrome Android | 90+ | **Critique** |
| IE11 | Non supporté | — |

**Note :** Mobile-first obligatoire. Tests prioritaires sur iOS Safari et Chrome Android.

### Responsive Design Strategy

| Breakpoint | Largeur | Priorité |
|------------|---------|----------|
| Mobile | < 640px | **Critique** |
| Tablet | 640px - 1024px | Haute |
| Desktop | 1024px - 1440px | Haute |
| Large Desktop | > 1440px | Moyenne |

**Contrainte spéciale Home :**
- Ratio 16/9 maintenu via `aspect-ratio` CSS
- `max-width` pour éviter étirement sur grands écrans
- Bento grid adaptatif (4 cols → 2 cols → 1 col)

### Performance Targets

| Métrique | Cible | Outil |
|----------|-------|-------|
| Lighthouse Performance | > 90 | Lighthouse CI |
| Lighthouse SEO | > 90 | Lighthouse CI |
| Lighthouse Accessibility | > 85 | Lighthouse CI |
| First Contentful Paint | < 1.5s | Web Vitals |
| Largest Contentful Paint | < 2.5s | Web Vitals |
| Cumulative Layout Shift | < 0.1 | Web Vitals |
| Time to Interactive | < 3s | Web Vitals |

**Optimisations prévues :**
- Images optimisées (Next.js Image component, WebP)
- Font preloading (Poppins)
- Code splitting automatique (Next.js)
- Static generation (SSG) pour toutes les pages

### SEO Strategy

**Fondamentaux MVP :**
- Meta titles uniques par page
- Meta descriptions optimisées
- Balises Open Graph (partage social)
- Sitemap.xml automatique
- robots.txt configuré
- URLs propres et sémantiques

**Structure URL :**
```
/                 → Accueil
/expertise        → Services & tarifs
/mobile           → Développement mobile
/projets          → Portfolio
/ia               → Services IA
```

**Growth SEO (post-MVP) :**
- Rich snippets (LocalBusiness schema)
- Données structurées (Service, Person)
- Google Search Console setup
- Optimisation images (alt texts)

### Accessibility Level

**Cible :** WCAG 2.1 Level A (standard)

**Checklist MVP :**
- Contraste texte suffisant (4.5:1 minimum)
- Navigation clavier fonctionnelle
- Alt texts sur toutes les images
- Labels sur les champs de formulaire
- Focus visible sur éléments interactifs
- Structure heading hiérarchique (h1 → h2 → h3)

**Non requis (Level AA/AAA) :**
- Sous-titres vidéo
- Transcriptions audio
- Mode haut contraste

### Technical Implementation Notes

**Stack confirmé :**
- Next.js 14.2 (App Router, SSG)
- TypeScript strict
- Tailwind CSS 3.4 (utility-first)
- Framer Motion (animations)

**Formulaire contact :**
- API Route Next.js (`/api/contact`)
- nodemailer + SMTP (Gmail ou autre)
- Alternative : EmailJS (client-side, gratuit 200/mois)
- Validation côté client + serveur
- Honeypot anti-spam

**Assets :**
- Images optimisées via `next/image`
- Icônes Material Symbols (font ou SVG)
- Shapes 3D en PNG optimisés

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**Approche MVP :** Problem-Solving MVP
- Focus sur la génération de contacts qualifiés
- Minimum features pour valeur maximale
- Pas de features "nice-to-have" avant validation

**Ressources MVP :**
- 1 développeur
- Stack existante (Next.js, Tailwind, Framer Motion)
- Pas de dépendances externes complexes

### MVP Feature Set (Phase 1) — Confirmé

**Parcours utilisateur supportés :**
- Patrick (club) → Portfolio + Tarifs + Contact
- Jean-Michel (PME) → Tarifs + Références + Contact
- Lucas (app) → Mobile + Oroneo + Contact
- Sophie (IA) → IA + Cas d'usage + Contact

**Must-Have Capabilities :**
1. Fix Home (ratio 16/9, scroll mobile)
2. Refonte Expertise (grille tarifaire)
3. Page Mobile (Oroneo, Flutter)
4. Page Projets (portfolio)
5. Page IA (cas d'usage PME)
6. Contact (modale mailto + formulaire SMTP)
7. SEO fondamentaux (meta, sitemap, robots.txt)
8. Responsive mobile-first

### Post-MVP Features — Confirmé

**Phase 2 (Growth) :**
- Trigger engagement 3 min
- Trigger visiteur retour (15s)
- Agent conversationnel
- Analytics avancés
- Rich snippets SEO

**Phase 3 (Vision) :**
- Espace client
- Calendly intégré
- Témoignages dynamiques
- Blog/Actualités

### Risk Mitigation Strategy

**Risques techniques :**
| Risque | Mitigation |
|--------|------------|
| Formulaire SMTP | Fallback EmailJS si config complexe |
| Ratio 16/9 | CSS natif aspect-ratio + max-width |
| Performance | Lighthouse CI en pré-commit |

**Risques marché :**
| Risque | Mitigation |
|--------|------------|
| Trafic SEO | Fondamentaux MVP + Google Search Console |
| Conversion | CTA clairs + grille tarifaire visible |

**Risques ressource :**
| Risque | Mitigation |
|--------|------------|
| Scope contenu | Copywriting déjà fait (brainstorming) |
| Complexité | Stack existante, pas de nouvelle techno |

## Functional Requirements

### Navigation & Structure

- FR1: Visiteur peut naviguer entre les pages via un menu principal
- FR2: Visiteur peut accéder à la page Contact depuis n'importe quelle page
- FR3: Visiteur peut revenir à l'accueil via le logo Info JV
- FR4: Visiteur peut voir la page d'accueil avec un layout Bento Grid

### Page Accueil

- FR5: Visiteur peut voir les chiffres clés (50+ projets, 20+ ans)
- FR6: Visiteur peut voir les services proposés avec liens vers pages dédiées
- FR7: Visiteur peut voir les références banques (Caisse d'Épargne, Banque Populaire, La Banque Postale)
- FR8: Visiteur peut voir la localisation (Marseille, Peypin, Aix)
- FR9: Visiteur peut voir un CTA Contact clair

### Page Expertise (Services & Tarifs)

- FR10: Visiteur peut voir les 4 services proposés (Dev Web, Mobile, IA, Automatisation)
- FR11: Visiteur peut voir une grille tarifaire avec prix "à partir de..."
- FR12: Visiteur peut voir une accroche hero rotative (3 messages)
- FR13: Visiteur peut naviguer vers les pages services spécifiques

### Page Mobile

- FR14: Visiteur peut comprendre les bénéfices d'une app mobile
- FR15: Visiteur peut voir la technologie utilisée (Flutter)
- FR16: Visiteur peut voir une référence projet (Oroneo)
- FR17: Visiteur peut accéder à un CTA Contact spécifique mobile

### Page Projets (Portfolio)

- FR18: Visiteur peut voir les projets réalisés avec visuels
- FR19: Visiteur peut voir les détails d'un projet (type, description, résultat)
- FR20: Visiteur peut voir le projet Oroneo (app mobile + IA)
- FR21: Visiteur peut voir le projet BAS (automatisation)
- FR22: Visiteur peut accéder à un CTA Contact après consultation portfolio

### Page IA

- FR23: Visiteur peut comprendre l'approche IA accessible PME
- FR24: Visiteur peut voir les cas d'usage concrets (compagnon marque, aide admin, aide stratégique, agents)
- FR25: Visiteur peut voir un messaging anti-jargon
- FR26: Visiteur peut accéder à un CTA Contact spécifique IA

### Contact & Lead Generation

- FR27: Visiteur peut ouvrir une modale de contact depuis n'importe quelle page
- FR28: Visiteur peut envoyer un email via mailto
- FR29: Visiteur peut soumettre un formulaire (nom, email, message)
- FR30: Visiteur peut voir le message "Pas de commercial, c'est moi qui réponds"
- FR31: Système envoie le formulaire à Julien par email (SMTP)
- FR32: Système affiche une confirmation après envoi formulaire

### SEO & Discoverability

- FR33: Système génère des meta titles uniques par page
- FR34: Système génère des meta descriptions optimisées par page
- FR35: Système génère les balises Open Graph pour partage social
- FR36: Système génère un sitemap.xml automatique
- FR37: Système expose un robots.txt configuré

### Responsive & Display

- FR38: Visiteur peut consulter le site sur mobile (< 640px)
- FR39: Visiteur peut consulter le site sur tablette (640-1024px)
- FR40: Visiteur peut consulter le site sur desktop (1024-1440px)
- FR41: Page accueil respecte ratio 16/9 sur écrans > 1440px
- FR42: Page accueil est scrollable sur mobile

### Growth Features (Post-MVP)

- FR43: Système détecte un visiteur de retour (localStorage)
- FR44: Système affiche une modale contextuelle après 15s pour visiteur retour
- FR45: Système affiche une modale engagement après 3 min sur le site

## Non-Functional Requirements

### Performance

| NFR | Critère | Mesure |
|-----|---------|--------|
| NFR1 | Lighthouse Performance Score | > 90 |
| NFR2 | First Contentful Paint | < 1.5s |
| NFR3 | Largest Contentful Paint | < 2.5s |
| NFR4 | Cumulative Layout Shift | < 0.1 |
| NFR5 | Time to Interactive | < 3s |
| NFR6 | Temps chargement initial (3G) | < 3s |

**Justification :** Le site est la vitrine de Julien. Si le site est lent, le prospect pense "il ne sait pas faire".

### Sécurité

| NFR | Critère |
|-----|---------|
| NFR7 | Formulaire protégé par honeypot anti-spam |
| NFR8 | HTTPS obligatoire (certificat SSL) |
| NFR9 | Headers de sécurité standards (X-Frame-Options, CSP basic) |
| NFR10 | Pas de stockage de données utilisateur côté serveur |

**Justification :** Risque minimal (pas de données sensibles), mais bonnes pratiques requises.

### Accessibilité

| NFR | Critère |
|-----|---------|
| NFR11 | WCAG 2.1 Level A |
| NFR12 | Contraste minimum 4.5:1 |
| NFR13 | Navigation clavier fonctionnelle |
| NFR14 | Alt texts sur toutes images |
| NFR15 | Focus visible sur éléments interactifs |

**Justification :** Standard web, pas de certification mais bonnes pratiques.

### SEO

| NFR | Critère |
|-----|---------|
| NFR16 | Lighthouse SEO Score > 90 |
| NFR17 | Mobile-friendly (Google) Pass |
| NFR18 | Core Web Vitals Pass |

**Justification :** Le site doit être trouvable sur Google.

### Compatibilité

| NFR | Critère |
|-----|---------|
| NFR19 | Chrome 90+ supporté |
| NFR20 | Firefox 88+ supporté |
| NFR21 | Safari 14+ supporté |
| NFR22 | Edge 90+ supporté |
| NFR23 | Safari iOS 14+ supporté |
| NFR24 | Chrome Android 90+ supporté |
| NFR25 | IE11 non supporté |

**Justification :** Navigateurs modernes uniquement, focus mobile.

### Fiabilité

| NFR | Critère |
|-----|---------|
| NFR26 | Uptime cible > 99% (Vercel standard) |
| NFR27 | Formulaire fallback mailto si SMTP échoue |

**Justification :** Site statique hébergé sur Vercel = haute fiabilité native.

