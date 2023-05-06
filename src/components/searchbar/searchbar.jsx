import React from "react";
import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
  return (
    <div className="container">
      <div className="bg-[#f8f8f8] mt-[90px] mb-[20px] rounded-[5px] pt-[38px] pr-[20px] pb-[40px] pl-[20px] w-[100%] lg:w-[265px]">
        <div className="">
          <h3 className="text-[20px] text-[#323232] mb-[22px] font-[500] leading-[1]">
            Search
          </h3>
        </div>
        <form>
          <div className="flex items-center relative">
            <input
              className="w-[100%] pt-[8px] pb-[8px] pl-[20px] rounded-[22px] text-black placeholder:text-black lg:w-[255px]"
              type="search"
              placeholder="Search our store "
            />
            <IoIosSearch className="absolute right-[15px] text-[18px] " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
