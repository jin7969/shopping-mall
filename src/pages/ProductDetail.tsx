import { useState } from "react";
import { useLocation } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import { useAuthContext } from "../context/AuthContext";
import { ProductData } from "../types";
import { useSnackbarContext } from "../context/SnackbarContext";

interface LocationStateValue {
  state: {
    product: ProductData;
  };
}

function ProductDetail() {
  const { user } = useAuthContext();
  const {
    state: {
      product: { id, image, title, price, description, options },
    },
  } = useLocation() as LocationStateValue;
  const [selected, setSelected] = useState<string>(options && options[0]);
  const { updateCart } = useCarts();
  const { showSnackbar } = useSnackbarContext();

  const handlePurchaseButton = () => {
    if (!user) return showSnackbar("로그인 후 이용가능 합니다.");

    const product = {
      id,
      image,
      title,
      price,
      option: selected,
      quantity: 1,
      checked: true,
    };
    updateCart.mutate(product);
    showSnackbar("장바구니에 추가 되었습니다.");
  };

  return (
    <section className="p-3">
      <img src={image} alt="상품 이미지" className="w-full h-[650px]" />
      <div className="p-3">
        <div className="mb-3 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm">{description}</span>
          <p className="py-3 font-bold">{`${price.toLocaleString()}원`}</p>
        </div>
        <div>
          <label htmlFor="select">옵션</label>
          <select
            id="select"
            className="w-full my-3 p-2 border outline-none"
            onChange={(e) => setSelected(e.target.value)}
          >
            {options &&
              options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>
        <button
          className="w-full py-3 rounded-lg bg-brand text-white text-lg font-extrabold hover:bg-rose-300"
          onClick={handlePurchaseButton}
        >
          장바구니 담기
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
