import classes from "./portfolio.module.css";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { Project } from "../../utils/types";

function ProjectItem({ project }: { project: Project }) {
  return (
    <div
      className={`${classes.card} p-2 mb-4 shadow-sm d-flex flex-column justify-content-between`}
      style={{
        height: "95%",
        borderRadius: "2%",
      }}
    >
      <CardHeader project={project} />
      <hr className="m-0"></hr>
      <CardFooter project={project} />
    </div>
  );
}

export default ProjectItem;
