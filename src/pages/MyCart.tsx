import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";
import CartItem from "../components/CartItem";

function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  if (products && products.length === 0) {
    return (
      <section>
        <p>장바구니가 비어있어요</p>
        <button>상품 보러가기</button>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="py-3 text-xl font-bold">장바구니</h1>
      <ul className="flex flex-col w-full gap-3">
        {products?.map((product) => (
          <CartItem key={product.id} product={product} uid={uid} />
        ))}
      </ul>
    </section>
  );
}

export default MyCart;
