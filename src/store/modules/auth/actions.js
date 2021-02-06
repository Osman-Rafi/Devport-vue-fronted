import { userLogin, userLogout, userRegister } from "../../../api/User";

const register = async ({ commit }, authData) => {
  commit(""); //TODO : resolve this
  await userRegister(authData);
};

const login = ({ commit }, authData) => {
  return userLogin(authData)
    .then((res) => {
      commit("set_user", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = async ({ commit }) => {
  await userLogout();
  commit("clear_user_data");
};

export default { register, login, logout };
