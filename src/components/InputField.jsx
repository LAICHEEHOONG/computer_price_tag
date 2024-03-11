import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";

const InputField = () => {
  const initState = {
    specJsx: [0],
    title: "",
    specs: [],
    price: "",
  };

  const [state, setState] = useState(initState);

  const handle = setStateHandler(setState, state, {
    addSpecField: () => {
      let num = state.specJsx[state.specJsx.length - 1] + 1;
      state.specJsx = [...state.specJsx, num];
    },
    removeSpecField: (num) => {
      console.log(num);
      let removeSpecJsx = state.specJsx.filter((el) => el !== num);
      state.specJsx = removeSpecJsx;
    },
    titleChange: (value) => {
      state.title = value;
    },
    priceChange: (value) => {
      state.price = value;
    },
    specsChange: (num, value) => {
      state.specs[num] = value;
    },
  });

  const props = { state, handle };

  return (
    <div className="input-field-container">
      <Title {...props} />
      <div className="input-specs-container">
        {state.specJsx.map((num) => {
          return <Specs key={num} {...props} num={num} />;
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

const Specs = ({ state, handle, num }) => {
  const lastNum = state.specJsx[state.specJsx.length - 1];
  console.log(state.specs);
  return (
    <div className="spec-field">
      <TextField
        id="outlined-basic"
        label={`Spec ${num}`}
        variant="outlined"
        value={state.specs[num]}
        onChange={(e) => handle.specsChange(num, e.target.value)}
      />
      {lastNum === num ? (
        <IconButton onClick={() => handle.addSpecField()}>
          <AddCircleIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => handle.removeSpecField(num)}>
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
