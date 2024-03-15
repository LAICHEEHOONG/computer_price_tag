import Logo from "../assets/phco.png";
import Ambank from "../assets/ambank.png";
import Cimb from "../assets/cimb.png";
import Pb from "../assets/pb.png";
import Maybank from "../assets/maybank.png";
import { useSelector, useDispatch } from "react-redux";

const PriceTag = () => {
  const state = useSelector((state) => state.input);
  const productTitle = () => {
    if (state.title.length > 25) {
      return state.title.substring(0, 30) + "...";
    } else {
      return state.title;
    }
  };
  return (
    <div className="price-tag-container">
      <div className="price-tag-head">
        <img className="price-tag-head-logo" src={Logo} alt="Logo" />
      </div>
      <div className="price-tag-title">{productTitle()}</div>
      <div className="price-tag-spec">
        <ul>
          {state.specJsx.map((obj, i) => {
            if (obj.value) {
              return <li key={i}>{obj.value}</li>;
            } else {
              return null;
            }
          })}
        </ul>
      </div>

      <div className="bank-price-container">
        <div className="price-tag-bank">
          <div>ANSURAN</div>
          <div>BULANAN</div>
          <div>SERENDAH</div>
          <div className="bank-logo-container">
            <img className="bank-logo" src={Maybank} alt="maybank logo" />
            <img className="bank-logo" src={Pb} alt="public bank logo" />
            <img className="bank-logo" src={Cimb} alt="cimb bank logo" />
            <img
              className="bank-logo ambank-logo"
              src={Ambank}
              alt="ambank logo"
            />
          </div>
        </div>
        <div className="price-tag-price">
          <div className="price-tag-rm">
            <div className="rm">RM</div>
            <div className="bulan-price">{`${Math.round(
              state.price / 12
            )}`}</div>
          </div>
          <div className="bulan">x 12 bulan</div>
          <div className="harga">Harga</div>
          <div className="selling-price">{`RM ${state.price}`}</div>
        </div>
      </div>
      <div className="price-tag-footer">
        * Untuk pertanyaan lebih lanjut, sila rujuk kepada crew kami.
      </div>
    </div>
  );
};

export default PriceTag;
