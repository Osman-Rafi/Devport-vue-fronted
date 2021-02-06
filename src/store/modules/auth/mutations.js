import { setAuthHeader } from "../../../api/Api";

const set_user = (state, userData) => {
  state.user = userData.data.user;
  localStorage.setItem("user", JSON.stringify(userData.data.user));
  setAuthHeader(userData.data.token);
};

const clear_user_data = () => {
  localStorage.removeItem("user");
  // location.reload();
};

export default { set_user, clear_user_data };
