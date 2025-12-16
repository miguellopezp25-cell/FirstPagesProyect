import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { UserContexProvider } from "./context/UserContex";

export const ProfessionalApp = () => {
  return (
    <UserContexProvider>
      <div className="bg-gradient flex flex-col">
        <RouterProvider router={router} />
      </div>
    </UserContexProvider>
  );
};
