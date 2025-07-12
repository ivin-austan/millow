import { Link } from "react-router-dom";

const ActionCards = () => {
  const options = [
    {
      title: "Buy a home",
      description:
        "Find your place with an immersive photo experience and the most listings.",
      buttonText: "Browse homes",
      bg: "bg-blue-50",
    },
    {
      title: "Rent a home",
      description:
        "We're creating a seamless online experience – from shopping to applying to paying rent.",
      buttonText: "Find rentals",
      bg: "bg-green-50",
    },
    {
      title: "Sell a home",
      description:
        "No matter what path you take to sell your home, we can help you navigate a successful sale.",
      buttonText: "See your options",
      bg: "bg-yellow-50",
    },
  ];

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
              <Link to="/realestate">{option.buttonText}</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionCards;
