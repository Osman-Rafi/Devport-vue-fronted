import Vue from "vue";
import { BVToastPlugin } from "bootstrap-vue";

Vue.use(BVToastPlugin);

let notificationToast = (
  vm,
  append = false,
  title = "",
  msg = "",
  variant = "primary",
  delay = 5000,
  position = "bottom-left"
) => {
  vm.$bvToast.toast(`${msg} `, {
    title: title,
    variant: variant,
    autoHideDelay: delay,
    appendToast: append,
    toaster: `b-toaster-${position}`,
  });
};

export { notificationToast };
