import { useQuery } from "@tanstack/react-query";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCart } from "../api/firebase";

function CartStatus({ uid }: { uid: string }) {
  const { data: products } = useQuery(["carts"], () => getCart(uid));

  return (
    <div className="relative">
      <AiOutlineShoppingCart size="24" />
      {products && (
        <p className="absolute w-5 h-5 text-center bg-brand text-white font-bold rounded-full  -top-2 -right-2 text-sm">
          {products.length}
        </p>
      )}
    </div>
  );
}

export default CartStatus;
