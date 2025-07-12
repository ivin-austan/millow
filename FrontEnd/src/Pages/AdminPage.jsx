import { useState } from "react";
import millowlogo from "../assets/Images/banner_image.jpg";
import { CLOUDINARY_CLOUD_NAME, REACT_SERVER_URL } from "../../config/ENV";
import axios from "axios";

export default function AdminWithImageBg() {
  const [isOpen, setIsOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const [image, setImage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errormessage, setErromessage] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };
      await axios.post(
        `${REACT_SERVER_URL}/properties/addproperty`,
        { name, type, amount, desc, image },
        config
      );
      setErromessage("");
      setIsOpen(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    } catch (error) {
      let message = error?.response?.data?.message;
      setShowToast(true);
      setErromessage(message ? message : error.message);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "Techno_computers");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          setImage(imageUrl);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <>
      {!errormessage && showToast && (
        <div className="fixed  left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-all duration-300 animate-slide-in">
          ✅ Successfully Added the property!
        </div>
      )}
      {errormessage && showToast && (
        <div className="fixed  left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded shadow-lg transition-all duration-300 animate-slide-in z-50">
          ✖️ {errormessage}
        </div>
      )}
      <div className="relative min-h-screen flex flex-col items-center justify-baseline font-sans p-4">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage: `url(${millowlogo})`,
            zIndex: -2,
          }}
        />
        <div className="fixed top-20 left-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-12 py-12 bg-indigo-600 hover:bg-indigo-700 transition rounded-md shadow-md font-semibold text-white cursor-pointer"
          >
            {isOpen ? "Cancel" : "Add New Property"}
          </button>
        </div>

        {isOpen && (
          <div className="fixed w-full max-w-xl bg-white rounded-lg shadow-lg border border-gray-300 p-8 z-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex justify-between items-center">
              Add New Item
              <button
                className="text-gray-500 hover:text-red-600 text-xl font-bold"
                onClick={() => setIsOpen(!isOpen)}
              >
                &times;
              </button>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="propertyTitle"
                >
                  Property Name
                </label>
                <input
                  id="propertyTitle"
                  type="text"
                  placeholder="Enter property title"
                  className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="propertyTitle"
                >
                  Property Description
                </label>
                <input
                  id="propertyTitle"
                  type="text"
                  placeholder="Enter property title"
                  className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="propertyLocation"
                >
                  Property Image
                </label>
                <input
                  id="propertyImage"
                  type="file"
                  accept="image/*"
                  className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  onChange={handleFileUpload}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="propertyPrice"
                >
                  Price (AED)
                </label>
                <input
                  id="propertyPrice"
                  type="number"
                  placeholder="Enter price"
                  className="border border-gray-300 rounded px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="propertyType"
                >
                  Property Type
                </label>
                <select
                  id="propertyType"
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 w-full text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value="" disabled>
                    Select Property Type
                  </option>
                  <option value="Rental">Rental</option>
                  <option value="Sell">Sell</option>
                  <option value="Buy">Buy</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition cursor-pointer"
              >
                Add Item
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
