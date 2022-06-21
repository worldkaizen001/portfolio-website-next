import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AiOutlineClose as Close } from "react-icons/ai";
import { PageUrlSm } from "../constants/pageUrl";
import { AppContext } from "../hooks/AppContext.hook";
import { INavSm } from "../type/interface";

export default function NavSm() {
  const navigate = useRouter();

  const { display, setDisplay } = useContext(AppContext);

  return (
    <nav className="xl:hidden pt-[5.7rem] pb-[2.9rem] border-b border-white flex justify-between items-center text-white">
      <div className="text-[2rem] 2xs:text-[2.1rem] md:text-[2.5rem] nav-icon">
        xxv
      </div>
      <div className="flex items-center">
        <div className="text-[1rem] 2xs:text-[1.1rem] md:text-[1.3rem] mr-[3rem] md:mr-[5rem] font-extralight">
          <Link href="/home#projects" passHref={true}>
            Work
          </Link>
        </div>
        <button onClick={() => setDisplay({ ...display, navMenu: true })}>
          <Image
            src={"/menu-btn.svg"}
            className="w-full h-full object-contain"
            height={10}
            width={22}
            alt="menu-btn"
          />
        </button>
        <SideBar
          display={display}
          setDisplay={setDisplay}
          url={navigate.asPath}
          navigate={navigate}
        />
      </div>
    </nav>
  );
}

function SideBar(props: INavSm) {
  const { display, setDisplay, url, navigate } = props;
  return (
    <div
      className={`menuWrapper z-[100] fixed inset-0 ${
        !display.navMenu ? "hidden" : "block"
      }  `}
      id="hamBurgerMenu"
    >
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.85)]"
        onClick={(e) => {
          e.stopPropagation();
          setDisplay({ ...display, navMenu: false });
        }}
      />
      <div className="z-[101] animate__animated animate__slideInDown menuBody p-[2rem] pb-[3.5rem] relative bg-[#F1F1F1] text-[#070707] rounded-lg">
        <div className=" px-[.8rem] py-[2.5rem] border-b border-[rgba(7,_7,_7,_0.39)] flex justify-between items-center ">
          <button
            onClick={() => {
              setDisplay({ ...display, navMenu: false, modal: true });
              navigate.push("/home#colaborate");
            }}
            className={
              "px-[1.4rem] py-[.7rem] rounded-[.5rem] text-[1rem] border border-[#070707] !cursor-pointer "
            }
          >
            Lets Talk
          </button>
          <button
            id="navMenuClose"
            onClick={() => {
              setDisplay({ ...display, navMenu: false });
              navigate.push("/home");
            }}
          >
            <Close size={"2rem"} className="text-[#565353]" />
          </button>
        </div>
        <ul
          className={`text-[1rem] 2xs:text-[1.1rem] md:text-[1.3rem] font-normal`}
        >
          {PageUrlSm.map(
            (title: { link: string; name: string }, index: number) => {
              const lastIndex = PageUrlSm && PageUrlSm.length - 1;
              return (
                <li
                  className={`px-[1.6rem] text-[1.1rem] 2xs:text-[1.2rem] md:text-[1.4rem] py-[2rem] ${
                    index !== lastIndex &&
                    `border-b border-[rgba(7,_7,_7,_0.39)]`
                  } ${title.link === url && "bg-[#e9626215] font-medium"} `}
                  key={index}
                >
                  <Link href={title.link} passHref={true}>
                    <span
                      onClick={() => setDisplay({ ...display, navMenu: false })}
                      className="focus:bg-[#e9626215] block"
                    >
                      {title.name}
                    </span>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
