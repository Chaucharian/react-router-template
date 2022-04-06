import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "./hooks/useSession";

const AuthContext = createContext<any>({ auth: false, setAuth: undefined });

export const AuthProvider = ({ children }: any) => {
  const { session, saveSession, removeSession } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/dashboard", { replace: true });
    }
    // only if session changes execute this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <AuthContext.Provider value={{ session, saveSession, removeSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
