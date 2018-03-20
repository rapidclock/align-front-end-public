import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentFilter from 'components/student_filter'

const mapStateToProps = (state) => {
	console.log(state);
	return {
		displayed: state.studentFilter,
		selected: state.filterGroup
	}
}


const StudentFilterContainer = connect(mapStateToProps)(StudentFilter);
export default StudentFilterContainer;