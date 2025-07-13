import { useEffect, useState } from "react";
import axios from "axios";
import { REACT_SERVER_URL } from "../../config/ENV";
import Property from "../Components/Property";
import { useSearchParams } from "react-router-dom";
import useUserInfo from "../CustomHooks/useUserInfo";

const RealEstate = () => {
  const [properties, setProperties] = useState([]);
  const [updated, setUpdated] = useState(false);
  const userInfo = useUserInfo();

  const [searchParams] = useSearchParams();

  const realEstateType = searchParams.get("type")?.toLowerCase();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${REACT_SERVER_URL}/properties/fetchproperty`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo?.token}`,
          },
        }
      );
      setProperties(data.properties);
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      console.log(message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updated]);

  console.log(updated);

  return (
    <>
      <Property
        properties={properties}
        type={realEstateType}
        isAdmin={userInfo.isAdmin}
        setUpdated={setUpdated}
      />
    </>
  );
};

export default RealEstate;
