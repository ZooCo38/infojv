# Story 1.3 : Créer le Composant ContactModal

Statut : review

## Story

En tant que **visiteur**,
Je veux **ouvrir une modale de contact avec un formulaire pour envoyer un message à Julien**,
Afin que **je puisse demander des informations ou démarrer une discussion de projet**.

## Critères d'Acceptation

1. **Étant donné** que je clique sur n'importe quel bouton CTA "Contact" sur le site
   **Quand** la modale s'ouvre
   **Alors** je vois un formulaire avec les champs : Nom, Email, Message

2. **Étant donné** que la modale est ouverte
   **Quand** je regarde le formulaire
   **Alors** je vois le message "Pas de commercial, c'est moi qui réponds" (FR30)

3. **Étant donné** que la modale est ouverte
   **Quand** j'appuie sur Échap ou je clique à l'extérieur
   **Alors** la modale se ferme

4. **Étant donné** que je soumets le formulaire avec des données valides
   **Quand** l'appel API réussit
   **Alors** je vois un message de confirmation de succès (FR32)

5. **Étant donné** que je soumets le formulaire avec des données valides
   **Quand** l'appel API échoue
   **Alors** je vois un lien mailto de secours vers contact@infojv.net (FR28, NFR27)

6. **Étant donné** que la modale est ouverte
   **Quand** j'utilise la navigation clavier
   **Alors** le focus est piégé dans la modale (accessibilité)

7. **Étant donné** que la modale contient un champ honeypot caché
   **Quand** un bot remplit ce champ
   **Alors** la soumission est ignorée silencieusement (NFR7)

## Tâches / Sous-tâches

