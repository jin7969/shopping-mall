import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserInfo } from "../typings";
import { login, logout, onUserStateChange } from "../api/firebase";

interface AuthContextValue {
  user: UserInfo | null | undefined;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
