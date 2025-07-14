import Header from "./Components/Header";
import RealEstate from "./Pages/RealEstate";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PrivateRouteWrapper from "./Components/PrivateRouteWrapper";
import AdminDashboard from "./Pages/AdminPage";
import { Navigate } from "react-router-dom";
import Unauthorized from "./Pages/UnAuthorised";
import PropertyViewPage from "./Pages/PropertyViewPage";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/unauthorized" && <Header />}
      <Routes>
        <Route
          path="/realestate"
          element={
            <PrivateRouteWrapper>
              <RealEstate />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path="/propertyview"
          element={
            <PrivateRouteWrapper>
              <PropertyViewPage />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRouteWrapper>
              <HomePage />
            </PrivateRouteWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRouteWrapper requireAdmin={true}>
              <AdminDashboard />
            </PrivateRouteWrapper>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </div>
  );
};

export default App;
