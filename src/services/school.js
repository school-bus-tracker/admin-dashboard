import axios from "axios";
import { schoolURL } from "../configs/endpoints";

export const getSchools = (token) => {
  const config = {
    method: "get",
    url: schoolURL,
    headers: getHeader(token),
  };
  return axios(schoolURL, config);
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
