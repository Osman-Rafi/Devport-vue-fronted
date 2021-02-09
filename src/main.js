import Vue from "vue";
import "@/assets/scss/theme.scss";
import App from "./App.vue";
import router from "./router/routes";
import store from "./store";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./utils/FontAwesoneInit";
import titleMixin from "./mixins/titleMixin";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.mixin(titleMixin);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
axios.defaults.withCredentials = true; // TODO: double check this line
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
