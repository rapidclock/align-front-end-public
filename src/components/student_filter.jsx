import React from 'react';
import FilterGroupContainer from 'containers/filter_group_container';
import 'css/StudentFilter.css';

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
		this.handleExpand = this.handleExpand.bind(this);
	}

	handleSubmit(event){
		this.props.submitHandler();

		this.forceUpdate();
		this.setState({
			isExpand: false,
		});
	}

	handleExpand() {
		this.setState((prevState) => {
			return ({
				isExpand: !prevState.isExpand
			});
		});
	}

	render(){
		var submitHandler = this.handleSubmit;

		const {isMobile} = this.props;
		//placeholder code
		var coop_title = "Coop";
		var degree_title = "Degree Subject";
		var uni_title = "Undergraduate University";
		var year_title = "Year";

		var coop_arr = this.props.displayed.displayedCoops;
		var degree_arr = this.props.displayed.displayedDegrees;
		var uni_arr = this.props.displayed.displayedUniversities;
		var year_arr = this.props.displayed.displayedYears;


		const filterContent = (
			<div id="filter_below_fold">
				<FilterGroupContainer
					name="coop_filter_group"
					all={this.props.displayed.allCoops}
					title={coop_title}
					item_arr={coop_arr}
				/>
				<FilterGroupContainer
					name="degree_filter_group"
					all={this.props.displayed.allDegrees}
					title={degree_title}
					item_arr={degree_arr}
				/>
				<FilterGroupContainer
					name="uni_filter_group"
					all={this.props.displayed.allUniversities}
					title={uni_title}
					item_arr={uni_arr}
				/>
				<FilterGroupContainer
					name="year_filter_group"
					all={this.props.displayed.allYears}
					title={year_title}
					item_arr={year_arr}
				/>
			</div>
		)

		const mobileView = (
			<div id="filter_container_mobile">
				<div id="filter_above_fold_mobile">
					{this.state.isExpand ? (
						<button
							className="filter_header_title_mobile"
							onClick={this.handleExpand}>
							Students Like Me
							<a className='filter_label_mobile'>
								<svg fill="#615445" height="20" viewBox="0 0 24 24" width="24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
									<path d="M0 0h24v24H0z" fill="none"/>
								</svg>
							</a>
						</button>
					) : (
						<button className="filter_header_title_mobile" >
							Students Like Me
							<a className='filter_label_mobile' onClick={this.handleExpand}>
								<svg fill="white" height="20" viewBox="0 0 24 24" width="24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
									<path d="M0 0h24v24H0z" fill="none"/>
								</svg>
							</a>
						</button>
					)}
				</div>
				{
					this.state.isExpand ? (
						<div>
							<div id="filter_contents_container_mobile">
								<div className="filter_items_mobile">{filterContent}</div>
								<div className="filter_submit_botton_mobile">
									<button
										className="button_mobile"
										type="button"
										onClick={submitHandler}>
										Update
									</button>
								</div>
							</div>
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
					<button
						type="button"
						onClick={submitHandler}>
						Update
					</button>
				</div>
			</div>
		);
		return isMobile ? mobileView : desktopView;
	}
}

export default StudentFilter;
