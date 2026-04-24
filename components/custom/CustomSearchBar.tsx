import React from "react";
import { RiSearchLine } from "react-icons/ri";

function SearchBar(props: { className: string }) {
  return (
    <div
      className={`relative bg-[#FAFAFA] flex items-center h-full searchBar p-4 rounded-xl ${props.className}`}
    >
      <RiSearchLine size="1.8rem" className="searchAndBtn flex py-auto" />
      <input
        className="w-full ml-4 outline-none bg-inherit font-[400] text-[1.5rem]"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
