import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Calendar from "../../components/pages/schedule/Calendar";
import People from "../../components/pages/schedule/People";
import Table from "../../components/pages/schedule/Table";

export default () => {
  const [modal, setModal] = useState(false);
  const closeModal = (data) => {
    setModal(data);
  };
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="w-[95%] my-5">
          <div className="flex justify-between items-center">
            <h1 className="text-[#000] Nunito text-2xl font-extrabold">
              Schedule List
            </h1>
            <div className="flex  gap-5">
              <button
                onClick={() => {
                  setModal(true);
                }}
                className="flex bg-[#605BFF] h-12 items-center text-white gap-2 rounded-xl px-6 text-base font-semibold Nunito"
              >
                <AiOutlinePlus size={25} />
                Add New
              </button>
            </div>
          </div>
          <div className="mt-10 gap-10 flex justify-center  min-h-screen max-h-full">
            <div className="w-[25%] rounded-md flex justify-center bg-white">
              <div className="w-[80%] relative my-5">
                <button className="flex bg-[#605BFF] py-3 justify-center items-center w-full text-white gap-2 rounded-xl text-base font-semibold Nunito">
                  <AiOutlinePlus size={25} />
                  Create Schedule
                </button>
                <div className="mt-5">
                  <Calendar />
                </div>
                <People />
                <div className="absolute bottom-0 w-full">
                  <button className="text-[#605BFF] border-[#bebebe] py-2 w-full border-2 rounded-md">
                    My Schedule
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[75%]">
              <Table madal={modal} handleClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
