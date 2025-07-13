import { useState } from "react";

function useUserInfo() {
  const stored = localStorage.getItem("userInfo");
  const initialUserInfo = stored ? JSON.parse(stored) : null;

  const [userInfo] = useState(initialUserInfo);

  return userInfo;
}

export default useUserInfo;
