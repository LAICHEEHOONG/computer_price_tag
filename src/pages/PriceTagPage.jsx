import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import PriceTagCore from "../components/PriceTagCore";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import PrintIcon from "@mui/icons-material/Print";
import ReactToPrint from "react-to-print";
import { IconButton } from "@mui/material";
import { rotatePriceTags } from "../features/input/inputSlice";
import { useDispatch } from "react-redux";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";

const PriceTagPage = React.forwardRef((props, ref) => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const priceTags = useSelector((state) => state.input.priceTags);
  const rotate = useSelector((state) => state.input.rotate);
  const [printArr, setPrintArr] = useState([]);

  const priceTagPageTitle = () => {
    if (priceTags.length === 0) {
      return "Price Tag Not Created";
    } else {
      return `${priceTags.length} Price Tags Created`;
    }
  };

  useEffect(() => {
    let arr = [];
    let arr2 = [];

    priceTags.forEach((obj, i) => {
      if (arr.length < 2) {
        arr.push(obj);
      } else if (arr.length >= 2) {
        arr2.push(arr);
        arr = [];
        arr.push(obj);
      }

      if (i === priceTags.length - 1) {
        arr2.push(arr);
        setPrintArr((preState) => [...preState, ...arr2]);
      }
    });
  }, [priceTags]);

  return (
    <div className="view-page-container">
      <div className="price-tag-page-title">
        <Stack direction="row" spacing={1}>
          <Chip
            color="primary"
            variant="outlined"
            label={priceTagPageTitle()}
            sx={{
              fontSize: "1.25rem",
              padding: "20px",
            }}
          />
        </Stack>
        <ReactToPrint
          trigger={() => {
            return (
              <IconButton
                style={{ marginLeft: "10px"}}
              >
                <PrintIcon style={{ fontSize: "50px" }} />
              </IconButton>
            );
          }}
          content={() => {
            // dispatch(rotatePriceTags(90));
            return componentRef.current;
          }}
        />
        <IconButton onClick={() => {
          dispatch(rotatePriceTags())
        }}>
          <Rotate90DegreesCwIcon style={{ fontSize: "50px" }} />
        </IconButton>
      </div>
      {/* {printArr.map((arr, index) => (
        <div className="price-tag-print-container all-width" key={index}>
          {arr.map((obj, i) => {
            obj = { ...obj, degree: rotate };
            return (
              <PriceTagCore key={`${index}-${i}-${obj.title}`} prop={obj} />
            );
          })}
        </div>
      ))} */}
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
