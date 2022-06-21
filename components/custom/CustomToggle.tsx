import React from "react";
import Link from "next/link";
import { IToggle } from "../type/interface";

export default function CustomToggle(props: IToggle) {
  const { data, toggle, className } = props;

  return (
    <div className={`text-[1.4rem] ${className}`}>
      <div className="grid grid-cols-6 gap-4 p-2 items-center">
        <div className="col-span-2">
          <Link passHref={true} href={data[0].link}>
            <button
              className={
                toggle === 0
                  ? "bg-black p-2 px-6 rounded-full text-[#fff] font-semibold"
                  : "font-bold"
              }
            >
              {data[0].name}
            </button>
          </Link>
        </div>
        <div className="col-span-2 flex justify-center">
          <Link passHref={true} href={data[1].link}>
            <button
              className={
                toggle === 1
                  ? "bg-black p-2 px-6 rounded-full text-[#fff] font-semibold"
                  : "font-bold"
              }
            >
              {data[1].name}
            </button>
          </Link>
        </div>
        <div className="col-span-2 flex justify-end">
          <Link passHref={true} href={data[2].link}>
            <button
              className={
                toggle === 2
                  ? "bg-black p-2 px-6 rounded-full text-[#fff] font-semibold"
                  : "font-bold"
              }
            >
              {data[2].name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
