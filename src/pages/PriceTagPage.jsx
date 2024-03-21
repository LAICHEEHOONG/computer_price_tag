import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import PriceTagSize from "../components/PriceTagSize";
import PrintIcon from "@mui/icons-material/Print";
import ReactToPrint from "react-to-print";
import { rotatePriceTags, setPrintArr } from "../features/input/inputSlice";
import { useDispatch } from "react-redux";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import PriceTagNotCreatedPage from "../components/PriceTagNotCreated";
import Fab from "@mui/material/Fab";
import DeleteAll from "../components/DeleteAll";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import SliderSizes from "../components/SliderSizes";

const PriceTagPage = React.forwardRef((props, ref) => {
  let navigate = useNavigate();
  const componentRef = useRef();
  const dispatch = useDispatch();
  const printArr = useSelector((state) => state.input.printArr);
  const priceTags = useSelector((state) => state.input.priceTags);
  const rotate = useSelector((state) => state.input.rotate);

  useEffect(() => {
    dispatch(setPrintArr());
  }, [priceTags, dispatch]);

  return (
    <div className="view-page-container">
      <div className="price-tag-print-title">
        {priceTags.length === 0 ? (
          <div className="price-tag-not-created" style={{marginTop: "100px", marginLeft: "-80px"}}>
            <PriceTagNotCreatedPage />
          </div>
        ) : (
          <div className="price-tag-page-title">
            <div
              style={{
                display: "flex",
                width: "350px",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <DeleteAll />
              <Fab
                onClick={() => {
                  dispatch(rotatePriceTags());
                }}
              >
                <Rotate90DegreesCwIcon />
              </Fab>
              <Fab
                onClick={() => {
                  navigate("/");
                }}
              >
                <AddIcon />
              </Fab>

              <ReactToPrint
                trigger={() => {
                  return (
                    <Fab variant="extended">
                      <PrintIcon sx={{ mr: 1 }} />
                      {"print"}
                    </Fab>
                  );
                }}
                content={() => {
                  return componentRef.current;
                }}
              />
            </div>
            <div>
              <SliderSizes />
            </div>
          </div>
        )}
      </div>

      <div
        ref={componentRef}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '800px',
          // padding: '30px',
          // display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          priceTags.map((obj, i) => {
            obj = { ...obj, degree: rotate };
            return (
              <PriceTagSize key={`${i}-${obj.title}`} prop={obj} />
            )
          })
        }
        {/* {printArr.map((arr, index) => (
          <div
            className="price-tag-print-container all-width"
            style={{ marginTop: "42.67px" }}
            key={index}
          >
            {arr.map((obj, i) => {
              obj = { ...obj, degree: rotate };
              return (
                <PriceTagSize key={`${index}-${i}-${obj.title}`} prop={obj} />
              );
            })}
          </div>
        ))} */}
      </div>

      {/* <div>
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
                  <PriceTagSize key={`${index}-${i}-${obj.title}`} prop={obj} />
                );
              })}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
});

export default PriceTagPage;
