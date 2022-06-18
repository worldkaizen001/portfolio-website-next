import Link from "next/link";
import React, { useContext } from "react";
import { PageUrlMd } from "../constants/pageUrl";
import { AppContext } from "../hooks/AppContext.hook";

export default function NavMd() {
  const { display, setDisplay } = useContext(AppContext);

  return (
    <nav className="hidden pt-[6rem] pb-[3.85rem] border-b border-white xl:grid grid-cols-12 items-center text-white">
      <div className="col-span-3 lg:text-[2.1rem] xl:text-[2.3rem] truncate nav-icon">
        <Link href="/home" passHref={true}>
          <span>{`/*alsoknownaszac*/`}</span>
        </Link>
      </div>
      <div className="col-span-6 text-[1.2rem] xl:text-[1.4rem] items-center mx-auto flex font-extralight">
        {PageUrlMd.map((title, index) => {
          return (
            <span key={index} className="px-[3.8rem]">
              <Link href={title.link}>{title.name}</Link>
            </span>
          );
        })}
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-2 text-[1.2rem] xl:text-[1.4rem] ml-auto">
        <button
          onClick={() => setDisplay({ ...display, modal: true })}
          className={
            "px-[1.9rem] py-[.95rem] rounded-[.8rem] border border-white !cursor-pointer "
          }
        >
          Lets Talk
        </button>
      </div>
    </nav>
  );
}
