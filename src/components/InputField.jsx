import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addSpecField,
  removeSpecField,
  titleChange,
  priceChange,
  specsChange,
} from "../features/input/inputSlice";

const InputField = () => {
  const state = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const handle = {
    addSpecField: () => {
      dispatch(addSpecField());
    },
    removeSpecField: (id) => {
      dispatch(removeSpecField(id));
    },
    titleChange: (value) => {
      dispatch(titleChange(value));
    },
    priceChange: (value) => {
      dispatch(priceChange(value));
    },
    specsChange: (id, value) => {
      dispatch(specsChange({ id, value }));
    },
  };

  const props = { state, handle };

  return (
    <div className="input-field-container">
      <Title {...props} />
      <div className="input-specs-container">
        {state.specJsx.map((obj, i) => {
          return <Specs key={i} {...props} _id={obj.id} i={i} />;
        })}
      </div>
      <Price {...props} />
    </div>
  );
};

export default InputField;

/*** COMPONENTS ******************** COMPONENTS ****************** COMPONENTS **********************************************************/

const Title = ({ state, handle }) => {
  return (
    <TextField
      className="input-field-title"
      id="outlined-basic"
      label="Title"
      variant="outlined"
      value={state.title}
      onChange={(e) => handle.titleChange(e.target.value)}
    />
  );
};

const Specs = ({ state, handle, _id, i }) => {
  let fieldValue = state.specJsx.find((item) => item.id === _id).value;
  return (
    <div className="spec-field">
      <TextField
        id="outlined-basic"
        label={"Spec"}
        variant="outlined"
        value={fieldValue}
        onChange={(e) => handle.specsChange(i, e.target.value)}
      />
      <div className="spec-icon-btn">
        {state.specLastIndex === i ? (
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

const Price = ({ state, handle }) => {
  return (
    <TextField
      className="input-field-title"
      id="outlined-basic"
      label="Price"
      variant="outlined"
      value={state.price}
      onChange={(e) => handle.priceChange(e.target.value)}
    />
  );
};

/*** TOOLS *************** TOOLS **************** TOOLS ********************* TOOLS ****************************************************/
