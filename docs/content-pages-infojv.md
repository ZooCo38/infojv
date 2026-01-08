# Info JV — Contenu des pages

> 📋 Document de référence pour l'intégration du site
> Généré le 2026-01-06 via brainstorming BMad Method

---

## Positionnement global

| Élément | Valeur |
|---------|--------|
| **Cible** | PME, clubs/assos, entrepreneurs, DG |
| **Ton** | Pro + Accessible + Humain + Léger |
| **Promesse** | Solutions concrètes, pas d'usine à gaz |
| **Différenciant** | Expert freelance accessible, pas une agence froide |

**Services principaux :**
1. Dev Web (sites pro)
2. Dev Mobile (apps)
3. Accompagnement IA
4. Automatisation de process

**❌ Supprimé :** Sites mariage, photos, asso (dilue le positionnement)

---

# 🎯 PAGE EXPERTISE

**Route :** `/expertise`
**Priorité :** 🔴 Haute

## Hero (rotation animée)

```
Accroche 1:
Titre: "Expert digital pour votre business"
Sous-titre: "Je transforme vos idées en solutions numériques qui marchent."

Accroche 2:
Titre: "Votre partenaire digital de confiance"
Sous-titre: "Sites web, apps mobiles, IA — des solutions concrètes pour les pros."

Accroche 3:
Titre: "Du code, des résultats"
Sous-titre: "20 ans d'expertise au service de votre croissance digitale."
```

**Note tech :** Implémenter rotation avec Framer Motion (AnimatePresence)

## Services (4 cards)

### 💻 Dev Web
**Titre :** Sites qui convertissent
**Accroche :** Un site pro qui vous ressemble et attire vos clients.
**Lien :** → Page Projets

### 📱 Dev Mobile
**Titre :** Apps sur mesure
**Accroche :** L'application dont votre business a besoin.
**Lien :** → Page Mobile

### 🤖 IA
**Titre :** L'IA accessible
**Accroche :** Automatisez, analysez, gagnez du temps.
**Lien :** → Page IA

### ⚙️ Automatisation
**Titre :** Process simplifiés
**Accroche :** Fini les tâches répétitives, place à l'efficacité.
**Lien :** → Page IA

## CTA final

**Texte :** Discutons de votre projet
**Action :** → Contact (modale)

---

# 📱 PAGE MOBILE

**Route :** `/mobile`
**Priorité :** 🟠 Moyenne

## Hero

**Titre :** Votre idée mérite une app
**Sous-titre :** Je développe l'application mobile qui fera la différence.

## Section "Pourquoi une app ?"

**Citation :**
> "Une app, c'est votre entreprise dans la poche de vos clients."

## Bénéfices (3 cards)

### 👥 Base utilisateurs
**Texte :** Constituez une communauté fidèle autour de votre marque.

### 🔔 Notifications
**Texte :** Restez présent dans le quotidien de vos clients.

### ⚙️ Outil métier
**Texte :** Une solution sur mesure pour vos besoins spécifiques.

## Bloc Techno

**Titre :** Flutter : une app, deux stores
**Texte :** Développement optimisé pour iOS et Android, sans compromis sur la qualité.

## Référence projet

**Projet :** Oroneo
**Type :** Application mobile + IA
**Description :** Gestion patrimoniale intelligente
**Visuel :** [Screenshot app à récupérer]

## CTA

**Texte :** Parlons de votre projet d'app
**Action :** → Contact (modale)

---

# 📁 PAGE PROJETS

**Route :** `/projets`
**Priorité :** 🟠 Moyenne

## Hero

**Titre :** Des solutions concrètes, des résultats réels
**Sous-titre :** Chaque projet est une histoire de confiance et de réussite.

## Projet 1 : Oroneo

**Badge :** Application mobile + IA
**Titre :** Oroneo
**Description :** Gestion patrimoniale intelligente. Une app qui simplifie le suivi de patrimoine grâce à l'intelligence artificielle.
**Résultat :** L'IA au service de décisions éclairées.
**Visuel :** [Screenshot app]

## Projet 2 : Automatisation BAS

