 DILLANE × IAVO — Portfolio Duo (v1)

Moteur de design pour un portfolio duo : dark UI premium, accents néon lapis,
glassmorphism léger, animations Framer Motion. Voir `demo.html` pour un aperçu
instantané (aucune installation requise), ou lance le projet React ci-dessous
pour la version éditable.

## Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée (par défaut http://localhost:5173).

Build de production :

```bash
npm run build
npm run preview
```

## Structure

```
/src
  App.jsx                 → assemble Nav + sections
  index.css                → tokens globaux, utilitaires glass/gradient
  /data
    content.js              → timeline, projets, skills (contenu séparé du visuel)
  /components
    HeroSplit.jsx           → hero split screen + flux lumineux animé (signature)
    DuoTimeline.jsx         → section "Story", timeline verticale, reveal au scroll
    ProjectCard.jsx         → carte projet, tilt 3D + glow au hover
    SkillOrbit.jsx          → anneaux de compétences animés (Dillane vs Iavo)
```

## Personnalisation rapide

- **Couleurs / typographies** → `tailwind.config.js`
- **Contenu (textes, projets, valeurs de compétences)** → `src/data/content.js`
- **Profil d'Iavo** → remplace le bloc `right` dans `App.jsx` (props de `HeroSplit`)
  et la carte "Projet d'Iavo" dans `content.js`
- **Durées / easing des animations** → variable `ease = [0.4, 0, 0.2, 1]` en haut
  de chaque composant (200–600ms partout, conforme au moteur)

## Règles du moteur (à respecter dans toute nouvelle section)

- Jamais de bloc statique : chaque section a une entrée animée ou un reveal au scroll
- Hover = lift + glow · Click = légère compression (`whileTap={{ scale: 0.98 }}`)
- Palette : lapis `#2F6BFF`, violet `#8B5CF6`, cyan `#22D3EE`, fond `#080B13`
- Layout asymétrique contrôlé — éviter les grilles parfaitement centrées/carrées

## Pour aller plus loin (bonus v2)

- Portfolio 3D avec `three.js` / `@react-three/fiber` pour la hero section
- Transitions de page façon keynote (`AnimatePresence` + `layoutId` Framer Motion)
- Scroll narratif type Netflix / Spotify Wrapped (`react-scroll-parallax` ou scroll-linked animations Framer Motion)
# our-portofolio
