import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/Dashboard/DashboardLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("../views/Auth/Login"),
    meta: { guestOnly: false },
  },
  {
    path: "/register",
    component: () => import("../views/Auth/Register"),
    meta: { guestOnly: false },
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

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
    return;
  } else if (to.matched.some((record) => record.meta.guestOnly)) {
    if (loggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    }
  }
  next();
});

export default router;
