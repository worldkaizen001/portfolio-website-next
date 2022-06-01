import React from "react";
import BasicButton from "../basic/BasicButton";

export default function Nav() {
  return (
    <nav className="h-[104.5px] border-b border-white grid grid-cols-12 items-center text-white">
      <div className="col-span-3 text-[17px]">{`/*Amayo Collins*/`}</div>
      <div className="col-span-6 text-[13px] items-center mx-auto flex font-extralight">
        <span className="px-[38px]">Work</span>
        <span className="px-[38px]">Skills</span>
        <span className="px-[38px]">About Me</span>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-2 text-[13px] ml-auto">
        <button
          className={
            "px-[19px] py-[9.5px] rounded-[8px] border border-white !cursor-pointer "
          }
        >
          {`Let's Talk`}
        </button>
      </div>
    </nav>
  );
}
