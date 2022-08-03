import Head from "next/head";
import Portfolio from "../components/main/Portfolio";
import { useEffect } from "react";
import About from "../components/About";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    fetch("https://radiant-peak-65277.herokuapp.com/");
    // fetch("https://library-strapi.herokuapp.com/");
  }, []);

  useEffect(() => {
    if (router.asPath.includes("#")) {
      router.replace(router.route, undefined, { shallow: true });
    }
  }, [router]);

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
