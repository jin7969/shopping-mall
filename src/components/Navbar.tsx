import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { FiShoppingBag } from "react-icons/fi";
import { BiShoppingBag, BiMessageSquareAdd } from "react-icons/bi";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuthContext();

  return (
    <header className="flex justify-between border-b p-3">
      <Link
        to={ROUTES.HOME}
        className="flex items-center text-xl text-brand font-semibold"
      >
        <FiShoppingBag className="mr-1" />
        <h1>Ahns</h1>
      </Link>
      <nav className="flex items-center gap-5 font-medium">
        {user?.isAdmin && (
          <Link to={ROUTES.NEW_PRODUCT}>
            <BiMessageSquareAdd size="24" />
          </Link>
        )}
        <Link to={ROUTES.MY_CART}>
          <BiShoppingBag size="24" />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
