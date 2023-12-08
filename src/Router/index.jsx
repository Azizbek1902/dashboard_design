import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Invoice from "../views/Invoice";
import Schedule from "../views/Schedule";

export default () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex w-full max-h-full min-h-screen">
        <div
          className={`${
            open ? "w-[6%]" : "w-[18%]"
          } transition-all duration-500 bg-white`}
        >
          <Sidebar handleClik={handleClose} width={open} />
        </div>
        <div className={`${open ? "w-[94%]" : "w-[88%]"} bg-[#FAFAFB]`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
