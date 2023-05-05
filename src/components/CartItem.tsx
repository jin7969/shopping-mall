import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartProductData } from "../types";
import useCarts from "../hooks/useCarts";

function CartItem({
  product,
  product: { id, image, title, option, quantity, price, checked },
}: {
  product: CartProductData;
}) {
  const { updateCart, removeCart } = useCarts();

  const handleMinusQuantity = () => {
    if (quantity === 1) return;
    updateCart.mutate({ ...product, quantity: quantity - 1 });
  };

  const handlePlusQuantity = () =>
    updateCart.mutate({ ...product, quantity: quantity + 1 });

  const handleDeleteCartItem = () => {
    if (window.confirm("장바구니에서 제거하시겠습니까?")) {
      removeCart.mutate(id);
    }
  };

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCart.mutate({ ...product, checked: e.target.checked });
  };

  return (
    <li className="flex p-2 bg-gray-50">
      <input
        type="checkbox"
        className="w-5 accent-brand"
        checked={checked}
        onChange={handleChangeCheckbox}
      />
      <img src={image} alt="상품 이미지" className="w-28 h-28 ml-4" />
      <div className="flex-1 p-3">
        <p>{title}</p>
        <p>{option}</p>
      </div>
      <div className="p-2">
        <AiOutlineDelete
          size={28}
          className="ml-auto mb-2 p-1 bg-gray-200 rounded-full"
          onClick={handleDeleteCartItem}
        />
        <div className="flex items-center">
          <AiOutlineMinus size={20} onClick={handleMinusQuantity} />
          <span className="px-3 text-lg">{quantity}</span>
          <AiOutlinePlus size={20} onClick={handlePlusQuantity} />
        </div>
        <p className="pt-2 text-lg font-semibold">{`${price.toLocaleString()}원`}</p>
      </div>
    </li>
  );
}

export default CartItem;
