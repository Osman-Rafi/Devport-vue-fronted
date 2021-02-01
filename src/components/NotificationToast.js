import Vue from "vue";
import { ToastPlugin } from "bootstrap-vue";
Vue.use(ToastPlugin);

export default {
  async submitResponse(variant) {
    console.log(variant);
    this.$bvToast.toast("Response", {
      title: "title",
      variant: variant,
      solid: true,
    });
  },
};
