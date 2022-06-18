import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "../navigation/Nav";
import { debounce, throttle } from "../../utils/Limitors";
import SocialsLinkLg from "./SocialsLinkLg";
import SocialsLinkSm from "./SocialsLinkSm";
import { SocialMediaLinks } from "../constants/socialMediaLinks";

export default function HeroSection() {
  const [mobileNavbarCollapsed, setMobileNavbarCollapsed] = useState(true);
  const [transparency, setTransparency] = useState(0.0);

  function handleScroll() {
    if (window.pageYOffset > 500) {
      setTransparency(1);
    } else {
      setTransparency(window.pageYOffset / 500.0);
    }

    setMobileNavbarCollapsed(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(debounce(handleScroll)));
    return () =>
      window.removeEventListener("scroll", throttle(debounce(handleScroll)));
  }, []);
  return (
    <main
      className={`bg-[url('/blackbg1.svg')] min-h-[53.1rem] 3xs:min-h-[59.1rem] lg:min-h-[82.4rem] xl:min-h-[102.4rem] bg-fixed bg-center bg-no-repeat bg-cover text-white relative`}
    >
      <div
        style={
          mobileNavbarCollapsed
            ? {
                backdropFilter: `blur(${transparency * 1.05}px)`,
              }
            : {
                backdropFilter: `blur(${transparency * 1.05}px)`,
              }
        }
        className="min-h-[53.1rem] 3xs:min-h-[59.1rem] lg:min-h-[82.4rem] xl:min-h-[102.4rem] w-full absolute top-0 left-0"
      ></div>
      <div className="container relative">
        <Nav />
        <section className="hero-section mt-[12.6%] xs:mt-[10.6%] lg:mt-[8.6%] xl:mt-[6.6%] relative">
          <h1 className="text-[1.8rem] xs:text-[2.35rem] lg:text-[3.5rem] xl:text-[4.5rem] font-medium text-white opacity-50 mb-[1.2rem]">
            Frontend Developer
          </h1>
          <h1 className="text-[2.65rem] xl:w-[70%] xs:text-[3rem] lg:text-[4.0rem] xl:text-[5.0rem] font-medium text-white">
            Turning Designs to Reality
          </h1>
        </section>
      </div>
      <div className="bg-[url('/officesetup.png')] hidden 3xs:block h-[14.9rem] w-[25.6rem] 2xs:h-[16.9rem] 2xs:w-[27.6rem] xs:h-[20.9rem] xs:w-[32rem] sm:h-[23rem] sm:w-[35rem] lg:h-[34.815rem] lg:w-[50.8rem] xl:h-[34.815rem] xl:w-[64.8rem] hero-img absolute top-[55%] right-[5%] xs:top-[50%] sm:top-[48.5%] md:top-[46%] sm:right-[8%] lg:top-[48.5%] lg:right-[19%] xl:top-[45%] xl:right-[18%] z-10 bg-fixed bg-center bg-no-repeat bg-cover " />

      <div className="absolute bottom-[11.5%] 2xs:bottom-[5.5%] sm:bottom-[7.5%] left-[10%] z-10 ">
        <div className=" relative flex justify-center h-[9rem] xs:h-[12rem] lg:h-[18.5rem] hero-img">
          <Image
            className="w-full h-full object-contain"
            src={"/Linedown.svg"}
            layout="fill"
            alt="line-img"
          />
        </div>
        <div className="mt-4 text-[1.3rem] lg:text-[2.0rem] font-extralight">
          Scroll
        </div>
      </div>
      <SocialsLinkLg link={SocialMediaLinks} />
      <SocialsLinkSm link={SocialMediaLinks} />
    </main>
  );
}

// mt-[6.7rem] lg:mt-[11.55rem]
