import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

function NotFound({ description }: { description: string }) {
  return (
    <div className="flex justify-center items-center flex-col h-96">
      <h1 className="my-4 text-xl font-semibold">{description}</h1>
      <Link
        to={ROUTES.HOME}
        className="px-7 py-2 bg-brand text-lg text-white font-bold rounded-lg"
      >
        홈페이지
      </Link>
    </div>
  );
}

export default NotFound;
