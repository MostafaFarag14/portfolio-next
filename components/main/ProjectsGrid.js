import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { projectsUrls } from "../../projectsUrls";
import ProjectItem from "./ProjectItem";

function ProjectsGrid() {
  const [showAll, setShowAll] = useState(false)

  const projects = useMemo(() =>
    showAll ? projectsUrls : projectsUrls.slice(0, 6)
    , [showAll])

  return (
    <div>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
      <Button variant="primary" onClick={() => setShowAll((prevState) => !prevState)}>
        View {showAll ? "Less" : "More"}
      </Button>
    </div>
  );
}

export default ProjectsGrid;
