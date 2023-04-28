import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { ROUTES } from "../constants";

interface ProtectedRoutesProps {
  children: JSX.Element;
  requireAdmin?: boolean;
}

function ProtectedRoute({ children, requireAdmin }: ProtectedRoutesProps) {
  const { loading, user } = useAuthContext();

  if (loading) {
    return <p>loading...</p>;
  }

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  return children;
}

export default ProtectedRoute;
