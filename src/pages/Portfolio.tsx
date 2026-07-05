import { Projects as ProjectsSection } from "../components/sections";
import { useLang } from "../hooks/useLang";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Portfolio() {
  const { t } = useLang();
  useDocumentTitle(t("nav.projects"));

  return <ProjectsSection />;
}
