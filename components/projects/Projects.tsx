import React from "react";
import { projects } from "../constants/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects text-[#ffffff] bg-[#070707] pt-[3.3rem] 2xs:pt-[4.4rem] sm:pt-[5.5rem] md:pt-[6.6rem] xl:pt-[7.7rem] pb-[7.6rem] 2xs:pb-[7.8rem] sm:pb-[10.8rem] xl:pb-[13.7rem]"
    >
      <div className="container ">
        <div className="text-[1.45rem] 2xs:text-[1.6rem] xl:text-[1.8rem] pt-[.3rem] pb-[1.4rem]  font-normal border-b border-white ">
          Projects *
        </div>
        {projects?.map((val, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 justify-between pt-[2.3em] 2xs:pt-[2.5em] md:pt-[2.8em] xl:pt-[3.0rem] pb-[1.8rem] xl:pb-[1.4rem] font-normal border-b border-white "
          >
            <div className="">
              <span className=" text-[1rem] 2xs:text-[1.1rem] sm:text-[1.25rem] md:text-[1.48rem] xl:text-[1.6rem] font-semibold">
                {val.name}
              </span>{" "}
              <br />
              <span className="text-[.9rem] 2xs:text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] xl:text-[1.4rem] font-normal ">
                {val.mainStack}
              </span>
            </div>
            <div className="">
              <span className=" text-[1rem] 2xs:text-[1.1rem] sm:text-[1.25rem] md:text-[1.48rem] xl:text-[1.6rem] font-medium">
                {val.industryType}
              </span>
              <br />
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                <span className="underline underline-offset-2 text-[.88rem] 2xs:text-[.9rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.3rem] font-normal">
                  Link
                </span>
              </a>
            </div>
            <div className="ml-auto">
              <span className=" text-[1rem] 2xs:text-[1.1rem] sm:text-[1.25rem] md:text-[1.48rem] xl:text-[1.6rem] font-medium">
                {val.monthBuilt}
              </span>{" "}
              <br />
              <span className="text-[.88rem] 2xs:text-[.9rem] sm:text-[1rem] md:text-[1.25rem] xl:text-[1.3rem] font-normal">
                {val.yearBuilt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
