const auth_request = (state) => {
  state.status = "loading";
};

const auth_success = (state, user) => {
  state.status = "success";
  state.user = user;
};

const auth_error = (state) => {
  state.status = "error";
};

const auth_clear = (state) => {
  state.user = {};
  state.status = "";
};

export default { auth_request, auth_success, auth_error, auth_clear };
