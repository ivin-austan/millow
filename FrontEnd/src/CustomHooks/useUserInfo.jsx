import { useState, useEffect } from "react";

function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("userInfo");
      if (stored) {
        setUserInfo(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to parse userInfo from localStorage:", e);
    }
  }, []);

  return userInfo;
}

export default useUserInfo;
