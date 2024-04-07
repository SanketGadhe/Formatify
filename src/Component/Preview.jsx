import React from "react";
import { GoMultiSelect } from "react-icons/go";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
const Preview = () => {
  return (
    <div className="h-[100vh] w-[50%] bg-red-300 flex justify-center">
      <div className="w-[65%]">
        <div className="options flex justify-between ">
          <div className="select flex text-sm">
            <div className="template flex justify-center items-center ">
                <GoMultiSelect />Select Template</div>
            <div className="zoom flex justify-center items-center ml-3">| - A +</div>
          </div>
          <div className="down text-sm">
            <button className="border-black border-1 rounded-lg text-white bg-[#9cc975] px-2 py-1 m-1">
              Download PDF
            </button>
            <button className="border-black border-1 rounded-lg text-white bg-[#9cc975] px-2 py-1 m-1">
              Export
            </button>
          </div>
        </div>
        <div className="center flex justify-center h-[85%] w-[100%] ">
        <div className="page w-full h-full bg-white mt-1 flex justify-center items-center">
            <p className="text-sm text-[#5c5c5c] text-center">No Preview Available because no logic has been written yet.Please continue coding...</p>
        </div>
        </div>
        <div className="pageope flex justify-center mt-3 text-xs text-[#484747] item-center"><GrFormPrevious /> <span>1/1</span> <GrFormNext /></div>
      </div>
    </div>
  );
};

export default Preview;
