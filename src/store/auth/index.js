import { userLogin } from "../../api/User.js";
import axios from "axios";

export default {
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },

  mutations: {
    setUserData(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    },
  },

  actions: {
    login({ commit }, credentials) {
      return userLogin("/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
  },

  getters: {
    isLogged: (state) => !!state.user,
  },
};
