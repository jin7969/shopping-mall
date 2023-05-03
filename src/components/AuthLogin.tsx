import { FcGoogle } from "react-icons/fc";

function AuthLogin({ login }: { login: () => void }) {
  return (
    <div className="h-96 flex justify-center items-center flex-col">
      <h1 className="mb-4 text-xl">로그인이 필요합니다.</h1>
      <button
        className="items-center bg-gray-200 w-80 py-3 rounded-3xl text-lg font-semibold"
        onClick={login}
      >
        <FcGoogle className="inline mr-4" />
        google 로그인
      </button>
    </div>
  );
}

export default AuthLogin;
