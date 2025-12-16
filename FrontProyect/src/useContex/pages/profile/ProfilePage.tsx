import { Button } from "@/components/ui/button";
import { use, useContext } from "react";
import { UserContext } from "../../context/UserContex";

export const ProfilePage = () => {
  const { user, logout } = use(UserContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl">Profile Page</h1>

      <pre className="my-4 overflow-x-auto">
        {" "}
        {JSON.stringify({ user }, null, 2)}
      </pre>

      <Button variant="destructive" onClick={logout}>
        Salir
      </Button>
    </div>
  );
};
