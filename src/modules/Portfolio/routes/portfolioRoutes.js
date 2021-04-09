export default [
  {
    path: "/portfolio",
    component: () =>
      import("@/common/components/Layout/Layout/Portfolio/PortfolioLayout"),
    meta: { requiresAuth: false },
    children: [
      {
        path: ":username",
        component: () =>
          import(
            /*webpackChunkName: "portfolio"*/ "../../Portfolio/UserPortfolio"
          ),
      },
    ],
  },
];
