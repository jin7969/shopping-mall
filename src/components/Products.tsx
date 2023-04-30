import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

function Products({ title }: { title: string }) {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <section>
      <h1 className="text-lg font-bold px-4">{title}</h1>
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
