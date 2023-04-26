import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";
import { ProductData } from "../types";

function Products({ title }: { title: string }) {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery<ProductData[]>(["products"], getProducts);

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <section>
      <h1>{title}</h1>
      <ul className="grid grid-cols-3 gap-3 p-3">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </section>
  );
}

export default Products;
