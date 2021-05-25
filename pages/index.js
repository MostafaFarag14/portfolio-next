import About from '../components/about/about'
import Contact from '../components/contact/contact'
import Header from '../components/header/header'
import Main from '../components/main/main'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', minWidth: '30rem'}}>
      <Header />
      <About />
      <Main />
      <Contact />
    </div >
  )
}
