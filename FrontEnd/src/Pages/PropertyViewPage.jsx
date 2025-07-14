import React from "react";
import { useLocation } from "react-router-dom";
import features from "../assets/features.json";
const PropertyViewPage = () => {
  const location = useLocation();
  const property = location.state?.property;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden ">
        <img
          src={property.image}
          alt="Property"
          className="w-full max-h-[300px] object-contain rounded-xl"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {property.name}
          </h2>
          <p className="text-xl text-green-600 font-semibold mb-4">
            {property.price}
          </p>

          <p className="text-gray-700 mb-4">{property.desc}</p>

          <h3 className="text-lg font-semibold mb-2">Features</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition mt-6 cursor-pointer">
            Contact Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyViewPage;
