const set_user_data = (state, response) => {
  const token = response.data.token;
  const user = response.data.user;
  localStorage.setItem("access_token", token);
  state.user = user;
};

const clear_user_data = (state) => {
  localStorage.clear();
  state.user = {};
  location.reload();
};

export default { set_user_data, clear_user_data };
