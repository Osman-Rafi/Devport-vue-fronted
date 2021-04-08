import Vue from "vue";
import VueRouter from "vue-router";
//modules
import authRoutes from "@/modules/Auth/routes/authRoutes";
import profileRoutes from "@/modules/Profile/routes/profileRoutes";
import portfolioRoutes from "@/modules/Portfolio/routes/portfolioRoutes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import("@/common/components/Layout/Layout/General/GeneralLayout"),
    children: [
      {
        path: "",
        component: () =>
          import(/*webpackChunkName:"home"*/ "../modules/Home/Home"),
      },
    ],
  },
  ...authRoutes,
  ...profileRoutes,
  ...portfolioRoutes,
  {
    path: "*",
    component: () => import("../common/components/404"),
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
