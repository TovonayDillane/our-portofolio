import { Link as LinkIcon, Mail } from "lucide-react";
import { SectionHeading, Card } from "../common";
import { Tooltip, GithubIcon } from "../ui";
import { team } from "../../data/team";
import { useLang } from "../../hooks/useLang";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { cn } from "../../utils/cn";

export default function About() {
  const { t, lang } = useLang();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div className={cn(
        "transition-smooth duration-500",
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      )}>
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {team.map((member, index) => (
          <div
            key={member.id}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
            }}
            className={cn(
              "transition-smooth duration-500",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <Card glass hover animated className="group">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-brand-100 text-sm font-semibold text-brand-600 dark:from-brand-500/20 dark:to-brand-600/10 dark:text-brand-300 group-hover:scale-110 transition-smooth shadow-soft">
                  {member.avatarInitials}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-smooth">{member.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{member.role[lang]}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">{member.bio[lang]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100/60 dark:bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-smooth"
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
                      className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-smooth hover:scale-125 active:scale-95"
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
                      className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-smooth hover:scale-125 active:scale-95"
                    >
                      <LinkIcon size={18} />
                    </a>
                  </Tooltip>
                )}
                {member.social?.email && (
                  <Tooltip label="Email">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-smooth hover:scale-125 active:scale-95"
                    >
                      <Mail size={18} />
                    </a>
                  </Tooltip>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
