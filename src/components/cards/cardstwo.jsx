import React from "react";
import { arr } from "./data";
import { AiOutlineStar } from "react-icons/ai";

const Cardstwo = () => {
  return (
    <div className="container">
      {arr.map((elem) => (
        <div key={elem.id} className="mt-[30px] flex flex-col">
          <div className="flex items-center gap-[40px] flex-col lg:flex-row">
            <img
              className="cursor-pointer w-[100%] lg:!w-[280px]"
              width={280}
              height={280}
              src={elem?.img}
              alt={elem?.name}
            />
            <div>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-[20px] text-[#333] font-[400] hover:text-[#007bff] transition-all"
                >
                  {elem?.name}
                </a>
                <div className="flex gap-1">
                  <div className="flex items-center gap-1 text-[120%] text-[#007bff] opacity-[0.4] ">
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                  <p className="text-[13px] text-[#666]">No reviews</p>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[18px] text-[#4e97fd]">
                    {elem?.price}
                  </h3>
                  <p className="text-[14px] text-[#444]">{elem?.oldprice}</p>
                </div>
              </div>
              <div className="mt-[15px] mb-[25px]">
                <p className="border-t-[1px] pt-[15px] leading-[24px] text-[15px] text-[#444]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-full w-[48px] h-[48px] leading-[48px] border-[1px] text-[#323232] text-[18px] mb-[20px] text-center flex items-center justify-center hover:bg-[#4e97fd] hover:text-[#fff] transition-all">
                  <i class="fa-solid fa-bag-shopping"></i>
                </button>
                <button className="rounded-full w-[48px] h-[48px] leading-[48px] border-[1px] text-[#323232] text-[18px] mb-[20px] text-center flex items-center justify-center hover:bg-[#4e97fd] hover:text-[#fff] transition-all">
                  <i class="fa-regular fa-heart"></i>
                </button>
                <button className="rounded-full w-[48px] h-[48px] leading-[48px] border-[1px] text-[#323232] text-[18px] mb-[20px] text-center flex items-center justify-center hover:bg-[#4e97fd] hover:text-[#fff] transition-all">
                  <i class="fa-solid fa-signal"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardstwo;
