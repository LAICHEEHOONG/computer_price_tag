import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import PriceTagCore from "../components/PriceTagCore";
import PrintIcon from "@mui/icons-material/Print";
import ReactToPrint from "react-to-print";
import { rotatePriceTags, setPrintArr } from "../features/input/inputSlice";
import { useDispatch } from "react-redux";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import PriceTagNotCreatedPage from "../components/PriceTagNotCreated";
import Fab from "@mui/material/Fab";
import DeleteAll from "../components/DeleteAll";

const PriceTagPage = React.forwardRef((props, ref) => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const printArr = useSelector((state) => state.input.printArr);
  const priceTags = useSelector((state) => state.input.priceTags);
  const rotate = useSelector((state) => state.input.rotate);

  const priceTagPageTitle = () => {
    if (priceTags.length === 0) {
      return "Price Tag Not Created";
    } else {
      return `Print ${priceTags.length} Price Tags`;
    }
  };

  useEffect(() => {
    dispatch(setPrintArr());
  }, [priceTags, dispatch]);

  return (
    <div className="view-page-container">
      <div className="price-tag-print-title">
        {priceTags.length === 0 ? (
          <div style={{ marginTop: "100px", marginLeft: "-80px" }}>
            <PriceTagNotCreatedPage />
          </div>
        ) : (
          <div className="price-tag-page-title">
            <Fab
              onClick={() => {
                dispatch(rotatePriceTags());
              }}
            >
              <Rotate90DegreesCwIcon />
            </Fab>
            <DeleteAll />
            <ReactToPrint
              trigger={() => {
                return (
                  <Fab variant="extended">
                    <PrintIcon sx={{ mr: 1 }} />
                    {priceTagPageTitle()}
                  </Fab>
                );
              }}
              content={() => {
                return componentRef.current;
              }}
            />
          </div>
        )}
      </div>

      <div>
        <div
          ref={componentRef}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {printArr.map((arr, index) => (
            <div
              className="price-tag-print-container all-width"
              style={{ marginTop: "42.67px" }}
              key={index}
            >
              {arr.map((obj, i) => {
                obj = { ...obj, degree: rotate };
                return (
                  <PriceTagCore key={`${index}-${i}-${obj.title}`} prop={obj} />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default PriceTagPage;
