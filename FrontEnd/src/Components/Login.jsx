import { Link, useNavigate } from "react-router-dom";
import millowlogo from "../assets/Images/millow_logo.jpg";
import { useState } from "react";
import { REACT_SERVER_URL } from "../../config/ENV";
import axios from "axios";

const Login = ({ newUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [newreg, setNewReg] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newUser) {
      try {
        const config = {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        };
        const { data } = await axios.post(
          `${REACT_SERVER_URL}/users/login`,
          {
            email,
            password,
          },
          config
        );
        localStorage.setItem("userInfo", JSON.stringify(data));
        setErrormessage("");
        setShowToast(true);

        // Wait for toast to show, then navigate
        setTimeout(() => {
          setShowToast(false);
          navigate("/");
        }, 500);
      } catch (error) {
        let message = error?.response?.data?.message;
        setErrormessage(message ? message : error.message);
      }
    } else {
      try {
        const config = {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        };
        const { data } = await axios.post(
          `${REACT_SERVER_URL}/users/register`,
          {
            email,
            password,
          },
          config
        );
        setNewReg(true);
        setErrormessage("");
        setShowToast(true);
        navigate("/login");
      } catch (error) {
        let message = error?.response?.data?.message;
        setErrormessage(message ? message : error.message);
      }
    }
  };
  return (
    <div>
      {!errormessage && !newreg && showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-all duration-300 animate-slide-in">
          ✅ Successfully logged in!
        </div>
      )}
      {!errormessage && showToast && newreg && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-all duration-300 animate-slide-in">
          ✅ Successfully created your account!
        </div>
      )}
      {errormessage && (
        <div className="fixed top-5 left-1/2 bg-red-500 text-white px-6 py-3 rounded shadow-lg flex items-center gap-3 transition-all duration-300 animate-slide-in">
          ✖️
          {errormessage}
        </div>
      )}
      <div className="flex items-center mb-3 p-2">
        <img src={millowlogo} alt="Zillow" className="h-20 w-auto" />
        <h1 className="text-indigo-900 font-semibold text-4xl ">Millow</h1>
      </div>

      <div className=" flex items-center justify-center px-4">
        <div className="w-[400px] max-w-2xl bg-white p-10 rounded-2xl shadow-lg">
          <h2
            className={`font-semibold text-gray-900 mb-8 text-left ${
              newUser ? "text-2xl" : "text-3xl"
            }`}
          >
            {newUser ? "Create Account" : "Sign in"}
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                         placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address*"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                         placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label
                  htmlFor="remember_me"
                  className="ml-2 p-1.5 block text-sm text-gray-900"
                >
                  {newUser ? "Have a Zillow account?" : "New to zillow?"}
                </label>
              </div>

              <div className="text-sm">
                <div className="font-medium text-indigo-600 hover:text-indigo-500">
                  {newUser ? (
                    <Link to="/login" id="home">
                      {" "}
                      Sign in
                    </Link>
                  ) : (
                    <Link to="/login?register=true" id="home">
                      {" "}
                      Create your account
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent
                         rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
              >
                {newUser ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
