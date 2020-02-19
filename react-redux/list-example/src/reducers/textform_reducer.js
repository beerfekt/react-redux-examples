import defaultStore from "../store/default";
import { ADDTOLIST } from "../actions/textform_actions";

const textFormReducer = (state = defaultStore.textForm, action) => {
  switch (action.type) {
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