- [x] Tâche 1 : Créer la structure du composant ContactModal (CA: #1, #2)
  - [x] Créer `src/components/contact/ContactModal.tsx`
  - [x] Définir l'interface `ContactModalProps` (si nécessaire)
  - [x] Créer l'interface `FormData` avec `name`, `email`, `message`, `honeypot`
  - [x] Créer le type `FormStatus` : `'idle' | 'loading' | 'success' | 'error'`
  - [x] Utiliser `useContactModal` pour gérer l'état ouvert/fermé
  - [x] Utiliser les composants Input et Textarea de Story 1.2

- [x] Tâche 2 : Implémenter les animations Framer Motion (CA: #1, #3)
  - [x] Ajouter `AnimatePresence` pour les animations entrée/sortie
  - [x] Animer le backdrop (overlay) avec fade
  - [x] Animer la modale avec scale + fade
  - [x] Utiliser les variants pour une animation fluide

- [x] Tâche 3 : Implémenter le focus trap et fermeture (CA: #3, #6)
  - [x] Gérer la fermeture via la touche Échap
  - [x] Gérer la fermeture au clic sur le backdrop
  - [x] Implémenter le focus trap manuel (premier/dernier élément)
  - [x] Mettre le focus sur le premier champ à l'ouverture

- [x] Tâche 4 : Implémenter la logique de soumission (CA: #4, #5, #7)
  - [x] Gérer l'état du formulaire avec `useState<FormStatus>`
  - [x] Valider les champs requis (nom, email, message)
  - [x] Valider le format email avec regex
  - [x] Vérifier le champ honeypot avant soumission
  - [x] Appeler l'API `/api/contact` (POST)
  - [x] Gérer les états : idle, loading, success, error
  - [x] Afficher le lien mailto fallback en cas d'erreur

- [x] Tâche 5 : Créer l'UI complète (CA: #1, #2)
  - [x] Afficher le message "Pas de commercial, c'est moi qui réponds"
  - [x] Styliser avec les tokens Tailwind (bg-card, rounded-lg, etc.)
  - [x] Ajouter le champ honeypot caché (position absolute, opacity 0)
  - [x] Créer le bouton de fermeture (X) avec Icon
  - [x] Ajouter le bouton Envoyer avec état loading

- [x] Tâche 6 : Vérifier le fonctionnement (CA: tous)
  - [x] Le build passe sans erreurs
  - [x] TypeScript mode strict satisfait
  - [x] Animation entrée/sortie fluide
  - [x] Focus trap fonctionne correctement
  - [x] États de formulaire affichés correctement

## Notes de Développement

### Conformité Architecture

**CRITIQUE - Respecter ces patterns :**

| Pattern | Exigence | Source |
|---------|----------|--------|
| Nommage fichier | `ContactModal.tsx` (PascalCase) | [Source: docs/project-context.md#Component Patterns] |
| Emplacement | Dossier `src/components/contact/` | [Source: docs/planning-artifacts/architecture.md#Files to Create] |
| Nommage interface | `FormData`, `FormStatus` (pas `IFormData`) | [Source: docs/project-context.md#TypeScript Rules] |
| Imports | Utiliser l'alias `@/` | [Source: docs/project-context.md#TypeScript Rules] |
| Fusion classes | Toujours utiliser `cn()` de `@/lib/utils` | [Source: docs/project-context.md#Tailwind CSS Rules] |
| Animations | Framer Motion uniquement | [Source: docs/project-context.md#Animation] |

### Exigences Techniques

**Contraintes Stack (NE PAS VIOLER) :**
- Next.js 14.2.15 - App Router uniquement
- TypeScript mode strict - pas de type `any`
- React 18 composants fonctionnels
- Tailwind CSS 3.4.1 - utiliser les tokens custom
- Framer Motion 12.23.26 - pour toutes les animations

**Type FormStatus :**
```typescript
type FormStatus = 'idle' | 'loading' | 'success' | 'error';
```

**Interface FormData :**
```typescript
interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string; // Champ caché anti-spam
}
```

**Réponse API Contact :**
```typescript
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}
```

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

**Pattern Animations Framer Motion :**
```typescript
// Variants pour le backdrop
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Variants pour la modale
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};
```

**Pattern Focus Trap :**
```typescript
// Gérer Échap et focus trap
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') {
      // Logic pour piéger le focus
    }
  };

  if (isOpen) {
    document.addEventListener('keydown', handleKeyDown);
    // Focus sur le premier champ
    inputRef.current?.focus();
  }

  return () => document.removeEventListener('keydown', handleKeyDown);
}, [isOpen]);
```

**Champ Honeypot (invisible aux utilisateurs) :**
```tsx
<input
  type="text"
  name="honeypot"
  value={formData.honeypot}
  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
  className="absolute opacity-0 pointer-events-none"
  tabIndex={-1}
  autoComplete="off"
/>
```

### Notes Structure Projet

**Fichiers à créer :**
- `src/components/contact/ContactModal.tsx` - Composant modale principal

**Fichiers existants à utiliser :**
- `src/contexts/ContactModalContext.tsx` - Hook `useContactModal` (Story 1.1)
- `src/components/ui/Input.tsx` - Composant input (Story 1.2)
- `src/components/ui/Textarea.tsx` - Composant textarea (Story 1.2)
- `src/components/ui/Button.tsx` - Composant bouton existant
- `src/components/ui/Icon.tsx` - Pour l'icône de fermeture

**Fichiers à intégrer plus tard :**
- `src/app/layout.tsx` - Ajouter `<ContactModal />` après le provider (si non fait)

**Vérification alignement :**
- Créer le dossier `src/components/contact/` s'il n'existe pas
- Suivre le pattern d'export existant

### Liste de Vérification

- [x] Utiliser la directive `'use client'` (requis pour useState et Framer Motion)
- [x] Importer `cn` depuis `@/lib/utils`
- [x] Importer `useContactModal` depuis `@/contexts/ContactModalContext`
- [x] Importer `Input` depuis `@/components/ui/Input`
- [x] Importer `Textarea` depuis `@/components/ui/Textarea`
- [x] Importer `motion`, `AnimatePresence` depuis `framer-motion`
- [x] Utiliser `type FormStatus = 'idle' | 'loading' | 'success' | 'error'`
- [x] Champ honeypot présent et invisible
- [x] Message "Pas de commercial" affiché
- [x] Fallback mailto en cas d'erreur
- [x] Focus trap implémenté
- [x] Fermeture via Échap et clic backdrop
- [x] Validation email avec regex
- [x] TypeScript strict - typage correct pour toutes les props

### Mauvaises Pratiques à Éviter

Depuis [Source: docs/project-context.md#Anti-Patterns] :
- NE PAS utiliser `interface IFormData` - utiliser `FormData`
- NE PAS utiliser d'imports relatifs - toujours utiliser l'alias `@/`
- NE PAS utiliser de couleurs hardcodées - utiliser les tokens Tailwind
- NE PAS utiliser de librairies de formulaires externes (pas de react-hook-form)
- NE PAS utiliser de librairies focus trap externes - implémenter manuellement
- NE PAS oublier le champ honeypot (exigence sécurité NFR7)
- NE PAS stocker de données serveur (NFR10)

### Apprentissages Stories Précédentes

**Story 1.1 (ContactModalContext) :**
- Le hook `useContactModal` expose : `isOpen`, `openModal`, `closeModal`
- Provider intégré dans `layout.tsx`
- Pattern confirmé : `'use client'`, named exports fonctionnent

**Story 1.2 (Input/Textarea) :**
- Les composants acceptent `label`, `error`, et tous les attributs HTML natifs
- Tokens utilisés : `bg-bg-card`, `rounded-lg`, `font-poppins`, `accent`
- Ring de focus : `focus:ring-2 focus:ring-accent`

### Intelligence Git (Commits Récents)

Patterns de travail récents depuis git log :
- `6a35485` Ajouter page Expertise avec layout Bento grid
- `89c74e3` Centrer le contenu dans la card banque
- `3be1397` Corriger erreurs TypeScript dans les variants FloatingShape

**Insight :** Les animations Framer Motion sont déjà utilisées dans le projet. Suivre les patterns de variants existants.

### Couverture FR

Cette story implémente directement :
- **FR27** : Visiteur peut ouvrir une modale de contact depuis n'importe quelle page
- **FR28** : Visiteur peut envoyer un email via mailto (fallback)
- **FR29** : Visiteur peut soumettre un formulaire (nom, email, message)
- **FR30** : Visiteur peut voir "Pas de commercial, c'est moi qui réponds"
- **FR32** : Système affiche une confirmation après envoi formulaire

### Couverture NFR

- **NFR7** : Formulaire protégé par honeypot anti-spam
- **NFR11-15** : Accessibilité (WCAG 2.1 Niveau A)
- **NFR13** : Navigation clavier fonctionnelle
- **NFR15** : Focus visible sur éléments interactifs
- **NFR27** : Formulaire fallback mailto si SMTP échoue

### Dépendances

- **Story 1.1** : ContactModalContext - hook `useContactModal` ✅ DONE
- **Story 1.2** : Input, Textarea - composants UI ✅ DONE
- **Dépendants** : Story 1.4 (API Contact) sera appelée par ce composant
- **Note** : La modale peut fonctionner sans l'API (mode simulation) pour test UI

### Références

- [Source: docs/planning-artifacts/architecture.md#Frontend Architecture]
- [Source: docs/planning-artifacts/architecture.md#Files to Create (MVP)]
- [Source: docs/planning-artifacts/epics.md#Story 1.3]
- [Source: docs/project-context.md#Component Patterns]
- [Source: docs/project-context.md#Animation]
- [Source: docs/project-context.md#Tailwind CSS Rules]

---

## Registre Agent Dev

### Modèle Agent Utilisé

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Références Journal Debug

- Vérification TypeScript : `npx tsc --noEmit` - SUCCÈS
- Vérification build : `npm run build` - SUCCÈS

### Notes de Complétion

- Créé `ContactModal.tsx` avec tous les critères d'acceptation satisfaits
- Composant utilise `useContactModal` hook de Story 1.1
- Composant utilise `Input` et `Textarea` de Story 1.2 (avec support forwardRef ajouté à Input)
- Animations Framer Motion :
  - Backdrop avec fade in/out
  - Modal avec scale + fade + spring transition
  - AnimatePresence pour exit animations
- Focus trap implémenté manuellement :
  - Fermeture via Escape
  - Fermeture via clic backdrop
  - Focus piégé avec Tab/Shift+Tab
  - Focus automatique sur premier input à l'ouverture
  - Body scroll bloqué quand modale ouverte
- Validation formulaire :
  - Champs requis (nom, email, message)
  - Email validé avec regex
  - Champ honeypot anti-spam (NFR7)
- États du formulaire :
  - idle : formulaire vide prêt
  - loading : envoi en cours avec spinner
  - success : message de confirmation avec icône check
  - error : message d'erreur avec fallback mailto (NFR27)
- Message "Pas de commercial, c'est moi qui réponds" affiché (FR30)
- Intégré dans layout.tsx globalement

### Journal des Modifications

- 2026-01-08 : Story implémentée - Créé ContactModal.tsx complet
- 2026-01-08 : Modifié Input.tsx pour supporter forwardRef (focus automatique)
- 2026-01-08 : Modifié layout.tsx pour intégrer ContactModal

### Liste des Fichiers

- `src/components/contact/ContactModal.tsx` (CRÉÉ)
- `src/components/ui/Input.tsx` (MODIFIÉ - ajout forwardRef)
- `src/app/layout.tsx` (MODIFIÉ - ajout import et intégration ContactModal)
