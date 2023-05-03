import AuthLogin from "../components/AuthLogin";
import { useAuthContext } from "../context/AuthContext";

function MyPage() {
  const { user, login, logout } = useAuthContext();

  if (!user) {
    return <AuthLogin login={login} />;
  }

  return (
    <div>
      <div>마이페이지</div>
      <button
        className="bg-brand text-white p-2 font-semibold"
        onClick={logout}
      >
        logout
      </button>
    </div>
  );
}

export default MyPage;
