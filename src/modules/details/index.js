import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as Actions from '../../actions/Details.actions'
import Details from './Details';

export default connect(
    state => ({
        detailsState: state.reducer.get_single_slot,
    }),
    dispatch => bindActionCreators(Actions, dispatch)
)(Details)