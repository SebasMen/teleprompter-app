import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, DashboardLayout, WrapperLayout } from "../layouts";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <WrapperLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            element: <div>Login</div>,
          },
          {
            path: "/auth/register",
            element: <div>Register</div>,
          },
        ]
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <div>Home</div>,
          },
          {
            path: "/dashboard/videos",
            element: <div>Videos</div>,
          },
          {
            path: "/dashboard/account",
            element: <div>Account</div>,
          },
        ]
      }
    ]
  },
]);
