# Info JV — Documentation

> 📁 Point d'entrée principal pour la documentation du projet Info JV

## Projet

| Attribut | Valeur |
|----------|--------|
| **Nom** | Info JV |
| **Type** | Site vitrine (refonte) |
| **Framework** | Next.js 14.2 (App Router) |
| **Langage** | TypeScript |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion |

## Quick Reference

| Info | Valeur |
|------|--------|
| **Stack** | Next.js + TypeScript + Tailwind + Framer Motion |
| **Entry Point** | `src/app/page.tsx` |
| **Design Pattern** | Bento Grid |
| **Déploiement** | Vercel |

## Documentation générée

### Architecture & Structure

- [Vue d'ensemble du projet](./project-overview.md) — Résumé exécutif et informations clés
- [Architecture](./architecture.md) — Stack technique, patterns, diagrammes
- [Arborescence source](./source-tree-analysis.md) — Structure des fichiers et dossiers

### Développement

- [Inventaire des composants](./component-inventory.md) — Design system et composants UI
- [Guide de développement](./development-guide.md) — Setup, conventions, commandes

### Planification BMM

- [Workflow Status](./planning-artifacts/bmm-workflow-status.yaml) — Suivi du workflow BMad Method

## Documentation existante

- [README.md](../README.md) — Introduction rapide au projet
- [CLAUDE.md](../.claude/CLAUDE.md) — Instructions Claude Code

## Démarrage rapide

### Installation

```bash
git clone https://github.com/ZooCo38/infojv.git
cd infojv
npm install
npm run dev
```

### Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run lint` | Vérification ESLint |

## État du projet

### Pages implémentées ✅

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil Bento Grid |
| `/expertise` | Page expertise |

### Pages à créer ❌

| Route | Description |
|-------|-------------|
| `/mobile` | Développement Mobile |
| `/projets` | Portfolio des projets |
| `/ia` | Services IA |
| `/contact` | Formulaire de contact |

## Design System

### Couleurs

| Token | Valeur | Usage |
|-------|--------|-------|
| `bg-page` | #0C0C0C | Fond sombre |
| `bg-card` | #FFF4F3 | Cards default |
| `accent` | #53E1A1 | Couleur mint |

### Composants

| Composant | Fichier |
|-----------|---------|
| `BentoGrid` | `src/components/ui/BentoGrid.tsx` |
| `BentoCard` | `src/components/ui/BentoCard.tsx` |
| `FloatingShape` | `src/components/ui/FloatingShape.tsx` |
| `Button` | `src/components/ui/Button.tsx` |
| `Icon` | `src/components/ui/Icon.tsx` |

## Pour les agents IA

Cette documentation est optimisée pour l'assistance IA dans le développement :

1. **Contexte** : Consulter [project-overview.md](./project-overview.md) pour comprendre le projet
2. **Architecture** : Consulter [architecture.md](./architecture.md) pour les décisions techniques
3. **Composants** : Consulter [component-inventory.md](./component-inventory.md) pour réutiliser les composants existants
4. **Code** : Consulter [development-guide.md](./development-guide.md) pour les conventions

## Prochaines étapes (BMad Method)

Selon le workflow BMM :

1. ✅ **Document Project** — Documentation générée
2. ⏳ **Brainstorm** — Exploration créative
3. ⏳ **PRD** — Product Requirements Document
4. ⏳ **Architecture** — Décisions d'architecture pour les nouvelles pages
5. ⏳ **Epics & Stories** — Planification détaillée

---

*Documentation générée le 2026-01-06 par BMad Method*
*Scan Level: Quick | Mode: Initial Scan*
