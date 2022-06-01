import React from "react";

export default function BasicButton({
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
}) {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} text-${fontSize} p-${padding} rounded-${radius} font-${fontWeight} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
