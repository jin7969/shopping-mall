import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { BiShoppingBag } from "react-icons/bi";

function Navbar() {
  return (
    <header>
      <Link to={ROUTES.HOME}>Ahns Shop</Link>
      <nav>
        <Link to={ROUTES.PRODUCTS}>Products</Link>
        <Link to={ROUTES.PRODUCT_DETAIL}></Link>
        <Link to={ROUTES.MY_CART}>
          <BiShoppingBag />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
