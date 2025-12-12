import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/about";
import { ProfilePage } from "../profile/ProfilePage";
import { LoginPage } from "../login/loginPage";

export const router = createBrowserRouter([
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
    element: <Navigate to="/" />,
  },
]);
