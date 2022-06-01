import React from "react";

export default function BasicInput(props) {
  return (
    <div
      className={`${props.className} flex align-center p-4 border border-[#BCBCBC] rounded-lg `}
    >
      <span>{props.startIcon}</span>
      <input
        className={`border-none outline-none w-[85%] py-auto ${props.inputStyles}`}
        defaultValue={props.defaultValue}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        readOnly={props.readOnly}
      />
      <span>{props.endIcon}</span>
    </div>
  );
}
