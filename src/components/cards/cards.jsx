import React from "react";
import { arr } from "./data";
import Tooltip from "@mui/material/Tooltip";

const Cards = () => {
  return (
    <div className="container">
      <div className="flex items-center flex-wrap lg:!justify-between justify-center">
        {arr.map((elem) => (
          <div key={elem.id}>
            <div className="img">
              <img
                className="hoverImg cursor-pointer"
                src={elem?.img}
                alt={elem?.name}
              />
              <img
                className="hoverLastImg cursor-pointer"
                src={elem?.img2}
                alt=""
                width={295}
                height={295}
              />
              <div className="absolute bottom-0 flex items-center gap-3 buttonHover">
                <Tooltip title="Soldout" arrow placement="top">
                  <button className="rounded-full w-[48px] h-[48px] leading-[48px] bg-[#333] text-[#fff] mb-[20px] text-center flex items-center justify-center hover:bg-[#4e97fd] transition-all">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </button>
                </Tooltip>
                <Tooltip title="Add to wishlist" arrow placement="top">
                  <button className="rounded-full w-[48px] h-[48px] leading-[48px] bg-[#333] text-[#fff] mb-[20px] text-center flex items-center justify-center hover:bg-[#4e97fd] transition-all">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                </Tooltip>
                <Tooltip title="Compare" arrow placement="top">
                  <button className="rounded-full w-[48px] h-[48px] leading-[48px] bg-[#333] text-[#fff] mb-[20px] text-center flex items-center justify-center hover:bg-[#4e97fd] transition-all">
                    <i class="fa-solid fa-signal"></i>
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <a
                href="#"
                className="text-[13px] text-[#555] font-[400] tracking-[1px] hover:text-[#4e97fd]"
              >
                {elem?.type}
              </a>
              <h3 className="font-[400] text-[18px] hover:text-[#4e97fd] cursor-pointer">
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
