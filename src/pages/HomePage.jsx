import InputField from "../components/InputField";
import PriceTag from "../components/PriceTag";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <InputField />
      <div className="home-page-pricetag-container">
        <PriceTag />
      </div>
    </div>
  );
};

export default HomePage;
