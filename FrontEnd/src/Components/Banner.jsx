import BannerImage from "../assets/Images/banner_image.jpg";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="relative h-[60vh] bg-center bg-cover"
      style={{
        backgroundImage: `url('${BannerImage}')`,
      }}
    >
      <div className="relative  text-left z-10 flex flex-col items-start justify-center h-full px-4 text-white ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find a home you'll love
        </h1>
        <p className="mb-6 text-lg text-white-800">
          Search millions of listings across the country
        </p>

        <form className="w-full max-w-xl flex shadow-lg">
          <input
            type="text"
            placeholder="Enter an address, city, or ZIP code"
            className="flex-grow px-4 py-3 rounded-l-md text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 font-semibold border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-100 transition"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
