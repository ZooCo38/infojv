# Story 1.4 : Créer la Route API Contact

Statut : review

## Story

En tant que **système**,
Je veux **un endpoint API qui reçoit les soumissions de formulaire et envoie des emails via nodemailer**,
Afin que **Julien reçoive les demandes de contact par email**.

## Critères d'Acceptation

1. **Étant donné** une requête POST vers `/api/contact` avec des données valides
   **Quand** la requête inclut `name`, `email`, `message`
   **Alors** un email est envoyé à contact@infojv.net via SMTP

2. **Étant donné** que le champ honeypot contient des données
   **Quand** le formulaire est soumis
   **Alors** l'API retourne 200 silencieusement sans envoyer d'email (spam bloqué)

3. **Étant donné** une requête POST avec des champs requis manquants
   **Quand** la validation échoue
   **Alors** l'API retourne 400 avec `{ success: false, error: "Message d'erreur de validation" }`

4. **Étant donné** que SMTP échoue
   **Quand** l'email ne peut pas être envoyé
   **Alors** l'API retourne 500 avec `{ success: false, error: "Erreur d'envoi" }`

5. **Étant donné** que l'email est envoyé avec succès
   **Quand** la réponse est retournée
   **Alors** elle contient `{ success: true, message: "Message envoyé" }`

## Tâches / Sous-tâches

