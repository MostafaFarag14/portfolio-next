import ProjectTools from "./ProjectTools";

const ProjectLink = ({ title, href }) => <a
  className="btn btn-sm btn-outline-info"
  href={href}
  target="_blank"
>
  {title}
</a>

function CardFooter({ project }) {
  return (
    <div className="card-body p-2 d-flex flex-column justify-content-between">
      <h5 className="card-text mb-3">{project.name}</h5>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group flex-wrap">
          {project.url && <ProjectLink title={"View Live"} href={project.url} />}
          <ProjectLink title={"Source Code"} href={project.code} />
        </div>
        <ProjectTools tools={project.tools} />
      </div>
    </div>
  );
}

export default CardFooter;
