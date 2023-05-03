import { AiOutlineRight } from "react-icons/ai";

function MyPageItem({ children, text }: any) {
  return (
    <div className="flex justify-between p-4 border-b cursor-pointer">
      <div className="flex text-zinc-600">
        {children}
        <p className="ml-3 font-semibold">{text}</p>
      </div>
      <AiOutlineRight />
    </div>
  );
}

export default MyPageItem;
