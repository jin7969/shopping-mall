import AuthLogin from "../components/AuthLogin";
import { useAuthContext } from "../context/AuthContext";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";
import MyPageItem from "../components/MyPageItem";

function MyPage() {
  const { user, login, logout } = useAuthContext();

  if (!user) {
    return <AuthLogin login={login} />;
  }

  return (
    <section className="flex flex-col items-center">
      <h1 className="py-3 text-xl font-bold">마이페이지</h1>
      <h2 className="mt-3 text-lg font-semibold">{user.displayName}</h2>
      <p className="text-sm">{user.email}</p>
      <button
        className="my-3 bg-brand text-white px-5 py-2 font-bold rounded-md transition-all hover:bg-rose-300 "
        onClick={logout}
      >
        로그아웃
      </button>
      <div className="w-full">
        <MyPageItem text="주문 배송">
          <MdOutlineLocalShipping size={26} />
        </MyPageItem>
        <MyPageItem text="쿠폰">
          <RiCoupon2Line size={26} />
        </MyPageItem>
        <MyPageItem text="포인트">
          <BiCoinStack size={26} />
        </MyPageItem>
      </div>
    </section>
  );
}

export default MyPage;
