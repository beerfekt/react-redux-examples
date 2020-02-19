import { createStore } from "redux";
import baseReducer from "../reducers/base_reducer";

const store = createStore(
  baseReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Devtools installation
);

export default store;
