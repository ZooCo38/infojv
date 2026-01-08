# Info JV — Guide de développement

## Prérequis

| Outil | Version | Installation |
|-------|---------|--------------|
| Node.js | >=18 | [nodejs.org](https://nodejs.org) |
| npm | >=9 | Inclus avec Node.js |
| Git | Latest | [git-scm.com](https://git-scm.com) |

## Installation

```bash
# Cloner le repository
git clone https://github.com/ZooCo38/infojv.git

# Aller dans le dossier
cd infojv

# Installer les dépendances
npm install
```

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Démarrer le serveur de production |
| `npm run lint` | Vérifier le code avec ESLint |

## Développement local

### Démarrer le serveur

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Structure des fichiers à modifier

```
src/
├── app/                    # Pages à créer/modifier
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout (ne pas modifier sauf nécessaire)
│   ├── globals.css        # Styles globaux
│   └── [nouvelle-page]/   # Créer un dossier pour chaque nouvelle page
│       └── page.tsx
├── components/ui/          # Composants à créer/modifier
└── lib/                    # Utilitaires
```

## Créer une nouvelle page

### 1. Créer le dossier et fichier

```bash
mkdir src/app/mobile
touch src/app/mobile/page.tsx
```

### 2. Structure de base

```tsx
// src/app/mobile/page.tsx
import { BentoGrid } from '@/components/ui/BentoGrid';
import { BentoCard } from '@/components/ui/BentoCard';

export default function MobilePage() {
  return (
    <main className="min-h-screen bg-bg-page p-4 md:p-8">
      <BentoGrid className="max-w-7xl mx-auto">
        <BentoCard variant="default" className="col-span-2">
          <h1 className="text-2xl font-bold">Développement Mobile</h1>
        </BentoCard>
        {/* Autres cards */}
      </BentoGrid>
    </main>
  );
}
```

## Conventions de code

### TypeScript

- Utiliser les types stricts
- Définir les interfaces pour les props
- Éviter `any`

```tsx
interface BentoCardProps {
  variant?: 'default' | 'white' | 'mint' | 'mint-reverse' | 'dark';
  className?: string;
  children: React.ReactNode;
}
```

### Tailwind CSS

- Utiliser les tokens du design system
- Préférer les classes utilitaires
- Utiliser `cn()` pour le merge conditionnel

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  "p-6 rounded-lg",
  variant === "mint" && "bg-bg-card-mint",
  className
)}>
```

### Commits

Utiliser les conventions :
- 🎉 `init:` — Initialisation
- ✨ `feat:` — Nouvelle fonctionnalité
- 🐛 `fix:` — Correction de bug
- 💄 `style:` — Style/CSS
- ♻️ `refactor:` — Refactoring

```bash
git commit -m "✨ feat: Add mobile page with Bento grid"
```

## Design System

### Couleurs

| Token Tailwind | Valeur | Usage |
|----------------|--------|-------|
| `bg-bg-page` | #0C0C0C | Fond de page |
| `bg-bg-card` | #FFF4F3 | Cards default |
| `bg-bg-card-mint` | #C9F9E3 | Cards mint |
| `text-accent` | #53E1A1 | Texte accent |
| `bg-accent` | #53E1A1 | Background accent |

### Typographie

```tsx
// Titres
<h1 className="font-poppins text-4xl font-bold">
<h2 className="font-poppins text-2xl font-semibold">

// Corps
<p className="font-poppins text-base">
```

### Espacement

- Cards : `p-6` (24px)
- Gap grid : `gap-4` (16px)
- Border radius : `rounded-lg` (24px)

## Ajouter un composant

### 1. Créer le fichier

```bash
touch src/components/ui/NewComponent.tsx
```

### 2. Structure de base

```tsx
// src/components/ui/NewComponent.tsx
import { cn } from '@/lib/utils';

interface NewComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function NewComponent({ className, children }: NewComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  );
}
```

### 3. Exporter (optionnel)

Si vous créez un index :
```tsx
// src/components/ui/index.ts
export { NewComponent } from './NewComponent';
```

## Animations Framer Motion

### Ajouter une animation

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Contenu animé
</motion.div>
```

### Animation stagger pour les cards

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  <motion.div variants={item}>Card 1</motion.div>
  <motion.div variants={item}>Card 2</motion.div>
</motion.div>
```

## Build & Déploiement

### Build de production

```bash
npm run build
```

Vérifie qu'il n'y a pas d'erreurs TypeScript ou ESLint.

### Test local de la production

```bash
npm run build && npm run start
```

### Déploiement Vercel

Le projet est configuré pour Vercel. Push sur `main` déclenche un déploiement automatique.

```bash
git push origin main
```

## Troubleshooting

### Erreur "Module not found"

```bash
# Vérifier les imports avec @/
# Le path alias est configuré dans tsconfig.json
"@/*": ["./src/*"]
```

### Erreur Tailwind classes non appliquées

```bash
# Vérifier que le fichier est dans content de tailwind.config.ts
content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
]
```

### Erreur de type TypeScript

```bash
# Lancer le type-check
npx tsc --noEmit
```

## Ressources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Material Symbols](https://fonts.google.com/icons)

---

*Documentation générée le 2026-01-06 par BMad Method*
