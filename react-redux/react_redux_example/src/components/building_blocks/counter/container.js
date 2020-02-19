import { connect } from "react-redux";

import { increment, sendFive } from "../../../actions/counter_actions";
import Counter from "./component";

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(increment());
  },
  onSendFive: param => {
    dispatch(sendFive(param));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
