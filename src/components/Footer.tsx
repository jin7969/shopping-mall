import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { ROUTES } from "../constants";

const footerMenu = [
  { id: "1", link: ROUTES.HOME, name: "홈", icon: <AiOutlineHome /> },
  { id: "2", link: ROUTES.PRODUCTS, name: "전체보기", icon: <AiOutlineMenu /> },
  { id: "3", link: ROUTES.HOME, name: "검색", icon: <AiOutlineSearch /> },
  {
    id: "4",
    link: ROUTES.MY_PAGE,
    name: "마이페이지",
    icon: <AiOutlineUser />,
  },
];

function Footer() {
  return (
    <footer className="w-[42rem] fixed left-50% bottom-0">
      <ul className="flex justify-around py-1 bg-gray-50 text-gray-500 text-2xl">
        {footerMenu.map((menu) => (
          <Link
            key={menu.id}
            to={menu.link}
            className="flex flex-col items-center"
          >
            {menu.icon}
            <span className="text-sm">{menu.name}</span>
          </Link>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
