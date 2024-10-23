import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import HomePublic from "./../pages/home/Home"
import HomePrivate from "./../pages/home/HomePrivate"

import Events from "./../pages/Events"
import Register from "./../pages/auth/register/Register"
import Login from "./../pages/auth/login/Login"
import Logout from "./../pages/auth/logout/Logout"
import NavBarWrapper from "./NavBarWrapper";
import Store from "./../pages/Store";
import Profile from "./../pages/Profile";

import { PATH } from "./routes"

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: PATH.STORE,
      element: <Store />,
    },
    {
      path: PATH.EVENTS,
      element: <Events />,
    }
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: PATH.HOME_PRIVATE,
      element: <ProtectedRoute />,
      children: [
        {
          path: PATH.HOME_PRIVATE,
          element: <HomePrivate />,
        },
        {
          path: PATH.PROFILE,
          element: <Profile />,
        },
        {
          path: PATH.LOGOUT,
          element: <Logout />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: PATH.HOME_PUBLIC,
      element: <HomePublic />,
    },
    {
      path: PATH.LOGIN,
      element: <Login />,
    },
    {
      path: PATH.SIGNIN,
      element: <Register />
    }
  ];


  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBarWrapper />,
      children: [
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
      ],
    },
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
