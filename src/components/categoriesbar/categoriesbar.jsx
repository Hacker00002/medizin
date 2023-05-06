import React from "react";
import { arr } from "./categories";

const Categoriesbar = () => {
  return (
    <div className="container">
      <div className="bg-[#f8f8f8] rounded-[5px] p-[15px] lg:!w-[265px] mb-[22px] !w-[100%]">
        <h3 className="text-[20px] font-[500] mb-[22px] text-[#323232]">
          Categories
        </h3>
        <div>
          <ul className="">
            {arr.map((elem, i) => (
              <li
                className="flex items-center justify-between mb-[15px] hover:!text-[#007bff] transition-all"
                key={i}
              >
                <a
                  className="text-[#333] flex items-center w-full justify-between hover:!text-[#007bff]"
                  href="#"
                >
                  {elem.name}
                  <p className="cursor-pointer">{elem.count}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categoriesbar;
