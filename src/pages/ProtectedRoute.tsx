import { useAuthContext } from "../context/AuthContext";
import NotFound from "./NotFound";

interface ProtectedRoutesProps {
  children: JSX.Element;
  requireAdmin?: boolean;
  description: string;
}

function ProtectedRoute({
  children,
  requireAdmin,
  description,
}: ProtectedRoutesProps) {
  const { loading, user } = useAuthContext();

  if (loading) {
    return <p>loading...</p>;
  }

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <NotFound description={description} />;
  }
  return children;
}

export default ProtectedRoute;
