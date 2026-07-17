import type { Lang } from "../i18n";

export interface Project {
  id: string;
  title: string;
  description: Record<Lang, string>;
  tags: string[];
  /** URL vers une image de présentation (optionnelle) */
  image?: string;
  link?: string;
  repo?: string;
}
