const Property = ({ properties, type }) => {
  const propertyList = Array.isArray(properties) ? properties : [];
  console.log(propertyList);

  const relevantProperties = propertyList.filter(
    (property) => property.type?.toLowerCase() === type?.toLowerCase()
  );

  return (
    <div className="px-6 py-10 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {relevantProperties.length > 0
          ? relevantProperties.map((property) => (
              <div
                key={property._id}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow bg-white border border-gray-100"
              >
                <img
                  className="w-full h-56 object-cover"
                  src={property.image}
                  alt="Property"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {property.name}
                    </h2>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                      ⭐ 4.7
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {property.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">
                      {property.amount}
                    </span>
                    <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          : ` No properties found for ${type}`}
      </div>
    </div>
  );
};

export default Property;
