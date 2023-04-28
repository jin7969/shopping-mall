import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { UserInfo } from "../types";
import { adminUser, auth, login, logout } from "../api/firebase";

interface AuthContextValue {
  loading: boolean;
  user: UserInfo;
  uid: string;
  login: () => void;
  logout: () => void;
}

interface AuthState {
  user: UserInfo | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  loading: true,
  user: {} as User,
  uid: "",
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
  });
  const user = authState.user;
  const loading = authState.loading;

  useEffect(() => {
    const stopListen = onAuthStateChanged(auth, (user) => {
      if (user) {
        adminUser(user).then((user) => setAuthState({ user, loading: false }));
      } else {
        setAuthState({ user: null, loading: false });
      }
    });
    return () => stopListen();
  }, []);

  return (
    <AuthContext.Provider
      value={
        { loading, user, uid: user?.uid, login, logout } as AuthContextValue
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
