import React from 'react';
import FilterGroupContainer from '../containers/filter_group_container';
import '../containers/css/StudentFilter.css';

import { RaisedButton } from 'material-ui';

class StudentFilter extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selCoops:'',
			selDegrees:'',
			selUni:'',
			selYears:'',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		var params = 
		{
			BeginIndex:0,
			EndIndex:10000,
			Coops:this.props.selected.selectedCoops,
			UndergradDegree:this.props.selected.selectedDegrees,
			UndergradSchool:this.props.selected.selectedUniversities,
			GraduationYear:this.props.selected.selectedYears,
		}

		this.forceUpdate();

		console.log(params, "params");
		this.props.setAllResults(params);
	}

	render(){
		var submitHandler = this.handleSubmit;

		var coop_title = "Coop";
		var degree_title = "Degree Subject";
		var uni_title = "Undergraduate University";
		var year_title = "Year";

		var filterContent = (
			<div id="filter_below_fold">
				<FilterGroupContainer
					name="coop_filter_group"
					title={coop_title}
					displayed={this.props.displayed.displayedCoops}
					all_items={this.props.displayed.allCoops}
				/>
				<FilterGroupContainer
					name="degree_filter_group"
					title={degree_title}
					displayed={this.props.displayed.displayedDegrees}
					all_items={this.props.displayed.allDegrees}
				/>
				<FilterGroupContainer
					name="uni_filter_group"
					title={uni_title}
					displayed={this.props.displayed.displayedUniversities}
					all_items={this.props.displayed.allUniversities}
				/>
				<FilterGroupContainer
					name="year_filter_group"
					title={year_title}
					displayed={this.props.displayed.displayedYears}
					all_items={this.props.displayed.allYears}
				/>
			</div>
		)

		var desktopView = (
			<div id="filter_container">
				<div id="filter_above_fold">
					<a className="filter_header_title">
						Filter Students
					</a>
				</div>
				<hr />
				<div id="filter_contents_container">
					{filterContent}
					<RaisedButton
						backgroundColor="#e11a2c"
						labelColor="#ffffff"
						onClick={submitHandler}
						label="Update">
					</RaisedButton>
				</div>
			</div>
		);
		return desktopView;
	}
}

export default StudentFilter;
