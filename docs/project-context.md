---
project_name: 'infojv'
user_name: 'romain'
date: '2026-01-07'
sections_completed: ['technology_stack', 'implementation_rules', 'anti_patterns']
status: 'complete'
---

# Project Context for AI Agents

_Critical rules and patterns for implementing code in infojv. Focus on unobvious details._

---

## Technology Stack & Versions

| Technology | Version | CRITICAL |
|------------|---------|----------|
| Next.js | 14.2.15 | NE PAS upgrader vers v15 |
| Tailwind CSS | 3.4.1 | NE PAS upgrader vers v4 |
| React | ^18 | |
| TypeScript | ^5 | strict mode |
| Framer Motion | ^12.23.26 | |
| Bundler | Webpack | NE PAS utiliser Turbopack |

## Critical Implementation Rules

### Version Locks (CRITICAL)

- **Next.js 14.2.x** — v15 introduit des breaking changes incompatibles
- **Tailwind 3.4.x** — v4 change la syntaxe de configuration
- **Webpack only** — Turbopack instable avec cette configuration

### TypeScript Rules

- Mode `strict: true` activé — pas de `any` sauf justification
- Path alias obligatoire : `@/` pour tous les imports depuis `./src/`
- Interfaces props : `ComponentNameProps` (pas `IComponentName`)

### React/Next.js Rules

- App Router uniquement (pas de pages directory)
- Functional components uniquement
- Hooks : `useState`, `useContext` — pas de Redux
- Images : `next/image` pour optimisation automatique

### Tailwind CSS Rules

- Utiliser les tokens custom définis dans `tailwind.config.ts`
- Couleurs : `bg-page`, `bg-card`, `bg-card-mint`, `accent`
- Border radius : `rounded-lg` (24px) pour les cards
- Font : `font-poppins` uniquement
- Class merging : toujours utiliser `cn()` de `@/lib/utils`

### Component Patterns

- Fichiers : PascalCase (`ContactModal.tsx`)
- Organisation : par feature (`/components/contact/`, `/components/heroes/`)
- Props : interface `ComponentNameProps` exportée
- Styling : className prop avec `cn()` pour extensibilité

### API Route Pattern

- Format response : `{ success: boolean, message?: string, error?: string }`
- Status codes : 200 (success), 400 (validation), 500 (server error)
- Validation : côté serveur obligatoire, pas de lib externe

### State Management

- Status enum pour loading : `'idle' | 'loading' | 'success' | 'error'`
- Context pour état global : `ContactModalContext` pattern
- Pas de state management library externe

### Animation Rules

- Framer Motion pour toutes les animations
- Patterns existants : `float`, `rotate`, `pulse` pour shapes 3D
- Entry animations : stagger sur les cards

## Anti-Patterns (NE JAMAIS FAIRE)

- ❌ Upgrader Next.js ou Tailwind sans validation explicite
- ❌ Utiliser Turbopack (`next dev --turbo`)
- ❌ Créer des fichiers en kebab-case pour les composants
- ❌ Utiliser `interface IComponentName` (préférer `ComponentNameProps`)
- ❌ Importer sans le path alias `@/`
- ❌ Ajouter des dépendances sans validation
- ❌ Utiliser des couleurs hardcodées (utiliser tokens Tailwind)

## File Organization

```
src/
├── app/           # Pages (App Router)
├── components/
│   ├── ui/        # Design system réutilisable
│   ├── contact/   # Feature: contact
│   ├── heroes/    # Feature: heroes
│   └── cards/     # Feature: cards
├── contexts/      # React Contexts
└── lib/           # Utilitaires (cn, etc.)
```

---

_Generated 2026-01-07 via BMad Method_
