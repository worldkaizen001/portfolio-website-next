import type { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Skills from "../../components/skills/Skills";
import AboutMe from "../../components/about-me/AboutMe";
import Projects from "../../components/projects/Projects";
import Packages from "../../components/packages/Packages";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import { AppContext } from "../../components/hooks/AppContext.hook";
import CollabModal from "../../components/collaborate/CollabModal";

const Home: NextPage = () => {
  const { display } = useContext(AppContext);

  return (
    <div
      className={`h-screen w-screen overflow-x-hidden ${
        (display.navMenu === true || display.modal === true) &&
        `overflow-y-hidden`
      }`}
    >
      <Head>
        <title>Aigbe Kelvin Portfolio</title>
      </Head>
      {/* <CollabModal /> */}
      <HeroSection />
      <Skills />
      <AboutMe />
      <Projects />
      <Packages />
      <Footer />
    </div>
  );
};

export default Home;
