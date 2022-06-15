import React from "react";

export default function BasicTextarea(props: any) {
  return (
    <textarea
      cols={props.cols}
      rows={props.rows}
      onClick={props.onClick}
      onChange={props.onChange}
      className={`${props.className} p-4 bg-[#FAFAFA] border border-[#8F8888] rounded-lg w-full outline-none`}
    ></textarea>
  );
}
