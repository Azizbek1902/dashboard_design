import { IoMdSettings } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { TbActivity } from "react-icons/tb";
import { HiDocumentText } from "react-icons/hi";
import { BsCalendarMonthFill } from "react-icons/bs";
import { HiTicket } from "react-icons/hi";
import { MdAnalytics } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { UPDATE_NAVBAR } from "../actionTypes";

const initialState = {
  navbarItems: [
    {
      id: 1,
      title: "Dashboard",
      url: "/",
      icon1: <MdDashboard size={25} color="#605BFF" />,
      icon2: <MdDashboard size={25} color="#9A9AA9" />,
      active: false,
    },
    {
      id: 2,
      title: "Analytics",
      url: "/",
      icon1: <MdAnalytics size={25} color="#605BFF" />,
      icon2: <MdAnalytics size={25} color="#9A9AA9" />,
      active: false,
    },
    {
      id: 3,
      title: "Invoice",
      url: "/invoice",
      icon1: <HiTicket size={25} color="#605BFF" />,
      icon2: <HiTicket size={25} color="#9A9AA9" />,
      active: false,
    },
    {
      id: 4,
      title: "Schedule",
      url: "/schedule",
      icon1: <HiDocumentText size={25} color="#605BFF" />,
      icon2: <HiDocumentText size={25} color="#9A9AA9" />,
      active: false,
    },
    {
      id: 5,
      title: "Calendar",
      url: "/",
      icon1: <BsCalendarMonthFill size={25} color="#605BFF" />,
      icon2: <BsCalendarMonthFill size={25} color="#9A9AA9" />,
      active: false,
    },
    {
      id: 6,
      title: "Messages",
      url: "/",
      icon1: <TbActivity size={25} color="#605BFF" />,
      icon2: <TbActivity size={25} color="#9A9AA9" />,
      active: false,
    },
    {
      id: 7,
      title: "Notification",
      url: "/",
      icon1: <MdNotifications size={25} color="#605BFF" />,
      icon2: <MdNotifications size={25} color="#9A9AA9" />,
      active: false,
    },
    {
      id: 8,
      title: "Settings",
      url: "/",
      icon1: <IoMdSettings size={25} color="#605BFF" />,
      icon2: <IoMdSettings size={25} color="#9A9AA9" />,
      active: false,
    },
  ],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_NAVBAR: {
      let arr = state.navbarItems;
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == payload.id) {
          arr[i].active = true;
          newArr.push(arr[i]);
        } else {
          arr[i].active = false;
          newArr.push(arr[i]);
        }
      }
      return {
        ...state,
        navbarItems: newArr,
      };
    }

    default:
      return state;
  }
};
export default productReducer;
