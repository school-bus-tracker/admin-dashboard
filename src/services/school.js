import axios from "axios";
import { schoolURL } from "../configs/endpoints";

export const getSchools = (token) => {
  const config = {
    method: "get",
    url: schoolURL,
    headers: getHeader(token),
  };
  return axios(config);
};

export const getSchool = (token, id) => {
  const config = {
    method: "get",
    url: `${schoolURL}/${id}`,
    headers: getHeader(token),
  };
  return axios(config);
};

export const editSchool = (token, id, data) => {
  const config = {
    method: "put",
    url: `${schoolURL}/${id}`,
    headers: getHeader(token),
    data:data
  };
  return axios(config);
};


export const insertSchool = (token, data) => {
  const config = {
    method: "post",
    url: schoolURL,
    headers: getHeader(token),
    data: data,
  };
  return axios(config);
};

const getHeader = (token) => {
  return {
    "x-auth-token": token,
    "Content-Type": "application/json",
  };
};
