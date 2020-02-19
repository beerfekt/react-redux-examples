import defaultStore from "../store/default";
import { SETTEXT, ADDTOLIST } from "../actions/textform_actions";

const textFormReducer = (state = defaultStore.textForm, action) => {
  switch (action.type) {
    case SETTEXT:
      return {
        ...state,
        text: action.text
      };
    case ADDTOLIST:
      return {
        ...state,
        list: [...state.list, action.item]
      };
    default:
      return state;
  }
};

export default textFormReducer;
