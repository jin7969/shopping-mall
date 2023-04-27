import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserInfo } from "../types";
import { login, logout, onUserStateChange } from "../api/firebase";
import { User } from "firebase/auth";

interface AuthContextValue {
  user: UserInfo;
  uid: string;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  user: {} as User,
  uid: "",
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, uid: user?.uid, login, logout } as AuthContextValue}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
