import API from "@/api/Api";

const register = async ({ commit }, authdata) => {
  try {
    await API.post("register", authdata);
    commit("register_user");
  } catch (error) {
    console.log(error);
  }
};

const login = async ({ commit }, authData) => {
  try {
    const res = await API.post("login", authData);
    commit("set_user_data", res);
  } catch (error) {
    console.log(error);
  }
};

const logout = async ({ commit }) => {
  try {
    const res = await API.post("logout");
    commit("clear_user_data", res);
  } catch (error) {
    console.log(error);
  }
};

const clear_user_for_server_loss = async ({ commit }) => {
  try {
    commit("clear_user_data");
  } catch (error) {
    console.log(error);
  }
};

export default { register, login, logout, clear_user_for_server_loss };