- [x] Tâche 1 : Créer la structure de la route API (CA: #1)
  - [x] Créer `src/app/api/contact/route.ts`
  - [x] Définir l'interface `ContactRequest` avec `name`, `email`, `message`, `honeypot`
  - [x] Définir l'interface `ApiResponse` avec `success`, `message?`, `error?`
  - [x] Exporter la fonction `POST`

- [x] Tâche 2 : Implémenter la validation des données (CA: #2, #3)
  - [x] Vérifier le champ honeypot (retour 200 silencieux si rempli)
  - [x] Valider les champs requis (name, email, message)
  - [x] Valider le format email avec regex
  - [x] Retourner 400 avec message d'erreur approprié si validation échoue

- [x] Tâche 3 : Configurer nodemailer et SMTP (CA: #1, #4, #5)
  - [x] Installer nodemailer si non présent
  - [x] Créer le transporteur SMTP avec variables d'environnement
  - [x] Configurer pour Gmail App Password ou SMTP infojv.net
  - [x] Gérer les erreurs SMTP (retour 500)

- [x] Tâche 4 : Créer les fichiers de configuration (CA: #1)
  - [x] Créer `.env.example` avec template SMTP
  - [x] Documenter les variables requises

- [x] Tâche 5 : Vérifier le fonctionnement (CA: tous)
  - [x] Le build passe sans erreurs
  - [x] TypeScript mode strict satisfait
  - [x] Format de réponse conforme aux spécifications

## Notes de Développement

### Conformité Architecture

**CRITIQUE - Respecter ces patterns :**

| Pattern | Exigence | Source |
|---------|----------|--------|
| Nommage fichier | `route.ts` | [Source: docs/project-context.md#API Route Pattern] |
| Emplacement | Dossier `src/app/api/contact/` | [Source: docs/planning-artifacts/architecture.md#Files to Create] |
| Format réponse | `{ success: boolean, message?: string, error?: string }` | [Source: docs/project-context.md#API Route Pattern] |
| Status codes | 200 (success), 400 (validation), 500 (server error) | [Source: docs/project-context.md#API Route Pattern] |

### Exigences Techniques

**Contraintes Stack (NE PAS VIOLER) :**
- Next.js 14.2.15 - App Router API Routes
- TypeScript mode strict - pas de type `any`
- nodemailer pour envoi SMTP
- Validation manuelle - pas de lib externe (zod, yup, etc.)

**Interface ContactRequest :**
```typescript
interface ContactRequest {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}
```

**Interface ApiResponse :**
```typescript
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}
```

**Pattern API Route Next.js 14 :**
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Validation et logique
    return NextResponse.json({ success: true, message: "Message envoyé" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
```

**Configuration nodemailer :**
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
```

**Variables d'environnement (.env.example) :**
```
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=contact@infojv.net
SMTP_TO=contact@infojv.net
```

### Notes Structure Projet

**Fichiers à créer :**
- `src/app/api/contact/route.ts` - Route API principale
- `.env.example` - Template des variables d'environnement

**Dépendances à vérifier :**
- `nodemailer` - installer si non présent

### Liste de Vérification

- [x] Utiliser `NextRequest` et `NextResponse` de `next/server`
- [x] Validation honeypot en premier (retour silencieux 200)
- [x] Validation champs requis avec messages en français
- [x] Validation format email avec regex
- [x] Configuration SMTP via variables d'environnement
- [x] Gestion erreurs SMTP avec code 500
- [x] Format réponse : `{ success, message?, error? }`
- [x] Pas de stockage de données serveur (NFR10)
- [x] TypeScript strict - typage correct

### Mauvaises Pratiques à Éviter

- NE PAS utiliser de librairies de validation (zod, yup, joi)
- NE PAS stocker les données du formulaire côté serveur (NFR10)
- NE PAS exposer les credentials SMTP dans le code
- NE PAS utiliser `any` pour typer les erreurs
- NE PAS oublier de vérifier le honeypot EN PREMIER

### Apprentissages Stories Précédentes

**Story 1.3 (ContactModal) :**
- Le formulaire envoie : `{ name, email, message }`
- Le honeypot est inclus mais doit être vide pour les vrais utilisateurs
- En cas d'erreur, le front affiche le fallback mailto

### Couverture FR

Cette story implémente directement :
- **FR31** : Système envoie le formulaire à Julien par email (SMTP)

### Couverture NFR

- **NFR7** : Formulaire protégé par honeypot anti-spam
- **NFR10** : Pas de stockage de données utilisateur côté serveur

### Dépendances

- **Story 1.3** : ContactModal - appelle cette API ✅ DONE
- **Dépendants** : Aucun - c'est la dernière story de l'Epic 1

### Références

- [Source: docs/planning-artifacts/architecture.md#Backend - API Routes]
- [Source: docs/planning-artifacts/epics.md#Story 1.4]
- [Source: docs/project-context.md#API Route Pattern]

---

## Registre Agent Dev

### Modèle Agent Utilisé

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Références Journal Debug

- Installation nodemailer : `npm install nodemailer @types/nodemailer` - SUCCÈS
- Vérification TypeScript : `npx tsc --noEmit` - SUCCÈS
- Vérification build : `npm run build` - SUCCÈS
- Route détectée : `/api/contact` (ƒ Dynamic)

### Notes de Complétion

- Créé `route.ts` avec tous les critères d'acceptation satisfaits
- Installé nodemailer et @types/nodemailer
- Route API POST `/api/contact` implémentée avec :
  - Interfaces TypeScript : `ContactRequest`, `ApiResponse`
  - Validation honeypot en premier (retour 200 silencieux si rempli)
  - Validation champs requis (nom, email, message) avec messages français
  - Validation email avec regex
  - Configuration SMTP via variables d'environnement
  - Email HTML stylé avec design system Info JV
  - Email texte brut en fallback
  - Gestion erreurs : 400 (validation), 500 (SMTP)
  - Aucun stockage de données serveur (NFR10)
- Créé `.env.example` documenté avec :
  - Variables SMTP (HOST, PORT, SECURE, USER, PASS)
  - Variables d'adresses (FROM, TO)
  - Commentaires explicatifs pour Gmail App Password

### Journal des Modifications

- 2026-01-08 : Story implémentée - Créé route.ts et .env.example
- 2026-01-08 : Ajouté nodemailer comme dépendance

### Liste des Fichiers

- `src/app/api/contact/route.ts` (CRÉÉ)
- `.env.example` (CRÉÉ)
- `package.json` (MODIFIÉ - ajout nodemailer)
- `package-lock.json` (MODIFIÉ - ajout nodemailer + @types/nodemailer)
