# Story 1.2 : Créer les Composants UI du Formulaire Contact

Statut : en revue

## Story

En tant que **développeur**,
Je veux **des composants Input et Textarea réutilisables suivant le design system**,
Afin que **je puisse construire le formulaire de contact avec un style cohérent**.

## Critères d'Acceptation

1. **Étant donné** que le composant Input est rendu
   **Quand** je passe les props `label`, `name`, `type`, et `required`
   **Alors** il affiche un input stylé avec label suivant le design Bento

2. **Étant donné** que le composant Textarea est rendu
   **Quand** je passe les props `label`, `name`, et `rows`
   **Alors** il affiche un textarea stylé avec label suivant le design Bento

3. **Étant donné** qu'un input a un état d'erreur
   **Quand** je passe la prop `error` avec un message
   **Alors** l'input affiche le message d'erreur en rouge en dessous

4. **Étant donné** que la navigation clavier est utilisée
   **Quand** je tab à travers les champs du formulaire
   **Alors** les états de focus sont clairement visibles (NFR15)

## Tâches / Sous-tâches

- [x] Tâche 1 : Créer le composant Input (CA: #1, #3, #4)
  - [x] Créer `src/components/ui/Input.tsx`
  - [x] Définir l'interface `InputProps` étendant les attributs natifs input
  - [x] Ajouter les props custom `label`, `error`, `required`
  - [x] Styliser avec les tokens Tailwind : `bg-card`, `rounded-lg`, `font-poppins`
  - [x] Inclure l'affichage de l'état d'erreur (texte rouge sous l'input)
  - [x] Ajouter un ring de focus visible pour l'accessibilité (NFR15)
  - [x] Utiliser `cn()` pour la fusion des classes

