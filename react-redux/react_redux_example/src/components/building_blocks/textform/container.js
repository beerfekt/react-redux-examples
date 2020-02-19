import { setText, addToList } from "../../../actions/textform_actions";

import { connect } from "react-redux";
import TextForm from "./component";

const mapStateToProps = state => {
  return {
    textForm: state.textForm
  };
};

const mapDispatchToProps = dispatch => ({
  onSetText: text => {
    dispatch(setText(text));
  },
  onAddToList: item => {
    dispatch(addToList(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);
