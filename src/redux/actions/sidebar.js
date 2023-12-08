import {
  UPDATE_NAVBAR,
  ADD_USERS,
  DELETE_USERS,
  UPDATE_USERS,
  DELETE_ALL,
  CHECK_All,
  CHECK_USER,
  ADD_DATE,
  DELETE_DATE,
  UPDATE_DATE,
  CHECK_ALL_DATE,
  CHECK_DATE,
} from "../actionTypes";

export const updateNavbar = (payload) => {
  return {
    type: UPDATE_NAVBAR,
    payload,
  };
};
export const addDate = (payload) => {
  console.log("add user payload", payload);
  return {
    type: ADD_DATE,
    payload,
  };
};

export const deleteDate = (payload) => {
  return {
    type: DELETE_DATE,
    payload,
  };
};
export const updateDate = (payload) => {
  return {
    type: UPDATE_DATE,
    payload,
  };
};
export const addUser = (payload) => {
  console.log("add user payload", payload);
  return {
    type: ADD_USERS,
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETE_USERS,
    payload,
  };
};
export const updateUser = (payload) => {
  return {
    type: UPDATE_USERS,
    payload,
  };
};
export const deleteAll = (payload) => {
  return {
    type: DELETE_ALL,
    payload,
  };
};

export const checked = (payload) => {
  return {
    type: CHECK_USER,
    payload,
  };
};
export const checkedAll = (payload) => {
  return {
    type: CHECK_All,
    payload,
  };
};
export const checkDate = (payload) => {
  return {
    type: CHECK_DATE,
    payload,
  };
};
export const checkedAllDate = (payload) => {
  return {
    type: CHECK_ALL_DATE,
    payload,
  };
};
