import React, { useState } from "react";

export default () => {
  const [timeOne, setTimeOne] = useState(false);
  const [timeTwo, setTimeTwo] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[#030229] pt-3 font-bold text-2xl Nunito">
          Dashboard
        </h1>
        <div className="flex gap-4">
          <div className="relative">
            <h1
              className={`flex cursor-pointer items-center text-[#030229] bg-white px-5 py-3 gap-3 ${
                timeOne ? "rounded-ss-md rounded-se-md" : "rounded-md"
              }`}
              onClick={() => {
                setTimeTwo(false)
                setTimeOne(!timeOne);
              }}
            >
              10-06-2021
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M1 1L5 5L9 1"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
            <div
              className={`${
                timeOne
                  ? "absolute shadow-lg z-50 transition-all duration-200 bg-white  rounded-es-md rounded-ee-md h-[200px] w-full"
                  : "h-0"
              } overflow-hidden`}
            >
              <h1
                onClick={() => {
                  setTimeOne(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-06-2021
              </h1>
              <h1
                onClick={() => {
                  setTimeOne(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-06-2021
              </h1>
              <h1
                onClick={() => {
                  setTimeOne(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-06-2021
              </h1>
              <h1
                onClick={() => {
                  setTimeOne(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-06-2021
              </h1>
            </div>
          </div>
          <div className="relative">
            <h1
              className={`flex cursor-pointer items-center text-[#030229] bg-white px-5 py-3 gap-3 ${
                timeTwo ? "rounded-ss-md rounded-se-md" : "rounded-md"
              }`}
              onClick={() => {
                setTimeTwo(!timeTwo);
                setTimeOne(false);
              }}
            >
              10-10-2021
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M1 1L5 5L9 1"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
            <div
              className={`${
                timeTwo
                  ? "absolute shadow-lg z-50 transition-all duration-200 bg-white  rounded-es-md rounded-ee-md h-[200px] w-full"
                  : "h-0"
              } overflow-hidden`}
            >
              <h1
                onClick={() => {
                  setTimeTwo(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-10-2021
              </h1>
              <h1
                onClick={() => {
                  setTimeTwo(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-10-2021
              </h1>
              <h1
                onClick={() => {
                  setTimeTwo(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-10-2021
              </h1>
              <h1
                onClick={() => {
                  setTimeTwo(false);
                }}
                className={`flex items-center cursor-pointer text-[#030229] bg-white px-5 py-3 gap-3`}
              >
                10-10-2021
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
