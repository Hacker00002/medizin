import React from "react";
import Tooltip from "@mui/material/Tooltip";

const Colors = () => {
  return (
    <div className="pt-[15px]">
      <h3 className="text-[20px] font-[500] mb-[20px] text-[#323232]">Color</h3>
      <div>
        <div className="flex items-center flex-wrap gap-[15px]">
          <Tooltip title="Red" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[red] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="Green" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[green] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="Blue" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[blue] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="Yellow" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[yellow] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="White" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[white] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="Gold" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[gold] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="Gray" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[gray] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="Magenta" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[magenta] border-[3px]"></span>
          </Tooltip>
          <Tooltip title="Maroon" arrow placement="top">
            <span className="w-[30px] h-[30px] rounded-full cursor-pointer !bg-[maroon] border-[3px]"></span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Colors;
