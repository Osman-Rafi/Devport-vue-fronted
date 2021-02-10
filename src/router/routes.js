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
        path: "/profile",
        component: () => import("../views/Profile/Profile"),
      },
      {
        path: "blog",
        component: () => import("../views/Blog/RecentBlogPost"),
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
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      return next({ path: "/login" });
    }
  } else if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (loggedIn) {
      return next({ path: "/profile" });
    }
  }
  next();
});

export default router;
