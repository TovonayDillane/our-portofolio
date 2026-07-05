import type { Lang } from "../i18n";

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Lang, string>;
  bio: Record<Lang, string>;
  avatarInitials: string;
  skills: string[];
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}
