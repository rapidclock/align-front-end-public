import React, { Component } from 'react';
import Footer from  'components/footer.jsx';
import StudentFilterContainer from 'containers/student_filter_container.js';
import ResultPanel from 'components/result_panel.jsx';

import * as FilterActions from 'redux/filter_actions';

import * as DummyStuff from 'containers/dummy_data.js';
import axios from 'axios';

import 'css/SearchPage.css';

const MOBILE_VIEW_WIDTH = 600;

const config  = {
	timeout: 1000,
	"Content-Type": "application/json"
}

class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.getData();

		this.state = {
			width: window.innerWidth,
		};

		//console.log(document.getElementById("chatbot"));
	}

	getData(){
		const store = this.props.store;

		////////////////////////////////////////////////////////////
		//async calls to api go here////async calls to api go here//
		////////////////////////////////////////////////////////////
		var displayedCoops = DummyStuff.getTopCoops().coops;
		var displayedDegrees = DummyStuff.getTopDegrees().undergraddegrees;
		var displayedUniversities = DummyStuff.getTopUniversities().undergradschools;
		var displayedYears = DummyStuff.getTopYears().graduationyears;

		var selectedCoops = {};
		var selectedDegrees = {};
		var selectedUniversities = {};
		var selectedYears = {};

		let allCoops = DummyStuff.getAllCoops().coops;
		var allDegrees = DummyStuff.getAllDegrees().undergraddegrees;
		var allUniversities = DummyStuff.getAllUniversities().undergradschools;
		var allYears = DummyStuff.getAllYears().graduationyears;

		var users = DummyStuff.getUsers();
		////////////////////////////////////////////////////////////
		//async calls to api go here////async calls to api go here//
		////////////////////////////////////////////////////////////

		var results = "4";

		axios({
			method:'post',
			data: results,
			url:'http://129.10.111.210:8080/undergradschools',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(function(response) {
			store.dispatch(FilterActions.setDisplayedUniversities(response.data));
			console.log(response, "top schools");
		})
		.catch(function (error) {
			console.log(error, " top schools error");
		});

		axios({
			method:'post',
			data: results,
			url:'http://129.10.111.210:8080/coops',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(function(response) {
			store.dispatch(FilterActions.setDisplayedCoops(response.data));
			console.log(response, "top coops");
		})
		.catch(function (error) {
			console.log(error, " top coops error");
		});

		axios({
			method:'post',
			data: results,
			url:'http://129.10.111.210:8080/undergradmajors',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(function(response) {
			store.dispatch(FilterActions.setDisplayedDegrees(response.data));
			console.log(response, "top undergradmajors");
		})
		.catch(function (error) {
			console.log(error, " top majors error");
		});

		axios({
			method:'post',
			data: results,
			url:'http://129.10.111.210:8080/graduationyears',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(function(response) {
			store.dispatch(FilterActions.setDisplayedYears(response.data));
			console.log(response, "top graduationyears");
		})
		.catch(function (error) {
			console.log(error, " top graduationyears error");
		});


		axios.get('http://129.10.111.210:8080/undergradschools', config)
		.then(function (response) {
			console.log(response, "all schools");
			store.dispatch(FilterActions.setAllUniversities(response.data));
		})
		.catch(function (error) {
			console.log(error, "all schools");
		});

		axios.get('http://129.10.111.210:8080/coops', config)
		.then(function (response) {
			console.log(response, "all coops");
			store.dispatch(FilterActions.setAllCoops(response.data));
		})
		.catch(function (error) {
			console.log(error, "all coops");
		});

		axios.get('http://129.10.111.210:8080/undergradmajors', config)
		.then(function (response) {
			console.log(response, "all majors");
			store.dispatch(FilterActions.setAllDegrees(response.data));
		})
		.catch(function (error) {
			console.log(error, "all degrees");
		});

		axios.get('http://129.10.111.210:8080/graduationyears', config)
		.then(function (response) {
			console.log(response, "all years");
			store.dispatch(FilterActions.setAllYears(response.data));
		})
		.catch(function (error) {
			console.log(error, "all years");
		});
	}


	/*
	getTopSchools(){
		return axios.post('http://asd2.ccs.neu.edu:8080/top-undergradschools',{},config);
	}

	getTopCoops(){
		return axios.post('http://asd2.ccs.neu.edu:8080/top-coops',{},config);
	}

	getTopDegrees(){
		return axios.post('http://asd2.ccs.neu.edu:8080/top-undergraddegrees',{},config);
	}

	getTopYears(){
		return axios.post('http://asd2.ccs.neu.edu:8080/top-graduationyears',{},config);
	}
	*/


	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	handleSubmit(){
	}

	render() {
		const {width} = this.state;
		const isMobile = width < MOBILE_VIEW_WIDTH;

		const mobileView = (
			<div>
				<div id="main_container">
					<div id="filter_panel_mobile">
						<StudentFilterContainer
							isMobile={isMobile}
							submitHandler= {this.handleSubmit.bind(this)}/>
					</div>
					<div id="result_panel_mobile">
						<ResultPanel isMobile={isMobile}/>
					</div>
				</div>
				<div>
					<Footer/>
				</div>
			</div>
		)

		const desktopView = (
			<div>
				<div id="main_container">
					<div id="filter_panel">
						<StudentFilterContainer
							isMobile={isMobile}
							submitHandler= {this.handleSubmit.bind(this)}/>
					</div>
					<div id="result_panel">
						<ResultPanel isMobile={isMobile}/>
						<Footer />
					</div>
				</div>
				<iframe
					id="chatbot"
					width="350"
					height="430"
					src="https://console.dialogflow.com/api-client/demo/embedded/align-bot-test-web-demo">
				</iframe>
			</div>
		);

		return isMobile ? mobileView : desktopView;
	}
}

export default SearchPage;
