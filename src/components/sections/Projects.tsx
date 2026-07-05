import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { SectionHeading, Card, Button } from "../common";
import { Modal, GithubIcon } from "../ui";
import { projects } from "../../data/projects";
import { useLang } from "../../hooks/useLang";
import { cn } from "../../utils/cn";

interface ProjectsProps {
  limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
  const { t, lang } = useLang();
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
      "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
      active
        ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
        : "border-slate-200 text-slate-600 hover:border-slate-400 dark:border-slate-800 dark:text-slate-400",
    );

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      {!limit && (
        <div className="mt-8 flex flex-wrap gap-2">
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
        {filtered.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <div className="mb-4 aspect-video rounded-xl bg-slate-100 dark:bg-slate-800" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
              {project.description[lang]}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => setOpenProjectId(project.id)}
              className="mt-4 text-left text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
            >
              {t("projects.viewProject")}
            </button>
          </Card>
        ))}
      </div>

      {limit && projects.length > limit && (
        <div className="mt-10">
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
          <div>
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
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400"
                >
                  <ExternalLink size={14} /> {t("projects.viewProject")}
                </a>
              )}
              {openProject.repo && (
                <a
                  href={openProject.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400"
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
