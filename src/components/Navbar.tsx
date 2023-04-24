import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";
import { ROUTES } from "../constants";
import { FiShoppingBag } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { login, logout, onUserStateChange } from "../api/firebase";

interface UserInfo extends User {
  isAdmin?: boolean;
}

function Navbar() {
  const [user, setUser] = useState<UserInfo | null>();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between border-b px-9 py-4">
      <Link
        to={ROUTES.HOME}
        className="flex items-center text-3xl text-brand font-medium"
      >
        <FiShoppingBag className="mr-1" />
        <h1 className="hidden md:block">Ahns Shop</h1>
      </Link>
      <nav className="flex items-center gap-6 font-medium">
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
