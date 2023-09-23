import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10  rounded">
        <select className="bg-[#E6E6E6] text-black  rounded-l h-full text-xs lg:text-sm">
          <option value="">All</option>
          <option value="">Arts</option>
          <option value="">Crafts</option>
          <option value="">Gadgets</option>
          <option value="">Computer</option>
          <option value="">Mobile</option>
          <option value="">Laugage</option>
          <option value="">Sports</option>
          <option value="">Tools</option>
          <option value="">Toys</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          className="flex grow items-center h-[100%] ps-2"
        />
        <button className="bg-[#FEBD69] h-full rounded-r w-14">
          <BsSearch className="h-[27px] m-auto text-black " />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
