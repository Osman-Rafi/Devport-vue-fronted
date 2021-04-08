import DashboardLayout from "@/common/components/Layout/Layout/Dashboard/DashboardLayout";

export default [
  {
    path: "/",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    redirect: "/profile",
    children: [
      {
        path: "/profile",
        component: () =>
          import(/*webpackChunkName: "profile"*/ "../../Profile/Profile"),
      },
      {
        path: "blog",
        component: () =>
          import(/*webpackChunkName: "blog"*/ "../../Blog/RecentBlogPost"),
      },
      {
        path: "edit-profile",
        component: () =>
          import("../../Profile/UserInformation/EditUserInformation"),
      },
    ],
  },
];
