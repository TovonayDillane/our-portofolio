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
src/
├── assets/                 # Images, icônes, vidéos, fonts
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── components/             # Composants réutilisables
│   ├── common/             # Boutons, Cards, Inputs...
│   ├── layout/             # Header, Footer, Navbar...
│   ├── sections/           # Hero, About, Services...
│   └── ui/                 # Modal, Toast, Tooltip...
│
├── pages/                  # Pages
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   ├── About.tsx
│   └── NotFound.tsx
│
├── hooks/                  # Hooks personnalisés
│
├── contexts/               # Theme, Lang, Auth...
│
├── data/                   # Données statiques
│   ├── services.ts
│   ├── projects.ts
│   └── teams.ts
│
├── i18n/                   # Traductions
│   ├── en.ts
│   ├── fr.ts
│   └── mg.ts
│
├── types/                  # Interfaces TypeScript
│
├── utils/                  # Fonctions utilitaires
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── animations.css
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts