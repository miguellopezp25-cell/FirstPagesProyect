import { createBrowserRouter, Navigate } from "react-router";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { AboutPage } from "../pages/about/About";
import { LoginPage } from "../pages/login/LoginPage";

export const router = createBrowserRouter([
  {},
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/about" />,
  },
]);
