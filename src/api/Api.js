import axios from "axios";

let API = axios.create({
  baseURL: "http://localhost:8000/api",
});

axios.defaults.withCredentials = true;

export default API;
