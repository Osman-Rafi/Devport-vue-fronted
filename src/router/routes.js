import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/Dashboard/DashboardLayout";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "/home",
        component: () => import("../views/Home"),
      },
      {
        path: "/about",
        component: () => import("../views/About"),
      },
      {
        path: "/login",
        component: () => import("../views/Login"),
      },
      {
        path: "/profile",
        component: () => import("../views/Profile/Profile"),
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
    next("/login");
    return;
  }
  next();
});

export default router;
