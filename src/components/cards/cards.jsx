import React from "react";
import { arr } from "./data";

const Cards = () => {
  return (
    <div className="container">
      <div className="flex items-center flex-wrap justify-between">
        {arr.map((elem) => (
          <div key={elem.id}>
            <div className="img">
              <img
                className="hoverImg"
                src={elem?.img}
                alt=""
                width={295}
                height={295}
              />
              <img
                className="hoverLastImg"
                src={elem?.img2}
                alt=""
                width={295}
                height={295}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <a
                href="#"
                className="text-[13px] text-[#555] font-[400] tracking-[1px] hover:text-[#4e97fd]"
              >
                {elem?.type}
              </a>
              <h3 className="font-[400] text-[18px] hover:text-[#4e97fd] cursor-pointer">
                {" "}
                {elem?.name}
              </h3>
              <div className="flex items-center gap-2">
                <h4 className="text-[18px] text-[#4e97fd] font-bold">
                  {elem?.price}
                </h4>
                <p className="text-[15px] font-[400] text-[#444] line-through">
                  {elem?.oldprice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
