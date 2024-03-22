import Logo from "../assets/phco.png";
import Ambank from "../assets/ambank.png";
import Cimb from "../assets/cimb.png";
import Pb from "../assets/pb.png";
import Maybank from "../assets/maybank.png";
import Aeon from "../assets/aeon.png";
import { formatNumber } from "../utils/tool";
import { useLocation } from "react-router-dom";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteOne, setDialog } from "../features/input/inputSlice";

const PriceTagSize = ({ prop }) => {
  const size = useSelector((state) => state.size.size);
  const dialog = useSelector((state) => state.input.dialog);
  const dispatch = useDispatch();
  const location = useLocation();
  let repoName = location.pathname;
  const { title, specJsx, price, degree, id } = prop;
  const productTitle = () => {
    if (title.length > 31) {
      return title.substring(0, 31) + "...";
    } else {
      return title;
    }
  };

  const priceTagContainer = (degree) => {
    let s = {
      display: "flex",
      flexDirection: "column",
      width: `${400 * size}px`,
      transform: `rotate(${degree}deg)`,
    };
    if (degree === 90 || degree === 270) {
      s = { ...s, margin: `${70 * size}px` };
    }
    return s;
  };

  const logo = () => ({
    width: `${400 * size}px`,
  });

  const priceTagTitle = () => ({
    border: "1px solid black",
    marginTop: `${-7}px`,
    textAlign: "center",
    fontSize: `${1.2 * size}rem`,
    fontWeight: "bolder",
    height: `${45 * size}px`,
    lineHeight: 1.7,
    padding: `${5 * size}px`,
  });

  const priceTagSpec = () => ({
    border: "1px solid black",
    fontSize: `${0.8 * size}rem`,
    borderTop: "none",
    height: `${60 * size}mm`,
  });

  const bankPriceContainer = () => ({
    display: "flex",
    height: `${165 * size}px`,
    border: "1px solid black",
    borderTop: "none",
  });

  const priceTagBank = () => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    gap: `${5 * size}px`,
    padding: `${8 * size}px`,
    border: "1px solid black",
    borderTop: "none",
    borderLeft: "none",
    borderBottom: "none",
    fontSize: `${1 * size}rem`,
  });

  const bankLogoContainer = () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: `${5 * size}px`,
  });

  const bankLogo = () => ({
    width: `${38 * size}px`,
  });

  const ambankLogo = () => ({
    borderRadius: `${15 * size}%`,
    ...bankLogo(),
  });

  const priceTagPrice = () => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "end",
    fontSize: `${0.9 * size}rem`,
    paddingRight: `${20 * size}px`,
  });

  const priceTagRm = () => ({
    display: "flex",
    flexDirection: "row",
    gap: `${20 * size}px`,
  });

  const rm = () => ({
    fontSize: `${1 * size}rem`,
    fontWeight: "bold",
    marginTop: `${13 * size}px`,
  });

  const bulanPrice = () => ({
    fontWeight: "bolder",
    fontSize: `${2.5 * size}rem`,
  });

  const harga = () => ({
    marginTop: `${20 * size}px`,
    fontWeight: 'bold'
  });

  const priceTagFooter = () => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderTop: "none",
    fontSize: `${0.7 * size}rem`,
    padding: `${5 * size}px`,
  });

  const overlaySquare = () => ({
    gap: `${50 * size}px`,
  });

  const fab = () => ({
    width: `${56 * size}px`,
    height: `${56 * size}px`,
  });

  const fabIcon = () => ({
    width: `${24 * size}px`,
    height: `${24 * size}px`,
  });

  return (
    <div
      className="price-tag-container_ print-wrapper"
      style={priceTagContainer(degree)}
    >
      <div>
        <img className="all-width_" style={logo()} src={Logo} alt="Logo" />
      </div>
      <div className="price-tag-title_" style={priceTagTitle()}>
        {productTitle()}
      </div>
      <div className="price-tag-spec_" style={priceTagSpec()}>
        <ul style={{ paddingLeft: `${40 * size}px` }}>
          {specJsx.map((obj, i) => {
            if (obj.value) {
              return <li key={i}>{obj.value}</li>;
            } else {
              return null;
            }
          })}
        </ul>
      </div>

      <div className="bank-price-container_" style={bankPriceContainer()}>
        <div className="price-tag-bank_" style={priceTagBank()}>
          <div>ANSURAN</div>
          <div>BULANAN</div>
          <div>SERENDAH</div>
          <div className="bank-logo-container_" style={bankLogoContainer()}>
            <img
              className="bank-logo_"
              style={bankLogo()}
              src={Maybank}
              alt="maybank logo"
            />
            <img
              className="bank-logo_"
              style={bankLogo()}
              src={Pb}
              alt="public bank logo"
            />
            <img
              className="bank-logo_"
              style={bankLogo()}
              src={Cimb}
              alt="cimb bank logo"
            />
            <img
              className="bank-logo_ ambank-logo_"
              style={ambankLogo()}
              src={Ambank}
              alt="ambank logo"
            />
            <img
              className="bank-logo_"
              style={ambankLogo()}
              src={Aeon}
              alt="aeon"
            />
          </div>
        </div>
        <div className="price-tag-price_" style={priceTagPrice()}>
          <div className="price-tag-rm_" style={priceTagRm()}>
            <div className="rm_" style={rm()}>
              RM
            </div>
            <div className="bulan-price_" style={bulanPrice()}>{`${Math.round(
              price / 12
            )}`}</div>
          </div>
          <div className="bulan">x 12 bulan</div>
          <div className="harga_" style={harga()}>
            Harga
          </div>
          <div className="selling-price">{`RM ${formatNumber(price)}`}</div>
        </div>
      </div>
      <div className="price-tag-footer_" style={priceTagFooter()}>
        * Untuk pertanyaan lebih lanjut, sila rujuk kepada crew kami.
      </div>
      {repoName === "/" || dialog.open ? (
        <></>
      ) : (
        <div className="overlay-square_" style={overlaySquare()}>
          <Fab
            color="primary"
            style={fab()}
            onClick={() => {
              dispatch(setDialog({ open: true, id: id }));
            }}
          >
            <EditIcon style={fabIcon()} />
          </Fab>

          <Fab
            color="secondary"
            style={fab()}
            onClick={() => {
              dispatch(deleteOne(id));
            }}
          >
            <DeleteIcon style={fabIcon()} />
          </Fab>
        </div>
      )}
    </div>
  );
};

export default PriceTagSize;
