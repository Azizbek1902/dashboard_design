import React from "react";

export default ({ bgColor, icon, title, desc }) => {
  return (
    <div>
      <div className="bg-white rounded-xl flex justify-center py-8">
        <div className="flex items-center gap-4">
          <button
            className={`rounded-full p-4`}
            style={{ backgroundColor: bgColor }}
          >
            {icon}
          </button>
          <div className="">
            <h2 className="text-[#000000] opacity-[0.7] font-extrabold text-[22px]">
              {title}
            </h2>
            <h1 className="text-[#030229] opacity-[0.7] Nunito font-normal text-sm">
              {desc}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
