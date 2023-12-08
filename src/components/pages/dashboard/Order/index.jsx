import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import img1 from "../../../../assets/images/table1.png";
import img2 from "../../../../assets/images/table2.png";
import img3 from "../../../../assets/images/table3.png";
import img4 from "../../../../assets/images/table4.png";

function Order() {
  const data = [
    {
      id: "#876364",
      img: img1,
      title: "Camera Lens",
      price: "$178",
      order: "325",
      amount: "$1,46,660",
    },
    {
      id: "#876368",
      img: img2,
      title: "Black Sleep Dress",
      price: "$14",
      order: "53",
      amount: "$46,660",
    },
    {
      id: "#876412",
      img: img3,
      title: "Argan Oil",
      price: "$21",
      order: "78",
      amount: "$3,46,676",
    },
    {
      id: "#876621",
      img: img4,
      title: "EAU DE Parfum",
      price: "$32",
      order: "98",
      amount: "$3,46,981",
    },
  ];
  return (
    <div>
      <div className="w-full bg-white rounded-md p-5 mt-10">
        <div className="flex justify-between mb-5 items-center">
          <h1 className="text-[#030229] opacity-[0.7] text-[18px] font-bold Nunito">
            Recent Orders
          </h1>
          <BiDotsHorizontalRounded color="#B4B4BF" size={27} />
        </div>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 font-normal text-[#030229] Nunito"
              >
                Tracking no
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-normal text-[#030229] Nunito"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-normal text-[#030229] Nunito"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-normal text-[#030229] Nunito"
              >
                Total Order
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-normal text-[#030229] Nunito"
              >
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  className={` ${
                    index % 2 !== 0 ? "bg-[#F9F9F9]" : "bg-white"
                  } `}
                  key={index + 1}
                >
                  <td className="whitespace-nowrap text-[12px] text-[#030229] font-normal Nunito px-6 py-2">
                    {item.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 flex gap-4 items-center">
                    <img src={item.img} alt="" />
                    <h1 className="text-[12px] text-[#030229] font-normal Nunito">
                      {item.title}
                    </h1>
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-[12px] text-[#030229] font-normal Nunito">
                    {item.price}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-[12px] text-[#030229] font-normal Nunito">
                    {item.order}
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 text-[12px] text-[#030229] font-normal Nunito">
                    {item.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Order;
