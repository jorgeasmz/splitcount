import axios from "axios";

const url = "http://127.0.0.1:8000/splitcount/user/";

const config = {
  headers: {
    Authorization: `token ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
};

export const getUser = () => {
  return axios.get(url, config);
};

export const updateUser = (user) => {
  return axios.put(url, user, config);
};