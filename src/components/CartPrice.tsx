interface CartPriceProps {
  title: string;
  text: string;
}

function CartPrice({ title, text }: CartPriceProps) {
  return (
    <div className="flex justify-between my-2">
      <p className="text-gray-600">{title}</p>
      <p className="font-bold">{text}</p>
    </div>
  );
}

export default CartPrice;
