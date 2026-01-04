# Projet Info JV — Instructions Claude Code

## Repository
- GitHub: https://github.com/ZooCo38/infojv
- Owner: romain.jouas@gmail.com (ZooCo38)
- Branch principale: main

## Contexte
Site vitrine pour Info JV, entreprise de services informatiques de Julien Villard.
Design Bento Grid moderne avec accent mint (#53E1A1) sur fond sombre (#0C0C0C).

## Stack
- Next.js 14.2.x (App Router) — NE PAS utiliser v15
- Tailwind CSS 3.4.x — NE PAS utiliser v4
- Framer Motion pour les animations
- Material Symbols pour les icônes
- Poppins comme font unique

## Règles strictes
1. NE PAS utiliser Turbopack — webpack classique uniquement
2. NE PAS inventer de contenu — utiliser uniquement les données du brief
3. TOUJOURS utiliser les couleurs du design system
4. TOUJOURS animer les entrées de cards avec stagger
5. Les shapes 3D doivent flotter avec Framer Motion
6. COMMIT régulièrement avec messages clairs

## Design System
- Background page: #0C0C0C
- Cards: #FFF4F3 (crème rosé)
- Accent: #53E1A1 (mint)
- Gradient: #FFFFFF → #C9F9E3
- Font: Poppins uniquement
- Border-radius: 24px pour les cards
- Grid: 4 colonnes × 4 lignes

## Layout Bento Homepage
```
grid-template-areas:
  "infojv   projets   annees    siteweb"
  "infojv   julien    julien    siteweb"
  "mobile   julien    julien    banques"
  "mobile   marseille contact   contact"
```

## Composants clés
- BentoGrid: Container avec grid CSS
- BentoCard: Card avec variantes (default, white, mint, mint-reverse, dark)
- FloatingShape: Image 3D avec animation de flottement
- Icon: Wrapper pour Material Symbols

## Assets disponibles
- /assets/Julien-Villard.png — Portrait détouré
- /assets/mobile.png — Mockup téléphone
- /assets/preview.png — Preview du design attendu
- /assets/shape_3D/*.png — Formes 3D noires

## Ordre de développement
1. Setup projet + configuration ✅
2. Design system (globals.css + tailwind.config) ✅
3. Composants UI (BentoGrid, BentoCard, etc.) ✅
4. Layout (Header minimal) ✅
5. Page d'accueil complète ✅
6. Pages secondaires
7. Animations + polish
8. Responsive

## Commits
Utiliser les conventions :
- 🎉 init: Initialisation
- ✨ feat: Nouvelle fonctionnalité
- 🐛 fix: Correction de bug
- 💄 style: Style/CSS
- ♻️ refactor: Refactoring
