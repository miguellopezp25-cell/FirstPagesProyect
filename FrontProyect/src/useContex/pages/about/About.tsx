import { Button } from "@/components/ui/button";
import { UserContext } from "@/useContex/context/UserContex";
import { use } from "react";
import { Link } from "react-router";

export const AboutPage = () => {
  const { isAuth, logout } = use(UserContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Sobre mí</h1>

      <hr className="my-4 w-full max-w-md" />

      <hr />

      {/* perfile if is logged in */}
      {isAuth && (
        <div className="flex flex-col gap-2">
          <Link
            to="/profile"
            className="text-2xl underline hover:text-blue-500"
          >
            Perfil
          </Link>
        </div>
      )}

      {/* login status show logout button */}
      {isAuth ? (
        <Button variant="destructive" className="mt-4" onClick={logout}>
          Cerrar sesión
        </Button>
      ) : null}

      <Link to="/login" className="text-2xl underline hover:text-blue-500">
        Iniciar sesión
      </Link>
    </div>
  );
};
