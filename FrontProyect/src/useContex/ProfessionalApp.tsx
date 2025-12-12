import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

export const ProfessionalApp = () => {
  return (
    <>
      <div className="bg-gradient">
        <RouterProvider router={router} />,
      </div>
    </>
  );
};
