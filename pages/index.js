import About from '../components/about/about'
import Header from '../components/header/header'
import Main from '../components/main/main'

export default function Home() {
  return (
    <div className="App">
      <Header />
      <About />
      <Main />
      {/* <Contact /> */}
    </div>
  )
}
