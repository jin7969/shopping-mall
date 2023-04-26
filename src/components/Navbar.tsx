import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { FiShoppingBag } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b py-4">
      <Link
        to={ROUTES.HOME}
        className="flex items-center text-2xl text-brand font-medium"
      >
        <FiShoppingBag className="mr-1" />
        <h1>Ahns</h1>
      </Link>
      <nav className="flex items-center gap-5 font-medium">
        <Link to={ROUTES.PRODUCTS}>Products</Link>
        {user ? (
          <>
            {user.isAdmin && <Link to={ROUTES.NEW_PRODUCT}>Create</Link>}
            <Link to={ROUTES.MY_CART}>
              <BiShoppingBag size="22" />
            </Link>
            <img
              src={user.photoURL ? user.photoURL : ""}
              alt="프로필 이미지"
              className="w-7 h-7 rounded-full"
            />
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
