import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

import { users, type User } from "../data/userData";

type AuthStatus = "checking" | "Auth" | "no-Auth";

interface UserContexProps {
  //state of user
  auth: AuthStatus;
  isAuth: boolean;
  user: User | null;

  //metods
  loging: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContexProps);

export const UserContexProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const loging = (userId: number) => {
    const user = users.find((u) => u.id === userId);

    if (!user) {
      setUser(null);
      setAuthStatus("no-Auth");
      return false;
    }

    setUser(user);
    setAuthStatus("Auth");
    localStorage.setItem("userId", userId.toString());
    return true;
  };

  const logout = () => {
    setAuthStatus("no-Auth");
    setUser(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const storeUserId = localStorage.getItem("userId");
    if (storeUserId) {
      loging(+storeUserId);
    } else {
      setAuthStatus("no-Auth");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        auth: authStatus,
        isAuth: authStatus === "Auth",
        user,
        loging,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
