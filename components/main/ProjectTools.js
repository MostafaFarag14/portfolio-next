import { imgPath } from "../../projectsUrls";

function ProjectTools({ tools }) {
  return (
    <ul className="d-flex justify-content-center m-0 p-0 flex-wrap">
      {tools.map((tool, index) =>
        <li title={tool.title} key={index} className="px-1">
          <img
            width={tool.imgUrl.includes("wide") ? "70" : "30"}
            src={`${imgPath}/${tool.imgUrl}`}
          />
        </li>
      )}
    </ul>
  )
}

export default ProjectTools