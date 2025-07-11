import Header from "./Components/Header";
import RealEstate from "./Pages/RealEstate";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <Routes>
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
