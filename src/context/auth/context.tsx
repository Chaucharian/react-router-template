import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "./hooks/useSession";

const AuthContext = createContext<any>({ auth: false, setAuth: undefined });

export const AuthProvider = ({ children }: any) => {
  //   const [auth, setAuth] = useState(false);
  const { session, saveSession, removeSession } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/dashboard", { replace: true });
    }
  }, [session, navigate]);

  return (
    <AuthContext.Provider value={{ session, saveSession, removeSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
