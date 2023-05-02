import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { CartProductData } from "../types";

const useCarts = () => {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartsQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const updateCart = useMutation(
    (product: CartProductData) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  const removeCart = useMutation(
    (productId: string) => removeFromCart(uid, productId),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  return { cartsQuery, updateCart, removeCart };
};

export default useCarts;
