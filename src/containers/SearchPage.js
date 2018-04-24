import React, { Component } from 'react';
import Footer from  '../components/footer';
import Header from '../components/header';
import Chatbot from '../components/chatbot';
import AggregateDataPanelContainer from '../containers/aggregate_data_panel_container'
import StudentFilterContainer from '../containers/student_filter_container';
import ResultPanelContainer from '../containers/result_panel_container';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
	setAllCoops, setAllGraduationYears, setAllDegrees, setAllUndergraduateSchools, setAllResults,
	setDisplayedCoops, setDisplayedGraduationYears, setDisplayedDegrees, setDisplayedUndergraduateSchools,
	setGenderStats, setStateStats, setCampusStats, setScholarshipStats, setUndergradMajorStats, setHighestEducationStats
} from '../actions/all_actions';

import { AppBar, Tabs, Tab, FloatingActionButton, Drawer } from 'material-ui';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';

class SearchPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 'a',
			navOpen: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleNavClose = this.handleNavClose.bind(this);
		this.handleNavToggle = this.handleNavToggle.bind(this);
	}

	componentDidMount(){
		// filter stuff
		this.props.setAllCoops();
		this.props.setAllGraduationYears();
		this.props.setAllDegrees();
		this.props.setAllUndergraduateSchools();
		this.props.setDisplayedCoops();
		this.props.setDisplayedGraduationYears();
		this.props.setDisplayedDegrees();
		this.props.setDisplayedUndergraduateSchools();

		let emptyInput =
		{
			BeginIndex:0,
			EndIndex:10000,
			Coops:[],
			UndergradDegree:[],
			UndergradSchool:[],
			GraduationYear:[],
		};

		this.props.setAllResults(emptyInput);

		// aggregate data
		this.props.setGenderStats();
		this.props.setStateStats();
		this.props.setCampusStats();
		this.props.setScholarshipStats();
		this.props.setUndergradMajorStats();
		this.props.setHighestEducationStats();
	}

	handleChange(value){
		this.setState({
			value: value
		});
	}

	handleNavToggle(){
		this.setState({navOpen: !this.state.navOpen});
	}

	handleNavClose(){
		this.setState({navOpen: false});
	}

	render() {
		const width = window.innerWidth;
		const isMobile = width < 600;

		let changeHandler = this.handleChange;
		let navToggleHandler = this.handleNavToggle;

		let filterFab = this.state.value === 'b' ?
		<FloatingActionButton 
			style={fabStyle}
			backgroundColor="#e11a2c"
			onClick={navToggleHandler}>
			<ContentFilterList />
		</FloatingActionButton> : <Chatbot/>;

		let header = isMobile ? 
		<AppBar
			title="Northeastern University - Align Program"
			showMenuIconButton={false}
			style={appBarStyle}
			titleStyle={appBarTitleStyle} /> 
		:
		<Header/>;

		return (
			<div id="main_div">
				<Drawer
					docked={false}
					width={320}
					open={this.state.navOpen}
					onRequestChange={(open) => this.setState({navOpen: open})} >
					<StudentFilterContainer />
				</Drawer>
				{header}
				<Tabs
					value={this.state.value}
					onChange={changeHandler} >
					<Tab 
					label="About the program" 
					value="a"
					style={tabStyle} >
						<div>
							<AggregateDataPanelContainer />
						</div>
					</Tab>
					<Tab 
					label="Find students like me" 
					value="b"
					style={tabStyle} >
						<div>
							<ResultPanelContainer />
							{filterFab}
						</div>
					</Tab>
				</Tabs>
				<Footer />
			</div>
		);
	}
}


const tabStyle = {backgroundColor: "#e11a2c", color:"#ffffff"};
const appBarStyle = {backgroundColor: "#e11a2c"};
const appBarTitleStyle = {fontFamily: '"HelveticaNeueW01-45Ligh", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif'};
const fabStyle = {position: "fixed", zIndex: "2", right: "10px", bottom: "10px"};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setAllCoops,
	setAllGraduationYears,
	setAllDegrees,
	setAllUndergraduateSchools, 
	setAllResults,
	setDisplayedCoops, 
	setDisplayedGraduationYears, 
	setDisplayedDegrees, 
	setDisplayedUndergraduateSchools, setGenderStats, setStateStats, setCampusStats, setScholarshipStats, setUndergradMajorStats, setHighestEducationStats
}, dispatch);


export default connect(null, mapDispatchToProps)(SearchPage);
