import { useAuthContext } from "../context/AuthContext";
import NotFound from "./NotFound";

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
    return <NotFound description="해당 페이지에 접근할 수 없습니다." />;
  }
  return children;
}

export default ProtectedRoute;
