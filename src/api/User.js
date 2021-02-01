import API from "./Api";
import Csrf from "./Csrf";

async function userRegister(formData) {
  await Csrf.getCookie();
  return API.post("/register", formData);
}

async function userLogin(formData) {
  await Csrf.getCookie();
  return API.post("/login", formData);
}

async function userLogout() {
  await Csrf.getCookie();
  return API.post("/logout");
}

export { userRegister, userLogin, userLogout };
