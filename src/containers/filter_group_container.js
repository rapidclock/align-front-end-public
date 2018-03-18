import React, { Component } from 'react';
import FilterGroup from 'components/filter_group'
import { connect } from 'react-redux';
import * as filterActions from 'redux/filter_actions';

const mapStateToProps = (state) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCoop: input => {
            dispatch(filterActions.addCoop(input));
        },
        removeCoop: input => {
            dispatch(filterActions.removeCoop(input));
        },
        addDegree: input => {
            dispatch(filterActions.addDegree(input));
        },
        removeDegree: input => {
            dispatch(filterActions.removeDegree(input));
        },
        addUniversity: input => {
            dispatch(filterActions.addUniversity(input));
        },
        removeUniversity: input => {
            dispatch(filterActions.removeUniversity(input));
        },
        addYear: input => {
            dispatch(filterActions.addYear(input));
        },
        removeYear: input => {
            dispatch(filterActions.removeYear(input));
        },
    };
};

const FilterGroupContainer = connect(null,mapDispatchToProps)(FilterGroup);
export default FilterGroupContainer;