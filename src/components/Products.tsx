import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";
import { ProductData } from "../types";

function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery<ProductData[]>(["products"], getProducts);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <ul>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ul>
  );
}

export default Products;
