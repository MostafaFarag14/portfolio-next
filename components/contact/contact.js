import { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { imgPath } from '../../projectsUrls'
import classes from './contact.module.css'

const contacts = [
  {
    type: "phone",
    logo: `${imgPath}/phone.svg`,
    url: "#",
    text: "01152787808"
  },
  {
    type: "linkedin",
    logo: `${imgPath}/linkedin.svg`,
    url: "https://www.linkedin.com/in/mostafafarag14/",
    text: ""
  },
  {
    type: "github",
    logo: `${imgPath}/GitHub.png`,
    url: "https://github.com/MostafaFarag14",
    text: ""
  },
  {
    type: "email",
    logo: `${imgPath}/gmail.png`,
    url: "#",
    text: "mostafafarag140@gmail.com"
  }

]


export default function Contact() {
  const [renderToolTip, setRenderToolTip] = useState(null)
  const [tipContent, setTipContent] = useState("Copy")

  useEffect(() => {
    setRenderToolTip(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTipContent("Copy")
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [tipContent])

  return (
    <div id='contact' className={`${classes.contacts} text-light`}>
      <h1 className="mb-5">Contact</h1>
      <ul className="justify-content-center d-flex flex-wrap p-0 mb-0">
        {contacts.map((contact, index) => {
          return (
            <div key={index} className="p-2">
              <li className="px-5 d-flex">
                {
                  contact.url === "#" ?
                    <button className={`${classes.contactButton} mx-5`} >
                      <img data-tip data-for="contact" className={` ${classes.contact} d-flex`} src={contact.logo} height="40" width="40" onClick={async () => {
                        await navigator.clipboard.writeText(contact.text)
                        setTipContent(`Copied ✔`)
                      }}></img>
                    </button>
                    :
                    <a className="mx-5" href={contact.url} target="_blank">
                      <img className={`${classes.contact} d-flex`} src={contact.logo} height="40" width="40" ></img>
                    </a>
                }
              </li>
              <div className="p-2">{contact.text}</div>
            </div>
          )
        })}
      </ul>
      {renderToolTip && <ReactTooltip effect="solid" id="contact">
        {tipContent}
      </ReactTooltip>}
    </div>
  )
}
