import React from "react";

export default function NavMd() {
  return (
    <nav className="hidden pt-[6rem] pb-[3.85rem] border-b border-white xl:grid grid-cols-12 items-center text-white">
      <div className="col-span-3 lg:text-[1.6rem] xl:text-[1.8rem] truncate">
        <span>{`/*alsoknownaszac*/`}</span>
      </div>
      <div className="col-span-6 text-[1.2rem] xl:text-[1.4rem] items-center mx-auto flex font-extralight">
        <span className="px-[3.8rem]">Work</span>
        <span className="px-[3.8rem]">Skills</span>
        <span className="px-[3.8rem]">About Me</span>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-2 text-[1.2rem] xl:text-[1.4rem] ml-auto">
        <button
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
