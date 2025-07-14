import { useEffect, useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import EditModal from "./EditModal";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import useUserInfo from "../CustomHooks/useUserInfo";
import Alerts from "./Alerts";
import { REACT_SERVER_URL } from "../../config/ENV";
import { Link } from "react-router-dom";

const Property = ({ properties, type, isAdmin, setUpdated, loading }) => {
  const propertyList = Array.isArray(properties) ? properties : [];

  const [editmodal, setEditmodal] = useState(false);
  const [triggerdelete, setTriggerdelete] = useState(false);
  const [selectedproperty, setSelectedproperty] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const [propertyToDelete, setPropertyToDelete] = useState(null);

  const relevantProperties = propertyList.filter(
    (property) => property.type?.toLowerCase() === type?.toLowerCase()
  );

  const userInfo = useUserInfo();

  const handleEdit = (property) => {
    setEditmodal(true);
    setSelectedproperty(property);
  };

  const triggerDelete = (property) => {
    setTriggerdelete(true);
    setPropertyToDelete(property);
  };

  const handleDelete = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
      };
      await axios.delete(
        `${REACT_SERVER_URL}/properties/deleteproperty/${propertyToDelete._id}`,
        config
      );
      setErrormessage("");
      setShowToast(true);
      setUpdated(true);
      //closing the alert box immediatetly on clicking ok
      setTriggerdelete(false);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    } catch (error) {
      let message = error?.response?.data?.message;
      console.log(error);

      setShowToast(true);
      setErrormessage(message ? message : error.message);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <>
      {!errormessage && showToast && (
        <div className="fixed top-5  z-[9999] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-all duration-300 animate-slide-in">
          ✅ Successfully Deleted the property!
        </div>
      )}
      {triggerdelete && (
        <Alerts
          message="Are you sure you want to Delete the property?"
          onCancel={() => setTriggerdelete(false)}
          onConfirm={handleDelete}
        />
      )}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100"
            >
              <div className="w-full h-56 bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-2/3 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse" />
                <div className="flex items-center justify-between mt-6">
                  <div className="h-6 w-24 bg-gray-300 rounded animate-pulse" />
                  <div className="h-8 w-24 bg-gray-300 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
                        <div className="flex items-center space-x-6">
                          {isAdmin && (
                            <>
                              <AiTwotoneEdit
                                onClick={() => handleEdit(property)}
                                className="cursor-pointer text-blue-600 hover:text-blue-800 space-x-1"
                              />
                              <AiFillDelete
                                onClick={() => triggerDelete(property)}
                                className="cursor-pointer text-red-600 hover:text-red-800"
                              />
                            </>
                          )}

                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                            ⭐ 4.7
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {property.desc}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">
                          $ {Number(property.amount).toLocaleString()}
                        </span>
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                          <Link
                            to="/propertyview"
                            state={{ property: property }}
                          >
                            View Details
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : ` No properties found for ${type}`}
          </div>
          {editmodal ? (
            <EditModal
              selectedProperty={selectedproperty}
              setEditmodal={setEditmodal}
              setUpdated={setUpdated}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Property;
