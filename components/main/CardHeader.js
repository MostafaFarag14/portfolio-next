import classes from "./portfolio.module.css";
import Image from "next/image";

function CardHeader({ project }) {
  return (
    <div className={`${classes.cardTop}`}>
      <div className={`${classes.overlay} p-2`}>{project.description}</div>
      <a href={project.url} target="_blank">
        <Image
          className={`card-img-top ${classes.cardImgTop}`}
          objectFit="cover"
          width={360}
          height={240}
          layout="responsive"
          src={project.image}
          data-holder-rendered="true"
        />
      </a>
    </div>
  );
}

export default CardHeader;
