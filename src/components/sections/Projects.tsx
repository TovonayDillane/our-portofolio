import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { SectionHeading, Card, Button } from "../common";
import { Modal, GithubIcon } from "../ui";
import { projects } from "../../data/projects";
import { useLang } from "../../hooks/useLang";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { cn } from "../../utils/cn";

interface ProjectsProps {
  limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
  const { t, lang } = useLang();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const tags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), []);

  const filtered = useMemo(() => {
    const base = activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects;
    return limit ? base.slice(0, limit) : base;
  }, [activeTag, limit]);

  const openProject = projects.find((p) => p.id === openProjectId);

  const filterButtonClasses = (active: boolean) =>
    cn(
      "rounded-full border px-4 py-1.5 text-sm font-medium transition-smooth",
      active
        ? "border-slate-900 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-soft hover:shadow-soft-lg dark:border-white dark:from-white dark:to-slate-100 dark:text-slate-900"
        : "border-slate-200 text-slate-600 hover:border-slate-400 hover:shadow-soft dark:border-slate-800 dark:text-slate-400",
    );

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div className={cn(
        "transition-smooth duration-500",
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      )}>
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />
      </div>

      {!limit && (
        <div className={cn(
          "mt-8 flex flex-wrap gap-2 transition-smooth duration-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <button
            onClick={() => setActiveTag(null)}
            className={filterButtonClasses(activeTag === null)}
          >
            {t("projects.filterAll")}
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={filterButtonClasses(activeTag === tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <div
            key={project.id}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
            }}
            className={cn(
              "transition-smooth duration-500",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <Card glass hover animated className="flex flex-col group">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 aspect-video w-full rounded-xl object-cover group-hover:shadow-soft-lg transition-smooth"
                />
              ) : (
                <div className="mb-4 aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 group-hover:shadow-soft-lg transition-smooth" />
              )}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-smooth">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {project.description[lang]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100/60 dark:bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 transition-smooth group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 group-hover:text-brand-600 dark:group-hover:text-brand-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenProjectId(project.id)}
                className="mt-4 text-left text-sm font-medium text-brand-600 hover:underline dark:text-brand-400 transition-smooth"
              >
                {t("projects.viewProject")}
              </button>
            </Card>
          </div>
        ))}
      </div>

      {limit && projects.length > limit && (
        <div className={cn(
          "mt-10 transition-smooth duration-500",
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        )}>
          <Button to="/projets" variant="secondary">
            {t("projects.viewAll")}
          </Button>
        </div>
      )}

      <Modal
        open={Boolean(openProject)}
        onClose={() => setOpenProjectId(null)}
        title={openProject?.title ?? ""}
      >
        {openProject && (
          <div className="animate-scale-in">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {openProject.description[lang]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {openProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              {openProject.link && (
                <a
                  href={openProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline dark:text-brand-400 transition-smooth"
                >
                  <ExternalLink size={14} /> {t("projects.viewProject")}
                </a>
              )}
              {openProject.repo && (
                <a
                  href={openProject.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:underline dark:text-slate-400 transition-smooth"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
