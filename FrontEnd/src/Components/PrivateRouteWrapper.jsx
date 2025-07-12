import { Navigate } from "react-router-dom";

const PrivateRouteWrapper = ({ children, requireAdmin = false }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && !userInfo.isAdmin) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default PrivateRouteWrapper;
