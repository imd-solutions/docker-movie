import { createContext, useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  votes: any;
};

export type UserContextType = {
  user: User;
  setUser: any;
};
export const UserContext = createContext<UserContextType>();

type UserContextProviderType = {
  children: any;
};

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      let authUser = JSON.parse(localStorage.getItem("authUser") || "{}");
      setUser(authUser.user);
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
