import { connect } from "react-redux";

// import { addToList } from "../../../actions/textform_actions";
import List from "./component";

const mapStateToProps = state => {
  return {
    list: state.textForm.list
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
