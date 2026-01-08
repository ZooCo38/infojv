# Info JV — Inventaire des composants

## Vue d'ensemble

Le design system Info JV comprend **5 composants UI** réutilisables, tous situés dans `src/components/ui/`.

## Composants

### 1. BentoGrid

**Fichier** : `src/components/ui/BentoGrid.tsx`

**Rôle** : Container principal pour le layout Bento Grid.

**Props** :
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | — | Cards enfants |
| `className` | string | — | Classes Tailwind additionnelles |

**Usage** :
```tsx
<BentoGrid className="grid-cols-4 grid-rows-4 gap-4">
  <BentoCard>...</BentoCard>
  <BentoCard>...</BentoCard>
</BentoGrid>
```

**Layout type** :
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
gap: 1rem;
```

---

### 2. BentoCard

**Fichier** : `src/components/ui/BentoCard.tsx`

**Rôle** : Cards individuelles du grid Bento avec différentes variantes de couleur.

**Props** :
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | — | Contenu de la card |
| `variant` | string | `'default'` | Style de la card |
| `className` | string | — | Classes additionnelles |

**Variantes** :

| Variante | Background | Texte | Border-radius |
|----------|------------|-------|---------------|
| `default` | #FFF4F3 | Noir | 24px |
| `white` | #FFFFFF | Noir | 24px |
| `mint` | #C9F9E3 | Noir | 24px |
| `mint-reverse` | Gradient mint→white | Mint | 24px |
| `dark` | #0C0C0C | Blanc | 24px |

**Usage** :
```tsx
<BentoCard variant="mint" className="col-span-2 row-span-1">
  <h2>Titre</h2>
  <p>Contenu</p>
</BentoCard>
```

---

### 3. FloatingShape

**Fichier** : `src/components/ui/FloatingShape.tsx`

**Rôle** : Affiche des formes 3D avec animations de flottement via Framer Motion.

**Props** :
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | — | Chemin de l'image |
| `alt` | string | `'3D Shape'` | Texte alternatif |
| `variant` | string | `'float'` | Type d'animation |
| `className` | string | — | Classes additionnelles |
| `size` | number | `100` | Taille en pixels |

**Variantes d'animation** :

| Variante | Animation |
|----------|-----------|
| `float` | Flottement vertical doux |
| `rotate` | Rotation continue |
| `pulse` | Pulsation d'échelle |

**Usage** :
```tsx
<FloatingShape
  src="/assets/shape_3D/Pill-Black-Matte.png"
  variant="float"
  size={120}
  className="absolute top-10 right-10"
/>
```

**Shapes disponibles** :
- `Cone.png`
- `Cylinder-Black-Matte.png`
- `Pill-Black-Matte.png`
- `RoundCube-Black-Matte.png` (+ variantes 1, 2)
- `SuperToroid-Black-Matte.png` (+ variante 1)

---

### 4. Button

**Fichier** : `src/components/ui/Button.tsx`

**Rôle** : Boutons CTA (Call To Action) stylisés.

**Props** :
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | — | Label du bouton |
| `variant` | string | `'primary'` | Style du bouton |
| `size` | string | `'md'` | Taille |
| `onClick` | function | — | Handler click |
| `className` | string | — | Classes additionnelles |

**Variantes** :

| Variante | Style |
|----------|-------|
| `primary` | Background accent (#53E1A1), texte noir |
| `secondary` | Background transparent, border |
| `ghost` | Pas de background, hover subtle |

**Usage** :
```tsx
<Button variant="primary" onClick={handleClick}>
  découvrir
</Button>
```

---

### 5. Icon

**Fichier** : `src/components/ui/Icon.tsx`

**Rôle** : Wrapper pour les icônes Material Symbols.

**Props** :
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | — | Nom de l'icône Material Symbols |
| `size` | number | `24` | Taille en pixels |
| `className` | string | — | Classes additionnelles |
| `filled` | boolean | `false` | Variante remplie |

**Usage** :
```tsx
<Icon name="mail" size={32} filled />
<Icon name="phone" className="text-accent" />
```

**Icônes utilisées** :
- `location_on` — Localisation
- `phone_iphone` — Mobile
- `link` — Projets
- `memory` — IA
- `mail` — Contact
- `phone` — Téléphone

---

## Arborescence des composants

```
src/components/
└── ui/
    ├── BentoGrid.tsx       # Container grid
    ├── BentoCard.tsx       # Cards avec variantes
    ├── FloatingShape.tsx   # Shapes 3D animées
    ├── Button.tsx          # Boutons CTA
    └── Icon.tsx            # Icônes Material Symbols
```

## Dépendances des composants

```
BentoGrid
└── BentoCard (multiple)
    ├── FloatingShape (optional)
    ├── Button (optional)
    └── Icon (optional)
```

## Utilitaires

### `cn()` — Class Name Merger

**Fichier** : `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Usage** :
```tsx
<div className={cn(
  "base-classes",
  variant === "mint" && "bg-bg-card-mint",
  className
)}>
```

---

## Composants à créer (potentiels)

| Composant | Usage potentiel |
|-----------|-----------------|
| `Header` | Navigation sticky |
| `Footer` | Pied de page |
| `ContactForm` | Formulaire de contact |
| `ProjectCard` | Card pour portfolio |
| `ServiceCard` | Card pour services |

---

*Documentation générée le 2026-01-06 par BMad Method*
