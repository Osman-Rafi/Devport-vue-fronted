import axios from "axios";

export let API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export let setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axios.defaults.withCredentials = true;

export default API;
