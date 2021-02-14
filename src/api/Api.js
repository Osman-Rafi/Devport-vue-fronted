import axios from "axios";

const injectAccessToken = (config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken)
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
};

const config = {
  baseURL: "http://localhost:8000/api", //TODO: enviroment variable
};

const API = axios.create(config);

API.interceptors.request.use(injectAccessToken);

export default API;
