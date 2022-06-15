import React from "react";
import { about } from "../constants/about";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="about-me bg-[#F4F4F4] pt-[3.3rem] pb-[6rem] 2xs:pt-[3.7rem] 2xs:pb-[9rem] sm:pt-[5rem] sm:pb-[12rem] md:pt-[8rem] md:pb-[15rem] xl:pt-[10.2rem] xl:pb-[18rem]"
    >
      <div className="container grid grid-cols-12 2xs:gap-[2.2rem] xl:gap-[6.2rem]">
        <div className="col-span-12 xl:col-span-8">
          <div className="mb-[1rem] text-[1.6rem] 2xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] xl:text-[5rem] opacity-40 font-light">
            About me
          </div>
          <div className="text-[1rem] 2xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] xl:text-[1.8rem] leading-[207%] font-medium ">
            {about}
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 z-10">
          <div className="bg-[url('/alsoknownaszac.jpg')] h-[10rem] w-[10rem] bg-cover 2xs:h-[15rem] 2xs:w-[15rem] sm:h-[18rem] sm:w-[18rem] md:h-[23em] md:w-[23rem] xl:h-[28rem] xl:w-[28rem] rounded-full mx-auto mt-[1.6rem] 2xs:mt-[1.8rem] sm:mt-[2rem] md:mt-[2.5rem]"></div>
        </div>
      </div>
    </section>
  );
}
