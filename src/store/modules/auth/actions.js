import { userLogin, userLogout, userRegister } from "../../../api/User";

const register = ({ commit }, authData) => {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    userRegister(authData)
      .then((res) => {
        const user = res.data.user;
        commit("auth_success", user);
        resolve(res);
      })
      .catch((err) => {
        commit("auth_error");
        reject(err);
      });
    console.log("action");
  });
};

const login = ({ commit }, authData) => {
  return new Promise((resolve, reject) => {
    commit("auth_request");
    userLogin(authData)
      .then((res) => {
        const user = res.data.user;
        commit("auth_success", user);
        resolve(res);
      })
      .catch((err) => {
        commit("auth_error");
        reject(err);
      });
  });
};

const logout = ({ commit }) => {
  userLogout().then(() => {
    commit("auth_clear");
  });
};

export default { register, login, logout };
