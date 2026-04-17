import { createContext, useState, useContext } from "react";
import AuthService from "../services/AuthService";

//conteneur global accessible  depuis n'import ou
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  //si user connecte, reste connecte apré un refrech
  const [user, setUser] = useState(AuthService.getUser());

  const login = async (login, mdp) => {
    const data = await AuthService.login(login, mdp);
    setUser(data.user);

    return data;
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isConnected: !!user,
    isAdmin: user?.role === "ADMIN",
  };

  //values accessibles aux enfans
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

//hook personalisé pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);
