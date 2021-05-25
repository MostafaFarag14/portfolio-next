import React, { Component } from 'react'
import {imgPath} from '../projectsUrls'
import './contact.module.css'

const contacts = [
  {
    logo: `${imgPath}/phone.svg`,
    url: "#",
    text: "01152787808"
  },
  {
    logo: `${imgPath}/linkedin.svg`,
    url: "https://www.linkedin.com/in/mostafafarag14/",
    text: ""
  },
  {
    logo: `${imgPath}/GitHub.png`,
    url: "https://github.com/MostafaFarag14",
    text: ""
  },
  {
    logo: `${imgPath}/gmail.png`,
    url: "#",
    text: "mostafafarag140@gmail.com"
  }

]

export default class Contact extends Component {
  render() {
    return (

      <div id='contact' className="contacts text-light">
        <h1 className="mb-5">CONTACT</h1>
        <ul className="justify-content-center d-flex flex-wrap mb-0">
          {contacts.map((contact, index) => {
            return (
              <div key={index} className="">
                <li  className="px-5 d-flex">
                  {
                    contact.url === "#" ? 
                      <img className="mx-5 d-flex" src={contact.logo} height="40" width="40" ></img>
                      // <i class="bi bi-phone" style={{fontSize: 24}}></i>
                    :
                    <a className="mx-5" href={contact.url} target="_blank">
                    <img className="contact d-flex" src={contact.logo} height="40" width="40" ></img>
                  </a>
                  }

                </li>
                <div className="p-2">{contact.text}</div>
              </div>
            )
          })}
        </ul>
      </div>



    )
  }
}
