import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { FiShoppingBag } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

function Navbar() {
  return (
    <header className="flex justify-between border-b px-6 py-4">
      <Link
        to={ROUTES.HOME}
        className="flex items-center text-3xl text-brand font-medium"
      >
        <FiShoppingBag className="mr-1" />
        <h1>Ahns Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-medium">
        <Link to={ROUTES.PRODUCTS}>Products</Link>
        <Link to={ROUTES.NEW_PRODUCT}>Create</Link>
        <Link to={ROUTES.MY_CART}>
          <BiShoppingBag size="22" />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
