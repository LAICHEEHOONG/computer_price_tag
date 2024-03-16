// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import PriceTagCore from "../components/PriceTagCore";

// const PriceTagPage = () => {
//   const priceTags = useSelector((state) => state.input.priceTags);

//   const printArr = [];

//   useEffect(() => {
//     let loop = 0;
//     let arr = [];

//     priceTags.forEach((obj, i) => {
//       if (loop < 2) {
//         arr.push(obj);
//       } else {
//         printArr.push(arr);
//         arr = [];
//         loop = 0;
//         arr.push(obj);
//       }

//       loop++;
//       if (i === priceTags.length - 1) {
//         if (arr.length > 0) {
//           printArr.push(arr);
//         }
//       }
//     });
//   }, []);

//   console.log(printArr);

//   return (
//     <div className="view-page-container">
//       {/* {priceTags.map((obj, i) => {
//         obj = { ...obj, degree: 90 };
//         return <PriceTagCore key={`${i}-${obj.title}`} prop={obj} />;
//       })} */}

//       {printArr.map((arr) =>
//         arr.map((arr2) =>
//           arr2.map((obj, i) => {
//             obj = { ...obj, degree: 90 };
//             return <PriceTagCore key={`${i}-${obj.title}`} prop={obj} />;
//           })
//         )
//       )}
//     </div>
//   );
// };

// export default PriceTagPage;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PriceTagCore from "../components/PriceTagCore";

const PriceTagPage = () => {
  const priceTags = useSelector((state) => state.input.priceTags);
  const [printArr, setPrintArr] = useState([]);

  useEffect(() => {
    let loop = 0;
    let arr = [];

    priceTags.forEach((obj, i) => {
      if (loop < 2) {
        arr.push(obj);
      } else {
        setPrintArr((preState) => [...preState, arr]);
        // printArr.push(arr);
        arr = [];
        loop = 0;
        arr.push(obj);
      }

      loop++;
      if (i === priceTags.length - 1) {
        if (arr.length > 0) {
          setPrintArr((preState) => [...preState, arr]);
          // printArr.push(arr);
        }
      }
    });
  }, [priceTags]);

  // useEffect(() => {
  //   let loop = 0;
  //   let arr = [];

  //   priceTags.forEach((obj, i) => {
  //     if (loop < 2) {
  //       arr.push(obj);
  //     } else {
  //       setPrintArr((prevPrintArr) => [...prevPrintArr, arr]);
  //       arr = [];
  //       loop = 0;
  //       arr.push(obj);
  //     }

  //     loop++;
  //     if (i === priceTags.length - 1) {
  //       if (arr.length > 0) {
  //         setPrintArr((prevPrintArr) => [...prevPrintArr, arr]);
  //       }
  //     }
  //   });
  // }, [priceTags]);

  console.log(printArr);

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
