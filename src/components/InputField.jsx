import { useState } from "react";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateInputData } from "../features/input/inputSlice";
// import {  } from './counterSlice'

const InputField = () => {
  const dispatch = useDispatch();
  const initState = {
    specJsx: [{ id: 0, value: "" }],
    specLastIndex: 0,
    title: "",
    price: "",
  };

  const [state, setState] = useState(initState);

  const handle = setStateHandler(setState, state, {
    updateLastIndex: () => {
      state.specLastIndex = state.specJsx.length - 1;
    },
    addSpecField: () => {
      let newId = state.specJsx[state.specJsx.length - 1].id + 1;
      state.specJsx = [...state.specJsx, { id: newId, value: "" }];
      handle.updateLastIndex();
      handle.toReducer();
    },
    removeSpecField: (_id) => {
      let removeSpecJsx = state.specJsx.filter((obj) => obj.id !== _id);
      state.specJsx = removeSpecJsx;
      handle.updateLastIndex();
      handle.toReducer();
    },
    titleChange: (value) => {
      state.title = value;
      handle.toReducer();
    },
    priceChange: (value) => {
      state.price = value;
      handle.toReducer();
    },
    specsChange: (i, _value) => {
      state.specJsx[i].value = _value;
      handle.toReducer();
    },
    toReducer: () => {
      dispatch(updateInputData(state));
    },
  });

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
  return (
    <div className="spec-field">
      <TextField
        id="outlined-basic"
        label={"Spec"}
        variant="outlined"
        value={state?.specJsx[i]?.value}
        onChange={(e) => handle.specsChange(i, e.target.value)}
      />
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
const setStateHandler = (setState, state, actions) => {
  const wrappedActions = {};

  for (const key in actions) {
    wrappedActions[key] = (...args) => {
      actions[key](...args);
      setState({ ...state });
    };
  }

  return wrappedActions;
};
