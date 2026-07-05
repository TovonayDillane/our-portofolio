import { Code2, Globe, Palette, Plug, Smartphone, Wrench } from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "sites-vitrines",
    icon: Globe,
    title: {
      fr: "Sites vitrines",
      en: "Showcase websites",
      mg: "Tranonkala fampahafantarana",
    },
    description: {
      fr: "Des sites modernes, rapides et responsives pour présenter votre activité.",
      en: "Modern, fast and responsive websites to present your business.",
      mg: "Tranonkala maoderina, haingana ary mifanaraka amin'ny efijery rehetra.",
    },
  },
  {
    id: "applications-web",
    icon: Code2,
    title: {
      fr: "Applications web",
      en: "Web applications",
      mg: "Rindrambaiko web",
    },
    description: {
      fr: "Des applications rapides et maintenables, du prototype à la mise en production.",
      en: "Fast, maintainable applications, from prototype to production.",
      mg: "Rindrambaiko haingana sady azo tantanina, manomboka amin'ny santionany.",
    },
  },
  {
    id: "desktop",
    icon: Code2,
    title: {
      fr: "Applications de bureau",
      en: "Desktop application",
      mg: "Rindrambaiko birao",
    },
    description: {
      fr: "Des applications faite sur mesure pour vous répondant à vos besoins.",
      en: "Custom-made applications tailored to your needs.",
      mg: "Rindrambaiko vita manokana ho anao natao hamaly ny filanao sy orinasa.",
    },
  },
  {
    id: "applications-mobiles",
    icon: Smartphone,
    title: {
      fr: "Applications mobiles",
      en: "Mobile apps",
      mg: "Rindrambaiko finday",
    },
    description: {
      fr: "Des expériences mobiles fluides pour iOS et Android.",
      en: "Smooth mobile experiences for iOS and Android.",
      mg: "Traikefa amin'ny finday malama ho an'ny iOS sy Android.",
    },
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: {
      fr: "UI/UX design",
      en: "UI/UX design",
      mg: "Famolavolana UI/UX",
    },
    description: {
      fr: "Des interfaces claires, accessibles et pensées pour vos utilisateurs.",
      en: "Clear, accessible interfaces designed around your users.",
      mg: "Sehatra mazava, mora ampiasaina ary natao ho an'ny mpampiasa anao.",
    },
  },
  {
    id: "integrations-api",
    icon: Plug,
    title: {
      fr: "Intégrations API",
      en: "API integrations",
      mg: "Fampifandraisana API",
    },
    description: {
      fr: "Connexion de vos outils, paiements, CRM et services tiers.",
      en: "Connect your tools, payments, CRM and third-party services.",
      mg: "Fampifandraisana fitaovana, fandoavam-bola, CRM ary serivisy hafa.",
    },
  },
  {
    id: "maintenance-optimisation",
    icon: Wrench,
    title: {
      fr: "Maintenance & optimisation",
      en: "Maintenance & optimization",
      mg: "Fikojakojana sy fanatsarana",
    },
    description: {
      fr: "Suivi technique, corrections, sécurité et amélioration des performances.",
      en: "Technical support, fixes, security and performance improvements.",
      mg: "Fanohanana teknika, fanamboarana, fiarovana ary fanatsarana hafainganam-pandeha.",
    },
  },
];
