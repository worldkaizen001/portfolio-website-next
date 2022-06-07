import Image from "next/image";
import React from "react";

export default function NavSm() {
  return (
    <nav className="xl:hidden pt-[5.7rem] pb-[2.9rem] border-b border-white flex justify-between items-center text-white">
      <div className="text-[1.1rem] 2xs:text-[1.2rem] md:text-[1.5rem]">{`/*alsoknownaszac*/`}</div>
      <div className="flex items-center">
        <div className="text-[1rem] 2xs:text-[1.1rem] md:text-[1.3rem] mr-[3rem] md:mr-[5rem] font-extralight">
          Work
        </div>
        <Image
          src={"/menu-btn.svg"}
          className="w-full h-full object-contain"
          height={10}
          width={22}
          alt="menu-btn"
        />
      </div>
    </nav>
  );
}
