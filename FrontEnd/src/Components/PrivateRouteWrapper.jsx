import { Navigate } from "react-router-dom";
import useUserInfo from "../CustomHooks/useUserInfo";

const PrivateRouteWrapper = ({ children, requireAdmin = false }) => {
  const userInfo = useUserInfo();

  if (requireAdmin && !userInfo.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default PrivateRouteWrapper;
