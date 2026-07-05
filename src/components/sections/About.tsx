import { Link as LinkIcon, Mail } from "lucide-react";
import { SectionHeading, Card } from "../common";
import { Tooltip, GithubIcon } from "../ui";
import { team } from "../../data/team";
import { useLang } from "../../hooks/useLang";

export default function About() {
  const { t, lang } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {team.map((member) => (
          <Card key={member.id}>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                {member.avatarInitials}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{member.role[lang]}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">{member.bio[lang]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {member.social?.github && (
                <Tooltip label="GitHub">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <GithubIcon size={18} />
                  </a>
                </Tooltip>
              )}
              {member.social?.linkedin && (
                <Tooltip label="LinkedIn">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <LinkIcon size={18} />
                  </a>
                </Tooltip>
              )}
              {member.social?.email && (
                <Tooltip label="Email">
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Mail size={18} />
                  </a>
                </Tooltip>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
