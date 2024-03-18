import { useSelector } from "react-redux";
import PriceTagCore from "./PriceTagCore";

const PriceTag = () => {
  const state = useSelector((state) => state.input);
  const prop = {
    specJsx: state.specJsx,
    price: state.price,
    title: state.title,
    degree: 0,
  };

  return <PriceTagCore prop={prop} />;
};

export default PriceTag;
