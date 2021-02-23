import axios from "axios";

const injectAccessToken = (config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken)
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
};

const config = {
  baseURL: process.env.VUE_APP_API_ROOT_PATH,
};

const API = axios.create(config);

API.interceptors.request.use(injectAccessToken);

export default API;
