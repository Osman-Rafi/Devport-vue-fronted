/*import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import auth from "./auth";

Vue.use(Vuex);

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default new Vuex.Store({
  state: {
    user: null,
  },

  mutations: {
    setUserData(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
    },

    clearUserData() {
      localStorage.removeItem("user");
      location.reload();
    },
  },

  actions: {
    login({ commit }, credentials) {
      return axios.post("/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },

    logout({ commit }) {
      commit("clearUserData");
    },
  },

  getters: {
    isLogged: (state) => !!state.user,
  },

  modules: {
    auth,
  },
});*/
import Vue from "vue";
import Vuex from "vuex";
import { userLogin, userRegister, userLogout } from "../api/User.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },

  mutations: {
    auth_request(state) {
      state.status = "loading";
    },

    auth_success(state, user) {
      state.status = "success";
      state.user = user;
    },

    auth_error(state) {
      state.status = "error";
    },

    auth_clear(state) {
      state.user = {};
      state.status = "";
    },
  },

  actions: {
    register({ commit }, authData) {
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
    },

    login({ commit }, authData) {
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
    },

    logout({ commit }) {
      userLogout().then(() => {
        localStorage.removeItem("auth");
        commit("auth_clear");
      });
    },
  },

  getters: {
    authStatus: (state) => state.status,
  },
});
