// 1 Connect Component to Redux
import { connect } from "react-redux";

import { increment, decrement, reset } from "../../actions/counter_actions";
import Counter from "./Counter";

// 1.1 Connect Component to Redux
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch(increment());
  },

  onDecrement: () => {
    dispatch(decrement());
  },

  onReset: () => {
    dispatch(reset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //mapping from state into props
