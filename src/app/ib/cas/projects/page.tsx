import Projects from "../../../../legacy/ib/cas/projects";
import { getAllProjectEntries } from "../../../../lib/ib-cas/projects-mdx";

export default function ProjectsPage() {
  return <Projects all={JSON.stringify(getAllProjectEntries(false))} />;
}
