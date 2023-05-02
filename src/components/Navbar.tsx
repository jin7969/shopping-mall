import { Link, useLocation } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { ROUTES } from "../constants";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

function Navbar() {
  const location = useLocation();
  const { user } = useAuthContext();
  const isHome = location.pathname === ROUTES.HOME;

  return (
    <header className="flex flex-col">
      {isHome && (
        <div className="flex justify-center items-center p-3 bg-brand text-white">
          <FiShoppingBag size="30" />
          <p className="ml-3 font-bold">쇼핑몰에 오신걸 환영합니다</p>
        </div>
      )}
      <div className="flex justify-between border-b p-3">
        <Link
          to={ROUTES.HOME}
          className="flex items-center text-xl text-brand font-semibold"
        >
          <h1>AHNs</h1>
        </Link>
        <nav className="flex items-center gap-5 font-medium">
          {user?.isAdmin && (
            <Link to={ROUTES.NEW_PRODUCT}>
              <BiMessageSquareAdd size="24" />
            </Link>
          )}
          <Link to={ROUTES.MY_CART}>
            <CartStatus />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
