import { useLocation } from "react-router-dom";
import { ProductData } from "../types";

interface LocationState {
  state: {
    product: ProductData;
  };
}

function ProductDetail() {
  const {
    state: {
      product: { image, title, price, description, options },
    },
  } = useLocation() as LocationState;

  console.log(options);

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
          <select id="select" className="w-full my-3 p-2 border outline-none">
            {options &&
              options.map((option, index) => (
                <option key={index} value="">
                  {option}
                </option>
              ))}
          </select>
        </div>
        <button className="w-full py-3 rounded-lg bg-brand text-white text-lg font-extrabold hover:bg-rose-300 ">
          구매하기
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;
