import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { UserContext } from "../../context/UserContex";

export const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const { loging } = useContext(UserContext);
  const navigation = useNavigate();

  const handleSumit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = loging(+userId);
    console.log(result);
    localStorage.setItem(`userId`, userId.toString());

    navigation(`/profile`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold"> Iniciar Sesion</h1>
      <hr />

      <form className="flex flex-col gap-2 my-10" onSubmit={handleSumit}>
        <Input
          type="number"
          placeholder="Id de usuario "
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>

      <Link to="/about">
        <Button variant={"ghost"}>Volver Principal</Button>
      </Link>
    </div>
  );
};
