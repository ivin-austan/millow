import { Link } from "react-router-dom";
import options from "../assets/realestatetypes.json";

const ActionCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${option.bg}`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {option.title}
            </h3>
            <p className="text-gray-600 mb-6">{option.description}</p>
            <button className="bg-white bg-opacity-40 text-blue-600 border border-blue-500 px-4 py-2 rounded-2xl hover:bg-opacity-60 transition cursor-pointer font-bold ">
              <Link to={`/realestate?type=${option.type}`}>
                {option.buttonText}
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionCards;
