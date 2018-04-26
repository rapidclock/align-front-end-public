import axios from "axios";
import * as FilterActions from '../redux/filter_actions';
import * as AggregateActions from '../redux/aggregate_actions';

const displayedQuantity = "5";

export function setDisplayedUndergraduateSchools(){
	return (dispatch, getState) => {
		axios({
			method:'post',
			data: displayedQuantity,
			url:'https://asd4.ccs.neu.edu:8080/undergradschools',
			headers: {
				'Content-Type': 'text/plain'
      		}
		})
		.then(function(response) {
			dispatch(FilterActions.setDisplayedUniversities(response.data));
		})
		.catch(function (error) {
			console.log(error, " top schools error");
		});
	}
}

export function setDisplayedCoops(){
	return (dispatch, getState) => {
		axios({
			method:'post',
			data: displayedQuantity,
			url:'https://asd4.ccs.neu.edu:8080/coops',
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then(function(response) {
			dispatch(FilterActions.setDisplayedCoops(response.data));
		})
		.catch(function (error) {
			console.log(error, " top coops error");
		});
	}
}

export function setDisplayedDegrees(){
	return (dispatch, getState) => {
		axios({
			method:'post',
			data: displayedQuantity,
			url:'https://asd4.ccs.neu.edu:8080/undergradmajors',
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then(function(response) {
			dispatch(FilterActions.setDisplayedDegrees(response.data));
		})
		.catch(function (error) {
			console.log(error, " top degrees error");
		});
	}
}

export function setDisplayedGraduationYears(){
	return (dispatch, getState) => {
		axios({
			method:'post',
			data: displayedQuantity,
			url:'https://asd4.ccs.neu.edu:8080/graduationyears',
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then(function(response) {
			dispatch(FilterActions.setDisplayedYears(response.data));
		})
		.catch(function (error) {
			console.log(error, " top years error");
		});
	}
}

export function setAllUndergraduateSchools(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/undergradschools',
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then(function(response) {
			dispatch(FilterActions.setAllUniversities(response.data));
		})
		.catch(function (error) {
			console.log(error, "all schools error");
		});
	}
}

export function setAllCoops(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/coops',
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then(function(response) {
			dispatch(FilterActions.setAllCoops(response.data));
		})
		.catch(function (error) {
			console.log(error, "all coops error");
		});
	}
}


export function setAllDegrees(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/undergradmajors',
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then(function(response) {
			dispatch(FilterActions.setAllDegrees(response.data));
		})
		.catch(function (error) {
			console.log(error, "all degrees error");
		});
	}
}

export function setAllGraduationYears(){
	return (dispatch, getState) => {
		axios({
			url:'https://asd4.ccs.neu.edu:8080/graduationyears',
			headers: {
				'Content-Type': 'text/plain'
			}
		})
		.then(function(response) {
			dispatch(FilterActions.setAllYears(response.data));
		})
		.catch(function (error) {
			console.log(error, "all years error");
		});
	}
}

export function setAllResults(data){
	return (dispatch, getState) => {
		axios({
			method:'post',
			data: data,
			url:'https://asd4.ccs.neu.edu:8080/students'
		})
		.then(function(response) {
			dispatch(FilterActions.setResults(response.data));
		})
		.catch(function (error) {
			console.log(error, "results error");
		});
	}
}

export function setGenderStats(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/gender'
		})
		.then(function(response) {
			dispatch(AggregateActions.setGenderStats(response.data));
		})
		.catch(function (error) {
			console.log(error, "results error");
		});
	}
}

export function setStateStats(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/state'
		})
		.then(function(response) {
			dispatch(AggregateActions.setStateStats(response.data));
		})
		.catch(function (error) {
			console.log(error, "results error");
		});
	}
}


export function setCampusStats(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/campus'
		})
		.then(function(response) {
			dispatch(AggregateActions.setCampusStats(response.data));
		})
		.catch(function (error) {
			console.log(error, "results error");
		});
	}
}

export function setScholarshipStats(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/scholarship'
		})
		.then(function(response) {
			dispatch(AggregateActions.setScholarshipStats(response.data));
		})
		.catch(function (error) {
			console.log(error, "results error");
		});
	}
}

export function setUndergradMajorStats(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/undergradmajor-percent'
		})
		.then(function(response) {
			dispatch(AggregateActions.setUndergradMajorStats(response.data));
		})
		.catch(function (error) {
			console.log(error, "results error");
		});
	}
}

export function setHighestEducationStats(){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/highest-education'
		})
		.then(function(response) {
			dispatch(AggregateActions.setHighestEducationStats(response.data));
		})
		.catch(function (error) {
			console.log(error, "results error");
		});
	}
}