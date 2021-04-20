export default [
  {
    path: "/",
    component: () =>
      import("../../../common/components/Layout/Layout/Auth/AuthLayout"),
    meta: { hideForAuth: true },
    children: [
      {
        path: "login",
        component: () =>
          import(/*webpackChunkName: "login"*/ "../../Auth/Login"),
      },
      {
        path: "register",
        component: () =>
          import(/*webpackChunkName: "register"*/ "../../Auth/Register"),
      },
    ],
  },
];
