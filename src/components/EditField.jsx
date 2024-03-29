import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  openAlert,
  setAlertMessage,
  addPriceTag,
  editPriceTag,
  editPriceTagAddSpecField,
  editPriceTagRemoveSpecField,
  editPriceTagSpecsChange,
} from "../features/input/inputSlice";

const EditField = ({ state }) => {
  const priceTags = useSelector((state) => state.input.priceTags);
  const dispatch = useDispatch();

  const handle = {
    selectedPriceTags: () => {
      let result = priceTags.find((obj) => obj.id === state.id);
      return result;
    },
    addSpecField: () => {
      dispatch(editPriceTagAddSpecField({ id: state.id }));
    },
    removeSpecField: (_id) => {
      dispatch(editPriceTagRemoveSpecField({ id: state.id, _id: _id }));
    },
    titleChange: (value) => {
      dispatch(editPriceTag({ id: state.id, key: "title", value: value }));
    },
    priceChange: (value) => {
      let toNumber = value;
      if (isNaN(toNumber)) {
        toNumber = 0;
        handle.alert("Price field only accepts numbers.");
      }

      if (toNumber > 99999) {
        toNumber = 0;
        handle.alert("The price is too high.");
      }
      dispatch(editPriceTag({ id: state.id, key: "price", value: toNumber }));
    },
    specsChange: (_id, value) => {
      dispatch(
        editPriceTagSpecsChange({ id: state.id, _id: _id, value: value })
      );
    },
    addPriceTag: () => {
      dispatch(addPriceTag());
      handle.alert("Price tag added");
    },
    alert: (message) => {
      dispatch(openAlert(true));
      dispatch(setAlertMessage(message));
    },
  };

  const props = { state2: handle.selectedPriceTags(), handle };

  return (
    <div>
      <Title {...props} />
      <div className="input-specs-container">
        {handle.selectedPriceTags().specJsx.map((obj, i) => {
          return <Specs key={i} {...props} _id={obj.id} i={i} />;
        })}
      </div>
      <Price {...props} />
    </div>
  );
};

export default EditField;

/*** COMPONENTS ******************** COMPONENTS ****************** COMPONENTS **********************************************************/

const Title = ({ state2, handle }) => {
  return (
    <TextField
      className="input-field-title"
      id="outlined-basic"
      label="Title"
      variant="outlined"
      value={handle.selectedPriceTags().title}
      onChange={(e) => handle.titleChange(e.target.value)}
    />
  );
};

const Specs = ({ state2, handle, _id, i }) => {
  let fieldValue = state2.specJsx.find((item) => item.id === _id).value;
  return (
    <div className="spec-field">
      <TextField
        className="input-field-spec"
        id="outlined-basic"
        label={"Spec"}
        variant="outlined"
        value={fieldValue}
        onChange={(e) => handle.specsChange(i, e.target.value)}
      />
      <div className="spec-icon-btn">
        {state2.specJsx.length - 1 === i ? (
          <IconButton onClick={() => handle.addSpecField()}>
            <AddCircleIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => handle.removeSpecField(_id)}>
            <RemoveCircleIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

const Price = ({ state2, handle }) => {
  return (
    <TextField
      className="input-field-title"
      id="outlined-basic"
      label="Price"
      variant="outlined"
      value={handle.selectedPriceTags().price}
      onChange={(e) => handle.priceChange(e.target.value)}
    />
  );
};

/*** TOOLS *************** TOOLS **************** TOOLS ********************* TOOLS ****************************************************/
