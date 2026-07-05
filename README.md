# Projet entre pote | PORTFOLIO

## Méthode de travail
- Chaque personne vont mettre des "commits" bien précis de ce qu'ils ont fait.
- Je vais crée des branches pour que chaqun push sur une branche qui va être vérifier avant de la mettre dans "main".
- Faite toujour un pull dans le branch "main" avant de faire un push pour éviter les conflit.

## Structure des branches
- main : personne ne touche au main sauf si le code est vérifier et fonctionnel
- develop : le code à vérifier
- fixbug : code qui présente un bug à fixer

## Structure du projets en générale
```
src/
├── assets/          images, icônes, logo (vides pour l'instant, .gitkeep)
├── components/
│   ├── common/      Button, Card, SectionHeading — briques de base réutilisées partout
│   ├── layout/       Header, Footer, Layout (Header+Outlet+Footer)
│   ├── sections/    Hero, About, Services, Projects, ContactCta, Contact
│   │                 → Services et Projects acceptent une prop `limit` (aperçu sur Home vs page complète)
│   └── ui/          Modal, Tooltip, GithubIcon — patterns d'overlay/petits composants
├── pages/           une page par route, composent les sections ci-dessus
├── contexts/        ThemeContext (clair/sombre) + LangContext (fr/en/mg)
│                     le contexte brut est dans *-context.ts séparé du provider *.tsx
│                     (règle react-refresh : un fichier component = un fichier, un fichier contexte = un autre)
├── hooks/           useTheme, useLang (consomment les contexts), useDocumentTitle
├── i18n/            fr.ts / en.ts / mg.ts (clés à plat "nav.home", etc.) + index.ts qui type le tout
├── data/            services.ts, projects.ts, team.ts, site-config.ts — vos contenus
├── types/           Service, Project, TeamMember
└── utils/           cn.ts (fusion de classes Tailwind)
```

## Démarrer

```bash
npm install
npm run dev
```

Autres commandes utiles :

```bash
npm run build     # build de prod dans dist/ (vérifie aussi les types)
npm run preview   # sert le build de prod localement
npm run lint      # oxlint
npx prettier --write .   # formatage
```