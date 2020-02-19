import defaultStore from "../store/default";
import { INCREMENT, SENDFIVE } from "../actions/counter_actions";

const counterReducer = (state = defaultStore.counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, //sonst werden andere attribute gelöscht die hier drinhängen
        count: state.count + 1
      };
    case SENDFIVE:
      return {
        ...state,
        count: state.count + action.numericValue
      };
    default:
      return state;
  }
};

export default counterReducer;
