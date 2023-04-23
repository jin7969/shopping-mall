import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";
import { ROUTES } from "../constants";
import { FiShoppingBag } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { login, logout, onUserStateChange } from "../api/firebase";

function Navbar() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="flex justify-between border-b px-6 py-4">
      <Link
        to={ROUTES.HOME}
        className="flex items-center text-3xl text-brand font-medium"
      >
        <FiShoppingBag className="mr-1" />
        <h1 className="hidden md:block">Ahns Shop</h1>
      </Link>
      <nav className="flex items-center gap-5 font-medium">
        <Link to={ROUTES.PRODUCTS}>Products</Link>
        <Link to={ROUTES.NEW_PRODUCT}>Create</Link>
        <Link to={ROUTES.MY_CART}>
          <BiShoppingBag size="22" />
        </Link>
        {user ? (
          <>
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
