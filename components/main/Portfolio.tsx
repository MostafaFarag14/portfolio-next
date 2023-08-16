import ProjectsGrid from "./ProjectsGrid";
import { projectsUrls } from "../../projectsUrls";

function Portfolio() {
  const realApps = projectsUrls.slice(0, 3);
  const demoApps = projectsUrls.slice(3);

  return (
    <div id="portfolio" className="container py-5">
      <h1 className="mb-3">Portfolio</h1>
      <h2 className="mb-3 text-left">Real Apps</h2>
      <ProjectsGrid projects={realApps} />
      <h2 className="mb-3 text-left">Demo Apps</h2>
      <ProjectsGrid projects={demoApps} moreToShow />
    </div>
  );
}

export default Portfolio;
