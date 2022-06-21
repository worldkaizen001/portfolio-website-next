import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills bg-[#F4F4F4] py-[2.5rem] sm:py-[3.8rem] lg:py-[5.7rem]"
    >
      <div className="container grid grid-cols-12 gap-[2rem] sm:gap-[2.8rem] lg:gap-[3.8rem] xl:gap-[4.5rem]">
        <div className="col-span-4 lg:col-span-3 text-[1.8rem] 2xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] xl:text-[5rem] opacity-50 self-center">
          Skills
        </div>
        <div className="col-span-8 lg:col-span-5 font-medium">
          <div className="2xs:mb-[.6rem] lg:mb-[1rem] text-[1.15rem] 2xs:text-[1.3rem] sm:text-[1.7rem] md:text-[2.1rem] xl:text-[2.5rem] opacity-40">
            Technical
          </div>
          <div className="text-[.9rem] 2xs:text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] xl:text-[1.8rem] leading-[180%] font-medium">
            ** NextJS ** ReactJS ** React Hooks ** React Query ** JavaScript **
            Typescript ** Tailwind CSS ** GraphQl ** GraphCMS ** Rest API **
            Ajax ** Axios ** Jest ** Yarn ** NodeJS ** Git ** Github **
            Bootstrap ** MaterialUi ** Html 5 ** CSS 3
          </div>
        </div>
        <div className="col-span-4 lg:hidden"></div>
        <div className="col-span-8 ml-auto lg:col-span-4 font-medium">
          <div className="2xs:mb-[.6rem] lg:mb-[1rem] text-[1.15rem] 2xs:text-[1.3rem] sm:text-[1.7rem] md:text-[2.1rem] xl:text-[2.5rem]  opacity-40">
            Soft
          </div>
          <div className="text-[.9rem] 2xs:text-[1.1rem] sm:text-[1.3rem] md:text-[1.6rem] xl:text-[1.8rem] leading-[180%] font-medium">
            ** Collaboration and Team work ** Ability to learn quick **
            Analytical Skills ** Communication.
          </div>
        </div>
      </div>
    </section>
  );
}
