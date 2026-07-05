import { Code2, Smartphone, Palette } from "lucide-react";
import type { Service } from "../types";

// TODO: adaptez la liste à vos véritables offres.
export const services: Service[] = [
  {
    id: "web-apps",
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
    id: "mobile",
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
    id: "design",
    icon: Palette,
    title: {
      fr: "UI/UX design",
      en: "UI/UX design",
      mg: "Famolavolana UI/UX",
    },
    description: {
      fr: "Des interfaces claires, pensées pour vos utilisateurs.",
      en: "Clear interfaces, designed around your users.",
      mg: "Sehatra mazava, natao ho an'ny mpampiasa anao.",
    },
  },
];
