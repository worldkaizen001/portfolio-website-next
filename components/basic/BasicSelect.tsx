import React from "react";
import { IBasicSelect } from "../type/interface";

export default function BasicSelect(props: IBasicSelect) {
  const { onClick, onChange, id, name, multiple, size, className, itemData } =
    props;
  return (
    <select
      onClick={onClick}
      onChange={onChange}
      id={id}
      name={name}
      multiple={multiple}
      size={size}
      className={className}
    >
      {itemData?.map((item: { name: string }, idx: number) => {
        return (
          <option key={idx} value={item.name}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