**Badge :** Process automation
**Titre :** Automatisation documentaire
**Description :** Récupération automatique d'informations web et organisation intelligente d'une base documentaire.
**Résultat :** Des heures gagnées, des données structurées.
**Visuel :** [Schéma process à créer]

## Bloc ouverture

**Titre :** Ce n'est qu'un aperçu...
**Texte :** Chaque projet est unique. Le vôtre aussi.

## CTA

**Texte :** Un projet ? Discutons-en
**Action :** → Contact (modale)

---

# 🤖 PAGE IA

**Route :** `/ia`
**Priorité :** 🔴 Haute (différenciant !)

## Hero

**Titre :** L'IA, c'est pas que pour les grosses sociétés
**Sous-titre :** C'est surtout pour ceux qui veulent avancer.

## Section "Notre approche"

**Texte :**
> On démystifie l'IA pour les PME.
>
> Oubliez le jargon technique et les usines à gaz. Ici, on parle résultats : du temps gagné, des process simplifiés, des décisions éclairées.
>
> On commence petit, on grandit ensemble.

## Cas d'usage (4 cards)

### 🤖 Compagnon de marque
**Texte :** Un assistant qui répond à vos clients, trie les demandes, escalade si besoin. 24h/24.

### 📋 Aide administrative
**Texte :** Notes de frais, documents, classement... L'IA s'en occupe pendant que vous bossez.

### 📊 Aide stratégique
**Texte :** Analysez vos ventes, vos clients, vos données. Sans être expert data.

### ⚡ Agents automatisés
**Texte :** Des process qui tournent tout seuls, même quand vous dormez.

## CTA

**Titre :** Curieux ? Parlons de votre cas.
**Texte :** Pas de blabla, on regarde ensemble ce que l'IA peut faire pour vous.
**Bouton :** Prendre rendez-vous
**Action :** → Contact (modale ou Calendly)

---

# 📞 PAGE CONTACT

**Route :** `/contact` ou modale globale
**Priorité :** 🟢 Basse (rapide à faire)

## Header

**Titre :** Parlons de votre projet
**Sous-titre :** Pas de commercial, c'est moi qui réponds.

## Canaux de contact

| Canal | Valeur | Icône |
|-------|--------|-------|
| Email | julien@infojv.net | 📧 |
| Twitter | @infojv | 🐦 |
| Chat | Widget intégré | 💬 |

## Formulaire

**Champs :**
- Nom (requis)
- Email (requis)
- Message (requis)

**Bouton :** C'est parti !

---

# 📝 CHECKLIST D'INTÉGRATION

## Phase 1 : Préparation
- [ ] Récupérer screenshots Oroneo
- [ ] Créer visuel/schéma process BAS
- [ ] Confirmer email/Twitter Julien
- [ ] Choisir solution chat (Crisp, Intercom, etc.)

## Phase 2 : Développement
- [ ] Refondre `/expertise` avec nouveau contenu
- [ ] Créer page `/ia`
- [ ] Créer page `/mobile`
- [ ] Créer page `/projets`
- [ ] Créer modale Contact

## Phase 3 : Polish
- [ ] Animation hero rotation (Framer Motion)
- [ ] Animations d'entrée cards (stagger)
- [ ] Responsive toutes pages
- [ ] Tests et QA

---

# 💡 NOTES IMPORTANTES

## Règles d'or (issues du brainstorming)

1. **Montrer avant de dire** → Portfolio, exemples concrets
2. **Être transparent sur les prix** → "À partir de..." si possible
3. **Rester humain et accessible** → Freelance expert, pas agence
4. **Parler bénéfices, pas technique** → Surtout pour l'IA !
5. **Le site = la preuve** → Design moderne obligatoire

## Personas cibles

| Persona | Besoin principal | Ce qui compte |
|---------|------------------|---------------|
| Président club sportif | Site moderne | Portfolio, prix |
| Patron PME | Visibilité Google | Prix ++, exemples |
| Entrepreneur | App mobile | Contact facile, pas trop "agence" |
| DG PME | IA/Automatisation | Zéro jargon, cas concrets |

---

*Document généré via brainstorming BMad Method*
*Session du 2026-01-06*
