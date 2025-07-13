import React, { useEffect, useState } from "react";
import useUserInfo from "../CustomHooks/useUserInfo";
import axios from "axios";
import { CLOUDINARY_CLOUD_NAME, REACT_SERVER_URL } from "../../config/ENV";

const EditModal = ({ selectedProperty, setEditmodal, setUpdated }) => {
  const userInfo = useUserInfo();
  const [showToast, setShowToast] = useState(false);
  const [errormessage, setErrormessage] = useState("");

  const [editedProperty, setEditedProperty] = useState({
    name: "",
    image: null,
    amount: "",
    desc: "",
  });

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
        console.log(response);

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;
          setEditedProperty((prev) => ({
            ...prev,
            image: imageUrl,
          }));
          setUpdated(true);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  useEffect(() => {
    if (selectedProperty) {
      setEditedProperty((prev) => ({
        ...prev,
        name: selectedProperty.name || "",
        amount: selectedProperty.amount || "",
        desc: selectedProperty.desc || "",
      }));
    }
  }, [selectedProperty]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEditedProperty((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };
      await axios.post(
        `${REACT_SERVER_URL}/properties/updateproperty/${selectedProperty._id}`,
        {
          name: editedProperty.name,
          desc: editedProperty.desc,
          amount: editedProperty.amount,
          image: editedProperty.image,
        },
        config
      );
      setErrormessage("");
      setUpdated(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setEditmodal(false);
        setUpdated(false);
      }, 1500);
    } catch (error) {
      let message = error?.response?.data?.message;
      setErrormessage(message ? message : error.message);
    }
  };

  return (
    <>
      {!errormessage && showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-60 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-all duration-300 animate-slide-in">
          ✅ Successfully updated!
        </div>
      )}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
            onClick={() => setEditmodal(false)}
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Edit Property
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                property Name
              </label>
              <input
                name="name"
                value={editedProperty.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="property name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileUpload}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></input>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                name="amount"
                type="number"
                value={editedProperty.amount}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="amount"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="desc"
                value={editedProperty.desc}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-2">
            <button
              onClick={() => setEditmodal(false)}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
