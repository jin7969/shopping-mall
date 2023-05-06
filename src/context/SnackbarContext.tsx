import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Snackbar from "../components/Snackbar";

interface SnackbarContextType {
  showSnackbar: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextType>({
  showSnackbar: () => {},
});

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbarInfo, setSnackbarInfo] = useState("");

  const showSnackbar = (message: string) => {
    setSnackbarInfo(message);
  };

  useEffect(() => {
    const snackbarTimer = setTimeout(() => {
      setSnackbarInfo("");
    }, 2000);

    return () => clearTimeout(snackbarTimer);
  }, [snackbarInfo]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbarInfo && <Snackbar key={Date.now()} message={snackbarInfo} />}
    </SnackbarContext.Provider>
  );
};

const useSnackbarContext = () => useContext(SnackbarContext);

export { SnackbarProvider, useSnackbarContext };
