import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";
import NotFound from "./NotFound";
import CartPrice from "../components/CartPrice";

function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + current.price * current.quantity,
      0
    );

  if (products && products.length === 0) {
    return <NotFound description="장바구니가 비어있어요" />;
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="py-3 text-xl font-bold">장바구니</h1>
      <ul className="flex flex-col w-full gap-3">
        {products?.map((product) => (
          <CartItem key={product.id} product={product} uid={uid} />
        ))}
      </ul>
      <div className="w-full p-4 border-t-4">
        <CartPrice
          title="총 상품금액"
          text={`${totalPrice?.toLocaleString()}원`}
        />
        <CartPrice title="배송비" text="모든 상품 무료배송" />
      </div>
      <button className="w-full my-1 py-3 bg-brand text-white font-bold text-lg rounded-lg hover:bg-rose-300">
        구매하기
      </button>
    </section>
  );
}

export default MyCart;
