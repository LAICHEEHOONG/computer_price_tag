import { useSelector, useDispatch } from "react-redux";
import PriceTagCore from "../components/PriceTagCore";

const PriceTagPage = () => {
  const priceTags = useSelector((state) => state.input.priceTags);

  return <div className="view-page-container">
    {
      priceTags.map((obj, i) => {
        obj = {...obj, degree: 90}
        return <PriceTagCore key={`${i}-${obj.title}`} prop={obj} />
      })
    }
  </div>;
};

export default PriceTagPage;
