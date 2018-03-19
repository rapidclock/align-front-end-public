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
      selYears:'',
			isExpand: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleExpand = this.handleExpand.bind(this);
	}

	handleSubmit(event){
		//todo
		console.log(event.target);
		event.preventDefault();
		this.setState({
			isExpand: false,
		})
	}

	handleChange(event){
		//todo
		console.log(event.target);
		event.preventDefault();
	}

	handleExpand() {
		this.setState({
			isExpand: !this.state.isExpand,
		});
	}

	render(){
		const {isMobile} = this.props;
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

		const filterContent = (
			<form id="filter_below_fold" onSubmit={this.handleSubmit}>
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
				<input type="submit" value="Update" />
			</form>
		)

		const mobileView = (
			<div id="filter_container_mobile">
				<div id="filter_above_fold_mobile">
					{this.state.isExpand ? (
						<button
							className="filter_header_title_mobile filter_header_title_mobile_expand"
							onClick={this.handleExpand}
						>
							Filter Students
							<svg fill="black" height="24" viewBox="0 0 24 24" width="24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
								<path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</button>
					) : (
						<button className="filter_header_title_mobile" onClick={this.handleExpand}>
							Filter Students
							<svg fill="white" height="24" viewBox="0 0 24 24" width="24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
								<path d="M0 0h24v24H0z" fill="none"/>
							</svg>
						</button>
					)}
				</div>
				{
					this.state.isExpand ? (
						<div id="filter_contents_container_mobile">
							{filterContent}
						</div>
					) : null
				}
			</div>
		)

		const desktopView = (
			<div id="filter_container">
				<div id="filter_above_fold">
					<a className="filter_header_title">
						Filter Students
					</a>
				</div>
				<hr />
				<div id="filter_contents_container">
					{filterContent}
				</div>
			</div>
		);
		return isMobile ? mobileView : desktopView;
	}
}

export default StudentFilter;
