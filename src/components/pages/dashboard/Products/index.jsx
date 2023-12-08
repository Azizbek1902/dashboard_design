import { AiFillStar } from "react-icons/ai";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import img1 from "../../../../assets/images/krasovka.png";
import img2 from "../../../../assets/images/iPhone-12-2-removebg-preview 1.png";

function Products() {
  const data = [
    {
      id: 1,
      img: img1,
      title: "NIKE Shoes Black Pattern",
      price: "$87",
    },
    { id: 5, title: "" },
    {
      id: 2,
      img: img2,
      title: "iPhone 12",
      price: "$987",
    },
  ];
  return (
    <div>
      <div className="bg-white rounded-md p-5">
        <div className="flex justify-between mb-5 items-center">
          <h1 className="text-[#030229] opacity-[0.7] text-[18px] font-bold Nunito">
            Top Selling Products
          </h1>
          <BiDotsHorizontalRounded color="#B4B4BF" size={27} />
        </div>
        {data.map((item) => {
          return (
            <div className="flex gap-5" key={item.id}>
              {item.title === "" ? (
                <div className="w-full h-[3px] mb-5 mt-5 rounded-md bg-[#F7F7F8]"></div>
              ) : (
                <>
                  <div className="bg-[#D0E3FA] p-7 rounded-lg">
                    <img src={item.img} className="h-10" alt="" />
                  </div>
                  <div className="p-1">
                    <h1 className="text-[#000] pb-1 font-normal text-[15px] Nunito">
                      {item.title}
                    </h1>
                    <div className="flex gap-1 pb-2">
                      <AiFillStar size={20} color="#FFD66B" />
                      <AiFillStar size={20} color="#FFD66B" />
                      <AiFillStar size={20} color="#FFD66B" />
                      <AiFillStar size={20} color="#FFD66B" />
                      <AiFillStar size={20} color="#FFEEC4" />
                    </div>
                    <h1 className="text-[15px] font-bold Nunito text-[#000]">
                      {item.price}
                    </h1>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
