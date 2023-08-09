import { createContext, useState } from "react";

type User = {
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

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
