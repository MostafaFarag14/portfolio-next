import { projectsUrls, imgPath } from '../../projectsUrls'
import classes from './main.module.css'

export default function Main() {
  return (
    <div id="portfolio">
      <div className="album py-5">
        <div className="container">
          <h1>PORTFOLIO</h1>
          <div className="row">
            {
              projectsUrls.map((project, index) => {
                return <div key={index} className="col-lg-6 mb-4">
                  <div className={`${classes.card} mb-4 shadow h-100`}>
                    <div className={`${classes.overlay} ${classes.overView} container`} >
                      {project.description}
                    </div>
                    <a href={project.url} target="_blank">
                      <img className={`card-img-top ${classes.cardImgTop}`} height="300" src={project.image} data-holder-rendered="true" />
                    </a>
                    <hr className="m-0"></hr>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-text mb-3">{project.name}</h5>
                      <div className="d-flex justify-content-between align-items-center">

                        <div className="btn-group">

                          {project.url && <a className="btn btn-sm btn-outline-info" href={project.url} target="_blank">View Live</a>}
                          <a className="btn btn-sm btn-outline-info" href={project.code} target="_blank">Source Code</a>
                        </div>

                        <small className="text-muted"></small>
                        <ul className="d-flex flex-wrap">
                          {project.tools.map((tool, index) => {
                            return (
                              tool.imgUrl.includes('wide') ? <li key={index} className="px-1">
                                <img title={tool.title} width="70" src={`${imgPath}/${tool.imgUrl}`} />
                              </li>
                                :
                                <li title={tool.title} key={index} className="px-1">
                                  <img width="30" src={`${imgPath}/${tool.imgUrl}`} />
                                </li>
                            )
                          })}

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }

          </div>
        </div>

      </div>
    </div>

  )
}
