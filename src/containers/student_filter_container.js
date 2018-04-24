import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StudentFilter from '../components/student_filter'

import { setAllResults } from '../actions/all_actions';

const mapStateToProps = (state) => {
	return {
		displayed: state.studentFilter,
		selected: state.filterGroup
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setAllResults
}, dispatch);


const StudentFilterContainer = connect(mapStateToProps, mapDispatchToProps)(StudentFilter);
export default StudentFilterContainer;