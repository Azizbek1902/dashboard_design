import {
  UPDATE_USERS,
  ADD_USERS,
  DELETE_USERS,
  DELETE_ALL,
  CHECK_USER,
  CHECK_All,
  ADD_DATE,
  DELETE_DATE,
  UPDATE_DATE,
  CHECK_ALL_DATE,
  CHECK_DATE,
} from "../actionTypes";
import img1 from "../../assets/images/tableimg/1.svg";
import img2 from "../../assets/images/tableimg/2.svg";
import img3 from "../../assets/images/tableimg/3.svg";
import img4 from "../../assets/images/tableimg/4.svg";
import img5 from "../../assets/images/tableimg/5.svg";
import img6 from "../../assets/images/tableimg/6.svg";
import img7 from "../../assets/images/tableimg/7.svg";
import img8 from "../../assets/images/tableimg/8.svg";
import img9 from "../../assets/images/tableimg/9.svg";
import img10 from "../../assets/images/tableimg/10.svg";

const initialState = {
  users: [
    {
      id: 1,
      invoidId: "#876364",
      img: img1,
      title: "Arrora gaur",
      email: "arroragaur@gmail.com",
      date: "12 Dec, 2020",
      status: "0",
      active: false,
    },
    {
      id: 2,
      invoidId: "#876123",
      img: img2,
      title: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "1",
      active: false,
    },
    {
      id: 3,
      invoidId: "#876213",
      img: img3,
      title: "Robert Bacins",
      email: "robertbacins@gmail.com",
      date: "09 Dec, 2020",
      status: "0",
      active: false,
    },
    {
      id: 4,
      invoidId: "#876987",
      img: img4,
      title: "Bethany Jackson",
      email: "bethanyjackson@gmail.com",
      date: "09 Dec, 2020",
      status: "2",
      active: false,
    },
    {
      id: 5,
      invoidId: "#871345",
      img: img5,
      title: "Anne Jacob",
      email: "annejacob@gmail.com",
      date: "10 Dec, 2020",
      status: "0",
      active: false,
    },
    {
      id: 6,
      invoidId: "#872345",
      img: img6,
      title: "Bethany jackson",
      email: "bethanyjackson@gmail.com",
      date: "10 Dec, 2020",
      status: "1",
      active: false,
    },
    {
      id: 7,
      invoidId: "#872346",
      img: img7,
      title: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "0",
      active: false,
    },
    {
      id: 8,
      invoidId: "#873245",
      img: img8,
      title: "Jhon Deo",
      email: "jhondeo32@gmail.com",
      date: "08 Dec, 2020",
      status: "0",
      active: false,
    },
    {
      id: 9,
      invoidId: "#876364",
      img: img9,
      title: "Bethany jackson",
      email: "bethanyjackson@gmail.com",
      date: "02 Dec, 2020",
      status: "2",
      active: false,
    },
    {
      id: 10,
      invoidId: "#878769",
      img: img10,
      title: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "01 Dec, 2020",
      status: "1",
      active: false,
    },
  ],
  dates: [
    {
      id: 1,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      active: false,
    },
    {
      id: 2,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Home",
    },
    {
      id: 3,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      active: false,
    },
    {
      id: 4,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      active: false,
    },

    {
      id: 5,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      active: false,
    },
    {
      id: 6,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      active: false,
    },

    {
      id: 7,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      active: false,
    },
    {
      id: 8,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
      active: false,
    },
  ],
  inputCheck: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_DATE:
      return {
        ...state,
        dates: [...state.dates, payload],
      };
    case UPDATE_DATE: {
      let index = state.dates.findIndex((item) => item.id == payload.id);
      const newValues = state.dates;
      newValues[index] = payload;
      return {
        ...state,
        dates: newValues,
      };
    }
    case DELETE_DATE: {
      return {
        ...state,
        dates: state.dates.filter((user) => user.id !== payload),
      };
    }
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE_USERS: {
      let index = state.users.findIndex((item) => item.id == payload.id);
      const newValues = state.users;
      newValues[index] = payload;
      return {
        ...state,
        users: newValues,
      };
    }
    case DELETE_USERS: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    }
    case DELETE_ALL: {
      let person = state.users;
      let newData = [];
      for (let i = 0; i < person.length; i++) {
        if (person[i].active == false) {
          newData.push(person[i]);
        }
      }
      return {
        ...state,
        users: newData,
      };
    }
    case CHECK_USER: {
      let data = [...state.users];
      data.filter((i) =>
        i.id == payload.data ? (i.active = payload.value) : i
      );
      return {
        ...state,
        users: data,
      };
    }
    case CHECK_All: {
      let data = [...state.users];
      for (let i = 0; i < data.length; i++) {
        data[i].active = payload;
      }
      return {
        ...state,
        users: data,
      };
    }
    case CHECK_DATE: {
      let data = [...state.dates];
      data.filter((i) =>
        i.id == payload.data ? (i.active = payload.value) : i
      );
      return {
        ...state,
        dates: data,
      };
    }
    case CHECK_ALL_DATE: {
      let data = [...state.dates];
      for (let i = 0; i < data.length; i++) {
        data[i].active = payload;
      }
      return {
        ...state,
        dates: data,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
