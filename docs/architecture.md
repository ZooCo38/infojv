# Info JV — Architecture

## Vue d'ensemble

Info JV est une application web **Next.js 14** utilisant l'**App Router** avec un design system **Bento Grid** personnalisé. L'architecture est orientée composants avec une séparation claire entre les pages, les composants UI et les utilitaires.

## Diagramme d'architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        NEXT.JS APP                          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    APP ROUTER                        │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │   │
│  │  │ layout  │ │  page   │ │expertise│ │ mobile  │   │   │
│  │  │  .tsx   │ │  .tsx   │ │ /page   │ │ /page   │   │   │
│  │  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘   │   │
│  │       │           │           │           │         │   │
│  │       ▼           ▼           ▼           ▼         │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │              DESIGN SYSTEM                   │   │   │
│  │  │  ┌──────────┐ ┌──────────┐ ┌──────────────┐ │   │   │
│  │  │  │BentoGrid │ │BentoCard │ │FloatingShape │ │   │   │
│  │  │  └──────────┘ └──────────┘ └──────────────┘ │   │   │
│  │  │  ┌──────────┐ ┌──────────┐                  │   │   │
│  │  │  │  Button  │ │   Icon   │                  │   │   │
│  │  │  └──────────┘ └──────────┘                  │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                      STYLING LAYER                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐   │
│  │ Tailwind    │ │ Framer      │ │ globals.css         │   │
│  │ CSS 3.4     │ │ Motion      │ │ (design tokens)     │   │
│  └─────────────┘ └─────────────┘ └─────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                      STATIC ASSETS                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐   │
│  │ Images      │ │ Shapes 3D   │ │ Logos banques       │   │
│  │ (PNG)       │ │ (PNG)       │ │ (SVG/PNG)           │   │
│  └─────────────┘ └─────────────┘ └─────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Stack technique détaillée

### Framework & Runtime

| Composant | Technologie | Version | Rôle |
|-----------|-------------|---------|------|
| Framework | Next.js | 14.2.15 | SSR/SSG, routing, optimisations |
| Runtime | Node.js | >=18 | Serveur de développement |
| Langage | TypeScript | ^5 | Typage statique |

### Styling & UI

| Composant | Technologie | Version | Rôle |
|-----------|-------------|---------|------|
| CSS | Tailwind CSS | 3.4.1 | Utility-first styling |
| Animations | Framer Motion | 12.23.26 | Animations fluides |
| Class Utils | clsx + tailwind-merge | 2.1.1 / 3.4.0 | Merge conditionnel classes |
| Icônes | Material Symbols | CDN | Icônes Google |
| Font | Poppins | Google Fonts | Typographie unique |

### Build & Dev

| Composant | Technologie | Rôle |
|-----------|-------------|------|
| Bundler | Webpack | Build production (pas Turbopack) |
| Linting | ESLint | Qualité code |
| PostCSS | PostCSS 8 | Processing Tailwind |

## Pattern architectural

### Component-Based Architecture

L'application suit un pattern **component-based** avec :

1. **Pages** (`src/app/*/page.tsx`) : Composent les layouts de page
2. **Components** (`src/components/ui/`) : Briques réutilisables
3. **Utilities** (`src/lib/`) : Fonctions helper

### Design System Bento

Le design system est basé sur un **grid Bento** :

```tsx
// BentoGrid - Container principal
<BentoGrid className="grid-cols-4 grid-rows-4">
  <BentoCard variant="default" className="col-span-1 row-span-2">
    {/* Contenu */}
  </BentoCard>
</BentoGrid>
```

### Variantes de BentoCard

| Variante | Background | Texte | Usage |
|----------|------------|-------|-------|
| `default` | #FFF4F3 (crème) | Noir | Cards standard |
| `white` | #FFFFFF | Noir | Cards blanches |
| `mint` | #C9F9E3 | Noir | Cards accent |
| `mint-reverse` | Gradient | Mint | Cards inversées |
| `dark` | #0C0C0C | Blanc | Cards sombres |

### Animations FloatingShape

```tsx
// Animation de flottement avec Framer Motion
<FloatingShape
  src="/assets/shape_3D/Pill-Black-Matte.png"
  variant="float" // ou "rotate", "pulse"
/>
```

## Structure des données

### Pas de base de données

Le site est **statique** sans base de données. Toutes les données sont :
- Hardcodées dans les composants
- Assets statiques dans `/public/`

### Configuration

Les tokens de design sont définis dans :

**tailwind.config.ts** :
```ts
colors: {
  'bg-page': '#0C0C0C',
  'bg-card': '#FFF4F3',
  'accent': '#53E1A1',
  // ...
}
```

**globals.css** :
```css
:root {
  /* Variables CSS pour le theming */
}
```

## Routing

### App Router (Next.js 14)

| Route | Fichier | Description |
|-------|---------|-------------|
| `/` | `app/page.tsx` | Page d'accueil |
| `/expertise` | `app/expertise/page.tsx` | Page expertise |
| `/mobile` | `app/mobile/page.tsx` | À créer |
| `/projets` | `app/projets/page.tsx` | À créer |
| `/ia` | `app/ia/page.tsx` | À créer |
| `/contact` | `app/contact/page.tsx` | À créer |

### Layout partagé

`app/layout.tsx` définit :
- HTML structure (`<html>`, `<body>`)
- Font Poppins (Google Fonts)
- Metadata (title, description)
- Background sombre (`bg-page`)

## Déploiement

### Environnement cible

- **Plateforme** : Vercel (recommandé)
- **Build** : `next build`
- **Output** : Static + SSR

### Configuration Next.js

```js
// next.config.mjs
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};
```

## Contraintes techniques

### À respecter

1. **Next.js 14.2.x** — Ne pas utiliser v15
2. **Tailwind CSS 3.4.x** — Ne pas utiliser v4
3. **Webpack** — Ne pas utiliser Turbopack
4. **Poppins** — Font unique
5. **Design tokens** — Utiliser les couleurs du design system

### Performance

- Images optimisées (AVIF/WebP)
- Lazy loading des shapes 3D
- SSG pour les pages statiques

## Évolutions futures

### Pages à implémenter

1. `/mobile` — Développement mobile
2. `/projets` — Portfolio des projets
3. `/ia` — Services IA
4. `/contact` — Formulaire de contact

### Fonctionnalités potentielles

- Formulaire de contact (serverless function)
- Animations de scroll (Framer Motion)
- Mode sombre (déjà dark by default)
- SEO avancé (sitemap, robots.txt)

---

*Documentation générée le 2026-01-06 par BMad Method*
