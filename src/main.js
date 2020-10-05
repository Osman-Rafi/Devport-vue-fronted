import Vue from "vue";
import "@/assets/scss/argon.scss";
import "@/assets/vendor/nucleo/css/nucleo.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import router from "./router/routes";
import store from "./store";
import axios from "axios";
import "./utils/FontAwesoneInit";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const userData = JSON.parse(userInfo);
      this.$store.commit("setUserData", userData);
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(error);
      }
    );
  },
  render: (h) => h(App),
}).$mount("#app");
