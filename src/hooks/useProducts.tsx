import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, addNewProduct } from "../api/firebase";
import { NewProductData } from "../types";

interface NewProductValue {
  product: NewProductData;
  url: string;
}

export const useProducts = () => {
  const queryClient = useQueryClient();
  const productsQuery = useQuery(["products"], getProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }: NewProductValue) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { productsQuery, addProduct };
};
