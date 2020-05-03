import axios from "axios";
import { superuserURL, superuserprofileURL } from "../configs/endpoints";

export const loginService = (login) => {
  const userdata = {
    EmailID: login.email,
    Password: login.password,
    isSuperUser: true,
  };

  return axios.post(superuserURL, userdata);
};

export const setUserToken = (token) => {
  localStorage.setItem("a-key", token);
};

export const getUserToken = () => {
  return localStorage.getItem("a-key");
};

export const logoutService = () => {
  return localStorage.removeItem("a-key");
};

export const setUserProfile = async (token) => {
  const config = {
    method: "get",
    url: superuserprofileURL,
    headers: getHeader(token),
  };
  const response = await axios(superuserprofileURL, config);
  const profile = {
    id: response.data._id,
    FirstName: response.data.FirstName,
    LastName: response.data.LastName,
  };
  localStorage.setItem("user-profile", JSON.stringify(profile));
};

export const getUserProfile = () => {
  return JSON.parse(localStorage.getItem("user-profile"));
};

const getHeader = (token) => {
  return {
    "x-auth-token": token,
    "Content-Type": "application/json",
  };
};
