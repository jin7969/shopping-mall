import CartItem from "../components/CartItem";
import NotFound from "./NotFound";
import CartPrice from "../components/CartPrice";
import useCarts from "../hooks/useCarts";
import { useSnackbarContext } from "../context/SnackbarContext";

function MyCart() {
  const {
    cartsQuery: { isLoading, data: products },
  } = useCarts();
  const { showSnackbar } = useSnackbarContext();

  if (isLoading) return <p>Loading...</p>;

  if (products?.length === 0) {
    return <NotFound description="장바구니가 비어있어요" />;
  }
  const totalPrice = products?.reduce(
    (prev, current) =>
      current.checked ? prev + current.price * current.quantity : prev,
    0
  );

  return (
    <section className="flex flex-col items-center">
      <h1 className="py-3 text-xl font-bold">장바구니</h1>
      <ul className="flex flex-col w-full gap-3">
        {products?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="w-full p-4 border-t-4">
        <CartPrice
          title="총 상품금액"
          text={`${totalPrice?.toLocaleString()}원`}
        />
        <CartPrice title="배송비" text="모든 상품 무료배송" />
      </div>
      <button
        disabled={totalPrice === 0}
        className="w-full my-1 py-3 bg-brand text-white font-bold text-lg rounded-lg hover:bg-rose-300 disabled:bg-zinc-200"
        onClick={() => showSnackbar("구매는 불가합니다.")}
      >
        구매하기
      </button>
    </section>
  );
}

export default MyCart;
