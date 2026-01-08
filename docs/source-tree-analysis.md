# Info JV — Analyse de l'arborescence source

## Vue d'ensemble

```
infojv/
├── .claude/                    # Configuration Claude Code
│   └── CLAUDE.md               # Instructions projet
├── .next/                      # Build Next.js (généré)
├── docs/                       # 📁 Documentation projet
│   ├── planning-artifacts/     # Artefacts de planification BMM
│   └── implementation-artifacts/
├── node_modules/               # Dépendances (généré)
├── public/                     # 📁 Assets statiques
│   └── assets/
├── src/                        # 📁 Code source principal
│   ├── app/                    # Pages Next.js (App Router)
│   ├── components/             # Composants React
│   └── lib/                    # Utilitaires
├── _bmad/                      # Configuration BMad Method
├── package.json                # Dépendances npm
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
└── next.config.mjs             # Configuration Next.js
```

## Répertoires critiques

### `/src/app/` — Pages Next.js (App Router)

Point d'entrée principal de l'application.

```
src/app/
├── favicon.ico                 # Icône du site
├── fonts/                      # Polices locales
│   ├── GeistMonoVF.woff
│   └── GeistVF.woff
├── globals.css                 # Styles globaux + design system
├── layout.tsx                  # 🎯 Layout racine (Poppins, metadata)
├── page.tsx                    # 🎯 Page d'accueil (/)
└── expertise/
    └── page.tsx                # 🎯 Page expertise (/expertise)
```

**Points d'entrée :**
- `layout.tsx` : Définit le layout HTML, charge Poppins, configure les metadata
- `page.tsx` : Page d'accueil avec le grid Bento complet
- `expertise/page.tsx` : Page expertise avec grid Bento dédié

### `/src/components/ui/` — Design System

Composants réutilisables du design system Bento.

```
src/components/ui/
├── BentoGrid.tsx               # 🎯 Container grid CSS
├── BentoCard.tsx               # 🎯 Cards avec 5 variantes
├── FloatingShape.tsx           # 🎯 Shapes 3D animées (Framer Motion)
├── Button.tsx                  # Boutons CTA
└── Icon.tsx                    # Wrapper Material Symbols
```

### `/src/lib/` — Utilitaires

```
src/lib/
└── utils.ts                    # Fonction cn() pour merge classes Tailwind
```

### `/public/assets/` — Assets statiques

```
public/assets/
├── Julien-Villard.png          # Portrait détouré de Julien
├── mobile.png                  # Mockup téléphone
├── preview.png                 # Preview design (référence)
├── shape_3D/                   # Formes 3D noires (8 fichiers)
│   ├── Cone.png
│   ├── Cylinder-Black-Matte.png
│   ├── Pill-Black-Matte.png
│   ├── RoundCube-Black-Matte.png (+ variantes)
│   └── SuperToroid-Black-Matte.png (+ variantes)
└── logos-banque/               # Logos clients bancaires
    ├── bnp.svg                 # BNP (non utilisé ?)
    ├── bp.svg                  # Banque Populaire
    └── epargne.png             # Caisse d'Épargne
```

## Fichiers de configuration

| Fichier | Rôle |
|---------|------|
| `package.json` | Dépendances et scripts npm |
| `tsconfig.json` | Config TypeScript (paths @/*) |
| `tailwind.config.ts` | Design tokens (couleurs, fonts, radius) |
| `next.config.mjs` | Config Next.js (images AVIF/WebP) |
| `postcss.config.mjs` | Config PostCSS pour Tailwind |
| `.eslintrc.json` | Règles ESLint |

## Conventions de nommage

- **Composants** : PascalCase (`BentoCard.tsx`)
- **Pages** : `page.tsx` dans dossier route (App Router)
- **Utilitaires** : camelCase (`utils.ts`)
- **Assets** : kebab-case avec majuscules pour noms propres

## Pages à créer

| Route | Fichier à créer |
|-------|-----------------|
| `/mobile` | `src/app/mobile/page.tsx` |
| `/projets` | `src/app/projets/page.tsx` |
| `/ia` | `src/app/ia/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

---

*Documentation générée le 2026-01-06 par BMad Method*
