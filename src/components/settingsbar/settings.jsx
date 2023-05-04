import React from "react";
import { arr } from "./data";
import Cards from "../cards/cards";

const Settings = () => {
  return (
    <div className="container">
      <div className="mt-[90px] flex items-center justify-between border-[1px] rounded-[3px] p-[15px]">
        <div className="flex items-center gap-[15px]">
          <i class="fa fa-th text-[22px] text-[#007bff] cursor-pointer"></i>
          <i class="fa fa-list-ul text-[22px] cursor-pointer"></i>
        </div>
        <div>
          <p className="text-[15px] text-[#3e3e3e] font-[400] ">
            Showing 1 - 12 of 13 result
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[15px] font-[600]">Sort By:</p>
          <select className="w-[188px] border-[1px] p-[10px] text-[#737373] text-[14px] cursor-pointer">
            {arr.map((elem) => (
              <option key={elem.id}>{elem.name}</option>
            ))}
          </select>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Settings;
