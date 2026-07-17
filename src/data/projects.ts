import type { Project } from "../types";

// TODO: remplacez ces exemples par vos vrais projets (avec captures dans assets/images).
export const projects: Project[] = [
  {
    id: "plateforme-saas",
    title: "Plateforme SaaS",
    description: {
      fr: "Exemple : une plateforme SaaS avec authentification, facturation et tableau de bord.",
      en: "Example: a SaaS platform with authentication, billing and a dashboard.",
      mg: "Ohatra: sehatra SaaS misy fanamarinana, fandoavam-bola ary tabilao fanaraha-maso.",
    },
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee9816?auto=format&fit=crop&w=1400&q=80",
    link: "",
    repo: "",
  },
  {
    id: "app-ecommerce",
    title: "Application e-commerce",
    description: {
      fr: "Exemple : une application mobile de vente en ligne avec paiement intégré.",
      en: "Example: a mobile e-commerce app with integrated payments.",
      mg: "Ohatra: rindrambaiko finday fivarotana miaraka amin'ny fandoavam-bola tafiditra.",
    },
    tags: ["React Native", "Stripe"],
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80",
    link: "",
    repo: "",
  },
  {
    id: "site-vitrine-cms",
    title: "Site vitrine + CMS",
    description: {
      fr: "Exemple : un site vitrine avec un CMS sur mesure pour gérer le contenu facilement.",
      en: "Example: a showcase website with a custom CMS for easy content management.",
      mg: "Ohatra: tranonkala fampahafantarana misy CMS natao manokana hitantanana ny votoaty.",
    },
    tags: ["Next.js", "CMS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    link: "",
    repo: "",
  },
];
