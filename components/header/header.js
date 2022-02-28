import Scrollspy from 'react-scrollspy'
import classes from './header.module.css'

export default function Header() {

  return (
    <nav className={`${classes.navBar} shadow`} >
      <Scrollspy className="navbar-nav flex-row p-3 justify-content-center scrollspy" items={['about', 'portfolio', 'contact']} currentClassName={classes.isCurrent}>
        {['About', 'Portfolio', 'Contact'].map((item, index) => {
          return (<li key={index} className="nav-item mx-4 px-2">
            <a className={classes.navLink} href={`#${item.toLowerCase()}`}>{item}</a>
          </li>)
        })}
      </Scrollspy>
    </nav>
  )
}
