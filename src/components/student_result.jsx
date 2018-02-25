import React from 'react';
import ProfilePlaceholder from 'images/profile_placeholder.png';
import 'css/StudentResult.css';

class StudentResult extends React.Component {
	constructor(props){
		super(props);

		this.state = {name:'DefaultName',
								  image:ProfilePlaceholder,
		              coop:'Default Coop',
		              undergrad:'Default Degree',
		              location:'Default University',
		              year:'2016-2018'};
	}

	render() {
		return(
			<div id="student_result_container">
				<div id="student_above_fold">
					<img className="profile_picture" src={ProfilePlaceholder}>
					</img>
					<br/>
					<a className="student_name"> {this.state.name}
					</a>
				</div>
				<hr/>
				<div id="student_below_fold">
					<br/>
					<a className="student_label"> Coop
					</a>
					<br/>
					<a className="student_field"> {this.state.coop}
					</a>
					<br/>
					<a className="student_label"> Undergrad Degree
					</a>
					<br/>
					<a className="student_field"> {this.state.undergrad}
					</a>
					<br/>
					<a className="student_label"> Location
					</a>
					<br/>
					<a className="student_field"> {this.state.location}
					</a>
					<br/>
					<a className="student_label"> Year
					</a>
					<br/>
					<a className="student_field"> {this.state.year}
					</a>
				</div>
			</div>	
		);
	}
}

export default StudentResult;