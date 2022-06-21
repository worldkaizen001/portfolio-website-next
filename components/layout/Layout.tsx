import React from "react";
import { ILayout } from "../type/interface";

export default function Layout(props: ILayout) {
  const { className, children } = props;

  return (
    <div className={`bg-screen min-h-screen pt-[8rem]`}>
      <div className={`mt-[3.3rem] mx-auto bg-white ${className}`}>
        {children}
      </div>
    </div>
  );
}
