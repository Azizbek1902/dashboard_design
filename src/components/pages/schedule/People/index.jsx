import { RiSearch2Fill } from "react-icons/ri";
import React from "react";
import img1 from "../../../../assets/images/tableimg/1.svg";
import img2 from "../../../../assets/images/tableimg/2.svg";
import img3 from "../../../../assets/images/tableimg/3.svg";

function People() {
  return (
    <div>
      <h1 className="my-5 text-[#A1A1AC] text-base font-medium">People</h1>
      <div className="flex items-center">
        <button className="bg-[#FAFAFB] rounded-s-md py-4 pl-4 text-[#A1A1AC] Nunito font-normal text-sm">
          <RiSearch2Fill size={20} />
        </button>
        <button className="bg-[#FAFAFB] w-full text-start rounded-e-md py-4 pl-3 text-[#A1A1AC] Nunito font-normal text-sm">
          Search for People
        </button>
      </div>
      <div className="mt-5">
        <div className="px-5 py-4 border-b border-[#F2F2F4] flex items-center gap-5">
          <div className="bg-[#D5D3FF] rounded-full">
            <img src={img1} alt="" />
          </div>
          <div className="">
            <h1 className="text-[#030229] text-sm Nunito font-normal">
              Eddie Lobanovskiy
            </h1>
            <p className="text-[#030229] opacity-[0.5] text-[10px] font-normal">
              laboanovskiy@gmail.com
            </p>
          </div>
        </div>
        <div className="px-5 py-4 border-b border-[#F2F2F4] flex items-center gap-5">
          <div className="bg-[#D5D3FF] rounded-full">
            <img src={img1} alt="" />
          </div>
          <div className="">
            <h1 className="text-[#030229] text-sm Nunito font-normal">
              Alexey Stave
            </h1>
            <p className="text-[#030229] opacity-[0.5] text-[10px] font-normal">
              alexeyst@gmail.com
            </p>
          </div>
        </div>
        <div className="px-5 mb-16 py-4 border-b border-[#F2F2F4] flex items-center gap-5">
          <div className="bg-[#D5D3FF] rounded-full">
            <img src={img3} alt="" />
          </div>
          <div className="">
            <h1 className="text-[#030229] text-sm Nunito font-normal">
              Anton Tkacheve
            </h1>
            <p className="text-[#030229] opacity-[0.5] text-[10px] font-normal">
              tkacheveanton@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
