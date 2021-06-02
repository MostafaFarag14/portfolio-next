import Head from 'next/head'

import About from '../components/about/about'
import Contact from '../components/contact/contact'
import Main from '../components/main/main'
import Header from '../components/header/header'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    fetch('https://radiant-peak-65277.herokuapp.com/')
    fetch('https://library-strapi.herokuapp.com/')
  }, [])
  return (
    <div style={{ textAlign: 'center', minWidth: '30rem' }}>
      <Head>
        <title>Mostafa Farag</title>
      </Head>
      <Header />
      <About />
      <Main />
      <Contact />
    </div >
  )
}
