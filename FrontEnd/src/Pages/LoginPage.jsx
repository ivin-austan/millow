import loginimage from "../assets/Images/login_page_wall.jpg";
import Login from "../Components/Login";
import { useSearchParams } from "react-router-dom";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const showRegister = searchParams.get("register") === "true";
  return (
    <div className="flex h-screen">
      <div className="w-3/5 h-full">
        <img
          src={loginimage}
          alt="Login"
          className="hidden md:block object-cover w-full h-full"
        />
      </div>
      <div className="w-2/5 flex items-center justify-center">
        <Login newUser={showRegister} />
      </div>
    </div>
  );
};

export default LoginPage;
