import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'
import classes from './header.module.css'

export default function Header() {

  return (
    <nav id="header" className="navbar navbar-expand-sm shadow sticky-top" className={classes.header} >
      <div className="container justify-content-center">
        <ul className="navbar-nav">
          <Scrollspy className="navbar-nav scrollspy" items={['about', 'portfolio', 'contact']} currentClassName={classes.isCurrent}>
            {['About', 'Portfolio', 'Contact'].map((item, index) => {
              return (<li key={index} className="nav-item mx-4">
                <a className={classes.navLink} href={`#${item.toLowerCase()}`}>{item}</a>
              </li>)
            })}
          </Scrollspy>
        </ul>
      </div>
    </nav>
    // <Navbar bg='dark' variant='dark' expand='sm' sticky="top">
    //   <Container  className='justify-content-center'>
    //   <Nav>
    //     {['About', 'Portfolio', 'Contact'].map((item, index) => {
    //       return (<Nav.Item key={index}>
    //         <Nav.Link href={`#${item.toLowerCase()}`}>{item}</Nav.Link>
    //       </Nav.Item>)
    //     })}
    //   </Nav>
    //   </Container>
    //   {/* <Button className={classes.btn}>Click</Button> */}
    // </Navbar>
  )

}
