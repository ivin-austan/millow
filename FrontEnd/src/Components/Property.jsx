const Property = () => {
  return (
    <div className="p-5 ">
      <div className=" max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src="https://res.cloudinary.com/dxhpxvyih/image/upload/v1752328026/aeuvjxttjkzr0jjdzxmr.jpg"
          alt="Property"
        />
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Luxury Apartment
            </h2>
            <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-lg font-medium">
              ⭐ 4.7
            </span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-3">
            A beautiful 2-bedroom apartment with stunning city views, modern
            amenities, and 24/7 security in the heart of downtown.
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-green-600">$1,200/mo</span>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
