import { ProductData } from "../types";

function ProductCard({
  product: { id, image, title, category, price },
}: {
  product: ProductData;
}) {
  return (
    <li className="rounded-lg overflow-hidden">
      <img src={image} alt="상품 이미지" />
      <h3 className="font-semibold">{`${price.toLocaleString()}원`}</h3>
      <p className="text-zinc-700 text-xs truncate">{title}</p>
      <span className="text-zinc-500 text-xs">{category}</span>
    </li>
  );
}

export default ProductCard;
