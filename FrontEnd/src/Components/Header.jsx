import { Link } from "react-router-dom";
import millowlogo from "../assets/Images/millow_logo.jpg";
import UserDropdown from "./UserDropdown";
import options from "../assets/realestatetypes.json";

const Header = () => {
  const userInfo = localStorage.getItem("userInfo");
  const userInfoParsed = JSON.parse(userInfo);
  const userEmail = userInfoParsed?.email;

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={millowlogo} alt="Zillow" className="h-10 w-auto " />
              <h1 className="text-indigo-900 font-semibold text-2xl">
                {" "}
                <Link to="/">Millow</Link>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8 text-md font-medium text-gray-700">
              {options.map((option) => (
                <Link key={option._id} to={`/realestate?type=${option.type}`}>
                  {option.type}
                </Link>
              ))}
            </nav>
            <div
              className={`flex items-center space-x-4 ${userEmail ? "hidden" : ""}`}
            >
              <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition">
                <Link to="/login" id="login">
                  Sign In
                </Link>
              </button>
              <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                <Link to="/login?register=true">Join</Link>
              </button>
              <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {userEmail && <UserDropdown />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
