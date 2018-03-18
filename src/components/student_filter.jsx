import React from 'react';
import FilterGroupContainer from 'containers/filter_group_container'
import FilterGroup from 'components/filter_group.jsx';
import 'css/StudentFilter.css'

class StudentFilter extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selCoops:'',
			selDegrees:'',
			selUni:'',
			selYears:''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event){
		//todo
		console.log(event.target);
		event.preventDefault();
	}

	handleChange(event){
		//todo
		console.log(event.target);
		event.preventDefault();
	}

	render(){
		//placeholder code
		var coop_title = "Coop";
		var degree_title = "Degree Subject";
		var uni_title = "Undergraduate University";
		var year_title = "Year";

		var coop_arr = ["Amazon", "Apple", "Google", "Microsoft"];
		var coop_checked = [false, false, false, false];
		var coop_quant = [13, 10, 9, 6];

		var degree_arr = ["Business", "Chemistry", "Politics", "Public Relations"];
		var degree_checked = [false, false, false, false];
		var degree_quant = [13, 10, 9, 6];

		var uni_arr = ["GWU", "JWU", "NEU", "Yale"];
		var uni_checked = [false, false, false, false];
		var uni_quant = [13, 10, 9, 6];

		var year_arr = ["2014", "2015", "2016", "2017", "2018"];
		var year_checked = [false, false, false, false, false];
		var year_quant = [13, 10, 9, 6, 3];

		return(
			<div id="filter_container">
				<div id="filter_above_fold">
					<a className="filter_header_title">Filter Students</a>
				</div>
				<hr/>
				<form 
					id="filter_below_fold" 
					onSubmit={this.handleSubmit}>
					<FilterGroupContainer
						name="coop_filter_group"
						title={coop_title}
						item_arr={coop_arr}
						checked={coop_checked}
						quantity={coop_quant}
					/>
					<FilterGroupContainer
						name="degree_filter_group"
						title={degree_title}
						item_arr={degree_arr}
						checked={degree_checked}
						quantity={degree_quant}
					/>
					<FilterGroupContainer
					  	name="uni_filter_group"
						title={uni_title}
						item_arr={uni_arr}
						checked={uni_checked}
						quantity={uni_quant}
					/>
					<FilterGroupContainer
					  name="year_filter_group"
						title={year_title}
						item_arr={year_arr}
						checked={year_checked}
						quantity={year_quant}
					/>
					<input 
						type="submit" 
						value="Update" />
				</form>
			</div>
		);
	}
}

export default StudentFilter;