import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from '../../actions/Home.actions';
import Slots from './Slots';

export default connect(
    state => ({
        homeState: state.reducer.get_all_slots
    }),
    dispatch => bindActionCreators(Actions, dispatch)
)(Slots)