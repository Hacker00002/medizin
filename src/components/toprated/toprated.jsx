import React from "react";
import { arr } from "./data";
import { AiOutlineStar } from "react-icons/ai";

const Toprated = () => {
  return (
    <div className="container">
      <div className="bg-[#f8f8f8] rounded-[5px] p-[15px] !w-[265px] mb-[22px]">
        <h3 className="text-[20px] font-[500] mb-[22px] text-[#323232]">
          Tags
        </h3>
        <div className="flex flex-col gap-[25px]">
          {arr.map((elem) => (
            <div className="flex gap-[17px]" key={elem.id}>
              <div>
                <img
                  className="rounded-[5px] cursor-pointer"
                  width={70}
                  height={70}
                  src={elem?.img}
                  alt={elem?.name}
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <p className="w-ful cursor-pointer text-[#333] font-[400] text-[15px] hover:text-[#007bff] hover:transition-all">
                  {elem.name}
                </p>
                <div className="flex items-center gap-1 text-[12px] text-[#007bff] opacity-[0.4] ">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <span className="text-[#333] font-[400] text-[15px] line-through ">
                  {elem?.count}
                </span>
                <span className="text-[#333] font-[400] text-[15px]">
                  {elem?.count2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toprated;
