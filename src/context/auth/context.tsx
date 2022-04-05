import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>({ auth: false, setAuth: undefined });

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
