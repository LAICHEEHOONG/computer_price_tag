import { useState } from "react";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";

const InputField = () => {
  const initState = {
    specJsx: [{ id: 0, value: "" }],
    specLastIndex: 0,
    title: "",
    specs: [],
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
    },
    removeSpecField: (_id) => {
      let removeSpecJsx = state.specJsx.filter((obj) => obj.id !== _id);
      state.specJsx = removeSpecJsx;
      handle.updateLastIndex();
    },
    titleChange: (value) => {
      state.title = value;
    },
    priceChange: (value) => {
      state.price = value;
    },
    specsChange: (_id, _value) => {
      console.log(_value);
      state.specJsx[_id].value = _value;
    },
  });

  const props = { state, handle };

  return (
    <div className="input-field-container">
      <Title {...props} />
      <div className="input-specs-container">
        {state.specJsx.map((obj, i) => {
          return <Specs key={i} {...props} _id={obj.id} i={i}/>;
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
  console.log(state.specJsx);
  return (
    <div className="spec-field">
      <TextField
        id="outlined-basic"
        label={`Spec ${_id}`}
        variant="outlined"
        value={state.specJsx[i].value}
        onChange={(e) => handle.specsChange(_id, e.target.value)}
      />
      {state?.specLastIndex === _id ? (
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
