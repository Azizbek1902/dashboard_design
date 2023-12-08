import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import React from "react";
import logo from "../../assets/images/logo.svg";
import sidebar from "../../assets/images/sidebar.png";
import img1 from "../../assets/images/Rectangle 115.png";
import log from "../../assets/svg/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateNavbar } from "../../redux/actions/sidebar";

export default ({ handleClik, width }) => {
  const navbarItems = useSelector((state) => state.sidebarReducer.navbarItems);
  const dispatch = useDispatch();
  const handleChange = (data) => {
    dispatch(updateNavbar(data));
  };
  return (
    <div className="relative h-[98%]">
      <div
        className={`flex gap-2 ${
          width
            ? "flex-col-reverse items-center mt-2 mx-12 justify-center"
            : "mx-4 mt-4 flex-row items-start  justify-between"
        } `}
      >
        <div
          className={`flex mb-5 justify-center items-center ${
            width ? "flex-col gap-1" : "flex-row gap-3"
          }`}
        >
          {width ? <></> : <img src={logo} alt="" />}
          <h1 className="font-semibold text-2xl Nunito">Base</h1>
        </div>
        <button className="text-gray-400 pt-2" onClick={handleClik}>
          {width ? (
            <>
              <AiOutlineDoubleRight size={25} />
            </>
          ) : (
            <>
              <AiOutlineDoubleLeft size={25} />
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col gap-3 pb-96">
        {navbarItems.map((item, index) => {
          return (
            <div key={index + 1}>
              <div className={`flex gap-5 `}>
                <Link to={item.url}>
                  <div
                    className="flex cursor-pointer items-center gap-4"
                    onClick={() => handleChange(item)}
                  >
                    <div
                      className={`${width ? "pl-9" : "pl-7"} py-3 ${
                        item.active ? "bgColor" : "bg-white"
                      }`}
                    >
                      {item.active ? (
                        <button>{item.icon1}</button>
                      ) : (
                        <button>{item.icon2}</button>
                      )}
                    </div>
                    {width ? (
                      <></>
                    ) : (
                      <h1
                        className={`font-semibold Nunito ${
                          item.active ? "text-[#605BFF]" : "text-[#808093]"
                        }`}
                      >
                        {item.title}
                      </h1>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-8">
        <div className="flex justify-center">
          <div className={width ? "w-full" : "w-[80%]"}>
            {width ? <></> : <img src={sidebar} alt="" />}
            <div
              className={` flex items-center ${
                width
                  ? "flex-col ml-6 justify-center gap-4"
                  : "flex-row mt-7 justify-between"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC7D4] overflow-hidden flex justify-center rounded-2xl">
                  <img src={img1} className="" alt="" />
                </div>
                {width ? (
                  <></>
                ) : (
                  <div>
                    <h1 className="Nunito text-[14px] font-semibold text-[#000]">
                      Easin Arafat
                    </h1>
                    <p className="text-[12px] font-normal Nunito text-[#7F7F7F]">
                      Free Account
                    </p>
                  </div>
                )}
              </div>
              <img src={log} className="h-5" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
