import React from "react";
import { IBasicButton } from "../type/interface";

export default function BasicButton(props: IBasicButton) {
  const {
    id,
    className,
    children,
    onClick,
    bgColor,
    textColor,
    fontSize,
    padding,
    radius,
    fontWeight,
    onMouseEnter,
    onMouseLeave,
  } = props;
  return (
    <button
      id={id}
      className={`bg-${bgColor} text-${textColor} text-${fontSize} p-${padding} rounded-${radius} font-${fontWeight} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
