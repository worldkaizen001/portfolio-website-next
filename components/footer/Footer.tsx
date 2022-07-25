import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SocialMediaLinks } from "../constants/socialMediaLinks";
import { AppContext } from "../hooks/AppContext.hook";

export default function Footer() {
  const navigate = useRouter();
  const { display, setDisplay } = useContext(AppContext);

  return (
    <footer
      id="contacts"
      className={`bg-[url('/blackbg2.avif')] min-h-[44.4rem] 2xs:min-h-[42.8rem] sm:min-h-[44.6rem] xl:min-h-[46.3rem] bg-fixed bg-center bg-no-repeat bg-cover text-white relative pt-[3rem] 2xs:pt-[3.8rem] sm:pt-[5rem] xl:pt-[6rem] pb-[5rem] 2xs:pb-[5.5rem] sm:pb-[6.4rem] xl:pb-[7.3rem]`}
    >
      <div className="container relative">
        <div className=" absolute bottom-0 xl:bottom-[48%] right-[6%] ">
          <div className="text-[.89rem] 2xs:text-[.9rem] sm:text-[1.14rem] xl:text-[1.3rem] font-semibold mb-[2.7rem] ">
            Back to Top
          </div>

          <div
            onClick={() => window.scrollTo(0, 0)}
            className="relative flex justify-center h-[6rem] 2xs:h-[6.4rem] xl:h-[9.5rem]"
          >
            <Image
              className="w-full h-full object-contain"
              src={"/Lineup.svg"}
              layout="fill"
              alt="lineup-img"
            />
          </div>
        </div>
        <div className="mb-[9.4rem] xl:mb-[12rem] pt-[1.5rem] text-center">
          <div className="lets-talk text-[2.5rem] 2xs:text-[3rem] sm:text-[4rem] md:text-[5.4rem] xl:text-[7rem] font-medium opacity-50 mb-[2.0rem]">
            {" Let's Talk"}
          </div>
          <button
            onClick={() => {
              navigate.push("https://wa.me/2347067582810");
            }}
            className={
              "px-[1.9rem] py-[.95rem] text-[.95rem] 2xs:text-[1.15rem] sm:text-[1.28rem] md:text-[1.4rem] xl:text-[1.5rem] rounded-[8px] border border-white !cursor-pointer "
            }
          >
            Send a Message
          </button>
        </div>
        <div className="xl:grid grid-cols-12 gap-[1.5rem]">
          <div className="col-span-2 mb-[2.3rem] xl:mb-0 2xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] opacity-50 self-center">
            Contacts
          </div>
          <div className="col-span-4 mb-[2.3rem] xl:mb-0 2xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] font-medium">
            <div className="mb-[.65rem] xl:mb-[.2rem] opacity-50">
              Email Address
            </div>
            <a
              rel="noopener noreferrer"
              href={`mailto:${SocialMediaLinks.Email}`}
            >
              <div className="  text-justify font-medium">
              aigbekelvin@gmail.com
              </div>
            </a>
          </div>
          <div className="col-span-4 mb-[2.3rem] xl:mb-0 2xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] font-medium">
            <div className="mb-[.65rem] xl:mb-[.2rem] opacity-50">GitHub</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={SocialMediaLinks.Github}
            >
              <div className="  text-justify font-medium">Aigbe Kelvin</div>
            </a>
          </div>
          <div className="col-span-2 2xs:text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] font-medium">
            <div className="mb-[.65rem] xl:mb-[.2rem] opacity-50">LinkedIn</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={SocialMediaLinks.Linkedin}
            >
              <div className="  text-justify font-medium">Aigbe Kelvin</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
