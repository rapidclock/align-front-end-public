import React, { Component } from 'react';
import Footer from  'components/footer.jsx';
import StudentResult from 'components/student_result.jsx';
import StudentFilterContainer from 'containers/student_filter_container.js';
import ResultPanel from 'components/result_panel.jsx';
import Header from 'components/header.jsx';

import * as FilterActions from 'redux/filter_actions';

import * as DummyStuff from 'containers/dummy_data.js';

import 'css/SearchPage.css';

const MOBILE_VIEW_WIDTH = 600;

class SearchPage extends Component {
	constructor(props) {
		super(props);

		console.log(this.state);

		this.getData();

		this.state = {
			width: window.innerWidth,
		};
	}

	getData(){
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

		var users = DummyStuff.getUsers();
		////////////////////////////////////////////////////////////
		//async calls to api go here////async calls to api go here//
		////////////////////////////////////////////////////////////

		const store = this.props.store;

		store.dispatch(FilterActions.setDisplayedCoops(displayedCoops));
		store.dispatch(FilterActions.setDisplayedDegrees(displayedDegrees));
		store.dispatch(FilterActions.setDisplayedUniversities(displayedUniversities));
		store.dispatch(FilterActions.setDisplayedYears(displayedYears));
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
						<ResultPanel/>
					</div>
				</div>
				<div>
					<Footer/>
				</div>
			</div>
		)

		const desktopView = (
			<div>
				<div>
				</div>
				<div id="main_container">
					<div id="filter_panel">
						<StudentFilterContainer
							isMobile={isMobile}
							submitHandler= {this.handleSubmit.bind(this)}/>
					</div>
					<div id="result_panel">
						<ResultPanel/>
						<Footer/>
					</div>
				</div>
				<div>

				</div>
			</div>
		);

		return isMobile ? mobileView : desktopView;
	}
}

export default SearchPage;
