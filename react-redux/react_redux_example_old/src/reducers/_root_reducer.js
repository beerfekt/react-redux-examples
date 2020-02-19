import { combineReducers } from "redux";
import counterReducer from "../reducers/counter_reducer";

//import defaultStore from '../store/default';

const appRootReducer = combineReducers({
  counter: counterReducer
});

const rootReducer = (state, action) => {
  //state = {...defaultStore};
  return appRootReducer(state, action);
};

export default rootReducer;
