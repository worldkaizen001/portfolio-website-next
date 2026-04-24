import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AiOutlineClose as Close } from "react-icons/ai";
import { PageUrlSm } from "../constants/pageUrl";
import { AppContext } from "../hooks/AppContext.hook";
import { INavSm } from "../type/interface";

export default function NavSm() {
  const navigate = useRouter();
  const pathname = usePathname();

  const { display, setDisplay } = useContext(AppContext);

  return (
    <nav className="xl:hidden pt-[5.7rem] pb-[2.9rem] border-b border-white flex justify-between items-center text-white">
      <div className="text-[2rem] 2xs:text-[2.1rem] md:text-[2.5rem] nav-icon">
        Aigbe
      </div>

      <div className="flex items-center">
        <div className="text-[1rem] 2xs:text-[1.1rem] md:text-[1.3rem] mr-[3rem] md:mr-[5rem] font-extralight">
          <Link href="/home#projects">Work</Link>
        </div>

        {/* ✅ FIXED: open menu properly */}
        <button
          onClick={() =>
            setDisplay((prev) => ({
              ...prev,
              navMenu: true,
            }))
          }
        >
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
          url={pathname}
          navigate={navigate}
        />
      </div>
    </nav>
  );
}

/* ===========================
   SIDEBAR COMPONENT
=========================== */

function SideBar(props: INavSm) {
  const { display, setDisplay, url, navigate } = props;

  if (!display.navMenu) return null;

  return (
    <div className="menuWrapper z-[100] fixed inset-0">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.85)]"
        onClick={() =>
          setDisplay((prev) => ({
            ...prev,
            navMenu: false,
          }))
        }
      />

      {/* Sidebar */}
      <div className="z-[101] animate__animated animate__slideInDown menuBody p-[2rem] pb-[3.5rem] relative bg-[#F1F1F1] text-[#070707] rounded-lg">
        {/* Header */}
        <div className="px-[.8rem] py-[2.5rem] border-b border-[rgba(7,_7,_7,_0.39)] flex justify-between items-center">
          <button
            onClick={() =>
              window.open("https://wa.me/2347067582810", "_blank")
            }
            className="px-[1.4rem] py-[.7rem] rounded-[.5rem] text-[1rem] border border-[#070707]"
          >
            Lets Talk
          </button>

          <button
            onClick={() => {
              setDisplay((prev) => ({
                ...prev,
                navMenu: false,
              }));
              navigate.push("/home");
            }}
          >
            <Close size={"2rem"} className="text-[#565353]" />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="text-[1rem] 2xs:text-[1.1rem] md:text-[1.3rem] font-normal">
          {PageUrlSm.map((title, index) => {
            const lastIndex = PageUrlSm.length - 1;

            return (
              <li
                key={index}
                className={`px-[1.6rem] py-[2rem] ${index !== lastIndex
                    ? "border-b border-[rgba(7,_7,_7,_0.39)]"
                    : ""
                  } ${title.link === url ? "bg-[#e9626215] font-medium" : ""
                  }`}
              >
                <Link href={title.link}>
                  <span
                    onClick={() =>
                      setDisplay((prev) => ({
                        ...prev,
                        navMenu: false,
                      }))
                    }
                  >
                    {title.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}