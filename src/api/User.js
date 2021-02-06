import { API } from "./Api";

async function userRegister(formData) {
  return API.post("/register", formData);
}

async function userLogin(formData) {
  return API.post("/login", formData);
}

async function userLogout() {
  return API.post("/logout");
}

export { userRegister, userLogin, userLogout };
