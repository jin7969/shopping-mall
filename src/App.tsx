import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/AuthContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SnackbarProvider>
          <ScrollToTop />
          <Navbar />
          <Outlet />
          <Footer />
        </SnackbarProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