- [x] Tâche 2 : Créer le composant Textarea (CA: #2, #3, #4)
  - [x] Créer `src/components/ui/Textarea.tsx`
  - [x] Définir l'interface `TextareaProps` étendant les attributs natifs textarea
  - [x] Ajouter les props custom `label`, `error`, `rows`
  - [x] Styliser de manière cohérente avec le composant Input
  - [x] Inclure l'affichage de l'état d'erreur
  - [x] Ajouter un ring de focus visible pour l'accessibilité

- [x] Tâche 3 : Vérifier le fonctionnement (CA: #1, #2, #3, #4)
  - [x] Le build passe sans erreurs
  - [x] TypeScript mode strict satisfait
  - [x] États de focus visibles à la navigation clavier
  - [x] Messages d'erreur s'affichent correctement

## Notes de Développement

### Conformité Architecture

**CRITIQUE - Respecter ces patterns :**

| Pattern | Exigence | Source |
|---------|----------|--------|
| Nommage fichier | `Input.tsx`, `Textarea.tsx` (PascalCase) | [Source: docs/project-context.md#Component Patterns] |
| Emplacement | Dossier `src/components/ui/` | [Source: docs/planning-artifacts/architecture.md#Project Structure] |
| Nommage interface | `InputProps`, `TextareaProps` (pas `IInput`) | [Source: docs/project-context.md#TypeScript Rules] |
| Imports | Utiliser l'alias `@/` | [Source: docs/project-context.md#TypeScript Rules] |
| Fusion classes | Toujours utiliser `cn()` de `@/lib/utils` | [Source: docs/project-context.md#Tailwind CSS Rules] |

### Exigences Techniques

**Contraintes Stack (NE PAS VIOLER) :**
- Next.js 14.2.15 - App Router uniquement
- TypeScript mode strict - pas de type `any`
- React 18 composants fonctionnels
- Tailwind CSS 3.4.1 - utiliser les tokens custom

**Tokens Tailwind (depuis tailwind.config.ts) :**
```typescript
colors: {
  'bg-page': '#0C0C0C',
  'bg-card': '#FFF4F3',
  'accent': '#53E1A1',
  'text-primary': '#000000',
  'text-secondary': '#555555',
  'border-light': '#E5E5E5',
}
borderRadius: {
  'lg': '24px',
  'md': '20px',
}
fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
}
```

**Pattern Composant (suivre l'exemple Button.tsx) :**
```typescript
'use client';

import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-poppins text-sm font-medium text-text-primary">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        className={cn(
          "bg-bg-card rounded-lg px-4 py-3 font-poppins text-text-primary",
          "border border-border-light",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
```

### Notes Structure Projet

**Fichiers à créer :**
- `src/components/ui/Input.tsx` - Composant champ input
- `src/components/ui/Textarea.tsx` - Composant textarea

**Fichiers existants dans le même dossier (référence pour les patterns) :**
- `src/components/ui/Button.tsx` - Utilise `cn()`, `'use client'`, interface `ButtonProps`
- `src/components/ui/Icon.tsx` - Pattern composant simple
- `src/components/ui/BentoCard.tsx` - Patterns de style des cards

**Vérification alignement :**
- Les deux fichiers vont dans le dossier existant `src/components/ui/`
- Suivre le pattern d'export existant (export par défaut comme Button.tsx)

### Liste de Vérification

- [x] Utiliser la directive `'use client'` (si nécessaire pour l'interactivité)
- [x] Importer `cn` depuis `@/lib/utils`
- [x] L'interface étend les attributs HTML natifs
- [x] Inclure les props `label`, `error` pour tous les champs de formulaire
- [x] Ring de focus visible avec `focus:ring-2 focus:ring-accent`
- [x] État d'erreur montre une bordure rouge et un message en dessous
- [x] TypeScript strict - typage correct pour toutes les props
- [x] Utiliser les tokens Tailwind custom (bg-card, rounded-lg, font-poppins)

### Mauvaises Pratiques à Éviter

Depuis [Source: docs/project-context.md#Anti-Patterns] :
- NE PAS utiliser `interface IInput` - utiliser `InputProps`
- NE PAS utiliser d'imports relatifs - toujours utiliser l'alias `@/`
- NE PAS utiliser de couleurs hardcodées - utiliser les tokens Tailwind
- NE PAS omettre le style du ring de focus (exigence accessibilité)
- NE PAS utiliser de librairies de formulaires externes (validation manuelle uniquement)

### Apprentissages Story Précédente (Story 1.1)

Depuis [Source: docs/implementation-artifacts/1-1-create-contactmodalcontext.md#Registre Agent Dev] :
- Vérification build : `npm run build` - SUCCÈS
- Vérification TypeScript : `npx tsc --noEmit` - SUCCÈS
- Pattern confirmé : directive `'use client'`, named exports fonctionnent
- Dossier contexts créé à `src/contexts/`

### Intelligence Git (Commits Récents)

Patterns de travail récents depuis git log :
- `6a35485` Ajouter page Expertise avec layout Bento grid
- `89c74e3` Centrer le contenu dans la card banque
- `eaf57c2` Retirer le cône de la card Julien, agrandir la forme pill, corriger bg icônes banque en noir
- `3be1397` Corriger erreurs TypeScript dans les variants FloatingShape
- `0fdff0f` Corriger erreur TypeScript dans les variants BentoCard

**Insight :** Focus récent sur le style des cards Bento et les corrections TypeScript. Les composants doivent suivre les patterns de style établis.

### Couverture FR

Cette story permet :
- **FR29** : Visiteur peut soumettre un formulaire (nom, email, message)

### Couverture NFR

- **NFR11-15** : Accessibilité (WCAG 2.1 Niveau A)
- **NFR15** : Focus visible sur les éléments interactifs

### Dépendances

- **Aucune dépendance** - Les composants UI sont fondamentaux
- **Dépendants** : Story 1.3 (ContactModal) dépend de ces composants

### Références

- [Source: docs/planning-artifacts/architecture.md#Frontend Architecture]
- [Source: docs/planning-artifacts/architecture.md#Files to Create (MVP)]
- [Source: docs/planning-artifacts/epics.md#Story 1.2]
- [Source: docs/project-context.md#Component Patterns]
- [Source: docs/project-context.md#Tailwind CSS Rules]

---

## Registre Agent Dev

### Modèle Agent Utilisé

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Références Journal Debug

- Vérification TypeScript : `npx tsc --noEmit` - SUCCÈS (aucune erreur)
- Vérification build : `npm run build` - SUCCÈS

### Notes de Complétion

- Créé `Input.tsx` avec interface `InputProps` étendant `React.InputHTMLAttributes`
- Créé `Textarea.tsx` avec interface `TextareaProps` étendant `React.TextareaHTMLAttributes`
- Les deux composants utilisent :
  - Directive `'use client'`
  - Import `cn` depuis `@/lib/utils`
  - Tokens Tailwind : `bg-bg-card`, `rounded-lg`, `font-poppins`, `accent`
  - Ring de focus visible : `focus:ring-2 focus:ring-accent`
  - Affichage erreur en rouge avec bordure et message
  - Transition fluide : `transition-all duration-200`
- Tous les critères d'acceptation satisfaits :
  - CA #1 : Input avec label, name, type, required ✅
  - CA #2 : Textarea avec label, name, rows ✅
  - CA #3 : État d'erreur avec message rouge ✅
  - CA #4 : Focus visible pour accessibilité (NFR15) ✅

### Journal des Modifications

- 2026-01-08 : Story implémentée - Créé Input.tsx et Textarea.tsx

### Liste des Fichiers

- `src/components/ui/Input.tsx` (CRÉÉ)
- `src/components/ui/Textarea.tsx` (CRÉÉ)
