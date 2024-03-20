import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  specJsx: [{ id: 0, value: "" }],
  specLastIndex: 0,
  title: "",
  price: "",
  alert: false,
  alertMessage: "",
  priceTags: [],
  showNav: true,
  rotate: 0,
  printArr: [],
  dialog: { open: false, id: "", targetPriceTag: {} },
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    editPriceTagSpecsChange: (state, action) => {
      const { id, _id, value } = action.payload; // id is priceTag id, _id is specJsx obj id
      const index = state.priceTags.findIndex((obj) => obj.id === id);
      state.priceTags[index].specJsx[_id].value = value;
    },
    editPriceTagRemoveSpecField: (state, action) => {
      const { id, _id } = action.payload; // id is priceTag id, _id is specJsx obj id
      const index = state.priceTags.findIndex((obj) => obj.id === id);
      let removeSpecJsx = state.priceTags[index].specJsx.filter(
        (obj) => obj.id !== _id
      );
      state.priceTags[index].specJsx = removeSpecJsx;
    },
    editPriceTagAddSpecField: (state, action) => {
      const { id } = action.payload;
      const index = state.priceTags.findIndex((obj) => obj.id === id);

      if (index !== -1) {
        let newId =
          state.priceTags[index].specJsx[
            state.priceTags[index].specJsx.length - 1
          ].id + 1;
        state.priceTags[index].specJsx = [
          ...state.priceTags[index].specJsx,
          { id: newId, value: "" },
        ];
      } else {
        console.log("Object with ID " + id + " not found.");
      }
    },
    editPriceTag: (state, action) => {
      const { id, key, value } = action.payload;
      const index = state.priceTags.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        state.priceTags[index][key] = value;
      } else {
        console.log("Object with ID " + id + " not found.");
      }
    },
    removeAll: (state) => {
      state.priceTags = [];
    },
    setDialog: (state, action) => {
      const { open, id } = action.payload;
      state.dialog.open = open;
      if (action.payload.id) {
        state.dialog.id = id;
        state.dialog.targetPriceTag = state.priceTags.find(
          (obj) => obj.id === id
        );
      }
    },
    setPrintArr: (state, action) => {
      if (state.priceTags.length === 0) {
        state.printArr = [];
        return;
      }
      let arr = [];
      let arr2 = [];

      state.priceTags.forEach((obj, i) => {
        if (arr.length < 2) {
          arr.push(obj);
        } else if (arr.length === 2) {
          arr2.push(arr);
          arr = [];
          arr.push(obj);
        }

        if (i === state.priceTags.length - 1) {
          if (arr.length > 0) {
            arr2.push(arr);
          }

          state.printArr = [...arr2];
        }
      });
    },
    deleteOne: (state, action) => {
      state.priceTags = state.priceTags.filter(
        (obj) => obj.id !== action.payload
      );
    },
    updateLastIndex: (state, action) => {
      state.specLastIndex = state.specJsx.length - 1;
    },
    addSpecField: (state, action) => {
      let newId = state.specJsx[state.specJsx.length - 1].id + 1;
      state.specJsx = [...state.specJsx, { id: newId, value: "" }];
      state.specLastIndex = state.specJsx.length - 1;
    },
    removeSpecField: (state, action) => {
      let removeSpecJsx = state.specJsx.filter(
        (obj) => obj.id !== action.payload
      );
      state.specJsx = removeSpecJsx;
      state.specLastIndex = state.specJsx.length - 1;
    },
    titleChange: (state, action) => {
      state.title = action.payload;
    },
    priceChange: (state, action) => {
      state.price = action.payload;
    },
    specsChange: (state, action) => {
      state.specJsx[action.payload.id].value = action.payload.value;
    },
    openAlert: (state, action) => {
      state.alert = action.payload;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    addPriceTag: (state, action) => {
      let obj = {
        specJsx: state.specJsx,
        title: state.title,
        price: state.price,
        id: new Date().getTime(),
      };

      state.priceTags = [...state.priceTags, obj];
      state.specJsx = [{ id: 0, value: "" }];
      state.specLastIndex = 0;
      state.title = "";
      state.price = "";
      state.alert = false;
      state.alertMessage = "";
    },
    rotatePriceTags: (state, action) => {
      let cal = state.rotate + 90;
      if (cal > 360) {
        state.rotate = 90;
      } else {
        state.rotate = cal;
      }
    },
  },
});

export const {
  updateLastIndex,
  addSpecField,
  removeSpecField,
  titleChange,
  priceChange,
  specsChange,
  openAlert,
  setAlertMessage,
  addPriceTag,
  rotatePriceTags,
  deleteOne,
  setPrintArr,
  setDialog,
  removeAll,
  editPriceTag,
  editPriceTagAddSpecField,
  editPriceTagRemoveSpecField,
  editPriceTagSpecsChange
} = inputSlice.actions;

export default inputSlice.reducer;
