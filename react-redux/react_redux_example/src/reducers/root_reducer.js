import { combineReducers } from "redux";

import counterReducer from "./counter_reducer";
import textFormReducer from "./textform_reducer";

const reducer = combineReducers({
  counter: counterReducer,
  textForm: textFormReducer
});

//if global modifications are needed on store

// const rootReducer = (state, action) => {
//   //global store modifications - be carefully
//   return reducer(state, action);
// };

export default reducer;
