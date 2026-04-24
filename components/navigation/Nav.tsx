import Image from "next/image";
import React from "react";
import BasicButton from "../basic/BasicButton";
import NavMd from "./NavMd";
import NavSm from "./NavSm";

export default function Nav() {
  return (
    <React.Fragment>
      <NavSm />
      <NavMd />
    </React.Fragment>
  );
}
