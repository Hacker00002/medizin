import { useState } from "react";
import React from "react";
import { arr } from "./data";
import Cards from "../cards/cards";
import Cardstwo from "../cards/cardstwo";

const Settings = () => {
  // tab-section
  const [toggle, setToggle] = useState(1);
  const uptadeToggle = (id) => {
    setToggle(id);
  };
  return (
    <div className="container">
      <div className="mt-[90px] flex items-center justify-between border-[1px] rounded-[3px] p-[15px] flex-col lg:flex-row gap-6">
        <div className="flex items-center gap-[15px]">
          <i
            onClick={() => uptadeToggle(1)}
            className="fa fa-th text-[22px] cursor-pointer"
          ></i>
          <i
            onClick={() => uptadeToggle(2)}
            className="fa fa-list-ul text-[22px] cursor-pointer"
          ></i>
        </div>
        <div>
          <p className="text-[15px] text-[#3e3e3e] font-[400] ">
            Showing 1 - 12 of 12 result
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
      <div className={toggle == 1 ? "show-content" : "content"}>
        <Cards />
      </div>
      <div className={toggle == 2 ? "show-content" : "content"}>
        <Cardstwo />
      </div>
    </div>
  );
};

export default Settings;
