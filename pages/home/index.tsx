import type { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Skills from "../../components/skills/Skills";
import AboutMe from "../../components/about-me/AboutMe";
import Projects from "../../components/projects/Projects";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import { AppContext } from "../../components/hooks/AppContext.hook";
import CollabModal from "../../components/collaborate/CollabModal";
// import Image1 from "../../public/alsoknownaszac.avif";
// import Image2 from "../../public/blackbg1.avif";
// import Image3 from "../../public/blackbg2.avif";
// import Image4 from "../../public/officesetup.avif";
// import useImagePreloader from "../../components/hooks/useImagePreloader";

// const preloadSrcList: any[] = [Image1, Image2, Image3, Image4];

const Home: NextPage = () => {
  const { display } = useContext(AppContext);

  // const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  // if (!imagesPreloaded) {
  //   return <p>Preloading Assets</p>;
  // }

  return (
    <div
      className={`h-screen w-screen overflow-x-hidden ${
        (display.navMenu === true || display.modal === true) &&
        `overflow-y-hidden`
      }`}
    >
      <Head>
        <title>Amayo Collins Portfolio</title>
      </Head>
      <CollabModal />
      <HeroSection />
      <Skills />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
