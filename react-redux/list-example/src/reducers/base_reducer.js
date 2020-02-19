import { combineReducers } from "redux";

import textFormReducer from "./textform_reducer";

const baseReducer = combineReducers({
  textForm: textFormReducer
});

export default baseReducer;
