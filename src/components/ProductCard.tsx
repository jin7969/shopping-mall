import { ProductData } from "../types";

function ProductCard({
  product: { id, image, title, category, price },
}: {
  product: ProductData;
}) {
  return <div>{title}</div>;
}

export default ProductCard;
