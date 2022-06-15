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

const Home: NextPage = () => {
  const { display } = useContext(AppContext);

  return (
    <div
      className={`h-screen w-screen ${
        (display.navMenu === true || display.modal === true) &&
        `cursor-none overflow-y-hidden`
      }`}
    >
      <Head>
        <title>Amayo Collins Portfolio</title>
        <meta
          name="description"
          content="A personal portolio website of a very confident and outgoing developer who has years of acheivements and experience under his belt who goes under the alias @alsoknownaszac"
        />
        <link rel="icon" href="/favicon.ico" />
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
