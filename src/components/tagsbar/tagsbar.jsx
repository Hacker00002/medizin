import React from "react";
import { arr } from "./data";
import Colors from "./colors";

const Tagsbar = () => {
  return (
    <div className="container">
      <div className="bg-[#f8f8f8] rounded-[5px] p-[15px] !w-[265px] mb-[22px]">
        <h3 className="text-[20px] font-[500] mb-[22px] text-[#323232]">
          Tags
        </h3>
        <div>
          <div className="flex items-center flex-wrap gap-[6px]">
            {arr.map((elem, i) => (
              <a
                className="!min-w-[60px] mb-[9px] font-[400] text-center text-[15px] border-[1px] rounded-[3px] text-[#333] pt-[5px] pb-[5px] pl-[12px] pr-[12px] hover:ease-in-out duration-300 hover:border-[#007bff]-[1px] hover:bg-[#007bff] hover:text-[#fff]"
                href="#"
              >
                {elem.name}
              </a>
            ))}
          </div>
        </div>
        <Colors />
      </div>
    </div>
  );
};

export default Tagsbar;
