import React, { Component } from 'react';
import Footer from  'components/footer.jsx';
import StudentFilterContainer from 'containers/student_filter_container.js';
import ResultPanel from 'components/result_panel.jsx';

import * as FilterActions from 'redux/filter_actions';
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
	}

	getData(){
		const store = this.props.store;
		var results = "10";

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

		axios.get('http://129.10.111.210:8080/coops', config)
		.then(function (response) {
			console.log(response, "all coops");
			store.dispatch(FilterActions.setAllCoops(response.data));
		})
		.catch(function (error) {
			console.log(error, "all coops");
		});
	}

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
					title="ask questions"
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
