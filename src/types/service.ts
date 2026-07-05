import type { LucideIcon } from "lucide-react";
import type { Lang } from "../i18n";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}
