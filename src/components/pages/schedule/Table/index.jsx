import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDate,
  deleteDate,
  updateDate,
  checkDate,
  checkedAllDate,
} from "../../../../redux/actions/sidebar";

function Table({ madal, handleClose }) {
  const data = useSelector((state) => state.userReducer.dates);
  const [date, setDate] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState({ type: false, data: null });
  const handleAddUser = () => {
    if (isEdit.type) {
      const payload = {
        id: isEdit.data,
        date: date,
        time: timeDate,
        location: location,
      };
      dispatch(updateDate(payload));
    } else {
      const payload = {
        id: new Date(),
        date: date,
        time: timeDate,
        location: location,
      };
      dispatch(addDate(payload));
    }
    setDate("");
    setTimeDate("");
    setLocation("");
    handleClose(false);
    setIsEdit({ type: false, data: null });
  };
  const handleDelete = (id) => {
    dispatch(deleteDate(id));
  };
  const handleEdit = (data) => {
    setDate(data.date);
    setTimeDate(data.time);
    setLocation(data.location);
    setIsEdit({ type: true, data: data.id });
    handleClose(true);
  };
  const handleChange = (status, id) => {
    dispatch(checkDate({ data: id, value: status }));
  };
  const handleChange2 = (e) => {
    let newValue = e.target.checked;
    dispatch(checkedAllDate(newValue));
  };
  return (
    <div className="relative">
      <div className="px-7 mb-3 grid grid-cols-12">
        <div className="col-span-1 py-5">
          <input
            type="checkbox"
            className="transformScale"
            checked={data.every((i) => (i.active ? true : false))}
            onChange={(e) => handleChange2(e)}
          />
        </div>
        <div className="col-span-3 flex gap-3 items-center py-5">
          <h1 className="text-[12px] text-[#030229] opacity-[0.7] font-normal">
            Date
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="5"
            viewBox="0 0 6 5"
            fill="none"
          >
            <g opacity="0.7">
              <path
                d="M2.4345 4.81539C2.4055 4.78714 2.2815 4.68047 2.1795 4.5811C1.538 3.99854 0.488 2.47881 0.1675 1.68339C0.116 1.56259 0.007 1.25718 0 1.09401C0 0.937652 0.036 0.788602 0.109 0.646371C0.211 0.46907 0.3715 0.326839 0.561 0.248904C0.6925 0.198734 1.086 0.120799 1.093 0.120799C1.5235 0.0428641 2.223 0 2.996 0C3.7325 0 4.4035 0.0428641 4.8405 0.106673C4.8475 0.11398 5.3365 0.191914 5.504 0.277155C5.81 0.433512 6 0.738919 6 1.06576V1.09401C5.9925 1.30687 5.8025 1.75451 5.7955 1.75451C5.4745 2.50706 4.476 3.99172 3.8125 4.58841C3.8125 4.58841 3.642 4.75645 3.5355 4.82952C3.3825 4.9435 3.193 5 3.0035 5C2.792 5 2.595 4.93619 2.4345 4.81539Z"
                fill="#030229"
              />
            </g>
          </svg>
        </div>
        <div className="col-span-3 flex gap-3 items-center py-5">
          <h1 className="text-[12px] text-[#030229] opacity-[0.7] font-normal">
            Time
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="5"
            viewBox="0 0 6 5"
            fill="none"
          >
            <g opacity="0.7">
              <path
                d="M2.4345 4.81539C2.4055 4.78714 2.2815 4.68047 2.1795 4.5811C1.538 3.99854 0.488 2.47881 0.1675 1.68339C0.116 1.56259 0.007 1.25718 0 1.09401C0 0.937652 0.036 0.788602 0.109 0.646371C0.211 0.46907 0.3715 0.326839 0.561 0.248904C0.6925 0.198734 1.086 0.120799 1.093 0.120799C1.5235 0.0428641 2.223 0 2.996 0C3.7325 0 4.4035 0.0428641 4.8405 0.106673C4.8475 0.11398 5.3365 0.191914 5.504 0.277155C5.81 0.433512 6 0.738919 6 1.06576V1.09401C5.9925 1.30687 5.8025 1.75451 5.7955 1.75451C5.4745 2.50706 4.476 3.99172 3.8125 4.58841C3.8125 4.58841 3.642 4.75645 3.5355 4.82952C3.3825 4.9435 3.193 5 3.0035 5C2.792 5 2.595 4.93619 2.4345 4.81539Z"
                fill="#030229"
              />
            </g>
          </svg>
        </div>
        <div className="col-span-5 flex gap-3 items-center py-5">
          <h1 className="text-[12px] text-[#030229] opacity-[0.7] font-normal">
            Location
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="5"
            viewBox="0 0 6 5"
            fill="none"
          >
            <g opacity="0.7">
              <path
                d="M2.4345 4.81539C2.4055 4.78714 2.2815 4.68047 2.1795 4.5811C1.538 3.99854 0.488 2.47881 0.1675 1.68339C0.116 1.56259 0.007 1.25718 0 1.09401C0 0.937652 0.036 0.788602 0.109 0.646371C0.211 0.46907 0.3715 0.326839 0.561 0.248904C0.6925 0.198734 1.086 0.120799 1.093 0.120799C1.5235 0.0428641 2.223 0 2.996 0C3.7325 0 4.4035 0.0428641 4.8405 0.106673C4.8475 0.11398 5.3365 0.191914 5.504 0.277155C5.81 0.433512 6 0.738919 6 1.06576V1.09401C5.9925 1.30687 5.8025 1.75451 5.7955 1.75451C5.4745 2.50706 4.476 3.99172 3.8125 4.58841C3.8125 4.58841 3.642 4.75645 3.5355 4.82952C3.3825 4.9435 3.193 5 3.0035 5C2.792 5 2.595 4.93619 2.4345 4.81539Z"
                fill="#030229"
              />
            </g>
          </svg>
        </div>
      </div>
      {data.map((item) => (
        <div className="px-7 mb-3 grid grid-cols-12 bg-white transition-all duration-150 rounded-2xl cardShadow">
          <div className="col-span-1 py-5">
            <input
              type="checkbox"
              className="transformScale"
              checked={item.active}
              onChange={() => handleChange(!item.active, item.id)}
            />
          </div>
          <div className="col-span-3 flex gap-3 items-center py-5">
            <BiCalendar size={16} color="#4285F4" />
            <h1 className="text-[14px] text-[#000] font-normal">{item.date}</h1>
          </div>
          <div className="col-span-3 flex gap-3 items-center py-5">
            <BsFillClockFill size={16} color="#030229" />
            <h1 className="text-[14px] text-[#000] font-normal">{item.time}</h1>
          </div>
          <div className="col-span-5 flex justify-between items-center py-1">
            <button className="flex gap-2 items-center w-44 pl-5 py-3 rounded-3xl bg-[#F0EFFF]">
              <ImLocation size={16} color="#605BFF" />
              <h1 className="text-[14px] text-[#605BFF] font-normal">
                {item.location}
              </h1>
            </button>
            <div className="flex gap-5">
              <button
                className="rounded-full p-3 bg-[#FFFBF1]"
                onClick={() => handleEdit(item)}
              >
                <AiFillEdit size={17} color="#FFD66B" />
              </button>
              <button
                className="rounded-full p-3 bg-[#FCF1F2]"
                onClick={() => handleDelete(item.id)}
              >
                <MdDelete size={17} color="#D11A2A" />
              </button>
            </div>
          </div>
        </div>
      ))}
      {madal ? (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#000000ac]">
          <div className="bg-white w-[600px] relative rounded-xl p-5">
            <h1 className="text-center text-2xl font-semibold Nunito pb-3">
              Add Date Form
            </h1>
            <button
              className="absolute top-3 right-3"
              onClick={() => {
                handleClose(false);
                setDate("");
                setTimeDate("");
                setLocation("");
                setIsEdit({ type: false, data: null });
              }}
            >
              <AiOutlineClose size={25} color="gray" />
            </button>
            <div className="flex mb-3 gap-3">
              <input
                type="text"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                placeholder="Date"
                className="text-base border-2 border-gray-400 w-full font-medium px-4 rounded-md outline-none py-2"
              />
              <input
                type="text"
                value={timeDate}
                onChange={(e) => {
                  setTimeDate(e.target.value);
                }}
                placeholder="Time.."
                className="text-base border-2 border-gray-400 w-full font-medium px-4 rounded-md outline-none py-2"
              />
            </div>
            <div className="flex mb-3 gap-3">
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                className="text-base border-2 border-gray-400 w-full font-medium px-4 rounded-md outline-none py-2"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleAddUser()}
                className={` text-white rounded-md font-medium Nunito text-lg px-6 py-2 ${
                  isEdit.type ? "bg-sky-500" : "bg-green-500"
                }`}
              >
                {isEdit.type ? "Edit Date" : "Add Time"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Table;
