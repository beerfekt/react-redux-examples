import { connect } from "react-redux";

import { addToList } from "../../../actions/textform_actions";
import TextForm from "./component";

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => ({
  onAddToList: item => dispatch(addToList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);
