import InputField from "../components/InputField";
import { useSelector } from "react-redux";
import PriceTagCore from "../components/PriceTagCore";

const HomePage = () => {
  const state = useSelector((state) => state.input);
  const prop = {
    specJsx: state.specJsx,
    price: state.price,
    title: state.title,
    degree: 0,
  };
  return (
    <div className="home-page-container">
      <InputField />
      <div className="home-page-pricetag-container">
        <PriceTagCore prop={prop} />
      </div>
    </div>
  );
};

export default HomePage;
