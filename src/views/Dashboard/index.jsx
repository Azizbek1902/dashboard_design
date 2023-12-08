import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsFillInboxesFill } from "react-icons/bs";
import { RiHandbagFill } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";
import React from "react";
import Navbar from "../../components/pages/dashboard/Navbar";
import Card from "../../components/pages/dashboard/Card";
import Reports from "../../components/pages/dashboard/Reports";
import Analytics from "../../components/pages/dashboard/Analytics";
import Order from "../../components/pages/dashboard/Order";
import Products from "../../components/pages/dashboard/Products";

export default () => {
  const data = [
    {
      id: 1,
      icon: <IoIosHeart size={26} color="#5B93FF" />,
      title: "178+",
      desc: "Save Products",
      bgColor: "#E8EDF7",
    },
    {
      id: 2,
      icon: <FaGamepad size={26} color="#FFC327" />,
      title: "20+",
      desc: "Stock Products",
      bgColor: "#F3EBD6",
    },
    {
      id: 3,
      icon: <RiHandbagFill size={26} color="#FF8F6B" />,
      title: "190+",
      desc: "Sales Products",
      bgColor: "#FFF4F1",
    },
    {
      id: 4,
      icon: <BsFillInboxesFill size={26} color="#5D58F7" />,
      title: "12+",
      desc: "Job Application",
      bgColor: "#E8E7F6",
    },
  ];
  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="w-[95%] my-5">
          <Navbar />
          <div className="grid mt-10 grid-cols-4 gap-6">
            {data.map((item) => (
              <div key={item.id}>
                <Card
                  bgColor={item.bgColor}
                  title={item.title}
                  desc={item.desc}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
          <div className="mt-10 gap-6 flex ">
            <div className="w-[60%]">
              <div className="bg-white rounded-md p-5">
                <div className="flex justify-between mb-5 items-center">
                  <h1 className="text-[#030229] opacity-[0.7] text-[18px] font-bold Nunito">
                    Reports
                  </h1>
                  <BiDotsHorizontalRounded color="#B4B4BF" size={27} />
                </div>
                <div className="h-full w-full">
                  <Reports />
                </div>
              </div>
              <Order />
            </div>
            <div className="w-[40%]">
              <div className="bg-white rounded-md p-5">
                <div className="flex justify-between mb-5 items-center">
                  <h1 className="text-[#030229] opacity-[0.7] text-[18px] font-bold Nunito">
                    Analytics
                  </h1>
                  <BiDotsHorizontalRounded color="#B4B4BF" size={27} />
                </div>
                <div className="h-full w-full">
                  <Analytics />
                </div>
                {/* <div className="flex justify-around">
                  <div className="items-center flex gap-3">
                    <div className="bg-[#5B93FF] w-4 h-4 rounded-md"></div>
                    <h1 className="text-base text-[#030229] opacity-[0.7] Nunito">
                      Sale
                    </h1>
                  </div>
                  <div className="items-center flex gap-3">
                    <div className="bg-[#FFD66B] w-4 h-4 rounded-md"></div>
                    <h1 className="text-base text-[#030229] opacity-[0.7] Nunito">
                      Distribute
                    </h1>
                  </div>
                  <div className="items-center flex gap-3">
                    <div className="bg-[#FF8F6B] w-4 h-4 rounded-md"></div>
                    <h1 className="text-base text-[#030229] opacity-[0.7] Nunito">
                      Return
                    </h1>
                  </div>
                </div> */}
              </div>
              <div className="mt-10">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
