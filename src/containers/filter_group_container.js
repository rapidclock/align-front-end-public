import React, { Component } from 'react';
import FilterGroup from 'components/filter_group'
import { connect } from 'react-redux';
import * as FilterActions from 'redux/filter_actions';

const mapStateToProps = (state) => {
    return {
        displayed: state.studentFilter,
        selected: state.filterGroup,
        all: state.all
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSelectedCoop: input => {
            dispatch(FilterActions.addSelectedCoop(input));
        },
        removeSelectedCoop: input => {
            dispatch(FilterActions.removeSelectedCoop(input));
        },
        addSelectedDegree: input => {
            dispatch(FilterActions.addSelectedDegree(input));
        },
        removeSelectedDegree: input => {
            dispatch(FilterActions.removeSelectedDegree(input));
        },
        addSelectedUniversity: input => {
            dispatch(FilterActions.addSelectedUniversity(input));
        },
        removeSelectedUniversity: input => {
            dispatch(FilterActions.removeSelectedUniversity(input));
        },
        addSelectedear: input => {
            dispatch(FilterActions.addSelectedYear(input));
        },
        removeSelectedYear: input => {
            dispatch(FilterActions.removeSelectedYear(input));
        },
    };
};

const FilterGroupContainer = connect(mapStateToProps,mapDispatchToProps)(FilterGroup);
export default FilterGroupContainer;