import { useNavigate } from "react-router-dom";
import { ProductData } from "../types";
import { ROUTES } from "../constants";

function ProductCard({ product }: { product: ProductData }) {
  const navigate = useNavigate();

  const { id, image, title, category, price } = product;

  return (
    <li
      className="cursor-pointer"
      onClick={() =>
        navigate(`${ROUTES.PRODUCTS}/${id}`, { state: { product } })
      }
    >
      <img src={image} alt="상품 이미지" className="h-64 rounded-md" />
      <h3 className="font-semibold">{`${price.toLocaleString()}원`}</h3>
      <p className="text-zinc-700 text-xs truncate">{title}</p>
      <span className="text-zinc-500 text-xs">{category}</span>
    </li>
  );
}

export default ProductCard;
