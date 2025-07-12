import Banner from "../Components/Banner";
import BuyAbilitySection from "../Components/BuyAbilitySection";
import Footer from "../Components/Footer";
import RecommendationsUnderway from "../Components/Recommendations";
import HomeTabs from "../Components/Tabs";

const HomePage = () => {
  return (
    <>
      <Banner />
      <RecommendationsUnderway />
      <HomeTabs />
      <BuyAbilitySection />
      <Footer />
    </>
  );
};

export default HomePage;
