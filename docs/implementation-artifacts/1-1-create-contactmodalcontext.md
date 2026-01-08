# Story 1.1 : Créer ContactModalContext

Statut : en revue

## Story

En tant que **développeur**,
Je veux **un React Context pour gérer l'état ouvert/fermé de la modale contact globalement**,
Afin que **n'importe quel composant puisse déclencher la modale depuis n'importe où dans l'app**.

## Critères d'Acceptation

1. **Étant donné** que ContactModalContext est implémenté
   **Quand** j'enveloppe l'app avec ContactModalProvider
   **Alors** tout composant enfant peut accéder aux fonctions `isOpen` et `setIsOpen`

2. **Étant donné** qu'un composant appelle `openModal()`
   **Quand** la fonction est invoquée
   **Alors** l'état de la modale devient `isOpen: true`

3. **Étant donné** qu'un composant appelle `closeModal()`
   **Quand** la fonction est invoquée
   **Alors** l'état de la modale devient `isOpen: false`

## Tâches / Sous-tâches

- [x] Tâche 1 : Créer le fichier ContactModalContext (CA: #1, #2, #3)
  - [x] Créer `src/contexts/ContactModalContext.tsx`
  - [x] Définir l'interface `ContactModalContextValue` avec `isOpen`, `openModal`, `closeModal`
  - [x] Créer le context avec `createContext`
  - [x] Créer le composant `ContactModalProvider` avec `useState`
  - [x] Exporter le hook `useContactModal` avec gestion d'erreur

- [x] Tâche 2 : Intégrer dans le layout de l'app (CA: #1)
  - [x] Envelopper l'app dans `src/app/layout.tsx` avec `ContactModalProvider`
  - [x] S'assurer que le provider est au niveau racine pour accès global

- [x] Tâche 3 : Vérifier le fonctionnement (CA: #2, #3)
  - [x] Tester que `openModal()` met `isOpen` à `true`
  - [x] Tester que `closeModal()` met `isOpen` à `false`
  - [x] Vérifier que le hook lance une erreur si utilisé hors du provider

## Notes de Développement

### Conformité Architecture

**CRITIQUE - Respecter ces patterns :**

| Pattern | Exigence | Source |
|---------|----------|--------|
| Nommage fichier | `ContactModalContext.tsx` (PascalCase) | [Source: docs/project-context.md#Component Patterns] |
| Emplacement | Dossier `src/contexts/` | [Source: docs/project-context.md#File Organization] |
| Nommage interface | `ContactModalContextValue` (pas `IContactModalContext`) | [Source: docs/project-context.md#TypeScript Rules] |
| Gestion d'état | `useState` uniquement - PAS de Redux ou libs externes | [Source: docs/project-context.md#State Management] |
| Imports | Utiliser l'alias `@/` | [Source: docs/project-context.md#TypeScript Rules] |

### Exigences Techniques

**Contraintes Stack (NE PAS VIOLER) :**
- Next.js 14.2.15 - App Router uniquement
- TypeScript mode strict - pas de type `any`
- React 18 composants fonctionnels

**Pattern Context :**
```typescript
interface ContactModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
```

**Pattern Hook :**
```typescript
export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider');
  }
  return context;
}
```

### Notes Structure Projet

**Fichiers à créer :**
- `src/contexts/ContactModalContext.tsx` - Fichier context principal

**Fichiers à modifier :**
- `src/app/layout.tsx` - Ajouter le wrapper provider

### Liste de Vérification

- [x] Utiliser la directive `'use client'` (requis pour useState)
- [x] Exporter `ContactModalProvider` et `useContactModal`
- [x] TypeScript strict - typage correct pour toutes les fonctions
- [x] Pas d'export par défaut - utiliser les named exports uniquement
- [x] Gestion d'erreur dans le hook si utilisé hors du provider

### Mauvaises Pratiques à Éviter

- NE PAS utiliser `interface IContactModalContext` - utiliser `ContactModalContextValue`
- NE PAS utiliser d'imports relatifs - toujours utiliser l'alias `@/`
- NE PAS ajouter de librairies de gestion d'état externes
- NE PAS utiliser de class components

### Couverture FR

Cette story permet :
- **FR2** : Visiteur peut accéder à la page Contact depuis n'importe quelle page
- **FR27** : Visiteur peut ouvrir une modale de contact depuis n'importe quelle page

### Dépendances

- **Aucune dépendance** - C'est la story fondation
- **Dépendants** : Stories 1.3, 2.7, 4.4, 5.4, 6.3 dépendent de ce context

### Références

- [Source: docs/planning-artifacts/architecture.md#Frontend Architecture]
- [Source: docs/planning-artifacts/epics.md#Story 1.1]
- [Source: docs/project-context.md#State Management]
- [Source: docs/project-context.md#Component Patterns]

---

## Registre Agent Dev

### Modèle Agent Utilisé

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Références Journal Debug

- Vérification build : `npm run build` - SUCCÈS
- Vérification TypeScript : `npx tsc --noEmit` - SUCCÈS (aucune erreur)

### Notes de Complétion

- Créé `ContactModalContext.tsx` en suivant tous les patterns architecture
- Utilisé la directive `'use client'` pour le state côté client
- Implémenté l'interface `ContactModalContextValue` avec `isOpen`, `openModal`, `closeModal`
- Créé `ContactModalProvider` avec `useState` - aucune dépendance externe
- Exporté le hook `useContactModal` avec gestion d'erreur
- Intégré le provider au niveau racine dans `layout.tsx`
- Tous les critères d'acceptation satisfaits ✅

### Journal des Modifications

- 2026-01-07 : Story implémentée - Créé ContactModalContext avec provider et hook

### Liste des Fichiers

- `src/contexts/ContactModalContext.tsx` (CRÉÉ)
- `src/app/layout.tsx` (MODIFIÉ - ajout import ContactModalProvider et wrapper)
