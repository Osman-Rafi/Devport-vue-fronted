import API from "@/api/Api";

const register = async ({ commit }, authData) => {
  commit(""); //TODO : resolve this
  await API.post("/register", authData);
};

const login = ({ commit }, authData) => {
  return API.post("/login", authData)
    .then((res) => {
      commit("set_user_data", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = async ({ commit }) => {
  await API.post("/logout");
  commit("clear_user_data");
};

export default { register, login, logout };
