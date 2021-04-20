import API from "@/api/Api";
import { notificationToast } from "../../../common/components/NotificationToast";

const register = async ({ commit }, authdata) => {
  try {
    const res = await API.post("register", authdata);
    commit("register_user");
    return res;
  } catch (error) {
    notificationToast(
      this,
      true,
      "Opps!",
      "Something went wrong",
      "danger",
      "5000",
      "top-left"
    );
  }
};

const login = async ({ commit }, authData) => {
  try {
    const res = await API.post("login", authData);
    await commit("set_user_data", res);
  } catch (error) {
    alert("Something went wrong, Please try with correct credentials");
    location.reload();
  }
};

const logout = async ({ commit }) => {
  try {
    const res = await API.post("logout");
    commit("clear_user_data", res);
  } catch (error) {
    notificationToast(
      this,
      true,
      "Opps!",
      "Something went wrong",
      "danger",
      "5000",
      "top-left"
    );
  }
};

const clear_user_for_server_loss = async ({ commit }) => {
  try {
    commit("clear_user_data");
  } catch (error) {
    notificationToast(
      this,
      true,
      "Opps!",
      "Something went wrong",
      "danger",
      "5000",
      "top-left"
    );
  }
};

export default { register, login, logout, clear_user_for_server_loss };
