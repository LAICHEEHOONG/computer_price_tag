import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PriceTagCore from "../components/PriceTagCore";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const PriceTagPage = () => {
  const priceTags = useSelector((state) => state.input.priceTags);
  const rotate = useSelector((state) => state.input.rotate);
  const [printArr, setPrintArr] = useState([]);

  const priceTagPageTitle = () => {
    if (priceTags.length === 0) {
      return "Price tag not created";
    } else {
      return `${priceTags.length} price tags created`;
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
              fontSize: "1.5rem",
              padding: "25px",
            }}
          />
        </Stack>
      </div>
      {printArr.map((arr, index) => (
        <div className="price-tag-print-container all-width" key={index}>
          {arr.map((obj, i) => {
            obj = { ...obj, degree: rotate };
            return (
              <PriceTagCore key={`${index}-${i}-${obj.title}`} prop={obj} />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PriceTagPage;
