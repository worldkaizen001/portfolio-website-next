import React from "react";
import { IBasicTextArea } from "../type/interface";

export default function BasicTextarea(props: IBasicTextArea) {
  const { id, cols, rows, onClick, onChange, className } = props;
  return (
    <textarea
      id={id}
      cols={cols}
      rows={rows}
      onClick={onClick}
      onChange={onChange}
      className={`${className} p-4 bg-[#FAFAFA] border border-[#8F8888] rounded-lg w-full outline-none`}
    ></textarea>
  );
}
