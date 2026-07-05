import type { TeamMember } from "../types";

// TODO: remplacez par vos vraies infos (photos dans assets/images, liens réels).
export const team: TeamMember[] = [
  {
    id: "membre-1",
    name: "Votre nom",
    role: {
      fr: "Frontend & UI",
      en: "Frontend & UI",
      mg: "Frontend & UI",
    },
    bio: {
      fr: "À compléter : votre parcours, vos spécialités, ce qui vous distingue.",
      en: "To fill in: your background, specialties, what sets you apart.",
      mg: "Fenoy: ny lalanao, ny fahaizanao manokana.",
    },
    avatarInitials: "A",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    social: { github: "", linkedin: "", email: "" },
  },
  {
    id: "membre-2",
    name: "Nom de votre associé·e",
    role: {
      fr: "Backend & infrastructure",
      en: "Backend & infrastructure",
      mg: "Backend & infrastructure",
    },
    bio: {
      fr: "À compléter : votre parcours, vos spécialités, ce qui vous distingue.",
      en: "To fill in: your background, specialties, what sets you apart.",
      mg: "Fenoy: ny lalanao, ny fahaizanao manokana.",
    },
    avatarInitials: "B",
    skills: ["Node.js", "PostgreSQL", "API REST"],
    social: { github: "", linkedin: "", email: "" },
  },
];
