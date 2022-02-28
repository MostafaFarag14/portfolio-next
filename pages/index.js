import Head from "next/head";
import Contact from "../components/contact/contact";
import Portfolio from "../components/main/Portfolio";
import Header from "../components/header/header";
import { useEffect } from "react";
import About from "../components/about";

export default function Home() {
  useEffect(() => {
    fetch("https://radiant-peak-65277.herokuapp.com/");
    fetch("https://library-strapi.herokuapp.com/");
  }, []);

  return (
    <div className="home">
      <Head>
        <title>Mostafa Farag</title>
      </Head>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
