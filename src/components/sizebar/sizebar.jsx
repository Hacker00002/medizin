import React from "react";
import { arr } from "./sizedata";

const Sizebar = () => {
  return (
    <div className="container">
      <div className="bg-[#f8f8f8] rounded-[5px] p-[15px] !w-[265px] mb-[22px]">
        <h3 className="text-[20px] font-[500] mb-[22px] text-[#323232]">
          Size
        </h3>
        <div>
          <div className="flex items-center flex-wrap gap-[20px]">
            {arr.map((elem, i) => (
              <a
                className=" min-w-[45px] font-[400] text-center text-[15px] border-[1px] rounded-[3px] text-[#333] pt-[3px] pb-[3px]  hover:ease-in-out duration-300 hover:border-[#007bff]-[1px] hover:bg-[#007bff] hover:text-[#fff]"
                href="#"
              >
                {elem.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sizebar;
