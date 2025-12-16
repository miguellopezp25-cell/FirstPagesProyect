import { Link } from "react-router";

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Sobre mí</h1>

      <hr className="my-4 w-full max-w-md" />

      <div className="flex flex-col gap-2">
        <Link to="/profile" className="text-2xl underline hover:text-blue-500">
          Perfil
        </Link>

        <hr />

        <Link to="/login" className="text-2xl underline hover:text-blue-500">
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
};
