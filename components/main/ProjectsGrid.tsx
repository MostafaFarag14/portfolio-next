import { useState } from "react";
import { Button } from "react-bootstrap";
import { Transition } from "react-transition-group";
import ProjectItem from "./ProjectItem";
import classes from "./portfolio.module.css";
import { Project } from "../../utils/types";

function ProjectsGrid({
  projects,
  moreToShow = false,
}: {
  projects: Project[];
  moreToShow?: boolean;
}) {
  const [showAll, setShowAll] = useState(false);

  const allProjects = moreToShow ? projects.slice(0, 6) : projects;
  const moreProjects = moreToShow ? projects.slice(6) : [];

  return (
    <div className="mb-4">
      <div className="row">
        {allProjects.map((project, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <ProjectItem project={project} />
          </div>
        ))}

        {moreToShow &&
          moreProjects.map((project, index) => (
            <Transition
              key={index}
              in={showAll}
              timeout={300}
              mountOnEnter
              unmountOnExit
            >
              {(state) => {
                return (
                  <div
                    style={{
                      transition: "all 0.5s",
                    }}
                    className={`col-lg-6 mb-4 
              ${
                state === "entering"
                  ? classes.allViewed
                  : state === "exiting"
                  ? classes.someViewed
                  : ""
              }`}
                  >
                    <ProjectItem project={project} />
                  </div>
                );
              }}
            </Transition>
          ))}
      </div>
      {moreToShow && (
        <Button
          variant="primary"
          onClick={() => setShowAll((prevState) => !prevState)}
        >
          View {showAll ? "Less" : "More"}
        </Button>
      )}
    </div>
  );
}

export default ProjectsGrid;
