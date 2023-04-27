import { useLocation } from "react-router-dom";
import { ProductData } from "../types";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { addOrUpdateToCart } from "../api/firebase";

interface LocationState {
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
  } = useLocation() as LocationState;
  const [selected, setSelected] = useState<string>(options && options[0]);

  const handlePurchaseButton = () => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    user && addOrUpdateToCart(user.uid, product);
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
