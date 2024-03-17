import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PriceTagCore from "../components/PriceTagCore";

const PriceTagPage = () => {
  const priceTags = useSelector((state) => state.input.priceTags);
  const [printArr, setPrintArr] = useState([]);

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
      {printArr.map((arr, index) => (
        <div className="price-tag-print-container" key={index}>
          {arr.map((obj, i) => {
            obj = { ...obj, degree: 90 };
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
