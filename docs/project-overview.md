# Info JV — Vue d'ensemble du projet

## Résumé exécutif

**Info JV** est un site vitrine professionnel pour Julien Villard, expert digital spécialisé dans les services informatiques pour le secteur bancaire et assurance. Le projet est une refonte complète du site existant (infojv.net) avec un design moderne **Bento Grid**.

## Informations clés

| Attribut | Valeur |
|----------|--------|
| **Nom du projet** | infojv |
| **Type** | Site vitrine (refonte) |
| **Client** | Julien Villard - Info JV |
| **Localisation** | Peypin / Marseille / Aix-en-Provence |
| **Contact** | 06 25 54 24 75 |

## Stack technique

| Catégorie | Technologie | Version |
|-----------|-------------|---------|
| Framework | Next.js (App Router) | 14.2.15 |
| Langage | TypeScript | ^5 |
| Styling | Tailwind CSS | 3.4.1 |
| Animations | Framer Motion | 12.23.26 |
| Icônes | Material Symbols | — |
| Font | Poppins | Google Fonts |

## Architecture

- **Type** : Monolithe (single-part)
- **Pattern** : Component-based avec Design System
- **Rendu** : SSR/SSG via Next.js App Router

## Design System

### Couleurs

| Token | Valeur | Usage |
|-------|--------|-------|
| `bg-page` | #0C0C0C | Fond de page (sombre) |
| `bg-card` | #FFF4F3 | Cards (crème rosé) |
| `bg-card-white` | #FFFFFF | Cards blanches |
| `bg-card-mint` | #C9F9E3 | Cards accent mint |
| `accent` | #53E1A1 | Couleur d'accent (mint) |
| `text-primary` | #000000 | Texte principal |
| `text-on-dark` | #FFFFFF | Texte sur fond sombre |

### Typographie

- **Font unique** : Poppins
- **Border-radius** : 24px pour les cards

### Layout Bento Grid

```
grid-template-areas:
  "infojv   projets   annees    siteweb"
  "infojv   julien    julien    siteweb"
  "mobile   julien    julien    banques"
  "mobile   marseille contact   contact"
```

## Services proposés

1. **Sites web professionnels**
   - Sites vitrine
   - Sites e-commerce
   - Sites de mariage
   - Sites association
   - Sites photos

2. **Développement Mobile**
   - Applications sur mesure

3. **Expertise IA**
   - Intégration IA pour business

4. **Spécialisation Banque & Assurance**
   - Clients : Caisse d'Épargne, Banque Populaire, La Banque Postale

## Structure des pages

| Route | Nom | Statut |
|-------|-----|--------|
| `/` | Accueil | ✅ Implémentée |
| `/expertise` | Expertise | ✅ Implémentée |
| `/mobile` | Développement Mobile | ❌ À créer |
| `/projets` | Portfolio | ❌ À créer |
| `/ia` | Services IA | ❌ À créer |
| `/contact` | Contact | ❌ À créer |

## Chiffres clés (marketing)

- **50+** projets livrés en 2025
- **20+** ans d'expérience

## Liens

- [Architecture](./architecture.md)
- [Composants UI](./component-inventory.md)
- [Guide de développement](./development-guide.md)
- [Arborescence source](./source-tree-analysis.md)

---

*Documentation générée le 2026-01-06 par BMad Method*
