import { AiOutlineClose } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  checked,
  addUser,
  updateUser,
  checkedAll,
  deleteAll,
} from "../../redux/actions/sidebar";
import img1 from "../../assets/images/tableimg/1.svg";

export default () => {
  const usersArr = useSelector((state) => state.userReducer.users);
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState("");
  const [isEdit, setIsEdit] = useState({ type: false, data: null });
  const [invoice, setInvoice] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleAddUser = () => {
    if (isEdit.type) {
      const payload = {
        id: isEdit.data.id,
        invoidId: invoice,
        img: isEdit?.data?.img ? isEdit?.data?.img : img1,
        title: name,
        email: email,
        date: date,
        status: status,
        active: false,
      };
      dispatch(updateUser(payload));
    } else {
      const payload = {
        id: new Date(),
        invoidId: invoice,
        img: img1,
        title: name,
        email: email,
        date: date,
        status: status,
        active: false,
      };
      dispatch(addUser(payload));
    }
    setInvoice("");
    setName("");
    setEmail("");
    setDate("");
    setStatus("");
    setModal(false);
    setIsEdit({ type: false, data: null });
  };
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    setOpen(false);
  };
  const handleEdit = (data) => {
    setOpen(false);
    setInvoice(data.invoidId);
    setName(data.title);
    setEmail(data.email);
    setDate(data.date);
    setStatus(data.status);
    setModal(true);
    setIsEdit({ type: true, data: data });
  };
  const handleChange = (status, id) => {
    console.log(status, id);
    dispatch(checked({ data: id, value: status }));
  };
  const handleChange2 = (e) => {
    let newValue = e.target.checked;
    dispatch(checkedAll(newValue));
  };
  return (
    <div>
      <div className="flex justify-center w-full relative">
        <div className="w-[95%] my-5">
          <div className="flex justify-between items-center">
            <h1 className="text-[#000] Nunito text-2xl font-bold">
              Invoice List
            </h1>
            <div className="flex items-center gap-5">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-s-xl pl-6 outline-none bg-white placeholder:text-gray-400 font-medium text-12px Nunito"
                />
                <button className="bg-white h-12 px-6 rounded-e-xl">
                  <BsSearch size={17} color="gray" />
                </button>
              </div>
              <button
                onClick={() => {
                  setModal(true);
                  setOpen(false);
                }}
                className="flex bg-[#605BFF] h-12 items-center text-white gap-2 rounded-xl px-6 text-base font-semibold Nunito"
              >
                <AiOutlinePlus size={25} />
                Add New
              </button>
            </div>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 mb-3 py-4 rounded-lg">
              <div className="grid grid-cols-12">
                <div className="col-span-1 flex justify-center items-center">
                  <input
                    type="checkbox"
                    className="transformScale"
                    checked={usersArr.every((i) => (i.active ? true : false))}
                    onChange={(e) => handleChange2(e)}
                  />
                </div>
                <div className="col-span-2 flex justify-start items-center gap-3">
                  <h1 className="text-[12px] text-[#030229] opacity-[0.7] Nunito font-normal">
                    Invoice Id
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
                <div className="col-span-4 flex justify-start items-center gap-3">
                  <h1 className="text-[12px] text-[#030229] opacity-[0.7] Nunito font-normal">
                    Name
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
                <div className="col-span-5 flex justify-start items-center gap-3">
                  <h1 className="text-[12px] text-[#030229] opacity-[0.7] Nunito font-normal">
                    Email
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
              <div className="grid grid-cols-12">
                <div className="col-span-5 flex justify-start items-center gap-3">
                  <h1 className="text-[12px] text-[#030229] opacity-[0.7] Nunito font-normal">
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
                <div className="col-span-5 flex justify-start items-center gap-3">
                  <h1 className="text-[12px] text-[#030229] opacity-[0.7] Nunito font-normal">
                    Status
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
                <div className="col-span-1"></div>
                <div className="col-span-1 flex justify-center items-center">
                  <button
                    onClick={() => {
                      dispatch(deleteAll());
                    }}
                  >
                    <AiFillDelete color="#9797A7" size={25} />
                  </button>
                </div>
              </div>
            </div>
            {usersArr.map((item, index) => {
              return (
                <div
                  className="grid grid-cols-2 mb-3 py-2 rounded-lg cardShadow bg-white"
                  key={index + 1}
                >
                  {console.log(item.active)}
                  <div className="grid grid-cols-12">
                    <div className="col-span-1 flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={item.active}
                        className="transformScale"
                        onChange={() => handleChange(!item.active, item.id)}
                      />
                    </div>
                    <div className="col-span-2 flex justify-start items-center gap-3">
                      <h1 className="text-[14px] text-[#000] Nunito font-semibold">
                        {item.invoidId}
                      </h1>
                    </div>
                    <div className="col-span-4 flex justify-start items-center gap-3">
                      <div className="bg-[#E3EEF9] rounded-full">
                        <img src={item.img} alt="" className="rounded-full" />
                      </div>
                      <h1 className="text-[14px] text-[#000] Nunito font-semibold">
                        {item.title}
                      </h1>
                    </div>
                    <div className="col-span-5 flex justify-start items-center gap-2">
                      <MdEmail size={16} color="green" />
                      <h1 className="text-[14px] text-[#000] Nunito font-semibold">
                        {item.email}
                      </h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-5 flex justify-start items-center gap-3">
                      <BsFillCalendarDayFill size={14} color="blue" />
                      <h1 className="text-[14px] text-[#000] Nunito font-semibold">
                        {item.date}
                      </h1>
                    </div>
                    <div className="col-span-5 flex justify-start items-center gap-3">
                      <button
                        className={`rounded-3xl Nunito ${
                          item.status == "0"
                            ? "bg-[#ECF5EE] text-[#3A974C]"
                            : item.status == "1"
                            ? "bg-[#FEF5EC] text-[#F29339]"
                            : "bg-[#FBE9EA] text-[#D11A2A]"
                        } text-center w-40 font-bold py-2`}
                      >
                        {item.status == "0"
                          ? "Complete"
                          : item.status == "1"
                          ? "Pending"
                          : "Cancel"}
                      </button>
                    </div>
                    <div className="col-span-1 flex justify-start items-center">
                      <button>
                        {item.active ? (
                          <AiFillStar size={22} color="#FFD66C" />
                        ) : (
                          <AiFillStar size={22} color="#E8E8EB" />
                        )}
                      </button>
                    </div>
                    <div className="relative">
                      <div className="col-span-1 pt-3  flex justify-center items-center">
                        <button
                          onClick={() => {
                            setOpen(open == item.id ? "" : item.id);
                          }}
                        >
                          <BiDotsHorizontalRounded size={20} />
                        </button>
                      </div>
                      <div
                        className={`absolute transition-all duration-200 right-0 flex w-24 flex-col gap-2 bg-white overflow-hidden ${
                          open == item.id ? "h-[70px] p-2" : "h-0"
                        } top-9 shawod rounded-md z-50`}
                      >
                        <button
                          onClick={() => handleEdit(item)}
                          className="flex bg-[#F7F9FF] p-1 w-full text-[#5B93FF] text-[10px] font-normal Nunito"
                        >
                          <AiFillEdit size={12} color="#5B93FF" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="flex bg-[#FEF3F5] p-1 w-full text-[#E71D36] text-[10px] font-normal Nunito"
                        >
                          <AiFillEdit size={12} color="#E71D36" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {modal ? (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[#000000ac]">
          <div className="bg-white w-[600px] relative rounded-xl p-5">
            <h1 className="text-center text-2xl font-semibold Nunito pb-3">
              Add User Form
            </h1>
            <button
              className="absolute top-3 right-3"
              onClick={() => {
                setModal(false);
                setInvoice("");
                setName("");
                setEmail("");
                setDate("");
                setStatus("");
                setIsEdit({ type: false, data: null });
              }}
            >
              <AiOutlineClose size={25} color="gray" />
            </button>
            <div className="flex mb-3 gap-3">
              <input
                type="text"
                value={invoice}
                onChange={(e) => {
                  setInvoice(e.target.value);
                }}
                placeholder="Invoice Id"
                className="text-base border-2 border-gray-400 w-full font-medium px-4 rounded-md outline-none py-2"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name.."
                className="text-base border-2 border-gray-400 w-full font-medium px-4 rounded-md outline-none py-2"
              />
            </div>
            <div className="flex mb-3 gap-3">
              <input
                type="text"
                placeholder="Email.."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="text-base border-2 border-gray-400 w-full font-medium px-4 rounded-md outline-none py-2"
              />
              <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="text-base border-2 border-gray-400 w-full font-medium px-4 rounded-md outline-none py-2"
              />
            </div>
            <div className="flex mb-3 gap-3">
              <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
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
                {isEdit.type ? "Edit User" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
