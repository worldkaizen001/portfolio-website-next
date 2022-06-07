import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Skills from "../components/skills/Skills";
import AboutMe from "../components/about-me/AboutMe";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/hero-section/HeroSection";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Amayo Collins Portfolio</title>
        <meta
          name="description"
          content="A personal portolio website of a very confident and outgoing developer who has years of acheivements and experience under his belt who goes under the alias @alsoknownaszac"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Skills />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
