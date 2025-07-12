import { useState, useEffect, useRef } from "react";
import { FaRegUser, FaChevronDown } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Alerts from "./Alerts";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFavourites, setShowFavourites] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userEmail = userInfo?.email;
  const isAdmin = userInfo?.isAdmin;

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleFavourites = () => setShowFavourites((prev) => !prev);

  const handleLogout = () => {
    setShowConfirm(true);
  };
  const handleConfirmLogout = () => {
    localStorage.removeItem("userInfo");
    setShowConfirm(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowFavourites(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-700 shadow-md hover:shadow-lg transition border border-blue-300 cursor-pointer"
      >
        <FaRegUser size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 animate-fade-in overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 rounded-t-xl">
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="text-sm font-semibold text-gray-800 truncate">
              {userEmail}
            </p>
          </div>
          <button
            onClick={toggleFavourites}
            className="flex justify-between items-center w-full px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <span>Favourites</span>
            <FaChevronDown
              className={`transition-transform duration-200 ${
                showFavourites ? "rotate-180" : ""
              }`}
            />
          </button>
          {showFavourites && (
            <div className="px-6 pb-3 pt-1 space-y-2 text-sm text-gray-600 bg-white">
              <p>❤️ Apartment in Dubai</p>
              <p>🏡 Villa in Abu Dhabi</p>
              <p>🏢 Office in Sharjah</p>
            </div>
          )}
          <span className={`${!isAdmin ? "hidden" : ""}`}>
            <button className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 transition cursor-pointer">
              <Link to="/admin">Admin Dashboard </Link>
            </button>
          </span>
          <div className="border-t border-gray-100" />
          <button
            onClick={handleLogout}
            className="w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}

      {showConfirm && (
        <Alerts
          message="Are you sure you want to log out?"
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleConfirmLogout}
        />
      )}
    </div>
  );
};

export default UserDropdown;
