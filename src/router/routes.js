import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/Dashboard/DashboardLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("../views/Auth/Login"),
    meta: { hideForAuth: true },
  },
  {
    path: "/register",
    component: () => import("../views/Auth/Register"),
    meta: { hideForAuth: true },
  },
  {
    path: "/",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/Home"),
      },
      {
        path: "about",
        component: () => import("../views/About"),
      },
      {
        path: "profile",
        component: () => import("../views/Profile/Profile"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("auth");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      return next({ path: "/login" });
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (loggedIn) {
      return next({ path: "/" });
    }
  }
  next();
});

export default router;
