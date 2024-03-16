import Logo from "../assets/phco.png";
import Ambank from "../assets/ambank.png";
import Cimb from "../assets/cimb.png";
import Pb from "../assets/pb.png";
import Maybank from "../assets/maybank.png";
import { useSelector } from "react-redux";
import PriceTagCore from "./PriceTagCore";

const PriceTag = () => {
  const state = useSelector((state) => state.input);
  const prop = {
    specJsx: state.specJsx,
    price: state.price,
    title: state.title,
    degree: 0
  };

  return <PriceTagCore prop={prop} />;
};

export default PriceTag;
