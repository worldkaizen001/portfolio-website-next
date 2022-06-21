import React from "react";
import { IBasicInput } from "../type/interface";

export default function BasicInput(props: IBasicInput) {
  const {
    id,
    className,
    startIcon,
    inputStyles,
    defaultValue,
    value,
    placeholder,
    type,
    onChange,
    readOnly,
    endIcon,
    onClick,
    onMouseEnter,
    onMouseLeave,
  } = props;
  return (
    <div className={`${className} flex align-center p-4 border-[#BCBCBC]`}>
      <span>{startIcon}</span>
      <input
        className={`border-none outline-none w-[85%] py-auto ${inputStyles}`}
        id={id}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        readOnly={readOnly}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <span>{endIcon}</span>
    </div>
  );
}
