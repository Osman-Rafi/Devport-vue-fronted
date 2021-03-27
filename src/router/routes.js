import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../modules/Layout/Dashboard/DashboardLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () =>
      import(/*webpackChunkName: "login"*/ "../modules/Auth/Login"),
    meta: { hideForAuth: true },
  },
  {
    path: "/register",
    component: () =>
      import(/*webpackChunkName: "register"*/ "../modules/Auth/Register"),
    meta: { hideForAuth: true },
  },
  {
    path: "/",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    redirect: "/profile",
    children: [
      {
        path: "/profile",
        component: () =>
          import(/*webpackChunkName: "profile"*/ "../modules/Profile/Profile"),
      },
      {
        path: "blog",
        component: () =>
          import(/*webpackChunkName: "blog"*/ "../modules/Blog/RecentBlogPost"),
      },
      {
        path: "edit-profile",
        component: () =>
          import("../modules/Profile/UserInformation/EditUserInformation"),
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
  const loggedIn = localStorage.getItem("access_token");

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
