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
import { dateFormat } from "../utils/tool";

const PriceTagCore = ({ prop }) => {
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

  return (
    <div
      className="price-tag-container all-width"
      style={{ transform: `rotate(${degree}deg)` }}
    >
      <div>
        <img className="all-width" src={Logo} alt="Logo" />
      </div>
      <div className="price-tag-title">{productTitle()}</div>
      <div className="price-tag-spec">
        <ul>
          {specJsx.map((obj, i) => {
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
            <img className="bank-logo ambank-logo" src={Aeon} alt="aeon" />
          </div>
        </div>
        <div className="price-tag-price">
          <div
            style={{
              position: "absolute",
              marginTop: "-190px",
              fontWeight: "bold",
              fontSize: "0.6rem",
            }}
          >
            {dateFormat()}
          </div>
          <div className="price-tag-rm">
            <div className="rm">RM</div>
            <div className="bulan-price">{`${Math.round(price / 12)}`}</div>
          </div>
          <div className="bulan">x 12 bulan</div>
          <div className="harga">Harga</div>
          <div className="selling-price">{`RM ${formatNumber(price)}`}</div>
        </div>
      </div>
      <div className="price-tag-footer">
        * Untuk pertanyaan lebih lanjut, sila rujuk kepada crew kami.
      </div>
      {repoName === "/" || dialog.open ? (
        <></>
      ) : (
        <div className="overlay-square">
          <Fab
            color="primary"
            onClick={() => {
              dispatch(setDialog({ open: true, id: id }));
            }}
          >
            <EditIcon />
          </Fab>

          <Fab
            color="secondary"
            onClick={() => {
              dispatch(deleteOne(id));
            }}
          >
            <DeleteIcon />
          </Fab>
        </div>
      )}
    </div>
  );
};

export default PriceTagCore;

// function dateFormat() {
//   // Create a new Date object
//   const date = new Date();

//   // Define an array of month names
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   // Get the day, month, and year
//   const day = date.getDate();
//   const monthIndex = date.getMonth();
//   const year = date.getFullYear();

//   // Format the date
//   const formattedDate = day + " " + monthNames[monthIndex] + " " + year;

//   return formattedDate;
// }
